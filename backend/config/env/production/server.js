// module.exports = ({ env }) => ({
//     proxy: true,
//     url: env('STRAPI_URL'), // Sets the public URL of the application.
//     app: {
//         keys: env.array('APP_KEYS')
//     },
// });
module.exports = ({ env }) => ({
    proxy: true,
    url: env('STRAPI_URL'), // Sets the public URL of the application.
    app: {
        keys: env.array('APP_KEYS'),
    },
    httpServerOptions: {
        requestTimeout: 30 * 60 * 1000, // Timeout set to 30 minutes
    },
});