import { Cart } from '../components/Cart.js'
import products from '../samples/products.json';

describe('cart module', () => {
    let cart;
    beforeEach(() => {
        cart = new Cart();
    });
    test('can add product', () => {
        cart.add(products.slice(0, 1));

        expect(cart.length).toBe(1);
    });

    test('can add multiple products', () => {
        cart.add(products);

        expect(cart.length).toBe(2);
    });
    
    test('can remove specific products', () => {
        cart.add(products);

        expect(cart.length).toBe(2);

        cart.remove([
            products[0].id
        ]);

        expect(cart.length).toBe(1);
    });

    test('can be cleared', () => {
        cart.add(products);

        expect(cart.length).toBe(2);

        cart.clear();

        expect(cart.length).toBe(0);
    });

    test('can calculate total sum', () => {
        cart.add(products);

        expect(cart.length).toBe(2);
        expect(cart.sum).toBe(10300);
    });
});