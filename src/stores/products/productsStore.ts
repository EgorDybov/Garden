import { action, makeObservable, observable, toJS } from "mobx"
import { PRODUCTS_ALL_URL } from "../apiPoint"
import { IProduct } from "./types"

class ProductsStore {
    @observable products: IProduct[] = []
    @observable selectedProductCard: any = {}

    constructor(){
        makeObservable(this)
    }

    @action setProducts(value: IProduct[]) {
        this.products = value
    }

    GetAllProducts = async () => {
       const response = await fetch(PRODUCTS_ALL_URL)
       if(response.ok && response.status === 200){
        const data = await response.json()
        this.setProducts(data)
        console.log(toJS(this.products));
       }
    }

    GetProductCard = async (dsgvdfg: string) => {
        //...
    }

}

export const productsStore = new ProductsStore()

