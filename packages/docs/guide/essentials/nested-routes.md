# Rutas Anidadas

<VueSchoolLink
  href="https://vueschool.io/lessons/nested-routes"
  title="Aprende acerca de rutas anidadas"
/>

Las interfaces de usuario de algunas aplicaciones están constituidas por componentes anidados a varios niveles de profundidad. En este caso, es muy común que los segmentos de una URL correspondan a una determinada estructura de componentes anidados, por ejemplo:

```
/user/johnny/profile                   /user/johnny/posts
┌──────────────────┐                  ┌──────────────────┐
│ User             │                  │ User             │
│ ┌──────────────┐ │                  │ ┌──────────────┐ │
│ │ Profile      │ │  ●────────────▶  │ │ Posts        │ │
│ │              │ │                  │ │              │ │
│ └──────────────┘ │                  │ └──────────────┘ │
└──────────────────┘                  └──────────────────┘
```

Con Vue Router, puedes expresar esta relación utilizando las configuraciones de rutas anidadas.

Considerando la app que creamos en el capítulo anterior:

```vue
<!-- App.vue -->
<template>
  <router-view />
</template>
```

```vue
<!-- User.vue -->
<template>
  <div>User {{ $route.params.id }}</div>
</template>
```

```js
import User from './User.vue'

// estas se pasan a `createRouter`.
const routes = [{ path: '/user/:id', component: User }]
```

El `<router-view>` aquí es un `router-view` de nivel superior. Representa el componente correspondiente a una ruta de nivel superior. Del mismo modo, un componente renderizado también puede contener su propio `<router-view>` anidado. Por ejemplo, si añadimos uno dentro de la plantilla del componente `User`:

```vue
<!-- User.vue -->
<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view />
  </div>
</template>
```

Para renderizar componentes en este `router-view` anidado, necesitamos usar la opción `children` en cualquiera de las rutas:

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // UserProfile será renderizado dentro del <router-view> de User
        // cuando coincida /user/:id/profile
        path: 'profile',
        component: UserProfile,
      },
      {
        // UserPosts se mostrará dentro del <router-view> de User
        // cuando coincida /user/:id/posts
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

**Observa que las rutas anidadas que empiecen por `/` se tratarán como rutas raíz. Esto permite aprovechar el anidamiento de componentes sin tener que utilizar una URL anidada.**

Como puedes ver, la opción `children` es simplemente otro Array de rutas como el propio `routes`. Por lo tanto, puedes seguir anidando vistas tanto como necesites.

En este punto, con la configuración anterior, cuando visites `/user/eduardo`, no se mostrará nada dentro del `router-view` de `User`, porque no hay ninguna ruta anidada. Tal vez quieras mostrar algo allí. En ese caso puedes proporcionar una ruta anidada vacía:

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      // UserHome se mostrará dentro del <router-view> de User
      // cuando coincida /user/:id
      { path: '', component: UserHome },

      // ...otras sub-rutas
    ],
  },
]
```

Puedes encontrar una demo de este ejemplo [aquí](https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo).

## Rutas Anidadas con Nombre

Cuando se trabaja con [Rutas con Nombre](./named-routes.md), normalmente se **nombran las rutas hijas**:

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    // observa que sólo la ruta hija tiene nombre
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```

Esto asegurará que al navegar a `/user/:id` siempre se muestre la ruta anidada.

En algunos casos, es posible que quieras navegar a una ruta con nombre sin navegar a la ruta anidada. Por ejemplo, si quieres navegar a `/user/:id` sin mostrar la ruta anidada. En ese caso, puede **también** nombrar la ruta padre pero recuerda **que al recargar la página siempre se mostrará la ruta hija anidada** ya que se considera una navegación a la ruta `/users/:id` en lugar de a la ruta nombrada:

```js
const routes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: User,
    children: [{ path: '', name: 'user', component: UserHome }],
  },
]
```

## Omitiendo componentes padre <Badge text=«4.1+» />

También podemos aprovechar la relación padre-hijo entre rutas sin necesidad de anidar componentes de ruta. Esto puede ser útil para agrupar rutas con un prefijo de ruta común, o cuando se trabaja con características más avanzadas, como [ protectores de navegación por ruta ](../advanced/navigation-guards#Per-Route-Guard) o [campos meta de ruta ](../advanced/meta).

Para conseguirlo, omitimos las opciones `component` y `components` de la ruta padre:

```js
const routes = [
  {
    path: '/admin',
    children: [
      { path: '', component: AdminOverview },
      { path: 'users', component: AdminUserList },
      { path: 'users/:id', component: AdminUserDetails },
    ],
  },
]
```

Como el padre no especifica un componente de ruta, el nivel superior `<router-view>` omitirá al padre y utilizará el componente del hijo correspondiente.
