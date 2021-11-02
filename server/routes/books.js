let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model


let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);



/* firshow like this 
router.get('/add', (req,res, next)=>{
 res.render('book/list',{title: 'Add Books'})
*/
/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', bookController.displayAddPage);


/*show first by writing here :
(req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price});
         Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
*/
/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', bookController.processAddPage);


/*let id = req.params.id;
    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });*/


/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', bookController.displayEditPage);


/*let id = req.params.id
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });*/
/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', bookController.processEditPage);


/*let id = req.params.id;
    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/book-list');
        }
    }); */
/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);

module.exports = router;

/*let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ OPeration 
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(bookList);

            res.render('book/list.ejs', {title: 'Book List', BookList: bookList})            
        }
    });
});

module.exports = router;*/