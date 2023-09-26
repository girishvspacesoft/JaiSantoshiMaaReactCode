import{r as m,a as e}from"./react-bfabd40c.js";import"./Card.module-3bdbfb7f.js";import{B as w,F as Q,L as V,G as X}from"./index-4082e4b8.js";import{a as G,u as M}from"./react-redux-45d870ba.js";import{a as _}from"./react-router-622b2d59.js";import{O as j,Q as J,a as K,i as o,h as c,V as u,A as F,l as h}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./utils-c03c978f.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";const g={branchCode:"",abbreviation:"",name:"",description:"",place:"",printer:""},E={branchCode:{invalid:!1,message:""},abbreviation:{invalid:!1,message:""},name:{invalid:!1,message:""},place:{invalid:!1,message:""},printer:{invalid:!1,message:""}},ze=()=>{const[n,d]=m.useState(g),[P,W]=m.useState(g),[r,f]=m.useState(E),[C,s]=m.useState(""),B=G(),N=_(),k=M(w),S=m.useCallback(()=>{N("/master/branches")},[N]);m.useEffect(()=>{B(Q()).then(({payload:t={}})=>{const{message:a}=(t==null?void 0:t.data)||{};a?s(a):W(t==null?void 0:t.data)}).catch(t=>{s(t.message)})},[]);const A=()=>{d(g),s(""),f(E)},H=()=>{S()},p=t=>{const a=t.target.name,i=t.target.value;d(l=>({...l,[a]:i}))},T=(t,a)=>{d(i=>({...i,place:a}))},q=(t,a)=>{d(i=>({...i,printer:a}))},I=t=>{var a;t.preventDefault(),O(n)||B(X({...n,place:(a=n.place)==null?void 0:a._id})).then(({payload:i={}})=>{const{message:l}=(i==null?void 0:i.data)||{};l?s(l):(s(""),d(g),S())}).catch(i=>{s(i.message)})},O=t=>{var l,x,v,z,b,L;const a={...E};(x=(l=t.branchCode)==null?void 0:l.trim)!=null&&x.call(l)||(a.branchCode={invalid:!0,message:"Branch code is required"}),(z=(v=t.abbreviation)==null?void 0:v.trim)!=null&&z.call(v)||(a.abbreviation={invalid:!0,message:"Abbreviation is required"}),(L=(b=t.name)==null?void 0:b.trim)!=null&&L.call(b)||(a.name={invalid:!0,message:"Branch name is required"}),t.place||(a.place={invalid:!0,message:"Place is required"}),t.printer||(a.printer={invalid:!0,message:"Printer is required"});let i=!1;for(const R in a)a[R].invalid===!0&&(i=!0);return i&&f(a),i};return e.createElement(e.Fragment,null,k&&e.createElement(V,null),e.createElement("h1",{className:"pageHead"},"Add a branch"),C!==""&&e.createElement(j,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(J,{severity:"error"},C)),e.createElement("div",{className:"inner-wrap"},e.createElement(K,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:I},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.branchCode.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Branch code",value:n.branchCode,onChange:p,name:"branchCode",id:"branchCode",error:r.branchCode.invalid}),r.branchCode.invalid&&e.createElement(u,null,r.branchCode.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.abbreviation.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Abbreviation",error:r.abbreviation.invalid,value:n.abbreviation,onChange:p,name:"abbreviation",id:"abbreviation"}),r.abbreviation.invalid&&e.createElement(u,null,r.abbreviation.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.name.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Name",error:r.name.invalid,value:n.name,onChange:p,name:"name",id:"name"}),r.name.invalid&&e.createElement(u,null,r.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0},e.createElement(c,{size:"small",variant:"outlined",label:"Description",value:n.description,onChange:p,name:"description",id:"description"}))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,size:"small",error:r.place.invalid},e.createElement(F,{disablePortal:!0,size:"small",name:"place",options:P,value:n.place||null,onChange:(t,a)=>T(t,a),openOnFocus:!0,getOptionLabel:t=>t.name,renderInput:t=>e.createElement(c,{...t,label:"Place",error:r.place.invalid,fullWidth:!0})}),r.place.invalid&&e.createElement(u,null,r.place.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,size:"small",error:r.printer.invalid},e.createElement(F,{autoSelect:!0,size:"small",name:"accountType",options:["Epson LQ-300+","Epson LX-300+","Epson LX-300+II","TVS MPS 250 Champion"],value:n.printer||null,onChange:(t,a)=>q(t,a),openOnFocus:!0,getOptionLabel:t=>t,renderInput:t=>e.createElement(c,{...t,label:"Printer",error:r.printer.invalid,fullWidth:!0})}),r.printer.invalid&&e.createElement(u,null,r.printer.message)))),e.createElement("div",{className:"right"},e.createElement(h,{variant:"outlined",size:"medium",onClick:H},"Back"),e.createElement(h,{variant:"outlined",size:"medium",onClick:A,className:"ml6"},"Reset"),e.createElement(h,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{ze as default};