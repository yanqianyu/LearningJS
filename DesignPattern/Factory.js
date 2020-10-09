class Creator {
    factoryMethod() {
        throw new Error("This method must be overwritten!");
    }
    someOperation() {
        const product = this.factoryMethod();
        return product.operation();
    }
}

class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}

class Product {
    operation() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteProduct1 extends Product {
    operation() {
        return "this is a product 1";
    }
}

class ConcreteProduct2 extends Product {
    operation() {
        return "this is a product 2";
    }
}

console.log(new ConcreteCreator1().someOperation());
console.log(new ConcreteCreator2().someOperation());