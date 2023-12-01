import{r as n,a as t}from"./react-69b9bddd.js";import{a as Fe,u as z}from"./react-redux-13959126.js";import{L as Z,A as ee,D as te}from"./x-date-pickers-f3802fc3.js";import{b as _e,k as Ie,c as ze,l as Pe,e as Re,f as Me}from"./icons-material-40f8e5d8.js";import"./Card.module-3bdbfb7f.js";import{C as ye}from"./Dialog-c8953a08.js";import{bC as Oe,bD as Te,bE as Ye,a5 as He,bt as Be,L as We,k as ae,bF as Ge,bG as $e,b9 as qe,ba as je,o as Qe}from"./index-1d9d8716.js";import{u as Ue,D as Je,G as Ke}from"./x-data-grid-83fc2422.js";import{a as Ve}from"./react-router-7dadf37a.js";import{j as Xe}from"./utils-49fe0532.js";import{i as P,A as Ze,h as A,l as et,O as tt,Q as at,a as rt,V as re,a1 as nt,a2 as ne,f as w,m as st}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./@date-io-28dabb9c.js";import"./dayjs-39ab3f8d.js";import"./clsx-1229b3e0.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";import"./rifm-bf33b601.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./react-icons-6bc9af43.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const ie=new Date,M=ie.getFullYear(),y=ie.getMonth(),it=new Date(M,y+1,0).getDate(),N=new Date;N.setFullYear(M);N.setMonth(y);N.setDate(1);const L=new Date;L.setFullYear(M);L.setMonth(y);L.setDate(it);const se={startDate:N,endDate:L,type:""},R={startDate:{invalid:!1,message:""},endDate:{invalid:!1,message:""}},Qt=()=>{const O=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"lsNo",flex:1,headerName:"LS no."},{field:"",headerName:"Delivered",flex:1,renderCell:e=>e.row.deliveryDate?t.createElement(Pe,{color:"success",fontSize:"small"}):""},{field:"deliveryDate",headerName:"Delivered date",flex:1,minWidth:120},{field:"payType",headerName:"Pay mode",maxWidth:100,flex:1},{field:"total",headerName:"Receivable amount",type:"number",minWidth:150,flex:1,renderCell:e=>t.createElement("strong",null,"₹ ",e.row.total)},{field:"actions",headerName:"Action",sortable:!1,maxWidth:70,flex:1,renderCell:e=>{const a=s=>(s.stopPropagation(),De(e.row._id)),r=s=>(s.stopPropagation(),Se(e.row._id));return t.createElement(t.Fragment,null,t.createElement(w,{size:"small",onClick:a,color:"primary"},t.createElement(Re,null)),ae()?t.createElement(w,{size:"small",onClick:r,color:"error"},t.createElement(Me,null)):null)}}],k=Ue(),u=Fe(),oe=z(Oe),F=z(e=>e.user),T=Ve(),[le,ce]=n.useState([]),[c,Y]=n.useState(null),[o,me]=n.useState([]),[H,m]=n.useState(""),[d,B]=n.useState(R),[h,_]=n.useState(se),[W,g]=n.useState(!0),[de,I]=n.useState(!1),[ue,ge]=n.useState(!0),[pe,G]=n.useState(!1),{search:D}=z(({acknowledge:e})=>e),[fe,$]=n.useState(""),[he,S]=n.useState(!1),[p,Ee]=n.useState({page:0,pageSize:100}),[E,q]=n.useState({isLoading:!1,data:[],total:0});n.useEffect(()=>{u(Te()).then(({payload:e={}})=>{var r,s;const{message:a}=(e==null?void 0:e.data)||{};if(a)m(a);else if(m(""),ce(e==null?void 0:e.data),F&&F.branch){const v=(s=(r=e==null?void 0:e.data)==null?void 0:r.find)==null?void 0:s.call(r,i=>i._id===F.branch);Y(v)}}).catch(()=>{m("Something went wrong! Please try later or contact Administrator.")})},[]);const j=()=>{const e={query:h,branch:c._id,pagination:{limit:p.pageSize?p.pageSize:100,page:p.page+1}};u(Ge(e)).then(({payload:a={}})=>{const{message:r}=(a==null?void 0:a.data)||{};r?m(r):(q(s=>({...s,isLoading:!1,data:[],total:a==null?void 0:a.data.count})),me(a==null?void 0:a.data.lorryReceipts)),g(!1)}).catch(a=>{m(a.message)})};n.useEffect(()=>{c!=null&&c._id&&W&&!de&&j()},[ue,c,p.page,p.pageSize,W]),n.useEffect(()=>{var e,a;if(o!=null&&o.length){const r=(e=o==null?void 0:o.filter)==null?void 0:e.call(o,i=>i.associatedLS),s=(a=r==null?void 0:r.map)==null?void 0:a.call(r,i=>i.associatedLS),v=[...new Set(s)];u(Ye(v)).then(({payload:i={}})=>{var K;const{message:J}=(i==null?void 0:i.data)||{};if(J)m(J);else{const f=o;(K=f==null?void 0:f.forEach)==null||K.call(f,l=>{var x,V,C,X;const b=(V=(x=i==null?void 0:i.data)==null?void 0:x.find)==null?void 0:V.call(x,ke=>ke._id===l.associatedLS);l.associatedLS=b,l.total=(X=(C=l.total)==null?void 0:C.toFixed)==null?void 0:X.call(C,2),l.deliveryDate=l.deliveryDate?He(l.deliveryDate):"",l.lsNo=Be(b==null?void 0:b.lsNo)}),q(l=>({...l,data:f}))}}).catch(i=>{m(i.message)})}},[o]);const Q=n.useMemo(()=>Xe(e=>{var a,r,s;k.current.setQuickFilterValues((s=(r=(a=e.split)==null?void 0:a.call(e," "))==null?void 0:r.filter)==null?void 0:s.call(r,v=>v!==""))},500),[k]);n.useEffect(()=>{var e;D&&((e=E.data)!=null&&e.length)&&(G(!0),Q(D),setTimeout(()=>{G(!1)},500))},[E.data]);const ve=e=>{Q(e.target.value),u($e(e.target.value))},De=e=>{T("/transactions/lrAcknowledgement/editLRAcknowledgement",{state:{lrId:e}})},Se=e=>{Qe("Sales/Purchase","LorryReceipt","write")&&($(e),S(!0))},be=e=>{S(!0),e.target.value==="true"?u(qe(fe)).then(({payload:a={}})=>{const{message:r}=(a==null?void 0:a.data)||{};r?m(r):j(),S(!1)}).catch(()=>{m("Something went wrong! Please try later or contact Administrator.")}):$(""),S(!1)},xe=(e,a)=>{Y(a),g(!0),u(je(a._id))},Ce=e=>{e.preventDefault(),B(()=>we(h)),g(!0)},U=(e,a)=>{_(r=>({...r,[e]:new Date(a)})),g(!1)},Ae=e=>{const a=e.target.name,r=e.target.value;_(s=>({...s,[a]:r}))},we=e=>{const a={...R};e.startDate||(a.startDate={invalid:!0,message:"Start date is required"}),e.endDate||(a.endDate={invalid:!0,message:"End date is required"});let r=!1;for(const s in a)a[s].invalid===!0&&(r=!0);return I(!!r),a},Ne=()=>{I(!1),B(R),g(!0),_(se),ge(!0)},Le=()=>{T("/transactions/lrAcknowledgement/addLRAcknowledgement",{state:c==null?void 0:c._id})};return t.createElement(t.Fragment,null,(oe||pe)&&t.createElement(We,null),t.createElement("div",{className:"inner-wrap"},t.createElement("div",{className:"page_head"},t.createElement("h1",{className:"pageHead"},"LR acknowledgements"),t.createElement("div",{className:"page_actions"},t.createElement(P,{size:"small",sx:{width:"230px",marginRight:"5px",marginTop:"5px"}},t.createElement(Ze,{disablePortal:!0,size:"small",name:"branch",className:"multi-select",options:le,value:c,onChange:xe,disabled:!ae(),getOptionLabel:e=>e.name,openOnFocus:!0,renderInput:e=>t.createElement(A,{...e,label:"Select branch",fullWidth:!0})})),t.createElement(et,{style:{marginTop:"5px"},variant:"contained",size:"medium",type:"button",color:"primary",className:"ml6",onClick:Le},"Add acknowledgement"))),he&&t.createElement(ye,{isOpen:!0,onClose:be,title:"Are you sure?",content:"Do you want to delete the lorry receipt?",warning:!0}),H!==""&&t.createElement(tt,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(at,{severity:"error"},H)),t.createElement(rt,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("h2",{style:{marginBottom:"10px"}},"Search"),t.createElement("form",{action:"",onSubmit:Ce},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(P,{fullWidth:!0,error:d.startDate.invalid},t.createElement(Z,{dateAdapter:ee},t.createElement(te,{label:"Start date",inputFormat:"DD/MM/YYYY",value:h.startDate,disableFuture:!0,disableMaskedInput:!0,onChange:U.bind(null,"startDate"),inputProps:{readOnly:!0},renderInput:e=>t.createElement(A,{name:"date",size:"small",...e,error:d.startDate.invalid})})),d.startDate.invalid&&t.createElement(re,null,d.startDate.message))),t.createElement("div",{className:"grid-item"},t.createElement(P,{fullWidth:!0,error:d.endDate.invalid},t.createElement(Z,{dateAdapter:ee},t.createElement(te,{label:"End date",inputFormat:"DD/MM/YYYY",value:h.endDate,disableMaskedInput:!0,onChange:U.bind(null,"endDate"),inputProps:{readOnly:!0},renderInput:e=>t.createElement(A,{name:"date",size:"small",...e,error:d.endDate.invalid})})),d.endDate.invalid&&t.createElement(re,null,d.endDate.message))),t.createElement("div",{className:"grid-item"},t.createElement(nt,{sx:{alignItems:"center"},color:"primary",name:"type",value:h.type,size:"small",exclusive:!0,onChange:Ae,style:{width:"100%"}},t.createElement(ne,{style:{width:"50%"},name:"type",value:"delivered"},"Delivered"),t.createElement(ne,{style:{width:"50%"},name:"type",value:"undelivered"},"Undelivered"))),t.createElement("div",{className:"grid-item"},t.createElement(w,{size:"small",variant:"contained",color:"primary",type:"submit",style:{backgroundColor:"#274d62",marginLeft:"5px"}},t.createElement(_e,{style:{color:"#ffffff",verticalAlign:"middle"}})),t.createElement(w,{size:"small",variant:"contained",color:"primary",type:"button",onClick:Ne,style:{backgroundColor:"#274d62",marginLeft:"5px"}},t.createElement(Ie,{style:{color:"#ffffff",verticalAlign:"middle"}})))))),t.createElement(Je,{apiRef:k,autoHeight:!0,density:"compact",rows:E.data,rowCount:E.total,loading:E.isLoading,pageSizeOptions:[100],paginationModel:p,onPaginationModelChange:e=>{Ee(e),g(!0)},paginationMode:"server",columns:O,getRowId:e=>e._id,sx:{backgroundColor:"primary.contrastText"},initialState:{...O,columns:{columnVisibilityModel:{_id:!1}}},components:{Toolbar:()=>t.createElement(Ke,{sx:{gap:"6px",mb:"10px",justifyContent:"end",border:"none"}},t.createElement(A,{variant:"standard",placeholder:"Search...",autoFocus:!!D,onChange:ve,value:D,InputProps:{startAdornment:t.createElement(st,{position:"start"},t.createElement(ze,null))}}))},disableSelectionOnClick:!0,disableColumnFilter:!0,disableColumnSelector:!0,disableDensitySelector:!0})))};export{Qt as default};
