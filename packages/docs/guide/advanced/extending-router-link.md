# Extendiendo RouterLink

<VueSchoolLink
  href="https://vueschool.io/lessons/extending-router-link-for-external-urls"
  title="Aprende cómo extender router-link"
/>

El componente RouterLink expone suficientes `props` para satisfacer la mayoría de las aplicaciones básicas, pero no trata de cubrir todos los casos de uso posibles y es probable que te encuentres utilizando `v-slot` para algunos casos avanzados. En la mayoría de las aplicaciones de tamaño medio a grande, merece la pena crear uno o varios componentes RouterLink personalizados para reutilizarlos en toda la aplicación. Algunos ejemplos son Enlaces en un Menú de Navegación, manejo de enlaces externos, adición de una `inactive-class`, etc.

Extendamos RouterLink para manejar también enlaces externos y añadamos una `inactive-class` personalizada en un archivo `AppLink.vue`:

::: code-group

```vue [Composition API]
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  // añade @ts-ignore si usas TypeScript
  ...RouterLink.props,
  inactiveClass: String,
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
```

```vue [Options API]
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'AppLink',
  inheritAttrs: false,

  props: {
    // añade @ts-ignore si usas TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>
```

:::

Si prefieres utilizar una función de renderizado o crear propiedades `computadas`, puedes utilizar el `useLink` de la [Composition API](./composition-api.md):

```js
import { RouterLink, useLink } from 'vue-router'

export default {
  name: 'AppLink',

  props: {
    // añade @ts-ignore si usas TypeScript
    ...RouterLink.props,
    inactiveClass: String,
  },

  setup(props) {
    // `props` contiene `to` y cualquier otra prop que se pueda pasar a <router-link>.
    const { navigate, href, route, isActive, isExactActive } = useLink(props)

    // ¡beneficio!

    return { isExternalLink }
  },
}
```

En la práctica, podrías querer usar tu componente `AppLink` para diferentes partes de tu aplicación. Por ejemplo, usando [Tailwind CSS](https://tailwindcss.com), podrías crear un componente `NavLink.vue` con todas las clases:

```vue
<template>
  <AppLink
    v-bind="$attrs"
    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
    inactive-class="text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
  >
    <slot />
  </AppLink>
</template>
```
