import { Helmet } from "react-helmet-async";

export interface SEOProductOffer {
  /** Price as a string, e.g. "9.99" */
  price: string;
  /** ISO 4217 currency code */
  priceCurrency?: string;
  /** Stock-keeping unit */
  sku: string;
  /** Manufacturer part number */
  mpn?: string;
  /** Product name (defaults to title) */
  name?: string;
  /** Long-form product description (defaults to description) */
  description?: string;
  /** Brand name */
  brand?: string;
  /** Product category */
  category?: string;
  /** Number of days the merchant accepts returns */
  returnDays?: number;
  /** ISO 8601 date the price is valid until, e.g. "2026-12-31" */
  priceValidUntil?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  /** Absolute canonical URL for this page */
  canonical: string;
  /** Absolute URL to the social preview image (1200x630 recommended) */
  ogImage?: string;
  ogImageAlt?: string;
  /** "website" | "article" | "product" — defaults to "website" */
  ogType?: string;
  /** Site/brand name shown in OG cards */
  siteName?: string;
  /** Twitter handle, including @ */
  twitterSite?: string;
  /** Locale, e.g. "en_US" */
  locale?: string;
  /** "index, follow" by default */
  robots?: string;
  /** Optional Product structured data */
  product?: SEOProductOffer;
}

/**
 * Reusable per-route SEO block. Renders <title>, description, canonical,
 * Open Graph + Twitter cards, and optional Product JSON-LD via Helmet so each
 * route can override the defaults baked into index.html.
 */
export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  ogType = "website",
  siteName = "The Knockout Automations",
  twitterSite,
  locale = "en_US",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  product,
}: SEOProps) => {
  const productLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name ?? title,
        description: product.description ?? description,
        ...(product.brand && {
          brand: { "@type": "Brand", name: product.brand },
        }),
        sku: product.sku,
        ...(product.mpn && { mpn: product.mpn }),
        ...(product.category && { category: product.category }),
        ...(ogImage && { image: ogImage }),
        offers: {
          "@type": "Offer",
          url: canonical,
          price: product.price,
          priceCurrency: product.priceCurrency ?? "USD",
          availability: "https://schema.org/InStock",
          ...(product.priceValidUntil && {
            priceValidUntil: product.priceValidUntil,
          }),
          ...(product.returnDays && {
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory:
                "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: product.returnDays,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/FreeReturn",
            },
          }),
        },
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}
      {ogImage && ogImageAlt && (
        <meta property="og:image:alt" content={ogImageAlt} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}

      {productLd && (
        <script type="application/ld+json">{JSON.stringify(productLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
