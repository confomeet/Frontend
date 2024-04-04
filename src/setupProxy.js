const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/meet/api',
        createProxyMiddleware({
            target: "http://127.0.0.1:5000",
            changeOrigin: true,
            pathRewrite: {
                '^/meet/api/': '/api/',
            },
            xfwd: true,
            onProxyReq: (clientReq, req) => {
                clientReq.setHeader('X-Forwarded-Prefix', '/meet');
            },
        })
    );
}
