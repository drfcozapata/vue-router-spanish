---
editLink: false
---

[Documentación de la API](../index.md) / NavigationRedirectError

# Interface: NavigationRedirectError

Error interno utilizado para detectar una redirección.

## Jerarquía

- `Omit`\<[`NavigationFailure`](NavigationFailure.md), `"to"` \| `"type"`\>

  ↳ **`NavigationRedirectError`**

## Propiedades

### causa

• **causa** `Opcional`: `unknown`

#### Heredado de

Omit.cause

---

### desde

• **desde**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Ubicación de la ruta desde la que navegamos

#### Heredado de

Omit.from

---

### mensaje

• **mensaje**: `string`

#### Heredado de

Omit.message

---

### nombre

• **nombre**: `string`

#### Heredado de

Omit.name

---

### stack

• **stack** `Opcional`: `string`

#### Heredado de

Omit.stack

---

### hacia

• **hacia**: `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

---

### tipo

• **tipo**: [`NAVIGATION_GUARD_REDIRECT`](../enums/ErrorTypes.md#NAVIGATION_GUARD_REDIRECT)
