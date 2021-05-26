const { test } = require("@jest/globals");
const suma = require("../modules/suma");


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

test("La suma de -2 y 4 devuelve 2", () => {
    //arrange
    const a = -2;
    const b = 4;
    const esperado = 2;
    //act
    const resultado = suma(a,b);
    //assert
    expect(resultado).toBe(esperado);

})

