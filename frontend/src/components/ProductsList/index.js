import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_productsList.scss'
import Product from '../Product'
import { listProducts } from '../../actions/productActions'
import Message from '../Message'
import Button from '../Button'
import Modal from '../Modal'
import AddProduct from '../AddProduct'

function ProductsList() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const { products, loading, error } = useSelector(state => state.productList)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // console.log('products', products)

    return (
        <>
            { loading ? <h2>Loading</h2> : error ? <Message>{error}</Message> :
                <div className='content'>
                    <h2>כל הספרים באתר</h2>
                    <div className='productsList'>
                        {products.map(product => (
                            <Product
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                ahutor={product.ahutor}
                                onSale={product.onSale}
                                product={product}
                            />
                        ))}
                        {userInfo?.isAdmin ? <Button onClick={() => setShow(!show)}> + הוספת מוצר</Button> : ''}
                        <Modal setShow={setShow} show={show} title='הוספת מוצר'>
                            <AddProduct setShow={setShow} show={show} />
                        </Modal>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductsList
