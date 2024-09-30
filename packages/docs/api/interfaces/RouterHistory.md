---
editLink: false
---

[Documentación de la API](../index.md) / RouterHistory

# Interface: RouterHistory

Interface implemented by History implementations that can be passed to the
router as Router.history

## Propiedades

### base

• `Readonly` **base**: `string`

Base path that is prepended to every url. This allows hosting an SPA at a
sub-folder of a domain like `example.com/sub-folder` by having a `base` of
`/sub-folder`

---

### location

• `Readonly` **location**: `string`

Current History location

---

### state

• `Readonly` **state**: [`HistoryState`](HistoryState.md)

Current History state

## Methods

### createHref

▸ **createHref**(`location`): `string`

Generates the corresponding href to be used in an anchor tag.

#### Parámetros

| Nombre     | Tipo     | Descripción                                 |
| :--------- | :------- | :------------------------------------------ |
| `location` | `string` | history location that should create an href |

#### Retorna

`string`

---

### destroy

▸ **destroy**(): `void`

Clears any event listener attached by the history implementation.

#### Retorna

`void`

---

### go

▸ **go**(`delta`, `triggerListeners?`): `void`

Traverses history in a given direction.

#### Parámetros

| Nombre              | Tipo      | Descripción                                                                                                        |
| :------------------ | :-------- | :----------------------------------------------------------------------------------------------------------------- |
| `delta`             | `number`  | distance to travel. If delta is \< 0, it will go back, if it's \> 0, it will go forward by that amount of entries. |
| `triggerListeners?` | `boolean` | whether this should trigger listeners attached to the history                                                      |

#### Retorna

`void`

**`Example`**

```js
myHistory.go(-1) // equivalent to window.history.back()
myHistory.go(1) // equivalent to window.history.forward()
```

---

### listen

▸ **listen**(`callback`): () => `void`

Attach a listener to the History implementation that is triggered when the
navigation is triggered from outside (like the Browser back and forward
buttons) or when passing `true` to RouterHistory.back and
RouterHistory.forward

#### Parámetros

| Nombre     | Tipo                 | Descripción        |
| :--------- | :------------------- | :----------------- |
| `callback` | `NavigationCallback` | listener to attach |

#### Retorna

`fn`

a callback to remove the listener

▸ (): `void`

##### Retorna

`void`

---

### push

▸ **push**(`to`, `data?`): `void`

Navigates to a location. In the case of an HTML5 History implementation,
this will call `history.pushState` to effectively change the URL.

#### Parámetros

| Nombre  | Tipo                              | Descripción                                                                         |
| :------ | :-------------------------------- | :---------------------------------------------------------------------------------- |
| `to`    | `string`                          | location to push                                                                    |
| `data?` | [`HistoryState`](HistoryState.md) | optional [HistoryState](HistoryState.md) to be associated with the navigation entry |

#### Retorna

`void`

---

### replace

▸ **replace**(`to`, `data?`): `void`

Same as [RouterHistory.push](RouterHistory.md#push) but performs a `history.replaceState`
instead of `history.pushState`

#### Parámetros

| Nombre  | Tipo                              | Descripción                                                                         |
| :------ | :-------------------------------- | :---------------------------------------------------------------------------------- |
| `to`    | `string`                          | location to set                                                                     |
| `data?` | [`HistoryState`](HistoryState.md) | optional [HistoryState](HistoryState.md) to be associated with the navigation entry |

#### Retorna

`void`
