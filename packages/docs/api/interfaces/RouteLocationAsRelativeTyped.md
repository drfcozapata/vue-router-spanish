---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationAsRelativeTyped

# Interface: RouteLocationAsRelativeTyped\<RouteMap, Name\>

Helper to generate a type safe version of the [RouteLocationAsRelative](../index.md#RouteLocationAsRelative) type.

## Parámetros de tipo

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](../index.md#RouteMapGeneric) = [`RouteMapGeneric`](../index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                                 |

## Hierarchy

- [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md)

  ↳ **`RouteLocationAsRelativeTyped`**

## Properties

### force

• `Optional` **force**: `boolean`

Triggers the navigation even if the location is the same as the current one.
Note this will also add a new entry to the history unless `replace: true`
is passed.

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[force](RouteLocationAsRelativeGeneric.md#force)

---

### hash

• `Optional` **hash**: `string`

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[hash](RouteLocationAsRelativeGeneric.md#hash)

---

### name

• `Optional` **name**: `Extract`\<`Name`, `string` \| `symbol`\>

#### Overrides

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[name](RouteLocationAsRelativeGeneric.md#name)

---

### params

• `Optional` **params**: `RouteMap`[`Name`][``"paramsRaw"``]

#### Overrides

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[params](RouteLocationAsRelativeGeneric.md#params)

---

### path

• `Optional` **path**: `undefined`

A relative path to the current location. This property should be removed

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[path](RouteLocationAsRelativeGeneric.md#path)

---

### query

• `Optional` **query**: [`LocationQueryRaw`](../index.md#LocationQueryRaw)

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[query](RouteLocationAsRelativeGeneric.md#query)

---

### replace

• `Optional` **replace**: `boolean`

Replace the entry in the history instead of pushing a new entry

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[replace](RouteLocationAsRelativeGeneric.md#replace)

---

### state

• `Optional` **state**: [`HistoryState`](HistoryState.md)

State to save using the History API. This cannot contain any reactive
values and some primitives like Symbols are forbidden. More info at
https://developer.mozilla.org/en-US/docs/Web/API/History/state

#### Inherited from

[RouteLocationAsRelativeGeneric](RouteLocationAsRelativeGeneric.md).[state](RouteLocationAsRelativeGeneric.md#state)
