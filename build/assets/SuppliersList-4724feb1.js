import{r,a as t}from"./react-69b9bddd.js";import{c as R,e as G,f as H}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as U}from"./Dialog-c8953a08.js";import{av as $,L as j,k as B,aw as M,ax as Q,ay as W,o as x}from"./index-aeb4570c.js";import{a as Y,u as C}from"./react-redux-13959126.js";import{u as q,D as J,G as K}from"./x-data-grid-83fc2422.js";import{a as X}from"./react-router-7dadf37a.js";import{j as Z}from"./utils-49fe0532.js";import{W as V,Q as v,l as ee,O as te,h as re,m as ae,f as A}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const He=()=>{const u=[{field:"_id",headerName:"Id"},{field:"name",headerName:"Name",flex:1},{field:"type",headerName:"Type",flex:1},{field:"address",headerName:"Address",flex:1},{field:"email",headerName:"Email",flex:1},{field:"city",headerName:"City",flex:1},{field:"phone",headerName:"Contact No",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const a=o=>(o.stopPropagation(),P(e.row._id)),i=o=>(o.stopPropagation(),T(e.row._id));return t.createElement(t.Fragment,null,t.createElement(A,{size:"small",onClick:a,color:"primary"},t.createElement(G,null)),"  ",B()?t.createElement(A,{size:"small",onClick:i,color:"error"},t.createElement(H,null)):null)}}],m=Y(),c=q(),{search:n}=C(({supplier:e})=>e),f=X(),[s,N]=r.useState([]),[h,l]=r.useState(""),[w,p]=r.useState(!1),[b,y]=r.useState(""),[D,d]=r.useState(!1),I=C($),[k,g]=r.useState(!1),S=()=>{m(M()).then(({payload:e={}})=>{const{message:a}=(e==null?void 0:e.data)||{};a?l(a):(l(""),N(e==null?void 0:e.data))}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})};r.useEffect(()=>{S()},[]);const E=r.useMemo(()=>Z(e=>{var a,i,o;c.current.setQuickFilterValues((o=(i=(a=e.split)==null?void 0:a.call(e," "))==null?void 0:i.filter)==null?void 0:o.call(i,F=>F!==""))},500),[c]);r.useEffect(()=>{n&&(s!=null&&s.length)&&(g(!0),E(n),setTimeout(()=>{g(!1)},500))},[s]);const _=e=>{E(e.target.value),m(Q(e.target.value))},O=()=>{f("/master/suppliers/addSupplier")},P=e=>{x("Admin","Supplier","write")?f("/master/suppliers/editSupplier",{state:{supplierId:e}}):d(!0)},T=e=>{x("Admin","Supplier","write")?(y(e),p(!0)):d(!0)},z=e=>{e.target.value==="true"?m(W(b)).then(()=>{p(!1),S()}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}):p(!1)},L=()=>{d(!1)};return t.createElement(t.Fragment,null,(I||k)&&t.createElement(j,null),w&&t.createElement(U,{isOpen:!0,onClose:z,title:"Are you sure?",content:"Do you want to delete the supplier?",warning:!0}),t.createElement(V,{anchorOrigin:{vertical:"top",horizontal:"center"},open:D,autoHideDuration:6e3,onClose:L},t.createElement(v,{severity:"warning"},"You are not authorized to perform the action")),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Suppliers list"),t.createElement("div",{className:"page_actions"},t.createElement(ee,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:O},"Add a supplier"))),h!==""&&t.createElement(te,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(v,{severity:"error"},h)),t.createElement("div",{style:{width:"100%"}},t.createElement(J,{apiRef:c,sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:s,columns:u,initialState:{...u,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(K,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(re,{variant:"standard",placeholder:"Search...",autoFocus:!!n,onChange:_,value:n,style:{width:"300px"},InputProps:{startAdornment:t.createElement(ae,{position:"start"},t.createElement(R,null))}}))},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{He as default};