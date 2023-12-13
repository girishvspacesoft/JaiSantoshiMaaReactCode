import{r as N,a as e}from"./react-69b9bddd.js";import{aC as U,L as X,P as Y,aG as Z,a0 as _,S as $}from"./index-aeb4570c.js";import{u as D,a as ee}from"./react-redux-13959126.js";import"./Card.module-3bdbfb7f.js";import{a as ae}from"./react-router-7dadf37a.js";import{O as ie,Q as re,a as ne,i as s,h as m,V as d,l as B}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const x={name:"",branchName:"",branchCode:"",address:"",ifsc:"",micr:"",phone:"",email:""},S={name:{invalid:!1,message:""},branchName:{invalid:!1,message:""},branchCode:{invalid:!1,message:""},address:{invalid:!1,message:""},ifsc:{invalid:!1,message:""},micr:{invalid:!1,message:""},phone:{invalid:!1,message:""},email:{invalid:!1,message:""}},Te=()=>{const[n,k]=N.useState(x),[a,z]=N.useState(S),[q,c]=N.useState(""),G=D(U),F=ae(),O=ee(),W=N.useCallback(()=>{F("/master/banks")},[F]),Q=()=>{k(x),c(""),z(S)},V=()=>{W()},t=r=>{const i=r.target.name,l=r.target.value;k(o=>({...o,[i]:l}))},j=r=>{r.preventDefault(),J(n)||O(Z(n)).then(({payload:i={}})=>{const{message:l}=(i==null?void 0:i.data)||{};l?c(l):(c(""),k(x),W())}).catch(i=>{c(i.message)})},J=r=>{var o,H,u,R,v,I,h,P,g,A,p,L,E,T,b,w,f,M,C,y;const i={...S};(H=(o=r.name)==null?void 0:o.trim)!=null&&H.call(o)||(i.name={invalid:!0,message:"Bank name is required"}),(R=(u=r.branchName)==null?void 0:u.trim)!=null&&R.call(u)||(i.branchName={invalid:!0,message:"Branch name is required"}),(I=(v=r.branchCode)==null?void 0:v.trim)!=null&&I.call(v)||(i.branchCode={invalid:!0,message:"Branch code is required"}),(P=(h=r.address)==null?void 0:h.trim)!=null&&P.call(h)||(i.address={invalid:!0,message:"Address is required"}),(A=(g=r.ifsc)==null?void 0:g.trim)!=null&&A.call(g)||(i.ifsc={invalid:!0,message:"IFSC code is required"}),(L=(p=r.micr)==null?void 0:p.trim)!=null&&L.call(p)||(i.micr={invalid:!0,message:"MICR code is required"}),(T=(E=r.phone)==null?void 0:E.trim)!=null&&T.call(E)||(i.phone={invalid:!0,message:"Phone is required"}),r.phone&&((w=(b=r.phone)==null?void 0:b.trim)==null?void 0:w.call(b))!==""&&!_.test(r.phone)&&(i.phone={invalid:!0,message:"Phone should be 10 digits number"}),(M=(f=r.email)==null?void 0:f.trim)!=null&&M.call(f)||(i.email={invalid:!0,message:"Email is required"}),r.email&&((y=(C=r.email)==null?void 0:C.trim)==null?void 0:y.call(C))!==""&&!$.test(r.email)&&(i.email={invalid:!0,message:"Email is invalid"});let l=!1;for(const K in i)i[K].invalid===!0&&(l=!0);return l&&z(i),l};return e.createElement(e.Fragment,null,G&&e.createElement(X,null),e.createElement("h1",{className:"pageHead"},"Add a bank"),e.createElement("div",{className:"inner-wrap",style:{background:"#fff"}},q!==""&&e.createElement(ie,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(re,{severity:"error"},q)),e.createElement(ne,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:j},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.name.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Bank name",value:n.name,error:a.name.invalid,onChange:t,name:"name",id:"name"}),a.name.invalid&&e.createElement(d,null,a.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.branchName.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Branch name",value:n.branchName,error:a.branchName.invalid,onChange:t,name:"branchName",id:"branchName"}),a.branchName.invalid&&e.createElement(d,null,a.branchName.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.branchCode.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Branch code",value:n.branchCode,error:a.branchCode.invalid,onChange:t,name:"branchCode",id:"branchCode"}),a.branchCode.invalid&&e.createElement(d,null,a.branchCode.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.address.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Address",value:n.address,error:a.address.invalid,onChange:t,name:"address",id:"address"}),a.address.invalid&&e.createElement(d,null,a.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.ifsc.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"IFSC code",value:n.ifsc,error:a.ifsc.invalid,onChange:t,name:"ifsc",id:"ifsc"}),a.ifsc.invalid&&e.createElement(d,null,a.ifsc.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.micr.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"MICR code",value:n.micr,error:a.micr.invalid,onChange:t,name:"micr",id:"micr"}),a.micr.invalid&&e.createElement(d,null,a.micr.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.phone.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Phone",value:n.phone,error:a.phone.invalid,onChange:t,onInput:Y,name:"phone",id:"phone"}),a.phone.invalid&&e.createElement(d,null,a.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:a.email.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Email",value:n.email,error:a.email.invalid,onChange:t,name:"email",id:"email"}),a.email.invalid&&e.createElement(d,null,a.email.message)))),e.createElement("div",{className:"right"},e.createElement(B,{variant:"outlined",size:"medium",onClick:V},"Back"),e.createElement(B,{variant:"outlined",size:"medium",onClick:Q,className:"ml6"},"Reset"),e.createElement(B,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{Te as default};
