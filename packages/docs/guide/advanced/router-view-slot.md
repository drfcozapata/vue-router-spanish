# Slot RouterView

El componente RouterView expone un slot que puede ser usado para renderizar el componente de la ruta:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" />
</router-view>
```

El código anterior es equivalente a usar `<router-view />` sin el slot, pero el slot proporciona flexibilidad extra cuando queremos trabajar con otras funcionalidades.

## KeepAlive y Transición

Cuando trabajamos con el componente [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html), normalmente queremos que mantenga vivos los componentes de la ruta, no el propio RouterView. Podemos conseguirlo poniendo el KeepAlive dentro del slot:

```vue-html
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
```

Del mismo modo, el slot nos permite utilizar un componente [Transition](https://vuejs.org/guide/built-ins/transition.html) para la transición entre componentes de ruta:

```vue-html
<router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
```

También podemos utilizar KeepAlive dentro de un componente Transition:

```vue-html
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
```

Para más información sobre el uso de RouterView con el componente Transition, consulta la guía [Transitions](./transitions).

## Pasando props y slots

Podemos usar el slot para pasar props o slots al componente de ruta:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" some-prop="a value">
    <p>Some slotted content</p>
  </component>
</router-view>
```

En la práctica, esto usualmente no es algo que quieras hacer, ya que los componentes de ruta **todos necesitarían usar los mismos props y slots**. Consulta [Pasando Props a Componentes de Ruta](../essentials/passing-props) para otras formas de pasar props.

## Template refs

Usar el slot nos permite poner un [template ref](https://vuejs.org/guide/essentials/template-refs.html) directamente en el componente de ruta:

```vue-html
<router-view v-slot="{ Component }">
  <component :is="Component" ref="mainContent" />
</router-view>
```

Si por el contrario pusiéramos el ref en `<router-view>` entonces el ref se poblaría con la instancia RouterView, en lugar de con el componente de ruta.
