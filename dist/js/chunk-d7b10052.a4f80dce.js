(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7b10052"],{"191e":function(t,n,e){"use strict";e("316b")},"316b":function(t,n,e){},"7f87":function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i}));var c=e("c1fb");function o(t){return c["a"].post("/api/auth/register",t)}function a(t){return c["a"].post("/api/auth/login",t)}function i(){return c["a"].post("/api/auth/logout")}},c66d:function(t,n,e){"use strict";e.r(n);var c=e("7a23"),o=Object(c["N"])("data-v-69445f32");Object(c["A"])("data-v-69445f32");var a={class:"main"},i=Object(c["h"])("退出");Object(c["y"])();var u=o((function(t,n,e,u,r,b){var s=Object(c["E"])("Navbar"),f=Object(c["E"])("van-button"),l=Object(c["E"])("tabbar");return Object(c["x"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(s,{title:"个人中心"}),Object(c["i"])("div",a,[Object(c["i"])(f,{type:"primary",onClick:u.tologout},{default:o((function(){return[i]})),_:1},8,["onClick"])]),Object(c["i"])(l)],64)})),r=e("7106"),b=e("feb1"),s=e("7f87"),f=e("d399"),l=e("6c02"),d=e("5502"),p={name:"Profile",setup:function(){var t=Object(l["d"])(),n=Object(d["b"])(),e=function(){Object(s["b"])().then((function(e){console.log(e),f["a"].success("退出成功"),window.sessionStorage.setItem("token",""),n.commit("setIsLogin",!1),setTimeout((function(){t.push({path:"/login"})}),1e3)})).catch((function(t){console.log(t),f["a"].fail("退出失败")}))};return{tologout:e}},components:{Navbar:r["a"],Tabbar:b["a"]}};e("191e");p.render=u,p.__scopeId="data-v-69445f32";n["default"]=p}}]);
//# sourceMappingURL=chunk-d7b10052.a4f80dce.js.map