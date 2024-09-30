---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNormalizedLoadedTyped

# Interface: RouteLocationNormalizedLoadedTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationNormalizedLoaded](../index.md#RouteLocationNormalizedLoaded) type.

## Parámetros de tipo

| Nombre     | Tipo                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Jerarquía

- [`RouteLocationNormalizedLoadedGeneric`](RouteLocationNormalizedLoadedGeneric.md)

  ↳ **`RouteLocationNormalizedLoadedTyped`**

## Propiedades

### fullPath

• **fullPath**: `string`

The whole location including the `search` and `hash`. This string is
percentage encoded.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[fullPath](RouteLocationNormalizedLoadedGeneric.md#fullPath)

---

### hash

• **hash**: `string`

Hash of the current location. If present, starts with a `#`.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[hash](RouteLocationNormalizedLoadedGeneric.md#hash)

---

### matched

• **matched**: [`RouteLocationMatched`](RouteLocationMatched.md)[]

Array of [RouteLocationMatched](RouteLocationMatched.md) containing only plain components (any
lazy-loaded components have been loaded and were replaced inside the
`components` object) so it can be directly used to display routes. It
cannot contain redirect records either. **This property is non-enumerable**.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[matched](RouteLocationNormalizedLoadedGeneric.md#matched)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Merged `meta` properties from all the matched route records.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[meta](RouteLocationNormalizedLoadedGeneric.md#meta)

---

### nombre

• **name**: `Extract`\<`Name`, `string` \| `symbol`\>

Name of the matched record

#### Overrides

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[name](RouteLocationNormalizedLoadedGeneric.md#name)

---

### parámetros

• **params**: `RouteMap`[`Name`][``"params"``]

Object of decoded params extracted from the `path`.

#### Overrides

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[params](RouteLocationNormalizedLoadedGeneric.md#params)

---

### ruta

• **path**: `string`

Percentage encoded pathname section of the URL.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[path](RouteLocationNormalizedLoadedGeneric.md#path)

---

### query

• **query**: [`LocationQuery`](../index.md#LocationQuery)

Object representation of the `search` property of the current location.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[query](RouteLocationNormalizedLoadedGeneric.md#query)

---

### redirectedFrom

• **redirectedFrom**: `undefined` \| [`RouteLocationGeneric`](RouteLocationGeneric.md)

Contains the location we were initially trying to access before ending up
on the current location.

#### Heredado de

[RouteLocationNormalizedLoadedGeneric](RouteLocationNormalizedLoadedGeneric.md).[redirectedFrom](RouteLocationNormalizedLoadedGeneric.md#redirectedFrom)
