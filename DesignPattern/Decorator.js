class Component {
    operation() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteComponent extends Component {
    constructor() {
        super();
    }
    operation() {
        return 'ConcreteComponent';
    }
}

class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor(component) {
        super(component);
    }
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super(component);
    }
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

function clientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
