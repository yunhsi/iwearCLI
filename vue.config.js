module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      const [obj] = args;
      obj.title = "!Wear";
      obj.meta = {
        keyword: "眼鏡電商網站",
        description: "眼鏡電商",
      };
      return args;
    });
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  },
};
