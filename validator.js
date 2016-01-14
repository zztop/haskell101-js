/* jshint node: true */
/* jshint esnext: true */
'use strict';
var tail = function(xs) {
    var tail = [];
    xs.forEach((x, i) => {
        if (i > 0) {
            tail.push(x);
        }
    });
    return tail;
};
var reverser = function(xs) {

    console.log(xs);
    if (xs.length === 0) {
        return [];
    }
    const head = xs[0];

    return reverser(tail(xs)).concat(head);
};

var reducer = function(xs) {
    return xs.reduce((prev, curr) => {
        return prev + parseInt(Array.isArray(curr) ? reducer(curr) : curr);
    }, 0);
};

var doubleXer = function(xs, currIndex) {
    if (xs.length === 0) {
        return [];
    }
    const head = xs[0];

    return doubleXer(tail(xs), currIndex + 1).concat(((x0) => {
        if (currIndex % 2 > 0 && currIndex > 0) {
            let x02 = parseInt(x0) * 2;
            return x02 - 10 >= 0 ? [...x02.toString()] : x02;
        }
        return x0;
    })(head));


};

var validate = function(numToValidate) {
    let num = [...numToValidate.toString()];
    if (num.length !== 16) {
        return new Error("invalidnumber");
    }
    let finalSum = reducer(doubleXer(reverser(num), 0));

    //console.log(validationList);
    console.log(finalSum);

    return finalSum % 10 === 0;
};

exports.validate = validate;
