---
editLink: false
---

[Documentación de la API](../index.md) / NavigationGuard

# Interface: NavigationGuard

Protector de Navegación.

## Invocable

### NavigationGuard

▸ **NavigationGuard**(`to`, `from`, `next`): [`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>

#### Parámetros

| Nombre | Tipo                                                                              |
| :----- | :-------------------------------------------------------------------------------- |
| `to`   | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)             |
| `from` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `next` | [`NavigationGuardNext`](NavigationGuardNext.md)                                   |

#### Retorna

[`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>
