import{r as m,a as t}from"./react-bfabd40c.js";import{a as B,u as q}from"./react-redux-45d870ba.js";import{am as I,ar as R,L as w,al as W,as as A}from"./index-4082e4b8.js";import"./Card.module-3bdbfb7f.js";import{a as D,b as O}from"./react-router-622b2d59.js";import{O as P,Q as j,a as G,i as b,h as N,V as Q,l as o}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-6cfbf744.js";import"./use-sync-external-store-18921cc2.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./utils-c03c978f.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";const x={type:"",tyreQuantity:""},u={type:{invalid:!1,message:""},tyreQuantity:{invalid:!1,message:""}},Ne=()=>{const[c,l]=m.useState(x),[S,p]=m.useState(x),[i,d]=m.useState(u),[v,n]=m.useState(""),g=B(),h=D(),V=O(),{vehicleTypeId:E}=V.state,C=q(I),y=m.useCallback(()=>{h("/master/vehicleTypes")},[h]);m.useEffect(()=>{g(R(E)).then(({payload:r={}})=>{const{message:e}=(r==null?void 0:r.data)||{};e?n(e):(n(""),l(r==null?void 0:r.data),p(r==null?void 0:r.data))}).catch(r=>{n(r.message)})},[E]);const F=()=>{l(S),n(""),d(u)},H=()=>{y()},f=r=>{const e=r.target.name,a=r.target.value;l(s=>({...s,[e]:a}))},k=r=>{r.preventDefault(),L(c)||g(A(c)).then(({payload:e={}})=>{const{message:a}=(e==null?void 0:e.data)||{};a?n(a):(n(""),l(e==null?void 0:e.data),p(e==null?void 0:e.data),y())}).catch(e=>{n(e.message)})},L=r=>{var s,T;const e={...u};(T=(s=r.type)==null?void 0:s.trim)!=null&&T.call(s)||(e.type={invalid:!0,message:"Vehicle type is required"}),isNaN(r.tyreQuantity)&&(e.tyreQuantity={invalid:!0,message:"Tyre quantity should be a number"});let a=!1;for(const z in e)e[z].invalid===!0&&(a=!0);return a&&d(e),a};return t.createElement(t.Fragment,null,C&&t.createElement(w,null),t.createElement("h1",{className:"pageHead"},"Edit a vehicle type"),t.createElement("div",{className:"inner-wrap"},v!==""&&t.createElement(P,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(j,{severity:"error"},v)),t.createElement(G,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("form",{action:"",onSubmit:k},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(b,{fullWidth:!0,error:i.type.invalid},t.createElement(N,{size:"small",variant:"outlined",label:"Vehicle type",value:c.type,error:i.type.invalid,onChange:f,name:"type",id:"type"}),i.type.invalid&&t.createElement(Q,null,i.type.message))),t.createElement("div",{className:"grid-item"},t.createElement(b,{fullWidth:!0,error:i.tyreQuantity.invalid},t.createElement(N,{size:"small",variant:"outlined",label:"Tyre quantity",value:c.tyreQuantity||"",error:i.tyreQuantity.invalid,onChange:f,onInput:W,name:"tyreQuantity",id:"tyreQuantity"}),i.tyreQuantity.invalid&&t.createElement(Q,null,i.tyreQuantity.message)))),t.createElement("div",{className:"right"},t.createElement(o,{variant:"outlined",size:"medium",onClick:H},"Back"),t.createElement(o,{variant:"outlined",size:"medium",onClick:F,className:"ml6"},"Reset"),t.createElement(o,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{Ne as default};