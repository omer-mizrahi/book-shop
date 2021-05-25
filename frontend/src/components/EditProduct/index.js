import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, updateProductDetails } from '../../actions/productActions'
import Form from '../Form'
import { FaTrash } from 'react-icons/fa'
import './_editProduct.scss'
import Dilema from '../Dilema'


function EditProduct({ setShow, show, item = {} }) {
    const [product, setProduct] = useState(item)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProductDetails(product))
        setShow(false)
        window.location.reload()
    }

    const deletProductHandler = () => {
        dispatch(deleteProduct(product._id))
        window.location.reload()
    }

    // const inputs = ['name', 'price', 'category', 'description'].map(key =>
    //     <div key={key}>
    //         <label>{key}</label>
    //         <input name={key} placeholder={key} defaultValue={product[key]} required />
    //     </div>
    // )

    return (
        <Form onSubmit={submitHandler}>
            <div className='editProduct'>
                <div className='trash' >
                    <Dilema
                        icon={<FaTrash />}
                        onOk={deletProductHandler}
                        q='האם ברצונך למחוק מוצר זה?'
                    />
                    <h5>מחק מוצר זה</h5>
                </div>
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
                    <label>תיאור</label>
                    <textarea rows='4' cols='50' onChange={(e) => setProduct({ ...product, description: e.target.value })} name={product.description} placeholder='תיאור' >
                        {product.description}
                    </textarea>
                </div>
            </div>

        </Form>
    )
}

export default EditProduct
