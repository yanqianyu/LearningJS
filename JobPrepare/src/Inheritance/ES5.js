(function () {
    function Parent(name) {
        this.name = name;
    }
    
    Parent.prototype.getName = function() {
        return this.name;
    }
    
    function Child() {
        this.age = 24;
    }
    
    Child.prototype = new Parent('Chen');
    
    
    var test = new Child();
    
    console.log(test.age);
    console.log(test.getName());
    console.log(Child.prototype.constructor === Parent.prototype.constructor);
})();


(function() {
    function Parent(value) {
        this.lang = "en";
        this.value = value;
    }

    function Child() {
        Parent.apply(this, arguments);
    }

    var child = new Child(666);

    console.log(child.lang);
    console.log(child.value);
})();