# Vistas con Nombres

<VueSchoolLink
  href="https://vueschool.io/lessons/vue-router-4-named-views"
  title="Aprende cómo usar las vistas con nombres"
/>

A veces es necesario mostrar varias vistas al mismo tiempo en lugar de anidarlas, por ejemplo, creando un diseño con una vista `sidebar` y una vista `main`. Aquí es donde las vistas con nombre resultan útiles. En lugar de tener una única salida en tu vista, puedes tener varias y dar a cada una de ellas un nombre. Una vista `router` sin nombre tendrá como nombre `default`.

```vue-html
<router-view class="view left-sidebar" name="LeftSidebar" />
<router-view class="view main-content" />
<router-view class="view right-sidebar" name="RightSidebar" />
```

Una vista se renderiza usando un componente, por lo tanto múltiples vistas requieren múltiples componentes para la misma ruta. Asegúrate de usar la opción `components` (con un **s**):

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // abreviatura de LeftSidebar: LeftSidebar
        LeftSidebar,
        // coinciden con el atributo `name` de `<router-view>`.
        RightSidebar,
      },
    },
  ],
})
```

Puedes encontrar una demo funcional de este ejemplo [aquí](https://codesandbox.io/s/named-views-vue-router-4-examples-rd20l).

## Vistas con Nombre Anidadas

Es posible crear diseños complejos utilizando vistas con nombre con vistas anidadas. Al hacerlo, también necesitarás dar un nombre a las vistas anidadas. Tomemos como ejemplo un panel de configuración:

```
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- `Nav` es un componente normal
- `UserSettings` es el componente padre de la vista.
- `UserEmailsSubscriptions`, `UserProfile` y `UserProfilePreview` son componentes anidados.

**Nota**: _Olvidémonos de cómo debería ser el HTML/CSS para representar este diseño y centrémonos en los componentes utilizados_.

La sección `<template>` para el componente `UserSettings` en el diseño anterior tendría este aspecto:

```vue-html
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <NavBar />
  <router-view />
  <router-view name="helper" />
</div>
```

Entonces puedes lograr el layout de arriba con esta configuración de ruta:

```js
{
  path: '/settings',
  // También podrías tener vistas con nombre en la parte superior
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```

Puedes encontrar una demo funcional de este ejemplo [aquí](https://codesandbox.io/s/nested-named-views-vue-router-4-examples-re9yl?&initialpath=%2Fsettings%2Femails).
