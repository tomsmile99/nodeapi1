const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const cors = require('cors')


// you explicitly create the http server
//const httpServer = require("http").createServer(app);

// you explicitly create the http server
//const server = require('http').createServer(app);

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

const io = socketIO(serverconst io = socketIO(server, {
  cors: {
    origin: 'https://test01.sakerp.org/',
  }
}))
io.on('connection',(socket)=>{
  console.log('client socket connection')
})
