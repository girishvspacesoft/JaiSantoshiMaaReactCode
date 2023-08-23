import{r as p,a as e}from"./react-bfabd40c.js";import"./Card.module-3bdbfb7f.js";import{at as M,ay as U,L as X,P as Y,O as Z,az as $,R as D,S as ee}from"./index-60b53c60.js";import{C as te,a as ae}from"./ContactPersonForm-717b94a7.js";import{u as re,a as ne}from"./react-redux-45d870ba.js";import{m as ie}from"./@material-ui-774e3213.js";import{b as se,a as le}from"./react-router-1b5f20a2.js";import{O as R,Q as O,a as oe,i as l,h as o,V as h,A as B,l as f}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./utils-c03c978f.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./jss-7659e388.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-051edbeb.js";import"./jss-plugin-global-64559e95.js";import"./jss-plugin-nested-6377d8b0.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-593cc4c5.js";import"./jss-plugin-vendor-prefixer-4dd06b33.js";import"./css-vendor-33142dc8.js";import"./jss-plugin-props-sort-0c9fca2f.js";const me=ie(()=>({menuPaper:{maxHeight:300,maxWidth:100}})),C={name:"",type:"",address:"",state:"",city:"",phone:"",email:"",panNo:"",vendorCode:"",vatNo:"",cstNo:"",eccNo:"",contactPerson:[]},b={name:{invalid:!1,message:""},address:{invalid:!1,message:""},phone:{invalid:!1,message:""},email:{invalid:!1,message:""},contactPerson:{invalid:!1,message:""}},tt=()=>{const S=re(M),[s,d]=p.useState(C),[I,V]=p.useState(C),[i,P]=p.useState(b),[x,v]=p.useState(""),[N,z]=p.useState(null);me();const _=se(),{supplierId:W}=_.state,F=le(),A=ne(),L=p.useCallback(()=>{F("/master/suppliers")},[F]);p.useEffect(()=>{A(U(W)).then(({payload:t={}})=>{const{message:a}=(t==null?void 0:t.data)||{};a?v(a):(d(t==null?void 0:t.data),V(t==null?void 0:t.data))}).catch(t=>{v(t.message)})},[W]);const q=()=>{d(I),v(""),P(b)},w=()=>{L()},c=t=>{const a=t.target.name,r=t.target.value;d(n=>({...n,[a]:r}))},T=(t,a)=>{d(r=>({...r,[a]:t}))},y=t=>{t.preventDefault(),Q(s)||A($(s)).then(({payload:a={}})=>{const{message:r}=(a==null?void 0:a.data)||{};r?v(r):(v(""),d(C),L())}).catch(a=>{v(a.message)})},Q=t=>{var n,m,u,E,g,k,H;const a={...b};(m=(n=t.name)==null?void 0:n.trim)!=null&&m.call(n)||(a.name={invalid:!0,message:"Customer name is required"}),(E=(u=t.address)==null?void 0:u.trim)!=null&&E.call(u)||(a.address={invalid:!0,message:"Address is required"}),((k=(g=t.phone)==null?void 0:g.trim)==null?void 0:k.call(g))!==""&&!D.test(t.phone)&&(a.phone={invalid:!0,message:"Phone number should be 10 digits number"}),t.email!==""&&!ee.test(t.email)&&(a.email={invalid:!0,message:"Email is invalid"}),(H=t.contactPerson)!=null&&H.length||(a.contactPerson={invalid:!0,message:"At least one contact person is required"});let r=!1;for(const K in a)a[K].invalid===!0&&(r=!0);return r&&P(a),r},j=t=>{if(!N)d(a=>{var n,m;const r={...a};return(m=(n=r.contactPerson)==null?void 0:n.push)==null||m.call(n,t),r});else{const a={...N},r={...t};delete r.index,d(n=>{const m={...n},u=[...n.contactPerson];return u[a.index]={...r},m.contactPerson=[...u],m}),z(null)}},G=t=>{z({...s.contactPerson[t],index:t})},J=t=>{d(a=>{var n,m;const r={...a};return r.contactPerson=(m=(n=r.contactPerson)==null?void 0:n.filter)==null?void 0:m.call(n,(u,E)=>E!==t),r})};return e.createElement(e.Fragment,null,S&&e.createElement(X,null),e.createElement("h1",{className:"pageHead"},"Edit a supplier"),e.createElement("div",{className:"inner-wrap"},x!==""&&e.createElement(R,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(O,{severity:"error"},x)),!S&&e.createElement("div",null,e.createElement("form",{action:"",id:"supplierForm",onSubmit:y},e.createElement(oe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.name.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Name",value:s.name,error:i.name.invalid,onChange:c,name:"name",id:"name"}),i.name.invalid&&e.createElement(h,null,i.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,size:"small"},e.createElement(B,{disablePortal:!0,size:"small",name:"type",options:["Vehicle","Petrol","Tyre"],value:s.type,onChange:(t,a)=>T(a,"type"),getOptionLabel:t=>t,openOnFocus:!0,renderInput:t=>e.createElement(o,{...t,label:"Type",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.address.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Address",value:s.address,onChange:c,error:i.address.invalid,name:"address",id:"address"}),i.address.invalid&&e.createElement(h,null,i.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,size:"small"},e.createElement(B,{disablePortal:!0,autoSelect:!0,size:"small",name:"state",options:Y,value:s.state,onChange:(t,a)=>T(a,"state"),getOptionLabel:t=>t,openOnFocus:!0,renderInput:t=>e.createElement(o,{...t,label:"State",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"City",value:s.city,onChange:c,name:"city",id:"city"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.phone.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Telephone",value:s.phone,error:i.phone.invalid,onChange:c,onInput:Z,name:"phone",id:"phone"}),i.phone.invalid&&e.createElement(h,null,i.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.email.invalid},e.createElement(o,{size:"small",variant:"outlined",label:"Email",value:s.email,error:i.email.invalid,onChange:c,name:"email",id:"email"}),i.email.invalid&&e.createElement(h,null,i.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"PAN No",value:s.panNo,onChange:c,name:"panNo",id:"panNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"Vendor Code",value:s.vendorCode,onChange:c,name:"vendorCode",id:"vendorCode"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"VAT No",value:s.vatNo,onChange:c,name:"vatNo",id:"vatNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"CST No.",value:s.cstNo,onChange:c,name:"cstNo",id:"cstNo"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(o,{size:"small",variant:"outlined",label:"ECC No",value:s.eccNo,onChange:c,name:"eccNo",id:"eccNo"})))))),e.createElement("div",{className:"bl_contact_person"},e.createElement("div",{className:"bl_form"},e.createElement(te,{onContactPersonAdd:j,editContact:N})),e.createElement("div",{className:"bl_content"},i.contactPerson.invalid&&e.createElement(R,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(O,{severity:"error"},i.contactPerson.message)),e.createElement(ae,{contactPersons:s.contactPerson,handleTriggerEdit:G,handleTriggerDelete:J}))),e.createElement("div",{className:"right"},e.createElement(f,{variant:"outlined",size:"medium",onClick:w},"Back"),e.createElement(f,{variant:"outlined",size:"medium",onClick:q,className:"ml6"},"Reset"),e.createElement(f,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"supplierForm",className:"ml6"},"Save")))))};export{tt as default};
