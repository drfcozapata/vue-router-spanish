---
editLink: false
---

[Documentación de la API](../index.md) / MatcherLocation

# Interface: MatcherLocation

Localización de ruta normalizada/resuelta retornada por el emparejador.

## Propiedades

### emparejado

• **emparejado**: [`RouteRecordNormalized`](RouteRecordNormalized.md)[]

Array de [RouteRecord](../index.md#RouteRecord) que contiene los componentes tal y como se pasaron cuando se añadieron los registros. También puede contener registros de redirección. No se puede utilizar directamente

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Propiedades `meta` fusionadas de todos los registros de ruta coincidentes.

---

### nombre

• **name**: `null` \| [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Nombre del registro coincidente

---

### parámetros

• **params**: [`RouteParamsGeneric`](../index.md#RouteParamsGeneric)

Objeto de parámetros decodificados extraídos de la `ruta`.

---

### ruta

• **path**: `string`

Porcentaje de codificación de la sección pathname de la URL.
