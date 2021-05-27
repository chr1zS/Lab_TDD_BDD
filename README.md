<p align="left">
  <img src="unir.png" style="zoom:10%;" width="80" title="UNIR">
</p>

# Laboratorio: Desarrollo Dirigido Por Pruebas (TDD o BDD)

## 1. Introducción

## 2. Código de Pruebas

A continuación adjuntamos los codigos usados en las pruebas

### 2.1 Suma

```javascript
const { test, expect } = require("@jest/globals");
const suma = require("../modules/suma");


test("La suma de 11 y 35 devuelve 46", () => {
    //arrange
    const a = 11;
    const b = 35;
    const esperado = 46;
    //act
    const resultado = suma(a,b);
    //assert
    expect(resultado).toBe(esperado);
    
})

test("La suma de -23 y 4 devuelve -19", () => {
    //arrange
    const a = -23;
    const b = 4;
    const esperado = -19;
    //act
    const resultado = suma(a,b);
    //assert
    expect(resultado).toBe(esperado);

})
```



### 2.2 Resta

```javascript
const { test, expect } = require("@jest/globals");
const resta = require("../modules/resta");



test("La resta de 29 y 8 devuelve 7", () => {
    //arrange
    const a = 29;
    const b = 8;
    const esperado = 21;
    //act
    const resultado = resta (a, b);
    //assert
    expect(resultado).toBe(esperado);

})

test("La resta de 32 y 60 devuelve -28", () => {
    //arrange
    const a = 32;
    const b = 60;
    const esperado = -28;
    //act
    const resultado = resta (a, b);
    //assert
    expect(resultado).toBe(esperado);

})
```



### 2.4 Multiplicación

```javascript
const { test, expect } = require("@jest/globals");
const multiplicacion = require("../modules/multiplicacion");



test("La multiplicación de 11 y 3 devuelve 33", () => {
    //arrange
    const a = 11;
    const b = 3;
    const esperado = 33;
    //act
    const resultado = multiplicacion(a, b);
    //assert
    expect(resultado).toBe(esperado);

})

test("La multiplicación de 1548 y 0 devuelve 0", () => {
    //arrange
    const a = 1548;
    const b = 0;
    const esperado = 0;
    //act
    const resultado = multiplicacion(a, b);
    //assert
    expect(resultado).toBe(esperado);

})
```



### 2.5 División

```javascript
const { test, expect } = require("@jest/globals");
const { ERROR } = require("jest-validate/build/utils");
const division = require("../modules/division");



test("La división de 125 y 5 devuelve 25", () => {
    //arrange
    const a = 125;
    const b = 5;
    const esperado = 25;
    //act
    const resultado = division(a, b);
    //assert
    expect(resultado).toBe(esperado);

})

test("La división de 24 y 5 devuelve 5", () => {
    //arrange
    const a = 24;
    const b = 5;
    const esperado = 4.8;
    //act
    const resultado = division(a, b);
    //assert
    expect(resultado).toBe(esperado);

})

test("La división de 120 y 0 devuelve ERROR", () => {
    //arrange
    const a = 120;
    const b = 0;
    const esperado = ERROR;
    //act
    const resultado = division(a, b);
    //assert
    expect(resultado).toBe(esperado);

})
```



### 2.5 Raíz Cuadrada

```javascript
const { test, expect } = require("@jest/globals");
const { ERROR } = require("jest-validate/build/utils");
const raiz_cuad = require("../modules/raiz");
const resta = require("../modules/resta");



test("La raíz de 49 devuelve 7", () => {
    //arrange
    const a = 49;
    const esperado = 7;
    //act
    const resultado = raiz_cuad(a);
    //assert
    const tolerancia = 0.001;
    const error_cometido = resta (resultado, esperado);
    expect(resultado).toBeCloseTo(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

})

test("La raíz de -85 devuelve ERROR", () => {
    //arrange
    const a = -85;
    const esperado = ERROR;
    //act
    const resultado = raiz_cuad(a);
    //assert
    if (esperado != ERROR){
        const tolerancia = 0.001;
        const error_cometido = resta (resultado, esperado);
        expect(error_cometido).toBeLessThan(tolerancia);
    }
    expect(resultado).toBe(esperado);
})

test("La raíz de 24 devuelve 4.898979485", () => {
    //arrange
    const a = 24;
    const esperado = 4.898979485;
    //act
    const resultado = raiz_cuad(a);
    //assert
    const tolerancia = 0.001;
    const error_cometido = resta (resultado, esperado);
    expect(resultado).toBeCloseTo(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

})

test("La raíz de 0 devuelve 0", () => {
    //arrange
    const a = 0;
    const esperado = 0;
    //act
    const resultado = raiz_cuad(a);
    //assert
    const tolerancia = 0.001;
    const error_cometido = resta (resultado, esperado);
    expect(resultado).toBeCloseTo(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

})
```



### 2.6 Rsultados Test

#### 2.6.1 Primera Ejecución

Implementado solo el módulo suma:

```javascript
$ npm run test

> lab_tdd_bdd@1.0.0 test
> jest

 FAIL  test/resta.test.js
  ● La resta de 29 y 8 devuelve 7

    ReferenceError: Cannot access 'resultado' before initialization

      11 |     const resultado =
      12 |     //assert
    > 13 |     expect(resultado).toBe(esperado);
         |            ^
      14 |
      15 | })
      16 |

      at Object.<anonymous> (test/resta.test.js:13:12)

  ● La resta de 32 y 60 devuelve -28

    ReferenceError: Cannot access 'resultado' before initialization

      23 |     const resultado =
      24 |     //assert
    > 25 |     expect(resultado).toBe(esperado);
         |            ^
      26 |
      27 | })
      28 |

      at Object.<anonymous> (test/resta.test.js:25:12)

 FAIL  test/division.test.js
  ● La división de 125 y 5 devuelve 25

    ReferenceError: Cannot access 'resultado' before initialization

      12 |     const resultado =
      13 |     //assert
    > 14 |     expect(resultado).toBe(esperado);
         |            ^
      15 |
      16 | })
      17 |

      at Object.<anonymous> (test/division.test.js:14:12)
      ● La división de 24 y 5 devuelve 5

    ReferenceError: Cannot access 'resultado' before initialization

      24 |     const resultado =
      25 |     //assert
    > 26 |     expect(resultado).toBe(esperado);
         |            ^
      27 |
      28 | })
      29 |

      at Object.<anonymous> (test/division.test.js:26:12)

  ● La división de 120 y 0 devuelve 5

    ReferenceError: Cannot access 'resultado' before initialization

      36 |     const resultado =
      37 |     //assert
    > 38 |     expect(resultado).toBe(esperado);
         |            ^
      39 |
      40 | })
      41 |

      at Object.<anonymous> (test/division.test.js:38:12)

 FAIL  test/multiplicacion.test.js
  ● La multiplicación de 11 y 3 devuelve 33

    ReferenceError: Cannot access 'resultado' before initialization

      11 |     const resultado =
      12 |     //assert
    > 13 |     expect(resultado).toBe(esperado);
         |            ^
      14 |
      15 | })
      16 |

      at Object.<anonymous> (test/multiplicacion.test.js:13:12)

  ● La multiplicación de 1548 y 0 devuelve 0

    ReferenceError: Cannot access 'resultado' before initialization

      23 |     const resultado =
      24 |     //assert
    > 25 |     expect(resultado).toBe(esperado);
       |            ^
      26 |
      27 | })
      28 |

      at Object.<anonymous> (test/multiplicacion.test.js:25:12)

 PASS  test/suma.test.js
 FAIL  test/raiz.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:
    
    SyntaxError: /Users/Chris/Documents/Lab_TDD_BDD/test/raiz.test.js: 'Const declarations' require an initialization value. (33:19)

      31 |     const esperado = 4.898979485;
      32 |     //act
    > 33 |     const resultado
         |                    ^
      34 |     //assert
      35 |     expect(resultado).toBe(esperado);
      36 |

      at Parser._raise (node_modules/@babel/parser/src/parser/error.js:134:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/error.js:129:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/error.js:78:17)
      at Parser.parseVar (node_modules/@babel/parser/src/parser/statement.js:1103:18)
      at Parser.parseVarStatement (node_modules/@babel/parser/src/parser/statement.js:784:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:286:21)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:226:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:958:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:934:10)
      at Parser.parseBlock (node_modules/@babel/parser/src/parser/statement.js:904:10)

Test Suites: 4 failed, 1 passed, 5 total
Tests:       7 failed, 2 passed, 9 total
Snapshots:   0 total
Time:        1.84 s, estimated 3 s
Ran all test suites.
```





#### 2.6.2 Segunda Ejecución

Todos los métodos implementados pero con fallos en los tests de multiplicación y la raíz cuadrada:



```javascript
$ npm run test

> lab_tdd_bdd@1.0.0 test
> jest

 FAIL  test/multiplicacion.test.js
  ● La multiplicación de 11 y 3 devuelve 33

    ReferenceError: Cannot access 'resultado' before initialization

      11 |     const resultado =
      12 |     //assert
    > 13 |     expect(resultado).toBe(esperado);
         |            ^
      14 |
      15 | })
      16 |

      at Object.<anonymous> (test/multiplicacion.test.js:13:12)

  ● La multiplicación de 1548 y 0 devuelve 0

    ReferenceError: Cannot access 'resultado' before initialization

      23 |     const resultado =
      24 |     //assert
    > 25 |     expect(resultado).toBe(esperado);
         |            ^
      26 |
      27 | })
      28 |

      at Object.<anonymous> (test/multiplicacion.test.js:25:12)

 PASS  test/resta.test.js
 PASS  test/division.test.js
 PASS  test/suma.test.js
 FAIL  test/raiz.test.js
  ● Test suite failed to run

    ReferenceError: est is not defined

      27 | })
      28 |
    > 29 | est("La raíz de 24 devuelve 4.898979485", () => {
         | ^
      30 |     //arrange
      31 |     const a = 24;
      32 |     const esperado = 4.898979485;

      at Object.<anonymous> (test/raiz.test.js:29:1)

Test Suites: 2 failed, 3 passed, 5 total
Tests:       2 failed, 7 passed, 9 total
Snapshots:   0 total
Time:        1.749 s, estimated 2 s
Ran all test suites.
```









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



