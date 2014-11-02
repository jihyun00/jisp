var expression = {
    number : /([0-9])\w+/,
    symbol : /''/,
    brace : /''/,
    whitespace : /\s/
};

exports.tokenizer = function(lisp) {
    var res = [];

    for(var i in lisp) {
        if(lisp[i].match(expression.whitespace)) {
            continue;
        }
        res.push(lisp[i]);
    }
    
    return res;
};

//define
/*
exports.define = function(list) {
    var res = list[1];

    return res;
};
*/
//calculation
exports.sum = function(list) {
    list[2] = Number(list[2]);
    list[3] = Number(list[3]);

    var res = list[2] + list[3];

    return res;
};

exports.sub = function(list) {
    var res = list[2] - list[3];

    return res;
};


exports.multiply = function(list) {
    var res = list[2] * list[3];

    return res; 
};

exports.divide = function(list) {
    var res = list[2] / list[3];

    return res;
};

exports.square = function(list) {
    var res = list[2] * list[2];

    return res;
};
