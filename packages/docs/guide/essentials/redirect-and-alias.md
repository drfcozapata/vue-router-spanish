# Redirección y Alias

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-redirect-and-alias"
  title="Aprende cómo usar la redirección y el alias"
/>

## Redirección

La redirección también se realiza en la configuración de `routes`. Para redirigir de `/home` a `/`:

```js
const routes = [{ path: '/home', redirect: '/' }]
```

La redirección también puede dirigirse a una ruta con nombre:

```js
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
```

O incluso utilizar una función para la redirección dinámica:

```js
const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // la función recibe la ruta destino como argumento
      // devolvemos una ruta/ubicación de redirección aquí.
      return { path: '/search', query: { q: to.params.searchText } }
    },
  },
  {
    path: '/search',
    // ...
  },
]
```

Observa que los **[Protectores de Navegación](../advanced/navigation-guards.md) no se aplican en la ruta que redirige, sólo en su destino**. Por ejemplo, en el ejemplo anterior, añadir un protector `beforeEnter` a la ruta `/home` no tendría ningún efecto.

Cuando se escribe un `redirect`, se puede omitir la opción `component` porque nunca se llega a él directamente, por lo que no hay ningún componente que renderizar. La única excepción son las [rutas anidadas](./nested-routes.md): si un registro de ruta tiene `children` y una propiedad `redirect`, también debería tener una propiedad `component`.

### Redireccionamiento relativo

También es posible redirigir a una ubicación relativa:

```js
const routes = [
  {
    // siempre redirigirá /users/123/posts a /users/123/profile
    path: '/users/:id/posts',
    redirect: to => {
      // la función recibe la ruta de destino como argumento
      // una ubicación relativa no empieza por `/`.
      // o { path: 'profile'}
      return 'profile'
    },
  },
]
```

## Alias

Una redirección significa que cuando el usuario visite `/home`, la URL será reemplazada por `/`, y luego emparejada como `/`. Pero, ¿qué es un alias?

**Un alias de `/` como `/home` significa que cuando el usuario visita `/home`, la URL sigue siendo `/home`, pero se buscará como si el usuario estuviera visitando `/`**.

Lo anterior puede expresarse en la configuración de rutas como:

```js
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
```

Un alias te da la libertad de asociar una estructura de interfaz de usuario a una URL arbitraria, en lugar de estar limitado por la estructura de anidamiento de la configuración. Haz que el alias empiece por `/` para que la ruta sea absoluta en las rutas anidadas. Puedes incluso combinar ambos y proporcionar múltiples alias con un array:

```js
const routes = [
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // esto mostrará la UserList para estas 3 URLs
      // - /users
      // - /users/list
      // - /people
      { path: '', component: UserList, alias: ['/people', 'list'] },
    ],
  },
]
```

Si tu ruta tiene parámetros, asegúrate de incluirlos en cualquier alias absoluto:

```js
const routes = [
  {
    path: '/users/:id',
    component: UsersByIdLayout,
    children: [
      // esto mostrará UserDetails para estas 3 URLs
      // - /users/24
      // - /users/24/profile
      // - /24
      { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
    ],
  },
]
```

**Nota sobre SEO**: cuando uses alias, asegúrate de [definir enlaces canónicos](https://support.google.com/webmasters/answer/139066?hl=en).
