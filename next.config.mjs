/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "aceternity.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                port: "",
                pathname: "/**",
            }
        ],
    }
};

export default nextConfig;
