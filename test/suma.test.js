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

