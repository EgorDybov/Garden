import { IProduct } from "../../stores/products/types"

export interface ICartProduct extends Omit<IProduct, "categoryId" | "createdAt" | "updatedAt"> {
    count: number
}