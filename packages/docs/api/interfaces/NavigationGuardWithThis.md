---
editLink: false
---

[Documentación de la API](../index.md) / NavigationGuardWithThis

# Interface: NavigationGuardWithThis\<T\>

Protector de navegación con un parámetro de tipo para `this`.

**`Mira`**

[TypesConfig](TypesConfig.md)

## Parámetros de tipo

| Nombre |
| :----- |
| `T`    |

## Invocable

### NavigationGuardWithThis

▸ **NavigationGuardWithThis**(`this`, `to`, `from`, `next`): [`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>

#### Parámetros

| Nombre | Tipo                                                                              |
| :----- | :-------------------------------------------------------------------------------- |
| `this` | `T`                                                                               |
| `to`   | [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)             |
| `from` | [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md) |
| `next` | [`NavigationGuardNext`](NavigationGuardNext.md)                                   |

#### Retorna

[`_Awaitable`](../index.md#_Awaitable)\<[`NavigationGuardReturn`](../index.md#NavigationGuardReturn)\>
