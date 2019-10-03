import {DataRow} from '../../dataProcessing/data'

export const SET_PRODUCTS = 'SET_PRODUCTS'

interface SetProducts{
    type: typeof SET_PRODUCTS,
    products: DataRow[]
}

export type ProductsType = SetProducts


export function setProducts( products: DataRow[]): SetProducts{
    return {
        type: SET_PRODUCTS,
        products: products
    }
};