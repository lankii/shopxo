(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-open-setting-location"],{"01d3":function(t,n,e){"use strict";e.r(n);var i=e("b6ce"),a=e("4394");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("d4fe");var u,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"7fe868ab",null,!1,i["a"],u);n["default"]=s.exports},2586:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-7fe868ab]{background:#fbfbfb}.open-setting-view[data-v-7fe868ab]{background:rgba(0,0,0,.1);position:fixed;top:0;left:0;width:100%;height:100%;text-align:center;z-index:1000000}.open-setting-view .content[data-v-7fe868ab]{margin:0 auto;width:%?360?%;height:%?160?%;padding:%?50?%;border-radius:%?12?%;margin-top:70%;position:relative}.open-setting-view .content uni-button[data-v-7fe868ab]{margin-top:%?15?%}.open-setting-view .content .value[data-v-7fe868ab]{margin-top:%?5?%}.open-setting-view .content .value uni-text[data-v-7fe868ab]{font-weight:500;color:#333}.open-setting-loding[data-v-7fe868ab]{padding-top:35%}.open-setting-loding uni-image[data-v-7fe868ab]{margin:0 auto}body.?%PAGE?%[data-v-7fe868ab]{background:#fbfbfb}",""]),t.exports=n},4394:function(t,n,e){"use strict";e.r(n);var i=e("694e"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"694e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"open-setting-location",onLoad:function(){},data:function(){return{is_show_open_setting:!1}},methods:{choose_location:function(){var t=this;uni.chooseLocation({success:function(n){console.log(n);var e=t.$app.map_gcj_to_bd(n.longitude,n.latitude);n.longitude=e.lng,n.latitude=e.lat,uni.setStorageSync("cache_userlocation_key",n),uni.navigateBack()},fail:function(t){uni.navigateBack()}})}}};n.default=i},b6ce:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t.is_show_open_setting?e("v-uni-view",{staticClass:"open-setting-view"},[e("v-uni-view",{staticClass:"content bg-white"},[e("v-uni-view",{staticClass:"msg cr-888"},[t._v("开启相应的权限服务")]),e("v-uni-view",{staticClass:"value cr-666"},[t._v("获取["),e("v-uni-text",[t._v("位置信息")]),t._v("]权限")],1),e("v-uni-button",{attrs:{type:"primary","open-type":"openSetting",size:"mini"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setting_callback_event.apply(void 0,arguments)}}},[t._v("打开设置页")])],1)],1):e("v-uni-view",{staticClass:"open-setting-loding"},[e("v-uni-image",{staticClass:"avatar dis-block",attrs:{src:"/static/default-bg-loding.gif",mode:"widthFix"}})],1)],1)},o=[]},b942:function(t,n,e){var i=e("2586");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("186d2018",i,!0,{sourceMap:!1,shadowMode:!1})},d4fe:function(t,n,e){"use strict";var i=e("b942"),a=e.n(i);a.a}}]);