<p align="left">
  <img src="unir.png" style="zoom:10%;" width="80" title="UNIR">
</p>

# Laboratorio: Desarrollo Dirigido Por Pruebas (TDD o BDD)

## 1. Introducción

## 2. Código de Pruebas

A continuación adjuntamos los codigos usados en las pruebas

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">const</span> { test, expect } <span style="color: #333333">=</span> require(<span style="background-color: #fff0f0">&quot;@jest/globals&quot;</span>);
<span style="color: #008800; font-weight: bold">const</span> suma <span style="color: #333333">=</span> require(<span style="background-color: #fff0f0">&quot;../modules/suma&quot;</span>);


test(<span style="background-color: #fff0f0">&quot;La suma de 11 y 35 devuelve 46&quot;</span>, () <span style="color: #333333">=&gt;</span> {
    <span style="color: #888888">//arrange</span>
    <span style="color: #008800; font-weight: bold">const</span> a <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">11</span>;
    <span style="color: #008800; font-weight: bold">const</span> b <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">35</span>;
    <span style="color: #008800; font-weight: bold">const</span> esperado <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">46</span>;
    <span style="color: #888888">//act</span>
    <span style="color: #008800; font-weight: bold">const</span> resultado <span style="color: #333333">=</span> suma(a,b);
    <span style="color: #888888">//assert</span>
    expect(resultado).toBe(esperado);
    
})

test(<span style="background-color: #fff0f0">&quot;La suma de -23 y 4 devuelve -19&quot;</span>, () <span style="color: #333333">=&gt;</span> {
    <span style="color: #888888">//arrange</span>
    <span style="color: #008800; font-weight: bold">const</span> a <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">23</span>;
    <span style="color: #008800; font-weight: bold">const</span> b <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">4</span>;
    <span style="color: #008800; font-weight: bold">const</span> esperado <span style="color: #333333">=</span> <span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">19</span>;
    <span style="color: #888888">//act</span>
    <span style="color: #008800; font-weight: bold">const</span> resultado <span style="color: #333333">=</span> suma(a,b);
    <span style="color: #888888">//assert</span>
    expect(resultado).toBe(esperado);

})
</pre></div>







## 3. Código de la Aplicación



