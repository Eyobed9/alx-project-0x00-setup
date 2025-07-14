import type { NextConfig } from 'next';
import type { Configuration} from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration, { dev }) {
    if (dev && config.watchOptions) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
	
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
