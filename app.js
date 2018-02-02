/* jshint esversion: 6 */

//import WebFileIO from "./webFileIO";
var WebFileIO = require('./webFileIO');

// webFileIO = new WebFileIO();
// webFileIO.log();

const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    webFileIO = new WebFileIO();
    webFileIO.log();
    webFileIO.writeToFileWithStr('xxxxxx');
    ctx.body = 'Hello Koa';
});

app.listen(3000);