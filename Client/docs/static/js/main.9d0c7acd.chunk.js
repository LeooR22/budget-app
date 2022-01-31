(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(27),r=n.n(a),s=n(6),o=n(2),i=(n(32),n(0)),j=function(){return Object(i.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(s.c,{to:"/",className:"btn btn-outline-primary",children:"Home"}),Object(i.jsx)(s.c,{to:"/dashboard",className:"btn btn-outline-primary",children:"Dashboard"})]})})},l=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(o.a,{})})]})},b=n(3),d=n(7),u=n.n(d),m=n(11),h=n.n(m),x=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){u.a.get("https://budget-app-challenge.herokuapp.com/api/records").then((function(e){e.data.records.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n})),a(e.data.records)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsxs)("div",{className:"container card mb-2",children:[Object(i.jsxs)("h5",{children:["concept: ",e.concept]}),Object(i.jsxs)("h5",{children:["amount: ",e.amount]}),Object(i.jsxs)("h5",{children:["date: ",h()(e.date).format("Do MMM YY")]}),Object(i.jsxs)("h5",{children:["type: ",e.type]})]},e._id)}))})},p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"home"}),Object(i.jsx)(x,{})]})},O=function(e){var t=e.value,n=Object(c.useState)([]),a=Object(b.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e,n;u.a.get("https://budget-app-challenge.herokuapp.com/api/records/".concat((e="typeq",n=t,"?"+e+"[]="+(n=n.map(encodeURIComponent)).join("&"+e+"[]=")))).then((function(e){e.data.records.sort((function(e,t){var n=new Date(e.date);return new Date(t.date)-n})),console.log(e.data.records),s(e.data.records)})).catch((function(e){console.log(e)}))}),[t]),Object(i.jsx)("div",{children:r.map((function(e){return Object(i.jsxs)("div",{className:"container card mb-2",children:[Object(i.jsxs)("h5",{children:["concept: ",e.concept]}),Object(i.jsxs)("h5",{children:["amount: ",e.amount]}),Object(i.jsxs)("h5",{children:["date: ",h()(e.date).format("Do MMM YY")]}),Object(i.jsxs)("h5",{children:["type: ",e.type]})]},e._id)}))})},f=function(){var e=Object(c.useState)(["income","expense"]),t=Object(b.a)(e,2),n=t[0],a=t[1];return console.log(n),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"d-flex justify-content-center mb-4",children:[Object(i.jsx)("button",{className:"btn btn-warning",value:n,onClick:function(){a(["income","expense"])},children:"All"}),Object(i.jsx)("button",{className:"btn btn-warning",value:n,onClick:function(){a(["expense"])},children:"Expenses"}),Object(i.jsx)("button",{className:"btn btn-warning",value:n,onClick:function(){a(["income"])},children:"Incomes"})]}),Object(i.jsx)("hr",{}),Object(i.jsx)(O,{value:n})]})},v=n(12),g=n(16),y=n(8),N=n.n(y),k=function(e,t,n,c,a,r){return t.trim()?n.trim()?c.trim()?(N.a.fire({title:"Success",text:"\xa1Record added!",icon:"success"}),function(e,t,n,c){console.log(e),u.a.post("http://localhost:8080/api/records/",{concept:e,amount:t,date:n,type:c}).then((function(){console.log("success")}))}(t,n,c,a),void r()):(e.target[2].focus(),N.a.fire({title:"Error",text:"Empty date field",icon:"error"})):(e.target[1].focus(),N.a.fire({title:"Error",text:"Empty amount field",icon:"error"})):(e.target[0].focus(),N.a.fire({title:"Error",text:"Empty concept field",icon:"error"}))},E=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(b.a)(t,2),a=n[0],r=n[1],s=function(e){var t=e.target,n=t.name,c=t.value,a=t.checked,s=t.type;r((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(v.a)({},n,"checkbox"===s?a:c))}))};return[a,s,function(){r(e)}]}({concept:"",amount:"",date:"",type:"income"}),t=Object(b.a)(e,3),n=t[0],a=t[1],r=t[2],s=n.concept,o=n.amount,j=n.date,l=n.type;return Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(i.jsx)("div",{}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(e,s,o,j,l,r)},className:"w-50 ",children:[Object(i.jsx)("input",{type:"text",placeholder:"Concept",value:s,onChange:a,className:"form-control mb-2",name:"concept"}),Object(i.jsx)("input",{type:"number",placeholder:"Amount",value:o,onChange:a,className:"form-control mb-2",name:"amount"}),Object(i.jsx)("input",{type:"date",placeholder:"Date",value:j,onChange:a,className:"form-control mb-2",name:"date"}),Object(i.jsxs)("select",{name:"type",value:l,onChange:a,className:"form-control mb-2",children:[Object(i.jsx)("option",{value:"income",children:"Income"}),Object(i.jsx)("option",{value:"expense",children:"Expense"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Create Record"})]})]})},w=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"dashboard"}),Object(i.jsx)("h2",{className:"d-flex justify-content-center mb-4",children:"Register"}),Object(i.jsx)(E,{}),Object(i.jsx)(f,{})]})},C=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"404"}),Object(i.jsx)(s.b,{to:"/",className:"btn btn-outline-primary",children:"Home"})]})};r.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(o.d,{children:Object(i.jsxs)(o.b,{path:"/",element:Object(i.jsx)(l,{}),children:[Object(i.jsx)(o.b,{index:!0,element:Object(i.jsx)(p,{})}),Object(i.jsx)(o.b,{path:"dashboard",element:Object(i.jsx)(w,{})}),Object(i.jsx)(o.b,{path:"*",element:Object(i.jsx)(C,{})})]})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.9d0c7acd.chunk.js.map