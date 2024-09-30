---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationAsPathTyped

# Interface: RouteLocationAsPathTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationAsPath](../index.md#RouteLocationAsPath) type.

## Parámetros de tipo

| Nombre     | Tipo                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Jerarquía

- [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

  ↳ **`RouteLocationAsPathTyped`**

## Propiedades

### force

• `Opcional` **force**: `boolean`

Triggers the navigation even if the location is the same as the current one.
Note this will also add a new entry to the history unless `replace: true`
is passed.

#### Heredado de

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[force](RouteLocationAsPathGeneric.md#force)

---

### hash

• `Opcional` **hash**: `string`

#### Heredado de

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[hash](RouteLocationAsPathGeneric.md#hash)

---

### ruta

• **path**: `_LiteralUnion`\<`RouteMap`[`Name`][``"path"``]\>

Percentage encoded pathname section of the URL.

#### Overrides

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[path](RouteLocationAsPathGeneric.md#path)

---

### query

• `Opcional` **query**: [`LocationQueryRaw`](../index.md#LocationQueryRaw)

#### Heredado de

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[query](RouteLocationAsPathGeneric.md#query)

---

### replace

• `Opcional` **replace**: `boolean`

Replace the entry in the history instead of pushing a new entry

#### Heredado de

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[replace](RouteLocationAsPathGeneric.md#replace)

---

### state

• `Opcional` **state**: [`HistoryState`](HistoryState.md)

State to save using the History API. This cannot contain any reactive
values and some primitives like Symbols are forbidden. More info at
https://developer.mozilla.org/en-US/docs/Web/API/History/state

#### Heredado de

[RouteLocationAsPathGeneric](RouteLocationAsPathGeneric.md).[state](RouteLocationAsPathGeneric.md#state)
