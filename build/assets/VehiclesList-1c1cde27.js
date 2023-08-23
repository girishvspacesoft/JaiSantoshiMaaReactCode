import{r,a as t}from"./react-bfabd40c.js";import{c as F,e as R,f as G}from"./icons-material-4539f19e.js";import"./Card.module-3bdbfb7f.js";import{C as H}from"./Dialog-cfe6f9ef.js";import{ac as U,L as $,ad as j,ae as B,af as M,n as S}from"./index-60b53c60.js";import{a as Q,u as w}from"./react-redux-45d870ba.js";import{u as W,D as Y,G as q}from"./x-data-grid-cceece3f.js";import{a as J}from"./react-router-1b5f20a2.js";import{j as K}from"./utils-c03c978f.js";import{W as X,Q as x,l as Z,O as ee,h as te,m as re,f as C}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const Ge=()=>{const u=[{field:"_id",headerName:"Id"},{field:"vehicleNo",headerName:"Vehicle no",flex:1},{field:"ownerName",headerName:"Owner",flex:1},{field:"ownerAddress",headerName:"Owner address",flex:1},{field:"vehicleType",headerName:"Vehicle type",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const a=i=>(i.stopPropagation(),y(e.row._id)),o=i=>(i.stopPropagation(),P(e.row._id));return t.createElement(t.Fragment,null,t.createElement(C,{size:"small",onClick:a,color:"primary"},t.createElement(R,null)),"  ",t.createElement(C,{size:"small",onClick:o,color:"error"},t.createElement(G,null)))}}],m=Q(),d=W(),{search:n}=w(({vehicle:e})=>e),h=J(),[s,A]=r.useState([]),[f,l]=r.useState(""),[N,c]=r.useState(!1),[b,V]=r.useState(""),[D,p]=r.useState(!1),I=w(U),[_,g]=r.useState(!1),E=()=>{m(j()).then(({payload:e={}})=>{const{message:a}=(e==null?void 0:e.data)||{};a?l(a):(l(""),A(e==null?void 0:e.data))}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})};r.useEffect(()=>{E()},[]);const v=r.useMemo(()=>K(e=>{var a,o,i;d.current.setQuickFilterValues((i=(o=(a=e.split)==null?void 0:a.call(e," "))==null?void 0:o.filter)==null?void 0:i.call(o,L=>L!==""))},500),[d]);r.useEffect(()=>{n&&(s!=null&&s.length)&&(g(!0),v(n),setTimeout(()=>{g(!1)},500))},[s]);const k=e=>{v(e.target.value),m(B(e.target.value))},O=()=>{h("/master/vehicles/addVehicle")},y=e=>{S("Admin","Vehicle","write")?h("/master/vehicles/editVehicle",{state:{vehicleId:e}}):p(!0)},P=e=>{S("Admin","Vehicle","write")?(V(e),c(!0)):p(!0)},T=e=>{c(!0),e.target.value==="true"?m(M(b)).then(()=>{c(!1),E()}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}):c(!1)},z=()=>{p(!1)};return t.createElement(t.Fragment,null,(I||_)&&t.createElement($,null),N&&t.createElement(H,{isOpen:!0,onClose:T,title:"Are you sure?",content:"Do you want to delete the vehicle?",warning:!0}),t.createElement(X,{anchorOrigin:{vertical:"top",horizontal:"center"},open:D,autoHideDuration:6e3,onClose:z},t.createElement(x,{severity:"warning"},"You are not authorized to perform the action")),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Vehicles list"),t.createElement("div",{className:"page_actions"},t.createElement(Z,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:O},"Add a vehicle"))),f!==""&&t.createElement(ee,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(x,{severity:"error"},f)),t.createElement("div",{style:{width:"100%"}},t.createElement(Y,{apiRef:d,sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:s,columns:u,initialState:{...u,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(q,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(te,{variant:"standard",placeholder:"Search...",autoFocus:!!n,onChange:k,value:n,InputProps:{startAdornment:t.createElement(re,{position:"start"},t.createElement(F,null))}}))},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{Ge as default};
