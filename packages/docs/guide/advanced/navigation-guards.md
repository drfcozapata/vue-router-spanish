# Protectores de Navegación

<VueSchoolLink
  href="https://vueschool.io/lessons/route-guards"
  title="Aprende cómo añadir protectores de navegación"
/>

Como su nombre indica, los guardianes de navegación proporcionados por el enrutador Vue se utilizan principalmente para proteger las navegaciones, ya sea redirigiéndolas o cancelándolas. Hay varias maneras de engancharse al proceso de navegación de la ruta: globalmente, por ruta, o en el componente.

## Global Antes de los Protectores

Puedes registrar global antes de los protectores usando `router.beforeEach`:

```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // retornar explícitamente false para cancelar la navegación
  return false
})
```

Global antes de los protectores son llamados en orden de creación, cada vez que se activa una navegación. Los protectores pueden resolverse de forma asíncrona, y la navegación se considera **pendiente** antes de que se hayan resuelto todos los hooks.

Cada función de protección recibe dos argumentos:

- **`to`**: la ubicación de la ruta de destino [en formato normalizado](../../api/#RouteLocationNormalized) hacia la que se navega.

- **`from`**: la ubicación de la ruta actual [en formato normalizado](../../api/#RouteLocationNormalized) desde la que se navega.

Y puede retornar opcionalmente cualquiera de los siguientes valores:

- `false`: cancela la navegación actual. Si se ha cambiado la URL del navegador (ya sea manualmente por el usuario o a través del botón de retroceso), se restablecerá a la de la ruta `from`.

- A [Ubicación de la Ruta](../../api/#RouteLocationRaw): Redirige a una ubicación diferente pasando una ubicación de ruta como si estuvieras llamando a `router.push()`, lo que te permite pasar opciones como `replace: true` o `name: 'home'`. Se abandona la navegación actual y se crea una nueva con el mismo `from`.

  ```js
  router.beforeEach(async (to, from) => {
    if (
      // asegurarse que el usuario esté autenticado
      !isAuthenticated &&
      // ❗️ Evitar una redirección infinita
      to.name !== 'Login'
    ) {
      // redirigir al usuarioa la página login
      return { name: 'Login' }
    }
  })
  ```

También es posible lanzar un `Error` si se produce una situación inesperada. Esto también cancelará la navegación y llamará a cualquier callback registrado a través de [`router.onError()`](../../api/interfaces/Router.md#onError).

Si no se devuelve nada, `undefined` o `true`, **se valida la navegación**, y se llama al siguiente protector de navegación.

Todo lo anterior **funciona igual con funciones `async`** y Promises:

```js
router.beforeEach(async (to, from) => {
  // canUserAccess() retorna `true` o `false`
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})
```

### Tercer argumento `next` opcional

En versiones anteriores de Vue Router, también era posible utilizar un _tercer argumento_ `next`, esto era una fuente común de errores y pasó por un [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0037-router-return-guards.md#motivation) para eliminarlo. Sin embargo, todavía está soportado, lo que significa que puedes pasar un tercer argumento a cualquier protector de navegación. En ese caso, **debes llamar a `next` exactamente una vez** en cada pasada a través de un protector de navegación. Puede aparecer más de una vez, pero sólo si las rutas lógicas no se superponen, de lo contrario el hook nunca se resolverá o producirá errores. He aquí **un mal ejemplo** de redireccionamiento del usuario a `/login` si no está autenticado:

```js
// MAL
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // si el usuario no está autenticado, `next` es llamado dos veces
  next()
})
```

Aquí está la versión correcta:

```js
// BIEN
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

## Resolver Protecciones Globales

Puedes registrar una protección global con `router.beforeResolve`. Esto es similar a `router.beforeEach` porque se dispara en **cada navegación**, pero las protecciones de resolución son llamadas justo antes de que la navegación sea confirmada, **después de que todas las protecciones dentro de los componentes y todas las protecciones de las rutas asíncronas de los componentes se hayan resuelto**. He aquí un ejemplo que asegura que el usuario ha dado acceso a la Cámara en rutas que [han definido una propiedad meta personalizada](./meta.md) `requiresCamera`:

```js
router.beforeResolve(async to => {
  if (to.meta.requiresCamera) {
    try {
      await askForCameraPermission()
    } catch (error) {
      if (error instanceof NotAllowedError) {
        // ... manejar el error y luego cancelar la navegación
        return false
      } else {
        // error inesperado, cancelar la navegación y pasar el error al manejador global
        throw error
      }
    }
  }
})
```

`router.beforeResolve` es el lugar ideal para obtener datos o hacer cualquier otra operación que quieras evitar hacer si el usuario no puede entrar en una página.

<!-- TODO: how to combine with [`meta` fields](./meta.md) to create a [generic fetching mechanism](#TODO). -->

## Global después de los Hooks

También puedes registrar hooks después de globales, sin embargo a diferencia de los protectores, estos hooks no tienen una función `next` y no pueden afectar a la navegación:

```js
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath)
})
```

<!-- TODO: maybe add links to examples -->

Éstos son útiles para las analíticas, cambiar el título de la página, características de accesibilidad como anunciar la página y muchas otras cosas.

También reflejan [fallos de navegación](./navigation-failures.md) como tercer argumento:

```js
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath)
})
```

Aprende más sobre fallos de navegación en [su guía](./navigation-failures.md).

## Inyecciones globales dentro de los protectores

Desde Vue 3.3, es posible usar `inject()` dentro de los protectores de navegación. Esto es útil para inyectar propiedades globales como las [stores de pinia](https://pinia.vuejs.org). Cualquier cosa que se provea con `app.provide()` también es accesible dentro de `router.beforeEach()`, `router.beforeResolve()`, `router.afterEach()`:

```ts
// main.ts
const app = createApp(App)
app.provide('global', 'hola inyecciones')

// router.ts o main.ts
router.beforeEach((to, from) => {
  const global = inject('global') // 'hola inyecciones'
  // una store de pinia
  const userStore = useAuthStore()
  // ...
})
```

## Protección por Ruta

Puedes definir protecciones `beforeEnter` directamente en el objeto de configuración de una ruta:

```js
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // rechazar la navegación
      return false
    },
  },
]
```

Las protecciones `beforeEnter` **sólo se activan al entrar en la ruta**, no se activan cuando cambian los `params`, `query` o `hash` por ejemplo al pasar de `/users/2` a `/users/3` o al pasar de `/users/2#info` a `/users/2#projects`. Sólo se activan cuando se navega **desde una ruta** diferente.

También puedes pasar un array de funciones a `beforeEnter`, esto es útil cuando se reutilizan protectores para diferentes rutas:

```js
function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: [removeQueryParams, removeHash],
  },
  {
    path: '/about',
    component: UserDetails,
    beforeEnter: [removeQueryParams],
  },
]
```

Cuando se trabaja con [rutas anidadas](../essentials/nested-routes), tanto las rutas padre como las hijas pueden utilizar `beforeEnter`. Cuando se coloca en una ruta padre, no se ejecutará al pasar de una ruta hija a otra con el mismo padre. Por ejemplo:

```js
const routes = [
  {
    path: '/user',
    beforeEnter() {
      // ...
    },
    children: [
      { path: 'list', component: UserList },
      { path: 'details', component: UserDetails },
    ],
  },
]
```

El `beforeEnter` del ejemplo anterior no se disparará al moverse entre `/user/list` y `/user/details`, ya que comparten el mismo padre. Si en cambio pusiéramos la protección `beforeEnter` directamente en la ruta `details`, ésta sería invocada al moverse entre esas dos rutas.

::: tip
Es posible conseguir un comportamiento similar al de las protecciones por ruta utilizando [metacampos de ruta](./meta) y protecciones de navegación globales.
:::

## Protectores dentro del componente

Por último, puedes definir protectores de navegación de ruta directamente dentro de los componentes de ruta (los que se pasan a la configuración del enrutador)

### Usando la Options API

Puede añadir las siguientes opciones a los componentes de ruta:

- `beforeRouteEnter`
- `beforeRouteUpdate`
- `beforeRouteLeave`

```vue
<script>
export default {
  beforeRouteEnter(to, from) {
    // llamada antes de que se confirme la ruta que renderiza este componente.
    // NO tiene acceso a la instancia `this` del componente,
    // porque aún no se ha creado cuando se llama a esta protección.
  },
  beforeRouteUpdate(to, from) {
    // se llama cuando la ruta que renderiza este componente ha cambiado, pero este componente se reutiliza en la nueva ruta.
    // Por ejemplo, dada una ruta con los parámetros `/users/:id`, cuando navegamos entre `/users/1` y `/users/2`,
    // la misma instancia `UserDetails` del componente será reutilizada, y este hook será llamado cuando esto ocurra.
    // Debido a que el componente está montado mientras esto sucede, el protector de navegación tiene acceso a la instancia `this` del componente.
  },
  beforeRouteLeave(to, from) {
    // Llamado cuando la ruta que renderiza este componente está a punto de ser navegada.
    // Al igual que `beforeRouteUpdate`, tiene acceso a la instancia `this` del componente.
  },
}
</script>
```

La protección `beforeRouteEnter` **NO** tiene acceso a `this`, porque la protección es llamada antes de que se confirme la navegación, por lo que el nuevo componente entrante aún no ha sido creado.

Sin embargo, puedes acceder a la instancia pasando una llamada de retorno a `next`. El callback será llamado cuando la navegación sea confirmada, y la instancia del componente será pasada al callback como argumento:

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // acceso a la instancia pública del componente a través de `vm`.
  })
}
```

Ten en cuenta que `beforeRouteEnter` es la única protección que permite pasar un callback a `next`. Para `beforeRouteUpdate` y `beforeRouteLeave`, `this` ya está disponible, por lo que es innecesario pasar un callback y por lo tanto _no es soportado_:

```js
beforeRouteUpdate (to, from) {
  // sólo usa `this`
  this.name = to.params.name
}
```

El **protector de salida** se utiliza normalmente para evitar que el usuario abandone accidentalmente la ruta con ediciones sin guardar. La navegación puede cancelarse devolviendo `false`.

```js
beforeRouteLeave (to, from) {
  const answer = window.confirm('¿Realmente quieres salir? ¡tienes cambios sin guardar!')
  if (!answer) return false
}
```

### Usando la Composition API

Si estás escribiendo tu componente utilizando la Composition API, puedes añadir protecciones de actualización y salida a través de `onBeforeRouteUpdate` y `onBeforeRouteLeave` respectivamente. Para más detalles, consulta la [sección Composition API](./composition-api.md#navigation-guards).

## El flujo de Resolución de la Navegación Completo

1. Disparo de la navegación.
2. Llamada a las protecciones `beforeRouteLeave` en los componentes desactivados.
3. Llamada a las protecciones `beforeEach` globales.
4. Llamada a las protecciones `beforeRouteUpdate` en los componentes reutilizados.
5. Llamada a `beforeEnter` en las configuraciones de la ruta.
6. Resolución de los componentes de ruta asíncronos.
7. Llamada a `beforeRouteEnter` en los componentes activados.
8. Llamada a las protecciones `beforeResolve` globales.
9. Confirmación de la navegación.
10. Llamada a los hooks globales `afterEach`.
11. Disparo de las actualizaciones del DOM.
12. Llamada a los callbacks pasados a `next` en las protecciones `beforeRouteEnter` con instancias instanciadas.
