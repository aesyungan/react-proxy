const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/api/', // remplazo de endpoint que se usara en la app
        {
            target: 'https://a.4cdn.org/',//URL del api 
            changeOrigin: true,
        }
    ));
}