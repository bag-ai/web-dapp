(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{379:function(t,e,n){var content=n(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("5de3763a",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("d78ef50a",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n.r(e);var r=n(378);e.default={extends:r.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}},388:function(t,e,n){var map={"./af":243,"./af.js":243,"./ar":244,"./ar-dz":245,"./ar-dz.js":245,"./ar-kw":246,"./ar-kw.js":246,"./ar-ly":247,"./ar-ly.js":247,"./ar-ma":248,"./ar-ma.js":248,"./ar-sa":249,"./ar-sa.js":249,"./ar-tn":250,"./ar-tn.js":250,"./ar.js":244,"./az":251,"./az.js":251,"./be":252,"./be.js":252,"./bg":253,"./bg.js":253,"./bm":254,"./bm.js":254,"./bn":255,"./bn-bd":256,"./bn-bd.js":256,"./bn.js":255,"./bo":257,"./bo.js":257,"./br":258,"./br.js":258,"./bs":259,"./bs.js":259,"./ca":260,"./ca.js":260,"./cs":261,"./cs.js":261,"./cv":262,"./cv.js":262,"./cy":263,"./cy.js":263,"./da":264,"./da.js":264,"./de":265,"./de-at":266,"./de-at.js":266,"./de-ch":267,"./de-ch.js":267,"./de.js":265,"./dv":268,"./dv.js":268,"./el":269,"./el.js":269,"./en-au":270,"./en-au.js":270,"./en-ca":271,"./en-ca.js":271,"./en-gb":272,"./en-gb.js":272,"./en-ie":273,"./en-ie.js":273,"./en-il":274,"./en-il.js":274,"./en-in":275,"./en-in.js":275,"./en-nz":276,"./en-nz.js":276,"./en-sg":277,"./en-sg.js":277,"./eo":278,"./eo.js":278,"./es":279,"./es-do":280,"./es-do.js":280,"./es-mx":281,"./es-mx.js":281,"./es-us":282,"./es-us.js":282,"./es.js":279,"./et":283,"./et.js":283,"./eu":284,"./eu.js":284,"./fa":285,"./fa.js":285,"./fi":286,"./fi.js":286,"./fil":287,"./fil.js":287,"./fo":288,"./fo.js":288,"./fr":289,"./fr-ca":290,"./fr-ca.js":290,"./fr-ch":291,"./fr-ch.js":291,"./fr.js":289,"./fy":292,"./fy.js":292,"./ga":293,"./ga.js":293,"./gd":294,"./gd.js":294,"./gl":295,"./gl.js":295,"./gom-deva":296,"./gom-deva.js":296,"./gom-latn":297,"./gom-latn.js":297,"./gu":298,"./gu.js":298,"./he":299,"./he.js":299,"./hi":300,"./hi.js":300,"./hr":301,"./hr.js":301,"./hu":302,"./hu.js":302,"./hy-am":303,"./hy-am.js":303,"./id":304,"./id.js":304,"./is":305,"./is.js":305,"./it":306,"./it-ch":307,"./it-ch.js":307,"./it.js":306,"./ja":308,"./ja.js":308,"./jv":309,"./jv.js":309,"./ka":310,"./ka.js":310,"./kk":311,"./kk.js":311,"./km":312,"./km.js":312,"./kn":313,"./kn.js":313,"./ko":314,"./ko.js":314,"./ku":315,"./ku.js":315,"./ky":316,"./ky.js":316,"./lb":317,"./lb.js":317,"./lo":318,"./lo.js":318,"./lt":319,"./lt.js":319,"./lv":320,"./lv.js":320,"./me":321,"./me.js":321,"./mi":322,"./mi.js":322,"./mk":323,"./mk.js":323,"./ml":324,"./ml.js":324,"./mn":325,"./mn.js":325,"./mr":326,"./mr.js":326,"./ms":327,"./ms-my":328,"./ms-my.js":328,"./ms.js":327,"./mt":329,"./mt.js":329,"./my":330,"./my.js":330,"./nb":331,"./nb.js":331,"./ne":332,"./ne.js":332,"./nl":333,"./nl-be":334,"./nl-be.js":334,"./nl.js":333,"./nn":335,"./nn.js":335,"./oc-lnc":336,"./oc-lnc.js":336,"./pa-in":337,"./pa-in.js":337,"./pl":338,"./pl.js":338,"./pt":339,"./pt-br":340,"./pt-br.js":340,"./pt.js":339,"./ro":341,"./ro.js":341,"./ru":342,"./ru.js":342,"./sd":343,"./sd.js":343,"./se":344,"./se.js":344,"./si":345,"./si.js":345,"./sk":346,"./sk.js":346,"./sl":347,"./sl.js":347,"./sq":348,"./sq.js":348,"./sr":349,"./sr-cyrl":350,"./sr-cyrl.js":350,"./sr.js":349,"./ss":351,"./ss.js":351,"./sv":352,"./sv.js":352,"./sw":353,"./sw.js":353,"./ta":354,"./ta.js":354,"./te":355,"./te.js":355,"./tet":356,"./tet.js":356,"./tg":357,"./tg.js":357,"./th":358,"./th.js":358,"./tk":359,"./tk.js":359,"./tl-ph":360,"./tl-ph.js":360,"./tlh":361,"./tlh.js":361,"./tr":362,"./tr.js":362,"./tzl":363,"./tzl.js":363,"./tzm":364,"./tzm-latn":365,"./tzm-latn.js":365,"./tzm.js":364,"./ug-cn":366,"./ug-cn.js":366,"./uk":367,"./uk.js":367,"./ur":368,"./ur.js":368,"./uz":369,"./uz-latn":370,"./uz-latn.js":370,"./uz.js":369,"./vi":371,"./vi.js":371,"./x-pseudo":372,"./x-pseudo.js":372,"./yo":373,"./yo.js":373,"./zh-cn":374,"./zh-cn.js":374,"./zh-hk":375,"./zh-hk.js":375,"./zh-mo":376,"./zh-mo.js":376,"./zh-tw":377,"./zh-tw.js":377};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=388},390:function(t,e,n){"use strict";var r=n(379);n.n(r).a},391:function(t,e,n){(e=n(52)(!1)).push([t.i,'.container[data-v-23084c21]{margin:0 auto;min-height:calc(100vh - 60px);justify-content:center}.title[data-v-23084c21]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:1.5em;padding-left:.5rem;padding-top:.5rem;color:#35495e;letter-spacing:1px}.graphs[data-v-23084c21]{padding:.5rem;overflow-x:auto;white-space:nowrap}',""]),t.exports=e},392:function(t,e,n){"use strict";var r=n(380);n.n(r).a},393:function(t,e,n){(e=n(52)(!1)).push([t.i,".sell[data-v-2b356b56]{background:#f3aeae;color:#4e1919}.buy[data-v-2b356b56]{background:#b7ff99;color:#2b4e19}",""]),t.exports=e},410:function(t,e,n){"use strict";n.r(e);n(51),n(9),n(117),n(21);var r=n(65),c=n(66),o=n(67),l=n(36),f=n(13),j=n(37);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(j.d),v=m=h([j.a],m),y=n(27),component=Object(y.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"text-center grid grid-cols-3"},[e("h4",[this._v("Coin")]),this._v(" "),e("h4",[this._v("Status")]),this._v(" "),e("h4",[this._v("Strength")])])])}],!1,null,null,null);e.default=component.exports},411:function(t,e,n){"use strict";n.r(e);n(51),n(9),n(117),n(21);var r=n(65),c=n(118),o=n(66),l=n(67),f=n(36),j=n(13),d=n(37);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},v=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).options={legend:{display:!1},tooltips:{enabled:!1}},t}return Object(c.a)(n,[{key:"portfolioData",get:function(){return{datasets:[{data:[this.actionItem.rate,1-this.actionItem.rate],borderColor:["#36a2eb"],borderWidth:2,backgroundColor:["rgba(54, 162, 235, 0.1)"]}]}}}]),n}(d.d);m([Object(d.c)({default:{}})],v.prototype,"actionItem",void 0);var y=v=m([Object(d.a)({components:{DoughtChart:function(){return Promise.resolve().then(n.bind(null,381))}}})],v),k=(n(392),n(27)),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid grid-cols-3 text-center mt-3 rounded py-1 bg-gray-400"},[n("div",{staticClass:"flex items-center justify-evenly"},[n("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:t.actionItem.icon,alt:""}}),t._v(" "),n("h4",[t._v(t._s(t.actionItem.coin))])]),t._v(" "),n("div",{staticClass:"flex items-center justify-center border-l-2 border-r-2 border-gray-500",class:{buy:"buy"===t.actionItem.type,sell:"sell"===t.actionItem.type}},[n("h4",{staticClass:"capitalize"},[t._v(t._s(t.actionItem.type))])]),t._v(" "),"hold"===t.actionItem.type?n("div",{staticClass:"flex items-center justify-center my-1",staticStyle:{height:"40px"}},[t._v("\n      -\n    ")]):n("div",{staticClass:"flex items-center justify-evenly"},[n("div",{staticClass:"py-1"},[n("DoughtChart",{attrs:{data:t.portfolioData,width:40,height:40,options:t.options}})],1),t._v(" "),n("h4",[t._v(t._s(100*t.actionItem.rate)+"%")])])])])}),[],!1,null,"2b356b56",null);e.default=component.exports;installComponents(component,{DoughtChart:n(381).default})},412:function(t,e,n){"use strict";n.r(e);n(51),n(9),n(117),n(21);var r=n(65),c=n(66),o=n(67),l=n(36),f=n(13),j=n(37);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(j.d),v=m=h([j.a],m),y=n(27),component=Object(y.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:"/signin"}},[e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"bg-blue-400 w-full mx-6 shadow-lg rounded-lg py-2 text-white my-5"},[this._v("\n      Show more\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);n(51),n(9),n(117),n(21);var r=n(65),c=n(66),o=n(67),l=n(36),f=n(13),j=n(37);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var h=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).actionList=[{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",coin:"ETH",type:"buy",rate:.235},{icon:"https://www.altbags.com/wp-content/uploads/2020/08/Chainlink.jpg",coin:"LINK",type:"sell",rate:.4},{icon:"https://blog.kraken.com/wp-content/uploads/2019/11/k-dai-2400x1350.png",coin:"DAI",type:"hold",rate:.35},{icon:"https://s2.coinmarketcap.com/static/img/coins/200x200/5268.png",coin:"EWT",type:"sell",rate:.147},{icon:"https://s2.coinmarketcap.com/static/img/coins/200x200/1637.png",coin:"RLC",type:"buy",rate:.1},{icon:"https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",coin:"DOT",type:"sell",rate:.6},{icon:"https://icodrops.com/wp-content/uploads/2017/10/aave_logo.jpg",coin:"AAVE",type:"hold",rate:.04},{icon:"https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png",coin:"COMP",type:"hold",rate:.02}],t.actionList_={labels:["January","February","March","April","lucsa","draichi"],datasets:[{label:"GitHub Commits",data:[40,20,12,39,51,42],borderColor:["#fd5d93","#36a2eb","#cc65fe","#ffce56"],borderWidth:2,backgroundColor:["rgba(253, 93, 147,0.1)","rgba(54, 162, 235, 0.1)","rgba(204, 101, 254, 0.1)","rgba(255, 206, 86, 0.1)"]}]},t.chartTiles=[{graphData:{labels:["January","February","March","April"],datasets:[{label:"GitHub Commits",data:[40,60,20,39]}]},backgroundColor:"blue"},{graphData:{labels:["January","February","March","April"],datasets:[{label:"GitHub Commits",data:[20,90,20,39]}]},backgroundColor:"red"}],t}return n}(j.d),v=m=h([Object(j.a)({components:{ActionListHeader:function(){return Promise.resolve().then(n.bind(null,410))},ActionListItem:function(){return Promise.resolve().then(n.bind(null,411))},BottomButton:function(){return Promise.resolve().then(n.bind(null,412))}}})],m),y=(n(390),n(27)),component=Object(y.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container overflow-x-hidden"},[this._m(0),this._v(" "),e("div",{staticClass:"coins-list"},[e("ActionListHeader"),this._v(" "),this._l(this.actionList,(function(t,i){return e("ActionListItem",{key:"action-item-"+i,attrs:{actionItem:t}})}))],2),this._v(" "),e("BottomButton")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title"},[this._v("Actions")])])}],!1,null,"23084c21",null);e.default=component.exports;installComponents(component,{ActionListHeader:n(410).default,ActionListItem:n(411).default,BottomButton:n(412).default})}}]);