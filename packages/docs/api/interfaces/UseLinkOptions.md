---
editLink: false
---

[Documentación de la API](../index.md) / UseLinkOptions

# Interface: UseLinkOptions\<Name\>

Options passed to [useLink](../index.md#useLink).

## Parámetros de tipo

| Nombre | Tipo                                                                                        |
| :----- | :------------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](../index.md#RouteMap) = keyof [`RouteMap`](../index.md#RouteMap) |

## Propiedades

### replace

• `Opcional` **replace**: `MaybeRef`\<`undefined` \| `boolean`\>

---

### hacia

• **to**: `MaybeRef`\<`string` \| [`RouteLocationAsRelativeGeneric`](RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](RouteLocationAsPathGeneric.md) \| [`RouteLocationAsRelativeTyped`](RouteLocationAsRelativeTyped.md)\<[`RouteMapGeneric`](../index.md#RouteMapGeneric), `Name`\>\>
