export {};

declare global {
  interface ClarityFn {
    (...args: any[]): void;
    q?: any[];
  }

  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    clarity: ClarityFn;
    dataLayer: any[];
    _fbq?: any;
  }
}
