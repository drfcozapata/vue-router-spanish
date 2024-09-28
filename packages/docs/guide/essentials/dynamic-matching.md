# Emparejamiento de Rutas Dinámicas con Parámetros

<VueSchoolLink
  href="https://vueschool.io/lessons/dynamic-routes"
  title="Aprende sobre el emparejamiento de rutas dinámicas con parámetros"
/>

Con frecuencia necesitaremos asignar rutas con el patrón establecido al mismo componente. Por ejemplo, podemos tener un componente `User` que debe ser renderizado para todos los usuarios pero con diferentes IDs de usuario. En Vue Router podemos usar un segmento dinámico en la ruta para conseguirlo, lo llamamos un _parámetro_:

```js
import User from './User.vue'

// esto es pasado a `createRouter`
const routes = [
  // los segmentos dinámicos comienzan con dos puntos
  { path: '/users/:id', component: User },
]
```

Ahora las URLs como `/users/johnny` y `/users/jolyne` se asignarán a la misma ruta.

Un _parámetro_ se indica con dos puntos `:`. Cuando se encuentra una ruta, el valor de sus _parámetros_ se muestra como `route.params` en cada componente. Por lo tanto, podemos mostrar el ID del usuario actual actualizando la plantilla `User` a esto:

```vue
<template>
  <div>
    <!-- La ruta actual es accesible como $route en el template -->
    User {{ $route.params.id }}
  </div>
</template>
```

Puedes tener múltiples _parámetros_ en la misma ruta, y se asignarán a los campos correspondientes en `route.params`. Por ejemplo:

| modelo                         | ruta coincidente         | route.params                             |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

Además de `route.params`, el objeto `route` también expone otra información útil como `route.query` (si hay una consulta en la URL), `route.hash`, etc. Puedes consultar todos los detalles en la [Referencia de la API](../../api/#RouteLocationNormalized).

Se puede encontrar una demostración funcional de este ejemplo [aquí](https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1).

<!-- <iframe
  src="https://codesandbox.io/embed//route-params-vue-router-examples-mlb14?fontsize=14&theme=light&view=preview&initialpath=%2Fusers%2Feduardo%2Fposts%2F1"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Route Params example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Reaccionar a los Cambios de Parámetros

<VueSchoolLink
  href="https://vueschool.io/lessons/reacting-to-param-changes"
  title="Aprende cómo reaccionar ante los cambios de parámetros"
/>

Una cosa a tener en cuenta cuando se utilizan rutas con parámetros es que cuando el usuario navega desde `/users/johnny` a `/users/jolyne`, **se reutilizará la misma instancia del componente**. Dado que ambas rutas renderizan el mismo componente, esto es más eficiente que destruir la instancia antigua y crear una nueva. **Sin embargo, esto también significa que los hooks del ciclo de vida del componente no serán llamados**.

Para reaccionar a los cambios de parámetros en el mismo componente, puedes simplemente observar cualquier cosa en el objeto `route`, en este escenario, el `route.params`:

::: code-group

```vue [Composition API]
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
  () => route.params.id,
  (newId, oldId) => {
    // reaccionar a los cambios de ruta...
  }
)
</script>
```

```vue [Options API]
<script>
export default {
  created() {
    this.$watch(
      () => this.$route.params.id,
      (newId, oldId) => {
        // reaccionar a los cambios de ruta...
      }
    )
  },
}
</script>
```

:::

O bien, usa el [protector de navegación](../advanced/navigation-guards.md) `beforeRouteUpdate`, que te permite también cancelar la navegación:

::: code-group

```vue [Composition API]
<script setup>
import { onBeforeRouteUpdate } from 'vue-router'
// ...

onBeforeRouteUpdate(async (to, from) => {
  // reaccionar a los cambios de ruta...
  userData.value = await fetchUser(to.params.id)
})
</script>
```

```vue [Options API]
<script>
export default {
  async beforeRouteUpdate(to, from) {
    // reaccionar a los cambios de ruta...
    this.userData = await fetchUser(to.params.id)
  },
  // ...
}
</script>
```

:::

## Catch all / 404 Not found Route

<VueSchoolLink
  href="https://vueschool.io/lessons/404-not-found-page"
  title="Aprende cómo hacer una ruta catch all/404 no encontrado"
/>

Los parámetros regulares sólo coincidirán con los caracteres entre fragmentos de url, separados por `/`. Si queremos que coincida con **cualquier cosa**, podemos utilizar un _parámetro_ personalizado con una expresión regular (regexp) añadiendo el regexp entre paréntesis justo después del _parámetro_:

```js
const routes = [
  // coincidirá con todo y lo pondrá en `route.params.pathMatch`.
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // buscará cualquier cosa que empiece por `/user-` y la pondrá en `route.params.afterUser`.
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```

En este caso concreto, estamos utilizando una [regexp personalizada](./route-matching-syntax.md#custom-regexp-in-params) entre paréntesis y marcando el parámetro `pathMatch` como [opcionalmente repetible](./route-matching-syntax.md#optional-parameters). Esto nos permite navegar directamente a la ruta si lo necesitamos dividiendo el `path` en un array:

```js
router.push({
  name: 'NotFound',
  // conserva la ruta actual y elimina el primer carácter para evitar que la URL de destino empiece por `//`.
  params: { pathMatch: route.path.substring(1).split('/') },
  // preservar la consulta existente y el hash si existe
  query: route.query,
  hash: route.hash,
})
```

Ve más en la sección [parámetros repetidos](./route-matching-syntax.md#Repeatable-params).

Si estás usando el [modo Historial](./history-mode.md), asegúrate de seguir las instrucciones para configurar correctamente también tu servidor.

## Patrones de Emparejamiento Avanzados

Vue Router usa su propia sintaxis de emparejamiento de rutas, inspirada en la que utiliza `express`, por lo que admite muchos patrones de coincidencia avanzados tales como parámetros opcionales, cero o más / uno o más requisitos e incluso patrones de expresiones regulares personalizados. Por favor, consulta la documentación de [Emparejamiento Avanzado](./route-matching-syntax.md) para explorarlos.
