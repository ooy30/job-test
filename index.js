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

app.get('/triangle',(req,res) => {
  try {
      const {base , height} = req.query;
      const area = (base * height)* (1/2);
      res.json({area})
    } catch (e) {
        res.json({e})
    }
})

app.get('/citizenid',(req,res) => {
  console.log('req',req.query);
  
  try {
        const {citizen_id} = req.query;
        if (citizen_id == null || citizen_id == 'null'|| citizen_id == '') throw new Error("citizen_id require");
    
        for (var i = 0, sum = 0; i < 12; i++) {
        console.log('citizen_id * position',parseFloat(citizen_id[i]) * (13 - i));
        sum += parseFloat(citizen_id[i]) * (13 - i);
        }
    
        console.log('sum',sum);
        console.log('sum mod 11',11 - sum % 11, '==', citizen_id[12]);
        if ((11 - sum % 11) % 10 != parseFloat(citizen_id[12])) throw new Error("citizen_id invalid");
    
        res.json({"success":true,error_code:"200",error_msg:""})
    } catch (e) {
        res.json({"success":false,error_code:"001",error_msg:e.message})
    }
})


app.listen(PORT,()=>{
  console.log('Server Run',PORT);
  // console.log('DB Run',process.env.REPLIT_DB_URL);
})