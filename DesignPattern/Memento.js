class Originator {
    constructor(state) {
        this.state = state;
        console.log(`Originator: My initial state is: ${state}`);
    }

    doSomething() {
        console.log('Originator: I\'m doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    generateRandomString(length = 10) {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    save() {
        return new ConcreteMemento(this.state);
    }

    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }
}

class Memento {
    getState() {
        throw new Error("This method must be overwritten!");
    }

    getName() {
        throw new Error("This method must be overwritten!");
    }

    getDate() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteMemento extends Memento {
    constructor(state) {
        super();
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    getState() {
        return this.state;
    }

    getName() {
        return `${this.date} / (${this.state.substr(0, 9)}...)`;
    }

    getDate() {
        return this.date;
    }
}

class Caretaker {
    constructor(originator) {
        this.mementos = [];
        this.originator = originator;
    }

    backup() {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }

    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    showHistory() {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Super-duper-super-puper-super.');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log('');
caretaker.showHistory();

console.log('\nClient: Now, let\'s rollback!\n');
caretaker.undo();

console.log('\nClient: Once more!\n');
caretaker.undo();