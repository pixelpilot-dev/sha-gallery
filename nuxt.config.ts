// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/svg-sprite'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-ExtraBlack.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-Black.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-ExtraBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-Bold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Mulish/Mulish-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Gilroy/Gilroy-ExtraBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: '/fonts/Gilroy/Gilroy-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
    },
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables/index.scss" as *;'
        }
      }
    }
  },
  components: {
    dirs: [
      {
        path: '~/shared/ui',
        extensions: ['vue'],
        pathPrefix: false,
      },
      {
        path: '~/entities',
        extensions: ['vue'],
        pathPrefix: false,
      },
      {
        path: '~/features',
        extensions: ['vue'],
        pathPrefix: false,
      },
      {
        path: '~/widgets',
        extensions: ['vue'],
        pathPrefix: false,
      },
    ]
  },
  svgSprite: {
    iconsPath: null,
    input: '~/assets/sprite/svg',
    output: '~/assets/sprite/gen',
  },
})