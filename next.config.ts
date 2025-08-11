import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', 
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'images.unsplash.com', // The domain for Unsplash images
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
