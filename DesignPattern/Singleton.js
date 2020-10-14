class Singleton {
    static getInstance() {
        if (this['single']) {
            return this.single;
        }
        return this['single'] = new this();
    }

    constructor() {
        const sourceClass = this.constructor;
        if(!sourceClass['single']) {
            sourceClass['single'] = this;
        }
        return sourceClass['single'];
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();