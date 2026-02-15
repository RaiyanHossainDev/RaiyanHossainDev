/** @type {import('next').NextConfig} */
import { i18n } from './next-i18next.config.mjs';

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  i18n,
};

export default nextConfig;
