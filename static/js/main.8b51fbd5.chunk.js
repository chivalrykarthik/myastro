(this.webpackJsonpmyastro=this.webpackJsonpmyastro||[]).push([[0],{52:function(e,t,a){e.exports=a(66)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(13),s=a(96),m=a(97),i=a(27),u=a.n(i),d=a(37),E=a(103),p=a(92),f=a(98),v=a(68),g=function(){var e=new Date,t=function(e){return e.toString().length<=1?"0"+e:e};return"".concat(e.getFullYear(),"-").concat(t(e.getMonth()+1),"-").concat(t(e.getDate()))},x=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.sunrise-sunset.org/json?lat=12.782370&lng=80.217590&date=".concat(g()));case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),console.log("Invalid resonse"+e.t0.message),e.abrupt("return",Promise.reject("Invalid reponse"));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.useState)("Loading ..."),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,a=t.results.sunrise,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Err:"+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(f.a,{display:"flex",flexGrow:1},r.a.createElement(v.a,{variant:"h6"},"MyAstro")),r.a.createElement(v.a,{variant:"h6"},"Sunrise GMT: ",a),r.a.createElement(v.a,{variant:"h6"},"Sunrise: ",function(e){if("Loading ..."===e)return e;var t=e.split(/[:\s]/),a=Object(o.a)(t,4),n=a[0],r=a[1],c=a[2],l=a[3],s=parseInt(r)+30,m=parseInt(n)+5;return r=s,s>=60&&(m++,r=s%60),r=r.toString().length<2?"0".concat(r):r,m>12&&(n=m%12),n=n.toString().length<2?"0".concat(n):n,"".concat(n,":").concat(r,":").concat(c," ").concat(l)}(a)))))},N=a(39),y=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=12;if(n.length<r){var c=t.slice(a,r-n.length);return e(t,0,n=[].concat(Object(N.a)(n),Object(N.a)(c)))}return n},b=["\u0b9e\u0bbe","\u0ba4\u0bbf","\u0b9a\u0bc6","\u0baa\u0bc1","\u0bb5\u0bbf","\u0bb5\u0bc6","\u0b9a"],F=["\u0baa\u0b95\u0bb2\u0bcd","\u0b87\u0bb0\u0bb5\u0bc1"],k=["\u0baa","\u0b87"],j=["\u0b9a\u0bc2\u0bb0\u0bbf","\u0b9a\u0bc1\u0b95\u0bcd","\u0baa\u0bc1\u0ba4","\u0b9a\u0ba8\u0bcd","\u0b9a\u0ba9\u0bbf","\u0b95\u0bc1\u0bb0\u0bc1","\u0b9a\u0bc6"],w={"\u0b9a\u0bc2\u0bb0\u0bbf":"\u0b9a\u0bc2","\u0b9a\u0bc1\u0b95\u0bcd":"\u0b9a\u0bc1","\u0baa\u0bc1\u0ba4":"\u0baa\u0bc1","\u0b9a\u0ba8\u0bcd":"\u0b9a\u0ba8\u0bcd","\u0b9a\u0ba9\u0bbf":"\u0b9a","\u0b95\u0bc1\u0bb0\u0bc1":"\u0b95\u0bc1","\u0b9a\u0bc6":"\u0b9a\u0bc6"},O=[0,3,6,2,5,1,4],S=["\u0b95\u0bb2\u0bcd\u0bb5\u0bbf","\u0b9a\u0bc1\u0baa \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd","\u0ba4\u0bbf\u0bb0\u0bc1\u0bae\u0ba3\u0bae\u0bcd","\u0b9a\u0bc0\u0bae\u0ba8\u0bcd\u0ba4\u0bae\u0bcd","\u0baa\u0bc6\u0ba3\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bc1","\u0baa\u0baf\u0ba3\u0bae\u0bcd","\u0bb5\u0ba3\u0bcd\u0b9f\u0bbf \u0bb5\u0bbe\u0b95\u0ba9\u0bae\u0bcd","\u0b86\u0b9f\u0bc8/\u0b86\u0baa\u0bb0\u0ba3\u0bae\u0bcd","\u0bb5\u0bc0\u0b9f\u0bc1","\u0ba8\u0bbf\u0bb2\u0bae\u0bcd","\u0bb5\u0bc7\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbf\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0baa\u0bcd\u0baa\u0ba4\u0bc1","\u0bae\u0bc7\u0bb2\u0ba4\u0bbf\u0b95\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bc8 \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd","\u0baa\u0ba4\u0bb5\u0bbf\u0baf\u0bc7\u0bb1\u0bcd\u0baa\u0ba4\u0bc1","\u0bb5\u0b99\u0bcd\u0b95\u0bbf\u0b95\u0bcd \u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bc1","\u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf\u0bae\u0bcd","\u0bae\u0bb0\u0b95\u0bcd\u0b95\u0ba9\u0bcd\u0bb1\u0bc1","\u0baa\u0ba3 \u0baa\u0bb0\u0bbf\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bae\u0bcd","\u0b95\u0b9f\u0ba9\u0bc8 \u0b85\u0b9f\u0bc8\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bc1","\u0b85\u0bb0\u0b9a\u0bc1 \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd/\u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd","\u0bb5\u0bb4\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd","\u0b9a\u0b95\u0bcb\u0ba4\u0bb0/\u0baa\u0b99\u0bcd\u0b95\u0bbe\u0bb3\u0bbf \u0baa\u0bbf\u0bb0\u0b9a\u0bcd\u0b9a\u0bbf\u0ba9\u0bc8\u0b95\u0bb3\u0bcd","\u0b9a\u0bca\u0ba4\u0bcd\u0ba4\u0bc1 \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd","\u0b89\u0baf\u0bbf\u0bb2\u0bcd"],C={"\u0b9a\u0bc2\u0bb0\u0bbf":{do:[18,19,11,22],dont:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,20,21],all:!1},"\u0b9a\u0bc1\u0b95\u0bcd":{do:[1,8,9,6,7,4,14,15,5,16],dont:[],all:!0},"\u0baa\u0bc1\u0ba4":{do:[0,1,5],dont:[],all:!0},"\u0b9a\u0ba8\u0bcd":{do:[2,3,4,12,10,1,13],dont:[],all:!0},"\u0b9a\u0ba9\u0bbf":{do:[17,15],dont:[],all:!1},"\u0b95\u0bc1\u0bb0\u0bc1":{do:[1,14,7,8,9],dont:[],all:!0},"\u0b9a\u0bc6":{do:[9,20,21,22],dont:[],all:!1}},D=(a(62),function(e){var t=e.day,a=e.horraiArr,n=e.isToday,c=e.find,l=(new Date).getHours(),o=l<6||l>=18?1:0,s=l>12?l%12:l,m=s<6?s+6:s-6;return F.map((function(e,l){return r.a.createElement(r.a.Fragment,{key:"p".concat(l)},r.a.createElement("div",{className:"flex-container"},r.a.createElement(I,{day:t,pd:e,className:"long-text"}),r.a.createElement(I,{day:t,pd:k[l],className:"short-text grow-2"}),a[l].map((function(e,t){var a=!(!n||m!==t||o!==l),s=C[e].do.includes(parseInt(c))?" hightlight":"";return r.a.createElement(r.a.Fragment,{key:"h".concat(t)},r.a.createElement(M,{text:e,order:t+2,key:"LH".concat(t),className:a?"active-horai long-text".concat(s):"long-text".concat(s)}),r.a.createElement(M,{text:w[e],order:t+2,key:"SH".concat(t),className:a?"active-horai short-text".concat(s):"short-text".concat(s)}))}))))}))}),I=function(e){var t=e.day,a=e.pd,n=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item ".concat(n),style:{order:1}},t),r.a.createElement("div",{className:"flex-item ".concat(n),style:{order:2}},a))},M=function(e){var t=e.order,a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-item ".concat(e.className),style:{order:t}},a))},T=function(){var e=function(e){return(e+6)%12},t=Array.from({length:12},(function(t,a){return 0===e(a)?"".concat(12,"-").concat(13):"".concat(e(a),"-").concat(e(a)+1)})).map((function(e,t){return r.a.createElement(M,{text:e,order:t+2,key:"T".concat(t)})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-container"},r.a.createElement(M,{className:"long-text",text:"\u0b95\u0bbf\u0bb4\u0bae\u0bc8",order:0}),r.a.createElement(M,{className:"short-text grow-2",text:"\u0b95\u0bbf",order:0}),r.a.createElement(M,{className:"long-text",text:"\u0b95\u0bbe\u0bb2\u0bae\u0bcd",order:1}),r.a.createElement(M,{className:"short-text",text:"\u0b95\u0bbe",order:1}),t))};var A=function(e){var t=e.find,a=b.map((function(e,a){var n=y(j,O[a]),c=y(j,j.indexOf(n[n.length-1])+1),l=(new Date).getDay();return r.a.createElement(r.a.Fragment,{key:"F".concat(a)},r.a.createElement(D,{day:e,horraiArr:[n,c],today:l,isToday:l===a,key:"D".concat(a),find:t}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),a)},G=(a(63),function(e){e.dt.getDay();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-container-col"},r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b9a\u0bc2\u0bb0\u0bbf\u0baf \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0b85\u0bb0\u0b9a\u0bc1 \u0b9a\u0bae\u0bcd\u0baa\u0ba8\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd, \u0bb5\u0bb4\u0b95\u0bcd\u0b95\u0bc1 \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bbe\u0ba9 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd,\u0bae\u0bc7\u0bb2\u0ba4\u0bbf\u0b95\u0bbe\u0bb0\u0bbf\u0b95\u0bb3\u0bc8 \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd, \u0b85\u0bb0\u0b9a\u0bc1 \u0b9a\u0bbe\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4 \u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf\u0b95\u0bb3\u0bcd, \u0b9a\u0bae\u0bc2\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bae\u0bbf\u0b95 \u0b89\u0baf\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4 \u0b87\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bc8 \u0b95\u0bbe\u0ba3\u0bc1\u0ba4\u0bb2\u0bcd \u0baa\u0bcb\u0ba9\u0bcd\u0bb1 \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0b95\u0bb3\u0bc8\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb2\u0bbe\u0bae\u0bcd, \u0b89\u0baf\u0bbf\u0bb2\u0bcd \u0b9a\u0bbe\u0b9a\u0ba9\u0bae\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bb2\u0bbe\u0bae\u0bcd"),r.a.createElement("p",{className:"txt-dont"},"\u0baa\u0bc1\u0ba4\u0bbf\u0ba4\u0bbe\u0b95 \u0b8e\u0ba8\u0bcd\u0ba4 \u0b85\u0bb2\u0bc1\u0bb5\u0bb2\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bcb \u0b89\u0b9f\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bc8\u0baf\u0bcb \u0b9a\u0bc6\u0baf\u0bcd\u0bb5\u0ba4\u0bc1 \u0ba8\u0bb2\u0bcd\u0bb2\u0ba4\u0bb2\u0bcd\u0bb2. \u0b9a\u0bc1\u0baa\u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0baf\u0bb5\u0bc1\u0bae\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0bb9\u0bcb\u0bb0\u0bc8 \u0b8f\u0bb1\u0bcd\u0bb1\u0ba4\u0bb2\u0bcd\u0bb2.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b9a\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb0 \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0b9a\u0bc1\u0baa \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0bb9\u0bcb\u0bb0\u0bc8\u0baf\u0bc8 \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bb2\u0bbe\u0bae\u0bcd. \u0bb5\u0bc0\u0b9f\u0bc1, \u0ba8\u0bbf\u0bb2\u0bae\u0bcd, \u0bb5\u0ba3\u0bcd\u0b9f\u0bbf \u0bb5\u0bbe\u0b95\u0ba9\u0bae\u0bcd, \u0b86\u0b9f\u0bc8 \u0b86\u0baa\u0bb0\u0ba3\u0bae\u0bcd \u0bb5\u0bbe\u0b99\u0bcd\u0b95 \u0bae\u0bbf\u0b95\u0bb5\u0bc1\u0bae\u0bcd \u0b89\u0b95\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1. \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bbe\u0b95 \u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bbe\u0ba9 \u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bc1\u0bae\u0bcd \u0ba8\u0ba9\u0bcd\u0bae\u0bc8 \u0b8f\u0bb1\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd. \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf\u0bae\u0bcd, \u0baa\u0baf\u0ba3\u0bae\u0bcd, \u0baa\u0ba3 \u0baa\u0bb0\u0bbf\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bae\u0bcd \u0baa\u0bcb\u0ba9\u0bcd\u0bb1\u0bb5\u0bb1\u0bcd\u0bb1\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b87\u0ba4\u0bc1 \u0b8f\u0bb1\u0bcd\u0bb1\u0ba4\u0bc1.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0baa\u0bc1\u0ba4\u0ba9\u0bcd \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0ba4\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bbe\u0ba9 \u0bb5\u0bc7\u0bb2\u0bc8 \u0ba4\u0bca\u0b9f\u0b99\u0bcd\u0b95\u0bc1\u0bb5\u0ba4\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b86\u0bb2\u0bcb\u0b9a\u0bbf\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b8f\u0bb1\u0bcd\u0bb1 \u0ba8\u0bc7\u0bb0\u0bae\u0bcd. \u0b9a\u0bc1\u0baa \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb2\u0bbe\u0bae\u0bcd. \u0ba8\u0bc7\u0bb0\u0bcd\u0bae\u0bc8\u0baf\u0bbe\u0ba9 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bb1\u0bcd\u0bb1\u0bbf\u0baa\u0bcd \u0baa\u0bc7\u0b9a\u0bb5\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0b9f\u0bbf\u0bb5\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd \u0b87\u0ba8\u0bcd\u0ba4 \u0ba8\u0bc7\u0bb0\u0bae\u0bcd \u0b89\u0b95\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1. \u0baa\u0baf\u0ba3\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bca\u0bb3\u0bcd\u0bb3\u0bb2\u0bbe\u0bae\u0bcd. \u0baa\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bc2\u0bb0\u0bcd\u0bae\u0bc8 \u0bb5\u0bb3\u0bb0\u0bcd\u0bb5\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0b87\u0ba8\u0bcd\u0ba4 \u0bb9\u0bcb\u0bb0\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bbe\u0bb2\u0bcd \u0b9a\u0bbf\u0bb1\u0baa\u0bcd\u0baa\u0bc1.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0bb0 \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0bb5\u0bb3\u0bb0\u0bcd\u0baa\u0bbf\u0bb1\u0bc8 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0bb0\u0ba9\u0bcd \u0bb9\u0bcb\u0bb0\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0ba8\u0bb2\u0bcd\u0bb2 \u0bb9\u0bcb\u0bb0\u0bc8\u0baf\u0bbe\u0b95\u0bb5\u0bc7 \u0b95\u0bb0\u0bc1\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1. \u0b87\u0ba8\u0bcd\u0ba4 \u0bb9\u0bcb\u0bb0\u0bc8\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0bae\u0ba3\u0bae\u0bcd, \u0b9a\u0bc0\u0bae\u0ba8\u0bcd\u0ba4\u0bae\u0bcd, \u0b95\u0bc1\u0bb4\u0ba8\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0b9f\u0bcd\u0b9f\u0bc8\u0baf\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0b95\u0bbe\u0ba4\u0bc1 \u0b95\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0ba4\u0bb2\u0bcd, \u0baa\u0bc6\u0ba3\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bc1, \u0baa\u0ba4\u0bb5\u0bbf\u0baf\u0bc7\u0bb1\u0bcd\u0baa\u0ba4\u0bc1, \u0bb5\u0bc7\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbf\u0ba3\u0bcd\u0ba3\u0baa\u0bcd\u0baa\u0bbf\u0baa\u0bcd\u0baa\u0ba4\u0bc1, \u0bb5\u0b99\u0bcd\u0b95\u0bbf\u0b95\u0bcd \u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bc1 \u0ba4\u0bc1\u0bb5\u0b99\u0bcd\u0b95\u0bc1\u0ba4\u0bb2\u0bcd \u0b86\u0b95\u0bbf\u0baf\u0bb5\u0bb1\u0bcd\u0bb1\u0bc8\u0b9a\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb2\u0bbe\u0bae\u0bcd. \u0b87\u0ba8\u0bcd\u0ba4 \u0bb9\u0bcb\u0bb0\u0bc8 \u0b95\u0bbe\u0bb2\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b8e\u0bb2\u0bcd\u0bb2\u0bbe \u0b9a\u0bc1\u0baa\u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb2\u0bbe\u0bae\u0bcd. \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bbe\u0b95 \u0baa\u0bc6\u0ba3\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1 \u0b95\u0bca\u0ba3\u0bcd\u0b9f \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9c\u0bc6\u0baf\u0bae\u0bbe\u0b95\u0bc1\u0bae\u0bcd. \u0bb5\u0bbf\u0baf\u0bbe\u0baa\u0bbe\u0bb0 \u0bb5\u0bbf\u0bb7\u0baf\u0bae\u0bbe\u0b95\u0bb5\u0bcb \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0baa\u0bc1\u0ba9\u0bbf\u0ba4 \u0baf\u0bbe\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bc8\u0baf\u0bbe\u0b95\u0bb5\u0bcb \u0baa\u0baf\u0ba3\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0b8f\u0bb1\u0bcd\u0bb1\u0ba4\u0bc1. \u0baa\u0bbf\u0bb1\u0bb0\u0bc8\u0b9a\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1\u0baa\u0bcd \u0baa\u0bc7\u0b9a\u0bb5\u0bc1\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb2\u0bbe\u0bae\u0bcd.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b9a\u0ba9\u0bbf \u0bb9\u0bcb\u0bb0\u0bc8 :"),r.a.createElement("p",{className:"txt-do"},"\u0b95\u0b9f\u0ba9\u0bc8 \u0b85\u0b9f\u0bc8\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0b8f\u0bb1\u0bcd\u0bb1 \u0bb9\u0bcb\u0bb0\u0bc8,\u0baa\u0bb4\u0bc8\u0baf \u0baa\u0bbe\u0b95\u0bcd\u0b95\u0bbf/\u0b95\u0ba3\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bc8 \u0ba4\u0bc0\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bc1, \u0b8a\u0bb4\u0bcd\u0bb5\u0bbf\u0ba9\u0bc8 (\u0baa\u0bc2\u0bb0\u0bcd\u0bb5 \u0b9c\u0bc6\u0ba9\u0bcd\u0bae\u0baa\u0bcd \u0baa\u0bbe\u0bb5\u0bae\u0bcd) \u0ba4\u0bc0\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bc1, \u0baa\u0bbe\u0ba4 \u0baf\u0bbe\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bc8, \u0ba8\u0b9f\u0bc8\u0baa\u0baf\u0ba3\u0bae\u0bcd \u0ba4\u0bc1\u0bb5\u0b99\u0bcd\u0b95\u0bc1\u0bb5\u0ba4\u0bc1, \u0bae\u0bb0\u0b95\u0bcd\u0b95\u0ba9\u0bcd\u0bb1\u0bc1 \u0ba8\u0b9f\u0bc1\u0ba4\u0bb2\u0bcd, \u0bb5\u0bbf\u0bb0\u0bc1\u0b9f\u0bcd\u0b9a\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0bae\u0bc8\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd, \u0b85\u0ba3\u0bc8\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bc1 \u0ba8\u0bbf\u0bb0\u0bcd\u0bae\u0bbe\u0ba3\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0ba3\u0bbf\u0b95\u0bb3\u0bc8 \u0ba4\u0bc1\u0bb5\u0b95\u0bcd\u0b95\u0bc1\u0bb5\u0ba4\u0bc1, \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd \u0b9a\u0bae\u0bcd\u0baa\u0ba8\u0bcd\u0ba4\u0bae\u0bbe\u0ba9 \u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0b8f\u0bb1\u0bcd\u0bb1 \u0bb9\u0bcb\u0bb0\u0bc8.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b95\u0bc1\u0bb0\u0bc1 \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc1 \u0b9a\u0bc1\u0baa \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bbf\u0b95\u0bb5\u0bc1\u0bae\u0bcd \u0b8f\u0bb1\u0bcd\u0bb1 \u0ba8\u0bc7\u0bb0\u0bae\u0bcd. \u0bb5\u0bbf\u0baf\u0bbe\u0baa\u0bbe\u0bb0\u0bae\u0bcd, \u0bb5\u0bbf\u0bb5\u0b9a\u0bbe\u0baf\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0ba8\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1. \u0b86\u0b9f\u0bc8 \u0b86\u0baa\u0bb0\u0ba3\u0baa\u0bcd \u0baa\u0bca\u0bb0\u0bc1\u0bb3\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bbe\u0b99\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd, \u0bb5\u0bc0\u0b9f\u0bc1 \u0bae\u0ba9\u0bc8 \u0bb5\u0bbe\u0b99\u0bcd\u0b95\u0bb5\u0bcb,\u0bb5\u0bbf\u0bb1\u0bcd\u0b95\u0bb5\u0bcb \u0b8f\u0bb1\u0bcd\u0bb1\u0ba4\u0bc1."),r.a.createElement("p",{className:"txt-dont"},"\u0b9a\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0ba8\u0bbf\u0baf\u0bbe\u0baf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0baa\u0bc1\u0bb1\u0bae\u0bcd\u0baa\u0bbe\u0ba9 \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8 \u0ba4\u0bb5\u0bbf\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd \u0ba8\u0bb2\u0bae\u0bcd.")),r.a.createElement("div",{className:"flex-col-item"},r.a.createElement("span",{className:"txt-description"},"\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd \u0bb9\u0bcb\u0bb0\u0bc8:"),r.a.createElement("p",{className:"txt-do"},"\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd \u0bb9\u0bcb\u0bb0\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb2\u0bae\u0bcd \u0bb5\u0bbe\u0b99\u0bcd\u0b95\u0bc1\u0bb5\u0ba4\u0bc1, \u0bb5\u0bbf\u0bb1\u0bcd\u0baa\u0ba4\u0bc1, \u0b85\u0b95\u0bcd\u0bb0\u0bbf\u0bae\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0baa\u0bcb\u0b9f\u0bc1\u0bb5\u0ba4\u0bc1, \u0b9a\u0b95\u0bcb\u0ba4\u0bb0/\u0baa\u0b99\u0bcd\u0b95\u0bbe\u0bb3\u0bbf \u0baa\u0bbf\u0bb0\u0b9a\u0bcd\u0b9a\u0bbf\u0ba9\u0bc8\u0b95\u0bb3\u0bcd, \u0b9a\u0bca\u0ba4\u0bcd\u0ba4\u0bc1 \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd, \u0b89\u0baf\u0bbf\u0bb2\u0bcd \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0bb5\u0ba4\u0bc1, \u0bb0\u0ba4\u0bcd\u0ba4 \u0ba4\u0bbe\u0ba9\u0bae\u0bcd, \u0b89\u0bb1\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bbe\u0ba9\u0bae\u0bcd, \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5 \u0b89\u0ba4\u0bb5\u0bbf\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0bb5\u0ba4\u0bc1 \u0b87\u0bb5\u0bb1\u0bcd\u0bb1\u0bc8\u0baf\u0bc6\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0bae\u0bc7\u0bb1\u0bcd\u0b95\u0bca\u0bb3\u0bcd\u0bb3\u0bb2\u0bbe\u0bae\u0bcd. \u0b86\u0baf\u0bc1\u0ba4\u0baa\u0bcd \u0baa\u0bbf\u0bb0\u0baf\u0bcb\u0b95\u0ba4\u0bcd\u0ba4\u0bc8 \u0ba4\u0bc1\u0bb5\u0b99\u0bcd\u0b95\u0bbf\u0ba9\u0bbe\u0bb2\u0bcd \u0b9a\u0b95\u0bcd\u0ba4\u0bbf \u0bb5\u0bbe\u0baf\u0bcd\u0ba8\u0bcd\u0ba4\u0ba4\u0bbe\u0b95 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd.\u0ba4\u0bc6\u0baf\u0bcd\u0bb5\u0bc0\u0b95\u0ba4\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bbe\u0ba9 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bcb, \u0b9a\u0ba3\u0bcd\u0b9f\u0bc8 \u0b9a\u0b9a\u0bcd\u0b9a\u0bb0\u0bb5\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0ba9 \u0bb5\u0bbf\u0bb7\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baf\u0bcb \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0baa\u0bc7\u0b9a\u0bb2\u0bbe\u0bae\u0bcd."),r.a.createElement("p",{className:"txt-dont"},"\u0ba8\u0bb2\u0bcd\u0bb2 \u0b95\u0bbe\u0bb0\u0bbf\u0baf\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0b89\u0b95\u0ba8\u0bcd\u0ba4 \u0ba8\u0bc7\u0bb0\u0bae\u0bb2\u0bcd\u0bb2."))))}),H=a(93),L=function(e){var t=e.onClick,a=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(H.a,{variant:"contained",color:"primary",onClick:t},a)))},J=a(94),B=a(100),K=a(99),P=a(101),W=a(95),Y=a(102);function q(){return Math.round(20*Math.random())-10}function z(){var e=50+q(),t=50+q();return{top:"".concat(e,"%"),left:"".concat(t,"%"),height:"50%",overflow:"auto",transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var Q=Object(J.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),R=function(e){var t=e.setFind,a=r.a.useState(""),c=Object(o.a)(a,2),l=c[0],s=c[1],m=S.map((function(e,t){return r.a.createElement(n.Fragment,{key:"F"+t},r.a.createElement(W.a,{value:e,control:r.a.createElement(K.a,{name:t.toString(),color:"primary",key:"K"+t}),label:e,key:"r".concat(t)}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{component:"fieldset"},r.a.createElement(P.a,{value:l,onChange:function(e){s(e.target.value),t(e.target.name)},key:"G2"},m)))};function U(e){var t=e.open,a=e.handleClose,c=e.setFind,l=Q(),s=Object(n.useState)(z),m=Object(o.a)(s,1)[0];return r.a.createElement("div",null,r.a.createElement(B.a,{open:t,onClose:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{style:m,className:l.paper},r.a.createElement("div",{style:{float:"right"}}),r.a.createElement(R,{setFind:c}))))}a(64);var V=function(e){var t=e.setFind,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"myastro-header"},r.a.createElement("div",{className:"myastro-header-title"},r.a.createElement(v.a,{variant:"h6",component:"h6"},"Timings")),r.a.createElement("div",{className:"myastro-header-btn"},r.a.createElement(L,{onClick:function(){s(!0)},text:"Choose"}),r.a.createElement(U,{open:l,handleClose:function(){s(!1)},setFind:t}))))},X=(a(65),new Date),Z=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(h,null),r.a.createElement(m.a,{maxWidth:"md",className:"container"},r.a.createElement("div",{style:{marginTop:20,padding:30}},r.a.createElement(V,{setFind:c}),r.a.createElement(A,{find:a}),r.a.createElement(G,{dt:X}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8b51fbd5.chunk.js.map