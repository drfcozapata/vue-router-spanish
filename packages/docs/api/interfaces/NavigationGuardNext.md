---
editLink: false
---

[Documentación de la API](../index.md) / NavigationGuardNext

# Interface: NavigationGuardNext

Callback `next()` pasado a los protectores de navegación.

## Invocable

### NavigationGuardNext

▸ **NavigationGuardNext**(): `void`

#### Retorna

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`error`): `void`

#### Parámetros

| Nombre  | Tipo    |
| :------ | :------ |
| `error` | `Error` |

#### Retorna

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`location`): `void`

#### Parámetros

| Nombre     | Tipo                                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `location` | `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) |

#### Retorna

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`valid`): `void`

#### Parámetros

| Nombre  | Tipo                     |
| :------ | :----------------------- |
| `valid` | `undefined` \| `boolean` |

#### Retorna

`void`

### NavigationGuardNext

▸ **NavigationGuardNext**(`cb`): `void`

#### Parámetros

| Nombre | Tipo                                                                     |
| :----- | :----------------------------------------------------------------------- |
| `cb`   | [`NavigationGuardNextCallback`](../index.md#NavigationGuardNextCallback) |

#### Retorna

`void`
