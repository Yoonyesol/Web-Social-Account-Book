const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    //미들웨어 사용할때 씀
    //"/hello로 요청이 들어오면 proxy 미들웨어 실행"
    "/hello",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    }),
  );
};
