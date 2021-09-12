const express = require('express');
const books = require('./route');
const app = express();

app.use(express.json());
app.use('/bookApi/', books);
const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Book API listening on port ${PORT}`);
})