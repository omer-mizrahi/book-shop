import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import { notFound, errorHandler } from './middleware/erroMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDb()

const app = express()
const path = require('path')

app.use(express.json())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

const __dirname = path.resolve()
app.use(express.static(path.join(_dirname)))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/frontend/build'))
}
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/', express.static(__dirname + '/root'))

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))