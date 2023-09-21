const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const cors = require('cors')


// you explicitly create the http server
//const httpServer = require("http").createServer(app);

// you explicitly create the http server
//const server = require('http').createServer(app);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://test01.sakerp.org/'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: 'https://test01.sakerp.org/'
}))

require('dotenv').config()

//const hostname = process.env.HOST
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('มาละๆๆ');
})


const server = app.listen(port, () => {
  console.log(`Server running at port : ${port}/`);
})

const io = socketIO(server, {
  cors: {
    origin: 'https://test01.sakerp.org/',
  }
})
io.on('connection',(socket)=>{
  console.log('client socket connection')
})
