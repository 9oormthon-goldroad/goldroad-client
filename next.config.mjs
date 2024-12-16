/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'svg-inline-loader'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.newsjeju.net', port: '', pathname: '/news/thumbnail/**' },
    ],
  },
};

export default nextConfig;
