(function(t){function e(e){for(var a,i,o=e[0],l=e[1],u=e[2],c=0,v=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function i(t){return o.p+"static/js/"+({about:"about"}[t]||t)+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var u=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a84":function(t,e,n){t.exports=n.p+"static/img/seven.jpg"},"220e":function(t,e,n){"use strict";n("8d3f")},2449:function(t,e,n){t.exports=n.p+"static/img/six.jpg"},3193:function(t,e,n){t.exports=n.p+"static/img/three.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("div",{staticClass:"flex header"},[a("div",{staticClass:"name"},[t._v("王云峰")]),a("div",{staticClass:"nav"},[a("a",{attrs:{href:"#intro"}},[t._v("个人介绍")]),a("i",{staticClass:"def"}),a("a",{attrs:{href:"#project"}},[t._v("项目介绍")]),a("i",{staticClass:"def"}),a("a",{attrs:{href:"#interaction"}},[t._v("给我留言")]),a("img",{attrs:{src:n("75db"),alt:""}})])])]),a("div",{staticClass:"main"},[a("div",{staticClass:"intro"},[a("h2",[t._v("前端工程师")]),a("p",[t._v("电子邮件: 845203476@qq.com")]),a("p",[t._v("联系电话: 18868108113")])]),a("el-row",{attrs:{gutter:2,id:"intro"}},[a("el-col",{staticClass:"skills grid-content bg-purple",attrs:{span:6}},[a("h4",{staticClass:"title"},[t._v("技能掌握")]),a("ul",t._l(t.skills,(function(e){return a("li",{key:e.tool},[a("span",{staticClass:"tools"},[t._v(t._s(e.tool))]),a("span",{staticClass:"level"},[a("el-col",{attrs:{span:parseInt(24*e.level)}})],1)])})),0)]),a("el-col",{staticClass:"experiments",attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName2,callback:function(e){t.activeName2=e},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"教育经历",name:"first"}},[a("ul",t._l(t.education,(function(e){return a("li",{key:e.time},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),a("div",{staticClass:"detail"},[t._v(" "+t._s(e.university)+" "+t._s(e.school)+" "+t._s(e.major)+" ")])])})),0)]),a("el-tab-pane",{attrs:{label:"工作经历",name:"second"}},[a("ul",t._l(t.work,(function(e){return a("li",{key:e.time},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),a("div",{staticClass:"detail"},[t._v(t._s(e.company)+" "+t._s(e.job))])])})),0)]),a("el-tab-pane",{attrs:{label:"获奖情况",name:"third"}},[a("ul",t._l(t.awards,(function(e){return a("li",{key:e.time},[a("div",{staticClass:"time"},[t._v(t._s(e.time))]),t._l(e.titles,(function(e){return a("div",{key:e,staticClass:"detail"},[t._v(t._s(e))])}))],2)})),0)])],1)],1)])],1),a("div",{attrs:{id:"project"}},[a("ul",t._l(t.projects,(function(e){return a("li",{key:e.id},[a("h4",[t._v(t._s(e.title))]),a("div",{domProps:{innerHTML:t._s(e.detail)}}),a("div",[t._v("项目中使用的技术: "),t._l(e.tec,(function(n,s){return a("span",{key:n},[t._v(t._s(n)),s<e.tec.length-1?a("i",{staticClass:"def"}):t._e()])}))],2)])})),0)]),a("div",{staticClass:"flex",attrs:{id:"interaction"}},[a("div",{staticClass:"photoes"},[a("el-carousel",t._l(t.imgs,(function(t){return a("el-carousel-item",{key:t},[a("img",{attrs:{src:t,alt:""}})])})),1)],1),a("div",{staticClass:"guestbook"},[a("p",[t._v("留言板")]),a("div",{staticClass:"img-content"},t._l(t.interaction,(function(e){return a("div",{key:e[0],staticClass:"flex"},[a("div",{staticClass:"img-name"},[a("img",{attrs:{src:n("65b7"),alt:""}}),a("p",{staticClass:"name"},[t._v(t._s(e.name))])]),a("div",{staticClass:"content"},[t._v(t._s(e.message))])])})),0),a("el-form",[a("el-input",{staticClass:"message",attrs:{type:"text",placeholder:"input your message",clearable:""},model:{value:t.input_message,callback:function(e){t.input_message=e},expression:"input_message"}}),a("div",{staticClass:"flex"},[a("el-input",{staticClass:"name",attrs:{type:"text",placeholder:"input your name",clearable:""},model:{value:t.input_name,callback:function(e){t.input_name=e},expression:"input_name"}}),a("el-button",{on:{click:function(e){return t.handle()}}},[t._v("Submit")])],1)],1)],1)])],1),a("el-footer",[t._v("You are the one who can fill the world with sunshine.")])],1)},r=[],i={data:function(){return{activeName2:"first",imgs:[n("7b29"),n("8858"),n("3193"),n("877d"),n("6609"),n("2449"),n("1a84")],skills:[{tool:"Javascript",level:.8},{tool:"CSS",level:.7},{tool:"HTML",level:.9},{tool:"Vue",level:.75},{tool:"Python",level:.85}],education:[{time:"2016 - 2020",university:"浙江大学",school:"信息与电子工程学院",major:"信息工程专业"},{time:"2020 - 2022",university:"浙江大学",school:"信息与电子工程学院",major:"电子与通信工程专业"}],work:[{time:"2020.09 - 2020.11",company:"杭州传送门科技有限公司",job:"前端实习生"},{time:"2019.08 - 2019.11",company:"杭州湖西云百生科技有限公司",job:"算法实习生"}],awards:[{time:"2017",titles:["学业三等奖学金"]},{time:"2018",titles:["学业三等奖学金","优秀学生三等奖学金","国家人才基地三等奖学金"]},{time:"2019",titles:["全国大学生电子设计竞赛浙江赛区二等奖","浙江大学光电设计竞赛一等奖"]}],projects:[{id:1,title:"Web个人主页",detail:"详见<a href='https://legend-wangyunfeng.github.io/web_resume_vue/' target='_blank'>https://legend-wangyunfeng.github.io/web_resume_vue/</a>",tec:["Vue","Element-UI"]},{id:2,title:"仿手机端Boss直聘网站",detail:"仿Boss直聘手机官网，做了三个页面，包括主页、列表页、详情页。<br/>详见<a href='https://github.com/Legend-Wangyunfeng/boss_zhipin' target='_blank'>https://github.com/Legend-Wangyunfeng/boss_zhipin</a>",tec:["Vue","Nuxt.js"]},{id:3,title:"医学图像分割",detail:"利用人体髋关节的CT扫描图像，认为标记背景、左腿、右腿、骨盆四部分。基于全卷积网络U-net，训练出一个可以 分割这四部分的模型，为人造髋关节手术提供便利条件。",tec:["Tensorflow","Keras","TensorRT"]},{id:4,title:"基于用户通信数据的重要位置识别",detail:"根据运营商端用户通信数据，提取用户在各个基站上的行为特征，用非监督和监督学习方法对用户重要位置进行预测，并对城市功能进行 推断。",tec:["聚类","随机森林"]},{id:5,title:"基于OpenCV 的疲劳驾驶检测系统",detail:"利用摄像头实时获取图像信息，捕捉司机眼部区域并计算眼部闭合度，当小于阈值时给予警报提醒。(获得浙江大学本科 生科研成果评选三等奖)",tec:["OpenCV","dlib"]}],input_message:"",input_name:"",interaction:[],index:1}},methods:{handle:function(){var t={id:this.index,name:this.input_name,message:this.input_message};this.interaction.push(t),this.input_message="",this.input_name="",this.index+=1}}},o=i,l=(n("5c0b"),n("2877")),u=Object(l["a"])(o,s,r,!1,null,null,null),c=u.exports,p=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},h=_,g=(n("220e"),Object(l["a"])(h,f,d,!1,null,"116c7c08",null)),b=g.exports,y={name:"Home",components:{HelloWorld:b}},j=y,k=Object(l["a"])(j,v,m,!1,null,null,null),C=k.exports;a["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new p["a"]({mode:"history",base:"",routes:w}),O=x,E=n("5c96"),P=n.n(E);n("0fae");a["default"].use(P.a),a["default"].config.productionTip=!1,new a["default"]({router:O,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"65b7":function(t,e,n){t.exports=n.p+"static/img/avatar.jpg"},6609:function(t,e,n){t.exports=n.p+"static/img/five.jpg"},"75db":function(t,e,n){t.exports=n.p+"static/img/照片wy.jpg"},"7b29":function(t,e,n){t.exports=n.p+"static/img/one.jpg"},"877d":function(t,e,n){t.exports=n.p+"static/img/four.jpg"},8858:function(t,e,n){t.exports=n.p+"static/img/two.jpg"},"8d3f":function(t,e,n){},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.png"}});