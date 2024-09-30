---
editLink: false
---

[Documentación de la API](../index.md) / RouteRecordInfo

# Interface: RouteRecordInfo\<Name, Path, ParamsRaw, Params, Meta\>

Helper type to define a Typed `RouteRecord`

**`Mira`**

[RouteRecord](../index.md#RouteRecord)

## Parámetros de tipo

| Nombre      | Tipo                                                                                                                                |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `Name`      | extends `string` \| `symbol` = `string`                                                                                             |
| `Path`      | extends `string` = `string`                                                                                                         |
| `ParamsRaw` | extends [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric) = [`RouteParamsRawGeneric`](../index.md#RouteParamsRawGeneric) |
| `Params`    | extends [`RouteParamsGeneric`](../index.md#RouteParamsGeneric) = [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)             |
| `Meta`      | extends [`RouteMeta`](RouteMeta.md) = [`RouteMeta`](RouteMeta.md)                                                                   |

## Propiedades

### meta

• **meta**: `Meta`

---

### nombre

• **name**: `Name`

---

### parámetros

• **params**: `Params`

---

### parámetrosRaw

• **paramsRaw**: `ParamsRaw`

---

### ruta

• **path**: `Path`
