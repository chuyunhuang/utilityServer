
// 1 - Import Express Library
const express = require('express');
// 2 - Initiate an Express App
let app = express();
// 3 - Define a Port
const port = 6265;

// 4 - Define your Server's Routes
app.get('/', (req, res) => {
  
  res.send('Testing');
});


// Final - Get your App Server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});