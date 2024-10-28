export default defineAppConfig({
  awesome: {
    name: 'Nuxt blog app',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/Argus416/nuxt-init',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Accueil', to: { name: 'accueil' } },
            { type: 'link', title: 'Acteurs', to: { name: 'acteurs' } },
            { type: 'link', title: 'Films', to: { name: 'films' } },
            { type: 'link', title: 'Series', to: { name: 'series' } },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  },
})
