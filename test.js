var init = require('./init.js');

exports['init'] = function(test){
    test.deepEqual(init.tokenizer('(+ 2 3)'), ['(', '+', '2', '3', ')']);
    test.done();
};

