class Component {
    accept(visitor) {}
}

class ConcreteComponentA extends Component {
    constructor() {
        super();
    }
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }
    exclusiveMethodOfConcreteComponentA() {
        return 'A';
    }
}

class ConcreteComponentB extends Component {
    constructor() {
        super();
    }
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }

    specialMethodOfConcreteComponentB() {
        return 'B';
    }
}

class Visitor {
    visitConcreteComponentA(element) {}

    visitConcreteComponentB(element) {}
}


class ConcreteVisitor1 extends Visitor {
    constructor() {
        super();
    }
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
    }

    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
    }
}

class ConcreteVisitor2 extends Visitor {
    constructor() {
        super();
    }
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
    }

    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
    }
}

function clientCode(components, visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];

console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log('');

console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);