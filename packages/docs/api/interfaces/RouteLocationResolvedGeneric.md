---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationResolvedGeneric

# Interface: RouteLocationResolvedGeneric

Generic version of [RouteLocationResolved](../index.md#RouteLocationResolved). It is used when no [RouteMap](../index.md#RouteMap) is provided.

## Jerarquía

- [`RouteLocationGeneric`](RouteLocationGeneric.md)

  ↳ **`RouteLocationResolvedGeneric`**

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[fullPath](RouteLocationGeneric.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[hash](RouteLocationGeneric.md#hash)

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

[RouteLocationGeneric](RouteLocationGeneric.md).[matched](RouteLocationGeneric.md#matched)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[meta](RouteLocationGeneric.md#meta)

---

### nombre

• **name**: `null` \| [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name of the matched record

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[name](RouteLocationGeneric.md#name)

---

### parámetros

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Object of decoded params extracted from the `path`.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[params](RouteLocationGeneric.md#params)

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[path](RouteLocationGeneric.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[query](RouteLocationGeneric.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Heredado de

[RouteLocationGeneric](RouteLocationGeneric.md).[redirectedFrom](RouteLocationGeneric.md#redirectedFrom)
