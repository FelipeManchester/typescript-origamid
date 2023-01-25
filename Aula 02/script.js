"use strict";
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    throw 'valor deve ser number ou string';
};
console.log(toNumber(20));
