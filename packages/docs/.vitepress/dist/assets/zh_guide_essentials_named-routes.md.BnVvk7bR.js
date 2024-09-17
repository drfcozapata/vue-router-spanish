import{_ as a,D as e,c as t,I as n,j as s,a as h,a3 as l,o as p}from"./chunks/framework.BBx4Jw7q.js";const F=JSON.parse('{"title":"命名路由","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/essentials/named-routes.md","filePath":"zh/guide/essentials/named-routes.md"}'),k={name:"zh/guide/essentials/named-routes.md"},r=s("h1",{id:"命名路由",tabindex:"-1"},[h("命名路由 "),s("a",{class:"header-anchor",href:"#命名路由","aria-label":'Permalink to "命名路由"'},"​")],-1),d=l(`<p>当创建一个路由时，我们可以选择给路由一个 <code>name</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light has-highlighted vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> routes</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/user/:username&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line highlighted"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;profile&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    component</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">User</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">]</span></span></code></pre></div><p>然后我们可以使用 <code>name</code> 而不是 <code>path</code> 来传递 <code>to</code> 属性给 <code>&lt;router-link&gt;</code>：</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;profile&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;erina&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  User profile</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><p>上述示例将创建一个指向 <code>/user/erina</code> 的链接。</p><ul><li><a href="https://play.vuejs.org/#eNqtVVtP2zAU/itWNqlFauNNIB6iUMEQEps0NjH2tOzBtKY1JLZlO6VTlP++4+PcelnFwyRofe7fubaKCiZk/GyjJBKFVsaRiswNZ45faU1q8mRUQUbrko8yuaPwlRfK/LkV1sHXpGHeq9JxMzScGmT19t5xkMaUaR1vOb9VBe+kntgWXz2Cs06O1LbCTwvRW7knGnEm50paRwIYcrEFd1xlkpBVyCQ5lN74ZOJV0Nom5JcnCFRCM7dKyIiOJkSygsNzBZiBmivAI7l0SUipRvuhCfPge7uWHBiGZPctS0iLJv7T2/YutFFPIt+JjgUJPn7DZ32CtWg7PIZ/4BASg7txKE6gC1VKNx69gw6NTqJJ1HQK5iR1vNA52M+8Yrr6OLuD+AuCtbQpBQYK9Oy6NAZAhLI1KKuKvEc69jSp65Tqw/oh3V7f00P9MsdveOWiecE75DDNhXwhiVMXWVRttYbUWdRpE2xOZ0sHxq1v2jl/a5jQyZ042Mv/HKjvt2aGFTCXFWmnAsTcCMkAxw4SHIjG9E2AUtpUusWyFvyVUGCltBsFmJB2W/dHZCHWswdYLwJ/XiulnrNr323zcQeodthDuAHTgmm4aEqCH1zsrBHYLIISheyyqD9Nnp1FK+e0TSgtpX5ZxrBBtNe4PItP4w8Q07oBN+a2mD4a9erPzDN4bzY1iy5BiS742imV2ynT4l8h9hQvz+Pz+COU/pGCdyrkgm/Qt3ddw/5Cms7CLXsSy50k/dJDT8037QTcuq1kWZ6r1y/Ic6bkHdD5is9fDvCf7SZA/m44ZLfmg+QcM0vugvjmxx3fwLsTFmpRwlwdE95zq/LSYwxqn0q5ANgDPUT7GXsm5PLB3mwcl7ZNygPFaqA+NvL6SOo93NP4bFDF9sfh+LThtgxvkF80fyxxy/Ac7U9i/RcYNWrd" target="_blank" rel="noreferrer">在演练场上查看</a>。</li></ul><p>使用 <code>name</code> 有很多优点：</p><ul><li>没有硬编码的 URL。</li><li><code>params</code> 的自动编码/解码。</li><li>防止你在 URL 中出现打字错误。</li><li>绕过路径排序，例如展示一个匹配相同路径但排序较低的路由。</li></ul><p>所有路由的命名<strong>都必须是唯一的</strong>。如果为多条路由添加相同的命名，路由器只会保留最后那一条。你可以在<a href="./../advanced/dynamic-routing.html#Removing-routes">动态路由</a>章节了解更多。</p><p>Vue Router 有很多其他部分可以传入网址，例如 <code>router.push()</code> 和 <code>router.replace()</code> 方法。我们将在<a href="./navigation.html">编程式导航</a>指南中详细介绍这些方法。就像 <code>to</code> 属性一样，这些方法也支持通过 <code>name</code> 传入网址：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;user&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;erina&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } })</span></span></code></pre></div>`,11);function o(B,c,g,y,u,E){const i=e("VueSchoolLink");return p(),t("div",null,[r,n(i,{href:"https://vueschool.io/lessons/named-routes",title:"Learn about the named routes"}),d])}const A=a(k,[["render",o]]);export{F as __pageData,A as default};
