(this["webpackJsonplanars-test"]=this["webpackJsonplanars-test"]||[]).push([[0],{18:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(3),u=n.n(a),s=n(2),i=(n(18),n(4)),l="clicked",o="noClicked",d=function(t){return{type:"clickedStatus",payload:t}},f=function(t){return{type:"prevIdx",payload:t}},j={nums:[],numsPairs:[],clickedStatus:o,start:!1,prevIdx:null};var b=n(1),p=function(t){var e=t.num,n=t.idx,r=Object(c.useState)(""),a=Object(i.a)(r,2),u=a[0],j=a[1],p=Object(s.c)((function(t){return t.numsPairs})),m=Object(s.c)((function(t){return t.clickedStatus})),v=Object(s.c)((function(t){return t.start})),O=Object(s.c)((function(t){return t.prevIdx})),h=Object(s.b)();Object(c.useEffect)((function(){m===o&&(p.includes(e)&&v?j("enable"):!p.includes(e)&&v&&j("disable"))}),[m,v]);return Object(b.jsxs)("div",{onClick:v?function(){if(n===O)return!1;j("enable"),m===o&&h(d(l)),h({type:"nums/push",payload:e}),h(function(t){return{type:"numPairs/push",payload:t}}(e)),h(f(n))}:null,className:"game__card",children:[Object(b.jsx)("div",{className:"game__opacity ".concat(u)}),e]})},m=function(t){for(var e=2;e<t;e++)if(t%e===0)return!1;return t},v=function(t){return Math.floor(Math.random()*t)};var O=n(8);var h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(s.c)((function(t){return t.clickedStatus})),u=Object(s.b)();return Object(c.useEffect)((function(){r(function(t){var e=["push","unshift"];return t.reduce((function(t,n){var c=v(e.length);return t[e[c]](n),t}),[])}(function(t){return t.concat(t)}(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=[];function c(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r<e;r++){var a=v(t.length),u=t[a];if(n.includes(t[a]))return c(r),!1;n.push(u)}}return c(),n}(function(){return Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:50).fill(null).map((function(t,e){return m(e+2)})).filter((function(t){return t}))}()))))}),[]),Object(c.useEffect)((function(){Object(O.debounce)((function(){u({type:"start",payload:!0})}),5e3,{})()}),[]),Object(c.useEffect)((function(){a===l&&Object(O.debounce)((function(){u(d(o)),u({type:"nums/clear"}),u(f(null))}),2e3)()}),[a]),Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("span",{className:"game__title",children:"Mahjong-like game"}),Object(b.jsx)("div",{className:"game__field",children:n.map((function(t,e){return Object(b.jsx)(p,{num:t,idx:e},e)}))})]})},g=n(9),y=Object(g.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"prevIdx":var n=t.prevIdx;return n=e.payload,Object.assign(t,{prevIdx:n});case"start":var c=t.start;return c=!0,Object.assign(t,{start:c});case"nums/push":var r=t.nums,a=t.numsPairs;return a.includes(e.payload)||r.push(e.payload),Object.assign(t,{nums:r});case"numPairs/push":var u=t.numsPairs,s=t.nums,i=s.reduce((function(t,n){return n===e.payload&&t++,t}),0);return 2===i&&u.push(e.payload),Object.assign(t,{numsPairs:u});case"nums/clear":var l=t.nums;return l.length=0,Object.assign(t,{nums:l});case"clickedStatus":var o=t.clickedStatus;return o=e.payload,Object.assign(t,{clickedStatus:o});default:return t}}));u.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{store:y,children:Object(b.jsx)(h,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.42f5f071.chunk.js.map