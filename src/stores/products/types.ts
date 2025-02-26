export interface IProduct {
    categoryId: number
    createdAt: string
    description: string
    discont_price: IType
    id: number
    image: string
    price: number
    title: string
    updatedAt: string
}

export type IType = number | null