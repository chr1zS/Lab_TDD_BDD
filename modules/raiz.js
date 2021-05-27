const { ERROR } = require("jest-validate/build/utils");
const division = require("./division");
const multiplicacion = require("./multiplicacion");
const suma = require("./suma");

const raiz = (a) => {
    if ( a > 0){
        var r = a;
        var t = 0;

        while ( t != r){
            t = r;
            r = multiplicacion(division(1, 2), suma(division(a, r), r));
        }
        return r;
    }
    else if (a == 0){
        return 0;
    }
    else{
        return ERROR;
    }
}

module.exports = raiz;