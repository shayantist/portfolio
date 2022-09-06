module.exports = {
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/docs/Shayan%20Chowdhury%20-%20Resume.pdf",
        permanent: false,
      },
    ];
  },
};
