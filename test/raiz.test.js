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
    expect(resultado).toBe(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

})

test("La raíz de -85 devuelve 0", () => {
    //arrange
    const a = 85;
    const esperado = ERROR;
    //act
    const resultado = raiz_cuad(a);
    //assert
    const tolerancia = 0.001;
    const error_cometido = resta (resultado, esperado);
    expect(resultado).toBe(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

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
    expect(resultado).toBe(esperado);
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
    expect(resultado).toBe(esperado);
    expect(error_cometido).toBeLessThan(tolerancia);

})

