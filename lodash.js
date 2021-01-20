//引入 lodash 包  const fs = require('fs');
const _ = require('lodash');

//调用方法
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));

//获取一个随机数
console.log(_.random(1,100));

// 时间算法模块
const moment=require("moment")
console.log(moment("19921216", "YYYYMMDD").fromNow())
