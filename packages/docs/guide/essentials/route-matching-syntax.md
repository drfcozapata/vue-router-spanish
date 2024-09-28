# Sintaxis del Emparejamiento de Rutas

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-advanced-routes-matching-syntax"
  title="Aprende cómo usar la sintaxis avanzada del emparejamiento de rutas"
/>

La mayoría de las aplicaciones utilizarán rutas estáticas como `/about` y rutas dinámicas como `/users/:userId`, como acabamos de ver en [Emparejamiento de Rutas Dinámicas](./dynamic-matching.md), pero Vue Router tiene mucho más para ofrecer.

:::tip
En haras de la simplicidad, todos los registros de ruta **omiten la propiedad `component`** para enfocarse en el valor `path`.
:::

## Expresiones regulares personalizadas en los parámetros

Cuando se define un parámetro como `:userId`, usamos internamente la siguiente expresión regular `([^/]+)` (al menos un carácter que no sea una barra `/`) para extraer los parámetros de las URL. Esto funciona bien a menos que sea necesario diferenciar dos rutas en función al contenido del parámetro. Imagine dos rutas `/:orderId` y `/:productName`, ambas coincidirían exactamente con las mismas URL, por lo que necesitamos una forma de diferenciarlas. La forma más fácil sería agregar una sección estática a la ruta que las diferencie:

```js
const routes = [
  // se corresponde con /o/3549
  { path: '/o/:orderId' },
  // se corresponde con /p/books
  { path: '/p/:productName' },
]
```

Pero en algunos escenarios, no queremos añadir esa sección estática `/o` o `/p`. Sin embargo, `orderId` es siempre un número, mientras que `productName` puede ser cualquier cosa, así que podemos especificar un regex personalizado para un parámetro entre paréntesis:

```js
const routes = [
  // /:orderId -> se corresponde sólo con números
  { path: '/:orderId(\\d+)' },
  // /:productName -> se corresponde con cualquier otra cosa
  { path: '/:productName' },
]
```

Ahora, ir a `/25` coincidirá con `/:orderId` mientras que ir a cualquier otra cosa coincidirá con `/:productName`. ¡El orden del array `routes` ni siquiera importa!

:::tip
Asegúrate de **escapar las barras invertidas (`\`)** como hicimos con `\d` (se convierte en `\\d`) para pasar el carácter de barra invertida en una cadena en JavaScript.
:::

## Parámetros repetibles

Si necesitas hacer coincidir rutas con múltiples secciones como `/first/second/third`, debes marcar un parámetro como repetible con `*` (0 o más) y `+` (1 o más):

```js
const routes = [
  // /:chapters -> coincide con /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
  // /:chapters -> coincide con /, /uno, /uno/dos, /uno/dos/tres, etc.
  { path: '/:chapters*' },
]
```

Esto te dará un array de parámetros en lugar de una cadena y también requerirá que pases un array cuando uses rutas con nombre:

```js
// dado { ruta: '/:chapters*', nombre: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// produce /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// produce /a/b

// dado { ruta: '/:chapters+', nombre: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// arroja un Error porque `chapters` está vacío
```

También se pueden combinar con una expresión regular personalizada añadiéndola **después de los paréntesis de cierre**:

```js
const routes = [
  // sólo coincide con números
  // coincide con /1, /1/2, etc
  { path: '/:chapters(\\d+)+' },
  // coincide con /, /1, /1/2, etc
  { path: '/:chapters(\\d+)*' },
]
```

## Opciones de ruta sensibles y estrictas

Por defecto, todas las rutas son indiferentes a mayúsculas y minúsculas y coinciden con rutas con o sin barra al final. Por ejemplo, una ruta `/users` coincide con `/users`, `/users/`, e incluso `/Users/`. Este comportamiento puede configurarse con las opciones `strict` y `sensitive`, que pueden establecerse tanto a nivel de enrutador como de la ruta:

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // coincidirá con /users/posva pero no:
    // - /users/posva/ debido a strict: true
    // - /Users/posva debido a sensitive: true
    { path: '/users/:id', sensitive: true },
    // coincidirá con /users, /Users, y /users/42 pero no con /users/ o /users/42/
    { path: '/users/:id?' },
  ],
  strict: true, // se aplica a todas las rutas
})
```

## Parámetros opcionales

También puede marcar un parámetro como opcional utilizando el modificador `?` (0 ó 1):

```js
const routes = [
  // coincidirá con /users y /users/posva
  { path: '/users/:userId?' },
  // coincidirá con /users y /users/42
  { path: '/users/:userId(\\d+)?' },
]
```

Ten en cuenta que técnicamente `*` también marca un parámetro como opcional, pero los parámetros `?` no pueden repetirse.

Si el segmento de ruta contiene más de **sólo un parámetro opcional**, no coincidirá con una ruta **sin la barra al final**. Por ejemplo:

- `/users/:uid?-:name?` no coincidirá con `/users`, sólo con `/users/-` o incluso con `/users/-/`.
- `/users/:uid(\\d+)?:name?` no coincidirá con `/users`, sólo con `/users/`, `/users/2`, `/users/2/`, etc.

Puede jugar con la sintaxis de emparejamiento [en el playground](https://paths.esm.dev/?p=AAMsIPQg4AoKzidgQFoEXAmw-IEBBRYYOE0SkABTASiz1qgBpgQA1QTsFjAb3h2onsmlAmGIFsCXjXh4AIA.&t=/users/2/#)

## Depurando

Si necesitas averiguar cómo se transforman tus rutas en una expresión regular para entender por qué una ruta no coincide o para informar de un error, puedes utilizar la herramienta [path ranker tool](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#). Ésta permite compartir tus rutas a través de la URL.
