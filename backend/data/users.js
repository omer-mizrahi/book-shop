import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        image: 'https://images.unsplash.com/photo-1562457753-6867bda028cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2246&q=80',
        email: 'admin@examp.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Kobi Maman',
        image: 'https://images.unsplash.com/photo-1533101585792-27f81a845550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        email: 'kobi@examp.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users