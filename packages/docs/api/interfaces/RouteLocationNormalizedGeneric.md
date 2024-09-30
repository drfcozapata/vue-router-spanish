---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedGeneric

# Interface: RouteLocationNormalizedGeneric

Generic version of [RouteLocationNormalized](../index.md#RouteLocationNormalized) that is used when no [RouteMap](../index.md#RouteMap) is provided.

## Jerarquía

- [`_RouteLocationBase`](RouteLocationBase.md)

  ↳ **`RouteLocationNormalizedGeneric`**

  ↳↳ [`RouteLocationNormalizedTyped`](RouteLocationNormalizedTyped.md)

  ↳↳ [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md)

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[fullPath](RouteLocationBase.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[hash](RouteLocationBase.md#hash)

---

### matched

• **matched**: [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Array of [RouteRecordNormalized](RouteRecordNormalized.md)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[meta](RouteLocationBase.md#meta)

---

### nombre

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name of the matched record

#### Overrides

[\_RouteLocationBase](RouteLocationBase.md).[name](RouteLocationBase.md#name)

---

### parámetros

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Object of decoded params extracted from the `path`.

#### Overrides

[\_RouteLocationBase](RouteLocationBase.md).[params](RouteLocationBase.md#params)

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[path](RouteLocationBase.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[query](RouteLocationBase.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Heredado de

[\_RouteLocationBase](RouteLocationBase.md).[redirectedFrom](RouteLocationBase.md#redirectedFrom)
