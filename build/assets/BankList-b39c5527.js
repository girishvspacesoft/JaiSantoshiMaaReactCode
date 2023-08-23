import{r as a,a as t}from"./react-bfabd40c.js";import{c as R,e as T,f as y}from"./icons-material-4539f19e.js";import"./Card.module-3bdbfb7f.js";import{C as G}from"./Dialog-cfe6f9ef.js";import{aA as H,L as U,aB as j,aC as Q,n as p,aD as $}from"./index-60b53c60.js";import{a as W,u as x}from"./react-redux-45d870ba.js";import{u as Y,D as q,G as J}from"./x-data-grid-cceece3f.js";import{a as K}from"./react-router-1b5f20a2.js";import{j as X}from"./utils-c03c978f.js";import{W as Z,Q as C,l as V,O as ee,h as te,m as ae,f as b}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const ye=()=>{const f=[{field:"_id",headerName:"Id"},{field:"name",headerName:"Name",flex:1},{field:"branchName",headerName:"Branch name",flex:1},{field:"branchCode",headerName:"Branch code",flex:1},{field:"ifsc",headerName:"IFSC",flex:1},{field:"micr",headerName:"MICR",flex:1},{field:"phone",headerName:"Phone",flex:1},{field:"email",headerName:"email",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const r=o=>(o.stopPropagation(),O(e.row._id)),n=o=>(o.stopPropagation(),z(e.row._id));return t.createElement(t.Fragment,null,t.createElement(b,{size:"small",onClick:r,color:"primary"},t.createElement(T,null)),"  ",t.createElement(b,{size:"small",onClick:n,color:"error"},t.createElement(y,null)))}}],d=W(),N=x(H),u=Y(),{search:i}=x(({bank:e})=>e),h=K(),[s,v]=a.useState([]),[g,l]=a.useState(""),[B,c]=a.useState(!1),[w,A]=a.useState(""),[I,m]=a.useState(!1),[D,E]=a.useState(!1),k=()=>{d(j()).then(({payload:e={}})=>{const{message:r}=(e==null?void 0:e.data)||{};r?l(r):(l(""),v(e==null?void 0:e.data))}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})};a.useEffect(()=>{k()},[]);const S=a.useMemo(()=>X(e=>{var r,n,o;u.current.setQuickFilterValues((o=(n=(r=e.split)==null?void 0:r.call(e," "))==null?void 0:n.filter)==null?void 0:o.call(n,M=>M!==""))},500),[u]);a.useEffect(()=>{i&&(s!=null&&s.length)&&(E(!0),S(i),setTimeout(()=>{E(!1)},500))},[s]);const P=e=>{S(e.target.value),d(Q(e.target.value))},_=()=>{p("Sales/Purchase","BankMaster","write")?h("/master/banks/addBank"):m(!0)},O=e=>{p("Sales/Purchase","BankMaster","write")?h("/master/banks/editBank",{state:{bankId:e}}):m(!0)},z=e=>{p("Sales/Purchase","BankMaster","write")?(A(e),c(!0)):m(!0)},F=e=>{c(!0),e.target.value==="true"?d($(w)).then(()=>{c(!1),k()}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}):c(!1)},L=()=>{m(!1)};return t.createElement(t.Fragment,null,(N||D)&&t.createElement(U,null),B&&t.createElement(G,{isOpen:!0,onClose:F,title:"Are you sure?",content:"Do you want to delete the bank?",warning:!0}),t.createElement(Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:I,autoHideDuration:6e3,onClose:L},t.createElement(C,{severity:"warning"},"You are not authorized to perform the action")),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Bank list"),t.createElement("div",{className:"page_actions"},t.createElement(V,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:_},"Add a bank"))),g!==""&&t.createElement(ee,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(C,{severity:"error"},g)),t.createElement("div",{style:{width:"100%"}},t.createElement(q,{apiRef:u,sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:s,columns:f,initialState:{...f,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(J,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(te,{variant:"standard",placeholder:"Search...",autoFocus:!!i,onChange:P,value:i,InputProps:{startAdornment:t.createElement(ae,{position:"start"},t.createElement(R,null))}}))},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))))};export{ye as default};
