---
editLink: false
---

[Documentación de la API](../index.md) / RouterLinkProps

# Interface: RouterLinkProps

## Hierarchy

- `RouterLinkOptions`

  ↳ **`RouterLinkProps`**

## Properties

### activeClass

• `Optional` **activeClass**: `string`

Class to apply when the link is active

---

### ariaCurrentValue

• `Optional` **ariaCurrentValue**: `"time"` \| `"location"` \| `"page"` \| `"step"` \| `"date"` \| `"true"` \| `"false"`

Value passed to the attribute `aria-current` when the link is exact active.

**`Default Value`**

`'page'`

---

### custom

• `Optional` **custom**: `boolean`

Whether RouterLink should not wrap its content in an `a` tag. Useful when
using `v-slot` to create a custom RouterLink

---

### exactActiveClass

• `Optional` **exactActiveClass**: `string`

Class to apply when the link is exact active

---

### replace

• `Optional` **replace**: `boolean`

Calls `router.replace` instead of `router.push`.

#### Inherited from

RouterLinkOptions.replace

---

### to

• **to**: `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

Route Location the link should navigate to when clicked on.

#### Inherited from

RouterLinkOptions.to
