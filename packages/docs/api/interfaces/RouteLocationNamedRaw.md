---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationNamedRaw

# Interface: RouteLocationNamedRaw

Route Location that can infer the necessary params based on the name.

## Jerarquía

- [`RouteQueryAndHash`](RouteQueryAndHash.md)

- [`LocationAsRelativeRaw`](LocationAsRelativeRaw.md)

- [`RouteLocationOptions`](RouteLocationOptions.md)

  ↳ **`RouteLocationNamedRaw`**

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

#### Heredado de

[LocationAsRelativeRaw](LocationAsRelativeRaw.md).[name](LocationAsRelativeRaw.md#name)

---

### parámetros

• **parámetro** `Opcional`: [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric)

#### Heredado de

[LocationAsRelativeRaw](LocationAsRelativeRaw.md).[params](LocationAsRelativeRaw.md#params)

---

### ruta

• **ruta** `Opcional`: `undefined`

Ignored path property since we are dealing with a relative location. Only `undefined` is allowed.

#### Heredado de

[LocationAsRelativeRaw](LocationAsRelativeRaw.md).[path](LocationAsRelativeRaw.md#path)

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
