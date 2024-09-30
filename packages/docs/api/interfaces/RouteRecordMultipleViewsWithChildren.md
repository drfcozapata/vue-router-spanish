---
editLink: false
---

[Documentación de la API](../index.md) / RouteRecordMultipleViewsWithChildren

# Interface: RouteRecordMultipleViewsWithChildren

Route Record defining multiple named components with the `components` option and children.

## Jerarquía

- [`_RouteRecordBase`](RouteRecordBase.md)

  ↳ **`RouteRecordMultipleViewsWithChildren`**

## Propiedades

### alias

• `Opcional` **alias**: `string` \| `string`[]

Aliases for the record. Allows defining extra paths that will behave like a
copy of the record. Allows having paths shorthands like `/users/:id` and
`/u/:id`. All `alias` and `path` values must share the same params.

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[alias](RouteRecordBase.md#alias)

---

### beforeEnter

• `Opcional` **beforeEnter**: [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Before Enter guard specific to this record. Note `beforeEnter` has no
effect if the record has a `redirect` property.

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[beforeEnter](RouteRecordBase.md#beforeEnter)

---

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Array of nested routes.

#### Overrides

[\_RouteRecordBase](RouteRecordBase.md).[children](RouteRecordBase.md#children)

---

### component

• `Opcional` **component**: `undefined`

---

### components

• `Opcional` **components**: `null` \| `Record`\<`string`, `RawRouteComponent`\>

Components to display when the URL matches this route. Allow using named views.

---

### end

• `Opcional` **end**: `boolean`

Should the RegExp match until the end by appending a `$` to it.

**`Default Value`**

`true`

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[end](RouteRecordBase.md#end)

---

### meta

• `Opcional` **meta**: [`RouteMeta`](RouteMeta.md)

Arbitrary data attached to the record.

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[meta](RouteRecordBase.md#meta)

---

### nombre

• **nombre** `Opcional`: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name for the route record. Must be unique.

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[name](RouteRecordBase.md#name)

---

### ruta

• **path**: `string`

Path of the record. Should start with `/` unless the record is the child of
another record.

**`Example`**

```ts
`/users/:id` matches `/users/1` as well as `/users/posva`.
```

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[path](RouteRecordBase.md#path)

---

### props

• `Opcional` **props**: `boolean` \| `Record`\<`string`, [`_RouteRecordProps`](../index.md#_RouteRecordProps)\>

Allow passing down params as props to the component rendered by
`router-view`. Should be an object with the same keys as `components` or a
boolean to be applied to every component.

#### Overrides

[\_RouteRecordBase](RouteRecordBase.md).[props](RouteRecordBase.md#props)

---

### redirect

• `Opcional` **redirect**: [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Where to redirect if the route is directly matched. The redirection happens
before any navigation guard and triggers a new navigation with the new
target location.

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[redirect](RouteRecordBase.md#redirect)

---

### sensitive

• `Opcional` **sensitive**: `boolean`

Makes the RegExp case-sensitive.

**`Default Value`**

`false`

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[sensitive](RouteRecordBase.md#sensitive)

---

### strict

• `Opcional` **strict**: `boolean`

Whether to disallow a trailing slash or not.

**`Default Value`**

`false`

#### Heredado de

[\_RouteRecordBase](RouteRecordBase.md).[strict](RouteRecordBase.md#strict)
