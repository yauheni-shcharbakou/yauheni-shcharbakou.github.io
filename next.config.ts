import type { NextConfig } from 'next';

const IS_CI = !!process.env.GITHUB_ENV || process.env.CI === 'true';

const nextConfig: NextConfig = {
  output: IS_CI ? 'export' : 'standalone',
  trailingSlash: true,
  distDir: 'dist',
};

export default nextConfig;
