const exp = require('express');
const {chats} = require('./data/data.js')
const dotenv = require('dotenv');
const connectDb = require('./config/db.js')
const colors = require('colors')
const useRoutes = require('./routes/useRoutes.js')

const app = exp();
dotenv.config()

connectDb();

app.get('/', (req, res)=>{
    res.send('Welcome to Node Backend')
})

app.use('/app/user',useRoutes);

// app.get('/api/chats', (req, res)=>{
//     res.send(chats)
// })

// app.get('/api/chats/:id', (req, res)=>{
//     const fetchedChat = chats.find((x)=> x._id === req.params.id)
//     res.send(fetchedChat);
// })

const PORT = process.env.PORT | 9007;
app.listen(9007, console.log(`<====SERVER STARTED ON ${PORT}====>`.blue.bold.underline))

