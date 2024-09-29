# Metacampos de Ruta

<VueSchoolLink
  href="https://vueschool.io/lessons/route-meta-fields"
  title="Aprende cómo usar los metacampos de ruta"
/>

En ocasiones, es posible que quieras adjuntar información arbitraria a las rutas como: nombres de transición, o roles para controlar quién puede acceder a la ruta, etc. Esto se puede lograr a través de la propiedad `meta` que acepta un objeto de propiedades y se puede acceder en la localización de la ruta y los protectores de navegación. Puedes definir las propiedades `meta` de la siguiente manera:

```js
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // sólo los usuarios autenticados pueden crear posts
        meta: { requiresAuth: true },
      },
      {
        path: ':id',
        component: PostsDetail,
        // cualquiera puede leer un post
        meta: { requiresAuth: false },
      },
    ],
  },
]
```

Entonces, ¿cómo accedemos a estos `metacampos`?

<!-- TODO: the explanation about route records should be explained before and things should be moved here -->

En primer lugar, cada objeto de ruta en la configuración `routes` se denomina **registro de ruta**. Los registros de ruta pueden estar anidados. Por lo tanto, cuando una ruta coincide, puede coincidir potencialmente con más de un registro de ruta.

Por ejemplo, con la configuración de rutas anterior, la URL `/posts/new` coincidirá tanto con el registro de ruta padre (`path: '/posts'`) como con el registro de la ruta hija (`path: 'new'`).

Todos los registros de ruta coincidentes con una ruta están expuestos en el objeto `route` (y también en los objetos de ruta de los protectores de navegación) como el array `route.matched`. Podríamos hacer un bucle a través de ese array para comprobar todos los campos `meta`, pero Vue Router también proporciona un `route.meta` que es una fusión no recursiva de **todos los campos `meta`** de padre a hijo. Lo que significa que puedes simplemente escribir:

```js
router.beforeEach((to, from) => {
  // en lugar de tener que comprobar cada registro de ruta con
  // to.matched.some(record => record.meta.requiereAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // esta ruta requiere autenticación, comprobar si se ha iniciado sesión
    // si no, redirige a la página de login.
    return {
      path: '/login',
      // guarda la ubicación en la que estábamos para volver más tarde
      query: { redirect: to.fullPath },
    }
  }
})
```

## TypeScript

Es posible escribir el metacampo extendiendo la interfaz `RouteMeta` de `vue-router`:

```ts
// Esto puede ser añadido directamente a cualquiera de tus archivos `.ts` como `router.ts`.
// También se puede añadir a un archivo `.d.ts`. Asegúrate de que está incluido en
// los "archivos" tsconfig.json del proyecto.
import 'vue-router'

// Para asegurar que es tratado como un módulo, añade al menos una sentencia `export`.
export {}

declare module 'vue-router' {
  interface RouteMeta {
    // es opcional
    isAdmin?: boolean
    // debe ser declarado para cada ruta
    requiresAuth: boolean
  }
}
```
