import { action, makeObservable, observable } from "mobx"
import { IProduct } from "stores/products/types"

interface IFromAndTo {
    from: number
     to: number
}

class FilterStore {
    @observable filterProducts: IProduct[] = []
    @observable fromAndTo:  IFromAndTo = {
        from: 0, 
        to: 100000
    }

    constructor() {
        makeObservable(this)
    }

    // для установки значения в filterProducts
    @action setFilterProducts(value: IProduct[]) {
        this.filterProducts = value
    }


    // для установки значения в fromAndTo
    @action setFromAndTo(value: IFromAndTo) {
        this.fromAndTo = value
    }



}

export const filterStore = new FilterStore()