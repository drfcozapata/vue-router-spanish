---
editLink: false
---

[Documentación de la API](../index.md) / RouteRecordInfo

# Interface: RouteRecordInfo\<Name, Path, ParamsRaw, Params, Meta\>

Helper type to define a Typed `RouteRecord`

**`See`**

[RouteRecord](../index.md#RouteRecord)

## Parámetros de tipo

| Name        | Type                                                                                                                                |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `Name`      | extends `string` \| `symbol` = `string`                                                                                             |
| `Path`      | extends `string` = `string`                                                                                                         |
| `ParamsRaw` | extends [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric) = [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric) |
| `Params`    | extends [`RouteParamsGeneric`](../index.md#RouteParamsGeneric) = [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)             |
| `Meta`      | extends [`RouteMeta`](RouteMeta.md) = [`RouteMeta`](RouteMeta.md)                                                                   |

## Properties

### meta

• **meta**: `Meta`

---

### name

• **name**: `Name`

---

### params

• **params**: `Params`

---

### paramsRaw

• **paramsRaw**: `ParamsRaw`

---

### path

• **path**: `Path`
