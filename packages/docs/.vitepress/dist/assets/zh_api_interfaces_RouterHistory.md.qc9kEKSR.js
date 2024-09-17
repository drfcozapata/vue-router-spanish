import{_ as t,c as e,o as a,a3 as o}from"./chunks/framework.BBx4Jw7q.js";const g=JSON.parse('{"title":"接口：RouterHistory","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"zh/api/interfaces/RouterHistory.md","filePath":"zh/api/interfaces/RouterHistory.md"}'),s={name:"zh/api/interfaces/RouterHistory.md"},r=o(`<p><a href="./../">API 参考</a> / RouterHistory</p><h1 id="接口-RouterHistory" tabindex="-1">接口：RouterHistory <a class="header-anchor" href="#接口-RouterHistory" aria-label="Permalink to &quot;接口：RouterHistory&quot;">​</a></h1><p>由 History 实现的接口，可以作为 Router.history 传递给路由器。</p><h2 id="Properties" tabindex="-1">属性 <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;属性 %{#Properties}%&quot;">​</a></h2><h3 id="Properties-base" tabindex="-1">base <a class="header-anchor" href="#Properties-base" aria-label="Permalink to &quot;base %{#Properties-base}%&quot;">​</a></h3><p>• <code>只读</code> <strong>base</strong>: <code>string</code></p><p>基准路径，它被预置到每个 URL 上。这允许在一个域名子文件夹中托管 SPA，例如将 <code>base</code> 设置为 <code>/sub-folder</code> 使得其托管在 <code>example.com/sub-folder</code>。</p><hr><h3 id="Properties-location" tabindex="-1">location <a class="header-anchor" href="#Properties-location" aria-label="Permalink to &quot;location %{#Properties-location}%&quot;">​</a></h3><p>• <code>只读</code> <strong>location</strong>: <code>string</code></p><p>当前历史的地址</p><hr><h3 id="Properties-state" tabindex="-1">state <a class="header-anchor" href="#Properties-state" aria-label="Permalink to &quot;state %{#Properties-state}%&quot;">​</a></h3><p>• <code>只读</code> <strong>state</strong>: <a href="./HistoryState.html"><code>HistoryState</code></a></p><p>当前历史的状态</p><h2 id="Methods" tabindex="-1">Methods <a class="header-anchor" href="#Methods" aria-label="Permalink to &quot;Methods %{#Methods}%&quot;">​</a></h2><h3 id="Methods-createHref" tabindex="-1">createHref <a class="header-anchor" href="#Methods-createHref" aria-label="Permalink to &quot;createHref %{#Methods-createHref}%&quot;">​</a></h3><p>▸ <strong>createHref</strong>(<code>location</code>): <code>string</code></p><p>生成用于链接标签的相应的 href。</p><h4 id="Methods-createHref-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-createHref-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-createHref-Parameters}%&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>location</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">应该创建一个 href 的历史的地址</td></tr></tbody></table><h4 id="Methods-createHref-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-createHref-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-createHref-Returns}%&quot;">​</a></h4><p><code>string</code></p><hr><h3 id="Methods-destroy" tabindex="-1">destroy <a class="header-anchor" href="#Methods-destroy" aria-label="Permalink to &quot;destroy %{#Methods-destroy}%&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>清除任何通过该历史实现附加的事件监听器。</p><h4 id="Methods-destroy-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-destroy-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-destroy-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-go" tabindex="-1">go <a class="header-anchor" href="#Methods-go" aria-label="Permalink to &quot;go %{#Methods-go}%&quot;">​</a></h3><p>▸ <strong>go</strong>(<code>delta</code>, <code>triggerListeners?</code>): <code>void</code></p><p>按指定方向访问历史。</p><h4 id="Methods-go-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-go-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-go-Parameters}%&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>delta</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">访问的距离。如果 delta &lt; 0 则后退相应数量的记录，如果 &gt; 0 则前进。</td></tr><tr><td style="text-align:left;"><code>triggerListeners?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">是否应该触发连接到该历史的监听器</td></tr></tbody></table><h4 id="Methods-go-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-go-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-go-Returns}%&quot;">​</a></h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes one-dark-pro github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">myHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#56B6C2;--shiki-light:#D73A49;">-</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// equivalent to window.history.back()</span></span>
<span class="line"><span style="--shiki-dark:#E5C07B;--shiki-light:#24292E;">myHistory</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#61AFEF;--shiki-light:#6F42C1;">go</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#D19A66;--shiki-light:#005CC5;">1</span><span style="--shiki-dark:#ABB2BF;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#7F848E;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">// equivalent to window.history.forward()</span></span></code></pre></div><hr><h3 id="Methods-listen" tabindex="-1">listen <a class="header-anchor" href="#Methods-listen" aria-label="Permalink to &quot;listen %{#Methods-listen}%&quot;">​</a></h3><p>▸ <strong>listen</strong>(<code>callback</code>): () =&gt; <code>void</code></p><p>给历史实现附加一个监听器，当导航从外部被触发时 (像浏览器的前进后退按钮) 或者向 RouterHistory.back 和 RouterHistory.forward 传递 <code>true</code> 时，监听器就会被触发。</p><h4 id="Methods-listen-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-listen-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-listen-Parameters}%&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>NavigationCallback</code></td><td style="text-align:left;">附加的监听器</td></tr></tbody></table><h4 id="Methods-listen-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-listen-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-listen-Returns}%&quot;">​</a></h4><p><code>fn</code></p><p>用来移除该监听器的回调函数。</p><p>▸ (): <code>void</code></p><p>给历史实现附加一个监听器，当导航从外部被触发时 (像浏览器的前进后退按钮) 或者向 RouterHistory.back 和 RouterHistory.forward 传递 <code>true</code> 时，监听器就会被触发。</p><h5 id="Methods-listen-Returns-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-listen-Returns-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-listen-Returns-Returns}%&quot;">​</a></h5><p><code>void</code></p><p>用来移除该监听器的回调函数。</p><hr><h3 id="Methods-push" tabindex="-1">push <a class="header-anchor" href="#Methods-push" aria-label="Permalink to &quot;push %{#Methods-push}%&quot;">​</a></h3><p>▸ <strong>push</strong>(<code>to</code>, <code>data?</code>): <code>void</code></p><p>导航到一个地址。在 HTML5 历史实现下，这将调用 <code>history.pushState</code> 来有效改变 URL。</p><h4 id="Methods-push-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-push-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-push-Parameters}%&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">location to push</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><a href="./HistoryState.html"><code>HistoryState</code></a></td><td style="text-align:left;">可选的 <a href="./HistoryState.html">HistoryState</a> 以关联该导航记录</td></tr></tbody></table><h4 id="Methods-push-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-push-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-push-Returns}%&quot;">​</a></h4><p><code>void</code></p><hr><h3 id="Methods-replace" tabindex="-1">replace <a class="header-anchor" href="#Methods-replace" aria-label="Permalink to &quot;replace %{#Methods-replace}%&quot;">​</a></h3><p>▸ <strong>replace</strong>(<code>to</code>, <code>data?</code>): <code>void</code></p><p>和 <a href="./RouterHistory.html#push">RouterHistory.push</a> 相同，只是执行了 <code>history.replaceState</code> 以换掉 <code>history.pushState</code>。</p><h4 id="Methods-replace-Parameters" tabindex="-1">参数 <a class="header-anchor" href="#Methods-replace-Parameters" aria-label="Permalink to &quot;参数 %{#Methods-replace-Parameters}%&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">要设置的地址</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><a href="./HistoryState.html"><code>HistoryState</code></a></td><td style="text-align:left;">可选的 <a href="./HistoryState.html">HistoryState</a> 以关联该导航记录</td></tr></tbody></table><h4 id="Methods-replace-Returns" tabindex="-1">返回值 <a class="header-anchor" href="#Methods-replace-Returns" aria-label="Permalink to &quot;返回值 %{#Methods-replace-Returns}%&quot;">​</a></h4><p><code>void</code></p>`,69),d=[r];function i(l,h,n,c,p,u){return a(),e("div",null,d)}const f=t(s,[["render",i]]);export{g as __pageData,f as default};
