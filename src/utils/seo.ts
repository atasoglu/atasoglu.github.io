export interface SEOConfig {
  title: string;
  description: string;
  canonicalURL?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export function generateSEOTags(config: SEOConfig) {
  const {
    title,
    description,
    canonicalURL,
    ogImage,
    twitterCard = 'summary_large_image',
    noindex = false,
  } = config;

  const tags = [
    { tag: 'title', content: title },
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { name: 'keywords', content: 'portfolio, developer, web developer, full stack developer' } },
    { tag: 'meta', attrs: { name: 'author', content: 'Lorem Ipsum' } },
    { tag: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
    { tag: 'meta', attrs: { charset: 'utf-8' } },
  ];

  if (noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } });
  }

  if (canonicalURL) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: canonicalURL } });
  }

  // Open Graph tags
  tags.push(
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } }
  );

  if (canonicalURL) {
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: canonicalURL } });
  }

  if (ogImage) {
    tags.push({ tag: 'meta', attrs: { property: 'og:image', content: ogImage } });
  }

  // Twitter Card tags
  tags.push(
    { tag: 'meta', attrs: { name: 'twitter:card', content: twitterCard } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: description } }
  );

  if (ogImage) {
    tags.push({ tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } });
  }

  return tags;
}

export function generateStructuredData(personalData: any, siteUrl: string) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalData.name,
    jobTitle: personalData.title,
    description: personalData.bio,
    url: personalData.website || siteUrl,
    sameAs: [
      personalData.github ? `https://github.com/${personalData.github}` : null,
      personalData.linkedin || null,
      personalData.twitter ? `https://twitter.com/${personalData.twitter.replace('@', '')}` : null,
    ].filter(Boolean),
    email: personalData.email || undefined,
    address: personalData.location
      ? {
          '@type': 'PostalAddress',
          addressLocality: personalData.location,
        }
      : undefined,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${personalData.name} - Portfolio`,
    url: siteUrl,
    description: personalData.bio,
    author: {
      '@type': 'Person',
      name: personalData.name,
    },
  };

  return {
    person: personSchema,
    website: websiteSchema,
  };
}
