export async function loader() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://wenbin.dev/</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://wenbin.dev/experience</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>yearly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://wenbin.dev/contact</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>yearly</changefreq>
            <priority>0.3</priority>
        </url>
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", // Cache for a day
    },
  });
}
