# Transiciones

<VueSchoolLink
  href="https://vueschool.io/lessons/route-transitions"
  title="Aprende acerca de las transiciones de ruta"
/>

Para usar transiciones en las rutas de tus componentes y navegaciones animadas, necesitas usar el [slot `<RouterView>`](./router-view-slot):

```vue-html
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
```

[Todas las APIs de transición](https://vuejs.org/guide/built-ins/transition.html) funcionan igual aquí.

## Transición por Ruta

El uso anterior aplicará la misma transición para todas las rutas. Si quieres que cada componente de la ruta tenga diferentes transiciones, puedes combinar [metacampos](./meta.md) y un `nombre` dinámico en el `<transition>`:

```js
const routes = [
  {
    path: '/custom-transition',
    component: PanelLeft,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/other-transition',
    component: PanelRight,
    meta: { transition: 'slide-right' },
  },
]
```

```vue-html
<router-view v-slot="{ Component, route }">
  <!-- Usar una transición personalizada o fallback a `fade` -->
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
```

## Transición Dinámica Basada en Rutas

También es posible determinar la transición a utilizar dinámicamente basándose en la relación entre la ruta de destino y la ruta actual. Usando un snippet muy similar al anterior:

```vue-html
<!-- usar un nombre de transición dinámico -->
<router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
```

Podemos añadir un [hook posterior a la navegación](./navigation-guards.md#Global-After-Hooks) para añadir dinámicamente información al `metacampo` basándonos en la profundidad de la ruta.

```js
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})
```

## Forzar una transición entre vistas reutilizadas

Vue podría reutilizar automáticamente componentes que se parecen, evitando cualquier transición. Afortunadamente, es posible [añadir un atributo `key`](https://vuejs.org/api/built-in-special-attributes.html#key) para forzar transiciones. Esto también permite disparar transiciones permaneciendo en la misma ruta con diferentes parámetros:

```vue-html
<router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
```

<!-- TODO: interactive example -->
<!-- See full example [here](https://github.com/vuejs/vue-router/blob/dev/examples/transitions/app.js). -->
