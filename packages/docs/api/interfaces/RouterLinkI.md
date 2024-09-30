---
editLink: false
---

[Documentación de la API](../index.md) / \_RouterLinkI

# Interface: \_RouterLinkI

Typed version of the `RouterLink` component. Its generic defaults to the typed router, so it can be inferred
automatically for JSX.

## Constructors

### constructor

• **new \_RouterLinkI**(): `Object`

#### Retorna

`Object`

| Nombre            | Tipo                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$props`          | `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterLinkProps`](RouterLinkProps.md)                                                                                                                                                                                                                                                                                |
| `$slots`          | \{ `default?`: (`__namedParameters`: \{ `href`: `string` ; `isActive`: `boolean` ; `isExactActive`: `boolean` ; `route`: [`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md) ; `navigate`: (`e?`: `MouseEvent`) => `Promise`\<`void` \| [`NavigationFailure`](NavigationFailure.md)\> }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\>[] } |
| `$slots.default?` | (`__namedParameters`: \{ `href`: `string` ; `isActive`: `boolean` ; `isExactActive`: `boolean` ; `route`: [`RouteLocationResolvedGeneric`](RouteLocationResolvedGeneric.md) ; `navigate`: (`e?`: `MouseEvent`) => `Promise`\<`void` \| [`NavigationFailure`](NavigationFailure.md)\> }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\>[]                  |

## Propiedades

### useLink

• **useLink**: \<Name\>(`props`: [`UseLinkOptions`](UseLinkOptions.md)\<`Name`\>) => [`UseLinkReturn`](UseLinkReturn.md)\<`Name`\>

Access to `useLink()` without depending on using vue-router

#### Declaración de tipo

▸ \<`Name`\>(`props`): [`UseLinkReturn`](UseLinkReturn.md)\<`Name`\>

Access to `useLink()` without depending on using vue-router

##### Parámetros de tipo

| Nombre | Tipo                                                |
| :----- | :-------------------------------------------------- |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

##### Parámetros

| Nombre  | Tipo                                            |
| :------ | :---------------------------------------------- |
| `props` | [`UseLinkOptions`](UseLinkOptions.md)\<`Name`\> |

##### Retorna

[`UseLinkReturn`](UseLinkReturn.md)\<`Name`\>
