/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { dev }) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    // if (!dev) {
    //   rules.forEach((rule) => {
    //     rule.use.forEach((moduleLoader) => {
    //       if (
    //         moduleLoader.loader?.includes("css-loader") &&
    //         !moduleLoader.loader?.includes("postcss-loader")
    //       ) {
    //         // eslint-disable-next-line no-param-reassign
    //         moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
    //       }
    //     });
    //   });
    // }

    if (dev) {
      // eslint-disable-next-line no-param-reassign
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
