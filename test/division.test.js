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

