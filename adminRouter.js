const express = require('express');
const router = express.Router();

// Define admin routes
router.get('/', (req, res) => {
  res.send('Admin Home Page');
});

router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

// Export the router
module.exports = router;
