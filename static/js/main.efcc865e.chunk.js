(this.webpackJsonpmyastro=this.webpackJsonpmyastro||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(49),m=a(50),s=a(48),i=a(51),u=a(47),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(s.a,{variant:"h6"},"MyAstro"))))},E=a(14),y=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=12;if(n.length<r){var c=t.slice(a,r-n.length);return e(t,0,n=[].concat(Object(E.a)(n),Object(E.a)(c)))}return n},g=(a(32),["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"]),f=["\u0baa\u0b95\u0bb2\u0bcd","\u0b87\u0bb0\u0bb5\u0bc1"],x=["\u0baa","\u0b87"],h=["\u0b9a\u0bc2\u0bb0\u0bbf","\u0b9a\u0bc1\u0b95\u0bcd","\u0baa\u0bc1\u0ba4","\u0b9a\u0ba8\u0bcd","\u0b9a\u0ba9\u0bbf","\u0b95\u0bc1\u0bb0\u0bc1","\u0b9a\u0bc6"],v={"\u0b9a\u0bc2\u0bb0\u0bbf":"\u0b9a\u0bc2","\u0b9a\u0bc1\u0b95\u0bcd":"\u0b9a\u0bc1","\u0baa\u0bc1\u0ba4":"\u0baa\u0bc1","\u0b9a\u0ba8\u0bcd":"\u0b9a\u0ba8\u0bcd","\u0b9a\u0ba9\u0bbf":"\u0b9a","\u0b95\u0bc1\u0bb0\u0bc1":"\u0b95\u0bc1","\u0b9a\u0bc6":"\u0b9a\u0bc6"},p=[0,3,6,2,5,1,4],N=function(e){var t=e.day,a=e.horraiArr,n=e.isToday,c=(new Date).getHours(),l=c<6||c>=18?1:0,o=c>12?c%12:c,m=o<6?o+6:o-6;return f.map((function(e,c){return r.a.createElement(r.a.Fragment,{key:"p".concat(c)},r.a.createElement("div",{className:"flex-container"},r.a.createElement(F,{day:t,pd:e,className:"long-text"}),r.a.createElement(F,{day:t,pd:x[c],className:"short-text grow-2"}),a[c].map((function(e,t){var a=!(!n||m!==t||l!==c);return r.a.createElement(r.a.Fragment,{key:"h".concat(t)},r.a.createElement(k,{text:e,order:t+2,key:"LH".concat(t),className:a?"active-horai long-text":"long-text"}),r.a.createElement(k,{text:v[e],order:t+2,key:"SH".concat(t),className:a?"active-horai short-text":"short-text"}))}))))}))},F=function(e){var t=e.day,a=e.pd,n=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item ".concat(n),style:{order:1}},t),r.a.createElement("div",{className:"flex-item ".concat(n),style:{order:2}},a))},k=function(e){var t=e.order,a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item ".concat(e.className),style:{order:t}},a))},T=function(){var e=function(e){return(e+6)%12},t=Array.from({length:12},(function(t,a){return 0===e(a)?"".concat(12,"-").concat(13):"".concat(e(a),"-").concat(e(a)+1)})).map((function(e,t){return r.a.createElement(k,{text:e,order:t+2,key:"T".concat(t)})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-container"},r.a.createElement(k,{className:"long-text",text:"\u0b95\u0bbf\u0bb4\u0bae\u0bc8",order:0}),r.a.createElement(k,{className:"short-text grow-2",text:"\u0b95\u0bbf",order:0}),r.a.createElement(k,{className:"long-text",text:"\u0b95\u0bbe\u0bb2\u0bae\u0bcd",order:1}),r.a.createElement(k,{className:"short-text",text:"\u0b95\u0bbe",order:1}),t))};var w=function(){var e=g.map((function(e,t){var a=y(h,p[t]),n=y(h,h.indexOf(a[a.length-1])+1),c=(new Date).getDay();return r.a.createElement(r.a.Fragment,{key:"F".concat(t)},r.a.createElement(N,{day:e,horraiArr:[a,n],today:c,isToday:c===t,key:"D".concat(t)}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),e)},D=function(e){var t=["Sunday","Monday","Tuesay","Wednesday","Thursday","Friday","Saturday"][e.dt.getDay()];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Today is: ",t))},b=(a(33),new Date),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(d,null),r.a.createElement(m.a,{maxWidth:"md",className:"container"},r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(s.a,{variant:"h6",component:"h6"},"Timings"),r.a.createElement(w,null),r.a.createElement(D,{dt:b}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.efcc865e.chunk.js.map