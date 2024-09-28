# Enlaces activos

Es común que las aplicaciones tengan un componente de navegación que muestre una lista de componentes RouterLink. Dentro de esa lista, puede que queramos dar un estilo diferente a los enlaces de la ruta activa en ese momento.

El componente RouterLink añade dos clases CSS a los enlaces activos, `router-link-active` y `router-link-exact-active`. Para entender la diferencia entre ellas, primero tenemos que considerar cómo Vue Router decide que un enlace está _activo_.

## ¿Cuándo están activos los enlaces?

Un RouterLink se considera **_activo_** si:

1. Coincide con el mismo registro de ruta (es decir, ruta configurada) que la ubicación actual.
2. Tiene los mismos valores para los `parámetros` que la ubicación actual.

Si estás usando [rutas anidadas](./nested-routes), cualquier enlace a rutas antecesoras también se considerará activo si los `parámetros` relevantes coinciden.

Otras propiedades de ruta, como la [`query`](../../api/interfaces/RouteLocationBase.html#query), no se tienen en cuenta.

La ruta no tiene que coincidir perfectamente. Por ejemplo, utilizar un [`alias`](./redirect-and-alias#Alias) se consideraría una coincidencia, siempre que resuelva al mismo registro de ruta y `params`.

Si una ruta tiene un [`redirect`](./redirect-and-alias#Redirect), no se seguirá al comprobar si un enlace está activo.

## Enlaces activos exactos

Una coincidencia **_exacta_** no incluye las rutas antecesoras.

Imaginemos que tenemos las siguientes rutas:

```js
const routes = [
  {
    path: '/user/:username',
    component: User,
    children: [
      {
        path: 'role/:roleId',
        component: Role,
      },
    ],
  },
]
```

Entonces, considera estos dos enlaces:

```vue-html
<RouterLink to="/user/erina">
  User
</RouterLink>
<RouterLink to="/user/erina/role/admin">
  Role
</RouterLink>
```

Si la ruta de ubicación actual es `/user/erina/role/admin` entonces ambos se considerarían _activos_, por lo que la clase `router-link-active` se aplicaría a ambos enlaces. Pero sólo el segundo enlace se consideraría _exact_, por lo que sólo ese segundo enlace tendría la clase `router-link-exact-active`.

## Configurando las clases

El componente RouterLink tiene dos props, `activeClass` y `exactActiveClass`, que pueden usarse para cambiar los nombres de las clases que se aplican:

```vue-html
<RouterLink
  activeClass="border-indigo-500"
  exactActiveClass="border-indigo-700"
  ...
>
```

Los nombres de las clases por defecto también pueden cambiarse globalmente pasando las opciones `linkActiveClass` y `linkExactActiveClass` a `createRouter()`:

```js
const router = createRouter({
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
  // ...
})
```

Consulta [Ampliación de RouterLink](../advanced/extending-router-link) para técnicas de personalización más avanzadas usando la API `v-slot`.
