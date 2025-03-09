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
        this.products = [...this.products, product]
    }


}

export const cartStore = new CartStore()