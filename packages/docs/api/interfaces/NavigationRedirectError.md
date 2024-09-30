---
editLink: false
---

[Documentación de la API](../index.md) / NavigationRedirectError

# Interface: NavigationRedirectError

Internal error used to detect a redirection.

## Hierarchy

- `Omit`\<[`NavigationFailure`](NavigationFailure.md), `"to"` \| `"type"`\>

  ↳ **`NavigationRedirectError`**

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Omit.cause

---

### from

• **from**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Route location we were navigating from

#### Inherited from

Omit.from

---

### message

• **message**: `string`

#### Inherited from

Omit.message

---

### name

• **name**: `string`

#### Inherited from

Omit.name

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Omit.stack

---

### to

• **to**: `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

---

### type

• **type**: [`NAVIGATION_GUARD_REDIRECT`](../enums/ErrorTypes.md#NAVIGATION_GUARD_REDIRECT)
