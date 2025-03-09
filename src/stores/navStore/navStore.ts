import { action, makeObservable, observable } from "mobx";

class NavStore {

    @observable activeLink = '/'

    constructor() {
        makeObservable(this)
    }

    @action setActiveLink(value: string) {
        this.activeLink = value
    }

    
}

export const navStore = new NavStore()