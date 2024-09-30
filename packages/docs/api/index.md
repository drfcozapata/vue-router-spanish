---
editLink: false
---

Documentación de la API

# Documentación de la API

## Enumeraciones

- [ErrorTypes](enums/ErrorTypes.md)
- [NavigationFailureType](enums/NavigationFailureType.md)

## Interfaces

- [HistoryState](interfaces/HistoryState.md)
- [LocationAsRelativeRaw](interfaces/LocationAsRelativeRaw.md)
- [MatcherLocation](interfaces/MatcherLocation.md)
- [MatcherLocationAsPath](interfaces/MatcherLocationAsPath.md)
- [NavigationFailure](interfaces/NavigationFailure.md)
- [NavigationGuard](interfaces/NavigationGuard.md)
- [NavigationGuardNext](interfaces/NavigationGuardNext.md)
- [NavigationGuardWithThis](interfaces/NavigationGuardWithThis.md)
- [NavigationHookAfter](interfaces/NavigationHookAfter.md)
- [NavigationRedirectError](interfaces/NavigationRedirectError.md)
- [RouteLocationAsPathGeneric](interfaces/RouteLocationAsPathGeneric.md)
- [RouteLocationAsPathTyped](interfaces/RouteLocationAsPathTyped.md)
- [RouteLocationAsRelativeGeneric](interfaces/RouteLocationAsRelativeGeneric.md)
- [RouteLocationAsRelativeTyped](interfaces/RouteLocationAsRelativeTyped.md)
- [RouteLocationGeneric](interfaces/RouteLocationGeneric.md)
- [RouteLocationMatched](interfaces/RouteLocationMatched.md)
- [RouteLocationNamedRaw](interfaces/RouteLocationNamedRaw.md)
- [RouteLocationNormalizedGeneric](interfaces/RouteLocationNormalizedGeneric.md)
- [RouteLocationNormalizedLoadedGeneric](interfaces/RouteLocationNormalizedLoadedGeneric.md)
- [RouteLocationNormalizedLoadedTyped](interfaces/RouteLocationNormalizedLoadedTyped.md)
- [RouteLocationNormalizedTyped](interfaces/RouteLocationNormalizedTyped.md)
- [RouteLocationOptions](interfaces/RouteLocationOptions.md)
- [RouteLocationPathRaw](interfaces/RouteLocationPathRaw.md)
- [RouteLocationResolvedGeneric](interfaces/RouteLocationResolvedGeneric.md)
- [RouteLocationResolvedTyped](interfaces/RouteLocationResolvedTyped.md)
- [RouteLocationTyped](interfaces/RouteLocationTyped.md)
- [RouteMeta](interfaces/RouteMeta.md)
- [RouteQueryAndHash](interfaces/RouteQueryAndHash.md)
- [RouteRecordInfo](interfaces/RouteRecordInfo.md)
- [RouteRecordMultipleViews](interfaces/RouteRecordMultipleViews.md)
- [RouteRecordMultipleViewsWithChildren](interfaces/RouteRecordMultipleViewsWithChildren.md)
- [RouteRecordNormalized](interfaces/RouteRecordNormalized.md)
- [RouteRecordRedirect](interfaces/RouteRecordRedirect.md)
- [RouteRecordSingleView](interfaces/RouteRecordSingleView.md)
- [RouteRecordSingleViewWithChildren](interfaces/RouteRecordSingleViewWithChildren.md)
- [Router](interfaces/Router.md)
- [RouterHistory](interfaces/RouterHistory.md)
- [RouterLinkProps](interfaces/RouterLinkProps.md)
- [RouterMatcher](interfaces/RouterMatcher.md)
- [RouterOptions](interfaces/RouterOptions.md)
- [RouterScrollBehavior](interfaces/RouterScrollBehavior.md)
- [RouterViewProps](interfaces/RouterViewProps.md)
- [TypesConfig](interfaces/TypesConfig.md)
- [UseLinkOptions](interfaces/UseLinkOptions.md)
- [UseLinkReturn](interfaces/UseLinkReturn.md)
- [\_PathParserOptions](interfaces/PathParserOptions.md)
- [\_RouteLocationBase](interfaces/RouteLocationBase.md)
- [\_RouteRecordBase](interfaces/RouteRecordBase.md)
- [\_RouterLinkI](interfaces/RouterLinkI.md)

## Alias de Tipo

### LocationQuery

Ƭ **LocationQuery**: `Record`\<`string`, [`LocationQueryValue`](index.md#LocationQueryValue) \| [`LocationQueryValue`](index.md#LocationQueryValue)[]\>

Objeto de query normalizado que aparece en [RouteLocationNormalized](index.md#RouteLocationNormalized)

---

### LocationQueryRaw

Ƭ **LocationQueryRaw**: `Record`\<`string` \| `number`, [`LocationQueryValueRaw`](index.md#LocationQueryValueRaw) \| [`LocationQueryValueRaw`](index.md#LocationQueryValueRaw)[]\>

Objeto [LocationQuery](index.md#LocationQuery) suelto que se puede pasar a funciones como [Router.push](interfaces/Router.md#push) y [Router.replace](interfaces/Router.md#replace) o en cualquier lugar al crear una [RouteLocationRaw](index.md#RouteLocationRaw)

---

### LocationQueryValue

Ƭ **LocationQueryValue**: `string` \| `null`

Valores posibles en [LocationQuery](index.md#LocationQuery) normalizada. `null` muestra el parámetro de consulta pero sin `=`.

**`Ejemplo`**

```
?isNull&isEmpty=&other=other
gives
`{ isNull: null, isEmpty: '', other: 'other' }`.
```

---

### LocationQueryValueRaw

Ƭ **LocationQueryValueRaw**: [`LocationQueryValue`](index.md#LocationQueryValue) \| `number` \| `undefined`

Valores posibles al definir una query.

---

### NavigationGuardNextCallback

Ƭ **NavigationGuardNextCallback**: (`vm`: `ComponentPublicInstance`) => `unknown`

Callback que puede ser pasado a `next()` en los protectores `beforeRouteEnter()`.

#### Declaración tipo

▸ (`vm`): `unknown`

##### Parámetros

| Nombre | Tipo                      |
| :----- | :------------------------ |
| `vm`   | `ComponentPublicInstance` |

##### Retorna

`unknown`

---

### NavigationGuardReturn

Ƭ **NavigationGuardReturn**: `void` \| `Error` \| `boolean` \| [`RouteLocationRaw`](index.md#RouteLocationRaw)

Tipos de retorno para un protector de Navegación. Basado en `TypesConfig`

**`Mira`**

[TypesConfig](interfaces/TypesConfig.md)

---

### ParamValue

Ƭ **ParamValue**\<`isRaw`\>: `true` extends `isRaw` ? `string` \| `number` : `string`

Tipo de utilidad para parámetros sin formato y con formato como :id

#### Parámetros de tipo

| Nombre  | Tipo              |
| :------ | :---------------- |
| `isRaw` | extends `boolean` |

---

### ParamValueOneOrMore

Ƭ **ParamValueOneOrMore**\<`isRaw`\>: [[`ParamValue`](index.md#ParamValue)\<`isRaw`\>, ...ParamValue\<isRaw\>[]]

Tipo de utilidad para parámetros sin formato y con formato como :id+

#### Parámetros de tipo

| Nombre  | Tipo              |
| :------ | :---------------- |
| `isRaw` | extends `boolean` |

---

### ParamValueZeroOrMore

Ƭ **ParamValueZeroOrMore**\<`isRaw`\>: `true` extends `isRaw` ? [`ParamValue`](index.md#ParamValue)\<`isRaw`\>[] \| `undefined` \| `null` : [`ParamValue`](index.md#ParamValue)\<`isRaw`\>[] \| `undefined`

Tipo de utilidad para parámetros sin formato y con formato como :id\*

#### Parámetros de tipo

| Nombre  | Tipo              |
| :------ | :---------------- |
| `isRaw` | extends `boolean` |

---

### ParamValueZeroOrOne

Ƭ **ParamValueZeroOrOne**\<`isRaw`\>: `true` extends `isRaw` ? `string` \| `number` \| `null` \| `undefined` : `string`

Tipo de utilidad para parámetros sin formato y con formato como :id?

#### Parámetros de tipo

| Nombre  | Tipo              |
| :------ | :---------------- |
| `isRaw` | extends `boolean` |

---

### PathParserOptions

Ƭ **PathParserOptions**: `Pick`\<[`_PathParserOptions`](interfaces/PathParserOptions.md), `"end"` \| `"sensitive"` \| `"strict"`\>

---

### RouteComponent

Ƭ **RouteComponent**: `Component` \| `DefineComponent`

Componente permitido en [RouteLocationMatched](interfaces/RouteLocationMatched.md)

---

### RouteLocation

Ƭ **RouteLocation**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationGeneric`](interfaces/RouteLocationGeneric.md) : [`RouteLocationTypedList`](index.md#RouteLocationTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

[RouteLocationRaw](index.md#RouteLocationRaw) resuelto mediante el comparador

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationAsPath

Ƭ **RouteLocationAsPath**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsPathGeneric`](interfaces/RouteLocationAsPathGeneric.md) : [`RouteLocationAsPathTypedList`](index.md#RouteLocationAsPathTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Ubicación de la ruta como un objeto con una propiedad `path`.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationAsPathTypedList

Ƭ **RouteLocationAsPathTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsPathTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationAsPath](index.md#RouteLocationAsPath) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationAsRelative

Ƭ **RouteLocationAsRelative**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsRelativeGeneric`](interfaces/RouteLocationAsRelativeGeneric.md) : [`RouteLocationAsRelativeTypedList`](index.md#RouteLocationAsRelativeTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Ubicación de la ruta relativa a la ubicación actual. Acepta otras propiedades además de `path` como `params`, `query` y `hash` para cambiarlas convenientemente.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationAsRelativeTypedList

Ƭ **RouteLocationAsRelativeTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsRelativeTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationAsRelative](index.md#RouteLocationAsRelative) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationAsString

Ƭ **RouteLocationAsString**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? `string` : `_LiteralUnion`\<[`RouteLocationAsStringTypedList`](index.md#RouteLocationAsStringTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`], `string`\>

Igual que [RouteLocationAsPath](index.md#RouteLocationAsPath) pero como una cadena literal.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationAsStringTyped

Ƭ **RouteLocationAsStringTyped**\<`RouteMap`, `Name`\>: `RouteMap`[`Name`][``"path"``]

Ayudante para generar una versión segura del tipo [RouteLocationAsString](index.md#RouteLocationAsString).

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |
| `Name`     | extends keyof `RouteMap` = keyof `RouteMap`                                                           |

---

### RouteLocationAsStringTypedList

Ƭ **RouteLocationAsStringTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationAsStringTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationAsString](index.md#RouteLocationAsString) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationNormalized

Ƭ **RouteLocationNormalized**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationNormalizedGeneric`](interfaces/RouteLocationNormalizedGeneric.md) : [`RouteLocationNormalizedTypedList`](index.md#RouteLocationNormalizedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Similar a [RouteLocation](index.md#RouteLocation) pero su propiedad [`matched`](interfaces/RouteLocationNormalizedTyped.md#matched) no puede contener registros de redirección.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationNormalizedLoaded

Ƭ **RouteLocationNormalizedLoaded**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md) : [`RouteLocationNormalizedLoadedTypedList`](index.md#RouteLocationNormalizedLoadedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Similar a [RouteLocationNormalized](index.md#RouteLocationNormalized) pero sus `components` no contienen ninguna función para cargar componentes perezosamente.
En otras palabras, está preparado para ser renderizado por `<RouterView>`.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationNormalizedLoadedTypedList

Ƭ **RouteLocationNormalizedLoadedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationNormalizedLoadedTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationNormalizedLoaded](index.md#RouteLocationNormalizedLoaded) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationNormalizedTypedList

Ƭ **RouteLocationNormalizedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationNormalizedTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationNormalized](index.md#RouteLocationNormalized) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationRaw

Ƭ **RouteLocationRaw**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationAsString`](index.md#RouteLocationAsString) \| [`RouteLocationAsRelativeGeneric`](interfaces/RouteLocationAsRelativeGeneric.md) \| [`RouteLocationAsPathGeneric`](interfaces/RouteLocationAsPathGeneric.md) : `_LiteralUnion`\<[`RouteLocationAsStringTypedList`](index.md#RouteLocationAsStringTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`], `string`\> \| [`RouteLocationAsRelativeTypedList`](index.md#RouteLocationAsRelativeTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`] \| [`RouteLocationAsPathTypedList`](index.md#RouteLocationAsPathTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Ubicación de la ruta que puede pasarse a `router.push()` y otras API orientadas al usuario.

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationResolved

Ƭ **RouteLocationResolved**\<`Name`\>: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteLocationResolvedGeneric`](interfaces/RouteLocationResolvedGeneric.md) : [`RouteLocationResolvedTypedList`](index.md#RouteLocationResolvedTypedList)\<[`RouteMap`](index.md#RouteMap)\>[`Name`]

Ubicación de ruta resuelta con [`router.resolve()`](interfaces/Router.md).

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteLocationResolvedTypedList

Ƭ **RouteLocationResolvedTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationResolvedTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocationResolved](index.md#RouteLocationResolved) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteLocationTypedList

Ƭ **RouteLocationTypedList**\<`RouteMap`\>: \{ [N in keyof RouteMap]: RouteLocationTyped\<RouteMap, N\> }

Lista de todas las posibles [RouteLocation](index.md#RouteLocation) indexadas por el nombre de la ruta.

#### Parámetros de tipo

| Nombre     | Tipo                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `RouteMap` | extends [`RouteMapGeneric`](index.md#RouteMapGeneric) = [`RouteMapGeneric`](index.md#RouteMapGeneric) |

---

### RouteMap

Ƭ **RouteMap**: [`TypesConfig`](interfaces/TypesConfig.md) extends `Record`\<`"RouteNamedMap"`, infer RouteNamedMap\> ? `RouteNamedMap` : [`RouteMapGeneric`](index.md#RouteMapGeneric)

Tipo de conveniencia para obtener el RouteMap tipado o uno genérico si no se proporciona. Se extrae de [TypesConfig](interfaces/TypesConfig.md) si existe, se convierte en [RouteMapGeneric](index.md#RouteMapGeneric) en caso contrario.

---

### RouteMapGeneric

Ƭ **RouteMapGeneric**: `Record`\<`string` \| `symbol`, [`RouteRecordInfo`](interfaces/RouteRecordInfo.md)\>

Versión genérica del `RouteMap`.

---

### RouteParamValue

Ƭ **RouteParamValue**: `string`

---

### RouteParamValueRaw

Ƭ **RouteParamValueRaw**: [`RouteParamValue`](index.md#RouteParamValue) \| `number` \| `null` \| `undefined`

---

### RouteParams

Ƭ **RouteParams**\<`Name`\>: [`RouteMap`](index.md#RouteMap)[`Name`][``"params"``]

Genera un parámetro de tipo seguro para una ubicación de ruta. Requiere que el nombre de la ruta se pase como genérico.

**`Mira`**

[RouteParamsGeneric](index.md#RouteParamsGeneric)

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteParamsGeneric

Ƭ **RouteParamsGeneric**: `Record`\<`string`, [`RouteParamValue`](index.md#RouteParamValue) \| [`RouteParamValue`](index.md#RouteParamValue)[]\>

---

### RouteParamsRaw

Ƭ **RouteParamsRaw**\<`Name`\>: [`RouteMap`](index.md#RouteMap)[`Name`][``"paramsRaw"``]

Generar un parámetro sin formato de tipo seguro para una ubicación de ruta. Requiere que el nombre de la ruta se pase como genérico.

**`Mira`**

[RouteParamsRaw](index.md#RouteParamsRaw)

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

---

### RouteParamsRawGeneric

Ƭ **RouteParamsRawGeneric**: `Record`\<`string`, [`RouteParamValueRaw`](index.md#RouteParamValueRaw) \| `Exclude`\<[`RouteParamValueRaw`](index.md#RouteParamValueRaw), `null` \| `undefined`\>[]\>

---

### RouteRecord

Ƭ **RouteRecord**: [`RouteRecordNormalized`](interfaces/RouteRecordNormalized.md)

Versión normalizada de un [registro de ruta](index.md#RouteRecord).

---

### RouteRecordName

Ƭ **RouteRecordName**: [`RouteMapGeneric`](index.md#RouteMapGeneric) extends [`RouteMap`](index.md#RouteMap) ? [`RouteRecordNameGeneric`](index.md#RouteRecordNameGeneric) : keyof [`RouteMap`](index.md#RouteMap)

Valores posibles para un registro de ruta **después de la normalización**.

NOTA: como `RouteRecordName` es un tipo, se evalúa demasiado pronto y suele ser la versión genérica [RouteRecordNameGeneric](index.md#RouteRecordNameGeneric). Si necesita una versión tipada de todos los nombres de rutas, utilice [`keyof RouteMap`](index.md#RouteMap)

---

### RouteRecordNameGeneric

Ƭ **RouteRecordNameGeneric**: `string` \| `symbol` \| `undefined`

Versión genérica de [RouteRecordName](index.md#RouteRecordName).

---

### RouteRecordRaw

Ƭ **RouteRecordRaw**: [`RouteRecordSingleView`](interfaces/RouteRecordSingleView.md) \| [`RouteRecordSingleViewWithChildren`](interfaces/RouteRecordSingleViewWithChildren.md) \| [`RouteRecordMultipleViews`](interfaces/RouteRecordMultipleViews.md) \| [`RouteRecordMultipleViewsWithChildren`](interfaces/RouteRecordMultipleViewsWithChildren.md) \| [`RouteRecordRedirect`](interfaces/RouteRecordRedirect.md)

---

### RouteRecordRedirectOption

Ƭ **RouteRecordRedirectOption**: [`RouteLocationRaw`](index.md#RouteLocationRaw) \| (`to`: [`RouteLocation`](index.md#RouteLocation)) => [`RouteLocationRaw`](index.md#RouteLocationRaw)

---

### \_Awaitable

Ƭ **\_Awaitable**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

Tal vez una promesa, tal vez no

#### Parámetros de tipo

| Nombre |
| :----- |
| `T`    |

---

### \_RouteRecordProps

Ƭ **\_RouteRecordProps**\<`Name`\>: `boolean` \| `Record`\<`string`, `any`\> \| (`to`: [`RouteLocationNormalized`](index.md#RouteLocationNormalized)\<`Name`\>) => `Record`\<`string`, `any`\>

#### Parámetros de tipo

| Nombre | Tipo                                                                                  |
| :----- | :------------------------------------------------------------------------------------ |
| `Name` | extends keyof [`RouteMap`](index.md#RouteMap) = keyof [`RouteMap`](index.md#RouteMap) |

## Variables

### RouterLink

• `Const` **RouterLink**: [`_RouterLinkI`](interfaces/RouterLinkI.md)

Componente para mostrar un enlace que activa la navegación al hacer clic.

---

### RouterView

• `Const` **RouterView**: () => \{ `$props`: `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md) ; `$slots`: \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md) }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\>[] } }

Componente para mostrar la ruta actual en la que se encuentra el usuario.

#### Declaración de tipo

• **new RouterView**(): `Object`

Componente para mostrar la ruta actual en la que se encuentra el usuario.

##### Retorna

`Object`

| Nombre            | Tipo                                                                                                                                                                                                                                                                                                                         |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$props`          | `AllowedComponentProps` & `ComponentCustomProps` & `VNodeProps` & [`RouterViewProps`](interfaces/RouterViewProps.md)                                                                                                                                                                                                         |
| `$slots`          | \{ `default?`: (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md) }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\>[] } |
| `$slots.default?` | (`__namedParameters`: \{ `Component`: `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\> ; `route`: [`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md) }) => `VNode`\<`RendererNode`, `RendererElement`, \{ `[key: string]`: `any`; }\>[]                  |

---

### START_LOCATION

• `Const` **START_LOCATION**: [`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)

Ubicación de la ruta inicial donde se encuentra el router. Se puede utilizar en los protectores de navegación para diferenciar la navegación inicial.

**`Ejemplo`**

```js
import { START_LOCATION } from 'vue-router'

router.beforeEach((to, from) => {
  if (from === START_LOCATION) {
    // navegación inicial
  }
})
```

---

### matchedRouteKey

• `Const` **matchedRouteKey**: `InjectionKey`\<`ComputedRef`\<`undefined` \| [`RouteRecordNormalized`](interfaces/RouteRecordNormalized.md)\>\>

RouteRecord siendo renderizado por el ancestro Router View más cercano. Se utiliza para `onBeforeRouteUpdate` y `onBeforeRouteLeave`. rvlm significa Router View Location Matched (coincidencia de ubicación de la vista del router).

---

### routeLocationKey

• `Const` **routeLocationKey**: `InjectionKey`\<[`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)\>

Permite sobrescribir la ruta actual devuelta por `useRoute` en las pruebas. rl significa ubicación de la ruta

---

### routerKey

• `Const` **routerKey**: `InjectionKey`\<[`Router`](interfaces/Router.md)\>

Permite sobrescribir la instancia de enrutador devuelta por `useRouter` en las pruebas. r significa router

---

### routerViewLocationKey

• `Const` **routerViewLocationKey**: `InjectionKey`\<`Ref`\<[`RouteLocationNormalizedLoadedGeneric`](interfaces/RouteLocationNormalizedLoadedGeneric.md)\>\>

Permite sobreescribir la ruta actual utilizada por router-view. Internamente se utiliza cuando se pasa la propiedad `route`.

---

### viewDepthKey

• `Const` **viewDepthKey**: `InjectionKey`\<`number` \| `Ref`\<`number`\>\>

Permite sobreescribir la profundidad de la vista del router para controlar qué componente de `matched` se renderiza. rvd significa Profundidad de la vista del router.

## Funciones

### createMemoryHistory

▸ **createMemoryHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Crea un historial basado en memoria. El propósito principal de este historial es manejar SSR. Comienza en una ubicación especial que no está en ninguna parte. Depende del usuario reemplazar esa ubicación con la ubicación inicial llamando a `router.push` o `router.replace`.

#### Parámetros

| Nombre | Tipo     | Default value | Descripción                                     |
| :----- | :------- | :------------ | :---------------------------------------------- |
| `base` | `string` | `''`          | Base aplicada a todas las urls, por defecto '/' |

#### Retorna

[`RouterHistory`](interfaces/RouterHistory.md)

un objeto histórico que puede pasarse al constructor del router.

---

### createRouter

▸ **createRouter**(`options`): [`Router`](interfaces/Router.md)

Crea una instancia de Router que puede ser utilizada por una aplicación Vue.

#### Parámetros

| Nombre    | Tipo                                           | Descripción                                  |
| :-------- | :--------------------------------------------- | :------------------------------------------- |
| `options` | [`RouterOptions`](interfaces/RouterOptions.md) | [RouterOptions](interfaces/RouterOptions.md) |

#### Retorna

[`Router`](interfaces/Router.md)

---

### createRouterMatcher

▸ **createRouterMatcher**(`routes`, `globalOptions`): [`RouterMatcher`](interfaces/RouterMatcher.md)

Crea un Emparejador de Router.

#### Parámetros

| Nombre          | Tipo                                                   | Descripción               |
| :-------------- | :----------------------------------------------------- | :------------------------ |
| `routes`        | readonly [`RouteRecordRaw`](index.md#RouteRecordRaw)[] | array de rutas iniciales  |
| `globalOptions` | [`PathParserOptions`](index.md#PathParserOptions)      | opciones de ruta globales |

#### Retorna

[`RouterMatcher`](interfaces/RouterMatcher.md)

---

### createWebHashHistory

▸ **createWebHashHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Crea un historial hash. Útil para aplicaciones web sin host (por ejemplo `file://`) o cuando no es posible configurar un servidor para manejar cualquier URL.

#### Parámetros

| Nombre  | Tipo     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `base?` | `string` | base opcional a proporcionar. Por defecto es `location.pathname + location.search`. Si hay una etiqueta `<base>` en el `head`, su valor será ignorado en favor de este parámetro **pero tenga en cuenta que afecta a todas las llamadas a history.pushState()**, lo que significa que si usa una etiqueta `<base>`, su valor `href` **tiene que coincidir con este parámetro** (ignorando cualquier cosa después del `#`). |

#### Retorna

[`RouterHistory`](interfaces/RouterHistory.md)

**`Ejemplo`**

```js
// en https://example.com/folder
createWebHashHistory() // se obtiene una url de `https://example.com/folder#`
createWebHashHistory('/folder/') // se obtiene una url de `https://example.com/folder/#`
// si el `#` es proporcionado en la base, no será añadido por `createWebHashHistory`
createWebHashHistory('/folder/#/app/') // se obtiene una url de `https://example.com/folder/#/app/`
// debes evitar hacer esto porque cambia la url original y rompe la copia de urls
createWebHashHistory('/other-folder/') // se obtiene una url de `https://example.com/other-folder/#`

// en file:///usr/etc/folder/index.html
// para localizaciones sin `host`, se ignora la base
createWebHashHistory('/iAmIgnored') // se obtiene una url de `file:///usr/etc/folder/index.html#`
```

---

### createWebHistory

▸ **createWebHistory**(`base?`): [`RouterHistory`](interfaces/RouterHistory.md)

Crea un historial HTML5. El historial más común para aplicaciones de una sola página.

#### Parámetros

| Nombre  | Tipo     |
| :------ | :------- |
| `base?` | `string` |

#### Retorna

[`RouterHistory`](interfaces/RouterHistory.md)

---

### isNavigationFailure

▸ **isNavigationFailure**(`error`, `type?`): error is NavigationRedirectError

Comprueba si un objeto es un [NavigationFailure](interfaces/NavigationFailure.md).

#### Parámetros

| Nombre  | Tipo                                                                         | Descripción                                                  |
| :------ | :--------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `error` | `any`                                                                        | posible [NavigationFailure](interfaces/NavigationFailure.md) |
| `type?` | [`NAVIGATION_GUARD_REDIRECT`](enums/ErrorTypes.md#NAVIGATION_GUARD_REDIRECT) | tipos opcionales a comprobar                                 |

#### Retorna

error es NavigationRedirectError

**`Ejemplo`**

```js
import { isNavigationFailure, NavigationFailureType } from 'vue-router'

router.afterEach((to, from, failure) => {
  // Cualquier tipo de fallo de navegación
  if (isNavigationFailure(failure)) {
    // ...
  }
  // Sólo navegaciones duplicadas
  if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
    // ...
  }
  // Navegaciones abortadas o canceladas
  if (
    isNavigationFailure(
      failure,
      NavigationFailureType.aborted | NavigationFailureType.canceled
    )
  ) {
    // ...
  }
})
```

▸ **isNavigationFailure**(`error`, `type?`): error is NavigationFailure

#### Parámetros

| Nombre  | Tipo                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------- |
| `error` | `any`                                                                                            |
| `type?` | [`ErrorTypes`](enums/ErrorTypes.md) \| [`NavigationFailureType`](enums/NavigationFailureType.md) |

#### Retorna

error es NavigationFailure

---

### loadRouteLocation

▸ **loadRouteLocation**(`route`): `Promise`\<[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\>

Asegura que se carga una ruta, para poder pasarla como prop a `<RouterView>`.

#### Parámetros

| Nombre  | Tipo                                                                                                                                             | Descripción               |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `route` | [`RouteLocationNormalizedGeneric`](interfaces/RouteLocationNormalizedGeneric.md) \| [`RouteLocationGeneric`](interfaces/RouteLocationGeneric.md) | ruta resuelta para cargar |

#### Retorna

`Promise`\<[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\>

---

### onBeforeRouteLeave

▸ **onBeforeRouteLeave**(`leaveGuard`): `void`

Añade un protector de navegación que se activa cuando el componente de la ubicación actual está a punto de ser abandonado. Similar a beforeRouteLeave pero puede ser en cualquier componente. La protección se elimina cuando se desmonta el componente.

#### Parámetros

| Nombre       | Tipo                                               | Descripción                                      |
| :----------- | :------------------------------------------------- | :----------------------------------------------- |
| `leaveGuard` | [`NavigationGuard`](interfaces/NavigationGuard.md) | [NavigationGuard](interfaces/NavigationGuard.md) |

#### Retorna

`void`

---

### onBeforeRouteUpdate

▸ **onBeforeRouteUpdate**(`updateGuard`): `void`

Añade un protector de navegación que se activa cuando la ubicación actual está a punto de actualizarse. Es similar a beforeRouteUpdate pero puede utilizarse en cualquier componente. La protección se elimina cuando se desmonta el componente.

#### Parámetros

| Nombre        | Tipo                                               | Descripción                                      |
| :------------ | :------------------------------------------------- | :----------------------------------------------- |
| `updateGuard` | [`NavigationGuard`](interfaces/NavigationGuard.md) | [NavigationGuard](interfaces/NavigationGuard.md) |

#### Retorna

`void`

---

### parseQuery

▸ **parseQuery**(`search`): [`LocationQuery`](index.md#LocationQuery)

Transforma una cadena de consulta en un objeto [LocationQuery](index.md#LocationQuery). Acepta ambas versiones, una con el prefijo `?` y otra sin él. Deben funcionar como URLSearchParams.

#### Parámetros

| Nombre   | Tipo     | Descripción                   |
| :------- | :------- | :---------------------------- |
| `search` | `string` | cadena de búsqueda a analizar |

#### Retorna

[`LocationQuery`](index.md#LocationQuery)

un objeto query

---

### stringifyQuery

▸ **stringifyQuery**(`query`): `string`

Stringifica un objeto [LocationQueryRaw](index.md#LocationQueryRaw). Al igual que `URLSearchParams`, no antepone un `?`.

#### Parámetros

| Nombre  | Tipo                                            | Descripción                    |
| :------ | :---------------------------------------------- | :----------------------------- |
| `query` | [`LocationQueryRaw`](index.md#LocationQueryRaw) | objeto query para stringificar |

#### Retorna

`string`

versión en cadena de la consulta sin el prefijo `?`.

---

### useLink

▸ **useLink**\<`Name`\>(`props`): [`UseLinkReturn`](interfaces/UseLinkReturn.md)\<`Name`\>

Retorna el comportamiento interno de un [RouterLink](index.md#RouterLink) sin la parte de renderizado.

#### Parámetros de tipo

| Nombre | Tipo                                                |
| :----- | :-------------------------------------------------- |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

#### Parámetros

| Nombre  | Tipo                                                       | Descripción                                         |
| :------ | :--------------------------------------------------------- | :-------------------------------------------------- |
| `props` | [`UseLinkOptions`](interfaces/UseLinkOptions.md)\<`Name`\> | una ubicación `to` y una bandera `replace` opcional |

#### Retorna

[`UseLinkReturn`](interfaces/UseLinkReturn.md)\<`Name`\>

---

### useRoute

▸ **useRoute**\<`Name`\>(`_name?`): [`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\<`Name`\>

Retorna la localización actual de la ruta. Equivale a usar `$route` dentro de las plantillas.

#### Parámetros de tipo

| Nombre | Tipo                                                |
| :----- | :-------------------------------------------------- |
| `Name` | extends `string` \| `symbol` = `string` \| `symbol` |

#### Parámetros

| Nombre   | Tipo   |
| :------- | :----- |
| `_name?` | `Name` |

#### Retorna

[`RouteLocationNormalizedLoaded`](index.md#RouteLocationNormalizedLoaded)\<`Name`\>

---

### useRouter

▸ **useRouter**(): [`Router`](interfaces/Router.md)

Retorna la instancia del router. Equivale al uso de `$router` dentro de las plantillas.

#### Retorna

[`Router`](interfaces/Router.md)
