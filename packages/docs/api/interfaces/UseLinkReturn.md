---
editLink: false
---

[Documentación de la API](../index.md) / UseLinkReturn

# Interface: UseLinkReturn\<Name\>

Return type of [useLink](../index.md#useLink).

## Parámetros de tipo

| Nombre | Tipo                                                                                        |
| :----- | :------------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](../index.md#RouteMap) = keyof [`RouteMap`](../index.md#RouteMap) |

## Propiedades

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

#### Parámetros

| Nombre | Tipo         |
| :----- | :----------- |
| `e?`   | `MouseEvent` |

#### Retorna

`Promise`\<`void` \| [`NavigationFailure`](NavigationFailure.md)\>
