const express = require('express');

const router = express.Router();

const category = require('./category.routes');
const subcategory = require('./subcategory.routes');
const product = require('./product.routes');
// const variant = require('./variant.routes');
// const review = require('./review.routes');
// const user = require('./users.routes');

router.use('/category', category);
router.use('/subcategory', subcategory);
router.use('/product', product);
// router.use('/variant', variant);
// router.use('/review', review);
// router.use('/users', user);

module.exports = router;