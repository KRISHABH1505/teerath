const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
import cors from "cors"
app.use(express.json())
app.use(cors())

mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/Login"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})