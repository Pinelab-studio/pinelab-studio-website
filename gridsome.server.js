
module.exports = async function (api) {
  api.createPages(async ({ createPage, graphql }) => {

    const global = {
      email: 'martijn@pinelab.studio',
      phone: '+31622037928',
      vat: 'NL003062075B68',
      coc: 76205436,
      github: 'https://github.com/Pinelab-studio',
      calendly: 'https://calendly.com/pinelab-martijn/how-can-we-help'
    }

    createPage({
      path: '/',
      component: './src/templates/Index.vue',
      context: {
        ...global
      },
    });
    
    createPage({
      path: '/maintenance-pricing/',
      component: './src/templates/Maintenance.vue',
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

    createPage({
      path: '/404/',
      component: './src/templates/404.vue',
      context: {
        ...global
      },
    });

  });
};
