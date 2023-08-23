import{r,a}from"./react-bfabd40c.js";import{u as x,a as re}from"./react-redux-45d870ba.js";import{c as se,h as ne,i as ie,j as oe,e as le}from"./icons-material-4539f19e.js";import"./Card.module-3bdbfb7f.js";import{C as ce}from"./Dialog-cfe6f9ef.js";import{aY as me,aZ as de,a_ as ue,a$ as ge,b0 as fe,b1 as pe,a4 as he,b2 as M,b3 as Ee,b4 as Se,L as be,b5 as Ce,b6 as Le,n as j}from"./index-60b53c60.js";import{S as Re}from"./SendEmail-4c230401.js";import{a as we}from"./react-router-1b5f20a2.js";import{u as xe,D as Ne,G as _e}from"./x-data-grid-cceece3f.js";import{j as ve}from"./utils-c03c978f.js";import{i as Ae,A as Ie,h as B,l as De,O as Oe,Q as Pe,m as ze,f as C}from"./material-e0a59a28.js";import"./@babel-e11bafe1.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-6cfbf744.js";import"./use-sync-external-store-18921cc2.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-4405dfe9.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./clsx-1229b3e0.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const St=()=>{const N=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"date",headerName:"Date",flex:1},{field:"consignorName",headerName:"Consignor",flex:1},{field:"from",headerName:"From",flex:1},{field:"consigneeName",headerName:"Consignee",flex:1},{field:"to",headerName:"To",flex:1},{field:"payType",headerName:"Pay type",flex:1},{field:"total",headerName:"Grand total",type:"number",flex:1,renderCell:e=>a.createElement("strong",null,"₹ ",e.row.total)},{field:"actions",headerName:"Action",sortable:!1,minWidth:180,flex:1,renderCell:e=>{const t=i=>{i.stopPropagation(),D({...e.row,download:!1})},s=i=>{i.stopPropagation(),D({...e.row,download:!0})},n=i=>{i.stopPropagation(),E(!0),S({...e.row})},o=i=>(i.stopPropagation(),ee(e.row._id));return a.createElement(a.Fragment,null,a.createElement(C,{size:"small",onClick:s,color:"primary"},a.createElement(ne,null)),a.createElement(C,{size:"small",onClick:t,color:"primary"},a.createElement(ie,null)),a.createElement(C,{size:"small",onClick:n,color:"primary"},a.createElement(oe,null)),a.createElement(C,{size:"small",onClick:o,color:"primary"},a.createElement(le,null)))}}],_=we(),d=x(e=>e.user),G=x(me),[$,H]=r.useState([]),[u,v]=r.useState(null),[A,l]=r.useState(""),[Fe,W]=r.useState(""),[Q,I]=r.useState(!1),[U,q]=r.useState(""),[h,D]=r.useState(""),[V,E]=r.useState(!1),[O,P]=r.useState(!1),[L,Y]=r.useState(""),[R,S]=r.useState(null),[Z,z]=r.useState(!1),{search:b}=x(({lorryreceipt:e})=>e),w=xe(),c=re(),[f,F]=r.useState({page:0,pageSize:100}),[p,J]=r.useState({isLoading:!1,data:[],total:0});r.useEffect(()=>{c(de()).then(({payload:e={}})=>{var s,n,o;const{message:t}=(e==null?void 0:e.data)||{};if(t)l(t);else if(l(""),H(e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.length){const i=(o=(n=e==null?void 0:e.data)==null?void 0:n.find)==null?void 0:o.call(n,g=>g._id===d.branch);v(i)}}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}),c(ue()),c(ge()),c(fe())},[]),r.useEffect(()=>{if(u!=null&&u._id){const e={branch:u._id,pagination:{limit:f.pageSize?f.pageSize:100,page:f.page+1}};c(pe(e)).then(({payload:t={}})=>{const{message:s}=(t==null?void 0:t.data)||{};s?l(s):J(n=>{var o,i;return{...n,isLoading:!1,data:(i=(o=t==null?void 0:t.data.lorryReceipts)==null?void 0:o.map)==null?void 0:i.call(o,g=>{var m,T;return{...g,date:he(new Date(g.date)),total:(T=(m=g.total)==null?void 0:m.toFixed)==null?void 0:T.call(m,2)}}),total:t==null?void 0:t.data.count}})}).catch(t=>{l(t.message)})}},[u,f.page,f.pageSize]),r.useEffect(()=>{var e;h&&c(M({id:h._id,email:"",user:((e=d==null?void 0:d.employee)==null?void 0:e.name)||""})).then(({payload:t={}})=>{var n,o;const{message:s}=(t==null?void 0:t.data)||{};if(s)l(s);else{const i=Ee(t==null?void 0:t.data.file),g=(o=(n=p.data)==null?void 0:n.find)==null?void 0:o.call(n,m=>m._id===h._id);if(i)if(h.download){const m=g.lrNo+".pdf";Se(i,m)}else window.open(i,"_blank")}}).catch(t=>{l(t.message)})},[h]),r.useEffect(()=>{var e;O&&L&&R&&(E(!1),c(M({id:R._id,email:L,user:((e=d==null?void 0:d.employee)==null?void 0:e.name)||""})).then(({payload:t={}})=>{const{message:s}=(t==null?void 0:t.data)||{};s&&l(s),P(!1),S(null)}).catch(t=>{l(t.message),S(null)}))},[O,L,R]);const k=r.useMemo(()=>ve(e=>{var t,s,n;w.current.setQuickFilterValues((n=(s=(t=e.split)==null?void 0:t.call(e," "))==null?void 0:s.filter)==null?void 0:n.call(s,o=>o!==""))},500),[w]);r.useEffect(()=>{var e;b&&((e=p.data)!=null&&e.length)&&(z(!0),k(b),setTimeout(()=>{z(!1)},500))},[p.data]);const K=e=>{k(e.target.value),c(Le(e.target.value))},X=e=>{P(!0),Y(e)},y=()=>{j("Sales/Purchase","LorryReceipt","write")&&_("/transactions/lorryReceipts/addLorryReceipt",{state:u})},ee=e=>{j("Sales/Purchase","LorryReceipt","write")&&_("/transactions/lorryReceipts/editLorryReceipt",{state:{lrId:e}})},te=e=>{I(!0),e.target.value==="true"?W(U):q(""),I(!1)},ae=(e,t)=>{v(t),F({page:0,pageSize:100})};return a.createElement(a.Fragment,null,(G||Z)&&a.createElement(be,null),a.createElement("div",{className:"inner-wrap"},Q&&a.createElement(ce,{isOpen:!0,onClose:te,title:"Are you sure?",content:"Do you want to delete the lorry receipt?",warning:!0}),a.createElement("div",{className:"page_head"},a.createElement("h1",{className:"pageHead"},"Lorry receipts"),a.createElement("div",{className:"page_actions"},a.createElement(Ae,{size:"small",sx:{width:"210px",marginRight:"5px"}},a.createElement(Ie,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:$,value:u||null,onChange:ae,disabled:!Ce(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>a.createElement(B,{...e,label:"Select branch",fullWidth:!0})})),a.createElement(De,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:y},"Add a lorry receipt"))),A!==""&&a.createElement(Oe,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},a.createElement(Pe,{severity:"error"},A)),a.createElement("div",{style:{width:"100%"}},a.createElement(Ne,{apiRef:w,autoHeight:!0,density:"compact",rows:p.data,rowCount:p.total,loading:p.isLoading,pageSizeOptions:[100],paginationModel:f,onPaginationModelChange:F,paginationMode:"server",columns:N,getRowId:e=>e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...N,columns:{columnVisibilityModel:{_id:!1}}},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0,components:{Toolbar:()=>a.createElement(_e,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},a.createElement(B,{variant:"standard",placeholder:"Search...",autoFocus:!!b,onChange:K,value:b,InputProps:{startAdornment:a.createElement(ze,{position:"start"},a.createElement(se,null))}}))}}),a.createElement(Re,{isOpen:V,setIsOpen:E,handleEmailClose:()=>{E(!1),S(null)},handleSendEmail:e=>X(e),contentBody:""}))))};export{St as default};
