import { action, makeObservable, observable, toJS } from "mobx"
import { PRODUCTS_ALL_URL, PRODUCTS_URL } from "../apiPoint"
import { IProduct } from "./types"

class ProductsStore {
    @observable products: IProduct[] = []
    @observable selectedProductCard: IProduct | null = null

    constructor(){
        makeObservable(this)
    }

    @action setProducts(value: IProduct[]) {
        this.products = value
    }

    @action setSelectedProductCard(value: IProduct | null) {
        this.selectedProductCard = value
    }

    GetAllProducts = async () => {
       const response = await fetch(PRODUCTS_ALL_URL)
       if(response.ok && response.status === 200){
        const data = await response.json()
        this.setProducts(data)
        return data
       }
       return []
    }

    GetProductCard = async (productId: string | undefined ) => {
       if(productId) {
        const responce = await fetch(PRODUCTS_URL + '/' + productId)
        if(responce.ok && responce.status === 200) {
            const data = await responce.json()
            this.setSelectedProductCard(data[0])
        }
       }
    }

}

export const productsStore = new ProductsStore()

