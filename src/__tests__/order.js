import { Cart } from '../components/Cart.js'
import { Order } from '../components/Order.js'
import { request } from '../util/request.js'

import products from '../samples/products.json';

jest.mock('../util/request');

const mockedRequest = jest.mocked(request);

describe('order module', () => {
    test('can send', () => {
        const cart = new Cart;
        cart.add(products);

        const order = new Order;
        const email = 'test@example.com';
        order.addUser({
            email
        })
        order.addCart(cart);

        order.send();
        const [firstCall] = mockedRequest.mock.calls;
        const [args] = firstCall;
        const {url, body} = args;

        expect(url).toBe('http://localhost/order');
        const json = JSON.parse(body);

        expect(json.items).toEqual(products);
    });
});