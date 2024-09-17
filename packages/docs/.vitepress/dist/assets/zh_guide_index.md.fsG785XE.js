import{_ as p,D as s,c as l,I as i,w as k,j as a,a as e,a3 as t,o as r}from"./chunks/framework.BBx4Jw7q.js";const m=JSON.parse('{"title":"入门","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/index.md","filePath":"zh/guide/index.md"}'),o={name:"zh/guide/index.md"},d=a("h1",{id:"入门",tabindex:"-1"},[e("入门 "),a("a",{class:"header-anchor",href:"#入门","aria-label":'Permalink to "入门"'},"​")],-1),c=t(`<p>Vue Router 是 Vue 官方的客户端路由解决方案。</p><p>客户端路由的作用是在单页应用 (SPA) 中将浏览器的 URL 和用户看到的内容绑定起来。当用户在应用中浏览不同页面时，URL 会随之更新，但页面不需要从服务器重新加载。</p><p>Vue Router 基于 Vue 的组件系统构建，你可以通过配置<strong>路由</strong>来告诉 Vue Router 为每个 URL 路径显示哪些组件。</p><div class="tip custom-block"><p class="custom-block-title">学习基础</p><p>这份指南假设你已经对 Vue 有了一定的了解。你不必是 Vue 的专家，但你也许偶尔需要查看 <a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 的文档</a>来了解某些特性。</p></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>为了引入一些核心概念，我们将使用如下的示例：</p><ul><li><a href="https://play.vuejs.org/#eNqFVVtv2zYU/itn6gArmC05btEHTXXTFcWyYZeiLfYy7UGWji02EsmRlOPA8H/fIambnaRD4Fg61++c7yN9DJqc8eirDpKANVIoA0coFOYG30kJJ9gq0cBs3+Is412AEq1B1Xmi2L+ObpvX+3IpI5+b8aFqSJ+rjANErcbQp/v3RrTchLMXlDa7CuZBl07YUoONrCl/bQPT6np9i3UtbLPv0phenVm6L3rQRgm+W79vlULeIQaZmypJ484HxyN87xzRtq3rj+SE08mViX2dlOf7vuAnh/I3xu/AiDdZEGfB+mdBz3ArGkzj0f9sRr4hy5D2zr49ykvjvmdqeTmv9RfDe4i7uM6dxsNiaF9+l0+y+Ts2Qj3cMm3oa94Zfd0py4uBzYFPO6Br3ZPaGzpme9rtQGdxg2WUgOC6Y0PDG/jbjnL0vMAsnhEsQcU4UZaMbU/z8zC3x/PYsbcN/ueilaJW03nDoy1Y+VUkT+0nvHI9PVB6PJE8M44HN2iJ27yt+9q09ek+rFR1oZg0RM5FgmvboKlEqRP/BrATX4SDH171JgBD4CIvThXJVldhP7Y7J9DtxP4nxZKk+470cnFQVuseHh2TlTduWmMEh5uiZsUdSXPAcKlOH/hIZmfEjhODRtPaozNKjyiiGcqn75Ej0Pl3lMyHp2fFeMHnEB/SRia+ict6ep/GXBWV1UGHyGtgh5O1K0KvuC8T/duieoi6tLdvYUYg+rXTmKH3jLmeKoW0owLDI7h8IrnvfAKrIargxfQ/lA0LHjmr8w3W3X3w2dVMIGWchoH9ohEl1pFRrCE2fccsgCY/1Mh3piLjaknc+pujr3TOqedk0eSSrg/BiVU3WtY5dBYMks2CkRtrzoLKGKmTOG65vNtFtON4jLh5Fb2MlnFJJ2tijVA3i40S99rdV1ngNmtr31BQXOLeCFHrRS7Zcy0eBd68jl5H13HNNjFVjxkv8eBq94unMY0mQWzZ7mJIKwtWo/pTGkaCORs2p9+Z+1+dzagWB6BFhcXdE/av+uAhf1RI0+1xMpzJFWnOuz98/gMP9Dw4icW2puhvOD+hFnVrMfqwn1peEuxJnEP7i+OM8d0X/eFgkOt+KAt0FLIj8v03Rh/hvoxeTbaozUONOiq0/aGhX6w5aY1xn7cRqkSVwEoegMCyEl4sl8sf3d1H5RhfbATdKk0C10t5cHaZlyWBHSzUJeNUFtaQww/08Tenz65xSzf+NLJaTTuP5UcARVFMACSwpL9VVyE4/QesCg/V" target="_blank" rel="noreferrer">Vue 演练场中的示例</a></li></ul><p>让我们首先来看根组件, <code>App.vue</code>。</p><h3 id="App-vue" tabindex="-1">App.vue <a class="header-anchor" href="#App-vue" aria-label="Permalink to &quot;App.vue&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">h1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;Hello App!&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">h1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">p</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">strong</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;Current route path:&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">strong</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt; {{ </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">$route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">fullPath</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">p</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">nav</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">RouterLink</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;/&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;Go to Home&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">RouterLink</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;/about&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;Go to About&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">nav</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">main</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">RouterView</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">main</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>在这个 <code>template</code> 中使用了两个由 Vue Router 提供的组件: <code>RouterLink</code> 和 <code>RouterView</code>。</p><p>不同于常规的 <code>&lt;a&gt;</code> 标签，我们使用组件 <code>RouterLink</code> 来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。我们将会在之后的部分深入了解 <code>RouterLink</code> 组件。</p><p><code>RouterView</code> 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的<strong>路由组件</strong>。它不一定要在 <code>App.vue</code> 中，你可以把它放在任何地方，但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。</p><p>上述示例还使用了 <code>{{ $route.fullPath }}</code> 。你可以在组件模板中使用 <code>$route</code> 来访问当前的路由对象。</p>`,14),g=t(`<h3 id="创建路由器实例" tabindex="-1">创建路由器实例 <a class="header-anchor" href="#创建路由器实例" aria-label="Permalink to &quot;创建路由器实例&quot;">​</a></h3><p>路由器实例是通过调用 <code>createRouter()</code> 函数创建的:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">createMemoryHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> HomeView</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./HomeView.vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> AboutView</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./AboutView.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">HomeView</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/about&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">AboutView</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  history</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">createMemoryHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(),</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  routes</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>这里的 <code>routes</code> 选项定义了一组路由，把 URL 路径映射到组件。其中，由 <code>component</code> 参数指定的组件就是先前在 <code>App.vue</code> 中被 <code>&lt;RouterView&gt;</code> 渲染的组件。这些路由组件通常被称为<em>视图</em>，但本质上它们只是普通的 Vue 组件。</p><p>其他可以设置的路由选项我们会在之后介绍，目前我们只需要 <code>path</code> 和 <code>component</code>。</p><p>这里的 <code>history</code> 选项控制了路由和 URL 路径是如何双向映射的。在演练场的示例里，我们使用了 <code>createMemoryHistory()</code>，它会完全忽略浏览器的 URL 而使用其自己内部的 URL。 这在演练场中可以正常工作，但是未必是你想要在实际应用中使用的。通常，你应该使用 <code>createWebHistory()</code> 或 <code>createWebHashHistory()</code>。我们将在<a href="./essentials/history-mode.html">不同的历史记录模式</a>的部分详细介绍这个主题。</p><h3 id="注册路由器插件" tabindex="-1">注册路由器插件 <a class="header-anchor" href="#注册路由器插件" aria-label="Permalink to &quot;注册路由器插件&quot;">​</a></h3><p>一旦创建了我们的路由器实例，我们就需要将其注册为插件，这一步骤可以通过调用 <code>use()</code> 来完成。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">createApp</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">App</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  .</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">use</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  .</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">mount</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;#app&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span></code></pre></div><p>或等价地：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> app</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createApp</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">App</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">app</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">use</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">app</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">mount</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;#app&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span></code></pre></div><p>和大多数的 Vue 插件一样，<code>use()</code> 需要在 <code>mount()</code> 之前调用。</p><p>如果你好奇这个插件做了什么，它的职责包括：</p><ol><li><a href="https://cn.vuejs.org/guide/components/registration.html#global-registration" target="_blank" rel="noreferrer">全局注册</a> <code>RouterView</code> 和 <code>RouterLink</code> 组件。</li><li>添加全局 <code>$router</code> 和 <code>$route</code> 属性。</li><li>启用 <code>useRouter()</code> 和 <code>useRoute()</code> 组合式函数。</li><li>触发路由器解析初始路由。</li></ol><h3 id="访问路由器和当前路由" tabindex="-1">访问路由器和当前路由 <a class="header-anchor" href="#访问路由器和当前路由" aria-label="Permalink to &quot;访问路由器和当前路由&quot;">​</a></h3><p>你很可能想要在应用的其他地方访问路由器。</p><p>如果你是从 ES 模块导出路由器实例的，你可以将路由器实例直接导入到你需要它的地方。在一些情况下这是最好的方法，但如果我们在组件内部，那么我们还有其他选择。</p><p>在组件模板中，路由器实例将被暴露为 <code>$router</code>。这与同样被暴露的 <code>$route</code> 一样，但注意前者最后有一个额外的 <code>r</code>。</p><p>如果我们使用选项式 API，我们可以在 JavaScript 中如下访问这两个属性：<code>this.$router</code> 和 <code>this.$route</code>。在演练场示例中的 <code>HomeView.vue</code> 组件中，路由器就是这样获取的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  methods</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">    goToAbout</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">() {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">      this</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">$router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/about&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span></code></pre></div><p>这里调用了 <code>push()</code>，这是用于<a href="./essentials/navigation.html">编程式导航</a>的方法。我们会在后面详细了解。</p><p>对于组合式 API，我们不能通过 <code>this</code> 访问组件实例，所以 Vue Router 给我们提供了一些组合式函数。演练场示例中的 <code>AboutView.vue</code> 组件使用了这种方法：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> route</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useRoute</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> search</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  get</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">() {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">search</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> ??</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  set</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">search</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">    router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">replace</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">search</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } })</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>你现在不一定要完全理解这段代码，关键是要知道可以通过 <code>useRouter()</code> 和 <code>useRoute()</code> 来访问路由器实例和当前路由。</p><h3 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h3><p>如果你想要在 Vite 中使用完整的示例，你可以使用 <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer">create-vue</a> 工具，它提供了在项目加入 Vue Router 的选项：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2_ZWl" id="tab-HaNNZy-" checked><label for="tab-HaNNZy-">npm</label><input type="radio" name="group-2_ZWl" id="tab-dZSRoyF"><label for="tab-dZSRoyF">yarn</label><input type="radio" name="group-2_ZWl" id="tab-8RoLxU3"><label for="tab-8RoLxU3">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">npm</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> create</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> vue@latest</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">yarn</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> create</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> vue</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">pnpm</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> create</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> vue</span></span></code></pre></div></div></div><p>上述通过 create-vue 创建的示例项目使用了与我们在这里看到的类似的功能，对于探索后续介绍的其他功能而言，也许你会觉得这是一个不错的起点。</p><h2 id="本教程的约定" tabindex="-1">本教程的约定 <a class="header-anchor" href="#本教程的约定" aria-label="Permalink to &quot;本教程的约定&quot;">​</a></h2><h3 id="单文件组件" tabindex="-1">单文件组件 <a class="header-anchor" href="#单文件组件" aria-label="Permalink to &quot;单文件组件&quot;">​</a></h3><p>Vue Router 经常在配合打包工具 (如 Vite) 和<a href="https://cn.vuejs.org/guide/introduction.html#single-file-components" target="_blank" rel="noreferrer">单文件组件</a> (即 <code>.vue</code> 文件) 的应用中使用。本教程大多数的示例都是如此，但是 Vue Router 本身并不要求你使用构建工具或单文件组件。</p><p>例如，若你要使用 <a href="https://cn.vuejs.org/guide/quick-start.html#using-vue-from-cdn" target="_blank" rel="noreferrer">Vue</a> 和 <a href="./../installation.html#Direct-Download-CDN">Vue Router</a> 的使用全局构建版本，这些库将被暴露为全局对象，而不是导入：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">createApp</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> Vue</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">createWebHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> VueRouter</span></span></code></pre></div><h3 id="组件-API-风格" tabindex="-1">组件 API 风格 <a class="header-anchor" href="#组件-API-风格" aria-label="Permalink to &quot;组件 API 风格&quot;">​</a></h3><p>Vue Router 可以使用组合式 API 或选项式 API 。在必要时，示例将会同时使用两种风格，组合式 API 示例通常会使用 <code>&lt;script setup&gt;</code>，而不是显式的 <code>setup</code> 函数。</p><p>如果你对于这两种风格不熟悉，可以参考 <a href="https://cn.vuejs.org/guide/introduction.html#api-styles" target="_blank" rel="noreferrer">Vue - API 风格</a>。</p><h3 id="router-和-route" tabindex="-1"><code>router</code> 和 <code>route</code> <a class="header-anchor" href="#router-和-route" aria-label="Permalink to &quot;\`router\` 和 \`route\`&quot;">​</a></h3><p>在本教程中，我们常常以 <code>router</code> 作为路由器实例提及。即由 <code>createRouter()</code> 返回的对象。在应用中，访问该对象的方式取决于上下文。例如，在组合式 API 中，它可以通过调用 <code>useRouter()</code> 来访问。在选项式 API 中，它可以通过 <code>this.$router</code> 来访问。</p><p>类似地，当前路由会以 <code>route</code> 被提及。基于不同 API 风格的组件，它可以通过 <code>useRoute()</code> 或 <code>this.$route</code> 来访问。</p><h3 id="RouterView-和-RouterLink" tabindex="-1"><code>RouterView</code> 和 <code>RouterLink</code> <a class="header-anchor" href="#RouterView-和-RouterLink" aria-label="Permalink to &quot;\`RouterView\` 和 \`RouterLink\`&quot;">​</a></h3><p>组件 <code>RouterView</code> 和 <code>RouterLink</code> 都是<a href="https://cn.vuejs.org/guide/components/registration.html#global-registration" target="_blank" rel="noreferrer">全局注册</a>的，因此它们不需要在组件模板中导入。但你也可以通过局部导入它们，例如 <code>import { RouterLink } from &#39;vue-router&#39;</code>。</p><p>在模板中，组件的名字可以是 PascalCase 风格或 kebab-case 风格的。Vue 的模板编译器支持两种格式，因此 <code>&lt;RouterView&gt;</code> 和 <code>&lt;router-view&gt;</code> 通常是等效的。此时应该遵循你自己项目中使用的约定。</p><p>如果使用 DOM 内模板，那么需要<a href="https://cn.vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats" target="_blank" rel="noreferrer">注意</a>：组件名字必须使用 kebab-case 风格且不支持自闭合标签。因此你不能直接写 <code>&lt;RouterView /&gt;</code>，而需要使用 <code>&lt;router-view&gt;&lt;/router-view&gt;</code>。</p>`,43);function B(u,y,E,A,F,C){const n=s("VueSchoolLink"),h=s("VueMasteryLogoLink");return r(),l("div",null,[d,i(n,{href:"https://vueschool.io/courses/vue-router-4-for-everyone",title:"在 Vue School 上学习如何使用 Vue Router 构建强大的单页应用"},{default:k(()=>[e("观看免费的 Vue Router 视频课程")]),_:1}),c,i(h),g])}const b=p(o,[["render",B]]);export{m as __pageData,b as default};
