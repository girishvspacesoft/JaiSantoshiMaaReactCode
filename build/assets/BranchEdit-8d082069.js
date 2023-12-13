<<<<<<< HEAD:build/assets/BranchEdit-8d082069.js
import{r as o,a as t}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{C as G,G as J,I as M,L as _,J as j}from"./index-1d9d8716.js";import{u as H,a as K}from"./react-redux-13959126.js";import{b as U,a as Y}from"./react-router-7dadf37a.js";import{O as Z,Q as $,a as D,i as u,h as p,V as v,A as I,l as C}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const N={branchCode:"",abbreviation:"",name:"",description:"",place:"",printer:""},S={branchCode:{invalid:!1,message:""},abbreviation:{invalid:!1,message:""},name:{invalid:!1,message:""},place:{invalid:!1,message:""},printer:{invalid:!1,message:""}},y=["Epson LQ-300+","Epson LX-300+","Epson LX-300+II","TVS MPS 250 Champion"],Ie=()=>{const[s,c]=o.useState(N),{places:n}=H(({branch:e})=>e),[l,k]=o.useState(N),[a,B]=o.useState(S),[x,d]=o.useState(""),q=H(G),A=U(),{branchId:b}=A.state,f=K(),z=Y(),L=o.useCallback(()=>{z("/master/branches")},[z]);o.useEffect(()=>{var e;c({...l,place:(e=n==null?void 0:n.find)==null?void 0:e.call(n,({_id:r})=>(l==null?void 0:l.place)===r)})},[l,n]),o.useEffect(()=>{f(J())},[]),o.useEffect(()=>{b&&b!==""&&f(M(b)).then(({payload:e={}})=>{const{message:r}=(e==null?void 0:e.data)||{};r?d(r):(d(""),c(e==null?void 0:e.data),k(e==null?void 0:e.data))}).catch(e=>{d(e.message)})},[b]);const T=()=>{var r;const e=(r=n==null?void 0:n.find)==null?void 0:r.call(n,({_id:i})=>(l==null?void 0:l.place)===i);c({...l,place:e}),d(""),B(S)},g=e=>{const r=e.target.name,i=e.target.value;c(m=>({...m,[r]:i}))},O=(e,r)=>{c(i=>({...i,place:r}))},R=(e,r)=>{c(i=>({...i,printer:r}))},Q=e=>{var r;e.preventDefault(),V(s)||f(j({...s,place:(r=s.place)==null?void 0:r._id})).then(({payload:i={}})=>{const{message:m}=(i==null?void 0:i.data)||{};m?d(m):(d(""),c(N),L())}).catch(i=>{d(i.message)})},V=e=>{var m,F,E,P,h,W;const r={...S};(F=(m=e.branchCode)==null?void 0:m.trim)!=null&&F.call(m)||(r.branchCode={invalid:!0,message:"Branch code is required"}),(P=(E=e.abbreviation)==null?void 0:E.trim)!=null&&P.call(E)||(r.abbreviation={invalid:!0,message:"Abbreviation is required"}),(W=(h=e.name)==null?void 0:h.trim)!=null&&W.call(h)||(r.name={invalid:!0,message:"Branch name is required"}),e.place||(r.place={invalid:!0,message:"Place is required"}),e.printer||(r.printer={invalid:!0,message:"Printer is required"});let i=!1;for(const w in r)r[w].invalid===!0&&(i=!0);return i&&B(r),i},X=()=>{L()};return t.createElement(t.Fragment,null,q&&t.createElement(_,null),t.createElement("h1",{className:"pageHead"},"Edit a branch"),x!==""&&t.createElement(Z,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement($,{severity:"error"},x)),t.createElement(D,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("form",{action:"",onSubmit:Q},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.branchCode.invalid},t.createElement(p,{variant:"outlined",label:"Branch code",value:s.branchCode,onChange:g,name:"branchCode",id:"branchCode",size:"small",error:a.branchCode.invalid}),a.branchCode.invalid&&t.createElement(v,null,a.branchCode.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.abbreviation.invalid},t.createElement(p,{variant:"outlined",label:"Abbreviation",error:a.abbreviation.invalid,value:s.abbreviation,onChange:g,name:"abbreviation",id:"abbreviation",size:"small"}),a.abbreviation.invalid&&t.createElement(v,null,a.abbreviation.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.name.invalid},t.createElement(p,{variant:"outlined",label:"Name",error:a.name.invalid,value:s.name,onChange:g,name:"name",id:"name",size:"small"}),a.name.invalid&&t.createElement(v,null,a.name.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0},t.createElement(p,{variant:"outlined",label:"Description",value:s.description,onChange:g,name:"description",id:"description",size:"small"}))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,size:"small",error:a.place.invalid},t.createElement(I,{disablePortal:!0,size:"small",name:"place",options:n,value:s.place,onChange:(e,r)=>O(e,r),openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Place",error:a.place.invalid,fullWidth:!0})}),a.place.invalid&&t.createElement(v,null,a.place.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,size:"small",error:a.printer.invalid},t.createElement(I,{disablePortal:!0,size:"small",name:"printer",options:y,value:s.printer,onChange:(e,r)=>R(e,r),getOptionLabel:e=>e,openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Printer",error:a.printer.invalid,fullWidth:!0})}),a.printer.invalid&&t.createElement(v,null,a.printer.message)))),t.createElement("div",{className:"right"},t.createElement(C,{variant:"outlined",size:"medium",onClick:X},"Back"),t.createElement(C,{variant:"outlined",size:"medium",onClick:T,className:"ml6"},"Reset"),t.createElement(C,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save")))))};export{Ie as default};
=======
import{r as o,a as t}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{C as G,G as J,I as M,L as _,J as j}from"./index-aeb4570c.js";import{u as H,a as K}from"./react-redux-13959126.js";import{b as U,a as Y}from"./react-router-7dadf37a.js";import{O as Z,Q as $,a as D,i as u,h as p,V as v,A as I,l as C}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const N={branchCode:"",abbreviation:"",name:"",description:"",place:"",printer:""},S={branchCode:{invalid:!1,message:""},abbreviation:{invalid:!1,message:""},name:{invalid:!1,message:""},place:{invalid:!1,message:""},printer:{invalid:!1,message:""}},y=["Epson LQ-300+","Epson LX-300+","Epson LX-300+II","TVS MPS 250 Champion"],Ie=()=>{const[s,c]=o.useState(N),{places:n}=H(({branch:e})=>e),[l,k]=o.useState(N),[a,B]=o.useState(S),[x,d]=o.useState(""),q=H(G),A=U(),{branchId:b}=A.state,f=K(),z=Y(),L=o.useCallback(()=>{z("/master/branches")},[z]);o.useEffect(()=>{var e;c({...l,place:(e=n==null?void 0:n.find)==null?void 0:e.call(n,({_id:r})=>(l==null?void 0:l.place)===r)})},[l,n]),o.useEffect(()=>{f(J())},[]),o.useEffect(()=>{b&&b!==""&&f(M(b)).then(({payload:e={}})=>{const{message:r}=(e==null?void 0:e.data)||{};r?d(r):(d(""),c(e==null?void 0:e.data),k(e==null?void 0:e.data))}).catch(e=>{d(e.message)})},[b]);const T=()=>{var r;const e=(r=n==null?void 0:n.find)==null?void 0:r.call(n,({_id:i})=>(l==null?void 0:l.place)===i);c({...l,place:e}),d(""),B(S)},g=e=>{const r=e.target.name,i=e.target.value;c(m=>({...m,[r]:i}))},O=(e,r)=>{c(i=>({...i,place:r}))},R=(e,r)=>{c(i=>({...i,printer:r}))},Q=e=>{var r;e.preventDefault(),V(s)||f(j({...s,place:(r=s.place)==null?void 0:r._id})).then(({payload:i={}})=>{const{message:m}=(i==null?void 0:i.data)||{};m?d(m):(d(""),c(N),L())}).catch(i=>{d(i.message)})},V=e=>{var m,F,E,P,h,W;const r={...S};(F=(m=e.branchCode)==null?void 0:m.trim)!=null&&F.call(m)||(r.branchCode={invalid:!0,message:"Branch code is required"}),(P=(E=e.abbreviation)==null?void 0:E.trim)!=null&&P.call(E)||(r.abbreviation={invalid:!0,message:"Abbreviation is required"}),(W=(h=e.name)==null?void 0:h.trim)!=null&&W.call(h)||(r.name={invalid:!0,message:"Branch name is required"}),e.place||(r.place={invalid:!0,message:"Place is required"}),e.printer||(r.printer={invalid:!0,message:"Printer is required"});let i=!1;for(const w in r)r[w].invalid===!0&&(i=!0);return i&&B(r),i},X=()=>{L()};return t.createElement(t.Fragment,null,q&&t.createElement(_,null),t.createElement("h1",{className:"pageHead"},"Edit a branch"),x!==""&&t.createElement(Z,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement($,{severity:"error"},x)),t.createElement(D,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("form",{action:"",onSubmit:Q},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.branchCode.invalid},t.createElement(p,{variant:"outlined",label:"Branch code",value:s.branchCode,onChange:g,name:"branchCode",id:"branchCode",size:"small",error:a.branchCode.invalid}),a.branchCode.invalid&&t.createElement(v,null,a.branchCode.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.abbreviation.invalid},t.createElement(p,{variant:"outlined",label:"Abbreviation",error:a.abbreviation.invalid,value:s.abbreviation,onChange:g,name:"abbreviation",id:"abbreviation",size:"small"}),a.abbreviation.invalid&&t.createElement(v,null,a.abbreviation.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,error:a.name.invalid},t.createElement(p,{variant:"outlined",label:"Name",error:a.name.invalid,value:s.name,onChange:g,name:"name",id:"name",size:"small"}),a.name.invalid&&t.createElement(v,null,a.name.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0},t.createElement(p,{variant:"outlined",label:"Description",value:s.description,onChange:g,name:"description",id:"description",size:"small"}))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,size:"small",error:a.place.invalid},t.createElement(I,{disablePortal:!0,size:"small",name:"place",options:n,value:s.place,onChange:(e,r)=>O(e,r),openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Place",error:a.place.invalid,fullWidth:!0})}),a.place.invalid&&t.createElement(v,null,a.place.message))),t.createElement("div",{className:"grid-item"},t.createElement(u,{fullWidth:!0,size:"small",error:a.printer.invalid},t.createElement(I,{disablePortal:!0,size:"small",name:"printer",options:y,value:s.printer,onChange:(e,r)=>R(e,r),getOptionLabel:e=>e,openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Printer",error:a.printer.invalid,fullWidth:!0})}),a.printer.invalid&&t.createElement(v,null,a.printer.message)))),t.createElement("div",{className:"right"},t.createElement(C,{variant:"outlined",size:"medium",onClick:X},"Back"),t.createElement(C,{variant:"outlined",size:"medium",onClick:T,className:"ml6"},"Reset"),t.createElement(C,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save")))))};export{Ie as default};
>>>>>>> 61ebb17bfce3db4c896f7668cd49bc44203937b9:build/assets/BranchEdit-fc85414a.js
