(this.webpackJsonpdiy_computer=this.webpackJsonpdiy_computer||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},79:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(38),c=n.n(i),r=(n(46),n(47),n(17)),s=n(18),o=n(20),l=n(19),u=(n(48),n(1));function j(e){var t=e.Name;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"itemName",children:"\u7528\u6237\u540d:"}),Object(u.jsx)("div",{className:"inputDiv",children:Object(u.jsx)("input",{type:"text",value:t,onChange:e.userNameChange})})]})}function m(e){var t=e.Pas;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"itemName",children:"\u5bc6\u7801:"}),Object(u.jsx)("div",{className:"inputDiv",children:Object(u.jsx)("input",{type:"password",value:t,onChange:e.pasChange})})]})}a.Component,n(50);var h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).jumpPage=function(e){console.log(e),a.props.history.push({pathname:"/priceChoose",state:{name:e}})},a.state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"pageButton",children:Object(u.jsxs)("div",{className:"buttonSet",children:[Object(u.jsx)("div",{className:"Choicebtn JShine",onClick:this.jumpPage.bind(this,"amd"),children:"AMD"}),Object(u.jsx)("div",{className:"Choicebtn blue",onClick:this.jumpPage.bind(this,"intel"),children:"\u82f1\u7279\u5c14"})]})})}}]),n}(a.Component),d=n(25),b=(n(51),n(95)),p=n(92),f=n(93),v=b.a.Panel,O="";function x(e,t){console.log(e),O.props.history.push({pathname:"/detailedConfiguration",state:{info:e}}),sessionStorage.setItem("value",t)}function g(e){var t=[],n=[];"amd"===e.Type?(t=AMDPriceData,n=AMDProfileSheet):(t=IntelPriceData,n=IntelProfileSheet);var a=t.map((function(t,a){return Object(u.jsx)(v,{title:t.name,children:Object(u.jsx)("div",{className:"content",children:n.map((function(n,a){if(n.name===t.name){var i=n.configuration;if(0===i.length)return Object(u.jsx)("p",{className:"noneItem",children:"\u6682\u65e0\u6b64\u4ef7\u4f4d\u7684\u914d\u7f6e"},a);for(var c in i)return Object(u.jsxs)("div",{className:"item",onClick:x.bind(this,i[c],e.Value),children:[" ",i[c].configurationName]},i[c].configurationName);return""}return""}))})},t.name)}));return Object(u.jsx)(b.a,{scrollable:!0,value:e.Value,onChange:e.SetValue,direction:"vertical",className:"custom-height",children:a})}var N=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).setValue=function(e){a.setState({value:e})},a.state={value:0,type:e.location.state.name},O=Object(d.a)(a),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=sessionStorage.getItem("value");e=Number(e),this.setValue(e)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"pages",children:[Object(u.jsx)(p.a,{left:Object(u.jsx)(f.a,{type:"arrow-left",theme:"primary",onClick:function(){window.history.back(),sessionStorage.removeItem("value")}}),title:"\u4ef7\u4f4d\u9009\u62e9"}),Object(u.jsx)("div",{className:"panels",children:Object(u.jsx)(g,{Type:this.state.type,Value:this.state.value,SetValue:this.setValue})})]})}}]),n}(a.Component),C=(n(79),n(94));function y(e){var t=e.Info,n=t.detailedConfiguration,a=[];for(var i in n)a.push(n[i]);var c=a.map((function(e,t){var n="".concat(e.name," : ").concat(e.productName),a=e.price,i=e.link;return console.log(i),Object(u.jsx)(C.a,{hasArrow:!0,title:n,description:a,onClick:function(){window.open(i)}},e.name)}));return Object(u.jsxs)(u.Fragment,{children:[c,Object(u.jsx)(C.a,{title:"\u5408\u8ba1:".concat(t.aggregate)}),Object(u.jsx)(C.a,{title:"\u66f4\u65b0\u65e5\u671f:".concat(t.creationTime)})]})}var k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={info:e.location.state.info},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{left:Object(u.jsx)(f.a,{type:"arrow-left",theme:"primary",onClick:function(){return window.history.back()}}),title:"\u8be6\u7ec6\u6e05\u5355"}),Object(u.jsx)(y,{Info:this.state.info})]})}}]),n}(a.Component),w=n(40),P=n(6);var S=function(){return Object(u.jsxs)(w.a,{children:[Object(u.jsx)(P.a,{path:"/",component:h,exact:!0}),Object(u.jsx)(P.a,{path:"/detailedConfiguration",component:k}),Object(u.jsx)(P.a,{path:"/priceChoose",component:N})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},D=n(96);n(84);function V(e){return console.log(4546556),e.firstName+" "+e.lastName}var F;F={firstName:"Harper",lastName:"Perez"},F&&V(F);c.a.render(Object(u.jsx)(D.a,{primaryColor:"#0081ff",children:Object(u.jsx)(S,{})}),document.getElementById("root")),I()}},[[90,1,2]]]);
//# sourceMappingURL=main.8e57547e.chunk.js.map