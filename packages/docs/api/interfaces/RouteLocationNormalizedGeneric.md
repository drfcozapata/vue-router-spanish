---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedGeneric

# Interface: RouteLocationNormalizedGeneric

Generic version of [RouteLocationNormalized](../index.md#RouteLocationNormalized) that is used when no [RouteMap](../index.md#RouteMap) is provided.

## Hierarchy

- [`_RouteLocationBase`](RouteLocationBase.md)

  ↳ **`RouteLocationNormalizedGeneric`**

  ↳↳ [`RouteLocationNormalizedTyped`](RouteLocationNormalizedTyped.md)

  ↳↳ [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md)

## Properties

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[fullPath](RouteLocationBase.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[hash](RouteLocationBase.md#hash)

---

### matched

• **matched**: [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Array of [RouteRecordNormalized](RouteRecordNormalized.md)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[meta](RouteLocationBase.md#meta)

---

### name

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name of the matched record

#### Overrides

[\_RouteLocationBase](RouteLocationBase.md).[name](RouteLocationBase.md#name)

---

### params

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Object of decoded params extracted from the `path`.

#### Overrides

[\_RouteLocationBase](RouteLocationBase.md).[params](RouteLocationBase.md#params)

---

### path

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[path](RouteLocationBase.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[query](RouteLocationBase.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Inherited from

[\_RouteLocationBase](RouteLocationBase.md).[redirectedFrom](RouteLocationBase.md#redirectedFrom)
