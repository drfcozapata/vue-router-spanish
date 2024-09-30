---
editLink: false
---

[Documentación de la API](../index.md) / \_RouteRecordBase

# Interface: \_RouteRecordBase

Internal type for common properties among all kind of [RouteRecordRaw](../index.md#RouteRecordRaw).

## Jerarquía

- [`PathParserOptions`](../index.md#PathParserOptions)

  ↳ **`_RouteRecordBase`**

  ↳↳ [`RouteRecordSingleView`](RouteRecordSingleView.md)

  ↳↳ [`RouteRecordSingleViewWithChildren`](RouteRecordSingleViewWithChildren.md)

  ↳↳ [`RouteRecordMultipleViews`](RouteRecordMultipleViews.md)

  ↳↳ [`RouteRecordMultipleViewsWithChildren`](RouteRecordMultipleViewsWithChildren.md)

  ↳↳ [`RouteRecordRedirect`](RouteRecordRedirect.md)

## Propiedades

### alias

• `Opcional` **alias**: `string` \| `string`[]

Aliases for the record. Allows defining extra paths that will behave like a
copy of the record. Allows having paths shorthands like `/users/:id` and
`/u/:id`. All `alias` and `path` values must share the same params.

---

### beforeEnter

• `Opcional` **beforeEnter**: [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Before Enter guard specific to this record. Note `beforeEnter` has no
effect if the record has a `redirect` property.

---

### children

• `Opcional` **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Array of nested routes.

---

### end

• `Opcional` **end**: `boolean`

Should the RegExp match until the end by appending a `$` to it.

**`Default Value`**

`true`

#### Heredado de

PathParserOptions.end

---

### meta

• `Opcional` **meta**: [`RouteMeta`](RouteMeta.md)

Arbitrary data attached to the record.

---

### nombre

• **nombre** `Opcional`: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name for the route record. Must be unique.

---

### ruta

• **path**: `string`

Path of the record. Should start with `/` unless the record is the child of
another record.

**`Example`**

```ts
`/users/:id` matches `/users/1` as well as `/users/posva`.
```

---

### props

• `Opcional` **props**: [`_RouteRecordProps`](../index.md#_RouteRecordProps) \| `Record`\<`string`, [`_RouteRecordProps`](../index.md#_RouteRecordProps)\>

Allow passing down params as props to the component rendered by `router-view`.

---

### redirect

• `Opcional` **redirect**: [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Where to redirect if the route is directly matched. The redirection happens
before any navigation guard and triggers a new navigation with the new
target location.

---

### sensitive

• `Opcional` **sensitive**: `boolean`

Makes the RegExp case-sensitive.

**`Default Value`**

`false`

#### Heredado de

PathParserOptions.sensitive

---

### strict

• `Opcional` **strict**: `boolean`

Whether to disallow a trailing slash or not.

**`Default Value`**

`false`

#### Heredado de

PathParserOptions.strict
