
module.exports = async function (api) {
  api.createPages(async ({ createPage, graphql }) => {

    createPage({
      path: '/',
      component: './src/templates/Index.vue',
      context: {
      },
    });

  });
};
