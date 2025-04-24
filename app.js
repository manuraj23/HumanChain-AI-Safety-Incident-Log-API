const { count } = require('console');
const express = require('express');
const PORT = 3000;
const fs = require('fs');
const app = express();

app.get('/',(req,res)=>{
    // res.status(200).send('<h2>Hello From Express Server</h2>'); //.send is used to sent text/HTML
    res.status(200).json({message:'Hello From Express Server',status:200}); //.json is used to sent JSON/Application
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });