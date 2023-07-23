const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://2iok7z4zl8.execute-api.us-west-2.amazonaws.com/dev',
      changeOrigin: true,
    })
  );
};