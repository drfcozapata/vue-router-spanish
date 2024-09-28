---
sidebarDepth: 0
---

# Navegación Programática

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-programmatic-navigation"
  title="Aprende cómo navegar programáticamente"
/>

Aparte de usar `<router-link>` para crear etiquetas de anclaje para la navegación declarativa, podemos hacerlo programáticamente usando los métodos de instancia del router.

## Navegar a una ubicación diferente

**Nota: Los ejemplos siguientes se refieren a la instancia del enrutador como `router`. Dentro de un componente, puedes acceder al enrutador usando la propiedad `$router`, por ejemplo `this.$router.push(...)`. Si utilizas la Composition API, puedes acceder al enrutador llamando a [`useRouter()`](../advanced/composition-api).**.

Para navegar a una URL diferente, utiliza `router.push`. Este método empuja una nueva entrada en la pila del historial, por lo que cuando el usuario hace clic en el botón de retroceso del navegador que se llevará a la URL previa.

Este es el método al que se llama internamente cuando se pulsa un `<router-link>`, por lo que pulsar `<router-link :to=«...»>` es el equivalente a llamar a `router.push(...)`.

| Declarativa               | Programática       |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

El argumento puede ser una ruta de cadena o un objeto descriptor de la localización. Ejemplos:

```js
// ruta de cadena literal
router.push('/users/eduardo')

// objeto con ruta
router.push({ path: '/users/eduardo' })

// ruta con nombre y parámetros para que el enrutador construya la url
router.push({ name: 'user', params: { username: 'eduardo' } })

// con query, resultando en /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// con hash, resultando en /about#team
router.push({ path: '/about', hash: '#team' })
```

**Nota**: `params` se ignora si se proporciona un `path`, que no es el caso de `query`, como se muestra en el ejemplo anterior. En su lugar, es necesario proporcionar el `name` de la ruta o especificar manualmente el `path` completo con cualquier parámetro:

```js
const username = 'eduardo'
// podemos construir manualmente la url pero tendremos que manejar la codificación nosotros mismos
router.push(`/user/${username}`) // -> /user/eduardo
// lo mismo que
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// si es posible usa `name` y `params` para beneficiarte de la codificación automática de la URL
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params` no puede usarse junto con `path`.
router.push({ path: '/user', params: { username } }) // -> /user
```

Cuando especifiques `params`, asegúrate de proporcionar una `string` o un `number` (o un array de estos para [parámetros repetibles](./route-matching-syntax.md#Repeatable-params)). **Cualquier otro tipo (como objetos, booleanos, etc.) se codificará automáticamente**. Para [parámetros opcionales ](./route-matching-syntax.md#Optional-parameters), puedes proporcionar una cadena vacía (`""`) o `null` como valor para eliminarlo.

Dado que la proposición `to` acepta el mismo tipo de objeto que `router.push`, se aplican exactamente las mismas reglas a ambos.

`router.push` y todos los demás métodos de navegación devuelven un _Promise_ que nos permite esperar a que la navegación termine y saber si ha tenido éxito o ha fallado. Hablaremos más sobre esto en [Manejo de la navegación ](../advanced/navigation-failures.md).

## Reemplazar la localización actual

Actúa como `router.push`, la única diferencia es que navega sin empujar una nueva entrada del historial, como su nombre indica - reemplaza la entrada actual.

| Declarativa                       | Programática          |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

También es posible añadir directamente una propiedad `replace: true` al argumento `to` que se pasa a `router.push`:

```js
router.push({ path: '/home', replace: true })
// equivalente a
router.replace({ path: '/home' })
```

## Historial de navegación

<VueSchoolLink
href="https://vueschool.io/lessons/go-back"
title="Aprende a usar Vue Router para volver atrás"
/>

Este método toma un único entero como parámetro que indica por cuántos pasos avanzar o retroceder en la pila del historial, similar a `window.history.go(n)`.

Ejemplos

```js
// avanzar un registro, igual que router.forward()
router.go(1)

// retroceder un registro, igual que router.back()
router.go(-1)

// avanzar 3 registros
router.go(3)

// falla silenciosamente si no hay tantos registros
router.go(-100)
router.go(100)
```

## Manipulación del Historial

Te habrás dado cuenta de que `router.push`, `router.replace` y `router.go` son homólogos de [`window.history.pushState`, `window.history.replaceState` y `window.history.go`](https://developer.mozilla.org/en-US/docs/Web/API/History), e imitan las APIs de `window.history`.

Por lo tanto, si ya estás familiarizado con las [APIs del Historial del Navegador](https://developer.mozilla.org/en-US/docs/Web/API/History_API), manipular el historial te resultará familiar cuando utilices Vue Router.

Vale la pena mencionar que los métodos de navegación de Vue Router (`push`, `replace`, `go`) funcionan consistentemente sin importar la opción `history` pasada al crear la instancia del router.
