import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    initialState: [],
    name: 'products',
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload
            state.push(newProduct)
        },
        deleteProduct: (state, action) => {
            const idToDelete = action.payload
            const newProduct = state.products.filter((product) => product.id !== idToDelete)
            state.products = newProduct
        },
        setProducts: (state, action) => {
            state = action.payload
        }
    }
})

export const { addProduct, updateProduct, deleteProduct, setProducts } = productSlice.actions

export default productSlice.reducer