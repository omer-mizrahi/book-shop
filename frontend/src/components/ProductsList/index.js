import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_productsList.scss'
import Product from '../Product'
import { listProducts } from '../../actions/productActions'
import Message from '../Message'
import Button from '../Button'
import Modal from '../Modal'
import AddProduct from '../AddProduct'
import Search from '../Search'

function ProductsList() {
    const { products, loading, error } = useSelector(state => state.productList)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [searchState, setSearchState] = useState('')
    const [productList, setProductList] = useState([])

    useEffect(() => {
        setProductList(products)
    }, [products])

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const fetchProducts = (e) => {
        e.preventDefault()
        setSearchState(e.target.value)
        const newProductList = products.filter(product => product.name.includes(searchState))
        setProductList(newProductList)
    }

    return (
        <>
            { loading ? <h2>Loading</h2> : error ? <Message>{error}</Message> :
                <div className='content'>
                    <div className='tAndS'>
                        <h2>כל הספרים באתר</h2>
                        <Search className='searchProducts' onChange={fetchProducts} />
                    </div>
                    <div className='productsList'>
                        {productList.length < 1 ? <div>
                            <h2>לא מצאנו את הספר</h2>
                            <span>שווה לנסות להקליד אותו קצת אחרת
                            אולי בכל זאת הוא מתחבא באחד המדפים :)</span>
                        </div>
                            : productList.map(product => (
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
