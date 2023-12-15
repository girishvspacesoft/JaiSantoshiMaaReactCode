import{r as n,a as r}from"./react-69b9bddd.js";import{u as x,a as re}from"./react-redux-13959126.js";import{c as ae,h as se,i as ne,j as ie,e as oe,f as le}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as ce}from"./Dialog-c8953a08.js";import{a$ as me,b0 as de,b1 as ue,b2 as ge,b3 as fe,b4 as B,b5 as pe,b6 as he,L as Ee,k as $,b7 as Se,a5 as be,b8 as we,o as _,b9 as Ce,ba as Le}from"./index-aeb4570c.js";import{S as Re}from"./SendEmail-551606c8.js";import{a as xe}from"./react-router-7dadf37a.js";import{u as _e,D as Ne,G as Ae}from"./x-data-grid-83fc2422.js";import{i as Pe,A as ve,h as G,l as De,O as Ie,Q as Oe,m as ze,f as h}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const ht=()=>{const N=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"date",headerName:"Date",flex:1},{field:"consignorName",headerName:"Consignor",flex:1},{field:"from",headerName:"From",flex:1},{field:"consigneeName",headerName:"Consignee",flex:1},{field:"to",headerName:"To",flex:1},{field:"payType",headerName:"Pay type",flex:1},{field:"total",headerName:"Grand total",type:"number",flex:1,renderCell:e=>r.createElement("strong",null,"₹ ",e.row.total)},{field:"actions",headerName:"Action",sortable:!1,minWidth:180,flex:1,renderCell:e=>{const t=a=>{a.stopPropagation(),I({...e.row,download:!1})},s=a=>{a.stopPropagation(),I({...e.row,download:!0})},i=a=>{a.stopPropagation(),S(!0),b({...e.row})},l=a=>(a.stopPropagation(),Z(e.row._id)),m=a=>(a.stopPropagation(),y(e.row._id));return r.createElement(r.Fragment,null,r.createElement(h,{size:"small",onClick:s,color:"primary"},r.createElement(se,null)),r.createElement(h,{size:"small",onClick:t,color:"primary"},r.createElement(ne,null)),r.createElement(h,{size:"small",onClick:i,color:"primary"},r.createElement(ie,null)),r.createElement(h,{size:"small",onClick:l,color:"primary"},r.createElement(oe,null)),$()?r.createElement(h,{size:"small",onClick:m,color:"error"},r.createElement(le,null)):null)}}],A=xe(),u=x(e=>e.user),M=x(me),[j,H]=n.useState([]),[g,P]=n.useState(null),[v,o]=n.useState(""),[V,E]=n.useState(!1),[W,D]=n.useState(""),[p,I]=n.useState(""),[U,S]=n.useState(!1),[O,z]=n.useState(!1),[L,q]=n.useState(""),[R,b]=n.useState(null),{search:w}=x(({lorryreceipt:e})=>e),Q=_e(),c=re(),[f,k]=n.useState({page:0,pageSize:100}),[C,J]=n.useState({isLoading:!1,data:[],total:0});n.useEffect(()=>{c(de()).then(({payload:e={}})=>{var s,i,l;const{message:t}=(e==null?void 0:e.data)||{};if(t)o(t);else if(o(""),H(e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.length){const m=(l=(i=e==null?void 0:e.data)==null?void 0:i.find)==null?void 0:l.call(i,a=>a._id===u.branch);P(m)}}).catch(()=>{o("Something went wrong! Please try later or contact Administrator.")}),c(ue()),c(ge()),c(fe())},[]);const F=()=>{const e={branch:g._id,pagination:{limit:f.pageSize?f.pageSize:100,page:f.page+1},search:w};c(Se(e)).then(({payload:t={}})=>{const{message:s}=(t==null?void 0:t.data)||{};s?o(s):(J(i=>{var l,m;return{...i,isLoading:!1,data:(m=(l=t==null?void 0:t.data.lorryReceipts)==null?void 0:l.map)==null?void 0:m.call(l,a=>{var d,T;return{...a,date:be(new Date(a.date)),total:(T=(d=a.total)==null?void 0:d.toFixed)==null?void 0:T.call(d,2)}}),total:t==null?void 0:t.data.count}}),o(""))}).catch(t=>{o(t.message)})};n.useEffect(()=>{g!=null&&g._id&&F()},[g,f.page,f.pageSize,w]),n.useEffect(()=>{var e;p&&c(B({id:p._id,email:"",user:((e=u==null?void 0:u.employee)==null?void 0:e.name)||""})).then(({payload:t={}})=>{var i,l;const{message:s}=(t==null?void 0:t.data)||{};if(s)o(s);else{const m=pe(t==null?void 0:t.data.file),a=(l=(i=C.data)==null?void 0:i.find)==null?void 0:l.call(i,d=>d._id===p._id);if(m)if(p.download){const d=a.lrNo+".pdf";he(m,d)}else window.open(m,"_blank")}}).catch(t=>{o(t.message)})},[p]),n.useEffect(()=>{var e;O&&L&&R&&(S(!1),c(B({id:R._id,email:L,user:((e=u==null?void 0:u.employee)==null?void 0:e.name)||""})).then(({payload:t={}})=>{const{message:s}=(t==null?void 0:t.data)||{};s&&o(s),z(!1),b(null)}).catch(t=>{o(t.message),b(null)}))},[O,L,R]);const K=e=>{c(we(e.target.value))},X=e=>{z(!0),q(e)},Y=()=>{_("Sales/Purchase","LorryReceipt","write")&&A("/transactions/lorryReceipts/addLorryReceipt",{state:g})},Z=e=>{_("Sales/Purchase","LorryReceipt","write")&&A("/transactions/lorryReceipts/editLorryReceipt",{state:{lrId:e}})},y=e=>{_("Sales/Purchase","LorryReceipt","write")&&(D(e),E(!0))},ee=e=>{E(!0),e.target.value==="true"?c(Ce(W)).then(({payload:t={}})=>{const{message:s}=(t==null?void 0:t.data)||{};s?o(s):F(),E(!1)}).catch(()=>{o("Something went wrong! Please try later or contact Administrator.")}):D(""),E(!1)},te=(e,t)=>{P(t),k({page:0,pageSize:100}),c(Le(t._id))};return r.createElement(r.Fragment,null,M&&r.createElement(Ee,null),r.createElement("div",{className:"inner-wrap"},V&&r.createElement(ce,{isOpen:!0,onClose:ee,title:"Are you sure?",content:"Do you want to delete the lorry receipt?",warning:!0}),r.createElement("div",{className:"page_head"},r.createElement("h1",{className:"pageHead"},"Lorry receipts"),r.createElement("div",{className:"page_actions"},r.createElement(Pe,{size:"small",sx:{width:"230px",marginRight:"5px"}},r.createElement(ve,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:j,value:g||null,onChange:te,disabled:!$(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>r.createElement(G,{...e,label:"Select branch",fullWidth:!0})})),r.createElement(De,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:Y},"Add a lorry receipt"))),v!==""&&r.createElement(Ie,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},r.createElement(Oe,{severity:"error"},v)),r.createElement("div",{style:{width:"100%"}},r.createElement(Ne,{apiRef:Q,autoHeight:!0,density:"compact",rows:C.data,rowCount:C.total,loading:C.isLoading,pageSizeOptions:[100],paginationModel:f,onPaginationModelChange:k,paginationMode:"server",columns:N,getRowId:e=>e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...N,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>r.createElement(Ae,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},r.createElement(G,{variant:"standard",placeholder:"Search...",autoFocus:!!w,onChange:K,value:w,InputProps:{startAdornment:r.createElement(ze,{position:"start"},r.createElement(ae,null))}}))}}),r.createElement(Re,{isOpen:U,setIsOpen:S,handleEmailClose:()=>{S(!1),b(null)},handleSendEmail:e=>X(e),contentBody:""}))))};export{ht as default};