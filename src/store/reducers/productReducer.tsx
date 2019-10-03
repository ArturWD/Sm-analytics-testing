import {
    setProducts,
    ProductsType,
    SET_PRODUCTS
} from '../actions/productsAction'
import {DataRow} from '../../dataProcessing/data'



const initialState: DataRow[] = []


export default function productReducer(state = initialState, action: ProductsType): DataRow[]{
    switch(action.type){
        case SET_PRODUCTS:
            return  action.products
        default:
            return state
    }
}