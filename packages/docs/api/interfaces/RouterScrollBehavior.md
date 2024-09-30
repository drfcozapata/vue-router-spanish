---
editLink: false
---

[Documentación de la API](../index.md) / RouterScrollBehavior

# Interface: RouterScrollBehavior

Type of the `scrollBehavior` option that can be passed to `createRouter`.

## Invocable

### RouterScrollBehavior

▸ **RouterScrollBehavior**(`to`, `from`, `savedPosition`): `Awaitable`\<`false` \| `void` \| `ScrollPosition`\>

#### Parámetros

| Nombre          | Tipo                                                                              | Descripción                                   |
| :-------------- | :-------------------------------------------------------------------------------- | :-------------------------------------------- |
| `to`            | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)             | Route location where we are navigating to     |
| `from`          | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) | Route location where we are navigating from   |
| `savedPosition` | `null` \| `_ScrollPositionNormalized`                                             | saved position if it exists, `null` otherwise |

#### Retorna

`Awaitable`\<`false` \| `void` \| `ScrollPosition`\>
