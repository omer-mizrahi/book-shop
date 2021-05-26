import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './_productScreen.scss'
import { listProductDetails } from '../../actions/productActions'
import BGImage from '../../components/BGImage'
import Button from '../../components/Button'

function ProductScreen({ match }) {

    const productDetails = useSelector(state => state.productDetails)
    const { product } = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link to='/' >חזור</Link>
            <div className='row'>
                <div>
                    <BGImage url={product.image} size={500} />
                </div>
                <div>
                    <div className='names'>
                        <h2>{product.name}</h2>
                        <h3>{product.ahutor}</h3>
                    </div>
                    <hr />
                    <div className='secInfo'>
                        <label>תיאור:</label>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className='secInfo'>
                        <label>קטגוריה:</label>
                        <span>
                            {product.category}
                        </span>
                    </div>
                    <div className='secInfo'>
                        <label>מחבר:</label>
                        <span>
                            {product.ahutor}
                        </span>
                    </div>
                    <div className='secInfo'>
                        <label>מפיץ:</label>
                        <span>
                            {product.publisher}
                        </span>
                    </div>
                    <div className='borderToCart'>
                        <div>
                            <label>מחיר:</label>
                            <span>
                                ₪{product.price.toFixed(2)}
                            </span>
                        </div>
                        <div>
                            <label>סטטוס:</label>
                            <span>
                                {product.countInStock !== 0 ? 'זמין במלאי' : 'אזל המלאי'}
                            </span>
                        </div>
                        <div>
                            <Button>הוסף לסל</Button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default ProductScreen
