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

