---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationPathRaw

# Interface: RouteLocationPathRaw

Route Location that can infer the possible paths.

## Jerarquía

- [`RouteQueryAndHash`](RouteQueryAndHash.md)

- [`MatcherLocationAsPath`](MatcherLocationAsPath.md)

- [`RouteLocationOptions`](RouteLocationOptions.md)

  ↳ **`RouteLocationPathRaw`**

## Propiedades

### force

• `Opcional` **force**: `boolean`

Triggers the navigation even if the location is the same as the current one.
Note this will also add a new entry to the history unless `replace: true`
is passed.

#### Heredado de

[RouteLocationOptions](RouteLocationOptions.md).[force](RouteLocationOptions.md#force)

---

### hash

• `Opcional` **hash**: `string`

#### Heredado de

[RouteQueryAndHash](RouteQueryAndHash.md).[hash](RouteQueryAndHash.md#hash)

---

### ruta

• **path**: `string`

#### Heredado de

[MatcherLocationAsPath](MatcherLocationAsPath.md).[path](MatcherLocationAsPath.md#path)

---

### query

• `Opcional` **query**: [`LocationQueryRaw`](../index.md#LocationQueryRaw)

#### Heredado de

[RouteQueryAndHash](RouteQueryAndHash.md).[query](RouteQueryAndHash.md#query)

---

### replace

• `Opcional` **replace**: `boolean`

Replace the entry in the history instead of pushing a new entry

#### Heredado de

[RouteLocationOptions](RouteLocationOptions.md).[replace](RouteLocationOptions.md#replace)

---

### state

• `Opcional` **state**: [`HistoryState`](HistoryState.md)

State to save using the History API. This cannot contain any reactive
values and some primitives like Symbols are forbidden. More info at
https://developer.mozilla.org/en-US/docs/Web/API/History/state

#### Heredado de

[RouteLocationOptions](RouteLocationOptions.md).[state](RouteLocationOptions.md#state)
