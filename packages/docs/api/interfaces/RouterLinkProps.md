---
editLink: false
---

[Documentación de la API](../index.md) / RouterLinkProps

# Interface: RouterLinkProps

## Jerarquía

- `RouterLinkOptions`

  ↳ **`RouterLinkProps`**

## Propiedades

### activeClass

• `Opcional` **activeClass**: `string`

Class to apply when the link is active

---

### ariaCurrentValue

• `Opcional` **ariaCurrentValue**: `"time"` \| `"location"` \| `"page"` \| `"step"` \| `"date"` \| `"true"` \| `"false"`

Value passed to the attribute `aria-current` when the link is exact active.

**`Default Value`**

`'page'`

---

### custom

• `Opcional` **custom**: `boolean`

Whether RouterLink should not wrap its content in an `a` tag. Useful when
using `v-slot` to create a custom RouterLink

---

### exactActiveClass

• `Opcional` **exactActiveClass**: `string`

Class to apply when the link is exact active

---

### replace

• `Opcional` **replace**: `boolean`

Calls `router.replace` instead of `router.push`.

#### Heredado de

RouterLinkOptions.replace

---

### hacia

• **to**: `string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

Route Location the link should navigate to when clicked on.

#### Heredado de

RouterLinkOptions.to
