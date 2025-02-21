import { makeObservable, observable } from "mobx"
import { PRODUCTS_ALL_URL } from "../apiPoint"

class ProductsStore {
    @observable products: any[] = []

    constructor(){
        makeObservable(this)
    }

    GetAllProducts = async () => {
       const response = await fetch(PRODUCTS_ALL_URL)
       if(response.ok && response.status === 200){
        const data = await response.json()
        this.products = data
        console.log(this.products);
       }
    }
}

export const productsStore = new ProductsStore()



const obj = {
    products: []
}