# Rutas con Nombres

<VueSchoolLink
  href="https://vueschool.io/lessons/named-routes"
  title="Aprende acerca de las rutas con nombres"
/>

Cuando se crea una ruta, opcionalmente podemos darle un `nombre` (`name`) a la ruta:

```js
const routes = [
  {
    path: '/user/:username',
    name: 'profile', // [!code highlight]
    component: User,
  },
]
```

Luego podemos usar el `name` en lugar del `path` cuando pasamos la prop `to` al `<router-link>`:

```vue-html
<router-link :to="{ name: 'profile', params: { username: 'erina' } }">
  User profile
</router-link>
```

El ejemplo anterior crearía un enlace a `/user/erina`.

- [Míralo en el Playground](https://play.vuejs.org/#eNqtVVtP2zAU/itWNqlFauNNIB6iUMEQEps0NjH2tOzBtKY1JLZlO6VTlP++4+PcelnFwyRofe7fubaKCiZk/GyjJBKFVsaRiswNZ45faU1q8mRUQUbrko8yuaPwlRfK/LkV1sHXpGHeq9JxMzScGmT19t5xkMaUaR1vOb9VBe+kntgWXz2Cs06O1LbCTwvRW7knGnEm50paRwIYcrEFd1xlkpBVyCQ5lN74ZOJV0Nom5JcnCFRCM7dKyIiOJkSygsNzBZiBmivAI7l0SUipRvuhCfPge7uWHBiGZPctS0iLJv7T2/YutFFPIt+JjgUJPn7DZ32CtWg7PIZ/4BASg7txKE6gC1VKNx69gw6NTqJJ1HQK5iR1vNA52M+8Yrr6OLuD+AuCtbQpBQYK9Oy6NAZAhLI1KKuKvEc69jSp65Tqw/oh3V7f00P9MsdveOWiecE75DDNhXwhiVMXWVRttYbUWdRpE2xOZ0sHxq1v2jl/a5jQyZ042Mv/HKjvt2aGFTCXFWmnAsTcCMkAxw4SHIjG9E2AUtpUusWyFvyVUGCltBsFmJB2W/dHZCHWswdYLwJ/XiulnrNr323zcQeodthDuAHTgmm4aEqCH1zsrBHYLIISheyyqD9Nnp1FK+e0TSgtpX5ZxrBBtNe4PItP4w8Q07oBN+a2mD4a9erPzDN4bzY1iy5BiS742imV2ynT4l8h9hQvz+Pz+COU/pGCdyrkgm/Qt3ddw/5Cms7CLXsSy50k/dJDT8037QTcuq1kWZ6r1y/Ic6bkHdD5is9fDvCf7SZA/m44ZLfmg+QcM0vugvjmxx3fwLsTFmpRwlwdE95zq/LSYwxqn0q5ANgDPUT7GXsm5PLB3mwcl7ZNygPFaqA+NvL6SOo93NP4bFDF9sfh+LThtgxvkF80fyxxy/Ac7U9i/RcYNWrd).

Usar un `name` tiene varias ventajas:

- Sin URL codificadas.
- Codificación automática de los «parámetros».
- Evita errores tipográficos en las URL.
- Evita la jerarquización de rutas, por ejemplo, para mostrar una ruta de rango inferior que coincida con la misma ruta.

Cada nombre **debe ser único** en todas las rutas. Si añade el mismo nombre a varias rutas, el enrutador sólo conservará el último. Puedes leer más sobre esto en el apartado [Enrutamiento Dinámico](../advanced/dynamic-routing#Removing-routes).

Hay otras partes de Vue Router a las que se les puede pasar una ubicación, por ejemplo, los métodos `router.push()` y `router.replace()`. Entraremos en más detalle sobre estos métodos en la guía de [navegación programática](./navigation). Al igual que la prop `to`, estos métodos también soportan pasar una localización por `name`:

```js
router.push({ name: 'profile', params: { username: 'erina' } })
```
