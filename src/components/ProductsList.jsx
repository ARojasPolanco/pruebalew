import { useSelector } from "react-redux"
import { setProducts } from '../store/slice/product.slice'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import ProductsCard from "./ProductsCard"

const ProductsList = () => {
    const products = useSelector((store) => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts)
            dispatch(setProducts(parsedProducts))
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products])
    console.log(products)


    return (
        <ul>
            {
                products.map((product) => <ProductsCard key={product.id} product={product} />)
            }
        </ul>
    )
}

export default ProductsList