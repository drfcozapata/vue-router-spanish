import{_ as a,D as n,c as t,I as h,j as s,a as l,a3 as e,o as k}from"./chunks/framework.BBx4Jw7q.js";const C=JSON.parse('{"title":"路由元信息","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/advanced/meta.md","filePath":"zh/guide/advanced/meta.md"}'),p={name:"zh/guide/advanced/meta.md"},r=s("h1",{id:"路由元信息",tabindex:"-1"},[l("路由元信息 "),s("a",{class:"header-anchor",href:"#路由元信息","aria-label":'Permalink to "路由元信息"'},"​")],-1),d=e(`<p>有时，你可能希望将任意信息附加到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的<code>meta</code>属性来实现，并且它可以在路由地址和导航守卫上都被访问到。定义路由的时候你可以这样配置 <code>meta</code> 字段：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/posts&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">PostsLayout</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    children</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;new&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">PostsNew</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">        // 只有经过身份验证的用户才能创建帖子</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        meta</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">requiresAuth</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;:id&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">PostsDetail</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">        // 任何人都可以阅读文章</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">        meta</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">requiresAuth</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    ]</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><p>那么如何访问这个 <code>meta</code> 字段呢？</p><p>首先，我们称呼 <code>routes</code> 配置中的每个路由对象为 <strong>路由记录</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，它可能匹配多个路由记录。</p><p>例如，根据上面的路由配置，<code>/posts/new</code> 这个 URL 将会匹配父路由记录 (<code>path: &#39;/posts&#39;</code>) 以及子路由记录 (<code>path: &#39;new&#39;</code>)。</p><p>一个路由匹配到的所有路由记录会暴露为 <code>route</code> 对象(还有在导航守卫中的路由对象)的<code>route.matched</code> 数组。我们需要遍历这个数组来检查路由记录中的 <code>meta</code> 字段，但是 Vue Router 还为你提供了一个 <code>route.meta</code> 方法，它是一个非递归合并<strong>所有 <code>meta</code></strong> 字段（从父字段到子字段）的方法。这意味着你可以简单地写</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">beforeEach</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">((</span><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">from</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // 而不是去检查每条路由记录</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // to.matched.some(record =&gt; record.meta.requiresAuth)</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">meta</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">requiresAuth</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">auth</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">isLoggedIn</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">()) {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // 此路由需要授权，请检查是否已登录</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // 如果没有，则重定向到登录页面</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">      path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/login&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">      // 保存我们所在的位置，以便以后再来</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">      query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">redirect</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">fullPath</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span></code></pre></div><h2 id="TypeScript" tabindex="-1">TypeScript <a class="header-anchor" href="#TypeScript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h2><p>也可以继承来自 <code>vue-router</code> 中的 <code>RouteMeta</code> 来为 meta 字段添加类型：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// 这段可以直接添加到你的任何 \`.ts\` 文件中，例如 \`router.ts\`</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// 也可以添加到一个 \`.d.ts\` 文件中。确保这个文件包含在</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// 项目的 \`tsconfig.json\` 中的 &quot;file&quot; 字段内。</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// 为了确保这个文件被当作一个模块，添加至少一个 \`export\` 声明</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> module</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  interface</span><span style="--shiki-dark:#E5C07B;--shiki-light:#6F42C1;"> RouteMeta</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // 是可选的</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;">    isAdmin</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">?</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // 每个路由都必须声明</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;">    requiresAuth</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span></code></pre></div>`,10);function o(B,c,g,y,E,A){const i=n("VueSchoolLink");return k(),t("div",null,[r,h(i,{href:"https://vueschool.io/lessons/route-meta-fields",title:"Learn how to use route meta fields"}),d])}const u=a(p,[["render",o]]);export{C as __pageData,u as default};
