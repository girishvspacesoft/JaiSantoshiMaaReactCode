<<<<<<< HEAD:build/assets/UserRegister-7f3aa5d0.js
import{r as i,a as t}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{d8 as d,L as f,d9 as u}from"./index-1d9d8716.js";import{a as h,u as g}from"./react-redux-13959126.js";import{O as x,Q as E,a as N}from"./material-04052d9a.js";import{D as w}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-7dadf37a.js";import"./@remix-run-8989dd9f.js";import"./react-router-dom-38324838.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const te=()=>{const o=h(),n=g(d),a=[{field:"id",headerName:"Id"},{field:"branch",headerName:"Branch Name",flex:1},{field:"username",headerName:"User Name",flex:1},{field:"employee",headerName:"Employee Name",flex:1},{field:"createdBy",headerName:"Approved Role",flex:1},{field:"",headerName:"Rejected Role",flex:1},{field:"createdAt",headerName:"Active Date",flex:1},{field:"active",headerName:"Activate",flex:1,renderCell:e=>t.createElement("strong",null," ",e.row.active?"Yes":"No")}],[s,r]=i.useState(""),[c,l]=i.useState([]),p=()=>{o(u()).then(({payload:e={}})=>{if((e==null?void 0:e.status)===200){const{message:m}=(e==null?void 0:e.data)||{};m?r(m):(r(""),l(e==null?void 0:e.data))}}).catch(()=>{r("Something went wrong! Please try later or contact Administrator.")}).finally(()=>{})};return i.useEffect(()=>{p()},[]),t.createElement(t.Fragment,null,n&&t.createElement(f,null),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head-1",style:{display:"flex",justifyContent:"space-between"}},t.createElement("h1",{className:"pageHead"},"User Register")),s!==""&&t.createElement(x,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(E,{severity:"error"},s)),t.createElement(N,{sx:{width:"100%"}},t.createElement(w,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",rows:c,columns:a,getRowId:e=>e.username,initialState:{...a,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{te as default};
=======
import{r as i,a as t}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{d8 as d,L as f,d9 as u}from"./index-aeb4570c.js";import{a as h,u as g}from"./react-redux-13959126.js";import{O as x,Q as E,a as N}from"./material-04052d9a.js";import{D as w}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-7dadf37a.js";import"./@remix-run-8989dd9f.js";import"./react-router-dom-38324838.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const te=()=>{const o=h(),n=g(d),a=[{field:"id",headerName:"Id"},{field:"branch",headerName:"Branch Name",flex:1},{field:"username",headerName:"User Name",flex:1},{field:"employee",headerName:"Employee Name",flex:1},{field:"createdBy",headerName:"Approved Role",flex:1},{field:"",headerName:"Rejected Role",flex:1},{field:"createdAt",headerName:"Active Date",flex:1},{field:"active",headerName:"Activate",flex:1,renderCell:e=>t.createElement("strong",null," ",e.row.active?"Yes":"No")}],[s,r]=i.useState(""),[c,l]=i.useState([]),p=()=>{o(u()).then(({payload:e={}})=>{if((e==null?void 0:e.status)===200){const{message:m}=(e==null?void 0:e.data)||{};m?r(m):(r(""),l(e==null?void 0:e.data))}}).catch(()=>{r("Something went wrong! Please try later or contact Administrator.")}).finally(()=>{})};return i.useEffect(()=>{p()},[]),t.createElement(t.Fragment,null,n&&t.createElement(f,null),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head-1",style:{display:"flex",justifyContent:"space-between"}},t.createElement("h1",{className:"pageHead"},"User Register")),s!==""&&t.createElement(x,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(E,{severity:"error"},s)),t.createElement(N,{sx:{width:"100%"}},t.createElement(w,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",rows:c,columns:a,getRowId:e=>e.username,initialState:{...a,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{te as default};
>>>>>>> 61ebb17bfce3db4c896f7668cd49bc44203937b9:build/assets/UserRegister-250f70bb.js
