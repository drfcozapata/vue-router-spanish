import{_ as a,D as n,c as t,I as e,j as s,a as h,a3 as l,o as p}from"./chunks/framework.BBx4Jw7q.js";const A=JSON.parse('{"title":"Lazy Loading Routes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/lazy-loading.md","filePath":"guide/advanced/lazy-loading.md"}'),k={name:"guide/advanced/lazy-loading.md"},r=s("h1",{id:"Lazy-Loading-Routes",tabindex:"-1"},[h("Lazy Loading Routes "),s("a",{class:"header-anchor",href:"#Lazy-Loading-Routes","aria-label":'Permalink to "Lazy Loading Routes"'},"​")],-1),o=l(`<p>When building apps with a bundler, the JavaScript bundle can become quite large, and thus affect the page load time. It would be more efficient if we can split each route&#39;s components into separate chunks, and only load them when the route is visited.</p><p>Vue Router supports <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import" target="_blank" rel="noreferrer">dynamic imports</a> out of the box, meaning you can replace static imports with dynamic ones:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// replace</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// import UserDetails from &#39;./views/UserDetails&#39;</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// with</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> UserDetails</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#61AFEF;--shiki-light:#D73A49;"> import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;./views/UserDetails.vue&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> router</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> createRouter</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  routes</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/users/:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">UserDetails</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // or use it directly in the route definition</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/users/:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#61AFEF;--shiki-light:#D73A49;"> import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;./views/UserDetails.vue&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  ],</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><p>The <code>component</code> (and <code>components</code>) option accepts a function that returns a Promise of a component and Vue Router <strong>will only fetch it when entering the page for the first time</strong>, then use the cached version. Which means you can also have more complex functions as long as they return a Promise:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> UserDetails</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">  Promise</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">resolve</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    /* component definition */</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  })</span></span></code></pre></div><p>In general, it&#39;s a good idea <strong>to always use dynamic imports</strong> for all your routes.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Do <strong>not</strong> use <a href="https://vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">Async components</a> for routes. Async components can still be used inside route components but route component themselves are just dynamic imports.</p></div><p>When using a bundler like webpack, this will automatically benefit from <a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noreferrer">code splitting</a></p><p>When using Babel, you will need to add the <a href="https://babeljs.io/docs/plugins/syntax-dynamic-import/" target="_blank" rel="noreferrer">syntax-dynamic-import</a> plugin so that Babel can properly parse the syntax.</p><h2 id="Grouping-Components-in-the-Same-Chunk" tabindex="-1">Grouping Components in the Same Chunk <a class="header-anchor" href="#Grouping-Components-in-the-Same-Chunk" aria-label="Permalink to &quot;Grouping Components in the Same Chunk&quot;">​</a></h2><h3 id="With-webpack" tabindex="-1">With webpack <a class="header-anchor" href="#With-webpack" aria-label="Permalink to &quot;With webpack&quot;">​</a></h3><p>Sometimes we may want to group all the components nested under the same route into the same async chunk. To achieve that we need to use <a href="https://webpack.js.org/guides/code-splitting/#dynamic-imports" target="_blank" rel="noreferrer">named chunks</a> by providing a chunk name using a special comment syntax (requires webpack &gt; 2.4):</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> UserDetails</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./UserDetails.vue&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> UserDashboard</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./UserDashboard.vue&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> UserProfileEdit</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> () </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">/* webpackChunkName: &quot;group-user&quot; */</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;./UserProfileEdit.vue&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span></code></pre></div><p>webpack will group any async module with the same chunk name into the same async chunk.</p><h3 id="With-Vite" tabindex="-1">With Vite <a class="header-anchor" href="#With-Vite" aria-label="Permalink to &quot;With Vite&quot;">​</a></h3><p>In Vite you can define the chunks under the <a href="https://vitejs.dev/config/#build-rollupoptions" target="_blank" rel="noreferrer"><code>rollupOptions</code></a>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> defineConfig</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  build</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    rollupOptions</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">      // https://rollupjs.org/guide/en/#outputmanualchunks</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">      output</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        manualChunks</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">          &#39;group-user&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: [</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">            &#39;./src/UserDetails&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">            &#39;./src/UserDashboard&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">            &#39;./src/UserProfileEdit&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">          ],</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">        },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div>`,17);function d(c,g,y,u,B,F){const i=n("VueSchoolLink");return p(),t("div",null,[r,e(i,{href:"https://vueschool.io/lessons/lazy-loading-routes-vue-cli-only",title:"Learn about lazy loading routes"}),o])}const E=a(k,[["render",d]]);export{A as __pageData,E as default};
