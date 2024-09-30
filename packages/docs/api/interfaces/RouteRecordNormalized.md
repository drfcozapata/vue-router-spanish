---
editLink: false
---

[Documentación de la API](../index.md) / RouteRecordNormalized

# Interface: RouteRecordNormalized

Normalized version of a [route record](../index.md#RouteRecord).

## Hierarchy

- **`RouteRecordNormalized`**

  ↳ [`RouteLocationMatched`](RouteLocationMatched.md)

## Properties

### aliasOf

• **aliasOf**: `undefined` \| [`RouteRecordNormalized`](RouteRecordNormalized.md)

Defines if this record is the alias of another one. This property is
`undefined` if the record is the original one.

---

### beforeEnter

• **beforeEnter**: `undefined` \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Registered beforeEnter guards

---

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Nested route records.

---

### components

• **components**: `undefined` \| `null` \| `Record`\<`string`, `RawRouteComponent`\>

Components to display when the URL matches this route. Allow using named views.

---

### enterCallbacks

• **enterCallbacks**: `Record`\<`string`, [`NavigationGuardNextCallback`](../index.md#NavigationGuardNextCallback)[]\>

Registered beforeRouteEnter callbacks passed to `next` or returned in guards

---

### instances

• **instances**: `Record`\<`string`, `undefined` \| `null` \| `ComponentPublicInstance`\>

Mounted route component instances
Having the instances on the record mean beforeRouteUpdate and
beforeRouteLeave guards can only be invoked with the latest mounted app
instance if there are multiple application instances rendering the same
view, basically duplicating the content on the page, which shouldn't happen
in practice. It will work if multiple apps are rendering different named
views.

---

### leaveGuards

• **leaveGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Registered leave guards

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Arbitrary data attached to the record.

---

### mods

• **mods**: `Record`\<`string`, `unknown`\>

Contains the original modules for lazy loaded components.

---

### name

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name for the route record. Must be unique.

---

### path

• **path**: `string`

Path of the record. Should start with `/` unless the record is the child of
another record.

---

### props

• **props**: `Record`\<`string`, [`_RouteRecordProps`](../index.md#_RouteRecordProps)\>

Allow passing down params as props to the component rendered by
`router-view`. Should be an object with the same keys as `components` or a
boolean to be applied to every component.

---

### redirect

• **redirect**: `undefined` \| [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Where to redirect if the route is directly matched. The redirection happens
before any navigation guard and triggers a new navigation with the new
target location.

---

### updateGuards

• **updateGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Registered update guards
