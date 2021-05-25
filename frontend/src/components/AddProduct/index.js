import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../actions/productActions'
import Form from '../Form'
import './_addProduct.scss'

function AddProduct({ setShow, show }) {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [product, setProduct] = useState({ user: userInfo._id })
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('data', product)
        dispatch(createProduct(product))
        setShow(false)
        window.location.reload()
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className='addProduct'>
                <div className='sec'>
                    <label>שם</label>
                    <input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} name={product.name} placeholder='שם הספר' />
                </div>
                <div className='sec'>
                    <label>מחיר</label>
                    <input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} name={product.price} placeholder='מחיר' />
                </div>
                <div className='sec'>
                    <label>קטגוריה</label>
                    <input value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} name={product.category} placeholder='קטגוריה' />
                </div>
                <div className='sec'>
                    <label>תמונה</label>
                    <input value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} name={product.image} placeholder='תמונה' />
                </div>
                <div className='sec'>
                    <label>יוצר</label>
                    <input value={product.ahutor} onChange={(e) => setProduct({ ...product, ahutor: e.target.value })} name={product.ahutor} placeholder='יוצר' />
                </div>
                <div className='sec'>
                    <label>מוציא לאור</label>
                    <input value={product.publisher} onChange={(e) => setProduct({ ...product, publisher: e.target.value })} name={product.publisher} placeholder='מוציא לאור' />
                </div>
                <div className='sec'>
                    <label>כמות במלאי</label>
                    <input type='number' value={product.countInStock} onChange={(e) => setProduct({ ...product, countInStock: e.target.value })} name={product.countInStock} placeholder='כמות במלאי' />
                </div>
                <div className='sec'>
                    <label>תיאור</label>
                    <textarea rows='4' cols='50' onChange={(e) => setProduct({ ...product, description: e.target.value })} name={product.description} placeholder='תיאור' >
                        {product.description}
                    </textarea>
                </div>
            </div>

        </Form>
    )
}

export default AddProduct
