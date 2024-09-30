---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationAsRelativeGeneric

# Interface: RouteLocationAsRelativeGeneric

Generic version of [RouteLocationAsRelative](../index.md#RouteLocationAsRelative). It is used when no [RouteMap](../index.md#RouteMap) is provided.

## Jerarquía

- [`RouteQueryAndHash`](RouteQueryAndHash.md)

- [`RouteLocationOptions`](RouteLocationOptions.md)

  ↳ **`RouteLocationAsRelativeGeneric`**

  ↳↳ [`RouteLocationAsRelativeTyped`](RouteLocationAsRelativeTyped.md)

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

### nombre

• **nombre** `Opcional`: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

---

### parámetros

• **parámetro** `Opcional`: [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric)

---

### ruta

• **ruta** `Opcional`: `undefined`

A relative path to the current location. This property should be removed

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
