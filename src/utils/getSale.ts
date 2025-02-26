import { IType } from "stores/products/types";

export  function getSale(discont: IType | undefined, price: number | undefined) {
    if(discont && price) {
        const count = discont && (discont * 100) / price - 100 
        return count.toFixed(0)
    }
    return null
}