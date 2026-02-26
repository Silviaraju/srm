/* eslint-env node */

const repo = 'srm';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,

  // GitHub Pages can't run Next image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {protocol: 'https', hostname: 'images.unsplash.com'},
      {protocol: 'https', hostname: 'source.unsplash.com'},
    ],
  },

  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(
      rule => rule.test && rule.test.toString().includes('tsx|ts')
    );
    tsRules.forEach(rule => {
      rule.include = undefined;
    });
    return config;
  },

  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
