/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dev-allenwp.pantheonsite.io'],
  },
  i18n: {
    locales: ['en', 'zh_HK'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
