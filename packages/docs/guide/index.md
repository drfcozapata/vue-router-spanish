# Primeros Pasos

<VueSchoolLink
href="https://vueschool.io/courses/vue-router-4-for-everyone"
title="Aprende a crear potentes Aplicaciones de Página Única (SPA) con Vue Router en Vue School">Mira un Video Curso Gratuito sobre Vue Router</VueSchoolLink>

Vue Router es la solución oficial de enrutamiento del lado del cliente para Vue.

El enrutamiento del lado del cliente es utilizado por aplicaciones de una sola página (SPA) para vincular la URL del navegador al contenido visto por el usuario. A medida que los usuarios navegan por la aplicación, la URL se actualiza en consecuencia, pero la página no necesita ser recargada desde el servidor.

Vue Router se basa en el sistema de componentes de Vue. Usted configura **routes** para decirle a Vue Router qué componentes mostrar para cada ruta URL.

:::tip Requisitos previos
Esta guía asume que usted ya está familiarizado con Vue. No necesitas ser un experto en Vue, pero puede que ocasionalmente necesites consultar [la documentación básica de Vue](https://vuejs.org/) para obtener más información sobre ciertas características.
:::

## Un ejemplo

Para introducir algunas de las ideas principales, vamos a considerar este ejemplo:

- [Vue Playground example](https://play.vuejs.org/#eNqFVVtv2zYU/itn6gArmC05btEHTXXTFcWyYZeiLfYy7UGWji02EsmRlOPA8H/fIambnaRD4Fg61++c7yN9DJqc8eirDpKANVIoA0coFOYG30kJJ9gq0cBs3+Is412AEq1B1Xmi2L+ObpvX+3IpI5+b8aFqSJ+rjANErcbQp/v3RrTchLMXlDa7CuZBl07YUoONrCl/bQPT6np9i3UtbLPv0phenVm6L3rQRgm+W79vlULeIQaZmypJ484HxyN87xzRtq3rj+SE08mViX2dlOf7vuAnh/I3xu/AiDdZEGfB+mdBz3ArGkzj0f9sRr4hy5D2zr49ykvjvmdqeTmv9RfDe4i7uM6dxsNiaF9+l0+y+Ts2Qj3cMm3oa94Zfd0py4uBzYFPO6Br3ZPaGzpme9rtQGdxg2WUgOC6Y0PDG/jbjnL0vMAsnhEsQcU4UZaMbU/z8zC3x/PYsbcN/ueilaJW03nDoy1Y+VUkT+0nvHI9PVB6PJE8M44HN2iJ27yt+9q09ek+rFR1oZg0RM5FgmvboKlEqRP/BrATX4SDH171JgBD4CIvThXJVldhP7Y7J9DtxP4nxZKk+470cnFQVuseHh2TlTduWmMEh5uiZsUdSXPAcKlOH/hIZmfEjhODRtPaozNKjyiiGcqn75Ej0Pl3lMyHp2fFeMHnEB/SRia+ict6ep/GXBWV1UGHyGtgh5O1K0KvuC8T/duieoi6tLdvYUYg+rXTmKH3jLmeKoW0owLDI7h8IrnvfAKrIargxfQ/lA0LHjmr8w3W3X3w2dVMIGWchoH9ohEl1pFRrCE2fccsgCY/1Mh3piLjaknc+pujr3TOqedk0eSSrg/BiVU3WtY5dBYMks2CkRtrzoLKGKmTOG65vNtFtON4jLh5Fb2MlnFJJ2tijVA3i40S99rdV1ngNmtr31BQXOLeCFHrRS7Zcy0eBd68jl5H13HNNjFVjxkv8eBq94unMY0mQWzZ7mJIKwtWo/pTGkaCORs2p9+Z+1+dzagWB6BFhcXdE/av+uAhf1RI0+1xMpzJFWnOuz98/gMP9Dw4icW2puhvOD+hFnVrMfqwn1peEuxJnEP7i+OM8d0X/eFgkOt+KAt0FLIj8v03Rh/hvoxeTbaozUONOiq0/aGhX6w5aY1xn7cRqkSVwEoegMCyEl4sl8sf3d1H5RhfbATdKk0C10t5cHaZlyWBHSzUJeNUFtaQww/08Tenz65xSzf+NLJaTTuP5UcARVFMACSwpL9VVyE4/QesCg/V)

Comencemos por el componente raíz, `App.vue`.

### App.vue

```vue
<template>
  <h1>App ¡Hola!</h1>
  <p><strong>Ruta actual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Ir a Inicio</RouterLink>
    <RouterLink to="/about">Ir a Acerca de</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
```

Esta plantilla utiliza dos componentes proporcionados por Vue Router, `RouterLink` y `RouterView`.

En lugar de utilizar etiquetas regulares `<a>`, utilizamos el componente personalizado `RouterLink` para crear enlaces. Esto le permite a Vue Router cambiar la URL sin recargar la página, manejar la generación de URLs, la codificación, y varias otras características. Entraremos en más detalle sobre `RouterLink` en secciones posteriores de la guía.

El componente `RouterView` le dice a Vue Router dónde mostrar el **componente de ruta** actual. Ese es el componente que corresponde a la ruta URL actual. No tiene que estar en `App.vue`, puedes ponerlo en cualquier sitio para adaptarlo a tu layout, pero sí necesita estar incluido en algún sitio, de lo contrario Vue Router no renderizará nada.

El ejemplo anterior también utiliza <code v-pre>{{ $route.fullPath }}</code>. Puede utilizar `$route` en las plantillas de tus componentes para acceder a un objeto que representa la ruta actual.

<VueMasteryLogoLink></VueMasteryLogoLink>

### Creación de la instancia del enrutador

La instancia del enrutador se crea llamando a la función `createRouter()`:

```js
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
```

La opción `routes` define las propias rutas, asignando rutas URL a los componentes. El componente especificado por la opción `component` es el que será renderizado por el `<RouterView>` en nuestro `App.vue` previo. Estos componentes de ruta a veces se denominan _vistas_, aunque no son más que componentes normales de Vue.

Las rutas admiten otras opciones que veremos más adelante en la guía, pero por ahora sólo necesitamos `path` y `component`.

La opción `history` controla cómo se mapean las rutas en las URLs y viceversa. Para el ejemplo del Playground usamos `createMemoryHistory()`, que ignora completamente la URL del navegador y usa su propia URL interna. Esto funciona bien para el Playground, pero es raro que sea lo que quieres en una aplicación real. Típicamente, querrás usar `createWebHistory()` en su lugar, o quizás `createWebHashHistory()`. Cubriremos este tema con más detalle en la guía de [Modos de historia](./essentials/history-mode).

### Registrando el plugin del enrutador

Una vez que hemos creado nuestra instancia del router, necesitamos registrarlo como plugin llamando a `use()` en nuestra aplicación:

```js
createApp(App).use(router).mount('#app')
```

O, lo que es lo mismo:

```js
const app = createApp(App)
app.use(router)
app.mount('#app')
```

Como con la mayoría de los plugins de Vue, la llamada a `use()` debe realizarse antes de la llamada a `mount()`.

Si tienes curiosidad sobre lo que hace este plugin, algunas de sus responsabilidades incluyen:

1. [Registro global](https://vuejs.org/guide/components/registration.html#global-registration) de los componentes `RouterView` y `RouterLink`.
2. Añadir las propiedades globales `$router` y `$route`.
3. Habilitar los componentes `useRouter()` y `useRoute()`.
4. Activar el enrutador para resolver la ruta inicial.

### Accediendo al enrutador y a la ruta actual

Es probable que quieras acceder al enrutador desde cualquier otra parte de tu aplicación.

Si estás exportando la instancia del enrutador desde un módulo ES, podrías importar la instancia del enrutador directamente donde lo necesites. En algunos casos este es el mejor enfoque, pero tenemos otras opciones si estamos dentro de un componente.

En las plantillas de los componentes, la instancia del enrutador se expone como `$router`. Esto es similar a la propiedad `$route` que vimos antes, pero fíjate en la `r` extra al final.

Si estamos utilizando la API de opciones, podemos acceder a estas dos propiedades como `this.$router` y `this.$route` en nuestro código JavaScript. El componente `HomeView.vue` del ejemplo de Playground accede al enrutador de esta forma:

```js
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
```

Este método está llamando a `push()`, que se utiliza para la [navegación programática](./essentials/navigation). Aprenderemos más sobre esto más adelante.

Con la API de composición, no tenemos acceso a la instancia del componente a través de `this`, por lo que Vue Router incluye algunos composables que podemos utilizar en su lugar. `AboutView.vue` en el ejemplo del Playground utiliza este enfoque:

```vue
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  },
})
</script>
```

No es necesario entender todo ese código ahora mismo. La clave es que los composables `useRouter()` y `useRoute()` se usan para acceder a la instancia del router y a la ruta actual, respectivamente.

### Próximos pasos

Si quieres ver un ejemplo completo usando Vite, puedes usar la herramienta de creación [create-vue](https://github.com/vuejs/create-vue), que tiene la opción de incluir Vue Router en el proyecto de ejemplo:

::: code-group

```bash [npm]
npm create vue@latest
```

```bash [yarn]
yarn create vue
```

```bash [pnpm]
pnpm create vue
```

:::

El proyecto de ejemplo creado por create-vue utiliza características similares a las que hemos visto aquí. Puedes considerarlo un punto de partida útil para explorar las características introducidas en las siguientes páginas de esta guía.

## Convenciones en esta guía

### Componentes de un solo archivo (SFC)

Vue Router es más comúnmente usado en aplicaciones construidas usando un empaquetador (por ejemplo Vite) y [SFCs](https://vuejs.org/guide/introduction.html#single-file-components) (por ejemplo archivos `.vue`). La mayoría de los ejemplos de esta guía serán escritos en ese estilo, pero Vue Router en sí mismo no requiere que uses herramientas de compilación o SFCs.

Por ejemplo, si estás usando las _construcciones globales_ de [Vue](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn) y [Vue Router](../installation#Direct-Download-CDN), las librerías están expuestas a través de objetos globales, en lugar de importaciones:

```js
const { createApp } = Vue
const { createRouter, createWebHistory } = VueRouter
```

### Estilo de la API de componentes

Vue Router puede ser usado tanto con la Composition API como con la Options API. Cuando sea relevante, los ejemplos de esta guía mostrarán componentes escritos en ambos estilos. Los ejemplos de la Composition API utilizarán normalmente `<script setup>`, en lugar de una función explícita `setup`.

Si necesitas un repaso sobre los dos estilos, consulta [Vue - Estilos de API](https://vuejs.org/guide/introduction.html#api-styles).

### `router` y `route`

A lo largo de la guía, a menudo nos referiremos a la instancia del enrutador como `router`. Este es el objeto devuelto por `createRouter()`. La forma de acceder a ese objeto en tu aplicación dependerá del contexto. Por ejemplo, en un componente que utilice la Composition API, se puede acceder llamando a `useRouter()`. Con la Options API, se puede acceder utilizando `this.$router`.

Del mismo modo, la ruta actual se denominará «ruta». Se puede acceder a ella en los componentes utilizando `useRoute()` o `this.$route`, dependiendo de la API que utilice el componente.

### `RouterView` y `RouterLink`.

Los componentes `RouterView` y `RouterLink` están ambos [registrados globalmente](https://vuejs.org/guide/components/registration.html#global-registration), por lo que no necesitan ser importados antes de usarlos en los templates de los componentes. Sin embargo, si lo prefieres, puedes importarlos localmente, por ejemplo `import { RouterLink } from 'vue-router'`.

En los templates, los nombres de los componentes pueden escribirse en PascalCase o kebab-case. El compilador de templates de Vue soporta cualquiera de los dos formatos, por lo que `<RouterView>` y `<router-view>` son equivalentes. Deberías seguir cualquier convención que se use en tu proyecto.

Si estás usando templates in-DOM entonces se aplican [las advertencias usuales](https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats): los nombres de los componentes deben ser escritos en kebab-case y las etiquetas de auto-cierre no son soportadas. Así que en lugar de escribir `<RouterView />`, tendrías que usar `<router-view></router-view>`.
