var init = require('./init.js');

exports['init'] = function(test){
    test.deepEqual(init.tokenizer('(+ 2 3)'), ['(', '+', '22', '3', ')']);
    test.done();
};
/*
exports['define'] = function(test) {
    test.equal(init.define(['(', 'define', 'a', '5', ')']), 5);
    test.done();
};
*/
exports['sum'] = function(test) {
    test.equal(init.sum(['(', '+', '2', '3', ')']), 5);
    test.done();
};

exports['sub'] = function(test) {
    test.equal(init.sub(['(', '-', '2', '3', ')']), -1);
    test.done();
};

exports['multiply'] = function(test) {
    test.equal(init.multiply(['(', '*', '2', '3', ')']), 6);
    test.done();
};

exports['divide'] = function(test) {
    test.equal(init.divide(['(', '/', '6', '3', ')']), 2);
    test.done();
};

exports['square'] = function(test) {
    test.equal(init.square(['(', 'square', '2', '2', ')']), 4);
    test.done();
};
