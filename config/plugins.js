module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'deploy-plugin': {
    enabled: env('DEPLOYMENT_ENABLED'),
    resolve: './src/plugins/deploy-plugin',
    config: {
      post_url: env('DEPLOYMENT_URL'),
      button_text: env('DEPLOYMENT_BUTTON_TEXT'),
      result_text: env('DEPLOYMENT_RESULT_TEXT')
    }
  }
});
