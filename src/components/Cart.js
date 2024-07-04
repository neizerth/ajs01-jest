export class Cart {
    #products = [];

    constructor(options) {
        
    }

    add(products) {
        this.#products.push(...products);
    }

    remove(ids) {
        this.#products = this.#products.filter(({ id }) => !ids.includes(id));
    }

    clear() {
        this.#products = [];
    }

    get sum() {
        return this.#products.reduce((sum, { price }) => sum + price, 0);
    }

    get length() { 
        return this.#products.length
    }
}