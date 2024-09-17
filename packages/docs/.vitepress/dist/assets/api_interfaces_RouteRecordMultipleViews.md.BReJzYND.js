import{_ as e,c as a,o,a3 as r}from"./chunks/framework.BBx4Jw7q.js";const f=JSON.parse('{"title":"Interface: RouteRecordMultipleViews","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/RouteRecordMultipleViews.md","filePath":"api/interfaces/RouteRecordMultipleViews.md"}'),t={name:"api/interfaces/RouteRecordMultipleViews.md"},i=r('<p><a href="./../">API Documentation</a> / RouteRecordMultipleViews</p><h1 id="Interface-RouteRecordMultipleViews" tabindex="-1">Interface: RouteRecordMultipleViews <a class="header-anchor" href="#Interface-RouteRecordMultipleViews" aria-label="Permalink to &quot;Interface: RouteRecordMultipleViews&quot;">​</a></h1><p>Route Record defining multiple named components with the <code>components</code> option.</p><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./RouteRecordBase.html"><code>_RouteRecordBase</code></a></p><p>↳ <strong><code>RouteRecordMultipleViews</code></strong></p></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-label="Permalink to &quot;alias&quot;">​</a></h3><p>• <code>Optional</code> <strong>alias</strong>: <code>string</code> | <code>string</code>[]</p><p>Aliases for the record. Allows defining extra paths that will behave like a copy of the record. Allows having paths shorthands like <code>/users/:id</code> and <code>/u/:id</code>. All <code>alias</code> and <code>path</code> values must share the same params.</p><h4 id="Inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#alias">alias</a></p><hr><h3 id="beforeEnter" tabindex="-1">beforeEnter <a class="header-anchor" href="#beforeEnter" aria-label="Permalink to &quot;beforeEnter&quot;">​</a></h3><p>• <code>Optional</code> <strong>beforeEnter</strong>: <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt; | <a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;[]</p><p>Before Enter guard specific to this record. Note <code>beforeEnter</code> has no effect if the record has a <code>redirect</code> property.</p><h4 id="Inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#beforeEnter">beforeEnter</a></p><hr><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h3><p>• <code>Optional</code> <strong>children</strong>: <code>undefined</code></p><p>Array of nested routes.</p><h4 id="Overrides" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#children">children</a></p><hr><h3 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h3><p>• <code>Optional</code> <strong>component</strong>: <code>undefined</code></p><hr><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><p>• <strong>components</strong>: <code>Record</code>&lt;<code>string</code>, <code>RawRouteComponent</code>&gt;</p><p>Components to display when the URL matches this route. Allow using named views.</p><hr><h3 id="end" tabindex="-1">end <a class="header-anchor" href="#end" aria-label="Permalink to &quot;end&quot;">​</a></h3><p>• <code>Optional</code> <strong>end</strong>: <code>boolean</code></p><p>Should the RegExp match until the end by appending a <code>$</code> to it.</p><p><strong><code>Default Value</code></strong></p><p><code>true</code></p><h4 id="Inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#end">end</a></p><hr><h3 id="meta" tabindex="-1">meta <a class="header-anchor" href="#meta" aria-label="Permalink to &quot;meta&quot;">​</a></h3><p>• <code>Optional</code> <strong>meta</strong>: <a href="./RouteMeta.html"><code>RouteMeta</code></a></p><p>Arbitrary data attached to the record.</p><h4 id="Inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#meta">meta</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <code>Optional</code> <strong>name</strong>: <a href="./../#RouteRecordNameGeneric"><code>RouteRecordNameGeneric</code></a></p><p>Name for the route record. Must be unique.</p><h4 id="Inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#name">name</a></p><hr><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>Path of the record. Should start with <code>/</code> unless the record is the child of another record.</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">`/users/:id`</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> matches</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> `/users/1`</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> as</span><span style="--shiki-dark:#E5C07B;--shiki-light:#6F42C1;"> well</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> as</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> `/users/posva`</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span></span></code></pre></div><h4 id="Inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#path">path</a></p><hr><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><p>• <code>Optional</code> <strong>props</strong>: <code>boolean</code> | <code>Record</code>&lt;<code>string</code>, <a href="./../#_RouteRecordProps"><code>_RouteRecordProps</code></a>&gt;</p><p>Allow passing down params as props to the component rendered by <code>router-view</code>. Should be an object with the same keys as <code>components</code> or a boolean to be applied to every component.</p><h4 id="Overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#props">props</a></p><hr><h3 id="redirect" tabindex="-1">redirect <a class="header-anchor" href="#redirect" aria-label="Permalink to &quot;redirect&quot;">​</a></h3><p>• <code>Optional</code> <strong>redirect</strong>: <code>undefined</code></p><p>Where to redirect if the route is directly matched. The redirection happens before any navigation guard and triggers a new navigation with the new target location.</p><h4 id="Overrides-2" tabindex="-1">Overrides <a class="header-anchor" href="#Overrides-2" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#redirect">redirect</a></p><hr><h3 id="sensitive" tabindex="-1">sensitive <a class="header-anchor" href="#sensitive" aria-label="Permalink to &quot;sensitive&quot;">​</a></h3><p>• <code>Optional</code> <strong>sensitive</strong>: <code>boolean</code></p><p>Makes the RegExp case-sensitive.</p><p><strong><code>Default Value</code></strong></p><p><code>false</code></p><h4 id="Inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#sensitive">sensitive</a></p><hr><h3 id="strict" tabindex="-1">strict <a class="header-anchor" href="#strict" aria-label="Permalink to &quot;strict&quot;">​</a></h3><p>• <code>Optional</code> <strong>strict</strong>: <code>boolean</code></p><p>Whether to disallow a trailing slash or not.</p><p><strong><code>Default Value</code></strong></p><p><code>false</code></p><h4 id="Inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#Inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./RouteRecordBase.html">_RouteRecordBase</a>.<a href="./RouteRecordBase.html#strict">strict</a></p>',86),d=[i];function n(s,h,c,l,p,u){return o(),a("div",null,d)}const R=e(t,[["render",n]]);export{f as __pageData,R as default};
