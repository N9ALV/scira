import type { NextConfig } from 'next';
import './env/server';
import './env/client';

const nextConfig: NextConfig = {
    compiler: {
        // if NODE_ENV is production, remove console.log
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error'],
        } : false,
    },
    experimental: {
        optimizePackageImports: ["@phosphor-icons/react"],
        nodeMiddleware: true,
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    transpilePackages: ["geist"],
    output: 'standalone',
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/ph',
                destination: 'https://www.producthunt.com/posts/scira',
                permanent: true,
            },
            {
                source: '/raycast',
                destination: 'https://www.raycast.com/zaidmukaddam/scira',
                permanent: true,
            }
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'www.google.com',
                port: '',
                pathname: '/s2/favicons',
            },
            {
                protocol: 'https',
                hostname: 'api.producthunt.com',
                port: '',
                pathname: '/widgets/embed-image/v1/featured.svg',
            },
            {
                protocol: 'https',
                hostname: 'metwm7frkvew6tn1.public.blob.vercel-storage.com',
                port: '',
                pathname: "**"
            },
            // upload.wikimedia.org
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '**'
            },
            // media.theresanaiforthat.com
            {
                protocol: 'https',
                hostname: 'media.theresanaiforthat.com',
                port: '',
                pathname: '**'
            },
            // www.uneed.best
            {
                protocol: 'https',
                hostname: 'www.uneed.best',
                port: '',
                pathname: '**'
            },
            // image.tmdb.org
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/original/**'
            },
            // image.tmdb.org
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/**'
            },
        ]
    },
};

export default nextConfig;