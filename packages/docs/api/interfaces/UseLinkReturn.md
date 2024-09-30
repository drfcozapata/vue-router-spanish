---
editLink: false
---

[Documentación de la API](../index.md) / UseLinkReturn

# Interface: UseLinkReturn\<Name\>

Return type of [useLink](../index.md#useLink).

## Parámetros de tipo

| Name   | Type                                                                                        |
| :----- | :------------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](../index.md#RouteMap) = keyof [`RouteMap`](../index.md#RouteMap) |

## Properties

### href

• **href**: `ComputedRef`\<`string`\>

---

### isActive

• **isActive**: `ComputedRef`\<`boolean`\>

---

### isExactActive

• **isExactActive**: `ComputedRef`\<`boolean`\>

---

### route

• **route**: `ComputedRef`\<[`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md)\>

## Methods

### navigate

▸ **navigate**(`e?`): `Promise`\<`void` \| [`NavigationFailure`](NavigationFailure.md)\>

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `e?` | `MouseEvent` |

#### Returns

`Promise`\<`void` \| [`NavigationFailure`](NavigationFailure.md)\>
