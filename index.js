const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const productRoutes = require('./src/routers/productRoutes');

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running at:${PORT}/`);
  });