import { action, makeObservable, observable } from "mobx"
import { ICartProduct } from "./types"


class CartStore {

    @observable products: ICartProduct[] = []
    @observable totalAmount: number = 0
    @observable totalPrice: number = 0

    constructor() {
        makeObservable(this)
    }

    @action setProducts = (product: ICartProduct) => {
        const selectedProduct = this.products.find((p) => p.id === product.id)
        selectedProduct ?  selectedProduct.count += 1  : this.products = [...this.products, product]
    }

    @action addProduct = (id: number) => {
       
    }

    @action removeProduct = (id: number) => {
        const selectedProduct = this.products.find((product) => product.id === id)
        if(selectedProduct && selectedProduct.count > 1) {
            selectedProduct.count -= 1
        } else {
            this.products = this.products.filter(product => product.id !== id);
        }
    };

    @action deleteProduct = (id: number) => {
        this.products = this.products.filter((product) => product.id !== id)
    }

}

export const cartStore = new CartStore()