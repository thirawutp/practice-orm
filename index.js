// const express = require('express');
// const morgan = require('morgan');
const User = require('./bookshelf');
// const app = express ();

User
  .query()
  .where({id:3})
  .then(function(model) {
    console.log(model)
  })
  .catch(function(err) {
    console.log(err)
  })

//
// app.listen(3001,()=>{
//   console.log('app run on localhost:3000');
// });
