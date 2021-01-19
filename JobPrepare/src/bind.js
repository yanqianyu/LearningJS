var foo = function() {
    // console.log(this.name);
    return this;
}

var A = {
    name: 'A'
};

var B = {
    name: 'B'
};

var C = {
    name: 'C'
};

var foo2 = foo.bind(A).bind(B).bind(C);
console.log(foo2());

var foo3 = foo.bind(B).bind(C);
console.log(foo3());