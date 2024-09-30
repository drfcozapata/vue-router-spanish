---
editLink: false
---

[Documentación de la API](../index.md) / NavigationFailure

# Interface: NavigationFailure

Extended Error that contains extra information regarding a failed navigation.

## Hierarchy

- `Error`

  ↳ **`NavigationFailure`**

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

---

### from

• **from**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Route location we were navigating from

---

### message

• **message**: `string`

#### Inherited from

Error.message

---

### name

• **name**: `string`

#### Inherited from

Error.name

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

---

### to

• **to**: [`RouteLocationNormalizedGeneric`](RouteLocationNormalizedGeneric.md)

Route location we were navigating to

---

### type

• **type**: [`NAVIGATION_ABORTED`](../enums/ErrorTypes.md#NAVIGATION_ABORTED) \| [`NAVIGATION_CANCELLED`](../enums/ErrorTypes.md#NAVIGATION_CANCELLED) \| [`NAVIGATION_DUPLICATED`](../enums/ErrorTypes.md#NAVIGATION_DUPLICATED)

Type of the navigation. One of [NavigationFailureType](../enums/NavigationFailureType.md)
