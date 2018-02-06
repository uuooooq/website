/* jshint esversion: 6 */

//import WebFileIO from "./webFileIO";
// var WebFileIO = require('./webFileIO');

// // webFileIO = new WebFileIO();
// // webFileIO.log();

// const Koa = require('koa');
// const app = new Koa();

// // response
// app.use(ctx => {
//     webFileIO = new WebFileIO();
//     webFileIO.log();
//     webFileIO.writeToFileWithStr('xxxxxx');
//     ctx.body = 'Hello Koa';
// });

// app.listen(3000);

var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     res.send('Hello World');
//   })
  //app.use(multer());

  app.post('/profile', function(req, res) {
    var incomingForm = req.form  // it is Formidable form object

    incomingForm.on('error', function(err){

          console.log(error);  //handle the error

    })

    incomingForm.on('fileBegin', function(name, file){

         // do your things here when upload starts
         console.log(name);
    })


    incomingForm.on('end', function(){
      console.log('end');
         // do stuff after file upload
    });

    // Main entry for parsing the files
    // needed to start Formidables activity
    incomingForm.parse(req, function(err, fields, files){


    })
  
  });

  // app.post('/profile', function (req, res) {
    
  //   var bodyinfo = req.body;
  //   res.send('Hello World');
  // })
  
  app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    res.send('Hello World');
  })
  
  var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
    res.send('Hello World');
  })

app.listen(3000)