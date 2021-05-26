const { test, expect } = require("@jest/globals");



test("La división de 125 y 5 devuelve 25", () => {
    //arrange
    const a = 125;
    const b = 5;
    const esperado = 25;
    //act
    const resultado =
    //assert
    expect(resultado).toBe(esperado);

})

test("La división de 24 y  devuelve 5", () => {
    //arrange
    const a = 24;
    const b = 5;
    const esperado = 4.8;
    //act
    const resultado = 
    //assert
    expect(resultado).toBe(esperado);

})

