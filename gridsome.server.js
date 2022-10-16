
module.exports = async function (api) {
  api.createPages(async ({ createPage, graphql }) => {

    const global = {
      email: 'martijn@pinelab.studio',
      phone: '06 22 03 79 28',
      vat: 'NL003062075B68',
      coc: 76205436,
      github: 'https://github.com/Pinelab-studio'
    }

    createPage({
      path: '/',
      component: './src/templates/Index.vue',
      context: {
        ...global
      },
    });

    createPage({
      path: '/contact/',
      component: './src/templates/Contact.vue',
      context: {
        ...global
      },
    });

  });
};
