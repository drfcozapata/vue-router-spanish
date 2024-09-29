# Obtención de Datos

A veces es necesario obtener datos del servidor cuando se activa una ruta. Por ejemplo, antes de mostrar un perfil de usuario, necesitas obtener los datos del usuario desde el servidor. Podemos conseguir esto de dos maneras diferentes:

- **Obtención después de la navegación**: realizar primero la navegación y obtener los datos en el hook del ciclo de vida del componente entrante. Mostrar un estado de carga mientras se obtienen los datos.

- **Obtención antes de la navegación**: Obtener los datos antes de la navegación en la protección de entrada de la ruta y realizar la navegación después de obtener los datos.

Técnicamente, ambas opciones son válidas. En última instancia, depende de la experiencia de usuario que se busque.

## Obtención Después de la Navegación

Cuando se utiliza este enfoque, navegamos y renderizamos el componente entrante inmediatamente, y obtenemos los datos en el propio componente. Esto nos da la oportunidad de mostrar un estado de carga mientras los datos se obtienen a través de la red, y también podemos manejar la carga de forma diferente para cada vista.

Supongamos que tenemos un componente `Post` que necesita obtener los datos de una entrada basándose en `route.params.id`:

::: code-group

```vue [Composition API]
<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from './api.js'

const route = useRoute()

const loading = ref(false)
const post = ref(null)
const error = ref(null)

// mira los params de la ruta para obtener los datos de nuevo
watch(() => route.params.id, fetchData, { immediate: true })

async function fetchData(id) {
  error.value = post.value = null
  loading.value = true

  try {
    // sustituye `getPost` por tu utilidad de obtención de datos / API wrapper
    post.value = await getPost(id)
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
</script>
```

```vue [Options API]
<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { getPost } from './api.js'

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    // observa los parámetros de la ruta para obtener los datos de nuevo
    this.$watch(
      () => this.$route.params.id,
      this.fetchData,
      // obtén los datos cuando la vista sea creada y los datos estén
      // ya están siendo observados
      { immediate: true }
    )
  },
  methods: {
    async fetchData(id) {
      this.error = this.post = null
      this.loading = true

      try {
        // reemplaza `getPost` con tu utilidad de obtención de datos / API wrapper
        this.post = await getPost(id)
      } catch (err) {
        this.error = err.toString()
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
```

:::

## Obtención Antes de la Navegación

Con este enfoque obtenemos los datos antes de navegar a la nueva ruta. Podemos realizar la obtención de datos en la protección `beforeRouteEnter` del componente entrante, y sólo llamar a `next` cuando la obtención se haya completado. El callback pasado a `next` será llamado **después de que el componente sea montado**:

```js
export default {
  data() {
    return {
      post: null,
      error: null,
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const post = await getPost(to.params.id)
      // `setPost` es un método definido debajo
      next(vm => vm.setPost(post))
    } catch (err) {
      // `setError` es un método definido debajo
      next(vm => vm.setError(err))
    }
  },
  // cuando la ruta cambia y este componente ya está montado,
  // la lógica será ligeramente diferente.
  beforeRouteUpdate(to, from) {
    this.post = null
    getPost(to.params.id).then(this.setPost).catch(this.setError)
  },
  methods: {
    setPost(post) {
      this.post = post
    },
    setError(err) {
      this.error = err.toString()
    },
  },
}
```

El usuario permanecerá en la vista anterior mientras se obtiene el recurso para la vista entrante. Por lo tanto, se recomienda mostrar una barra de progreso o algún tipo de indicador mientras se obtienen los datos. Si la obtención de datos falla, también es necesario mostrar algún tipo de mensaje de advertencia global.

<!-- ### Using Composition API -->

<!-- TODO: -->
