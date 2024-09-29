# Vue Router y la Composition API

<VueSchoolLink
  href="https://vueschool.io/lessons/router-and-the-composition-api"
  title="Aprende cómo usar Vue Router con la Composition API"
/>

La introducción de la [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) de Vue introdujo nuevas posibilidades, pero para poder sacar todo el potencial de Vue Router, necesitaremos usar unas cuantas funciones nuevas para reemplazar el acceso a `this` y a los protectores de navegación dentro del componente.

## Accediendo al Router y a la Ruta actual dentro del `setup`.

Como no tenemos acceso a `this` dentro del `setup`, no podemos acceder directamente a `this.$router` o `this.$route`. En su lugar, utilizamos los composables `useRouter` y `useRoute`:

```vue
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function pushWithQuery(query) {
  router.push({
    name: 'search',
    query: {
      ...route.query,
      ...query,
    },
  })
}
</script>
```

El objeto `route` es un objeto reactivo. En la mayoría de los escenarios, deberías **evitar vigilar todo el objeto `route`**. En su lugar, puedes observar directamente las propiedades que esperas cambiar:

```vue
<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const userData = ref()

// Obtener la información del usuario cuando cambien los parámetros
watch(
  () => route.params.id,
  async newId => {
    userData.value = await fetchUser(newId)
  }
)
</script>
```

Observa que aún tenemos acceso a `$router` y `$route` en los templates, así que no hay necesidad de usar `useRouter` o `useRoute` si sólo necesitamos esos objetos en el template.

## Protectores de Navegación

Vue Router expone las protecciones de actualización y salida como funciones de la Composition API:

```vue
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue'

// igual que la opción beforeRouteLeave pero sin acceso a `this`
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  )
  // cancelar la navegación y permanecer en la misma página
  if (!answer) return false
})

const userData = ref()

// igual que la opción beforeRouteUpdate pero sin acceso a `this`
onBeforeRouteUpdate(async (to, from) => {
  // sólo buscar al usuario si el id ha cambiado ya que puede que sólo haya cambiado la consulta o el hash
  if (to.params.id !== from.params.id) {
    userData.value = await fetchUser(to.params.id)
  }
})
</script>
```

Los protectores de la Composition API también pueden usarse en cualquier componente renderizado por `<router-view>`, y no tienen que usarse directamente en el componente de la ruta como los protectores dentro del componente.

## `useLink`

Vue Router expone el comportamiento interno de RouterLink como un composable. Éste acepta un objeto reactivo como las props de `RouterLink` y expone propiedades de bajo nivel para construir tu propio componente `RouterLink` o generar enlaces personalizados:

```vue
<script setup>
import { RouterLink, useLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  // añade @ts-ignore si usas TypeScript
  ...RouterLink.props,
  inactiveClass: String,
})

const {
  // el objeto de ruta resuelto
  route,
  // el href a utilizar en un enlace
  href,
  // la ref booleana que indica si el enlace está activo
  isActive,
  // la ref booleana que indica si el enlace está exactamente activo
  isExactActive,
  // la función para navegar al enlace
  navigate,
} = useLink(props)

const isExternalLink = computed(
  () => typeof props.to === 'string' && props.to.startsWith('http')
)
</script>
```

Observa que el `v-slot` del RouterLink da acceso a las mismas propiedades que el composable `useLink`.
