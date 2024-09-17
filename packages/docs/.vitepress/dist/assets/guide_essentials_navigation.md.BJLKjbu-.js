import{_ as e,D as n,c as h,I as i,j as a,a as l,a3 as t,o as r}from"./chunks/framework.BBx4Jw7q.js";const m=JSON.parse('{"title":"Programmatic Navigation","description":"","frontmatter":{"sidebarDepth":0},"headers":[],"relativePath":"guide/essentials/navigation.md","filePath":"guide/essentials/navigation.md"}'),p={name:"guide/essentials/navigation.md"},k=a("h1",{id:"Programmatic-Navigation",tabindex:"-1"},[l("Programmatic Navigation "),a("a",{class:"header-anchor",href:"#Programmatic-Navigation","aria-label":'Permalink to "Programmatic Navigation"'},"​")],-1),o=t(`<p>Aside from using <code>&lt;router-link&gt;</code> to create anchor tags for declarative navigation, we can do this programmatically using the router&#39;s instance methods.</p><h2 id="Navigate-to-a-different-location" tabindex="-1">Navigate to a different location <a class="header-anchor" href="#Navigate-to-a-different-location" aria-label="Permalink to &quot;Navigate to a different location&quot;">​</a></h2><p><strong>Note: The examples below refer to the router instance as <code>router</code>. Inside a component, you can access the router using the <code>$router</code> property, e.g. <code>this.$router.push(...)</code>. If you&#39;re using the Composition API, the router is accessible by calling <a href="./../advanced/composition-api.html"><code>useRouter()</code></a>.</strong></p><p>To navigate to a different URL, use <code>router.push</code>. This method pushes a new entry into the history stack, so when the user clicks the browser back button they will be taken to the previous URL.</p><p>This is the method called internally when you click a <code>&lt;router-link&gt;</code>, so clicking <code>&lt;router-link :to=&quot;...&quot;&gt;</code> is the equivalent of calling <code>router.push(...)</code>.</p><table tabindex="0"><thead><tr><th>Declarative</th><th>Programmatic</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot;&gt;</code></td><td><code>router.push(...)</code></td></tr></tbody></table><p>The argument can be a string path, or a location descriptor object. Examples:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// literal string path</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/users/eduardo&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// object with path</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/users/eduardo&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// named route with params to let the router build the url</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;user&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;eduardo&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// with query, resulting in /register?plan=private</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/register&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">query</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">plan</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;private&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// with hash, resulting in /about#team</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/about&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">hash</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;#team&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span></code></pre></div><p><strong>Note</strong>: <code>params</code> are ignored if a <code>path</code> is provided, which is not the case for <code>query</code>, as shown in the example above. Instead, you need to provide the <code>name</code> of the route or manually specify the whole <code>path</code> with any parameter:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> username</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;eduardo&#39;</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// we can manually build the url but we will have to handle the encoding ourselves</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">\`/user/</span><span style="--shiki-dark:#C678DD;--shiki-light:#032F62;">\${</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#C678DD;--shiki-light:#032F62;">}</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">\`</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// -&gt; /user/eduardo</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// same as</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">\`/user/</span><span style="--shiki-dark:#C678DD;--shiki-light:#032F62;">\${</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#C678DD;--shiki-light:#032F62;">}</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">\`</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// -&gt; /user/eduardo</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// if possible use \`name\` and \`params\` to benefit from automatic URL encoding</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;user&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } }) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// -&gt; /user/eduardo</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// \`params\` cannot be used alongside \`path\`</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/user&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">params</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">username</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } }) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// -&gt; /user</span></span></code></pre></div><p>When specifying <code>params</code>, make sure to either provide a <code>string</code> or <code>number</code> (or an array of these for <a href="./route-matching-syntax.html#Repeatable-params">repeatable params</a>). <strong>Any other type (like objects, booleans, etc) will be automatically stringified</strong>. For <a href="./route-matching-syntax.html#Optional-parameters">optional params</a>, you can provide an empty string (<code>&quot;&quot;</code>) or <code>null</code> as the value to remove it.</p><p>Since the prop <code>to</code> accepts the same kind of object as <code>router.push</code>, the exact same rules apply to both of them.</p><p><code>router.push</code> and all the other navigation methods return a <em>Promise</em> that allows us to wait till the navigation is finished and to know if it succeeded or failed. We will talk more about that in <a href="./../advanced/navigation-failures.html">Navigation Handling</a>.</p><h2 id="Replace-current-location" tabindex="-1">Replace current location <a class="header-anchor" href="#Replace-current-location" aria-label="Permalink to &quot;Replace current location&quot;">​</a></h2><p>It acts like <code>router.push</code>, the only difference is that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry.</p><table tabindex="0"><thead><tr><th>Declarative</th><th>Programmatic</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot; replace&gt;</code></td><td><code>router.replace(...)</code></td></tr></tbody></table><p>It&#39;s also possible to directly add a property <code>replace: true</code> to the <code>to</code> argument that is passed to <code>router.push</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">push</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/home&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">replace</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// equivalent to</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">replace</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">path</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;/home&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> })</span></span></code></pre></div><h2 id="Traverse-history" tabindex="-1">Traverse history <a class="header-anchor" href="#Traverse-history" aria-label="Permalink to &quot;Traverse history&quot;">​</a></h2>`,19),d=t(`<p>This method takes a single integer as parameter that indicates by how many steps to go forward or go backward in the history stack, similar to <code>window.history.go(n)</code>.</p><p>Examples</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// go forward by one record, the same as router.forward()</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// go back by one record, the same as router.back()</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">-</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// go forward by 3 records</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">3</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// fails silently if there aren&#39;t that many records</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">-</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">100</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">router</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">100</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span></code></pre></div><h2 id="History-Manipulation" tabindex="-1">History Manipulation <a class="header-anchor" href="#History-Manipulation" aria-label="Permalink to &quot;History Manipulation&quot;">​</a></h2><p>You may have noticed that <code>router.push</code>, <code>router.replace</code> and <code>router.go</code> are counterparts of <a href="https://developer.mozilla.org/en-US/docs/Web/API/History" target="_blank" rel="noreferrer"><code>window.history.pushState</code>, <code>window.history.replaceState</code> and <code>window.history.go</code></a>, and they do imitate the <code>window.history</code> APIs.</p><p>Therefore, if you are already familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" rel="noreferrer">Browser History APIs</a>, manipulating history will feel familiar when using Vue Router.</p><p>It is worth mentioning that Vue Router navigation methods (<code>push</code>, <code>replace</code>, <code>go</code>) work consistently no matter the <code>history</code> option passed when creating the router instance.</p>`,7);function c(g,y,B,u,E,F){const s=n("VueSchoolLink");return r(),h("div",null,[k,i(s,{href:"https://vueschool.io/lessons/vue-router-4-programmatic-navigation",title:"Learn how to navigate programmatically"}),o,i(s,{href:"https://vueschool.io/lessons/go-back",title:"Learn how to use Vue Router to go back"}),d])}const C=e(p,[["render",c]]);export{m as __pageData,C as default};
