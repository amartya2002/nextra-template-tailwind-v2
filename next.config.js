const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
  });

  const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/nextra-template-tailwind-v2" : "";

  module.exports = {
    ...withNextra(),
    images: {
      unoptimized: true,
    },
    
    trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,

  };
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })