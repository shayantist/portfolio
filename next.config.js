module.exports = {
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
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
};
