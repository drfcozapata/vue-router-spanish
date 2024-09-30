---
editLink: false
---

[Documentación de la API](../index.md) / RouteLocationMatched

# Interface: RouteLocationMatched

Normalized version of a [route record](../index.md#RouteRecord).

## Jerarquía

- [`RouteRecordNormalized`](RouteRecordNormalized.md)

  ↳ **`RouteLocationMatched`**

## Propiedades

### aliasOf

• **aliasOf**: `undefined` \| [`RouteRecordNormalized`](RouteRecordNormalized.md)

Defines if this record is the alias of another one. This property is
`undefined` if the record is the original one.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[aliasOf](RouteRecordNormalized.md#aliasOf)

---

### beforeEnter

• **beforeEnter**: `undefined` \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\> \| [`NavigationGuardWithThis`](NavigationGuardWithThis.md)\<`undefined`\>[]

Registered beforeEnter guards

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[beforeEnter](RouteRecordNormalized.md#beforeEnter)

---

### children

• **children**: [`RouteRecordRaw`](../index.md#RouteRecordRaw)[]

Nested route records.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[children](RouteRecordNormalized.md#children)

---

### components

• **components**: `undefined` \| `null` \| `Record`\<`string`, [`RouteComponent`](../index.md#RouteComponent)\>

Components to display when the URL matches this route. Allow using named views.

#### Overrides

[RouteRecordNormalized](RouteRecordNormalized.md).[components](RouteRecordNormalized.md#components)

---

### enterCallbacks

• **enterCallbacks**: `Record`\<`string`, [`NavigationGuardNextCallback`](../index.md#NavigationGuardNextCallback)[]\>

Registered beforeRouteEnter callbacks passed to `next` or returned in guards

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[enterCallbacks](RouteRecordNormalized.md#enterCallbacks)

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

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[instances](RouteRecordNormalized.md#instances)

---

### leaveGuards

• **leaveGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Registered leave guards

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[leaveGuards](RouteRecordNormalized.md#leaveGuards)

---

### meta

• **meta**: [`RouteMeta`](RouteMeta.md)

Arbitrary data attached to the record.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[meta](RouteRecordNormalized.md#meta)

---

### mods

• **mods**: `Record`\<`string`, `unknown`\>

Contains the original modules for lazy loaded components.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[mods](RouteRecordNormalized.md#mods)

---

### nombre

• **name**: [`RouteRecordNameGeneric`](../index.md#RouteRecordNameGeneric)

Name for the route record. Must be unique.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[name](RouteRecordNormalized.md#name)

---

### ruta

• **path**: `string`

Path of the record. Should start with `/` unless the record is the child of
another record.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[path](RouteRecordNormalized.md#path)

---

### props

• **props**: `Record`\<`string`, [`_RouteRecordProps`](../index.md#_RouteRecordProps)\>

Allow passing down params as props to the component rendered by
`router-view`. Should be an object with the same keys as `components` or a
boolean to be applied to every component.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[props](RouteRecordNormalized.md#props)

---

### redirect

• **redirect**: `undefined` \| [`RouteRecordRedirectOption`](../index.md#RouteRecordRedirectOption)

Where to redirect if the route is directly matched. The redirection happens
before any navigation guard and triggers a new navigation with the new
target location.

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[redirect](RouteRecordNormalized.md#redirect)

---

### updateGuards

• **updateGuards**: `Set`\<[`NavigationGuard`](NavigationGuard.md)\>

Registered update guards

#### Heredado de

[RouteRecordNormalized](RouteRecordNormalized.md).[updateGuards](RouteRecordNormalized.md#updateGuards)
