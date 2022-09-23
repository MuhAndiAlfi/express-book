const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json')

const controller = require('../app/controller')

const book = controller.book
const member = controller.member
const history = controller.history

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api-books', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


router.get('/books', book.show)
router.get('/members', member.show)
router.post('/history', history.borrow)

module.exports = router;
