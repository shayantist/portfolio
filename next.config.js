const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  assetPrefix: ghPages ? "/schowdhury8.github.io/" : "", // customize this value
};
