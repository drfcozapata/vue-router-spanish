---
editLink: false
---

[Documentación de la API](../index.md) / RouterMatcher

# Interface: RouterMatcher

Internal RouterMatcher

## Propiedades

### addRoute

• **addRoute**: (`record`: [`RouteRecordRaw`](../index.md#RouteRecordRaw), `parent?`: `RouteRecordMatcher`) => () => `void`

#### Declaración de tipo

▸ (`record`, `parent?`): () => `void`

##### Parámetros

| Nombre    | Tipo                                           |
| :-------- | :--------------------------------------------- |
| `record`  | [`RouteRecordRaw`](../index.md#RouteRecordRaw) |
| `parent?` | `RouteRecordMatcher`                           |

##### Retorna

`fn`

▸ (): `void`

##### Retorna

`void`

---

### clearRoutes

• **clearRoutes**: () => `void`

#### Declaración de tipo

▸ (): `void`

##### Retorna

`void`

---

### getRecordMatcher

• **getRecordMatcher**: (`name`: `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\>) => `undefined` \| `RouteRecordMatcher`

#### Declaración de tipo

▸ (`name`): `undefined` \| `RouteRecordMatcher`

##### Parámetros

| Nombre | Tipo                                                                            |
| :----- | :------------------------------------------------------------------------------ |
| `name` | `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\> |

##### Retorna

`undefined` \| `RouteRecordMatcher`

---

### getRoutes

• **getRoutes**: () => `RouteRecordMatcher`[]

#### Declaración de tipo

▸ (): `RouteRecordMatcher`[]

##### Retorna

`RouteRecordMatcher`[]

---

### resolve

• **resolve**: (`location`: `MatcherLocationRaw`, `currentLocation`: [`MatcherLocation`](MatcherLocation.md)) => [`MatcherLocation`](MatcherLocation.md)

Resolves a location. Gives access to the route record that corresponds to the actual path as well as filling the corresponding params objects

**`Param`**

MatcherLocationRaw to resolve to a url

**`Param`**

MatcherLocation of the current location

#### Declaración de tipo

▸ (`location`, `currentLocation`): [`MatcherLocation`](MatcherLocation.md)

Resolves a location. Gives access to the route record that corresponds to the actual path as well as filling the corresponding params objects

##### Parámetros

| Nombre            | Tipo                                    | Descripción                             |
| :---------------- | :-------------------------------------- | :-------------------------------------- |
| `location`        | `MatcherLocationRaw`                    | MatcherLocationRaw to resolve to a url  |
| `currentLocation` | [`MatcherLocation`](MatcherLocation.md) | MatcherLocation of the current location |

##### Retorna

[`MatcherLocation`](MatcherLocation.md)

## Methods

### removeRoute

▸ **removeRoute**(`matcher`): `void`

#### Parámetros

| Nombre    | Tipo                 |
| :-------- | :------------------- |
| `matcher` | `RouteRecordMatcher` |

#### Retorna

`void`

▸ **removeRoute**(`name`): `void`

#### Parámetros

| Nombre | Tipo                                                                            |
| :----- | :------------------------------------------------------------------------------ |
| `name` | `NonNullable`\<[`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)\> |

#### Retorna

`void`
