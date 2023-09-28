import{r as l,a as t}from"./react-bfabd40c.js";import{L as D,A as R,D as Y}from"./x-date-pickers-7b1cc7dd.js";import"./Card.module-3bdbfb7f.js";import{ck as _,cl as j,L as Q,al as V,cq as G}from"./index-7982e8fd.js";import{u as F,a as J}from"./react-redux-45d870ba.js";import{b as K,a as U}from"./react-router-622b2d59.js";import{O as X,Q as Z,a as $,i as c,A as w,h as u,V as g,l as E}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./@date-io-f382d426.js";import"./dayjs-7f45ce31.js";import"./utils-c03c978f.js";import"./clsx-1229b3e0.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./rifm-7b0f12ad.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./hoist-non-react-statics-6cfbf744.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";const b={branch:"",transferToBranch:"",date:null,amount:"",remark:""},v={branch:{invalid:!1,message:""},transferToBranch:{invalid:!1,message:""},date:{invalid:!1,message:""},amount:{invalid:!1,message:""},remark:{invalid:!1,message:""}},We=()=>{var p,L,h,x;const H=F(_),d=F(e=>e.user),{state:P}=K(),[B,I]=l.useState([]),[i,m]=l.useState({...b,branch:P}),[a,f]=l.useState(v),[T,o]=l.useState(""),k=U(),N=J(),C=l.useCallback(()=>{k("/transactions/moneyTransfers")},[k]);l.useEffect(()=>{N(j()).then(({payload:e={}})=>{const{message:r}=(e==null?void 0:e.data)||{};r?o("Something went wrong! Please try later or contact Administrator."):I(e==null?void 0:e.data)}).catch(()=>{o("Something went wrong! Please try later or contact Administrator.")})},[]);const M=()=>{m(b),o(""),f(v)},W=()=>{C()},A=e=>{const r=e.target.name,n=e.target.value;m(s=>({...s,[r]:n}))},S=(e,r)=>{m(n=>({...n,[r]:e}))},O=(e,r)=>{m(n=>({...n,[e]:new Date(r)}))},q=e=>{var r,n;e.preventDefault(),y(i)||N(G({...i,branch:(r=i.branch)==null?void 0:r._id,transferToBranch:(n=i.transferToBranch)==null?void 0:n._id})).then(({payload:s={}})=>{const{message:z}=(s==null?void 0:s.data)||{};z?o(z):(o(""),f(v),m(b),C())}).catch(s=>{o(s.message)})},y=e=>{const r={...v};e.branch||(r.branch={invalid:!0,message:"Branch is required"}),e.transferToBranch||(r.transferToBranch={invalid:!0,message:"Branch is required"}),e.date||(r.date={invalid:!0,message:"Date is required"}),(!e.amount||e.amount==="0")&&(r.amount={invalid:!0,message:"Amount is required and should be greater than 0"}),e.amount&&isNaN(e.amount)&&(r.amount={invalid:!0,message:"Amount should be a number"});let n=!1;for(const s in r)r[s].invalid===!0&&(n=!0);return n&&f(r),n};return t.createElement(t.Fragment,null,H&&t.createElement(Q,null),t.createElement("div",{className:"inner-wrap"},t.createElement("h1",{className:"pageHead"},"Add a money transfer"),T!==""&&t.createElement(X,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(Z,{severity:"error"},T)),t.createElement("form",{action:"",onSubmit:q},t.createElement($,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(c,{fullWidth:!0,size:"small",error:a.branch.invalid},t.createElement(w,{disablePortal:!0,size:"small",name:"branch",options:B,value:i.branch||null,onChange:(e,r)=>S(r,"branch"),getOptionLabel:e=>e.name||"",openOnFocus:!0,disabled:d&&d.type&&((L=(p=d.type)==null?void 0:p.toLowerCase)==null?void 0:L.call(p))!=="superadmin"&&((x=(h=d.type)==null?void 0:h.toLowerCase)==null?void 0:x.call(h))!=="admin",renderInput:e=>t.createElement(u,{...e,label:"Branch",error:a.branch.invalid,fullWidth:!0})}),a.branch.invalid&&t.createElement(g,null,a.branch.message))),t.createElement("div",{className:"grid-item"},t.createElement(c,{fullWidth:!0,size:"small",error:a.transferToBranch.invalid},t.createElement(w,{disablePortal:!0,size:"small",name:"transferToBranch",options:B,value:i.transferToBranch||null,onChange:(e,r)=>S(r,"transferToBranch"),getOptionLabel:e=>e.name||"",openOnFocus:!0,renderInput:e=>t.createElement(u,{...e,label:"Transfer to branch",error:a.transferToBranch.invalid,fullWidth:!0})}),a.transferToBranch.invalid&&t.createElement(g,null,a.transferToBranch.message))),t.createElement("div",{className:"grid-item"},t.createElement(c,{fullWidth:!0,error:a.date.invalid},t.createElement(D,{dateAdapter:R},t.createElement(Y,{label:"Date",inputFormat:"DD/MM/YYYY",value:i.date,disableFuture:!0,disableMaskedInput:!0,onChange:O.bind(null,"date"),inputProps:{readOnly:!0},renderInput:e=>t.createElement(u,{name:"date",size:"small",...e,error:a.date.invalid})})),a.date.invalid&&t.createElement(g,null,a.date.message))),t.createElement("div",{className:"grid-item"},t.createElement(c,{fullWidth:!0,error:a.amount.invalid},t.createElement(u,{size:"small",variant:"outlined",label:"Amount",value:i.amount||"",error:a.amount.invalid,onChange:A,onInput:V,name:"amount",id:"amount"}),a.amount.invalid&&t.createElement(g,null,a.amount.message))),t.createElement("div",{className:"grid-item"},t.createElement(c,{fullWidth:!0},t.createElement(u,{size:"small",variant:"outlined",label:"Remark",value:i.remark,onChange:A,name:"remark",id:"remark"})))),t.createElement("div",{className:"right"},t.createElement(E,{variant:"outlined",size:"medium",onClick:W},"Back"),t.createElement(E,{variant:"outlined",size:"medium",onClick:M,className:"ml6"},"Reset"),t.createElement(E,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{We as default};