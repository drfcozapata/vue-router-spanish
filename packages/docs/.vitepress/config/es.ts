import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = 'https://vue-router-es.netlify.com'
export const META_TITLE = 'Vue Router'
export const META_DESCRIPTION = 'El Router oficial para Vue.js'

export const esConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/router/edit/main/packages/docs/:path',
      text: 'Sugiere cambios a esta página',
    },

    nav: [
      // { text: 'Config', link: '/config/' },
      // { text: 'Plugins', link: '/plugins/' },
      {
        text: 'Guía',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      { text: 'API', link: '/api/', activeMatch: '^/api/' },
      {
        text: 'v4.x',
        items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
      },
      {
        text: 'Enlaces',
        items: [
          {
            text: 'Discusiones',
            link: 'https://github.com/vuejs/router/discussions',
          },
          {
            text: 'Registro de Cambios',
            link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
          },
          {
            text: ' Certificación Vue.js',
            link: 'https://certificates.dev/vuejs/?friend=VUEROUTER&utm_source=router_vuejs&utm_medium=link&utm_campaign=router_vuejs_links&utm_content=navbar',
          },
        ],
      },
    ],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: 'Configuración',
          items: [
            {
              text: 'Introducción',
              link: '/introduction.html',
            },
            {
              text: 'Instalación',
              link: '/installation.html',
            },
          ],
        },
        {
          text: 'Fundamentos',
          items: [
            {
              text: 'Primeros Pasos',
              link: '/guide/',
            },
            {
              text: 'Emparejamiento de Rutas Dinámicas',
              link: '/guide/essentials/dynamic-matching.html',
            },
            {
              text: 'Sintaxis del Emparejamiento de Rutas',
              link: '/guide/essentials/route-matching-syntax.html',
            },
            {
              text: 'Rutas con Nombre',
              link: '/guide/essentials/named-routes.html',
            },
            {
              text: 'Rutas Anidadas',
              link: '/guide/essentials/nested-routes.html',
            },
            {
              text: 'Navegación Programática',
              link: '/guide/essentials/navigation.html',
            },
            {
              text: 'Vistas con Nombre',
              link: '/guide/essentials/named-views.html',
            },
            {
              text: 'Redirección y Alias',
              link: '/guide/essentials/redirect-and-alias.html',
            },
            {
              text: 'Pasando Props a Componentes de Ruta',
              link: '/guide/essentials/passing-props.html',
            },
            {
              text: 'Enlaces Activos',
              link: '/guide/essentials/active-links.html',
            },
            {
              text: 'Diferentes Modos de Historial',
              link: '/guide/essentials/history-mode.html',
            },
          ],
        },
        {
          text: 'Avanzado',
          items: [
            {
              text: 'Protectores de Navegación',
              link: '/guide/advanced/navigation-guards.html',
            },
            {
              text: 'Metacampos de Ruta',
              link: '/guide/advanced/meta.html',
            },
            {
              text: 'Obtención de Datos',
              link: '/guide/advanced/data-fetching.html',
            },
            {
              text: 'Composition API',
              link: '/guide/advanced/composition-api.html',
            },
            {
              text: 'Slot RouterView',
              link: '/guide/advanced/router-view-slot.html',
            },
            {
              text: 'Transiciones',
              link: '/guide/advanced/transitions.html',
            },
            {
              text: 'Comportamiento del Scroll',
              link: '/guide/advanced/scroll-behavior.html',
            },
            {
              text: 'Rutas de Carga Perezosa',
              link: '/guide/advanced/lazy-loading.html',
            },
            {
              text: 'Rutas Tipadas',
              link: '/guide/advanced/typed-routes.html',
            },
            {
              text: 'Extendiendo RouterLink',
              link: '/guide/advanced/extending-router-link.html',
            },
            {
              text: 'Fallos de Navegación',
              link: '/guide/advanced/navigation-failures.html',
            },
            {
              text: 'Enrutado Dinámico',
              link: '/guide/advanced/dynamic-routing.html',
            },
          ],
        },
        {
          items: [
            {
              text: 'Migración desde Vue 2',
              link: '/guide/migration/index.html',
            },
          ],
        },
      ],

      '/api/': [
        {
          text: 'paquetes',
          items: [{ text: 'vue-router', link: '/api/' }],
        },
      ],
    },
  },
}

export const esSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  es: {
    placeholder: 'Buscar',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: 'Búsquedas recientes',
          noRecentSearchesText: 'No hay búsquedas recientes',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: 'seleccionar',
          navigateText: 'navegar',
          closeText: 'cerrar',
          searchByText: 'Búsqueda por',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
