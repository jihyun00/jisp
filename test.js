var init = require('./init.js');

exports['init'] = function(test){
    test.equal(init.tokenizer('()'), ['(', ')']);
    test.done();
};

