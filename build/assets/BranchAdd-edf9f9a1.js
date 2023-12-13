import{r as m,a as e}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{C as w,G as Q,L as V,H as X}from"./index-aeb4570c.js";import{a as G,u as M}from"./react-redux-13959126.js";import{a as _}from"./react-router-7dadf37a.js";import{O as j,Q as J,a as K,i as o,h as c,V as u,A as P,l as h}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const g={branchCode:"",abbreviation:"",name:"",description:"",place:"",printer:""},E={branchCode:{invalid:!1,message:""},abbreviation:{invalid:!1,message:""},name:{invalid:!1,message:""},place:{invalid:!1,message:""},printer:{invalid:!1,message:""}},ze=()=>{const[n,d]=m.useState(g),[F,H]=m.useState(g),[r,f]=m.useState(E),[C,s]=m.useState(""),N=G(),S=_(),W=M(w),B=m.useCallback(()=>{S("/master/branches")},[S]);m.useEffect(()=>{N(Q()).then(({payload:t={}})=>{const{message:a}=(t==null?void 0:t.data)||{};a?s(a):H(t==null?void 0:t.data)}).catch(t=>{s(t.message)})},[]);const k=()=>{d(g),s(""),f(E)},A=()=>{B()},p=t=>{const a=t.target.name,i=t.target.value;d(l=>({...l,[a]:i}))},T=(t,a)=>{d(i=>({...i,place:a}))},q=(t,a)=>{d(i=>({...i,printer:a}))},I=t=>{var a;t.preventDefault(),O(n)||N(X({...n,place:(a=n.place)==null?void 0:a._id})).then(({payload:i={}})=>{const{message:l}=(i==null?void 0:i.data)||{};l?s(l):(s(""),d(g),B())}).catch(i=>{s(i.message)})},O=t=>{var l,x,v,z,b,L;const a={...E};(x=(l=t.branchCode)==null?void 0:l.trim)!=null&&x.call(l)||(a.branchCode={invalid:!0,message:"Branch code is required"}),(z=(v=t.abbreviation)==null?void 0:v.trim)!=null&&z.call(v)||(a.abbreviation={invalid:!0,message:"Abbreviation is required"}),(L=(b=t.name)==null?void 0:b.trim)!=null&&L.call(b)||(a.name={invalid:!0,message:"Branch name is required"}),t.place||(a.place={invalid:!0,message:"Place is required"}),t.printer||(a.printer={invalid:!0,message:"Printer is required"});let i=!1;for(const R in a)a[R].invalid===!0&&(i=!0);return i&&f(a),i};return e.createElement(e.Fragment,null,W&&e.createElement(V,null),e.createElement("h1",{className:"pageHead"},"Add a branch"),C!==""&&e.createElement(j,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(J,{severity:"error"},C)),e.createElement("div",{className:"inner-wrap"},e.createElement(K,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:I},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.branchCode.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Branch code",value:n.branchCode,onChange:p,name:"branchCode",id:"branchCode",error:r.branchCode.invalid}),r.branchCode.invalid&&e.createElement(u,null,r.branchCode.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.abbreviation.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Abbreviation",error:r.abbreviation.invalid,value:n.abbreviation,onChange:p,name:"abbreviation",id:"abbreviation"}),r.abbreviation.invalid&&e.createElement(u,null,r.abbreviation.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,error:r.name.invalid},e.createElement(c,{size:"small",variant:"outlined",label:"Name",error:r.name.invalid,value:n.name,onChange:p,name:"name",id:"name"}),r.name.invalid&&e.createElement(u,null,r.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0},e.createElement(c,{size:"small",variant:"outlined",label:"Description",value:n.description,onChange:p,name:"description",id:"description"}))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,size:"small",error:r.place.invalid},e.createElement(P,{disablePortal:!0,size:"small",name:"place",options:F,value:n.place||null,onChange:(t,a)=>T(t,a),openOnFocus:!0,getOptionLabel:t=>t.name,renderInput:t=>e.createElement(c,{...t,label:"Place",error:r.place.invalid,fullWidth:!0})}),r.place.invalid&&e.createElement(u,null,r.place.message))),e.createElement("div",{className:"grid-item"},e.createElement(o,{fullWidth:!0,size:"small",error:r.printer.invalid},e.createElement(P,{autoSelect:!0,size:"small",name:"accountType",options:["Epson LQ-300+","Epson LX-300+","Epson LX-300+II","TVS MPS 250 Champion"],value:n.printer||null,onChange:(t,a)=>q(t,a),openOnFocus:!0,getOptionLabel:t=>t,renderInput:t=>e.createElement(c,{...t,label:"Printer",error:r.printer.invalid,fullWidth:!0})}),r.printer.invalid&&e.createElement(u,null,r.printer.message)))),e.createElement("div",{className:"right"},e.createElement(h,{variant:"outlined",size:"medium",onClick:A},"Back"),e.createElement(h,{variant:"outlined",size:"medium",onClick:k,className:"ml6"},"Reset"),e.createElement(h,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{ze as default};
