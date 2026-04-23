import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const STARTER_PROJECT = "wg6uce93bv";
const MAIN_PROJECT = "vwdetpdxnz";

const loaded = new Set<string>();

function injectClarity(projectId: string) {
  if (loaded.has(projectId)) return;
  loaded.add(projectId);

  // Standard Microsoft Clarity inline loader
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function (...args: any[]) {
        (c[a].q = c[a].q || []).push(args);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", projectId);
}

const ClarityLoader = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isStarter = pathname === "/starter" || pathname.startsWith("/starter/");
    const projectId = isStarter ? STARTER_PROJECT : MAIN_PROJECT;
    injectClarity(projectId);
  }, [pathname]);

  return null;
};

export default ClarityLoader;
