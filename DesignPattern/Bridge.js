class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        const res = this.implementation.operationImplementation();
        return `Abstraction: Base opeartion with: \n${res}`;
    }
}

class ExtendedAbstraction extends Abstraction {
    operation() {
        const res = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended opeartion with: \n${res}`;
    }
}

class Implementation {
    operationImplementation() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteImplementationA extends Implementation {
    operationImplementation() {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}

class ConcreteImplementationB extends Implementation {
    operationImplementation() {
        return 'ConcreteImplementationB: Here\'s the result on the platform B.';
    }
}

function clientCode(abstraction) {
    console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);