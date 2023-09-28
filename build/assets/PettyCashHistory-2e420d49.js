import{r as i,a as r}from"./react-bfabd40c.js";import{b as K,k as X}from"./icons-material-4539f19e.js";import{L as _,A as z,D as H}from"./x-date-pickers-7b1cc7dd.js";import"./Card.module-3bdbfb7f.js";import{ct as Z,cu as y,cv as ee,cw as te,L as re,cx as ae,a4 as ne,cy as ie,bq as se,cz as oe}from"./index-7982e8fd.js";import{u as I,a as le}from"./react-redux-45d870ba.js";import{a as ce}from"./react-router-622b2d59.js";import{i as D,A as me,h as w,l as de,a as ue,V as T,f as Y,O as fe,Q as ge}from"./material-e0a59a28.js";import{D as he}from"./x-data-grid-cceece3f.js";import"./@babel-e11bafe1.js";import"./@date-io-f382d426.js";import"./dayjs-7f45ce31.js";import"./utils-c03c978f.js";import"./clsx-1229b3e0.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./rifm-7b0f12ad.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./hoist-non-react-statics-6cfbf744.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const $={startDate:null,endDate:null},b={startDate:{invalid:!1,message:""},endDate:{invalid:!1,message:""}},tt=()=>{var h,A,p,B;const x=[{field:"_id",headerName:"Id"},{field:"transactionNo",headerName:"Transaction no.",flex:1,renderCell:e=>ae(e.row.transactionNo)},{field:"date",headerName:"Date & time",flex:1,minWidth:200,renderCell:e=>`${ne(new Date(e.row.date))} ${ie(e.row.date)}`},{field:"description",headerName:"Description",flex:1},{field:"credit",type:"number",headerName:"Credit",flex:1,renderCell:e=>{var t,a;return e.row.credit!=="-"?`₹ ${(a=(t=e.row.credit)==null?void 0:t.toFixed)==null?void 0:a.call(t,2)}`:e.row.credit}},{field:"debit",type:"number",headerName:"Debit",flex:1,renderCell:e=>{var t,a;return e.row.debit!=="-"?`₹ ${(a=(t=e.row.debit)==null?void 0:t.toFixed)==null?void 0:a.call(t,2)}`:e.row.debit}},{field:"bank",headerName:"Bank & account no",flex:1,minWidth:300,renderCell:e=>{var a;const t=(a=u==null?void 0:u.filter)==null?void 0:a.call(u,s=>s._id===e.row.bank);return`${t!=null&&t.length?t[0].name:e.row.bank} - ${e.row.bankAccountNumber}`}},{field:"lsNo",headerName:"Challan no",flex:1,renderCell:e=>e.row.lsNo?se(e.row.lsNo):""},{field:"availableBal",type:"number",headerName:"Balance",flex:1,renderCell:e=>{var t,a;return e.row.availableBal?`₹ ${(a=(t=e.row.availableBal)==null?void 0:t.toFixed)==null?void 0:a.call(t,2)}`:"₹ 0.00"}}],M=I(Z),d=I(e=>e.user),O=ce(),[c,W]=i.useState([]),[u,R]=i.useState([]),[m,S]=i.useState(null),[o,C]=i.useState([]),[q,N]=i.useState([]),[P,n]=i.useState(""),[l,v]=i.useState(b),[f,F]=i.useState($),g=le();i.useEffect(()=>{g(y()).then(({payload:e={}})=>{var a,s,L;const{message:t}=(e==null?void 0:e.data)||{};if(t)n(t);else if(n(""),W(e==null?void 0:e.data),(a=e==null?void 0:e.data)!=null&&a.length){const E=(L=(s=e==null?void 0:e.data)==null?void 0:s.filter)==null?void 0:L.call(s,J=>J._id===d.branch);E!=null&&E.length&&S(E[0])}}).catch(()=>{n("Something went wrong! Please try later or contact Administrator.")}),g(ee()).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};t?n(t):(n(""),R(e==null?void 0:e.data))}).catch(()=>{n("Something went wrong! Please try later or contact Administrator.")})},[]),i.useEffect(()=>{m!=null&&m._id&&g(te(m._id)).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};t?n(t):(n(""),C(e==null?void 0:e.data))}).catch(()=>{n("Something went wrong! Please try later or contact Administrator.")})},[m]),i.useEffect(()=>{var e;if(o!=null&&o.length){const t=(e=o==null?void 0:o.map)==null?void 0:e.call(o,a=>({...a,credit:a.type==="credit"?a.amount:"-",debit:a.type==="debit"?a.amount:"-"}));N(t)}else N([])},[o]);const V=i.useCallback(()=>{v(b),F($)},[]),j=e=>{var a;const t=(a=c==null?void 0:c.filter)==null?void 0:a.call(c,s=>s._id===e.target.value);S(t[0])},G=()=>{O("/transactions/pettyCashHistory/addPettyCashTransaction")},k=(e,t)=>{F(a=>({...a,[e]:new Date(t)}))},Q=e=>{e.preventDefault(),U(f)||g(oe(f)).then(({payload:t={}})=>{const{message:a}=(t==null?void 0:t.data)||{};a?n(a):(n(""),C(t==null?void 0:t.data),v(b))}).catch(()=>{n("Something went wrong! Please try later or contact Administrator.")})},U=e=>{const t={...b};e.startDate||(t.startDate={invalid:!0,message:"Start date is required"}),e.endDate||(t.endDate={invalid:!0,message:"End date is required"});let a=!1;for(const s in t)t[s].invalid===!0&&(a=!0);return a&&v(t),a};return r.createElement(r.Fragment,null,M&&r.createElement(re,null),r.createElement("div",{className:"page_head"},r.createElement("h1",{className:"pageHead"},"Petty cash transactions"),r.createElement("div",{className:"page_actions"},r.createElement(D,{size:"small",sx:{width:"230px",marginRight:"5px"}},r.createElement(me,{disablePortal:!0,size:"small",name:"branch",options:c,value:m||null,onChange:j,disabled:d&&d.type&&((A=(h=d.type)==null?void 0:h.toLowerCase)==null?void 0:A.call(h))!=="superadmin"&&((B=(p=d.type)==null?void 0:p.toLowerCase)==null?void 0:B.call(p))!=="admin",getOptionLabel:e=>e.name||"",openOnFocus:!0,renderInput:e=>r.createElement(w,{...e,label:"Select branch",fullWidth:!0})})),r.createElement(de,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:G},"Add a petty cash transaction"))),r.createElement(ue,{sx:{padding:"20px",marginBottom:"20px"}},r.createElement("h2",{style:{marginBottom:"10px"}},"Search"),r.createElement("form",{action:"",onSubmit:Q},r.createElement("div",{className:"grid grid-6-col"},r.createElement("div",{className:"grid-item"},r.createElement(D,{fullWidth:!0,error:l.startDate.invalid},r.createElement(_,{dateAdapter:z},r.createElement(H,{label:"Start date",inputFormat:"DD/MM/YYYY",value:f.startDate,disableFuture:!0,disableMaskedInput:!0,onChange:k.bind(null,"startDate"),inputProps:{readOnly:!0},renderInput:e=>r.createElement(w,{name:"date",size:"small",...e,error:l.startDate.invalid})})),l.startDate.invalid&&r.createElement(T,null,l.startDate.message))),r.createElement("div",{className:"grid-item"},r.createElement(D,{fullWidth:!0,error:l.endDate.invalid},r.createElement(_,{dateAdapter:z},r.createElement(H,{label:"End date",inputFormat:"DD/MM/YYYY",value:f.endDate,disableMaskedInput:!0,onChange:k.bind(null,"endDate"),inputProps:{readOnly:!0},renderInput:e=>r.createElement(w,{name:"date",size:"small",...e,error:l.endDate.invalid})})),l.endDate.invalid&&r.createElement(T,null,l.endDate.message))),r.createElement("div",{className:"grid-item"},r.createElement(Y,{size:"small",variant:"contained",color:"primary",type:"submit",style:{backgroundColor:"#274d62",marginLeft:"5px"}},r.createElement(K,{style:{color:"#ffffff",verticalAlign:"middle"}})),r.createElement(Y,{size:"small",variant:"contained",color:"primary",type:"button",onClick:V,style:{backgroundColor:"#274d62",marginLeft:"5px"}},r.createElement(X,{style:{color:"#ffffff",verticalAlign:"middle"}})))))),P!==""&&r.createElement(fe,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},r.createElement(ge,{severity:"error"},P)),r.createElement(he,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:q,columns:x,initialState:{...x,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))};export{tt as default};