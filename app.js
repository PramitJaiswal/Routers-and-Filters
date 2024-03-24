const express = require('express');
const app = express();

// Define routers
const adminRouter = require('./adminRouter');
const shopRouter = require('./shopRouter');

// Middleware for /admin routes
app.use('/admin', adminRouter);

// Middleware for /shop routes
app.use('/shop', shopRouter);

// Route not found handler
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
