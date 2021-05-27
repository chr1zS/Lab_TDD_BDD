const { ERROR } = require("jest-validate/build/utils");

const division = (a, b) => {
    if ( b != 0){
        return a / b;
    }
    else{
        return ERROR;
    }
}

module.exports = division;