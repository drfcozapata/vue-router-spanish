---
editLink: false
---

[Documentación de la API](../index.md) / NavigationHookAfter

# Interface: NavigationHookAfter

Hook de navegación que se acciona después de resolver una navegación.

## Invocable

### NavigationHookAfter

▸ **NavigationHookAfter**(`to`, `from`, `failure?`): `unknown`

#### Parámetros

| Nombre     | Tipo                                                                              |
| :--------- | :-------------------------------------------------------------------------------- |
| `to`       | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)             |
| `from`     | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `failure?` | `void` \| [`NavigationFailure`](NavigationFailure.md)                             |

#### Retorna

`unknown`
