import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const defaultMeta = {
  title: 'SPHURAN 4.0 | 2026',
  description: 'SPHURAN 4.0 - Annual technical festival by Electrical Engineers\' Society, IIEST Shibpur. Featuring competitive coding, circuit design, quiz competitions, case studies & more. March 1-2, 2026.',
  keywords: 'SPHURAN, SPHURAN 4.0, IIEST Shibpur, Electrical Engineering fest, technical festival, EES IIEST, college fest Shibpur, engineering events, coding competition, circuit design, Electroquip, Howrah technical fest, West Bengal college fest',
  image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770880076/og-sphuran_lnd2mq.png',
  url: 'https://sphuran.eesiiests.org/',
  type: 'website',
};

export const SEO = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title === defaultMeta.title ? title : `${title} | SPHURAN 4.0`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="SPHURAN 4.0" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SPHURAN" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
