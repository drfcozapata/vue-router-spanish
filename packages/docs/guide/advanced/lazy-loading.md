# Rutas de Carga Perezosa

<VueSchoolLink
  href="https://vueschool.io/lessons/lazy-loading-routes-vue-cli-only"
  title="Aprende acerca de las rutas de carga perezosa"
/>

Cuando se construyen aplicaciones con un bundler, el bundle de JavaScript puede llegar a ser bastante grande, y por lo tanto afectar al tiempo de carga de la página. Sería más eficiente si pudiéramos dividir los componentes de cada ruta en trozos separados, y sólo cargarlos cuando la ruta es visitada.

Vue Router soporta [importaciones dinámicas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import), lo que significa que puedes reemplazar las importaciones estáticas por dinámicas:

```js
// replaza
// import UserDetails from './views/UserDetails'
// con
const UserDetails = () => import('./views/UserDetails.vue')

const router = createRouter({
  // ...
  routes: [
    { path: '/users/:id', component: UserDetails }
    // o usarlas directamente en la definición de la ruta
    { path: '/users/:id', component: () => import('./views/UserDetails.vue') },
  ],
})
```

La opción `component` (y `components`) acepta una función que devuelve una Promise de un componente y Vue Router **sólo lo buscará cuando accedas a la página por primera vez**, luego usará la versión en caché. Lo que significa que también puedes tener funciones más complejas siempre que devuelvan una Promise:

```js
const UserDetails = () =>
  Promise.resolve({
    /* definición del componente */
  })
```

En general, es una buena idea **utilizar siempre importaciones dinámicas** para todas tus rutas.

::: tip Nota
**No utilices** [Componentes asíncronos](https://vuejs.org/guide/components/async.html) para las rutas. Los componentes asíncronos se pueden seguir usando dentro de los componentes de ruta, pero los componentes de ruta en sí no son más que importaciones dinámicas.
:::

Cuando se utiliza un bundler como webpack, esto se beneficiará automáticamente de la [división de código](https://webpack.js.org/guides/code-splitting/)

Si usas Babel, tendrás que añadir el plugin [syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/) para que Babel pueda analizar correctamente la sintaxis.

## Agrupando Componentes en el Mismo Fragmento

### Con webpack

A veces podemos querer agrupar todos los componentes anidados bajo la misma ruta en el mismo fragmento asíncrono. Para conseguirlo necesitamos usar [fragmentos con nombre](https://webpack.js.org/guides/code-splitting/#dynamic-imports) proporcionando un nombre de fragmento usando una sintaxis de comentario especial (requiere webpack > 2.4):

```js
const UserDetails = () =>
  import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () =>
  import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () =>
  import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```

webpack agrupará cualquier módulo asíncrono con el mismo nombre de fragmento en el mismo fragmento asíncrono.

### Con Vite

En Vite puedes definir los fragmentos bajo [`rollupOptions`](https://vitejs.dev/config/#build-rollupoptions):

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/UserDetails',
            './src/UserDashboard',
            './src/UserProfileEdit',
          ],
        },
      },
    },
  },
})
```
