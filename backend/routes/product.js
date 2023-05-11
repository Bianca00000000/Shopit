const express = require('express')
const router = express.Router();


const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts

} = require('../controllers/productController')

// isAuthentificatedUser => can do just is authenticated
// isAuthorized => can do just is authorized( delete product, put product etc. )
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

// can do and guests
router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/product/:id').get(getSingleProduct);

// send newProduct
// the functionalities of admin must to be authorized
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

router.route('/admin/product/:id')
                .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
                .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router.route('/reviews').get(isAuthenticatedUser, getProductReviews);

router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;