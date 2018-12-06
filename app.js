const express = require("express");                         //引入EXPRESS框架
const userrouter = require('./controller/userRouter');    //引入客户路由



const app = express();                                   //实例化ESPRESS


//引入中间件

app.use(express.static("./public"));                   //静态PUBLIC



//公共部分（客户端）

app.get("/GetPiInfo", userrouter.GetPiInfo);  //用户注册



app.listen(3000);                                                 //监听3000端口

console.log("SERVER START");                                     //控制台打印服务器成功启动信息
