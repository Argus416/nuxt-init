export default defineAppConfig({
  awesome: {
    name: 'Nuxt todo app',
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
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'New post', to: { name: 'new-post' } },
            // {
            //   type: 'dropdown',
            //   title: 'Documentations',
            //   children: [
            //     {
            //       type: 'link',
            //       title: 'Components',
            //       to: { name: 'docs-components' },
            //     },
            //   ],
            // },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
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
