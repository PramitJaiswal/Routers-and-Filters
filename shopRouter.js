const express = require('express');
const router = express.Router();

// Define shop routes
router.get('/', (req, res) => {
  res.send('Shop Home Page');
});

router.get('/products', (req, res) => {
  res.send('Shop Products Page');
});

// Export the router
module.exports = router;
