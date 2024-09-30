---
editLink: false
---

[Documentación de la API](../index.md) / NavigationFailureType

# Enumeración: NavigationFailureType

Enumeración con todos los tipos posibles de fallos de navegación. Puede pasarse a [isNavigationFailure](../index.md#isNavigationFailure) para comprobar fallos específicos.

## Miembros de Enumeración

### aborted

• **aborted** = `4`

Una navegación abortada es una navegación que ha fallado porque un protector de navegación ha devuelto `false` o ha llamado a `next(false)`.

---

### cancelled

• **cancelled** = `8`

Una navegación cancelada es una navegación que falló porque una navegación más reciente terminó de iniciarse (no necesariamente finalizada).

---

### duplicated

• **duplicated** = `16`

Una navegación duplicada es una navegación que falló porque se inició estando ya en la misma ubicación exacta.
