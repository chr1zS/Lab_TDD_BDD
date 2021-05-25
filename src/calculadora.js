const suma = (a,b) => {
	return a+b;
}

//Prueba de la función suma
const prueba_suma = () => {
	//Probar que 2 +5 devuelve 7
	//arrange
	const a = 2;
	const b = 5;
	const esperado = 7;
	//act
	const resultado = suma(a,b);
	//assert
	console.assert(resultado===esperado, "fallo en la función suma");
}

prueba_suma()