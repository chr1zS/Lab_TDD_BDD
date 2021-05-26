const { test } = require("@jest/globals");
const suma = require("../modules/calculadora");


test("La suma de 2 y 5 devuelve 7", () => {
    //arrange
    const a = 2;
    const b = 5;
    const esperado = 7;
    //act
    const resultado = suma(a,b);
    //assert
    expect(resultado).toBe(esperado);

})