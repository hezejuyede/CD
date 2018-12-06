const formidable = require("formidable");             //引入formidable

var data =[
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"},
    {"Tag":"2512ddddddd35485","TagName":"蒸汽流量极大的的","NowValue":"455.6"}
]

//注册
exports.GetPiInfo = (req, res, next) => {
    console.log(req.query.id);
    res.json(data)

};




