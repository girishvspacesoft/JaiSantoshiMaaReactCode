import{r as g,a as e}from"./react-bfabd40c.js";import"./Card.module-3bdbfb7f.js";import{J as K,T as M,L as X,O as Y,P as Z,U as $,R as D,S as y}from"./index-5f564d13.js";import{C as ee,a as te}from"./ContactPersonForm-318a0da1.js";import{u as ae,a as re}from"./react-redux-45d870ba.js";import{m as ne}from"./@material-ui-774e3213.js";import{b as se,a as ie}from"./react-router-1b5f20a2.js";import{O as H,Q as R,a as le,i as l,h as o,V as h,A as oe,l as N}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./utils-c03c978f.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./jss-7659e388.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-051edbeb.js";import"./jss-plugin-global-64559e95.js";import"./jss-plugin-nested-6377d8b0.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-593cc4c5.js";import"./jss-plugin-vendor-prefixer-4dd06b33.js";import"./css-vendor-33142dc8.js";import"./jss-plugin-props-sort-0c9fca2f.js";const me=ne(()=>({menuPaper:{maxHeight:300,maxWidth:100}})),b={name:"",address:"",telephone:"",fax:"",cstNo:"",gstNo:"",state:"",city:"",email:"",vendorCode:"",vatNo:"",eccNo:"",contactPerson:[]},x={name:{invalid:!1,message:""},address:{invalid:!1,message:""},telephone:{invalid:!1,message:""},email:{invalid:!1,message:""},contactPerson:{invalid:!1,message:""}},tt=()=>{const[s,c]=g.useState(b),[B,O]=g.useState(b),[r,P]=g.useState(x),[z,v]=g.useState(""),[C,W]=g.useState(null),F=ae(K);me();const I=se(),{customerId:f}=I.state,S=ie(),T=re(),L=g.useCallback(()=>{S("/master/customers")},[S]);g.useEffect(()=>{f&&T(M(f)).then(({payload:t={}})=>{const{message:a}=(t==null?void 0:t.data)||{};a?v(a):(v(""),c(t==null?void 0:t.data),O(t==null?void 0:t.data))}).catch(t=>{v(t.message)})},[f]);const _=()=>{c({...B}),v(""),P(x)},q=()=>{L()},m=t=>{const a=t.target.name,n=t.target.value;c(i=>({...i,[a]:n}))},w=t=>{t.preventDefault(),V(s)||T($(s)).then(({payload:a={}})=>{const{message:n}=(a==null?void 0:a.data)||{};n?v(n):(v(""),c(b),L())}).catch(a=>{v(a.message)})},V=t=>{var i,d,u,p,E,k,A;const a={...x};(d=(i=t.name)==null?void 0:i.trim)!=null&&d.call(i)||(a.name={invalid:!0,message:"Customer name is required"}),(p=(u=t.address)==null?void 0:u.trim)!=null&&p.call(u)||(a.address={invalid:!0,message:"Address is required"}),((k=(E=t.telephone)==null?void 0:E.trim)==null?void 0:k.call(E))!==""&&!D.test(t.telephone)&&(a.telephone={invalid:!0,message:"Phone number should be 10 digits number"}),t.email!==""&&!y.test(t.email)&&(a.email={invalid:!0,message:"Email is invalid"}),(A=t.contactPerson)!=null&&A.length||(a.contactPerson={invalid:!0,message:"At least one contact person is required"});let n=!1;for(const j in a)a[j].invalid===!0&&(n=!0);return n&&P(a),n},G=(t,a)=>{c(n=>({...n,state:a}))},J=t=>{if(!C)c(a=>({...a,contactPerson:[...(a==null?void 0:a.contactPerson)||[],t]}));else{const a={...C},n={...t};delete n.index,c(i=>{const d={...i},u=[...i.contactPerson];return u[a.index]={...n},d.contactPerson=[...u],d}),W(null)}},Q=t=>{W({...s.contactPerson[t],index:t})},U=t=>{c(a=>{var i,d;const n={...a};return n.contactPerson=(d=(i=n.contactPerson)==null?void 0:i.filter)==null?void 0:d.call(i,(u,p)=>p!==t),n})};return e.createElement(e.Fragment,null,F&&e.createElement(X,null),e.createElement("h1",{className:"pageHead"},"Edit a customer"),e.createElement("div",{className:"inner-wrap"},z!==""&&e.createElement(H,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(R,{severity:"error"},z)),!F&&e.createElement("div",null,e.createElement("form",{action:"",id:"customerForm",onSubmit:w},e.createElement(le,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:r.name.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Name",value:s.name,error:r.name.invalid,onChange:m,name:"name",id:"name"}),r.name.invalid&&e.createElement(h,null,r.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:r.address.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Correspondence address",value:s.address,onChange:m,error:r.address.invalid,name:"address",id:"address"}),r.address.invalid&&e.createElement(h,null,r.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:r.telephone.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Telephone",value:s.telephone,error:r.telephone.invalid,onChange:m,onInput:Y,name:"telephone",id:"telephone"}),r.telephone.invalid&&e.createElement(h,null,r.telephone.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"Fax No",value:s.fax,onChange:m,name:"fax",id:"fax"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"CST No.",value:s.cstNo,onChange:m,name:"cstNo",id:"cstNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"GST No.",value:s.gstNo,onChange:m,name:"gstNo",id:"gstNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,size:"small"},e.createElement(oe,{disablePortal:!0,size:"small",name:"state",options:Z,value:s.state,onChange:(t,a)=>G(t,a),getOptionLabel:t=>t,openOnFocus:!0,renderInput:t=>e.createElement(o,{...t,label:"State",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"City",value:s.city,onChange:m,name:"city",id:"city"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:r.email.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Email",value:s.email,error:r.email.invalid,onChange:m,name:"email",id:"email"}),r.email.invalid&&e.createElement(h,null,r.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"Vendor Code",value:s.vendorCode,onChange:m,name:"vendorCode",id:"vendorCode"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"VAT No",value:s.vatNo,onChange:m,name:"vatNo",id:"vatNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"ECC No",value:s.eccNo,onChange:m,name:"eccNo",id:"eccNo"})))))),e.createElement("div",{className:"bl_contact_person"},e.createElement("div",{className:"bl_form"},e.createElement(ee,{onContactPersonAdd:J,editContact:C})),e.createElement("div",{className:"bl_content"},r.contactPerson.invalid&&e.createElement(H,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(R,{severity:"error"},r.contactPerson.message)),e.createElement(te,{contactPersons:s.contactPerson,handleTriggerEdit:Q,handleTriggerDelete:U}))),e.createElement("div",{className:"right"},e.createElement(N,{variant:"outlined",size:"medium",onClick:q},"Back"),e.createElement(N,{variant:"outlined",size:"medium",onClick:_,className:"ml6"},"Reset"),e.createElement(N,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"customerForm",className:"ml6"},"Save")))))};export{tt as default};