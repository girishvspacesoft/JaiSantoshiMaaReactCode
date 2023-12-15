import{r,a as e}from"./react-69b9bddd.js";import{c as G,e as R,f as U}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as $}from"./Dialog-c8953a08.js";import{K as B,L as W,k as j,M as K,N as Q,O as V,o as S}from"./index-aeb4570c.js";import{a as Y,u as v}from"./react-redux-13959126.js";import{a as q}from"./react-router-7dadf37a.js";import{W as J,Q as b,l as X,O as Z,A as ee,h as x,m as te,f as A}from"./material-04052d9a.js";import{D as ae,G as re}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const oe=[{label:"All",value:""},{label:"Name",value:"name"},{label:"Address",value:"address"},{label:"Email",value:"email"},{label:"City",value:"city"},{label:"Telephone",value:"telephone"}],Re=()=>{const g=[{field:"_id",headerName:"Id"},{field:"name",headerName:"Name",flex:1},{field:"address",headerName:"Address",flex:1},{field:"email",headerName:"Email",flex:1},{field:"city",headerName:"City",flex:1},{field:"telephone",headerName:"Telephone",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:t=>{const a=n=>(n.stopPropagation(),L(t.row._id)),p=n=>(n.stopPropagation(),T(t.row._id));return e.createElement(e.Fragment,null,e.createElement(A,{size:"small",onClick:a,color:"primary"},e.createElement(R,null)),"  ",j()?e.createElement(A,{size:"small",onClick:p,color:"error"},e.createElement(U,null)):null)}}],m=Y(),{search:l}=v(({customer:t})=>t),h=q(),[f,i]=r.useState(""),[y,c]=r.useState(!1),[N,d]=r.useState(!1),[w,D]=r.useState(""),I=v(B),[o,z]=r.useState({label:"All",value:""}),[s,C]=r.useState({page:0,pageSize:100}),[u,O]=r.useState({isLoading:!1,data:[],total:0}),E=()=>{m(K({pagination:{limit:s.pageSize?s.pageSize:100,page:s.page+1},search:l,searchType:o==null?void 0:o.value})).then(({payload:t={}})=>{const{message:a,customers:p,count:n}=(t==null?void 0:t.data)||{};a?i(a):(i(""),O(H=>({...H,isLoading:!1,data:p,total:n})))}).catch(()=>{i("Something went wrong! Please try later or contact Administrator.")})};r.useEffect(()=>{E()},[s,o,l]);const _=t=>{m(Q(t.target.value)),C(a=>({...a,page:0}))},k=()=>{h("/master/customers/addCustomer")},L=t=>{S("Admin","Customers","write")?h("/master/customers/editCustomer",{state:{customerId:t}}):d(!0)},T=t=>{S("Admin","Customers","write")?(D(t),c(!0)):d(!0)},P=t=>{t.target.value==="true"?m(V(w)).then(()=>{c(!1),E()}).catch(()=>{i("Something went wrong! Please try later or contact Administrator.")}):c(!1)},F=()=>{d(!1)},M=(t,a)=>{z(a)};return e.createElement(e.Fragment,null,I&&e.createElement(W,null),y&&e.createElement($,{isOpen:!0,onClose:P,title:"Are you sure?",content:"Do you want to delete the customer?",warning:!0}),e.createElement(J,{anchorOrigin:{vertical:"top",horizontal:"center"},open:N,autoHideDuration:6e3,onClose:F},e.createElement(b,{severity:"warning"},"You are not authorized to perform the action")),e.createElement("div",{className:"inner-wrap"},e.createElement("div",{className:"page_head"},e.createElement("h1",{className:"pageHead"},"Customers list"),e.createElement("div",{className:"page_actions"},e.createElement(X,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:k},"Add a customer"))),f!==""&&e.createElement(Z,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(b,{severity:"error"},f)),e.createElement("div",{style:{width:"100%"}},e.createElement(ae,{autoHeight:!0,density:"compact",rows:u.data,rowCount:u.total,loading:u.isLoading,pageSizeOptions:[100],paginationModel:s,onPaginationModelChange:C,paginationMode:"server",columns:g,getRowId:t=>t==null?void 0:t._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...g,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>e.createElement(re,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},e.createElement(ee,{size:"small",name:"filter",options:oe,value:o||null,onChange:(t,a)=>M(t,a),style:{width:"200px"},openOnFocus:!0,renderInput:t=>e.createElement(x,{...t,label:"Type",fullWidth:!0})}),e.createElement(x,{variant:"standard",placeholder:"Search...",autoFocus:!!l,onChange:_,value:l,style:{width:"300px"},InputProps:{startAdornment:e.createElement(te,{position:"start"},e.createElement(G,null))}}))}}))))};export{Re as default};