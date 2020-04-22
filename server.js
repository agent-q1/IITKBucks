
const express = require("express");
const crypto = require("crypto");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.post("/hash",(req,res)=>{
  console.log(req.body.hashdata);
  const hashString = JSON.parse(req.body.hashdata);
  console.log(hashString.data);
  const hash = crypto.createHash('md5').update(hashString.data).digest('hex');
  console.log(hash);
  const postHash = {
    "hash" : hash
  }


  res.send(postHash);
});


app.listen(8787,()=>{
  console.log("server started on port 8787");
});
