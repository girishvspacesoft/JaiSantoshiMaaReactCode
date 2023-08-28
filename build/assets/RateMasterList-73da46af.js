import{r as i,a as t}from"./react-bfabd40c.js";import{c as N,e as A}from"./icons-material-4539f19e.js";import"./Card.module-3bdbfb7f.js";import{aP as _,aQ as k,L as y,aR as I,n as P}from"./index-5f564d13.js";import{a as z,u as S}from"./react-redux-45d870ba.js";import{u as F,D as T,G as D}from"./x-data-grid-cceece3f.js";import{a as G}from"./react-router-1b5f20a2.js";import{j as H}from"./utils-c03c978f.js";import{l as O,O as Q,Q as j,h as w,m as B,f as W}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./hoist-non-react-statics-6cfbf744.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const Ne=()=>{const p=[{field:"_id",headerName:"Id"},{field:"customerName",headerName:"Name",minWidth:250,flex:1},{field:"actions",headerName:"Action",sortable:!1,flex:1,renderCell:e=>{const r=a=>(a.stopPropagation(),L(e.row._id));return t.createElement(t.Fragment,null,t.createElement(W,{size:"small",onClick:r,color:"primary"},t.createElement(A,null)))}}],u=z(),l=F(),{search:s}=S(({ratemaster:e})=>e),g=G(),[f,c]=i.useState(""),b=S(_),[v,h]=i.useState(!1),[n,x]=i.useState({page:0,pageSize:100}),[o,M]=i.useState({isLoading:!1,data:[],total:0});i.useEffect(()=>{u(k({pagination:{limit:n.pageSize?n.pageSize:100,page:n.page+1}})).then(({payload:e={}})=>{const{message:r,rateList:a,count:m}=(e==null?void 0:e.data)||{};r?c(r):(c(""),M(d=>({...d,isLoading:!1,data:a,total:m})))}).catch(()=>{c("Something went wrong! Please try later or contact Administrator.")})},[]);const E=i.useMemo(()=>H(e=>{var r,a,m;l.current.setQuickFilterValues((m=(a=(r=e.split)==null?void 0:r.call(e," "))==null?void 0:a.filter)==null?void 0:m.call(a,d=>d!==""))},500),[l]);i.useEffect(()=>{var e;s&&((e=o.data)!=null&&e.length)&&(h(!0),E(s),setTimeout(()=>{h(!1)},500))},[o.data]);const C=e=>{E(e.target.value),u(I(e.target.value))},R=()=>{g("/master/rateMasterList/addRateMaster")},L=e=>{P("Admin","RateMaster","write")&&g("/master/rateMasterList/editRateMaster",{state:{rateMasterId:e}})};return t.createElement(t.Fragment,null,(b||v)&&t.createElement(y,null),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"Rate master"),t.createElement("div",{className:"page_actions"},t.createElement(O,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:R},"Add rates"))),f!==""&&t.createElement(Q,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(j,{severity:"error"},f)),t.createElement("div",{style:{width:"100%"}},t.createElement(T,{apiRef:l,autoHeight:!0,density:"compact",rows:o.data,rowCount:o.total,loading:o.isLoading,pageSizeOptions:[100],paginationModel:n,onPaginationModelChange:x,paginationMode:"server",columns:p,getRowId:e=>e==null?void 0:e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...p,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>t.createElement(D,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(w,{variant:"standard",placeholder:"Search...",autoFocus:!!s,onChange:C,value:s,InputProps:{startAdornment:t.createElement(B,{position:"start"},t.createElement(N,null))}}))}}))))};export{Ne as default};