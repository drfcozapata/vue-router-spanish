---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedTyped

# Interface: RouteLocationNormalizedTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationNormalized](../index.md#RouteLocationNormalized) type.

## Parámetros de tipo

| Nombre     | Tipo                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Jerarquía

- [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

  ↳ **`RouteLocationNormalizedTyped`**

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[fullPath](RouteLocationNormalizedGeneric.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[hash](RouteLocationNormalizedGeneric.md#hash)

---

### matched

• **matched**: [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Array of [RouteRecordNormalized](RouteRecordNormalized.md)

#### Overrides

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[matched](RouteLocationNormalizedGeneric.md#matched)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[meta](RouteLocationNormalizedGeneric.md#meta)

---

### nombre

• **name**: `Extract`\<`Name`, `string` \| `symbol`\>

Name of the matched record

#### Overrides

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[name](RouteLocationNormalizedGeneric.md#name)

---

### parámetros

• **params**: `RouteMap`[`Name`][``"params"``]

Object of decoded params extracted from the `path`.

#### Overrides

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[params](RouteLocationNormalizedGeneric.md#params)

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[path](RouteLocationNormalizedGeneric.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[query](RouteLocationNormalizedGeneric.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[redirectedFrom](RouteLocationNormalizedGeneric.md#redirectedFrom)
