import { action, computed, makeObservable, observable } from "mobx"
import { ICartProduct } from "./types"


class CartStore {

    private quantity = 100

    @observable products: ICartProduct[] = []
    @observable totalAmount: number = 0


    @computed get getTotalPrice() {
        return this.products.reduce((acc, item) => {
            const sum = item.price * item.count
            return acc += sum
        }, 0)
    }

    @computed get getTotalAmount() {
        return this.products.reduce((acc, item) => {
            return acc += item.count
        }, 0)
    }

    constructor() {
        makeObservable(this)
    }

    // @action setProducts = (product: ICartProduct) => {
    //     const selectedProduct = this.products.find((p) => p.id === product.id)
    //     selectedProduct ?  selectedProduct.count += 1  : this.products = [...this.products, product]
    // }
    
    @action setProducts = (products: ICartProduct[]) => {
        this.products = products
    }

    addProductToCart(product: ICartProduct) {
        const selectedProduct = this.products.find((p) => p.id === product.id)
        if(selectedProduct) {
            const temp = {...selectedProduct, count: selectedProduct.count+=1}
            const updateArray = this.products.filter((product) => product.id !== selectedProduct.id)
            this.setProducts([...updateArray, temp])
        } else {
            this.setProducts([...this.products, product])
        }
    }

    


    decrementProduct = (id: number) => {
        const selectedProduct = this.products.find((product) => product.id === id)
        if(selectedProduct && selectedProduct.count > 1) {
            selectedProduct.count -= 1
        } 
    };

    incrementProduct = (id: number) => {
        const selectedProduct = this.products.find((product) => product.id === id)
        if(selectedProduct && selectedProduct.count < this.quantity) {
            selectedProduct.count += 1
        } 
    };

    @action deleteProduct = (id: number) => {
        this.products = this.products.filter((product) => product.id !== id)
    }

}

export const cartStore = new CartStore()