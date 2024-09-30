---
editLink: false
---

[Documentación de la API](../index.md) / \_RouteLocationBase

# Interface: \_RouteLocationBase

Base properties for a normalized route location.

## Jerarquía

- `Pick`\<[`MatcherLocation`](MatcherLocation.md), `"name"` \| `"path"` \| `"params"` \| `"meta"`\>

  ↳ **`_RouteLocationBase`**

  ↳↳ [`RouteLocationGeneric`](RouteLocationGeneric.md)

  ↳↳ [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

Pick.meta

---

### nombre

• **name**: `null` \| [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name of the matched record

#### Heredado de

Pick.name

---

### parámetros

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Object of decoded params extracted from the `path`.

#### Heredado de

Pick.params

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

Pick.path

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.
