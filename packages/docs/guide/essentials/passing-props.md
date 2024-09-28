# Pasando Props a Componentes de Ruta

<VueSchoolLink
  href="https://vueschool.io/lessons/route-props"
  title="Aprende cómo pasar props a componentes de ruta"
/>

Usar `$route` o `useRoute()` en tu componente crea un estrecho acoplamiento con la ruta que limita la flexibilidad del componente ya que sólo puede ser usado en ciertas URLs. Aunque esto no es algo necesariamente malo, podemos desacoplar este comportamiento con la opción `props`.

Volvamos a nuestro ejemplo previo:

```vue
<!-- User.vue -->
<template>
  <div>User {{ $route.params.id }}</div>
</template>
```

con:

```js
import User from './User.vue'

// estas se pasan a `createRouter`.
const routes = [{ path: '/users/:id', component: User }]
```

Podemos eliminar la dependencia directa de `$route` en `User.vue` declarando una prop en su lugar:

::: code-group

```vue [Composition API]
<!-- User.vue -->
<script setup>
defineProps({
  id: String,
})
</script>

<template>
  <div>User {{ id }}</div>
</template>
```

```vue [Options API]
<!-- User.vue -->
<script>
export default {
  props: {
    id: String,
  },
}
</script>

<template>
  <div>User {{ id }}</div>
</template>
```

:::

Podemos entonces configurar la ruta para pasar el parámetro `id` como una prop estableciendo `props: true`:

```js
const routes = [{ path: '/user/:id', component: User, props: true }]
```

Esto te permite usar el componente en cualquier lugar, lo que hace que el componente sea más fácil de reutilizar y probar.

## Modo booleano

Cuando las `props` se establecen en `true`, los `route.params` se establecerán como las props del componente.

## Vistas con nombre

Para rutas con vistas con nombre, tienes que definir la opción `props` para cada vista con nombre:

```js
const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false },
  },
]
```

## Modo objeto

Cuando las `props` son un objeto, se establecerán como las props propias del componente. Útil para cuando las props son estáticas.

```js
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false },
  },
]
```

## Modo función

Puedes crear una función que retorne props. Esto te permite convertir parámetros en otros tipos, combinar valores estáticos con valores basados en rutas, etc.

```js
const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q }),
  },
]
```

La URL `/search?q=vue` pasaría `{query: vue'}` como props al componente `SearchUser`.

Trata de mantener la función `props` como una función sin estado, ya que sólo se evalúa en los cambios de ruta. Usa un componente wrapper si necesitas estado para definir las props, de esta forma Vue puede reaccionar a los cambios de estado.

## Vía RouterView

También puedes pasar cualquier props a través del [slot `<RouterView>`](../advanced/router-view-slot):

```vue-html
<RouterView v-slot="{ Component }">
  <component
    :is="Component"
    view-prop="value"
   />
</RouterView>
```

::: warning
En este caso, **todos los componentes de la vista** recibirán `view-prop`. Esto no suele ser una buena idea ya que significa que todos los componentes de la vista han declarado una prop `view-prop`, lo que no es necesariamente cierto. Si es posible, utiliza cualquiera de las opciones anteriores.
:::
