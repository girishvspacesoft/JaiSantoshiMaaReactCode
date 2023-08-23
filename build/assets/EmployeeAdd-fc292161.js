import{r as u,a as e}from"./react-bfabd40c.js";import{L as M,A as L,D as j}from"./x-date-pickers-7b1cc7dd.js";import"./Card.module-3bdbfb7f.js";import{a2 as Q,a7 as J,a8 as V,L as K,O as H,a9 as U,R as I,S as X}from"./index-60b53c60.js";import{a as Z,u as _}from"./react-redux-45d870ba.js";import{a as $}from"./react-router-1b5f20a2.js";import{O as y,Q as ee,a as te,i as l,h as m,V as p,A as ae,l as f}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./@date-io-f382d426.js";import"./dayjs-7f45ce31.js";import"./utils-c03c978f.js";import"./clsx-1229b3e0.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./rifm-7b0f12ad.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./hoist-non-react-statics-6cfbf744.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";const b={code:"",name:"",correspondenceAddress:"",permanentAddress:"",dateOfBirth:null,telephone:"",mobile:"",email:"",joiningDate:null,qualification:"",bloodGroup:"",designation:""},N={name:{invalid:!1,message:""},address:{invalid:!1,message:""},telephone:{invalid:!1,message:""},mobile:{invalid:!1,message:""},email:{invalid:!1,message:""}},Pe=()=>{const[r,c]=u.useState(b),[i,A]=u.useState(N),[C,d]=u.useState(""),z=Z(),k=_(Q),B=$(),D=u.useCallback(()=>{B("/master/employees")},[B]);u.useEffect(()=>{z(J()).then(({payload:t={}})=>{if((t==null?void 0:t.status)===200){const{message:a}=(t==null?void 0:t.data)||{};a?d(a):(d(""),c(n=>({...n,code:V(t==null?void 0:t.data)})))}}).catch(t=>{d(t.message)})},[]);const q=()=>{c(t=>({...b,code:t.code})),d(""),A(N)},P=()=>{D()},s=t=>{const a=t.target.name,n=t.target.value;c(o=>({...o,[a]:n}))},R=(t,a)=>{c(n=>({...n,[a]:t}))},Y=(t,a)=>{c(n=>({...n,[t]:a}))},T=t=>{if(t.preventDefault(),!w(r)){const a=r;a.joiningDate&&(a.joiningDate=new Date(a.joiningDate)),a.dateOfBirth&&(a.dateOfBirth=new Date(a.dateOfBirth)),z(U(r)).then(({payload:n={}})=>{const{message:o}=(n==null?void 0:n.data)||{};o?d(o):(d(""),c(b),D())}).catch(n=>{d(n.message)})}},w=t=>{var o,x,g,O,v,W,E,F,h,S;const a={...N};(x=(o=t.name)==null?void 0:o.trim)!=null&&x.call(o)||(a.name={invalid:!0,message:"Name is required"}),(O=(g=t.correspondenceAddress)==null?void 0:g.trim)!=null&&O.call(g)||(a.address={invalid:!0,message:"Address is required"}),(W=(v=t.telephone)==null?void 0:v.trim)!=null&&W.call(v)||(a.telephone={invalid:!0,message:"Telephone number is required"}),((F=(E=t.telephone)==null?void 0:E.trim)==null?void 0:F.call(E))!==""&&!I.test(t.telephone)&&(a.telephone={invalid:!0,message:"Telephone number is invalid"}),((S=(h=t.mobile)==null?void 0:h.trim)==null?void 0:S.call(h))!==""&&!I.test(t.mobile)&&(a.mobile={invalid:!0,message:"Mobile number is invalid"}),t.email!==""&&!X.test(t.email)&&(a.email={invalid:!0,message:"Email is invalid"});let n=!1;for(const G in a)a[G].invalid===!0&&(n=!0);return n&&A(a),n};return e.createElement(e.Fragment,null,k&&e.createElement(K,null),e.createElement("h1",{className:"pageHead"},"Add a employee"),C!==""&&e.createElement(y,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(ee,{severity:"error"},C)),e.createElement("div",{className:"inner-wrap"},e.createElement(te,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:T},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(m,{size:"small",variant:"outlined",label:"Code",value:r.code,onChange:s,name:"code",id:"code",InputProps:{readOnly:!0}}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.name.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Name",error:i.name.invalid,value:r.name,onChange:s,name:"name",id:"name"}),i.name.invalid&&e.createElement(p,null,i.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.address.invalid},e.createElement(m,{size:"small",variant:"outlined",label:"Correspondence address",error:i.address.invalid,value:r.correspondenceAddress,onChange:s,name:"correspondenceAddress",id:"correspondenceAddress"}),i.address.invalid&&e.createElement(p,null,i.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(m,{size:"small",variant:"outlined",label:"Permenant address",value:r.permanentAddress,onChange:s,name:"permanentAddress",id:"permanentAddress"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(M,{dateAdapter:L},e.createElement(j,{label:"Date of birth",inputFormat:"DD/MM/YYYY",format:"DD/MM/YYYY",value:r.dateOfBirth,disableFuture:!0,onChange:Y.bind(null,"dateOfBirth"),renderInput:t=>e.createElement(m,{name:"dateOfBirth",size:"small",...t})})))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.telephone.invalid},e.createElement(m,{variant:"outlined",size:"small",label:"Telephone",error:i.telephone.invalid,value:r.telephone,onChange:s,onInput:H,name:"telephone",id:"telephone"}),i.telephone.invalid&&e.createElement(p,null,i.telephone.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.mobile.invalid},e.createElement(m,{variant:"outlined",size:"small",label:"Mobile no.",error:i.mobile.invalid,value:r.mobile,onChange:s,onInput:H,name:"mobile",id:"mobile"}),i.mobile.invalid&&e.createElement(p,null,i.mobile.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.email.invalid},e.createElement(m,{variant:"outlined",size:"small",label:"Email",error:i.email.invalid,value:r.email,onChange:s,name:"email",id:"email"}),i.email.invalid&&e.createElement(p,null,i.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(M,{dateAdapter:L},e.createElement(j,{label:"Joining date",inputFormat:"DD/MM/YYYY",format:"DD/MM/YYYY",value:r.joiningDate,disableFuture:!0,onChange:Y.bind(null,"joiningDate"),renderInput:t=>e.createElement(m,{name:"joiningDate",size:"small",...t})})))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(m,{variant:"outlined",size:"small",label:"Qualification",value:r.qualification,onChange:s,name:"qualification",id:"qualification"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,size:"small"},e.createElement(ae,{disablePortal:!0,size:"small",name:"bloodGroup",options:["A-","B-","AB-","O-","A+","B+","AB+","O+"],value:r.bloodGroup||null,onChange:(t,a)=>R(a,"bloodGroup"),openOnFocus:!0,renderInput:t=>e.createElement(m,{...t,label:"Blood group",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(m,{variant:"outlined",size:"small",label:"Designation",value:r.designation,onChange:s,name:"designation",id:"designation"})))),e.createElement("div",{className:"right"},e.createElement(f,{variant:"outlined",size:"medium",onClick:P},"Back"),e.createElement(f,{variant:"outlined",size:"medium",onClick:q,className:"ml6"},"Reset"),e.createElement(f,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{Pe as default};
