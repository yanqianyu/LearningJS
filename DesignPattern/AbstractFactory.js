class AbstractFactory {
    createProductA() {
        throw new Error("This method must be overwritten!");
    }
    createProductB() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteFactory1 extends AbstractFactory{
    createProductA() {
        return new ConcreteProductA1().usefulFunctionA();
    }
    createProductB() {
        return new ConcreteProductB1().usefulFunctionB();
    }
}

class ConcreteFactory2 extends AbstractFactory{
    createProductA() {
        return new ConcreteProductA2().usefulFunctionA();
    }
    createProductB() {
        return new ConcreteProductB2().usefulFunctionB();
    }
}

class ProductA {
    usefulFunctionA() {}
}

class ConcreteProductA1 extends ProductA {
    usefulFunctionA() {
        return "this is a product A1";
    }
}

class ConcreteProductA2 extends ProductA {
    usefulFunctionA() {
        return "this is a product A2";
    }
}

class ProductB {
    usefulFunctionB() {}
}

class ConcreteProductB1 extends ProductB {
    usefulFunctionB() {
        return "this is a product B1";
    }
}

class ConcreteProductB2 extends ProductB {
    usefulFunctionB() {
        return "this is a product B2";
    }
}

console.log(new ConcreteFactory1().createProductA());
console.log(new ConcreteFactory1().createProductB());

console.log(new ConcreteFactory2().createProductA());
console.log(new ConcreteFactory2().createProductB());