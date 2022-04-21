const express = require('express')
const router = express.Router()

// Controller
const ProductController = require('../controllers/ProductController')

// method 1
router.post('/method1',ProductController.method1)

// method 2
router.post('/method2',ProductController.method2)

// method 3
router.post('/method3',ProductController.method3)

// get all
router.get('/getall',ProductController.getAll)

module.exports = router