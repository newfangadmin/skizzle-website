const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
