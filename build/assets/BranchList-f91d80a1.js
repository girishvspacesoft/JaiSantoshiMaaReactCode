import{r,a as t}from"./react-bfabd40c.js";import{c as L,e as R,f as G}from"./icons-material-4539f19e.js";import{B as H,L as U,C as $,D as j,E as M,n as S}from"./index-2b581a02.js";import"./Card.module-3bdbfb7f.js";import{C as Q}from"./Dialog-cfe6f9ef.js";import{a as W,u as C}from"./react-redux-45d870ba.js";import{u as Y,D as q,G as J}from"./x-data-grid-cceece3f.js";import{a as K}from"./react-router-622b2d59.js";import{j as X}from"./utils-c03c978f.js";import{W as Z,Q as v,l as V,O as ee,h as te,m as re,f as x}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const Ge=()=>{const u=[{field:"_id",headerName:"Id"},{field:"branchCode",headerName:"Code",flex:1},{field:"abbreviation",headerName:"Abbreviation",flex:1},{field:"name",headerName:"Name",flex:1},{field:"description",headerName:"Description",flex:1},{field:"place",headerName:"Place",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const a=n=>(n.stopPropagation(),O(e.row._id)),o=n=>(n.stopPropagation(),z(e.row._id));return t.createElement(t.Fragment,null,t.createElement(x,{size:"small",onClick:a,color:"primary"},t.createElement(R,null)),"  ",t.createElement(x,{size:"small",onClick:o,color:"error"},t.createElement(G,null)))}}],l=W(),A=C(H),m=Y(),{search:i}=C(({branch:e})=>e),h=K(),[s,B]=r.useState([]),[f,c]=r.useState(""),[N,d]=r.useState(!1),[w,D]=r.useState(""),[I,p]=r.useState(!1),[_,g]=r.useState(!1),E=()=>{l($()).then(({payload:e={}})=>{const{message:a}=(e==null?void 0:e.data)||{};a?c(""):(c(""),B(e==null?void 0:e.data))}).catch(()=>{c("Something went wrong! Please try later or contact Administrator.")})};r.useEffect(()=>{E()},[]);const b=r.useMemo(()=>X(e=>{var a,o,n;m.current.setQuickFilterValues((n=(o=(a=e.split)==null?void 0:a.call(e," "))==null?void 0:o.filter)==null?void 0:n.call(o,F=>F!==""))},500),[m]);r.useEffect(()=>{i&&(s!=null&&s.length)&&(g(!0),b(i),setTimeout(()=>{g(!1)},500))},[s]);const k=e=>{b(e.target.value),l(j(e.target.value))},P=()=>{h("/master/branches/addBranch")},O=e=>{S("Admin","Branch","write")?h("/master/branches/editBranch",{state:{branchId:e}}):p(!0)},z=e=>{S("Admin","Branch","write")?(D(e),d(!0)):p(!0)},T=e=>{e.target.value==="true"?l(M(w)).then(()=>{d(!1),E()}).catch(()=>{c("Something went wrong! Please try later or contact Administrator.")}):d(!1)},y=()=>{p(!1)};return t.createElement(t.Fragment,null,(A||_)&&t.createElement(U,null),N&&t.createElement(Q,{isOpen:!0,onClose:T,title:"Are you sure?",content:"Do you want to delete the branch?",warning:!0}),t.createElement(Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:I,autoHideDuration:6e3,onClose:y},t.createElement(v,{severity:"warning"},"You are not authorized to perform the action")),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Branch list"),t.createElement("div",{className:"page_actions"},t.createElement(V,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:P},"Add a branch"))),f!==""&&t.createElement(ee,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(v,{severity:"error"},f)),t.createElement("div",{style:{width:"100%"}},t.createElement(q,{apiRef:m,sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:s,columns:u,initialState:{...u,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(J,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(te,{variant:"standard",placeholder:"Search...",autoFocus:!!i,onChange:k,value:i,InputProps:{startAdornment:t.createElement(re,{position:"start"},t.createElement(L,null))}}))},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{Ge as default};