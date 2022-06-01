const express = require('express');
const app = express();
var uuid = require("uuid");
const cors = require('cors');

const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.json({result :"ok",status :"Server Run"})
})

app.listen(PORT,()=>{
  console.log('Server Run',PORT);
  console.log('DB Run',process.env.REPLIT_DB_URL);
})