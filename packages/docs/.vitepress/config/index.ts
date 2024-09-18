import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { sharedConfig } from './shared'
import { zhConfig } from './zh'

export default defineConfig({
  ...sharedConfig,

  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: 'https://router.vuejs.org/',
      ...enConfig,
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: 'https://router.vuejs.org/zh/',
      ...zhConfig,
    },
    ko: { label: '한국어', lang: 'ko-KR', link: 'https://router.vuejs.kr/' },
    pt: {
      label: 'Português',
      lang: 'pt-PT',
      link: 'https://vue-router-docs-pt.netlify.app/',
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: 'https://vue-router-ru.netlify.app',
    },
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      ...esConfig,
    },
  },
})
