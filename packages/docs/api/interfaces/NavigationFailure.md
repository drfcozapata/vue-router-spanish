---
editLink: false
---

[Documentación de la API](../index.md) / NavigationFailure

# Interface: NavigationFailure

Error Extendido que contiene información extra sobre una navegación fallida.

## Jerarquía

- `Error`

  ↳ **`NavigationFailure`**

## Propiedades

### causa

• **causa** `Opcional`: `unknown`

#### Heredado de

Error.cause

---

### desde

• **desde**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Ubicación de la ruta desde la que navegábamos

---

### mensaje

• **mensaje**: `string`

#### Heredado de

Error.message

---

### nombre

• **nombre**: `string`

#### Heredado de

Error.name

---

### stack

• **stack** `Opcional`: `string`

#### Heredado de

Error.stack

---

### hacia

• **hacia**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Ubicación de la ruta hacia la que navegábamos

---

### tipo

• **tipo**: [`NAVIGATION_ABORTED`](../enums/ErrorTypes.md#NAVIGATION_ABORTED) \| [`NAVIGATION_CANCELLED`](../enums/ErrorTypes.md#NAVIGATION_CANCELLED) \| [`NAVIGATION_DUPLICATED`](../enums/ErrorTypes.md#NAVIGATION_DUPLICATED)

Tipo de navegación. Uno de [NavigationFailureType](../enums/NavigationFailureType.md)
