import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

})

const updateProduct = asyncHandler(async (req, res) => {
    const productId = await Product.findById(req.params.id)

    Product.findById(productId).then((product) => {
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
    }).then(() => {
        Product.updateOne({ _id: productId }, req.body).then(() => {
            res.status(200).json({
                message: 'Product Updated',
                product: req.body
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    })
})

const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id

    Product.findById(productId).then((product) => {
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
    }).then(() => {
        Product.deleteOne({ _id: productId }).then(() => {
            res.status(200).json({
                message: `Product _id: ${productId} deleted`,
                product
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        })
    })
})

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, category, price, countInStock, image, ahutor, publisher, user } = req.body

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name,
        price,
        description,
        countInStock,
        ahutor,
        publisher,
        category,
        image,
        user
    })

    product.save().then(() => {
        res.status(200).json({
            message: 'Created Product',
            product
        })

    }).catch(error => {
        res.status(500).json({
            error
        })
    })

})

export { getProducts, getProductById, updateProduct, deleteProduct, createProduct }