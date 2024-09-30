# Rutas Tipadas <Badge type="tip" text="v4.4.0+" />

::: danger
‼️ Funcionalidad experimental
:::

![RouterLink para autocompletar](https://user-images.githubusercontent.com/664177/176442066-c4e7fa31-4f06-4690-a49f-ed0fd880dfca.png)

Es posible configurar el router para que tenga un _mapa_ de rutas tipadas. Aunque esto puede hacerse manualmente, se recomienda usar el plugin [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) para generar las rutas y los tipos automáticamente.

## Configuración manual

He aquí un ejemplo de cómo configurar manualmente rutas tipadas:

```ts
// importa el tipo `RouteRecordInfo` de vue-router para tipar tus rutas
import type { RouteRecordInfo } from 'vue-router'

// Define una interfaz de rutas
export interface RouteNamedMap {
  // cada clave es un nombre
  home: RouteRecordInfo<
    // aquí tenemos el mismo nombre
    'home',
    // esta es la ruta, aparecerá en el autocompletado
    '/',
    // estos son los parámetros en bruto. En este caso, no hay parámetros permitidos
    Record<never, never>,
    // estos son los parámetros normalizados
    Record<never, never>
  >
  // repite para cada ruta..
  // Ten en cuenta que puedes nombrarlos como quieras
  'named-param': RouteRecordInfo<
    'named-param',
    '/:name',
    { name: string | number }, // valor en bruto
    { name: string } // valor normalizado
  >
  'article-details': RouteRecordInfo<
    'article-details',
    '/articles/:id+',
    { id: Array<number | string> },
    { id: string[] }
  >
  'not-found': RouteRecordInfo<
    'not-found',
    '/:path(.*)',
    { path: string },
    { path: string }
  >
}

// Por último, tendrás que aumentar los tipos de Vue Router con este mapa de rutas
declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
```

::: tip

Esto es realmente tedioso y propenso a errores. Por eso se recomienda usar [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) para generar las rutas y los tipos automáticamente.

:::
