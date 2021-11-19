
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* INSERTED NEW CODE - pinkherwin */
/* GET Route for displaying credits page */
router.get('/credits', indexController.displayCreditsPage);
/* END of INSERTED NEW CODE - pinkherwin */

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the register */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the registration */
router.post('/register', indexController.processRegisterPage);

/* GET to perform logout */
router.get('/logout', indexController.performLogout);



module.exports = router;