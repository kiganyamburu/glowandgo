/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/services', destination: '/' },
      { source: '/menu', destination: '/' },
      { source: '/lash-menu', destination: '/' },
      { source: '/pricing', destination: '/' },
      { source: '/booking', destination: '/book' },
      { source: '/lookbook', destination: '/gallery' },
      { source: '/contact', destination: '/about' },
    ];
  },
};

export default nextConfig;
