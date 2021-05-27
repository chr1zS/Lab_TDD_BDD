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

