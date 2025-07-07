module.exports = {
  images: {
    domains: ["www.shayanchowdhury.com"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://docs.google.com/gview?url=https://www.shayanchowdhury.com/docs/Shayan%20Chowdhury%20-%20Resume.pdf",
        permanent: false,
      },
    ];
  },
  compiler: {
    emotion: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/api/:path*"
            : "/api/",
      },
    ];
  },
};
