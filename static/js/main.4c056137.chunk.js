(this.webpackJsonpmyastro=this.webpackJsonpmyastro||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),m=a(49),o=a(50),u=a(48),i=a(51),s=a(47),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6"},"MyAstro"))))},E=a(14),y=function(){return(new Date).getDay()},f=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=12;if(n.length<r){var c=t.slice(a,r-n.length);return e(t,0,n=[].concat(Object(E.a)(n),Object(E.a)(c)))}return n},g=(a(32),["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"]),v=["\u0baa\u0b95\u0bb2\u0bcd","\u0b87\u0bb0\u0bb5\u0bc1"],h=["\u0b9a\u0bc2\u0bb0\u0bbf","\u0b9a\u0bc1\u0b95\u0bcd","\u0baa\u0bc1\u0ba4","\u0b9a\u0ba8\u0bcd","\u0b9a\u0ba9\u0bbf","\u0b95\u0bc1\u0bb0\u0bc1","\u0b9a\u0bc6"],x=[0,3,6,2,5,1,4],p=function(e){var t=e.day,a=e.horraiArr,n=e.isToday,c=(new Date).getHours(),l=(y(),c>12?1:0),m=c>12?c%12:c,o=m<6?m+6:m-6;return v.map((function(e,c){return r.a.createElement(r.a.Fragment,{key:"p".concat(c)},r.a.createElement("div",{className:"flex-container"},r.a.createElement(N,{day:t,pd:e}),a[c].map((function(e,t){var a=!(!n||o!==t||l!==c);return r.a.createElement(F,{text:e,order:t+2,key:"H".concat(t),className:a?"active-horai":""})}))))}))},N=function(e){var t=e.day,a=e.pd;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item",style:{order:1}},t),r.a.createElement("div",{className:"flex-item",style:{order:2}},a))},F=function(e){var t=e.order,a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item ".concat(e.className),style:{order:t}},a))},T=function(){var e=function(e){return(e+6)%12},t=Array.from({length:12},(function(t,a){return 0===e(a)?"".concat(12,"-").concat(13):"".concat(e(a),"-").concat(e(a)+1)})).map((function(e,t){return r.a.createElement(F,{text:e,order:t+2,key:"T".concat(t)})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-container"},r.a.createElement(F,{className:"long-text",text:"\u0b95\u0bbf\u0bb4\u0bae\u0bc8",order:0}),r.a.createElement(F,{className:"short-text",text:"\u0b95\u0bbf",order:0}),r.a.createElement(F,{className:"long-text",text:"\u0b95\u0bbe\u0bb2\u0bae\u0bcd",order:1}),r.a.createElement(F,{className:"short-text",text:"\u0b95\u0bbe",order:1}),t))};var k=function(){var e=g.map((function(e,t){var a=f(h,x[t]),n=f(h,h.indexOf(a[a.length-1])+1),c=y();return r.a.createElement(r.a.Fragment,{key:"D".concat(t)},r.a.createElement(p,{day:e,horraiArr:[a,n],today:c,isToday:c===t}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),e)},D=function(e){var t=["Sunday","Monday","Tuesay","Wednesday","Thursday","Friday","Saturday"][e.dt.getDay()];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Today is: ",t))},w=(a(33),new Date),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(d,null),r.a.createElement(o.a,{maxWidth:"md",className:"container"},r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(u.a,{variant:"h6",component:"h6"},"Timings"),r.a.createElement(k,null),r.a.createElement(D,{dt:w}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4c056137.chunk.js.map