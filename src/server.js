// const express = require('express');
// const app = express();

// // Serve all the files in '/dist' directory
// app.use(express.static('dist'));


// app.listen(process.env.PORT, function () {
//   console.log('Example app listening on port 3000!');
// });

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)