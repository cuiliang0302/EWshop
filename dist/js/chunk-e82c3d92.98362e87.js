(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e82c3d92"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return u}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||i(t)||c(t)||a()}},"2ba9":function(t,e,n){},4886:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),o=Object(r["N"])("data-v-187b98ae");Object(r["A"])("data-v-187b98ae");var i={class:"main"},c={class:"order-tab"},a={class:"content"},u={class:"category-tab"},f={class:"goods-list"};Object(r["y"])();var l=o((function(t,e,n,l,s,d){var b=Object(r["E"])("Navbar"),v=Object(r["E"])("van-tab"),p=Object(r["E"])("van-tabs"),g=Object(r["E"])("van-sidebar-item"),y=Object(r["E"])("van-collapse-item"),h=Object(r["E"])("van-collapse"),m=Object(r["E"])("van-sidebar"),O=Object(r["E"])("van-card"),j=Object(r["E"])("van-list"),w=Object(r["E"])("Tabbar");return Object(r["x"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(b,{title:"分类"}),Object(r["i"])("div",i,[Object(r["i"])("div",c,[Object(r["i"])(p,{active:l.orderActive,"onUpdate:active":e[1]||(e[1]=function(t){return l.orderActive=t}),onClick:l.orderClick},{default:o((function(){return[Object(r["i"])(v,{title:"销量排序",name:"salse"}),Object(r["i"])(v,{title:"价格排序",name:"price"}),Object(r["i"])(v,{title:"评论排序",name:"comment"})]})),_:1},8,["active","onClick"])]),Object(r["i"])("div",a,[Object(r["i"])("div",u,[Object(r["i"])(m,{modelValue:l.leftActive,"onUpdate:modelValue":e[3]||(e[3]=function(t){return l.leftActive=t})},{default:o((function(){return[Object(r["i"])(h,{modelValue:l.activeName,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.activeName=t}),accordion:""},{default:o((function(){return[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(l.categoryList,(function(t){return Object(r["x"])(),Object(r["f"])(y,{key:t.id,title:t.name,name:t.name},{default:o((function(){return[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(t.children,(function(t){return Object(r["x"])(),Object(r["f"])(g,{key:t.id,title:t.name,onClick:function(e){return l.leftClick(t.id)}},null,8,["title","onClick"])})),128))]})),_:2},1032,["title","name"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"])]),Object(r["i"])("div",f,[Object(r["i"])(j,{loading:l.state.loading,"onUpdate:loading":e[4]||(e[4]=function(t){return l.state.loading=t}),finished:l.state.finished,"finished-text":"没有更多了",onLoad:l.onLoad},{default:o((function(){return[(Object(r["x"])(!0),Object(r["f"])(r["a"],null,Object(r["D"])(l.showGoods,(function(t){return Object(r["x"])(),Object(r["f"])(O,{key:t.id,num:t.comments_count,price:t.price,desc:t.updated_at,title:t.title,thumb:t.cover_url},null,8,["num","price","desc","title","thumb"])})),128))]})),_:1},8,["loading","finished","onLoad"])])])]),Object(r["i"])(w)],64)})),s=n("2909"),d=n("7106"),b=n("feb1"),v=n("c1fb");function p(){return v["a"].get("/api/goods")}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sales",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return v["a"].get("/api/goods?category_id="+e+"&page="+n+"&"+t+"=1")}var y={name:"Category",setup:function(){var t=Object(r["C"])(2),e=Object(r["C"])(0),n=Object(r["C"])(1),o=Object(r["C"])([]),i=Object(r["B"])({loading:!1,finished:!1}),c=Object(r["C"])("1"),a=Object(r["C"])("salse"),u=Object(r["B"])({salse:{page:1,list:[]},price:{page:1,list:[]},comment:{page:1,list:[]}}),f=function(){g(e.value,c.value).then((function(t){console.log(t),u[e.value].list=t.goods.data})).catch((function(t){console.log(t)}))};Object(r["u"])((function(){p().then((function(t){console.log(t),o.value=t.categories})).catch((function(t){console.log(t)})),f()}));var l=Object(r["d"])((function(){return u[a.value].list})),d=function(t,n){console.log("排序方式 ".concat(t)),e.value=t,f(e.value,c.value)},b=function(t){console.log("标签ID ".concat(t)),c.value=t,f(e.value,c.value)},v=function(){console.log("触发下一页");var t=u[a.value].page+1;g(e.value,c.value,t).then((function(t){var n;console.log(t),(n=u[e.value].list).push.apply(n,Object(s["a"])(t.goods.data)),u[e.value].page++,i.loading=!1})).catch((function(t){console.log(t)})),l.value.length>=30&&(i.finished=!0)};return{leftActive:t,orderActive:e,categoryList:o,activeName:n,orderClick:d,leftClick:b,showGoods:l,state:i,onLoad:v}},components:{Navbar:d["a"],Tabbar:b["a"]}};n("95c8");y.render=l,y.__scopeId="data-v-187b98ae";e["default"]=y},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),c=n("e95a"),a=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,l,s,d,b,v=o(t),p="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,h=void 0!==y,m=f(v),O=0;if(h&&(y=r(y,g>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(e=a(v.length),n=new p(e);e>O;O++)b=h?y(v[O],O):v[O],u(n,O,b);else for(s=m.call(v),d=s.next,n=new p;!(l=d.call(s)).done;O++)b=h?i(s,y,[l.value,O],!0):l.value,u(n,O,b);return n.length=O,n}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},"95c8":function(t,e,n){"use strict";n("2ba9")},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(c){throw o(t),c}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),l=n("d039"),s=n("5135"),d=n("e8b5"),b=n("861d"),v=n("825a"),p=n("7b0b"),g=n("fc6a"),y=n("c04e"),h=n("5c6c"),m=n("7c73"),O=n("df75"),j=n("241c"),w=n("057f"),S=n("7418"),A=n("06cf"),x=n("9bf2"),C=n("d1e7"),k=n("9112"),E=n("6eeb"),N=n("5692"),_=n("f772"),P=n("d012"),I=n("90e3"),L=n("b622"),V=n("e538"),D=n("746f"),T=n("d44e"),U=n("69f3"),J=n("b727").forEach,B=_("hidden"),F="Symbol",$="prototype",G=L("toPrimitive"),M=U.set,Q=U.getterFor(F),W=Object[$],q=o.Symbol,z=i("JSON","stringify"),H=A.f,K=x.f,R=w.f,X=C.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),nt=N("wks"),rt=o.QObject,ot=!rt||!rt[$]||!rt[$].findChild,it=a&&l((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(W,e);r&&delete W[e],K(t,e,n),r&&t!==W&&K(W,e,r)}:K,ct=function(t,e){var n=Y[t]=m(q[$]);return M(n,{type:F,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,n){t===W&&ut(Z,e,n),v(t);var r=y(e,!0);return v(n),s(Y,r)?(n.enumerable?(s(t,B)&&t[B][r]&&(t[B][r]=!1),n=m(n,{enumerable:h(0,!1)})):(s(t,B)||K(t,B,h(1,{})),t[B][r]=!0),it(t,r,n)):K(t,r,n)},ft=function(t,e){v(t);var n=g(e),r=O(n).concat(vt(n));return J(r,(function(e){a&&!st.call(n,e)||ut(t,e,n[e])})),t},lt=function(t,e){return void 0===e?m(t):ft(m(t),e)},st=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===W&&s(Y,e)&&!s(Z,e))&&(!(n||!s(this,e)||!s(Y,e)||s(this,B)&&this[B][e])||n)},dt=function(t,e){var n=g(t),r=y(e,!0);if(n!==W||!s(Y,r)||s(Z,r)){var o=H(n,r);return!o||!s(Y,r)||s(n,B)&&n[B][r]||(o.enumerable=!0),o}},bt=function(t){var e=R(g(t)),n=[];return J(e,(function(t){s(Y,t)||s(P,t)||n.push(t)})),n},vt=function(t){var e=t===W,n=R(e?Z:g(t)),r=[];return J(n,(function(t){!s(Y,t)||e&&!s(W,t)||r.push(Y[t])})),r};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===W&&n.call(Z,t),s(this,B)&&s(this[B],e)&&(this[B][e]=!1),it(this,e,h(1,t))};return a&&ot&&it(W,e,{configurable:!0,set:n}),ct(e,t)},E(q[$],"toString",(function(){return Q(this).tag})),E(q,"withoutSetter",(function(t){return ct(I(t),t)})),C.f=st,x.f=ut,A.f=dt,j.f=w.f=bt,S.f=vt,V.f=function(t){return ct(L(t),t)},a&&(K(q[$],"description",{configurable:!0,get:function(){return Q(this).description}}),c||E(W,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),J(O(nt),(function(t){D(t)})),r({target:F,stat:!0,forced:!u},{for:function(t){var e=String(t);if(s(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(s(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:lt,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),z){var pt=!u||l((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,z.apply(null,o)}})}q[$][G]||k(q[$],G,q[$].valueOf),T(q,F),P[B]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:o})},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),c=n("50c4"),a=n("65f0"),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,l=4==t,s=6==t,d=7==t,b=5==t||s;return function(v,p,g,y){for(var h,m,O=i(v),j=o(O),w=r(p,g,3),S=c(j.length),A=0,x=y||a,C=e?x(v,S):n||d?x(v,0):void 0;S>A;A++)if((b||A in j)&&(h=j[A],m=w(h,A,O),t))if(e)C[A]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return A;case 2:u.call(C,h)}else switch(t){case 4:return!1;case 7:u.call(C,h)}return s?-1:f||l?l:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),c=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var s={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(s[e]=!0),e};f(d,l);var b=d.prototype=l.prototype;b.constructor=d;var v=b.toString,p="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=v.call(t);if(c(s,t))return"";var n=p?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),c=n("23cb"),a=n("50c4"),u=n("fc6a"),f=n("8418"),l=n("b622"),s=n("1dde"),d=s("slice"),b=l("species"),v=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,l,s=u(this),d=a(s.length),g=c(t,d),y=c(void 0===e?d:e,d);if(i(s)&&(n=s.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(s,g,y);for(r=new(void 0===n?Array:n)(p(y-g,0)),l=0;g<y;g++,l++)g in s&&f(r,l,s[g]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-e82c3d92.98362e87.js.map