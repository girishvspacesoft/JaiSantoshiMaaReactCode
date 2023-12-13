import{r as c,a}from"./react-69b9bddd.js";import{f as J}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{aR as K,aV as U,aW as Z,aX as $,L as y,an as W,aY as ee}from"./index-aeb4570c.js";import{u as te,a as ae}from"./react-redux-13959126.js";import{a as re}from"./react-router-7dadf37a.js";import{O as se,Q as ie,a as ne,i as f,A as N,h as v,V as h,D as le,l as b,f as me}from"./material-04052d9a.js";import{D as oe}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const S={customer:{invalid:!1,message:""},rates:{invalid:!1,message:""},rate:{invalid:!1,message:""},article:{invalid:!1,message:""},station:{invalid:!1,message:""}},Qe=()=>{var _;const x={customer:null,customerName:"",rates:[],article:"",station:null,rate:"",ddCharges:""},R=[{field:"_id",headerName:"Id"},{field:"article",headerName:"Article",flex:1},{field:"stationName",headerName:"Station",flex:1},{field:"rate",headerName:"Rate",flex:1},{field:"ddCharges",headerName:"DD charges",flex:1},{field:"actions",headerName:"Action",sortable:!1,flex:1,renderCell:e=>{const t=r=>(r.stopPropagation(),q(e.row._id));return a.createElement(a.Fragment,null,a.createElement(me,{size:"small",onClick:t,color:"error"},a.createElement(J,null)))}}],[l,u]=c.useState(x),[H,M]=c.useState([]),[P,B]=c.useState([]),[g,O]=c.useState([]),[m,A]=c.useState(S),[L,o]=c.useState(""),k=te(K),D=re(),E=ae(),F=c.useCallback(()=>{D("/master/rateMasterList")},[D]),q=e=>{var r,s;const t=(s=(r=l.rates)==null?void 0:r.filter)==null?void 0:s.call(r,i=>i._id!==e);u(i=>({...i,rates:t}))};c.useEffect(()=>{E(U()).then(({payload:e={}})=>{var r,s;const{message:t}=(e==null?void 0:e.data)||{};if(t)o(t);else{o("");const i=(s=(r=e==null?void 0:e.data)==null?void 0:r.map)==null?void 0:s.call(r,n=>({...n,label:n.name,value:n.name}));B(i)}}).catch(e=>{o(e.message)}),E(Z()).then(({payload:e={}})=>{var r,s;const{message:t}=(e==null?void 0:e.data)||{};if(t)o(t);else{o("");const i=(s=(r=e==null?void 0:e.data)==null?void 0:r.map)==null?void 0:s.call(r,n=>({...n,label:n.name,value:n.name}));O(i)}}).catch(e=>{o(e.message)}),z("")},[]);const z=e=>{var r;const t=(r=e.trim)==null?void 0:r.call(e);((t==null?void 0:t.length)>2||!t)&&E($(t)).then(({payload:s={}})=>{var n,d;const{message:i}=(s==null?void 0:s.data)||{};if(i)o(i);else{o("");const p=(d=(n=s==null?void 0:s.data)==null?void 0:n.map)==null?void 0:d.call(n,C=>({...C,label:C.name,value:C.name}));M(p)}}).catch(s=>{o(s.message)})},T=({target:e})=>{z(e.value)},I=e=>{const t=e.target.name,r=e.target.value;u(s=>({...s,[t]:r}))},w=e=>{var t,r;if(e.preventDefault(),!G(l)){const s=l;s.customer=s.customer._id,(r=(t=s.rates)==null?void 0:t.forEach)==null||r.call(t,i=>{i.station=i.station._id,delete i._id}),E(ee(s)).then(({payload:i={}})=>{const{message:n}=(i==null?void 0:i.data)||{};n?o(n):(o(""),u(x),F())}).catch(i=>{o(i.message)})}},V=()=>{F()},G=e=>{var s;const t={...S};e.customer||(t.customer={invalid:!0,message:"Customer is required"}),(s=e.rates)!=null&&s.length||(t.rates={invalid:!0,message:"At least one entry is required"});let r=!1;for(const i in t)t[i].invalid===!0&&(r=!0);return r&&A(t),r},Q=(e,t,r)=>{u(s=>({...s,[r]:t,customerName:(t==null?void 0:t.name)||""}))},X=(e,t)=>{u(r=>({...r,article:t}))},Y=(e,t,r)=>{u(s=>({...s,[r]:t}))},j=e=>{var s,i;e.preventDefault();const t={...S};l.customer?t.customer={invalid:!1,message:""}:t.customer={invalid:!0,message:"Customer is required"},l.article?t.article={invalid:!1,message:""}:t.article={invalid:!0,message:"Article is required"},l.station?t.station={invalid:!1,message:""}:t.station={invalid:!0,message:"Station is required"},!l.rate||l.rate<0?t.rate={invalid:!0,message:"Rate should be greater than 0"}:t.rate={invalid:!1,message:""};let r=!1;for(const n in t)t[n].invalid===!0&&(r=!0);if(r)A(t);else{const n={_id:Math.random(),article:l.article,station:l.station,stationName:l.station.name,rate:l.rate,ddCharges:l.ddCharges};(i=(s=l.rates)==null?void 0:s.some)!=null&&i.call(s,({station:d,article:p})=>d===n.station&&p===n.article)?o("Already item exist."):(u(d=>({...d,rates:[...d.rates,n],article:"",station:null,rate:"",ddCharges:""})),o(""))}};return a.createElement(a.Fragment,null,k&&a.createElement(y,null),a.createElement("div",{className:"inner-wrap"},a.createElement("h1",{className:"pageHead"},"Add rate master"),L!==""&&a.createElement(se,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},a.createElement(ie,{severity:"error"},L)),!k&&a.createElement("div",null,a.createElement("form",{action:"",onSubmit:w},a.createElement(ne,{sx:{padding:"20px",marginBottom:"20px"}},a.createElement("div",{className:"grid grid-6-col"},a.createElement("div",{className:"grid-item"},a.createElement(f,{fullWidth:!0,error:m.customer.invalid},a.createElement(N,{disablePortal:!0,autoSelect:!0,size:"small",name:"customer",options:H,value:l.customer,onChange:(e,t)=>Q(e,t,"customer"),openOnFocus:!0,renderInput:e=>a.createElement(v,{...e,label:"Customer",error:m.customer.invalid,fullWidth:!0,onChange:T})}),m.customer.invalid&&a.createElement(h,null,m.customer.message)))),a.createElement(le,{className:"mb10"}),a.createElement("div",{className:"grid grid-6-col"},a.createElement("div",{className:"grid-item"},a.createElement(f,{fullWidth:!0,error:m.article.invalid},a.createElement(N,{autoSelect:!0,size:"small",name:"article",options:(_=g==null?void 0:g.map)==null?void 0:_.call(g,e=>e.name),value:l.article||null,onChange:(e,t)=>X(e,t),openOnFocus:!0,renderInput:e=>a.createElement(v,{...e,label:"Article",error:m.article.invalid,fullWidth:!0})}),m.article.invalid&&a.createElement(h,null,m.article.message))),a.createElement("div",{className:"grid-item"},a.createElement(f,{fullWidth:!0,error:m.station.invalid},a.createElement(N,{autoSelect:!0,size:"small",name:"place",options:P,value:l.station,onChange:(e,t)=>Y(e,t,"station"),openOnFocus:!0,renderInput:e=>a.createElement(v,{...e,label:"Station",error:m.station.invalid,fullWidth:!0})}),m.station.invalid&&a.createElement(h,null,m.station.message))),a.createElement("div",{className:"grid-item"},a.createElement(f,{fullWidth:!0,error:m.rate.invalid},a.createElement(v,{size:"small",variant:"outlined",label:"Rate",value:l.rate||"",onChange:I,onInput:W,name:"rate",id:"rate",error:m.rate.invalid}),m.rate.invalid&&a.createElement(h,null,m.rate.message))),a.createElement("div",{className:"grid-item"},a.createElement(f,{fullWidth:!0},a.createElement(v,{size:"small",variant:"outlined",label:"DD charges",value:l.ddCharges||"",onChange:I,onInput:W,name:"ddCharges",id:"ddCharges"}))),a.createElement("div",{className:"grid-item"},a.createElement(b,{type:"button",variant:"outlined",size:"medium",onClick:j},"Add")))),a.createElement("div",{style:{width:"100%",marginBottom:"20px"}},m.rates.invalid&&a.createElement("div",null,a.createElement(h,{className:"error"},m.rates.message)),a.createElement(oe,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>(e==null?void 0:e._id)||Math.random(),rows:l.rates,columns:R,initialState:{...R,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0})),a.createElement("div",{className:"right"},a.createElement(b,{type:"button",variant:"outlined",size:"medium",onClick:V},"Back"),a.createElement(b,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save"))))))};export{Qe as default};
