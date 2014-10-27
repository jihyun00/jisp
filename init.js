//devide lisp
function init(lisp) {
    var re = /./g;
    var list = lisp.split(re);

    //정규식 (+ 2 3) 

    return ;
}

//define
function define(list) {
    var arguments[1] = arguments[2];

    return list[1];
}

//calculation
function sum(list) {
    var res = arguments[1] + arguments[2];

    return res;
}

function sub(list) {
    var res = arguments[1] - arguments[2];

    return res;
}

function multiply(list) {
    var res = arguments[1] * arguments[2];

    return res;
}

function divide(list) {
    var res = arguments[1] / arguments[2];

    return res;
}

function square(list) {
    var res = arguments[1] * arguments[1];

    return res;
}
