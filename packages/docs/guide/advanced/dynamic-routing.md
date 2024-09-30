# Enrutado Dinámico

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-dynamic-routing"
  title="Aprende cómo añadir rutas en tiempo de ejecución"
/>

Añadir rutas a tu router se hace normalmente a través de la opción `routes` pero en algunas situaciones, puede que quieras añadir o eliminar rutas mientras la aplicación ya se está ejecutando. Las aplicaciones con interfaces extensibles como [Vue CLI UI](https://cli.vuejs.org/dev-guide/ui-api.html) pueden usar esto para hacer crecer la aplicación.

## Añadiendo rutas

El enrutamiento dinámico se consigue principalmente a través de dos funciones: `router.addRoute()` y `router.removeRoute()`. Estas **sólo** registran una nueva ruta, lo que significa que si la nueva ruta añadida coincide con la ubicación actual, requeriría que **navegues manualmente** con `router.push()` o `router.replace()` para mostrar esa nueva ruta. Veamos un ejemplo:

Imagina que tienes el siguiente enrutador con una única ruta:

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:articleName', component: Article }],
})
```

Ir a cualquier página como `/about`, `/store`, o `/3-tricks-to-improve-your-routing-code` termina mostrando el componente `Article`. Si estamos en `/about` y añadimos una nueva ruta:

```js
router.addRoute({ path: '/about', component: About })
```

La página seguirá mostrando el componente «Artículo». Necesitamos llamar manualmente a `router.replace()` para cambiar la ubicación actual y sobreescribir donde estábamos (en lugar de empujar una nueva entrada, terminando en la misma ubicación dos veces en nuestro historial):

```js
router.addRoute({ path: '/about', component: About })
// también podríamos usar this.$route o useRoute()
router.replace(router.currentRoute.value.fullPath)
```

Recuerda que puedes usar `await router.replace()` si necesitas esperar a que se muestre la nueva ruta.

## Añadiendo rutas dentro de los protectores de navegación

Si decides añadir o eliminar rutas dentro de un protector de navegación, no debes llamar a `router.replace()` sino provocar una redirección devolviendo la nueva ubicación:

```js
router.beforeEach(to => {
  if (!hasNecessaryRoute(to)) {
    router.addRoute(generateRoute(to))
    // disparar una redirección
    return to.fullPath
  }
})
```

El ejemplo anterior asume dos cosas: primero, el nuevo registro de ruta añadido coincidirá con la ubicación `to`, resultando efectivamente en una ubicación diferente a la que estábamos intentando acceder. En segundo lugar, `hasNecessaryRoute()` devuelve `false` después de añadir la nueva ruta para evitar una redirección infinita.

Como estamos redireccionando, estamos reemplazando la navegación en curso, comportándonos efectivamente como en el ejemplo mostrado antes. En escenarios del mundo real, es más probable que la adición ocurra fuera de los protectores de navegación, por ejemplo, cuando un componente de vista se monta, éste registra nuevas rutas.

## Removiendo rutas

Hay varias formas de remover rutas existentes:

- Añadiendo una ruta con un nombre conflictivo. Si añades una ruta que tiene el mismo nombre que una ruta existente, primero se eliminará la ruta y luego se añadirá la ruta:

  ```js
  router.addRoute({ path: '/about', name: 'about', component: About })
  // esto eliminará la ruta previamente añadida porque tienen
  // el mismo nombre y los nombres son únicos en todas las rutas
  router.addRoute({ path: '/other', name: 'about', component: Other })
  ```

- Llamando al callback retornado por `router.addRoute()`:

  ```js
  const removeRoute = router.addRoute(routeRecord)
  removeRoute() // remueve la ruta si existe
  ```

Esto es útil cuando las rutas no tienen nombre

- Usando `router.removeRoute()` para remover una ruta por su nombre:

  ```js
  router.addRoute({ path: '/about', name: 'about', component: About })
  // remueve la ruta
  router.removeRoute('about')
  ```

  Ten en cuenta que puedes utilizar `Symbol`s para los nombres en las rutas si deseas utilizar esta función pero quieres evitar conflictos en los nombres.

Cuando se remueve una ruta, **todos sus alias e hijos** son removidos con ella.

## Añadiendo rutas anidadas

Para añadir rutas anidadas a una ruta existente, puede pasar el _nombre_ de la ruta como primer parámetro a `router.addRoute()`. Esto añadirá la ruta como si se hubiera añadido a través de `children`:

```js
router.addRoute({ name: 'admin', path: '/admin', component: Admin })
router.addRoute('admin', { path: 'settings', component: AdminSettings })
```

Esto es equivalente a:

```js
router.addRoute({
  name: 'admin',
  path: '/admin',
  component: Admin,
  children: [{ path: 'settings', component: AdminSettings }],
})
```

## Mirando las rutas existentes

Vue Router te da dos funciones para mirar las rutas existentes:

- [`router.hasRoute()`](/api/interfaces/Router.md#hasRoute): comprueba si existe una ruta.
- [`router.getRoutes()`](/api/interfaces/Router.md#getRoutes): obtiene un array con todos los registros de rutas.
