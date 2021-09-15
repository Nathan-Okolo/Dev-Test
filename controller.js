const books = require('./booksModel');

class Book {
    create = async (req,res)=>{
        const book = {
            id: books.length + 1,
            name: req.body.name,
            author: req.body.author
        };
        try{
            await books.push(book);
            res.status(200).send(books);
            console.log('new book added');
        }catch(e){
            res.status(400).send('this error was dictated: ' + e);
        };
       
    
    };

    list  = async (req,res)=>{
        try{
            res.status(200).send(books);
            console.log('check all available books!!!');
        }catch(e){
            res.status(500).send('this error was dictated: ' + e);
        };
    };

    listOne = async(req,res)=>{
        const book = await books.find(c => c.id === parseInt(req.params.id));
        try{
            if (!book)return res.status(404).send('book not found');
            res.send(book);
            console.log('book for given id');
        }catch(e){
            res.status(400).send('this error was found: '+e);
        };
    };

    update =  async(req,res)=>{
        const book = await books.find(c => c.id === parseInt(req.params.id));
        try{
            if (!book)return res.status(404).send('book not found');
            book.name = req.body.name;
            book.author = req.body.author;
            res.send(books);
            console.log('book with id: '  + req.params.id + ' was updated');
        }catch(e){
            res.status(400).send('this error was found: '+e);
        };
    
    };

    deleteOne = async(req,res)=>{
        const book = await books.find(c => c.id === parseInt(req.params.id));
        try{
            if (!book) return res.status(404).send('book not found');
            const index = await books.indexOf(book);
            books.splice(index,1);
            res.send(books);
            console.log('book with id: '  + req.params.id + ' was deleted');
        }catch(e){
            res.status(400).send('this errorwas found: '+e);
        };
    };
};;

module.exports = new Book()

