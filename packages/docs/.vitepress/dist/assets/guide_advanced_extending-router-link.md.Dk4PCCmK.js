import{_ as a,D as n,c as t,I as h,j as s,a as k,a3 as l,o as p}from"./chunks/framework.BBx4Jw7q.js";const C=JSON.parse('{"title":"Extending RouterLink","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/extending-router-link.md","filePath":"guide/advanced/extending-router-link.md"}'),e={name:"guide/advanced/extending-router-link.md"},r=s("h1",{id:"Extending-RouterLink",tabindex:"-1"},[k("Extending RouterLink "),s("a",{class:"header-anchor",href:"#Extending-RouterLink","aria-label":'Permalink to "Extending RouterLink"'},"​")],-1),B=l(`<p>The RouterLink component exposes enough <code>props</code> to suffice most basic applications but it doesn&#39;t try to cover every possible use case and you will likely find yourself using <code>v-slot</code> for some advanced cases. In most medium to large sized applications, it&#39;s worth creating one if not multiple custom RouterLink components to reuse them across your application. Some examples are Links in a Navigation Menu, handling external links, adding an <code>inactive-class</code>, etc.</p><p>Let&#39;s extend RouterLink to handle external links as well and adding a custom <code>inactive-class</code> in an <code>AppLink.vue</code> file:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rLbFl" id="tab-he7xOwe" checked><label for="tab-he7xOwe">Composition API</label><input type="radio" name="group-rLbFl" id="tab-1y0thCK"><label for="tab-1y0thCK">Options API</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">defineOptions</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  inheritAttrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> props</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> defineProps</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">  ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> isExternalLink</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(() </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">  return</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> typeof</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> ===</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;string&#39;</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;"> props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">startsWith</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;http&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">})</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> v-if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isExternalLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$attrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> target</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;_blank&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">slot</span><span style="--shiki-dark:#FFFFFF;--shiki-light:#B31D28;--shiki-dark-font-style:inherit;--shiki-light-font-style:italic;"> /</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    v-else</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    custom</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">navigate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">      v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$attrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      @</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">click</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">navigate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">class</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isActive</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> ?</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> activeClass</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> :</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">slot</span><span style="--shiki-dark:#FFFFFF;--shiki-light:#B31D28;--shiki-dark-font-style:inherit;--shiki-light-font-style:italic;"> /</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;AppLink&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  inheritAttrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">    ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  computed</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">    isExternalLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">() {</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> typeof</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> this</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> ===</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;string&#39;</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;"> this</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">startsWith</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;http&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">script</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> v-if</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isExternalLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$attrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">to</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;"> target</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;_blank&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">slot</span><span style="--shiki-dark:#FFFFFF;--shiki-light:#B31D28;--shiki-dark-font-style:inherit;--shiki-light-font-style:italic;"> /</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    v-else</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    custom</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    v-slot</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">{ </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">navigate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">      v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$attrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      @</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">click</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">navigate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      :</span><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">class</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isActive</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> ?</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> activeClass</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> :</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;"> inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">      &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">slot</span><span style="--shiki-dark:#FFFFFF;--shiki-light:#B31D28;--shiki-dark-font-style:inherit;--shiki-light-font-style:italic;"> /</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">a</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">router-link</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div></div></div><p>If you prefer using a render function or create <code>computed</code> properties, you can use the <code>useLink</code> from the <a href="./composition-api.html">Composition API</a>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">from</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;"> &#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  name</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&#39;AppLink&#39;</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">  props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // add @ts-ignore if using TypeScript</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#D73A49;">    ...</span><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">RouterLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">    inactiveClass</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">String</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">  setup</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#E36209;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // \`props\` contains \`to\` and any other prop that can be passed to &lt;router-link&gt;</span></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    const</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">navigate</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">href</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">route</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">isActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#E5C07B;--shiki-light:#005CC5;">isExactActive</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> } </span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;"> useLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">props</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // profit!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#C678DD;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> { </span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">isExternalLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;"> }</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">}</span></span></code></pre></div><p>In practice, you might want to use your <code>AppLink</code> component for different parts of your application. e.g. using <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind CSS</a>, you could create a <code>NavLink.vue</code> component with all the classes:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">AppLink</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    v-bind</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#E06C75;--shiki-light:#24292E;">$attrs</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    class</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    active-class</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;border-indigo-500 text-gray-900 focus:border-indigo-700&quot;</span></span>
<span class="line"><span style="--shiki-dark:#D19A66;--shiki-light:#6F42C1;">    inactive-class</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">=</span><span style="--shiki-dark:#98C379;--shiki-light:#032F62;">&quot;text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">    &lt;</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">slot</span><span style="--shiki-dark:#FFFFFF;--shiki-light:#B31D28;--shiki-dark-font-style:inherit;--shiki-light-font-style:italic;"> /</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">  &lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">AppLink</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&lt;/</span><span style="--shiki-dark:#E06C75;--shiki-light:#22863A;">template</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">&gt;</span></span></code></pre></div>`,7);function d(g,y,o,E,F,A){const i=n("VueSchoolLink");return p(),t("div",null,[r,h(i,{href:"https://vueschool.io/lessons/extending-router-link-for-external-urls",title:"Learn how to extend router-link"}),B])}const u=a(e,[["render",d]]);export{C as __pageData,u as default};
