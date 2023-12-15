import{r as u,a as e}from"./react-69b9bddd.js";import{d as L}from"./dayjs-39ab3f8d.js";import{L as M,A as I,D as j}from"./x-date-pickers-f3802fc3.js";import"./Card.module-3bdbfb7f.js";import{a3 as X,ab as Z,L as _,P as H,ac as $,a0 as P,S as y}from"./index-aeb4570c.js";import{u as ee,a as te}from"./react-redux-13959126.js";import{b as ae,a as ie}from"./react-router-7dadf37a.js";import{O as ne,Q as re,a as le,i as l,h as s,V as p,A as se,l as b}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./@date-io-28dabb9c.js";import"./utils-49fe0532.js";import"./clsx-1229b3e0.js";import"./base-e8cfb5a9.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./rifm-bf33b601.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";const k={code:"",name:"",correspondenceAddress:"",permanentAddress:"",dateOfBirth:null,telephone:"",mobile:"",email:"",joiningDate:null,qualification:"",bloodGroup:"",designation:""},N={name:{invalid:!1,message:""},address:{invalid:!1,message:""},telephone:{invalid:!1,message:""},mobile:{invalid:!1,message:""},email:{invalid:!1,message:""}},Qe=()=>{const[r,c]=u.useState(k),[q,T]=u.useState(k),[i,A]=u.useState(N),[C,d]=u.useState(""),R=ee(X),G=ae(),{employeeId:g}=G.state,z=te(),B=ie(),Y=u.useCallback(()=>{B("/master/employees")},[B]);u.useEffect(()=>{g&&g!==""&&z(Z(g)).then(({payload:t={}})=>{const{message:a,dateOfBirth:n,joiningDate:o}=(t==null?void 0:t.data)||{};a?d(a):(d(""),n&&(t.data.dateOfBirth=L(n)),o&&(t.data.joiningDate=L(o)),c(t==null?void 0:t.data),T(t==null?void 0:t.data))}).catch(t=>{d(t.message)})},[g]);const w=()=>{c(q),d(""),A(N)},m=t=>{const a=t.target.name,n=t.target.value;c(o=>({...o,[a]:n}))},Q=(t,a)=>{c(n=>({...n,[a]:t}))},x=(t,a)=>{c(n=>({...n,[t]:a}))},J=t=>{t.preventDefault(),K(r)||z($(r)).then(({payload:a={}})=>{const{message:n}=(a==null?void 0:a.data)||{};n?d(n):(d(""),c(a==null?void 0:a.data),Y())}).catch(a=>{d(a.message)})},V=()=>{Y()},K=t=>{var o,W,E,D,v,F,h,O,f,S;const a={...N};(W=(o=t.name)==null?void 0:o.trim)!=null&&W.call(o)||(a.name={invalid:!0,message:"Name is required"}),(D=(E=t.correspondenceAddress)==null?void 0:E.trim)!=null&&D.call(E)||(a.address={invalid:!0,message:"Address is required"}),(F=(v=t.telephone)==null?void 0:v.trim)!=null&&F.call(v)||(a.telephone={invalid:!0,message:"Telephone number is required"}),t.telephone&&((O=(h=t.telephone)==null?void 0:h.trim)==null?void 0:O.call(h))!==""&&!P.test(t.telephone)&&(a.telephone={invalid:!0,message:"Telephone number is invalid"}),((S=(f=t.mobile)==null?void 0:f.trim)==null?void 0:S.call(f))!==""&&!P.test(t.mobile)&&(a.mobile={invalid:!0,message:"Mobile number is invalid"}),t.email!==""&&!y.test(t.email)&&(a.email={invalid:!0,message:"Email is invalid"});let n=!1;for(const U in a)a[U].invalid===!0&&(n=!0);return n&&A(a),n};return e.createElement(e.Fragment,null,R&&e.createElement(_,null),e.createElement("div",{className:"inner-wrap"},e.createElement("h1",{className:"pageHead"},"Edit an employee"),C!==""&&e.createElement(ne,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(re,{severity:"error"},C)),e.createElement(le,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:J},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(s,{size:"small",variant:"outlined",label:"Code",value:r.code,onChange:m,name:"code",id:"code",InputProps:{readOnly:!0}}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.name.invalid},e.createElement(s,{size:"small",variant:"outlined",label:"Name",error:i.name.invalid,value:r.name,onChange:m,name:"name",id:"name"}),i.name.invalid&&e.createElement(p,null,i.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.address.invalid},e.createElement(s,{size:"small",variant:"outlined",label:"Correspondence address",error:i.address.invalid,value:r.correspondenceAddress,onChange:m,name:"correspondenceAddress",id:"correspondenceAddress"}),i.address.invalid&&e.createElement(p,null,i.address.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(s,{size:"small",variant:"outlined",label:"Permenant address",value:r.permanentAddress,onChange:m,name:"permanentAddress",id:"permanentAddress"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(M,{dateAdapter:I},e.createElement(j,{label:"Date of birth",inputFormat:"DD/MM/YYYY",format:"DD/MM/YYYY",value:r.dateOfBirth,disableFuture:!0,onChange:x.bind(null,"dateOfBirth"),renderInput:t=>e.createElement(s,{name:"dateOfBirth",size:"small",...t})})))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.telephone.invalid},e.createElement(s,{variant:"outlined",size:"small",label:"Telephone",error:i.telephone.invalid,value:r.telephone,onChange:m,onInput:H,name:"telephone",id:"telephone"}),i.telephone.invalid&&e.createElement(p,null,i.telephone.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.mobile.invalid},e.createElement(s,{variant:"outlined",size:"small",label:"Mobile no.",error:i.mobile.invalid,value:r.mobile,onChange:m,onInput:H,name:"mobile",id:"mobile"}),i.mobile.invalid&&e.createElement(p,null,i.mobile.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,error:i.email.invalid},e.createElement(s,{variant:"outlined",size:"small",label:"Email",error:i.email.invalid,value:r.email,onChange:m,name:"email",id:"email"}),i.email.invalid&&e.createElement(p,null,i.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(M,{dateAdapter:I},e.createElement(j,{label:"Joining date",inputFormat:"DD/MM/YYYY",format:"DD/MM/YYYY",value:r.joiningDate,disableFuture:!0,onChange:x.bind(null,"joiningDate"),renderInput:t=>e.createElement(s,{name:"joiningDate",size:"small",...t})})))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(s,{variant:"outlined",size:"small",label:"Qualification",value:r.qualification,onChange:m,name:"qualification",id:"qualification"}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0,size:"small"},e.createElement(se,{disablePortal:!0,size:"small",name:"bloodGroup",options:["A-","B-","AB-","O-","A+","B+","AB+","O+"],value:r.bloodGroup,onChange:(t,a)=>Q(a,"bloodGroup"),getOptionLabel:t=>t,openOnFocus:!0,renderInput:t=>e.createElement(s,{...t,label:"Blood group",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(l,{fullWidth:!0},e.createElement(s,{variant:"outlined",size:"small",label:"Designation",value:r.designation,onChange:m,name:"designation",id:"designation"})))),e.createElement("div",{className:"right"},e.createElement(b,{variant:"outlined",size:"medium",onClick:V},"Back"),e.createElement(b,{variant:"outlined",size:"medium",onClick:w,className:"ml6"},"Reset"),e.createElement(b,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{Qe as default};