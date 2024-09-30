# Esperando por el resultado de una Navegación

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-detecting-navigation-failures"
  title="Aprende cómo detectar fallos de navegación"
/>

Cuando se utiliza `router-link`, Vue Router llama a `router.push` para activar una navegación. Mientras que el comportamiento esperado para la mayoría de los enlaces es navegar a un usuario a una nueva página, hay algunas situaciones en las que los usuarios permanecerán en la misma página:

- Los usuarios ya están en la página a la que intentan navegar.
- Un [protector de navegación ](./navigation-guards.md) aborta la navegación haciendo `return false`.
- Un nuevo protector de navegación tiene lugar mientras el anterior no ha terminado.
- Un [protector de navegación](./navigation-guards.md) redirige a otro lugar devolviendo una nueva ubicación (por ejemplo, `return '/login'`).
- Un [protector de navegación](./navigation-guards.md) lanza un `Error`.

Si queremos hacer algo después de que termine una navegación, necesitamos una forma de esperar después de llamar a `router.push`. Imagina que tenemos un menú móvil que nos permite ir a diferentes páginas y sólo queremos ocultar el menú una vez que hemos navegado a la nueva página, podríamos querer hacer algo como esto:

```js
router.push('/my-profile')
this.isMenuOpen = false
```

Pero esto cerrará el menú inmediatamente porque **las navegaciones son asíncronas**, necesitamos `esperar` la promesa devuelta por `router.push`:

```js
await router.push('/my-profile')
this.isMenuOpen = false
```

Ahora el menú se cerrará una vez finalizada la navegación, pero también se cerrará si se impidió la navegación. Necesitamos una forma de detectar si realmente hemos cambiado la página en la que estamos o no.

## Detectando Fallos de Navegación

Si se impide la navegación y el usuario permanece en la misma página, el valor resuelto de la `Promise` devuelta por 'router.push' será un _Fallo de Navegación_. En caso contrario, será un valor _falsy_ (normalmente `undefined`). Esto nos permite diferenciar el caso en el que navegamos fuera de donde estamos o no:

```js
const navigationResult = await router.push('/my-profile')

if (navigationResult) {
  // navegación no permitida
} else {
  // navegación exitosa (esto incluye el caso de una redirección)
  this.isMenuOpen = false
}
```

Los _Fallos de Navegación_ son instancias de `Error` con algunas propiedades extra que nos dan suficiente información para saber qué navegación fue impedida y por qué. Para comprobar la naturaleza de un resultado de navegación, utiliza la función `isNavigationFailure`:

```js
import { NavigationFailureType, isNavigationFailure } from 'vue-router'

// intentar salir de la página de edición de un artículo sin guardar
const failure = await router.push('/articles/2')

if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
  // mostrar una pequeña notificación al usuario
  showToast('You have unsaved changes, discard and leave anyway?')
}
```

::: tip
Si omites el segundo parámetro: `isNavigationFailure(failure)`, sólo comprobará si `failure` es un _Fallo de navegación_.
:::

## Fallos globales de navegación

Puedes detectar fallos globales de navegación globalmente usando el [protector de navegación `router.afterEach()`](./navigation-guards.md#Global-After-Hooks):

```ts
router.afterEach((to, from, failure) => {
  if (failure) {
    sendToAnalytics(to, from, failure)
  }
})
```

## Diferenciando Fallos de Navegación

Como dijimos al principio, hay diferentes situaciones que abortan una navegación, todas ellas resultan en diferentes _Fallos de Navegación_. Se pueden diferenciar usando los parámetros `isNavigationFailure` y `NavigationFailureType`. Hay tres tipos diferentes:

- `aborted`: `false` fue devuelto dentro de un protector de navegación a la navegación.
- `cancelled`: Tuvo lugar una nueva navegación antes de que la navegación actual pudiera terminar. Por ejemplo, se llamó a `router.push` mientras se esperaba dentro de un protector de navegación.
- `duplicated`: Se ha evitado la navegación porque ya estamos en la ubicación de destino.

## Propiedades de los _Fallos de Navegación_

Todos los fallos de navegación exponen las propiedades `to` y `from` para reflejar la ubicación actual así como la ubicación de destino de la navegación que ha fallado:

```js
// intentando acceder a la página de administración
router.push('/admin').then(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
    failure.to.path // '/admin'
    failure.from.path // '/'
  }
})
```

En todos los casos, `to` y `from` son localizaciones de ruta normalizadas.

## Detectando Redirecciones

Cuando devolvemos una nueva ubicación dentro de un protector de navegación, estamos activando una nueva navegación que sustituye a la actual. A diferencia de otros valores de retorno, una redirección no impide una navegación, **crea una nueva**. Por lo tanto, se comprueba de forma diferente, leyendo la propiedad `redirectedFrom` en una Ubicación de Ruta:

```js
await router.push('/my-profile')
if (router.currentRoute.value.redirectedFrom) {
  // redirectedFrom es una ubicación de ruta resuelta como to y from en los protectores de navegación
}
```
