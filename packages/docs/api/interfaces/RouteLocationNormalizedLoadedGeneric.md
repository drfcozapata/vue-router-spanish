---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedLoadedGeneric

# Interface: RouteLocationNormalizedLoadedGeneric

Generic version of [RouteLocationNormalizedLoaded](../index.md#RouteLocationNormalizedLoaded) that is used when no [RouteMap](../index.md#RouteMap) is provided.

## Jerarquía

- [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

  ↳ **`RouteLocationNormalizedLoadedGeneric`**

  ↳↳ [`RouteLocationNormalizedLoadedTyped`](RouteLocationNormalizedLoadedTyped.md)

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

• **matched**: [`RouteLocationMatched`](RouteLocationMatched.md)[]

Array of [RouteLocationMatched](RouteLocationMatched.md) containing only plain components (any
lazy-loaded components have been loaded and were replaced inside the
`components` object) so it can be directly used to display routes. It
cannot contain redirect records either. **This property is non-enumerable**.

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

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name of the matched record

#### Heredado de

[RouteLocationNormalizedGeneric](RouteLocationNormalizedGeneric.md).[name](RouteLocationNormalizedGeneric.md#name)

---

### parámetros

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Object of decoded params extracted from the `path`.

#### Heredado de

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
