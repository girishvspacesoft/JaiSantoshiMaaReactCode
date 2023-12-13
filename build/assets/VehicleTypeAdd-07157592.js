<<<<<<< HEAD:build/assets/VehicleTypeAdd-07157592.js
import{r as o,a as e}from"./react-69b9bddd.js";import{u as H,a as V}from"./react-redux-13959126.js";import{ao as z,L as B,an as L,as as q}from"./index-1d9d8716.js";import"./Card.module-3bdbfb7f.js";import{a as A}from"./react-router-7dadf37a.js";import{O as R,Q as w,a as I,i as N,h as Q,V as b,l as c}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const p={type:"",tyreQuantity:""},u={type:{invalid:!1,message:""},tyreQuantity:{invalid:!1,message:""}},ge=()=>{const[s,m]=o.useState(p),[r,d]=o.useState(u),[y,l]=o.useState(""),x=H(z),v=A(),T=V(),g=o.useCallback(()=>{v("/master/vehicleTypes")},[v]),E=()=>{m(p),l(""),d(u)},S=()=>{E(),g()},h=a=>{const t=a.target.name,i=a.target.value;m(n=>({...n,[t]:i}))},k=a=>{a.preventDefault(),C(s)||T(q(s)).then(({payload:t={}})=>{const{message:i}=(t==null?void 0:t.data)||{};i?l(i):(l(""),m(p),g())}).catch(t=>{l(t.message)})},C=a=>{var n,f;const t={...u};(f=(n=a.type)==null?void 0:n.trim)!=null&&f.call(n)||(t.type={invalid:!0,message:"Vehicle type is required"}),isNaN(a.tyreQuantity)&&isNaN(parseFloat(a.tyreQuantity))&&(t.tyreQuantity={invalid:!0,message:"Tyre quantity should be a number"});let i=!1;for(const F in t)t[F].invalid===!0&&(i=!0);return i&&d(t),i};return e.createElement(e.Fragment,null,x&&e.createElement(B,null),e.createElement("h1",{className:"pageHead"},"Add a vehicle type"),y!==""&&e.createElement(R,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(w,{severity:"error"},y)),e.createElement("div",{className:"inner-wrap"},e.createElement(I,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:k},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(N,{fullWidth:!0,error:r.type.invalid},e.createElement(Q,{size:"small",variant:"outlined",label:"Vehicle type",value:s.type,error:r.type.invalid,onChange:h,name:"type",id:"type"}),r.type.invalid&&e.createElement(b,null,r.type.message))),e.createElement("div",{className:"grid-item"},e.createElement(N,{fullWidth:!0,error:r.tyreQuantity.invalid},e.createElement(Q,{size:"small",variant:"outlined",label:"Tyre quantity",value:s.tyreQuantity||"",error:r.tyreQuantity.invalid,onChange:h,onInput:L,name:"tyreQuantity",id:"tyreQuantity"}),r.tyreQuantity.invalid&&e.createElement(b,null,r.tyreQuantity.message)))),e.createElement("div",{className:"right"},e.createElement(c,{variant:"outlined",size:"medium",onClick:S},"Back"),e.createElement(c,{variant:"outlined",size:"medium",onClick:E,className:"ml6"},"Reset"),e.createElement(c,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{ge as default};
=======
import{r as o,a as e}from"./react-69b9bddd.js";import{u as H,a as V}from"./react-redux-13959126.js";import{ao as z,L as B,an as L,as as q}from"./index-aeb4570c.js";import"./Card.module-3bdbfb7f.js";import{a as A}from"./react-router-7dadf37a.js";import{O as R,Q as w,a as I,i as N,h as Q,V as b,l as c}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const p={type:"",tyreQuantity:""},u={type:{invalid:!1,message:""},tyreQuantity:{invalid:!1,message:""}},ge=()=>{const[s,m]=o.useState(p),[r,d]=o.useState(u),[y,l]=o.useState(""),x=H(z),v=A(),T=V(),g=o.useCallback(()=>{v("/master/vehicleTypes")},[v]),E=()=>{m(p),l(""),d(u)},S=()=>{E(),g()},h=a=>{const t=a.target.name,i=a.target.value;m(n=>({...n,[t]:i}))},k=a=>{a.preventDefault(),C(s)||T(q(s)).then(({payload:t={}})=>{const{message:i}=(t==null?void 0:t.data)||{};i?l(i):(l(""),m(p),g())}).catch(t=>{l(t.message)})},C=a=>{var n,f;const t={...u};(f=(n=a.type)==null?void 0:n.trim)!=null&&f.call(n)||(t.type={invalid:!0,message:"Vehicle type is required"}),isNaN(a.tyreQuantity)&&isNaN(parseFloat(a.tyreQuantity))&&(t.tyreQuantity={invalid:!0,message:"Tyre quantity should be a number"});let i=!1;for(const F in t)t[F].invalid===!0&&(i=!0);return i&&d(t),i};return e.createElement(e.Fragment,null,x&&e.createElement(B,null),e.createElement("h1",{className:"pageHead"},"Add a vehicle type"),y!==""&&e.createElement(R,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(w,{severity:"error"},y)),e.createElement("div",{className:"inner-wrap"},e.createElement(I,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:k},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(N,{fullWidth:!0,error:r.type.invalid},e.createElement(Q,{size:"small",variant:"outlined",label:"Vehicle type",value:s.type,error:r.type.invalid,onChange:h,name:"type",id:"type"}),r.type.invalid&&e.createElement(b,null,r.type.message))),e.createElement("div",{className:"grid-item"},e.createElement(N,{fullWidth:!0,error:r.tyreQuantity.invalid},e.createElement(Q,{size:"small",variant:"outlined",label:"Tyre quantity",value:s.tyreQuantity||"",error:r.tyreQuantity.invalid,onChange:h,onInput:L,name:"tyreQuantity",id:"tyreQuantity"}),r.tyreQuantity.invalid&&e.createElement(b,null,r.tyreQuantity.message)))),e.createElement("div",{className:"right"},e.createElement(c,{variant:"outlined",size:"medium",onClick:S},"Back"),e.createElement(c,{variant:"outlined",size:"medium",onClick:E,className:"ml6"},"Reset"),e.createElement(c,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{ge as default};
>>>>>>> 61ebb17bfce3db4c896f7668cd49bc44203937b9:build/assets/VehicleTypeAdd-6140d6ed.js
