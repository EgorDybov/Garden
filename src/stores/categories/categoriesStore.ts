import { action, computed, makeObservable, observable } from "mobx";
import { CATEGORIES_ALL_URL, CATEGORIES_URL } from "../apiPoint";

import { ICategory } from "./types";

class CategoriesStore {
    @observable categories: ICategory[] = []
    @observable selectedCategory: ICategory | null = null

    // @computed get getSalesProducts () {
    //     return []
    // }

    constructor() {
        makeObservable(this)
    }

    @action setCategories(value: ICategory[]) {
        this.categories = value
    }

    @action setSelectedCategory(value: ICategory | null) {
        this.selectedCategory = value
    }

    GetAllCategories = async () => {
        const responce = await fetch(CATEGORIES_ALL_URL);
        if(responce.ok && responce.status === 200) {
            const data = await responce.json()
            this.setCategories(data)
            console.log(data);
        }
    }

    
    GetCategory = async (categoryId: string | undefined ) => {
        if(categoryId) {
            const responce = await fetch(CATEGORIES_URL + '/' + categoryId)
            if(responce.ok && responce.status === 200) {
                const data = await responce.json()
                this.setSelectedCategory(data.category)
                return data.data
            }
        }
        return []
    }

}

export const categoriesStore = new CategoriesStore()

