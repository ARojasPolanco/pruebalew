import { v4 as UUID } from 'uuid'
import { addProduct } from '../store/slice/product.slice'
import { useDispatch } from 'react-redux';

const ProductsForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const newProduct = {
            id: UUID(),
            description: {
                title: form.name.value,
                description: form.description.value,
                price: form.price.value
            }
        }
        dispatch(addProduct(newProduct))

        form.reset()
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    id='name'
                    placeholder='Nombre del producto'
                    autoComplete='off'
                    required
                    type="text" />
                <input
                    id='description'
                    placeholder='Descripción'
                    autoComplete='off'
                    required
                    type="text" />
                <input
                    id='price'
                    placeholder='Precio'
                    autoComplete='off'
                    required
                    type="number" />
                <button>
                    Agregar producto
                </button>
            </form>
        </section>
    )
}

export default ProductsForm