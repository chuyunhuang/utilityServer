const math = require('./service/math')
// 1 - Import Express Library
const express = require('express');
// 2 - Initiate an Express App
let app = express();
// 3 - Define a Port
const port = 6265;

// 4 - Define your Server's Routes
app.get('/', (req, res) => {

  res.send('This is the home page.');
});

app.get('/math/add', (req, res) => {

  let value = Object.values(req.query)

  if (math.isNumber(value)) {
    res.send('Input must be number')
  } else {
    res.send({
      input: req.query,
      sumString: math.sumString(value),
      sum: math.getSum(value),
    })
  }
})

app.get('/math/multiply', (req, res) => {

  let value = Object.values(req.query)
  if (math.isNumber(value)) {
    res.send('Input must be number')
  } else {
    res.send({
      input: req.query,
      productString: math.productString(value),
      product: math.getMultiply(value),
    })
  }
})

// Final - Get your App Server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});