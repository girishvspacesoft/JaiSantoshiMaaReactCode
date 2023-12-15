import{r as s,a as t}from"./react-69b9bddd.js";import{a as ie,u as _}from"./react-redux-13959126.js";import{c as re,h as oe,i as le,j as ce,e as me,f as de}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as ue}from"./Dialog-c8953a08.js";import{bm as ge,bn as fe,bo as he,bp as pe,bq as Se,br as Ee,bs as H,b5 as be,bt as we,b6 as Le,L as xe,k as $,bu as Ce,a5 as Ne,bv as _e,ba as ve,bw as De}from"./index-aeb4570c.js";import{S as Fe}from"./SendEmail-551606c8.js";import{a as Pe}from"./react-router-7dadf37a.js";import{i as Ae,A as Ie,h as j,l as Oe,O as ze,Q as ke,m as Be,f}from"./material-04052d9a.js";import{D as Te,G as Me}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const Lt=()=>{const v=[{field:"_id",headerName:"Id",flex:1},{field:"lsNo",headerName:"LS no.",flex:1},{field:"date",headerName:"Date",flex:1},{field:"vehicleNo",headerName:"Vehicle no.",width:120,flex:1},{field:"fromName",headerName:"From",flex:1},{field:"toName",headerName:"To",flex:1},{field:"totalFreight",headerName:"Hire amount",flex:1},{field:"totalPayable",headerName:"Balance",flex:1},{field:"actions",headerName:"Action",sortable:!1,minWidth:200,renderCell:e=>{const a=n=>{n.stopPropagation(),T({...e.row,download:!1})},r=n=>{n.stopPropagation(),T({...e.row,download:!0})},i=n=>{n.stopPropagation(),p(!0),S({...e.row})},c=n=>(n.stopPropagation(),ne(e.row._id)),u=n=>(n.stopPropagation(),se(e.row._id));return t.createElement(t.Fragment,null,t.createElement(f,{size:"small",onClick:r,color:"primary"},t.createElement(oe,null)),t.createElement(f,{size:"small",onClick:a,color:"primary"},t.createElement(le,null)),t.createElement(f,{size:"small",onClick:i,color:"primary"},t.createElement(ce,null)),t.createElement(f,{size:"small",onClick:c,color:"primary"},t.createElement(me,null)),$()?t.createElement(f,{size:"small",onClick:u,color:"error"},t.createElement(de,null)):null)},flex:1}],o=ie(),D=Pe(),G=_(ge),F=_(e=>e.user),[q,U]=s.useState([]),[g,P]=s.useState(null),[,W]=s.useState([]),[A,l]=s.useState(""),[Q,h]=s.useState(!1),[I,O]=s.useState(""),[Re,z]=s.useState(""),[m,k]=s.useState(null),[J,p]=s.useState(!1),[B,L]=s.useState(!1),[x,K]=s.useState(""),[C,S]=s.useState(null),{search:E}=_(({loadingslip:e})=>e),[d,X]=s.useState({page:0,pageSize:100}),[N,Y]=s.useState({isLoading:!1,data:[],total:0}),T=e=>{k(e)};s.useEffect(()=>{o(fe()).then(({payload:e={}})=>{var r,i,c;const{message:a}=(e==null?void 0:e.data)||{};if(a)l(a);else if(l(""),U(e==null?void 0:e.data),(r=e==null?void 0:e.data)!=null&&r.length){const u=(c=(i=e==null?void 0:e.data)==null?void 0:i.find)==null?void 0:c.call(i,n=>n._id===F.branch);P(u)}}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}),o(he()),o(pe()),o(Se()),o(Ee())},[F.branch]);const M=()=>{const e={branch:g._id,pagination:{limit:d.pageSize?d.pageSize:100,page:d.page+1},search:E};o(Ce(e)).then(({payload:a={}})=>{var i,c;const{message:r}=(a==null?void 0:a.data)||{};if(r)l(r);else{const u=(c=(i=a==null?void 0:a.data.loadingSlips)==null?void 0:i.filter)==null?void 0:c.call(i,n=>{var b,R,w,V;return n.date=Ne(new Date(n.date)),n.totalFreight=(R=(b=n.totalFreight)==null?void 0:b.toFixed)==null?void 0:R.call(b,2),n.totalPayable=(V=(w=n.totalPayable)==null?void 0:w.toFixed)==null?void 0:V.call(w,2),!n.isLocalMemo});W(u),Y(n=>({...n,isLoading:!1,data:u,total:a==null?void 0:a.data.count}))}}).catch(a=>{l(a.message)})};s.useEffect(()=>{g&&M()},[g,d.page,d.pageSize,E]),s.useEffect(()=>{m&&m._id&&o(H({id:m._id,email:""})).then(({payload:e={}})=>{var r;const{message:a}=(e==null?void 0:e.data)||{};if(a)l(a);else{if((r=e==null?void 0:e.data)!=null&&r.file){const i=be(e==null?void 0:e.data.file),c=we(m.lsNo)+".pdf";m.download?Le(i,c):window.open(i,"_blank")}k(null)}}).catch(e=>{l(e.message)})},[m]),s.useEffect(()=>{B&&x&&C&&(p(!1),o(H({id:C._id,email:x})).then(({payload:e={}})=>{const{message:a}=(e==null?void 0:e.data)||{};a&&l(a),L(!1),S(null)}).catch(e=>{l(e.message),L(!1),S(null)}))},[B,x,C]);const Z=e=>{o(_e(e.target.value))},y=e=>{L(!0),K(e)},ee=(e,a)=>{P(a),o(ve(a._id))},te=e=>{h(!0),e.target.value==="true"?(z(I),o(De(I)).then(({payload:a={}})=>{const{message:r}=(a==null?void 0:a.data)||{};r?l(r):M(),h(!1)}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})):(z(""),O("")),h(!1)},ae=()=>{D("/transactions/loadingSlips/addLoadingSlip",{state:g})},ne=e=>{D("/transactions/loadingSlips/editLoadingSlip",{state:{lsId:e}})},se=e=>{O(e),h(!0)};return t.createElement(t.Fragment,null,G&&t.createElement(xe,null),t.createElement("div",{className:"inner-wrap"},Q&&t.createElement(ue,{isOpen:!0,onClose:te,title:"Are you sure?",content:"Do you want to delete the loading slip?",warning:!0}),t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Lorry Freight Challan List"),t.createElement("div",{className:"page_actions"},t.createElement(Ae,{size:"small",sx:{width:"230px",marginRight:"5px"}},t.createElement(Ie,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:q,value:g||null,onChange:ee,disabled:!$(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>t.createElement(j,{...e,label:"Select branch",fullWidth:!0})})),t.createElement(Oe,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:ae},"Add challan"))),A!==""&&t.createElement(ze,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(ke,{severity:"error"},A)),t.createElement("div",{style:{width:"100%"}},t.createElement(Te,{autoHeight:!0,density:"compact",rows:N.data,rowCount:N.total,loading:N.isLoading,pageSizeOptions:[100],paginationModel:d,onPaginationModelChange:X,paginationMode:"server",columns:v,getRowId:e=>e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...v,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>t.createElement(Me,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(j,{variant:"standard",placeholder:"Search...",autoFocus:!!E,onChange:Z,value:E,InputProps:{startAdornment:t.createElement(Be,{position:"start"},t.createElement(re,null))}}))}})),t.createElement(Fe,{isOpen:J,setIsOpen:p,handleEmailClose:()=>{p(!1),S(null)},handleSendEmail:e=>y(e),contentBody:""})))};export{Lt as default};