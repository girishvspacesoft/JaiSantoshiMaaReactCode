import{r as o,a as e}from"./react-69b9bddd.js";import{a as z,u as B}from"./react-redux-13959126.js";import{j as L,L as R,p as T}from"./index-aeb4570c.js";import"./Card.module-3bdbfb7f.js";import{a as w}from"./react-router-7dadf37a.js";import{O as D,Q as W,a as j,i as A,h as b,V as q,l as c}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const d={name:"",description:""},p={name:{invalid:!1,message:""}},ge=()=>{const[n,l]=o.useState(d),[m,u]=o.useState(p),[v,s]=o.useState(""),S=z(),N=B(L),g=w(),E=o.useCallback(()=>{g("/master/articles")},[g]),C=()=>{f(),E()},f=()=>{l(d),s(""),u(p)},h=a=>{const t=a.target.name,r=a.target.value;l(i=>({...i,[t]:r}))},H=a=>{a.preventDefault(),k(n)||S(T(n)).then(({payload:t={}})=>{const{message:r}=(t==null?void 0:t.data)||"";r?s(r):(s(""),l(d),E())}).catch(t=>{s(t.message)})},k=a=>{var i,x;const t={...p};(x=(i=a.name)==null?void 0:i.trim)!=null&&x.call(i)||(t.name={invalid:!0,message:"Article name is required"});let r=!1;for(const F in t)t[F].invalid===!0&&(r=!0);return r&&u(t),r};return e.createElement(e.Fragment,null,N&&e.createElement(R,null),e.createElement("h1",{className:"pageHead"},"Add an article"),e.createElement("div",{className:"inner-wrap"},v!==""&&e.createElement(D,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(W,{severity:"error"},v)),e.createElement(j,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:H},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(A,{fullWidth:!0,error:m.name.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Article name",value:n.name,error:m.name.invalid,onChange:h,name:"name",id:"name"}),m.name.invalid&&e.createElement(q,null,m.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(A,{fullWidth:!0},e.createElement(b,{size:"small",variant:"outlined",label:"Article description",value:n.abbreviation,onChange:h,name:"description",id:"description"})))),e.createElement("div",{className:"right"},e.createElement(c,{variant:"outlined",size:"medium",onClick:C},"Back"),e.createElement(c,{variant:"outlined",size:"medium",onClick:f,className:"ml6"},"Reset"),e.createElement(c,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{ge as default};
