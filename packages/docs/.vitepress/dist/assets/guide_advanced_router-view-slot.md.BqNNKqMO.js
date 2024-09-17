import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.BBx4Jw7q.js";const y=JSON.parse('{"title":"RouterView slot","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/router-view-slot.md","filePath":"guide/advanced/router-view-slot.md"}'),n={name:"guide/advanced/router-view-slot.md"},e=t(`<h1 id="RouterView-slot" tabindex="-1">RouterView slot <a class="header-anchor" href="#RouterView-slot" aria-label="Permalink to &quot;RouterView slot&quot;">​</a></h1><p>The RouterView component exposes a slot that can be used to render the route component:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>The code above is equivalent to using <code>&lt;router-view /&gt;</code> without the slot, but the slot provides extra flexibility when we want to work with other features.</p><h2 id="KeepAlive-Transition" tabindex="-1">KeepAlive &amp; Transition <a class="header-anchor" href="#KeepAlive-Transition" aria-label="Permalink to &quot;KeepAlive &amp; Transition&quot;">​</a></h2><p>When working with the <a href="https://vuejs.org/guide/built-ins/keep-alive.html" target="_blank" rel="noreferrer">KeepAlive</a> component, we would usually want it to keep the route components alive, not the RouterView itself. We can achieve that by putting the KeepAlive inside the slot:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">keep-alive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">keep-alive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>Similarly, the slot allows us to use a <a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" rel="noreferrer">Transition</a> component to transition between route components:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">transition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">transition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>We can also use KeepAlive inside a Transition:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">transition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">keep-alive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">keep-alive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">transition</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>For more information about using RouterView with the Transition component, see the <a href="./transitions.html">Transitions</a> guide.</p><h2 id="Passing-props-and-slots" tabindex="-1">Passing props and slots <a class="header-anchor" href="#Passing-props-and-slots" aria-label="Permalink to &quot;Passing props and slots&quot;">​</a></h2><p>We can use the slot to pass props or slots to the route component:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> some-prop</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;a value&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">p</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;Some slotted content&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">p</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>In practice, this usually isn&#39;t something you would want to do, as the route components would <strong>all need to use the same props and slots</strong>. See <a href="./../essentials/passing-props.html">Passing Props to Route Components</a> for other ways to pass props.</p><h2 id="Template-refs" tabindex="-1">Template refs <a class="header-anchor" href="#Template-refs" aria-label="Permalink to &quot;Template refs&quot;">​</a></h2><p>Using the slot allows us to put a <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank" rel="noreferrer">template ref</a> directly on the route component:</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">is</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">Component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> ref</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;mainContent&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> /&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-view</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>If we put the ref on the <code>&lt;router-view&gt;</code> instead then the ref would be populated with the RouterView instance, rather than the route component.</p>`,20),h=[e];function l(p,k,r,B,o,d){return a(),i("div",null,h)}const A=s(n,[["render",l]]);export{y as __pageData,A as default};
