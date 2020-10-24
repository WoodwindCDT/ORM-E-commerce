const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>You're Here!</h1><br /> <h2>Type api endpoints <br /> /api/categories, <br /> /api/tags, or <br /> /api/products into the browser. <br /> EX: http://localhost:3001/api/tags </h2>")
});

module.exports = router;