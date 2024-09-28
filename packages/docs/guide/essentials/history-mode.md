# Diferentes Modos de Historial

<VueSchoolLink
  href="https://vueschool.io/lessons/history-mode"
  title="Aprende acerca de las diferencias entre Modo Hash y Modo HTML5"
/>

La opción `history` al crear la instancia del enrutador nos permite elegir entre diferentes modos de historial.

## Modo Hash

El modo de historial hash se crea con `createWebHashHistory()`:

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

Éste utiliza un carácter hash (`#`) antes de la URL real que se pasa internamente. Como esta sección de la URL nunca se envía al servidor, no requiere ningún tratamiento especial a nivel de servidor. **Sin embargo, tiene un impacto negativo en el SEO**. Si eso te preocupa, utiliza el modo de historial HTML5.

## Modo HTML5

El modo HTML5 se crea con `createWebHistory()` y es el modo recomendado:

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

Cuando se usa `createWebHistory()`, la URL se verá «normal», por ejemplo `https://example.com/user/id`. ¡Precioso!

Sin embargo, aquí viene un problema: Dado que nuestra aplicación es una aplicación cliente de una sola página, sin una configuración adecuada del servidor, los usuarios obtendrán un error 404 si acceden a `https://example.com/user/id` directamente en su navegador. Eso sí que es desagradable.

No te preocupes: Para solucionar el problema, todo lo que tienes que hacer es añadir una simple ruta de retorno a tu servidor. Si la URL no coincide con ningún activo estático, debería servir la misma página `index.html` en la que se encuentra tu aplicación. Precioso, ¡otra vez!

## Modo memoria

El modo de historial en memoria no asume un entorno de navegador y por lo tanto no interactúa con la URL **ni activa automáticamente la navegación inicial**. Esto lo hace perfecto para entornos Node y SSR. Se crea con `createMemoryHistory()` y **requiere que impulses la navegación inicial** después de llamar a `app.use(router)`.

```js
import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    //...
  ],
})
```

Aunque no se recomienda, puedes usar este modo dentro de las aplicaciones del Navegador, pero ten en cuenta que **no habrá historial**, lo que significa que no podrás volver _atrás_ o _adelante_.

## Ejemplo de configuración del servidor

**Nota**: Los siguientes ejemplos asumen que estás sirviendo tu aplicación desde el directorio raíz. Si despliegas en un subdirectorio, debes usar [la opción `publicPath` de Vue CLI](https://cli.vuejs.org/config/#publicpath) y la [propiedad `base` del router](../../api/interfaces/Router.md#createWebHistory) relacionada. También es necesario ajustar los siguientes ejemplos para utilizar el subdirectorio en lugar del directorio raíz (por ejemplo, sustituyendo `RewriteBase /` por `RewriteBase /nombre-de-tu-subdirectorio/`).

### Apache

```
<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

En lugar de `mod_rewrite`, también podrías utilizar [`FallbackResource`](https://httpd.apache.org/docs/2.4/mod/mod_dir.html#fallbackresource).

### nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Node.js Nativo

```js
const http = require('http')
const fs = require('fs')
const httpPort = 80

http
  .createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('No podemos abrir el archivo "index.html".')
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      })

      res.end(content)
    })
  })
  .listen(httpPort, () => {
    console.log('Servidor escuchando en: http://localhost:%s', httpPort)
  })
```

### Express con Node.js

Para Node.js/Express, considera el uso del [middleware connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback).

### Servicios de Información de Internet (IIS)

1. Instala [IIS UrlRewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
2. Crea un archivo `web.config` en el directorio raíz de tu sitio con lo siguiente:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Manejar Modo Historial y 404/500 personalizados" stopProcessing="true">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

### Caddy v2

```
try_files {path} /
```

### Caddy v1

```
rewrite {
    regexp .*
    to {path} /
}
```

### Alojamiento en Firebase

Añade esto a tu `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Netlify

Crear un archivo `_redirects` que se incluye con los archivos desplegados:

```
/* /index.html 200
```

En los proyectos vue-cli, nuxt y vite, este archivo suele ir en un directorio llamado `static` o `public`.

Puedes leer más sobre la sintaxis en la [Documentación de Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps). También puedes [crear un `netlify.toml`](https://docs.netlify.com/configure-builds/file-based-configuration/) para combinar _redirecciones_ con otras prestaciones de Netlify.

### Vercel

Crea un archivo `vercel.json` bajo el directorio raíz de tu proyecto con lo siguiente:

```json
{
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```

## Advertencia

Hay una advertencia para esto: Tu servidor ya no reportará errores 404 ya que todas las rutas no encontradas ahora servirán a tu archivo `index.html`. Para evitar este problema, debes implementar una ruta catch-all dentro de tu aplicación Vue para mostrar una página 404:

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})
```

Alternativamente, si estás usando un servidor Node.js, puedes implementar el fallback usando el router en el lado del servidor para que coincida con la URL entrante y responda con 404 si no coincide ninguna ruta. Consulta la [Documentación de renderizado del lado del servidor de Vue](https://vuejs.org/guide/scaling-up/ssr.html) para obtener más información.
