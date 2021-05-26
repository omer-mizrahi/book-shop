const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const { notFound, errorHandler } = require('./middleware/erroMiddleware')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

const path = require('path')

dotenv.config()
connectDb()

const app = express()

app.use(express.json())


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

// const __dirname = path.resolve()
// app.use(express.static(path.join(_dirname)))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/frontend/build'))
}

app.use('/assets', express.static(__dirname + '/assets'))

app.use('/', express.static(__dirname + '/root'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'), err => {
        if (err) {
            res.status(500).send(err)
        }
    })
})

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html')))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))