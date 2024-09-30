---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationAsRelativeTyped

# Interface: RouteLocationAsRelativeTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationAsRelative](../index.md#RouteLocationAsRelative) type.

## Parámetros de tipo

| Nombre     | Tipo                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Jerarquía

- [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md)

  ↳ **`RouteLocationAsRelativeTyped`**

## Propiedades

### force

• `Opcional` **force**: `boolean`

Triggers the navigation even if the location is the same as the current one.
Note this will also add a new entry to the history unless `replace: true`
is passed.

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[force](RouteLocationAsRelativeGeneric.md#force)

---

### hash

• `Opcional` **hash**: `string`

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[hash](RouteLocationAsRelativeGeneric.md#hash)

---

### nombre

• **nombre** `Opcional`: `Extract`\<`Name`, `string` \| `symbol`\>

#### Overrides

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[name](RouteLocationAsRelativeGeneric.md#name)

---

### parámetros

• **parámetro** `Opcional`: `RouteMap`[`Name`][``"paramsRaw"``]

#### Overrides

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[params](RouteLocationAsRelativeGeneric.md#params)

---

### ruta

• **ruta** `Opcional`: `undefined`

A relative path to the current location. This property should be removed

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[path](RouteLocationAsRelativeGeneric.md#path)

---

### query

• `Opcional` **query**: [`LocationQueryRaw`](../index.md#LocationQueryRaw)

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[query](RouteLocationAsRelativeGeneric.md#query)

---

### replace

• `Opcional` **replace**: `boolean`

Replace the entry in the history instead of pushing a new entry

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[replace](RouteLocationAsRelativeGeneric.md#replace)

---

### state

• `Opcional` **state**: [`HistoryState`](HistoryState.md)

State to save using the History API. This cannot contain any reactive
values and some primitives like Symbols are forbidden. More info at
https://developer.mozilla.org/en-US/docs/Web/API/History/state

#### Heredado de

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[state](RouteLocationAsRelativeGeneric.md#state)
