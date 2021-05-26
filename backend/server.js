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

app.use(express.json())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

const _dirname = path.resolve()
app.use('/uploads', express.static(path.join(_dirname, '/uploads')))

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(_dirname, '/frontend/build')))
//     app.get('*', (req, res) => res.sendFile(path.resolve(_dirname, 'frontend', 'build', 'index.html')))
// }
// else {
//     app.get('/', (req, res) => {
//         res.send('Api is running')
//     })

// }

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))