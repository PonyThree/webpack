
//导入util.js模块中的getCompanyName()函数
import {getCompanyName} from './util.js';
// 导入另两个css模块文件
import '../css/base.css';
import '../css/page.css';
//导入另两个图片文件模块
import pic1 from '../img/music.jpg';
import pic2 from '../img/timg.jpg';
// 创建一个div元素
var div=document.createElement("div");
// 设置div元素内部的文字
div.innerHTML="版权所有2018:"+getCompanyName();
// 修改div元素的class
div.className="box";
//创建一个图片img元素
var img1=new Image();
var img2=new Image();
//设置图片的src属性
img1.src=pic1;
img2.src=pic2;
//把图片追加为div元素的孩子
div.appendChild(img1);
div.appendChild(img2);
// 把div元素追加为body的孩子
document.body.appendChild(div);