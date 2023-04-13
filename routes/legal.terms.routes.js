const express = require('express');
const router = express.Router();

// Imports Legal terms controller
const legalController = require('../controllers/legal.terms.controller');
console.log(legalController);

// Define route for Legal terms
router.get('/', legalController.index);

// Exports the module
module.exports = router;