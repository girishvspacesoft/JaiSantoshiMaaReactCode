import{r as c,a as r}from"./react-69b9bddd.js";import{i as R,e as U,f as W}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as j}from"./Dialog-c8953a08.js";import{bL as q,bM as J,bN as K,bO as X,L as Y,bt as Z,a5 as y,bP as ee,ba as te,bQ as re}from"./index-1d9d8716.js";import{a as ne,u as v}from"./react-redux-13959126.js";import{a as ie}from"./react-router-7dadf37a.js";import{i as oe,A as se,h as ae,l as le,O as me,Q as ce,f as x}from"./material-04052d9a.js";import{D as ue}from"./x-data-grid-83fc2422.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const A=()=>{var a,E,d,h;const u=q();return u&&u.type&&(((E=(a=u.type)==null?void 0:a.toLowerCase)==null?void 0:E.call(a))==="superadmin"||((h=(d=u.type)==null?void 0:d.toLowerCase)==null?void 0:h.call(d))==="admin")},qe=()=>{const u=[{field:"_id",headerName:"Id"},{field:"lsNo",headerName:"LS no.",flex:1,renderCell:e=>Z(e.row.lsNo)},{field:"date",headerName:"Date",flex:1,renderCell:e=>y(new Date(e.row.createdAt))},{field:"vehicleNo",headerName:"Vehicle no.",flex:1},{field:"from",headerName:"From",flex:1,renderCell:e=>{var t;return(t=e.row.from)==null?void 0:t.name}},{field:"to",headerName:"To",flex:1,renderCell:e=>{var t;return(t=e.row.to)==null?void 0:t.name}},{field:"hire",headerName:"Hire amount",flex:1,renderCell:e=>{var t,n;return r.createElement("strong",null,"₹ ",(n=(t=e.row.hire)==null?void 0:t.toFixed)==null?void 0:n.call(t,2))}},{field:"total",headerName:"Balance",flex:1,renderCell:e=>{var t,n;return r.createElement("strong",null,"₹ ",(n=(t=e.row.total)==null?void 0:t.toFixed)==null?void 0:n.call(t,2))}},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const t=o=>{o.stopPropagation()},n=o=>(o.stopPropagation(),H(e.row._id)),s=o=>(o.stopPropagation(),Q(e.row._id));return r.createElement(r.Fragment,null,r.createElement(x,{size:"small",onClick:t,color:"primary"},r.createElement(R,null)),r.createElement(x,{size:"small",onClick:s,color:"primary"},r.createElement(U,null)),A()?r.createElement(x,{size:"small",onClick:n,color:"error"},r.createElement(W,null)):null)}}],a=ne(),E=v(J),d=v(e=>e.user),h=ie(),[g,P]=c.useState([]),[i,F]=c.useState([]),[f,C]=c.useState(null),[O,I]=c.useState([]),[b,l]=c.useState(""),[M,S]=c.useState(!1),[k,z]=c.useState("");c.useEffect(()=>{a(K()).then(({payload:e={}})=>{var n,s,o;const{message:t}=(e==null?void 0:e.data)||{};if(t)l(t);else if(l(""),P(e==null?void 0:e.data),(n=e==null?void 0:e.data)!=null&&n.length){const m=(o=(s=e==null?void 0:e.data)==null?void 0:s.filter)==null?void 0:o.call(s,L=>L._id===d.branch);m!=null&&m.length&&C(m[0])}}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")}),a(X()).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};t?l(t):(l(""),F(e==null?void 0:e.data))}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})},[]);const N=()=>{a(ee(f._id)).then(({payload:e={}})=>{var n,s,o;const{message:t}=(e==null?void 0:e.data)||{};if(t)l(t);else{const m=(s=(n=e==null?void 0:e.data)==null?void 0:n.map)==null?void 0:s.call(n,p=>{var _,D;const $=(_=i==null?void 0:i.filter)==null?void 0:_.call(i,w=>w._id===p.from)[0],G=(D=i==null?void 0:i.filter)==null?void 0:D.call(i,w=>w._id===p.to)[0];return{...p,from:$||"",to:G||""}}),L=(o=m==null?void 0:m.filter)==null?void 0:o.call(m,p=>p.isLocalMemo);I(L)}}).catch(e=>{l(e.message)})};c.useEffect(()=>{f!=null&&f._id&&(i!=null&&i.length)&&N()},[f,i]);const B=(e,t)=>{var s;const n=(s=g==null?void 0:g.filter)==null?void 0:s.call(g,o=>o._id===e.target.value);C(n[0]),a(te(t._id))},H=e=>{z(e),S(!0)},T=e=>{e.target.value==="true"?a(re(k)).then(({payload:t={}})=>{const{message:n}=(t==null?void 0:t.data)||{};n?l(n):(N(),S(!1))}).catch(t=>{l(t.message)}):S(!1)},V=()=>{h("/transactions/localMemoList/addLocalMemoLS")},Q=e=>{h("/transactions/localMemoList/editLocalMemoLS",{state:{lsId:e}})};return r.createElement(r.Fragment,null,E&&r.createElement(Y,null),M&&r.createElement(j,{isOpen:!0,onClose:T,title:"Are you sure?",content:"Do you want to delete the loading slip?",warning:!0}),r.createElement("div",{className:"page_head"},r.createElement("h1",{className:"pageHead"},"Local memo loading slips"),r.createElement("div",{className:"page_actions"},r.createElement(oe,{size:"small",sx:{width:"230px",marginRight:"5px"}},r.createElement(se,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:g,value:f||null,onChange:B,disabled:!A(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>r.createElement(ae,{...e,label:"Select branch",fullWidth:!0})})),r.createElement(le,{variant:"contained",size:"small",type:"button",color:"primary",className:"ml6",onClick:V},"Add a loading slip"))),b!==""&&r.createElement(me,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},r.createElement(ce,{severity:"error"},b)),r.createElement("div",{style:{width:"100%"}},r.createElement(ue,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id,rows:O,columns:u,initialState:{...u,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0})))};export{qe as default,A as isSuperAdminOrAdmin};
