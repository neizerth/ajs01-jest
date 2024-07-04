import { request } from '../util/request';

const ORDER_URL = 'http://localhost/order';

export class Order {
    #cart;
    #user;

    addCart(cart) {
        this.#cart = cart; 
    }

    addUser(user) {
        this.#user = user;
    }

    send() {
        const { email } = this.#user;
        const data = {
            email,
            items: this.#cart.get()
        }

        request({
            url: ORDER_URL,
            method: 'POST',
            type: 'json',
            body: JSON.stringify(data)
        });
    }
}