module.exports = ({ env }) => ({
    
    upload: {
        config: {
          sizeLimit: 250 * 1024 * 1024,
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },

      'import-export-entries': {
        enabled: true,
        config: {
          // See `Config` section.
           /**
       * Public hostname of the server.
       *
       * If you use the local provider to persist medias,
       * `serverPublicHostname` should be set to properly export media urls.
       */
      serverPublicHostname: 'https://lobster-app-6xzrh.ondigitalocean.app/', // default: "".
        },
      },
});