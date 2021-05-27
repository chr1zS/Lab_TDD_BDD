<p align="left">
  <img src="unir.png" style="zoom:10%;" width="80" title="UNIR">
</p>

# Laboratorio: Desarrollo Dirigido Por Pruebas (TDD o BDD)

## 1. Introducción

## 2. Código de Pruebas

A continuación adjuntamos los codigos usados en las pruebas

### 2.1 Suma

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">test</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">expect</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;@jest/globals&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">suma</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/suma&quot;</span><span style="color: #f8f8f2">);</span>


<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La suma de 11 y 35 devuelve 46&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">11</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">35</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">46</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">suma</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    
<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La suma de -23 y 4 devuelve -19&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">23</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">4</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">19</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">suma</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>
</pre></div>



### 2.2 Resta

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">test</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">expect</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;@jest/globals&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">suma</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/suma&quot;</span><span style="color: #f8f8f2">);</span>


<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La suma de 11 y 35 devuelve 46&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">11</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">35</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">46</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">suma</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    
<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La suma de -23 y 4 devuelve -19&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">23</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">4</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">19</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">suma</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>
</pre></div>



### 2.3 Multiplicación

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">test</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">expect</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;@jest/globals&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">multiplicacion</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/multiplicacion&quot;</span><span style="color: #f8f8f2">);</span>



<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La multiplicación de 11 y 3 devuelve 33&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">11</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">33</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">multiplicacion</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La multiplicación de 1548 y 0 devuelve 0&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">1548</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">multiplicacion</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>
</pre></div>



### 2.4 División

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">test</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">expect</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;@jest/globals&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">ERROR</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;jest-validate/build/utils&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">division</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/division&quot;</span><span style="color: #f8f8f2">);</span>



<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La división de 125 y 5 devuelve 25&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">125</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">5</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">25</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">division</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La división de 24 y 5 devuelve 5&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">24</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">5</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">4.8</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">division</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La división de 120 y 0 devuelve ERROR&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">120</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">ERROR</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">division</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>
</pre></div>



### 2.5 Raíz Cuadrada

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">test</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">expect</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;@jest/globals&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #f8f8f2">{</span> <span style="color: #a6e22e">ERROR</span> <span style="color: #f8f8f2">}</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;jest-validate/build/utils&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">raiz_cuad</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/raiz&quot;</span><span style="color: #f8f8f2">);</span>
<span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resta</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">require</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;../modules/resta&quot;</span><span style="color: #f8f8f2">);</span>



<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La raíz de 49 devuelve 7&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">49</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">7</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">raiz_cuad</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">tolerancia</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0.001</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">error_cometido</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">resta</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeCloseTo</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">error_cometido</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeLessThan</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">tolerancia</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La raíz de -85 devuelve ERROR&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #f92672">-</span><span style="color: #ae81ff">85</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">ERROR</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">raiz_cuad</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span> <span style="color: #f92672">!=</span> <span style="color: #a6e22e">ERROR</span><span style="color: #f8f8f2">){</span>
        <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">tolerancia</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0.001</span><span style="color: #f8f8f2">;</span>
        <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">error_cometido</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">resta</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
        <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">error_cometido</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeLessThan</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">tolerancia</span><span style="color: #f8f8f2">);</span>
    <span style="color: #f8f8f2">}</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBe</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La raíz de 24 devuelve 4.898979485&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">24</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">4.898979485</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">raiz_cuad</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">tolerancia</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0.001</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">error_cometido</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">resta</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeCloseTo</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">error_cometido</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeLessThan</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">tolerancia</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>

<span style="color: #a6e22e">test</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&quot;La raíz de 0 devuelve 0&quot;</span><span style="color: #f8f8f2">,</span> <span style="color: #f8f8f2">()</span> <span style="color: #f92672">=&gt;</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #75715e">//arrange</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">esperado</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">;</span>
    <span style="color: #75715e">//act</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">resultado</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">raiz_cuad</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">//assert</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">tolerancia</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">0.001</span><span style="color: #f8f8f2">;</span>
    <span style="color: #66d9ef">const</span> <span style="color: #a6e22e">error_cometido</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">resta</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">resultado</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeCloseTo</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">esperado</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">expect</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">error_cometido</span><span style="color: #f8f8f2">).</span><span style="color: #a6e22e">toBeLessThan</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">tolerancia</span><span style="color: #f8f8f2">);</span>

<span style="color: #f8f8f2">})</span>
</pre></div>



### 2.6 Rsultados Test

#### 2.6.1 Primera Ejecución

Implementado solo el módulo suma:

<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">$</span> <span style="color: #d0d0d0">npm</span> <span style="color: #d0d0d0">run</span> <span style="color: #d0d0d0">test</span>

<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">lab_tdd_bdd</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #3677a9">1.0</span><span style="color: #d0d0d0">.</span><span style="color: #3677a9">0</span> <span style="color: #d0d0d0">test</span>
<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">jest</span>

 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/resta.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">resta</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">29</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">8</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">7</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">12</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">14</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">15</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">16</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/resta.test.js:</span><span style="color: #3677a9">13</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">resta</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">32</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">60</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #d0d0d0">-</span><span style="color: #3677a9">28</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">23</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">25</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">26</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">27</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">28</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/resta.test.js:</span><span style="color: #3677a9">25</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/division.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">divisi</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">125</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">25</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">12</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">14</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">15</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">16</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">17</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/division.test.js:</span><span style="color: #3677a9">14</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>
      <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">divisi</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">5</span>
    
    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">25</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">26</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">27</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">28</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">29</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/division.test.js:</span><span style="color: #3677a9">26</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">divisi</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">120</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">5</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">36</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">37</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">38</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">39</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">40</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">41</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/division.test.js:</span><span style="color: #3677a9">38</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/multiplicacion.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">multiplicaci</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">3</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">33</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">12</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">14</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">15</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">16</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/multiplicacion.test.js:</span><span style="color: #3677a9">13</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">multiplicaci</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">1548</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">0</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">23</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">25</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
       <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">26</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">27</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">28</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/multiplicacion.test.js:</span><span style="color: #3677a9">25</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/suma.test.js</span>
 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/raiz.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">suite</span> <span style="color: #d0d0d0">failed</span> <span style="color: #d0d0d0">to</span> <span style="color: #d0d0d0">run</span>

    <span style="color: #d0d0d0">Jest</span> <span style="color: #d0d0d0">encountered</span> <span style="color: #d0d0d0">an</span> <span style="color: #d0d0d0">unexpected</span> <span style="color: #d0d0d0">token</span>
    
    <span style="color: #d0d0d0">Jest</span> <span style="color: #d0d0d0">failed</span> <span style="color: #d0d0d0">to</span> <span style="color: #d0d0d0">parse</span> <span style="color: #d0d0d0">a</span> <span style="color: #d0d0d0">file.</span> <span style="color: #d0d0d0">This</span> <span style="color: #d0d0d0">happens</span> <span style="color: #d0d0d0">e.g.</span> <span style="color: #d0d0d0">when</span> <span style="color: #d0d0d0">your</span> <span style="color: #d0d0d0">code</span> <span style="color: #d0d0d0">or</span> <span style="color: #d0d0d0">its</span> <span style="color: #d0d0d0">dependencies</span> <span style="color: #d0d0d0">use</span> <span style="color: #d0d0d0">non-standard</span> <span style="color: #d0d0d0">JavaScript</span> <span style="color: #d0d0d0">syntax,</span> <span style="color: #d0d0d0">or</span> <span style="color: #d0d0d0">when</span> <span style="color: #d0d0d0">Jest</span> <span style="color: #d0d0d0">is</span> <span style="color: #d0d0d0">not</span> <span style="color: #d0d0d0">configured</span> <span style="color: #d0d0d0">to</span> <span style="color: #d0d0d0">support</span> <span style="color: #d0d0d0">such</span> <span style="color: #d0d0d0">syntax.</span>
    
    <span style="color: #d0d0d0">Out</span> <span style="color: #d0d0d0">of</span> <span style="color: #d0d0d0">the</span> <span style="color: #d0d0d0">box</span> <span style="color: #d0d0d0">Jest</span> <span style="color: #d0d0d0">supports</span> <span style="color: #d0d0d0">Babel,</span> <span style="color: #d0d0d0">which</span> <span style="color: #d0d0d0">will</span> <span style="color: #d0d0d0">be</span> <span style="color: #d0d0d0">used</span> <span style="color: #d0d0d0">to</span> <span style="color: #d0d0d0">transform</span> <span style="color: #d0d0d0">your</span> <span style="color: #d0d0d0">files</span> <span style="color: #d0d0d0">into</span> <span style="color: #d0d0d0">valid</span> <span style="color: #d0d0d0">JS</span> <span style="color: #d0d0d0">based</span> <span style="color: #d0d0d0">on</span> <span style="color: #d0d0d0">your</span> <span style="color: #d0d0d0">Babel</span> <span style="color: #d0d0d0">configuration.</span>
    
    <span style="color: #d0d0d0">By</span> <span style="color: #6ab825; font-weight: bold">default</span> <span style="color: #ed9d13">&quot;node_modules&quot;</span> <span style="color: #d0d0d0">folder</span> <span style="color: #d0d0d0">is</span> <span style="color: #d0d0d0">ignored</span> <span style="color: #d0d0d0">by</span> <span style="color: #d0d0d0">transformers.</span>
    
    <span style="color: #d0d0d0">Here</span><span style="color: #ed9d13">&#39;s what you can do:</span>
<span style="color: #ed9d13">     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.</span>
<span style="color: #ed9d13">     • To have some of your &quot;node_modules&quot; files transformed, you can specify a custom &quot;transformIgnorePatterns&quot; in your config.</span>
<span style="color: #ed9d13">     • If you need a custom transformation specify a &quot;transform&quot; option in your config.</span>
<span style="color: #ed9d13">     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the &quot;moduleNameMapper&quot; config option.</span>

<span style="color: #ed9d13">    You&#39;</span><span style="color: #d0d0d0">ll</span> <span style="color: #d0d0d0">find</span> <span style="color: #d0d0d0">more</span> <span style="color: #d0d0d0">details</span> <span style="color: #d0d0d0">and</span> <span style="color: #d0d0d0">examples</span> <span style="color: #d0d0d0">of</span> <span style="color: #d0d0d0">these</span> <span style="color: #d0d0d0">config</span> <span style="color: #d0d0d0">options</span> <span style="color: #6ab825; font-weight: bold">in</span> <span style="color: #d0d0d0">the</span> <span style="color: #d0d0d0">docs:</span>
    <span style="color: #d0d0d0">https:</span><span style="color: #999999; font-style: italic">//jestjs.io/docs/configuration</span>
    <span style="color: #d0d0d0">For</span> <span style="color: #d0d0d0">information</span> <span style="color: #d0d0d0">about</span> <span style="color: #d0d0d0">custom</span> <span style="color: #d0d0d0">transformations,</span> <span style="color: #d0d0d0">see:</span>
    <span style="color: #d0d0d0">https:</span><span style="color: #999999; font-style: italic">//jestjs.io/docs/code-transformation</span>

    <span style="color: #d0d0d0">Details:</span>
    
    <span style="color: #d0d0d0">SyntaxError:</span> <span style="color: #a61717; background-color: #e3d2d2">/Users/Chris/Documents/Lab_TDD_BDD/test/raiz.test.js: &#39;Const declarations&#39; require an initialization value. (33:19)</span>
    
      <span style="color: #3677a9">31</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">esperado</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">4.898979485</span><span style="color: #d0d0d0">;</span>
      <span style="color: #3677a9">32</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//act</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">33</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span>
         <span style="color: #d0d0d0">|</span>                    <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">34</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
      <span style="color: #3677a9">35</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
      <span style="color: #3677a9">36</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser._raise</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/error.js:</span><span style="color: #3677a9">134</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">45</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.raiseWithData</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/error.js:</span><span style="color: #3677a9">129</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">17</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.raise</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/error.js:</span><span style="color: #3677a9">78</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">17</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseVar</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">1103</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">18</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseVarStatement</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">784</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseStatementContent</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">286</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">21</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseStatement</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">226</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">17</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseBlockOrModuleBlockBody</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">958</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">25</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseBlockBody</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">934</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">)</span>
      <span style="color: #d0d0d0">at</span> <span style="color: #d0d0d0">Parser.parseBlock</span> <span style="color: #d0d0d0">(node_modules/</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #d0d0d0">babel/parser/src/parser/statement.js:</span><span style="color: #3677a9">904</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">10</span><span style="color: #d0d0d0">)</span>

<span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">Suites:</span> <span style="color: #3677a9">4</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Tests:</span>       <span style="color: #3677a9">7</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">9</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Snapshots:</span>   <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Time:</span>        <span style="color: #3677a9">1.84</span> <span style="color: #d0d0d0">s,</span> <span style="color: #d0d0d0">estimated</span> <span style="color: #3677a9">3</span> <span style="color: #d0d0d0">s</span>
<span style="color: #d0d0d0">Ran</span> <span style="color: #d0d0d0">all</span> <span style="color: #d0d0d0">test</span> <span style="color: #d0d0d0">suites.</span>
</pre></div>



#### 2.6.2 Segunda Ejecución

Todos los métodos implementados pero con fallos en los tests de multiplicación y la raíz cuadrada:

<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">$</span> <span style="color: #d0d0d0">npm</span> <span style="color: #d0d0d0">run</span> <span style="color: #d0d0d0">test</span>

<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">lab_tdd_bdd</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #3677a9">1.0</span><span style="color: #d0d0d0">.</span><span style="color: #3677a9">0</span> <span style="color: #d0d0d0">test</span>
<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">jest</span>

 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/multiplicacion.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">multiplicaci</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">3</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">33</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">12</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">14</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">15</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">16</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/multiplicacion.test.js:</span><span style="color: #3677a9">13</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">multiplicaci</span><span style="color: #a61717; background-color: #e3d2d2">ó</span><span style="color: #d0d0d0">n</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">1548</span> <span style="color: #d0d0d0">y</span> <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">0</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">Cannot</span> <span style="color: #d0d0d0">access</span> <span style="color: #ed9d13">&#39;resultado&#39;</span> <span style="color: #d0d0d0">before</span> <span style="color: #d0d0d0">initialization</span>
    
      <span style="color: #3677a9">23</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">resultado</span> <span style="color: #d0d0d0">=</span>
      <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//assert</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">25</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>            <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">26</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">27</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">28</span> <span style="color: #d0d0d0">|</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/multiplicacion.test.js:</span><span style="color: #3677a9">25</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">12</span><span style="color: #d0d0d0">)</span>

 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/resta.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/division.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/suma.test.js</span>
 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/raiz.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">suite</span> <span style="color: #d0d0d0">failed</span> <span style="color: #d0d0d0">to</span> <span style="color: #d0d0d0">run</span>

    <span style="color: #d0d0d0">ReferenceError:</span> <span style="color: #d0d0d0">est</span> <span style="color: #d0d0d0">is</span> <span style="color: #d0d0d0">not</span> <span style="color: #d0d0d0">defined</span>
    
      <span style="color: #3677a9">27</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
      <span style="color: #3677a9">28</span> <span style="color: #d0d0d0">|</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">29</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">est(</span><span style="color: #ed9d13">&quot;La raíz de 24 devuelve 4.898979485&quot;</span><span style="color: #d0d0d0">,</span> <span style="color: #d0d0d0">()</span> <span style="color: #d0d0d0">=&gt;</span> <span style="color: #d0d0d0">{</span>
         <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">30</span> <span style="color: #d0d0d0">|</span>     <span style="color: #999999; font-style: italic">//arrange</span>
      <span style="color: #3677a9">31</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">a</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">24</span><span style="color: #d0d0d0">;</span>
      <span style="color: #3677a9">32</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">esperado</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">4.898979485</span><span style="color: #d0d0d0">;</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/raiz.test.js:</span><span style="color: #3677a9">29</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>

<span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">Suites:</span> <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">3</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Tests:</span>       <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">7</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">9</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Snapshots:</span>   <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Time:</span>        <span style="color: #3677a9">1.749</span> <span style="color: #d0d0d0">s,</span> <span style="color: #d0d0d0">estimated</span> <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">s</span>
<span style="color: #d0d0d0">Ran</span> <span style="color: #d0d0d0">all</span> <span style="color: #d0d0d0">test</span> <span style="color: #d0d0d0">suites.</span>
</pre></div>



#### 2.6.3 Tercera Ejecución

Todos los métodos implementados pero con fallos en el test de la raíz cuadrada:

<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">$</span> <span style="color: #d0d0d0">npm</span> <span style="color: #d0d0d0">run</span> <span style="color: #d0d0d0">test</span>

<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">lab_tdd_bdd</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #3677a9">1.0</span><span style="color: #d0d0d0">.</span><span style="color: #3677a9">0</span> <span style="color: #d0d0d0">test</span>
<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">jest</span>

 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/division.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/resta.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/multiplicacion.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/suma.test.js</span>
 <span style="color: #d0d0d0">FAIL</span>  <span style="color: #d0d0d0">test/raiz.test.js</span>
  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">ra</span><span style="color: #a61717; background-color: #e3d2d2">í</span><span style="color: #d0d0d0">z</span> <span style="color: #d0d0d0">de</span> <span style="color: #d0d0d0">-</span><span style="color: #3677a9">85</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">0</span>

    <span style="color: #d0d0d0">expect(received).toBe(expected)</span> <span style="color: #999999; font-style: italic">// Object.is equality</span>
    
    <span style="color: #d0d0d0">Expected:</span> <span style="color: #ed9d13">&quot;● Validation Error&quot;</span>
    <span style="color: #d0d0d0">Received:</span> <span style="color: #3677a9">9.219544457292887</span>
    
      <span style="color: #3677a9">29</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">tolerancia</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0.001</span><span style="color: #d0d0d0">;</span>
      <span style="color: #3677a9">30</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">error_cometido</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">resta</span> <span style="color: #d0d0d0">(resultado,</span> <span style="color: #d0d0d0">esperado);</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">31</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>                       <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">32</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(error_cometido).toBeLessThan(tolerancia);</span>
      <span style="color: #3677a9">33</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">34</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/raiz.test.js:</span><span style="color: #3677a9">31</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">23</span><span style="color: #d0d0d0">)</span>

  <span style="color: #a61717; background-color: #e3d2d2">●</span> <span style="color: #d0d0d0">La</span> <span style="color: #d0d0d0">ra</span><span style="color: #a61717; background-color: #e3d2d2">í</span><span style="color: #d0d0d0">z</span> <span style="color: #d0d0d0">de</span> <span style="color: #3677a9">24</span> <span style="color: #d0d0d0">devuelve</span> <span style="color: #3677a9">4.898979485</span>

    <span style="color: #d0d0d0">expect(received).toBe(expected)</span> <span style="color: #999999; font-style: italic">// Object.is equality</span>
    
    <span style="color: #d0d0d0">Expected:</span> <span style="color: #3677a9">4.898979485</span>
    <span style="color: #d0d0d0">Received:</span> <span style="color: #3677a9">4.898979485566356</span>
    
      <span style="color: #3677a9">43</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">tolerancia</span> <span style="color: #d0d0d0">=</span> <span style="color: #3677a9">0.001</span><span style="color: #d0d0d0">;</span>
      <span style="color: #3677a9">44</span> <span style="color: #d0d0d0">|</span>     <span style="color: #6ab825; font-weight: bold">const</span> <span style="color: #d0d0d0">error_cometido</span> <span style="color: #d0d0d0">=</span> <span style="color: #d0d0d0">resta</span> <span style="color: #d0d0d0">(resultado,</span> <span style="color: #d0d0d0">esperado);</span>
    <span style="color: #d0d0d0">&gt;</span> <span style="color: #3677a9">45</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(resultado).toBe(esperado);</span>
         <span style="color: #d0d0d0">|</span>                       <span style="color: #d0d0d0">^</span>
      <span style="color: #3677a9">46</span> <span style="color: #d0d0d0">|</span>     <span style="color: #d0d0d0">expect(error_cometido).toBeLessThan(tolerancia);</span>
      <span style="color: #3677a9">47</span> <span style="color: #d0d0d0">|</span>
      <span style="color: #3677a9">48</span> <span style="color: #d0d0d0">|</span> <span style="color: #d0d0d0">})</span>
    
      <span style="color: #d0d0d0">at</span> <span style="color: #24909d">Object</span><span style="color: #d0d0d0">.&lt;anonymous&gt;</span> <span style="color: #d0d0d0">(test/raiz.test.js:</span><span style="color: #3677a9">45</span><span style="color: #d0d0d0">:</span><span style="color: #3677a9">23</span><span style="color: #d0d0d0">)</span>

<span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">Suites:</span> <span style="color: #3677a9">1</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">4</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Tests:</span>       <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">failed,</span> <span style="color: #3677a9">11</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Snapshots:</span>   <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Time:</span>        <span style="color: #3677a9">1.73</span> <span style="color: #d0d0d0">s,</span> <span style="color: #d0d0d0">estimated</span> <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">s</span>
<span style="color: #d0d0d0">Ran</span> <span style="color: #d0d0d0">all</span> <span style="color: #d0d0d0">test</span> <span style="color: #d0d0d0">suites.</span>
</pre></div>



#### 2.6.4 Cuarta Ejcución

Sin fallos en el test:

<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #d0d0d0">$</span> <span style="color: #d0d0d0">npm</span> <span style="color: #d0d0d0">run</span> <span style="color: #d0d0d0">test</span>

<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">lab_tdd_bdd</span><span style="color: #a61717; background-color: #e3d2d2">@</span><span style="color: #3677a9">1.0</span><span style="color: #d0d0d0">.</span><span style="color: #3677a9">0</span> <span style="color: #d0d0d0">test</span>
<span style="color: #d0d0d0">&gt;</span> <span style="color: #d0d0d0">jest</span>

 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/resta.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/multiplicacion.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/division.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/suma.test.js</span>
 <span style="color: #d0d0d0">PASS</span>  <span style="color: #d0d0d0">test/raiz.test.js</span>

<span style="color: #d0d0d0">Test</span> <span style="color: #d0d0d0">Suites:</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">5</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Tests:</span>       <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">passed,</span> <span style="color: #3677a9">13</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Snapshots:</span>   <span style="color: #3677a9">0</span> <span style="color: #d0d0d0">total</span>
<span style="color: #d0d0d0">Time:</span>        <span style="color: #3677a9">1.533</span> <span style="color: #d0d0d0">s,</span> <span style="color: #d0d0d0">estimated</span> <span style="color: #3677a9">2</span> <span style="color: #d0d0d0">s</span>
<span style="color: #d0d0d0">Ran</span> <span style="color: #d0d0d0">all</span> <span style="color: #d0d0d0">test</span> <span style="color: #d0d0d0">suites.</span>
</pre></div>



## 3. Código de la Aplicación



