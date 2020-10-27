class Component {
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(component) {
        throw new Error("This method must be overwritten!");
    }
    remove(component) {
        throw new Error("This method must be overwritten!");
    }
    isComposite() {
        return false;
    }
    operation() {
        throw new Error("This method must be overwritten!");
    }
}

class Leaf extends Component {
    operation() {
        return "Leaf";
    }
}

class Composite extends Component {
    constructor() {
        super();
        this.children = [];
    }
    add(component) {
        this.children.push(component);
        component.setParent(this);
    }
    remove(component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        const results = [];
        for(const child of this.children) {
            results.push(child.operation());
        }
        return `Branch(${results.join('+')})`;
    }
}

function clientCode(component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());

const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

function clientCode2(component1, component2) {
    if(component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);
}
console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);