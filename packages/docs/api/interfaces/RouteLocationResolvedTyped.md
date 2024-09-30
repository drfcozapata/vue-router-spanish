---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationResolvedTyped

# Interface: RouteLocationResolvedTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationResolved](../index.md#RouteLocationResolved) type.

## Parámetros de tipo

| Nombre     | Tipo                                                     |
| :--------- | :------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap`                                 |

## Jerarquía

- [`RouteLocationTyped`](RouteLocationTyped.md)\<`RouteMap`, `Name`\>

  ↳ **`RouteLocationResolvedTyped`**

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[fullPath](RouteLocationTyped.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[hash](RouteLocationTyped.md#hash)

---

### href

• **href**: `string`

Resolved `href` for the route location that will be set on the `<a href="...">`.

---

### matched

• **matched**: [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Array of [RouteRecord](../index.md#RouteRecord) containing components as they were
passed when adding records. It can also contain redirect records. This
can't be used directly. **This property is non-enumerable**.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[matched](RouteLocationTyped.md#matched)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[meta](RouteLocationTyped.md#meta)

---

### nombre

• **name**: `Extract`\<`Name`, `string` \| `symbol`\>

Name of the matched record

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[name](RouteLocationTyped.md#name)

---

### parámetros

• **params**: `RouteMap`[`Name`][``"params"``]

Object of decoded params extracted from the `path`.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[params](RouteLocationTyped.md#params)

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[path](RouteLocationTyped.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[query](RouteLocationTyped.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Heredado de

[RouteLocationTyped](RouteLocationTyped.md).[redirectedFrom](RouteLocationTyped.md#redirectedFrom)
