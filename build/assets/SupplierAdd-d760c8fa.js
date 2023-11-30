import{r as p,a as e}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{av as j,L as G,Q as J,P as K,az as M,a0 as U,S as X}from"./index-1d9d8716.js";import{C as Y,a as Z}from"./ContactPersonForm-4098adb8.js";import{u as $,a as D}from"./react-redux-13959126.js";import{m as ee}from"./@material-ui-d7516ac8.js";import{a as te}from"./react-router-7dadf37a.js";import{O as k,Q as H,a as ae,i as s,h as o,V as N,A as L,l as C}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./jss-299ee23a.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-60587a41.js";import"./jss-plugin-global-c6030a8c.js";import"./jss-plugin-nested-fb36a984.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-2cb1c9e9.js";import"./jss-plugin-vendor-prefixer-24b01907.js";import"./css-vendor-1e7d08f8.js";import"./jss-plugin-props-sort-0c9fca2f.js";const re=ee(()=>({menuPaper:{maxHeight:300,maxWidth:100}})),b={name:{invalid:!1,message:""},address:{invalid:!1,message:""},phone:{invalid:!1,message:""},email:{invalid:!1,message:""},contactPerson:{invalid:!1,message:""}},Xe=()=>{const v={name:"",type:"",address:"",state:"",city:"",phone:"",email:"",panNo:"",vendorCode:"",vatNo:"",cstNo:"",eccNo:"",contactPerson:[]},P=$(j),[l,d]=p.useState(v),[i,S]=p.useState(b),[x,E]=p.useState(""),[f,z]=p.useState(null);re();const R=D(),W=te(),y=p.useCallback(()=>{W("/master/suppliers")},[W]);p.useEffect(()=>{d(v)},[]);const B=()=>{d(v),E(""),S(b)},I=()=>{y()},c=t=>{const a=t.target.name,r=t.target.value;d(n=>({...n,[a]:r}))},A=(t,a)=>{d(r=>({...r,[a]:t}))},O=t=>{t.preventDefault(),V(l)||R(M(l)).then(({payload:a={}})=>{const{message:r}=(a==null?void 0:a.data)||{};r?E(r):(E(""),d(()=>({...v,contactPerson:[]})),y())}).catch(a=>{E(a.message)})},V=t=>{var n,m,u,g,h,F,T;const a={...b};(m=(n=t.name)==null?void 0:n.trim)!=null&&m.call(n)||(a.name={invalid:!0,message:"Customer name is required"}),(g=(u=t.address)==null?void 0:u.trim)!=null&&g.call(u)||(a.address={invalid:!0,message:"Address is required"}),((F=(h=t.phone)==null?void 0:h.trim)==null?void 0:F.call(h))!==""&&!U.test(t.phone)&&(a.phone={invalid:!0,message:"Phone number should be 10 digits number"}),t.email!==""&&!X.test(t.email)&&(a.email={invalid:!0,message:"Email is invalid"}),(T=t.contactPerson)!=null&&T.length||(a.contactPerson={invalid:!0,message:"At least one contact person is required"});let r=!1;for(const Q in a)a[Q].invalid===!0&&(r=!0);return r&&S(a),r},_=t=>{if(!f)d(a=>{var n,m;const r={...a};return(m=(n=r.contactPerson)==null?void 0:n.push)==null||m.call(n,t),r});else{const a={...f},r={...t};delete r.index,d(n=>{const m={...n},u=[...n.contactPerson];return u[a.index]={...r},m.contactPerson=[...u],m}),z(null)}},q=t=>{z({...l.contactPerson[t],index:t})},w=t=>{d(a=>{var n,m;const r={...a};return r.contactPerson=(m=(n=r.contactPerson)==null?void 0:n.filter)==null?void 0:m.call(n,(u,g)=>g!==t),r})};return e.createElement(e.Fragment,null,P&&e.createElement(G,null),e.createElement("h1",{className:"pageHead"},"Add a supplier"),x!==""&&e.createElement(k,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(H,{severity:"error"},x)),!P&&e.createElement("div",{className:"inner-wrap"},e.createElement("form",{action:"",id:"supplierForm",onSubmit:O},e.createElement(ae,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:i.name.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Name",value:l.name,error:i.name.invalid,onChange:c,name:"name",id:"name"}),i.name.invalid&&e.createElement(N,null,i.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,size:"small"},e.createElement(L,{disablePortal:!0,size:"small",name:"type",options:["Vehicle","Petrol","Tyre"],value:l.type||null,onChange:(t,a)=>A(a,"type"),openOnFocus:!0,renderInput:t=>e.createElement(o,{...t,label:"Type",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:i.address.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Address",value:l.address,onChange:c,error:i.address.invalid,name:"address",id:"address"}),i.address.invalid&&e.createElement(N,null,i.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,size:"small"},e.createElement(L,{disablePortal:!0,autoSelect:!0,size:"small",name:"state",options:J,value:l.state||null,onChange:(t,a)=>A(a,"state"),openOnFocus:!0,renderInput:t=>e.createElement(o,{...t,label:"State",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"City",value:l.city,onChange:c,name:"city",id:"city"}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:i.phone.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Telephone",value:l.phone,error:i.phone.invalid,onChange:c,onInput:K,name:"phone",id:"phone"}),i.phone.invalid&&e.createElement(N,null,i.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0,error:i.email.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Email",value:l.email,error:i.email.invalid,onChange:c,name:"email",id:"email"}),i.email.invalid&&e.createElement(N,null,i.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"PAN No",value:l.panNo,onChange:c,name:"panNo",id:"panNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"Vendor Code",value:l.vendorCode,onChange:c,name:"vendorCode",id:"vendorCode"}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"VAT No",value:l.vatNo,onChange:c,name:"vatNo",id:"vatNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"CST No.",value:l.cstNo,onChange:c,name:"cstNo",id:"cstNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(s,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"ECC No",value:l.eccNo,onChange:c,name:"eccNo",id:"eccNo"})))))),e.createElement("div",{className:"bl_contact_person"},e.createElement("div",{className:"bl_form"},e.createElement(Y,{onContactPersonAdd:_,editContact:f})),e.createElement("div",{className:"bl_content"},i.contactPerson.invalid&&e.createElement(k,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(H,{severity:"error"},i.contactPerson.message)),e.createElement(Z,{contactPersons:l.contactPerson,handleTriggerEdit:q,handleTriggerDelete:w}))),e.createElement("div",{className:"right"},e.createElement(C,{variant:"outlined",size:"medium",onClick:I},"Back"),e.createElement(C,{variant:"outlined",size:"medium",onClick:B,className:"ml6"},"Reset"),e.createElement(C,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"supplierForm",className:"ml6"},"Save"))))};export{Xe as default};
