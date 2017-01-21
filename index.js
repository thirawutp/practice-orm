const express = require('express');
const morgan = require('morgan');
const app = express ();

var Client = require('mariasql');

app.get('/',(req,res,next)=>{
  var c = new Client({
    host: '139.59.233.25',
    user: 'root',
    password: 'password'
  });

  c.query('SHOW DATABASES', function(err, rows) {
    if (err)
      throw err;
    console.dir(rows);
  });

  c.end();
})



app.listen(3000,()=>{
  console.log('app run on localhost:3000');
});
