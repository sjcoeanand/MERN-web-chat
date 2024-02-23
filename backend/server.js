const exp = require('express');
const {chats} = require('./data/data.js')
const app = exp();

app.listen('9007')
app.get('/', (req, res)=>{
    res.send('Welcome to Node Backend')
})

app.get('/api/chats', (req, res)=>{
    res.send(chats)
})

app.get('/api/chats/:id', (req, res)=>{
    const fetchedChat = chats.find((x)=> x._id === req.params.id)
    res.send(fetchedChat);
})

