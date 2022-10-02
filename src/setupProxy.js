const { createProxyMiddleware:proxy } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
      proxy("/dapi", {
        target: "http://8i98.com",
        secure: false,
        changeOrigin: true,
      })
    )
  }
  