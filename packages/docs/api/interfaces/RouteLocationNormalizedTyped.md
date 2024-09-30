---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedTyped

# Interface: RouteLocationNormalizedTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationNormalized](../index.md#RouteLocationNormalized) type.

## Parámetros de tipo

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Hierarchy

- [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

  ↳ **`RouteLocationNormalizedTyped`**

## Properties

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Inherited from

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[fullPath](RouteLocationNormalizedGeneric.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Inherited from

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

#### Inherited from

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[meta](RouteLocationNormalizedGeneric.md#meta)

---

### name

• **name**: `Extract`\<`Name`, `string` \| `symbol`\>

Name of the matched record

#### Overrides

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[name](RouteLocationNormalizedGeneric.md#name)

---

### params

• **params**: `RouteMap`[`Name`][``"params"``]

Object of decoded params extracted from the `path`.

#### Overrides

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[params](RouteLocationNormalizedGeneric.md#params)

---

### path

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Inherited from

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[path](RouteLocationNormalizedGeneric.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Inherited from

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[query](RouteLocationNormalizedGeneric.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Inherited from

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[redirectedFrom](RouteLocationNormalizedGeneric.md#redirectedFrom)
