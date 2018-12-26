
//导入util.js模块中的getCompanyName()函数
import {getCompanyName} from './util.js';
// 导入另两个css模块文件
import '../css/base.css';
import '../css/page.css';
// 创建一个div元素
var div=document.createElement("div");
// 设置div元素内部的文字
div.innerHTML="版权所有2018:"+getCompanyName();
// 修改div元素的class
div.className="box";
// 把div元素追加为body的孩子
document.body.appendChild(div);