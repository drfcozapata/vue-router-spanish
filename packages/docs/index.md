---
layout: home

title: Vue Router
titleTemplate: El Router oficial para Vue.js

hero:
  name: Vue Router
  text: El Router oficial para Vue.js
  tagline: Enrutamiento expresivo, configurable y conveniente para Vue.js
  image:
    src: /logo.svg
    alt: Vue Router
  actions:
    - theme: brand
      text: Comenzar
      link: /installation
    - theme: cta vueschool
      text: Video Curso Gratuito
      link: https://vueschool.io/courses/vue-router-4-for-everyone?friend=vuerouter&utm_source=vuerouter&utm_medium=link&utm_campaign=homepage
    - theme: cta vue-mastery
      text: Descarga la Hoja de Trucos de Vue Router
      link: https://www.vuemastery.com/vue-router?coupon=ROUTER-DOCS&via=eduardo

features:
  - title: 🛣 Sintaxis de rutas expresiva
    details: Define rutas estáticas y dinámicas con una sintaxis intuitiva y potente.
  - title: 🛑 Control detallado de la navegación
    details: Intercepta cualquier navegación y controla con precisión su resultado.
  - title: 🧱 Configuración basada en componentes
    details: Asigna cada ruta al componente que debe mostrarse.
  - title: 🔌 Historial de modos
    details: Elige entre los modos de historial HTML5, Hash o Memoria.
  - title: 🎚 Control de desplazamiento
    details: Controla con precisión la posición de desplazamiento en cada página.
  - title: 🌐 Codificación automática
    details: Utiliza directamente caracteres unicode (你好) en tu código.
---

<script setup>
import HomeSponsors from './.vitepress/theme/components/HomeSponsors.vue'
import './.vitepress/theme/styles/home-links.css'
</script>

<HomeSponsors />
