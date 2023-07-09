const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://gy1dkgq8cl.execute-api.us-west-2.amazonaws.com/authentication-beta',
      changeOrigin: true,
    })
  );
};