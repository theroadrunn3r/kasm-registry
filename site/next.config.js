/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Aorus',
    description: 'The unofficial store for Kasm supported workspaces by Aorus.',
    icon: '/img/logo.svg',
    listUrl: 'https://theroadrunn3r.github.io/kasm-registry/',
    contactUrl: 'https://theroadrunn3r.github.io',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
