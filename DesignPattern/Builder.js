class Builder {
    producePartA() {
        throw new Error("This method must be overwritten!");
    }
    producePartB() {
        throw new Error("This method must be overwritten!");
    }
    producePartC() {
        throw new Error("This method must be overwritten!");
    }
}

class ConcreteBuilder1 extends Builder {
    constructor() {
        super();
        this.reset();
    }
    reset() {
        this.product = new Product1();
    }

    producePartA() {
        this.product.parts.push('PartA1');
    }

    producePartB() {
        this.product.parts.push('PartB1');
    }

    producePartC() {
        this.product.parts.push('PartC1');
    }

    getProduct() {
        const res = this.product;
        this.reset();
        return res;
    }
}

class Product1 {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log('this product1 has ' + this.parts);
    }
}

class Director {
    constructor() {
        this.builder = new Builder();
    }

    setBuilder(builder) {
        this.builder = builder;
    }

    buildMinimalViableProduct() {
        this.builder.producePartA();``
    }

    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    builder.producePartA();
    builder.producePartB();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);