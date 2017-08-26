/**
 * Created by zhudongwei on 25/08/2017.
 */
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.body = '网站正在建设中...';
});

app.listen(80);