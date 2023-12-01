import{r as a,a as t}from"./react-69b9bddd.js";import{c as F,e as M,f as H}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as R}from"./Dialog-c8953a08.js";import{aJ as G,L as U,k as $,aK as j,o as p,aL as Q,aM as J}from"./index-1d9d8716.js";import{a as K,u as S}from"./react-redux-13959126.js";import{a as W}from"./react-router-7dadf37a.js";import{u as Y,D as q,G as X}from"./x-data-grid-83fc2422.js";import{j as Z}from"./utils-49fe0532.js";import{W as V,Q as b,l as ee,O as te,h as ae,m as re,f as x}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const He=()=>{const f=[{field:"_id",headerName:"Id"},{field:"accountNo",headerName:"Account number",flex:1},{field:"accountHolder",headerName:"Account holder",flex:1},{field:"accountType",headerName:"Account type",flex:1},{field:"bank",headerName:"Bank name",flex:1},{field:"ifsc",headerName:"IFSC",flex:1},{field:"openingBalance",headerName:"Opening balance",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const r=o=>(o.stopPropagation(),O(e.row._id)),n=o=>(o.stopPropagation(),y(e.row._id));return t.createElement(t.Fragment,null,t.createElement(x,{size:"small",onClick:r,color:"primary"},t.createElement(M,null)),"  ",$()?t.createElement(x,{size:"small",onClick:n,color:"error"},t.createElement(H,null)):null)}}],m=K(),C=S(G),{search:i}=S(({bankaccount:e})=>e),h=W(),[s,v]=a.useState([]),[g,c]=a.useState(""),[B,u]=a.useState(!1),[w,N]=a.useState(""),[I,l]=a.useState(!1),[D,E]=a.useState(!1),d=Y(),A=()=>{m(j()).then(({payload:e={}})=>{const{message:r}=(e==null?void 0:e.data)||{};r?c(r):(c(""),v(e==null?void 0:e.data))}).catch(()=>{c("Something went wrong! Please try later or contact Administrator.")})};a.useEffect(()=>{A()},[]);const k=a.useMemo(()=>Z(e=>{var r,n,o;d.current.setQuickFilterValues((o=(n=(r=e.split)==null?void 0:r.call(e," "))==null?void 0:n.filter)==null?void 0:o.call(n,z=>z!==""))},500),[d]);a.useEffect(()=>{i&&(s!=null&&s.length)&&(E(!0),k(i),setTimeout(()=>{E(!1)},500))},[s]);const P=()=>{p("Sales/Purchase","BankAccountMaster","write")?h("/master/bankAccounts/addBankAccount"):l(!0)},_=e=>{k(e.target.value),m(Q(e.target.value))},O=e=>{p("Sales/Purchase","BankAccountMaster","write")?h("/master/bankAccounts/editBankAccount",{state:{bankAccountId:e}}):l(!0)},y=e=>{p("Sales/Purchase","BankAccountMaster","write")?(N(e),u(!0)):l(!0)},L=e=>{e.target.value==="true"?m(J(w)).then(()=>{A(),u(!1)}).catch(()=>{c("Something went wrong! Please try later or contact Administrator.")}):u(!1)},T=()=>{l(!1)};return t.createElement(t.Fragment,null,(C||D)&&t.createElement(U,null),B&&t.createElement(R,{isOpen:!0,onClose:L,title:"Are you sure?",content:"Do you want to delete the bank account?",warning:!0}),t.createElement(V,{anchorOrigin:{vertical:"top",horizontal:"center"},open:I,autoHideDuration:6e3,onClose:T},t.createElement(b,{severity:"warning"},"You are not authorized to perform the action")),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Bank account list"),t.createElement("div",{className:"page_actions"},t.createElement(ee,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:P},"Add a bank account"))),g!==""&&t.createElement(te,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(b,{severity:"error"},g)),t.createElement("div",{style:{width:"100%"}},t.createElement(q,{apiRef:d,sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:s,columns:f,initialState:{...f,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(X,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(ae,{variant:"standard",placeholder:"Search...",autoFocus:!!i,onChange:_,value:i,style:{width:"300px"},InputProps:{startAdornment:t.createElement(re,{position:"start"},t.createElement(F,null))}}))},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{He as default};
