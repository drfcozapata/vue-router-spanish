# Instalación

<VueMasteryLogoLink></VueMasteryLogoLink>

## Manejadores de paquetes

Si tienes un proyecto existente que utiliza un gestor de paquetes JavaScript, puedes instalar Vue Router desde el repositorio de npm:

::: code-group

```bash [npm]
npm install vue-router@4
```

```bash [yarn]
yarn add vue-router@4
```

```bash [pnpm]
pnpm add vue-router@4
```

:::

Si estás empezando un nuevo proyecto, podrías encontrar más fácil usar la herramienta de andamiaje [create-vue](https://github.com/vuejs/create-vue), la cual crea un proyecto basado en Vue con la opción de incluir Vue Router:

::: code-group

```bash [npm]
npm create vue@latest
```

```bash [yarn]
yarn create vue
```

```bash [pnpm]
pnpm create vue
```

:::

Se te harán algunas preguntas sobre el tipo de proyecto que quieres crear. Si eliges instalar Vue Router, la aplicación de ejemplo también demostrará algunas de las características principales de Vue Router.

Los proyectos que utilicen gestores de paquetes normalmente utilizarán módulos ES para acceder a Vue Router, por ejemplo `import { createRouter } from 'vue-router'`.

## Descarga directa / CDN

[https://unpkg.com/vue-router@4](https://unpkg.com/vue-router@4)

<!--email_off-->

[Unpkg.com](https://unpkg.com) proporciona enlaces CDN basados en npm. El enlace anterior siempre apuntará a la última versión en npm. También puedes usar una versión/etiqueta específica a través de URLs como `https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js`.

<!--/email_off-->

Esto expondrá Vue Router a través de un objeto global `VueRouter`, por ejemplo `VueRouter.createRouter(...)`.
