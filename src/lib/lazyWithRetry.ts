import { lazy, type ComponentType } from "react";

/**
 * Wraps React.lazy with retry + cache-busting reload to recover from
 * "Failed to fetch dynamically imported module" errors that happen when
 * a new deploy invalidates chunk hashes a user still has cached.
 */
const SESSION_KEY = "lovable:chunk-reload";

export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  retries = 2,
  intervalMs = 500,
): ReturnType<typeof lazy> {
  return lazy(async () => {
    try {
      const mod = await factory();
      // Successful load — clear the one-shot reload guard
      try {
        window.sessionStorage.removeItem(SESSION_KEY);
      } catch {
        /* ignore storage errors */
      }
      return mod;
    } catch (err) {
      // Retry a couple of times for transient network blips
      for (let i = 0; i < retries; i++) {
        try {
          await new Promise((r) => setTimeout(r, intervalMs * (i + 1)));
          const mod = await factory();
          return mod;
        } catch {
          /* keep trying */
        }
      }

      // Likely a stale chunk hash after a new deploy — force one hard reload.
      const message = err instanceof Error ? err.message : String(err);
      const isChunkError =
        /Failed to fetch dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk \d+ failed/i.test(
          message,
        );

      if (isChunkError && typeof window !== "undefined") {
        let alreadyReloaded = false;
        try {
          alreadyReloaded = window.sessionStorage.getItem(SESSION_KEY) === "1";
          window.sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        if (!alreadyReloaded) {
          window.location.reload();
          // Return a never-resolving promise so React doesn't render the error
          // before the reload happens.
          return new Promise<{ default: T }>(() => {});
        }
      }

      throw err;
    }
  });
}
