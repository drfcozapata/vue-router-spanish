---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationOptions

# Interface: RouteLocationOptions

Common options for all navigation methods.

## Jerarquía

- **`RouteLocationOptions`**

  ↳ [`RouteLocationNamedRaw`](RouteLocationNamedRaw.md)

  ↳ [`RouteLocationPathRaw`](RouteLocationPathRaw.md)

  ↳ [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md)

  ↳ [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md)

## Propiedades

### force

• `Opcional` **force**: `boolean`

Triggers the navigation even if the location is the same as the current one.
Note this will also add a new entry to the history unless `replace: true`
is passed.

---

### replace

• `Opcional` **replace**: `boolean`

Replace the entry in the history instead of pushing a new entry

---

### state

• `Opcional` **state**: [`HistoryState`](HistoryState.md)

State to save using the History API. This cannot contain any reactive
values and some primitives like Symbols are forbidden. More info at
https://developer.mozilla.org/en-US/docs/Web/API/History/state
