---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationAsPathGeneric

# Interface: RouteLocationAsPathGeneric

Versión genérica de [RouteLocationAsPath](../index.md#RouteLocationAsPath). Ésta se utiliza cuando no se proporciona [RouteMap](../index.md#RouteMap).

## Jerarquía

- [`RouteQueryAndHash`](RouteQueryAndHash.md)

- [`RouteLocationOptions`](RouteLocationOptions.md)

  ↳ **`RouteLocationAsPathGeneric`**

  ↳↳ [`RouteLocationAsPathTyped`](RouteLocationAsPathTyped.md)

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

Percentage encoded pathname section of the URL.

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
