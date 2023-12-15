import{r,a as s}from"./react-69b9bddd.js";import{a as ie,u as v}from"./react-redux-13959126.js";import{c as le,h as oe,i as ce,j as me,e as ue,f as de}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as ge}from"./Dialog-c8953a08.js";import{bR as fe,bS as he,bT as Ee,bU as M,b5 as pe,bt as $,b6 as be,L as Se,k as j,bV as Ce,a5 as we,bW as Be,ba as xe,bX as _e}from"./index-aeb4570c.js";import{S as Ne}from"./SendEmail-551606c8.js";import{a as ve}from"./react-router-7dadf37a.js";import{u as De,D as Ae,G as Le}from"./x-data-grid-83fc2422.js";import{j as Oe}from"./utils-49fe0532.js";import{i as ze,A as Ie,h as G,l as ke,O as Fe,Q as Pe,m as Re,f as E}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const St=()=>{const D=[{field:"_id",headerName:"Id"},{field:"billNo",headerName:"Bill no.",flex:1},{field:"date",headerName:"Date",flex:1},{field:"customer",headerName:"Customer",flex:1},{field:"total",headerName:"Bill amount",flex:1,renderCell:e=>s.createElement("strong",null,"₹ ",e.row.total)},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const t=a=>{a.stopPropagation(),p({...e.row,download:!1})},n=a=>{a.stopPropagation(),p({...e.row,download:!0})},l=a=>{a.stopPropagation(),b(!0),S({...e.row})},o=a=>(a.stopPropagation(),te(e.row._id)),f=a=>(a.stopPropagation(),ae(e.row._id));return s.createElement(s.Fragment,null,s.createElement(E,{size:"small",onClick:n,color:"primary"},s.createElement(oe,null)),s.createElement(E,{size:"small",onClick:t,color:"primary"},s.createElement(ce,null)),s.createElement(E,{size:"small",onClick:l,color:"primary"},s.createElement(me,null)),s.createElement(E,{size:"small",onClick:f,color:"primary"},s.createElement(ue,null)),j()?s.createElement(E,{size:"small",onClick:o,color:"error"},s.createElement(de,null)):null)}}],c=ie(),w=v(e=>e.user),H=v(fe),A=ve(),[U,Q]=r.useState([]),[m,L]=r.useState(null),[O,i]=r.useState(""),[V,B]=r.useState(!1),[W,q]=r.useState(""),[u,p]=r.useState(null),[X,b]=r.useState(!1),[z,I]=r.useState(!1),[x,J]=r.useState(""),[_,S]=r.useState(null),[d,K]=r.useState({page:0,pageSize:100}),[h,Y]=r.useState({isLoading:!1,data:[],total:0}),[Z,k]=r.useState(!1),{search:g}=v(({bill:e})=>e),N=De();r.useEffect(()=>{c(he()).then(({payload:e={}})=>{var n,l,o;const{message:t}=(e==null?void 0:e.data)||{};if(t)i(t);else if(i(""),Q(e==null?void 0:e.data),w&&w.branch){const f=(l=(n=e==null?void 0:e.data)==null?void 0:n.find)==null?void 0:l.call(n,a=>a._id===w.branch);(o=e==null?void 0:e.data)!=null&&o.length&&L(f)}}).catch(()=>{i("Something went wrong! Please try later or contact Administrator.")}),c(Ee())},[]);const F=()=>{const e={branch:m._id,pagination:{limit:d.pageSize?d.pageSize:100,page:d.page+1},search:g};c(Ce(e)).then(({payload:t={}})=>{const{message:n}=(t==null?void 0:t.data)||{};n?i(n):t!=null&&t.data.bills&&Y(l=>{var o,f;return{...l,isLoading:!1,data:(f=(o=t==null?void 0:t.data.bills)==null?void 0:o.map)==null?void 0:f.call(o,a=>{var R,C,T;return{...a,billNo:$(a.billNo),date:we(new Date(a.date)),customer:(R=a.customer)!=null&&R.name?a.customer.name:a.customer,total:(T=(C=a.grandTotal)==null?void 0:C.toFixed)==null?void 0:T.call(C,2)}}),total:t==null?void 0:t.data.count}})}).catch(t=>{i(t.message)})};r.useEffect(()=>{m!=null&&m._id&&F()},[m,d.page,d.pageSize,g]),r.useEffect(()=>{u&&u._id&&c(M({id:u._id,email:""})).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};if(t)i(t);else if(e!=null&&e.data.file){const n=pe(e==null?void 0:e.data.file),l=$(u.billNo)+".pdf";u.download?be(n,l):window.open(n,"_blank")}p(null)}).catch(e=>{i(e.message),p(null)})},[u]);const P=r.useMemo(()=>Oe(e=>{var t,n,l;N.current.setQuickFilterValues((l=(n=(t=e.split)==null?void 0:t.call(e," "))==null?void 0:n.filter)==null?void 0:l.call(n,o=>o!==""))},500),[N]);r.useEffect(()=>{var e;g&&((e=h.data)!=null&&e.length)&&(k(!0),P(g),setTimeout(()=>{k(!1)},500))},[h.data]);const y=e=>{P(e.target.value),c(Be(e.target.value))},ee=(e,t)=>{L(t),c(xe(t._id))},te=e=>{q(e),B(!0)},se=e=>{e.target.value==="true"?c(_e(W)).then(({payload:t={}})=>{const{message:n}=(t==null?void 0:t.data)||{};n&&i(n),B(!1),F()}).catch(t=>{i(t.message)}):B(!1)},ne=()=>{A("/transactions/billList/addBill",{state:m})},ae=e=>{A("/transactions/billList/editBill",{state:{billId:e}})};r.useEffect(()=>{z&&x&&_&&(b(!1),c(M({id:_._id,email:x})).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};t&&i(t),I(!1),S(null)}).catch(e=>{i(e.message),S(null)}))},[z,x,_]);const re=e=>{I(!0),J(e)};return s.createElement(s.Fragment,null,(H||Z)&&s.createElement(Se,null),s.createElement("div",{className:"inner-wrap"},V&&s.createElement(ge,{isOpen:!0,onClose:se,title:"Are you sure?",content:"Do you want to delete the bill",warning:!0}),s.createElement("div",{className:"page_head"},s.createElement("h1",{className:"pageHead"},"Bills"),s.createElement("div",{className:"page_actions"},s.createElement(ze,{size:"small",sx:{width:"230px",marginRight:"5px"}},s.createElement(Ie,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:U,value:m,onChange:ee,disabled:!j(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>s.createElement(G,{...e,label:"Select branch",fullWidth:!0})})),s.createElement(ke,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:ne},"Add a bill"))),O!==""&&s.createElement(Fe,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},s.createElement(Pe,{severity:"error"},O)),s.createElement("div",{style:{width:"100%"}},s.createElement(Ae,{apiRef:N,autoHeight:!0,density:"compact",rows:h.data,rowCount:h.total,loading:h.isLoading,pageSizeOptions:[100],paginationModel:d,onPaginationModelChange:K,paginationMode:"server",columns:D,getRowId:e=>e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...D,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>s.createElement(Le,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},s.createElement(G,{variant:"standard",placeholder:"Search...",autoFocus:!!g,onChange:y,value:g,InputProps:{startAdornment:s.createElement(Re,{position:"start"},s.createElement(le,null))}}))}})),s.createElement(Ne,{isOpen:X,setIsOpen:b,handleEmailClose:()=>{b(!1),S(null)},handleSendEmail:e=>re(e),contentBody:""})))};export{St as default};