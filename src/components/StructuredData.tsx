/**
 * React component to inject structured data (JSON-LD) into the page for SEO
 */
export const StructuredData = ({ data }: { data: any }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
