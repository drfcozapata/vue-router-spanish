# Migrando desde Vue 2

La mayor parte de la API de Vue Router se ha mantenido sin cambios durante su actualización de v3 (para Vue 2) a v4 (para Vue 3), pero todavía hay algunos cambios de última hora que puedes encontrar al migrar tu aplicación. Esta guía está aquí para ayudarte a entender por qué se han producido estos cambios y cómo adaptar tu aplicación para que funcione con Vue Router 4.

## Cambios de Ruptura

Los cambios están ordenados por su uso. Por lo tanto, se recomienda seguir esta lista en orden.

### new Router se convierte en createRouter

Vue Router ya no es una clase sino un conjunto de funciones. En lugar de escribir `new Router()`, ahora tienes que llamar a `createRouter`:

```js
// antes era
// import Router from 'vue-router'
import { createRouter } from 'vue-router'

const router = createRouter({
  // ...
})
```

### Nueva opción `history` para reemplazar `mode`

La opción `mode: 'history'` ha sido reemplazada por una más flexible llamada `history`. Dependiendo del modo que estuvieras usando, tendrás que reemplazarla por la función apropiada:

Aquí tienes un snippet completo:

```js
import { createRouter, createWebHistory } from 'vue-router'
// también existe createWebHashHistory y createMemoryHistory

createRouter({
  history: createWebHistory(),
  routes: [],
})
```

En SSR, necesitas pasar manualmente el historial apropiado:

```js
// router.js
let history = isServer ? createMemoryHistory() : createWebHistory()
let router = createRouter({ routes, history })
// en algún lugar de tu server-entry.js
router.push(req.url) // solicita la url
router.isReady().then(() => {
  // resolver la petición
})
```

**Razón**: permitir el tree shaking de historiales no usados así como implementar historiales personalizados para casos de uso avanzados como soluciones nativas.

### Movida la opción `base`

La opción `base` se pasa ahora como primer argumento a `createWebHistory` (y otros historiales):

```js
import { createRouter, createWebHistory } from 'vue-router'
createRouter({
  history: createWebHistory('/base-directory/'),
  routes: [],
})
```

### Eliminada la opción `fallback`

La opción `fallback` ya no es soportada al crear el enrutador:

```diff
-new VueRouter({
+createRouter({
-  fallback: false,
// otras opciones...
})
```

**Razón**: Todos los navegadores soportados por Vue soportan la [API HTML5 History](https://developer.mozilla.org/en-US/docs/Web/API/History_API), lo que nos permite evitar hacks en torno a la modificación de `location.hash` y utilizar directamente `history.pushState()`.

### Eliminadas las rutas `*` (star o catch all)

Las rutas catch all (`*`, `/*`) ahora deben definirse usando un parámetro con una regex personalizada:

```js
const routes = [
  // pathMatch es el nombre del parámetro, por ejemplo, yendo a /not/found yields
  // { params: { pathMatch: ['not', 'found'] }}
  // esto es gracias al último *, que significa parámetros repetidos y es necesario si tú
  // planeas navegar directamente a la ruta no encontrada usando su nombre
  { ruta: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  // si omites el último `*`, se codificará el carácter `/` en los parámetros al resolver o empujar
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
]
// mal ejemplo si se usan rutas con nombre:
router.resolve({
  name: 'bad-not-found',
  params: { pathMatch: 'not/found' },
}).href // '/not%2Ffound'
// buen ejemplo:
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'
```

:::tip
No es necesario añadir el `*` para los parámetros repetidos si no se planea enviar directamente a la ruta no encontrada utilizando su nombre. Si llamas a `router.push('/not/found/url')`, te proporcionará el parámetro `pathMatch` correcto.
:::

**Razón**: Vue Router ya no utiliza `path-to-regexp`, en su lugar implementa su propio sistema de análisis que permite la clasificación de rutas y permite el enrutamiento dinámico. Dado que normalmente añadimos una única ruta por proyecto, no hay grandes beneficios en soportar una sintaxis especial para `*`. La codificación de parámetros se codifica a través de las rutas, sin excepción para hacer las cosas más fáciles de predecir.

### La propiedad `currentRoute` es ahora una `ref()`.

Anteriormente se podía acceder directamente a las propiedades del objeto [`currentRoute`](https://v3.router.vuejs.org/api/#router-currentroute) de una instancia del router.

Con la introducción de vue-router v4, el tipo subyacente del objeto `currentRoute` en la instancia del router ha cambiado a `Ref<RouteLocationNormalizedLoaded>`, que proviene de los nuevos [fundamentos de reactividad](https://vuejs.org/guide/essentials/reactivity-fundamentals.html) introducidos en Vue 3.

Aunque esto no cambia nada si estás leyendo la ruta con `useRoute()` o `this.$route`, si estás accediendo directamente en la instancia del router, necesitarás acceder al objeto de ruta real a través de `currentRoute.value`:

```ts
const { page } = router.currentRoute.query // [!code --]
const { page } = router.currentRoute.value.query // [!code ++]
```

### Sustituido `onReady` por `isReady`.

La función existente `router.onReady()` ha sido reemplazada por `router.isReady()` que no toma ningún argumento y devuelve una Promise:

```js
// reemplaza
router.onReady(onSuccess, onError)
// con
router.isReady().then(onSuccess).catch(onError)
// o usa await:
try {
  await router.isReady()
  // onSuccess
} catch (err) {
  // onError
}
```

### `scrollBehavior` cambia

El objeto devuelto en `scrollBehavior` es ahora similar a [`ScrollToOptions`](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions): `x` pasa a llamarse `left` y `y` pasa a llamarse `top`. Mira [RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0035-router-scroll-position.md).

**Razón**: hacer el objeto similar a `ScrollToOptions` para hacerlo más familiar con las APIs nativas de JS y potencialmente habilitar nuevas opciones en el futuro.

### `<router-view>`, `<keep-alive>`, and `<transition>`

Ahora `transition` y `keep-alive` deben usarse **dentro** de `RouterView` a través de la API `v-slot`:

```vue-html
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

**Razón**: Este era un cambio necesario. Mira el [RFC relacionado](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0034-router-view-keep-alive-transitions.md).

### Eliminación de la prop `append` en `<router-link>`.

La prop `append` ha sido eliminada de `<router-link>`. En su lugar, puedes concatenar manualmente el valor a un `path` existente:

```vue-html
reemplaza
<router-link to="child-route" append>a ruta hija</router-link>
con
<router-link :to="append($route.path, 'child-route')">
  a ruta hija
</router-link>
```

Debes definir una función global `append` en tu instancia _App_:

```js
app.config.globalProperties.append = (path, pathToAppend) =>
  path + (path.endsWith('/') ? '' : '/') + pathToAppend
```

**Razón**: `append` no se usaba muy a menudo, es fácil de replicar en el terreno del usuario.

### Eliminación de `event` y `tag` en `<router-link>`.

Tanto `event`, como `tag` han sido eliminados de `<router-link>`. Puedes utilizar la [API `v-slot`](/guide/advanced/composition-api#uselink) para personalizar completamente `<router-link>`:

```vue-html
reemplaza
<router-link to="/about" tag="span" event="dblclick">About Us</router-link>
con
<router-link to="/about" custom v-slot="{ navigate }">
  <span @click="navigate" @keypress.enter="navigate" role="link">About Us</span>
</router-link>
```

**Razón**: Estas props se usaban a menudo juntas como algo diferente de una etiqueta `<a>` pero se introdujeron antes que la API `v-slot` y no se usan lo suficiente como para justificar que se añada al tamaño del bundle para todos.

### Eliminación de la propiedad `exact` en `<router-link>`

La propiedad `exact` se ha eliminado porque la advertencia que solucionaba ya no existe, así que puedes eliminarla sin problemas. Sin embargo, hay dos cosas que debe tener en cuenta:

- Ahora las rutas se activan en función de los registros de ruta que representan, en lugar de en función de los objetos de ubicación de ruta generados y sus propiedades `path`, `query` y `hash`.
- Sólo se compara la sección `path`; `query` y `hash` ya no se tienen en cuenta.

Si deseas personalizar este comportamiento, por ejemplo, tener en cuenta la sección `hash`, debes utilizar la [API `v-slot`](/guide/advanced/composition-api#useLink) para extender `<router-link>`.

**Razón**: Consulta los cambios de [RFC sobre correspondencia activa](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0028-router-active-link.md#summary) para más detalles.

### Las protecciones de navegación en mixins son ignoradas

Por el momento no se soportan las protecciones de navegación en los mixins. Puedes seguir su soporte en [vue-router#454](https://github.com/vuejs/router/issues/454).

### Eliminación de `router.match` y cambios en `router.resolve`.

Tanto `router.match`, como `router.resolve` se han fusionado en `router.resolve` con una firma ligeramente diferente. [Consulte la API](/api/interfaces/Router.md#resolve) para más detalles.

**Razón**: Unificación de varios métodos que se utilizaban para el mismo fin.

### Eliminación de `router.getMatchedComponents()`.

Se ha eliminado el método `router.getMatchedComponents` ya que los componentes coincidentes se pueden recuperar desde `router.currentRoute.value.matched`:

```js
router.currentRoute.value.matched.flatMap(record =>
  Object.values(record.components)
)
```

**Razón**: Este método sólo se utilizaba durante SSR y es un one liner que puede hacer el usuario.

### Los registros de redirección no pueden utilizar rutas especiales

Anteriormente, una característica no documentada permitía establecer un registro de redirección a una ruta especial como `/events/:id` y reutilizaría un parámetro existente `id`. Esto ya no es posible y hay dos opciones:

- Usar el nombre de la ruta sin el parámetro: `redirect: { name: 'events' }`. Ten en cuenta que esto no funcionará si el parámetro `:id` es opcional.
- Usar una función para recrear la nueva ubicación basada en el destino: `redirect: to => ({ name: 'events', params: to.params })`.

**Razón**: Esta sintaxis era poco usada y _otra forma de hacer las cosas_ que no era lo suficientemente corta comparada con las versiones anteriores a la vez que introducía cierta complejidad y hacía más pesado el router.

### **Todas** las navegaciones son ahora siempre asíncronas

Todas las navegaciones, incluyendo la primera, son ahora asíncronas, lo que significa que, si usas una `transition`, puede que necesites esperar a que el router esté _listo_ antes de montar la aplicación:

```js
app.use(router)
// Nota: en el lado del servidor, necesitas empujar manualmente la ubicación inicial.
router.isReady().then(() => app.mount('#app'))
```

De lo contrario habrá una transición inicial como si hubieras proporcionado la prop `appear` a `transition` porque el router muestra su ubicación inicial (nada) y luego muestra la primera ubicación.

Observa que **si tienes protectores de navegación sobre la navegación inicial**, puede que no quieras bloquear el renderizado de la app hasta que se resuelvan a menos que estés haciendo Server Side Rendering. En este escenario, no esperar a que el router esté listo para montar la app daría el mismo resultado que en Vue 2.

### Eliminación de `router.app`

`router.app` solía representar el último componente raíz (instancia de Vue) que inyectaba el router. Vue Router ahora puede ser utilizado de forma segura por múltiples aplicaciones Vue al mismo tiempo. Todavía se puede añadir cuando se utiliza el router:

```js
app.use(router)
router.app = app
```

También puedes extender la definición TypeScript de la interfaz `Router` para añadir la propiedad `app`.

**Razón**: Las aplicaciones de Vue 3 no existen en Vue 2 y ahora soportamos adecuadamente múltiples aplicaciones usando la misma instancia de Router, por lo que tener una propiedad `app` habría sido engañoso porque habría sido la aplicación en lugar de la instancia raíz.

### Pasar contenido al `<slot>` de los componentes de ruta

Antes podías pasar directamente una plantilla para ser renderizada por un componente de ruta `<slot>` anidándola bajo un componente `<router-view>`:

Traducción realizada con la versión gratuita del traductor DeepL.com

```vue-html
<router-view>
  <p>En Vue Router 3, renderizo dentro del componente de ruta</p>
</router-view>
```

Debido a la introducción de la api `v-slot` para `<router-view>`, debes pasarlo al `<component>` usando la API `v-slot`:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component">
  <p>En Vue Router 3, renderizo dentro del componente de ruta</p>
  </component>
</router-view>
```

### Eliminación de `parent` de las ubicaciones de ruta

Se ha eliminado la propiedad `parent` de las ubicaciones de ruta normalizadas (`this.$route` y objeto devuelto por `router.resolve`). Aún se puede acceder a ella a través del array `matched`:

```js
const parent = this.$route.matched[this.$route.matched.length - 2]
```

**Razón**: Tener `parent` y `children` crea referencias circulares innecesarias mientras que las propiedades ya se podían recuperar a través de `matched`.

### Eliminación de `pathToRegexpOptions

Las propiedades `pathToRegexpOptions` y `caseSensitive` de los registros de ruta han sido reemplazadas por las opciones `sensitive` y `strict` de `createRouter()`. Ahora también pueden pasarse directamente al crear el enrutador con `createRouter()`. Cualquier otra opción específica de `path-to-regexp` ha sido eliminada ya que `path-to-regexp` ya no se utiliza para analizar rutas.

### Eliminación de parámetros sin nombre

Debido a la eliminación de `path-to-regexp`, ya no son soportados los parámetros sin nombre:

- `/foo(/foo)?/suffix` pasa a ser `/foo/:_(foo)?/suffix`
- `/foo(foo)?` pasa a ser `/foo:_(foo)?`
- `/foo/(.*)` pasa a ser `/foo/:_(.*)`

:::tip
Observa que puedes usar cualquier nombre en lugar de `_` para el parámetro. La cuestión es proporcionar uno.
:::

### Uso de `history.state`.

Vue Router guarda información en `history.state`. Si tienes algún código llamando manualmente a `history.pushState()`, probablemente deberías evitarlo o refactorizarlo con un `router.push()` normal y un `history.replaceState()`:

```js
// reemplaza
history.pushState(myState, '', url)
// con
await router.push(url)
history.replaceState({ ...history.state, ...myState }, '')
```

Del mismo modo, si llamabas a `history.replaceState()` sin preservar el estado actual, necesitarás pasar el `history.state` actual:

```js
// reemplaza
history.replaceState({}, '', url)
// con
history.replaceState(history.state, '', url)
```

**Razón**: Utilizamos el estado del historial para guardar información sobre la navegación como la posición de desplazamiento, la ubicación anterior, etc.

### La opción `routes` es necesaria en `options`.

La propiedad `routes` es ahora obligatoria en `options`.

```js
createRouter({ routes: [] })
```

**Razón**: El router está diseñado para ser creado con rutas aunque puedes añadirlas más tarde. Necesitas al menos una ruta en la mayoría de los escenarios y esto se escribe una vez por aplicación en general.

### Rutas con nombre no existentes

Empujar o resolver una ruta con nombre no existente arroja un error:

```js
// Oops, cometimos un error en el nombre
router.push({ name: 'homee' }) // arroja
router.resolve({ name: 'homee' }) // arroja
```

**Razón**: Anteriormente, el router navegaba a `/` pero no mostraba nada (en lugar de la página de inicio). Lanzar un error tiene más sentido porque no podemos producir una URL válida a la que navegar.

### Missing required `params` on named routes

Empujar o resolver una ruta con nombre sin los parámetros requeridos producirá un error:

```js
// dada la siguiente ruta:
const routes = [{ path: '/users/:id', name: 'user', component: UserDetails }]

// Fallará si falta el parámetro `id`
router.push({ name: 'user' })
router.resolve({ name: 'user' })
```

**Razón**: La misma que en el caso anterior.

### Las rutas hijas con un `path` vacío ya no añaden un slash

Dada cualquier ruta con nombre anidada con un `path` vacío:

```js
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard-parent',
    component: DashboardParent,
    children: [
      { path: '', name: 'dashboard', component: DashboardDefault },
      {
        path: 'settings',
        name: 'dashboard-settings',
        component: DashboardSettings,
      },
    ],
  },
]
```

La navegación o resolución a la ruta con nombre `dashboard` producirá ahora una URL **sin slash final**:

```js
router.resolve({ name: 'dashboard' }).href // '/dashboard'
```

Esto tiene un importante efecto secundario sobre los registros `redirect` hijos como estos:

```js
const routes = [
  {
    path: '/parent',
    component: Parent,
    children: [
      // esto redirigiría ahora a `/home` en lugar de `/parent/home`
      { path: '', redirect: 'home' },
      { path: 'home', component: Home },
    ],
  },
]
```

Observa que esto funcionará si `path` era `/parent/` ya que la ubicación relativa `home` a `/parent/` es efectivamente `/parent/home` pero la ubicación relativa de `home` a `/parent` es `/home`.

<!-- Más información sobre enlaces relativos [en el cookbook](../../cookbook/relative-links.md). -->

**Razón**: Esto es para hacer consistente el comportamiento del slash final: por defecto todas las rutas permiten un slash final. Esto puede desactivarse usando la opción `strict` y añadiendo manualmente (o no) una barra a las rutas.

<!-- TODO: tal vez una entrada en el cookbook -->

### Codificación de las propiedades `$route`

Los valores decodificados en `params`, `query`, y `hash` son ahora consistentes sin importar donde se inicie la navegación (los navegadores antiguos seguirán produciendo `path` y `fullPath` sin codificar). La navegación inicial debería producir los mismos resultados que las navegaciones integradas en la aplicación.

Dada cualquier [ubicación de ruta normalizada](/api/#RouteLocationNormalized):

- Los valores de `path`, `fullPath` ya no se descodifican. Aparecerán tal y como los proporciona el navegador (la mayoría de los navegadores los proporcionan codificados). Por ejemplo, si se escribe directamente en la barra de direcciones `https://example.com/hello world` se obtendrá la versión codificada: `https://example.com/hello%20world` y tanto `path` como `fullPath` serán `/hello%20world`.
- Ahora `hash` está decodificado, de esta forma puede ser copiado: `router.push({ hash: $route.hash })` y usarse directamente en la opción `el` de [scrollBehavior](/api/interfaces/RouterOptions.md#scrollBehavior).
- Al utilizar `push`, `resolve` y `replace` y proporcionar una ubicación `string` o una propiedad `path` en un objeto, **debe codificarse** (como en la versión anterior). En cambio, `params`, `query` y `hash` deben proporcionarse en su versión no codificada.
- El carácter de slash (`/`) se decodifica ahora correctamente dentro de `params` mientras que sigue produciendo una versión codificada en la URL: `%2F`.

**Razón**: Esto permite copiar fácilmente las propiedades existentes de una ubicación al llamar a `router.push()` y `router.resolve()`, y hacer que la ubicación de la ruta resultante sea consistente en todos los navegadores. `router.push()` es ahora equipotente, lo que significa que llamar a `router.push(route.fullPath)`, `router.push({ hash: route.hash })`, `router.push({ query: route.query })`, y `router.push({ params: route.params })` no creará codificación extra.

### `$router.push()` y `$router.replace()` - Callbacks `onComplete` y `onAbort

Anteriormente, `$router.push()` y `$router.replace()` aceptaban dos callbacks, `onComplete` y `onAbort`, como segundo y tercer argumento. Se llamaban después de una navegación basada en el resultado. Con la introducción de una API basada en Promise, estas llamadas de retorno son redundantes y han sido eliminadas. Consulta [Fallos de navegación ](/guide/advanced/navigation-failures.md) para obtener más información sobre cómo detectar las navegaciones exitosas y fallidas.

**Razón**: Reducir el tamaño de la librería adaptándose a los estándares JS establecidos (Promises).

### Cambios en TypeScript

Para hacer los tipados más consistentes y expresivos, algunos tipos han sido renombrados:

| `vue-router@3` | `vue-router@4`          |
| -------------- | ----------------------- |
| RouteConfig    | RouteRecordRaw          |
| Location       | RouteLocation           |
| Route          | RouteLocationNormalized |

## Nuevas Funcionalidades

Algunas de las nuevas funcionalidades a tener en cuenta en Vue Router 4 incluyen:

- [Enrutado Dinámico](../advanced/dynamic-routing.md)
- [Composition API](../advanced/composition-api.md)
<!-- - Custom History implementation -->
