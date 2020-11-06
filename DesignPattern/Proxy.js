class Subject {
    request() {
        throw new Error("This method must be overwritten!");
    }
}

class RealSubject extends Subject {
    constructor() {
        super();
    }
    request() {
        console.log('RealSubject: Handling request.');
    }
}

class Proxy extends Subject {
    constructor(realSubject) {
        super();
        this.realSubject = realSubject;
    }

    request() {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    checkAccess() {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    logAccess() {
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject) {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);