(function(t){function n(n){for(var r,u,c=n[0],i=n[1],a=n[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(n);while(p.length)p.shift()();return s.push.apply(s,a||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],r=!0,c=1;c<e.length;c++){var i=e[c];0!==o[i]&&(r=!1)}r&&(s.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={app:0},s=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var l=i;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},5338:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=e("5f5b"),s=(e("f9e3"),e("2dd8"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t.index<10?e("Score",{attrs:{correctAns:t.correctAns,totalAns:t.totalAns}}):t._e(),t.questions.length>0&&t.index<10?e("Body",{attrs:{question:t.questions[t.index],nextQuestion:t.nextQuestion,countScore:t.countScore}}):t._e(),t.index>=10?e("div",[e("p",[t._v("Good Job!")]),e("p",[t._v("You got "+t._s(t.correctAns)+" out of "+t._s(t.totalAns)+" questions right")]),e("b-button",{on:{click:t.reset}},[t._v("Retry")])],1):t._e()],1)}),u=[],c=(e("d3b7"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("h1",{domProps:{innerHTML:t._s(t.question.question)}}),e("b-button",{class:{selected:t.answer},attrs:{variant:"success"},on:{click:function(n){t.answer=!0}}},[t._v("True")]),e("b-button",{class:{selected:!t.answer&&null!==t.answer},attrs:{variant:"danger"},on:{click:function(n){t.answer=!1}}},[t._v("False")]),e("b-button",{attrs:{disabled:null===t.answer,variant:"dark"},on:{click:function(n){t.nextQuestion(),t.evaluateAnswer()}}},[t._v("Submit")])],1)}),i=[],a={props:{question:Object,nextQuestion:Function,countScore:Function},data:function(){return{questionText:"",answer:null}},watch:{question:{handler:function(){this.answer=null}}},methods:{evaluateAnswer:function(){var t=!1,n=JSON.parse(this.question.correct_answer.toLowerCase());this.answer===n&&(t=!0),this.countScore(t)}}},l=a,f=(e("6def"),e("2877")),p=Object(f["a"])(l,c,i,!1,null,"05f84c70",null),d=p.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Total: "+t._s(t.totalAns))]),e("h1",[t._v("Correct: "+t._s(t.correctAns))])])},v=[],b={props:["totalAns","correctAns"]},_=b,w=Object(f["a"])(_,h,v,!1,null,null,null),x=w.exports,y={name:"App",components:{Body:d,Score:x},data:function(){return{questions:[],index:0,correctAns:0,totalAns:0}},methods:{nextQuestion:function(){this.index++},countScore:function(t){t&&this.correctAns++,this.totalAns++},reset:function(){this.index=0,this.totalAns=0,this.correctAns=0}},mounted:function(){var t=this;fetch("https://opentdb.com/api.php?amount=10&type=boolean").then((function(t){return t.json()})).then((function(n){t.questions=n.results}))}},m=y,A=(e("034f"),Object(f["a"])(m,s,u,!1,null,null,null)),g=A.exports;r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(g)}}).$mount("#app")},"6def":function(t,n,e){"use strict";var r=e("5338"),o=e.n(r);o.a},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.7692d3ed.js.map