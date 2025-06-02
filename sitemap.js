const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.billingcaresolutions.com' });

  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  // Add your static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/why-bcs/', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/services/', changefreq: 'monthly' });
  sitemap.write({ url: '/faqs/', changefreq: 'monthly' });
  sitemap.write({ url: '/contact/', changefreq: 'monthly' });
  sitemap.write({ url: '/blogs/', changefreq: 'weekly' });
  sitemap.write({ url: '/privacy-policy/', changefreq: 'yearly' });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ XML Sitemap generated at /public/sitemap.xml');
}

generateSitemap();
