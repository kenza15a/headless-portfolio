/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kenza-web.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
