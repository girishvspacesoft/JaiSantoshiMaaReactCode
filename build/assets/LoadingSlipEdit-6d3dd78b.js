import{r as h,a as e}from"./react-69b9bddd.js";import{L as he,A as ve,D as qe,T as Ie}from"./x-date-pickers-f3802fc3.js";import"./Card.module-3bdbfb7f.js";import{bm as Me,k as ye,bz as Ue,bA as Ge,L as Ye,P as Te,an as ge,bB as je,bs as $e,b5 as Qe}from"./index-1d9d8716.js";import{F as Je,g as Ke,v as me,h as w,a0 as Xe,l as X,D as We,O as Ze,Q as Re,a as fe,i as S,A as j,V as F}from"./material-04052d9a.js";import{D as et}from"./x-data-grid-83fc2422.js";import{u as Ee,a as tt}from"./react-redux-13959126.js";import{a as at,b as rt}from"./react-router-7dadf37a.js";import"./@babel-5e587562.js";import"./@date-io-28dabb9c.js";import"./dayjs-39ab3f8d.js";import"./utils-49fe0532.js";import"./clsx-1229b3e0.js";import"./base-e8cfb5a9.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./rifm-bf33b601.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const nt=({loadingSlip:be,setLoadingSlip:B,lorryReceipts:b,setLorryReceipts:P,handleSelectedLr:H,selectedLR:d,setSelectedLR:x})=>{var D,V;const z=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"consignorName",headerName:"Consignor",flex:1},{field:"from",headerName:"From",flex:1},{field:"consigneeName",headerName:"Consignee",flex:1},{field:"to",headerName:"To",flex:1},{field:"weight",headerName:"Weight",flex:1},{field:"total",headerName:"To pay",flex:1,type:"number",renderCell:m=>{var l,o,c;return((l=m.row.payType)==null?void 0:l.toLowerCase())==="topay"?e.createElement("strong",null,"₹ ",(c=(o=Number(m.row.total))==null?void 0:o.toFixed)==null?void 0:c.call(o,2)):"-"}}],[Z,s]=h.useState(!0),[i,M]=h.useState([]),[ce,r]=h.useState([]),[k,y]=h.useState(""),[O,R]=h.useState(0);h.useEffect(()=>{var m;if(b!=null&&b.length){const l=[...b];(m=l==null?void 0:l.forEach)==null||m.call(l,o=>{var C,g;let c=0;(g=(C=o.transactions)==null?void 0:C.forEach)==null||g.call(C,f=>{c+=+f.weight}),o.weight=c,o.show=!0}),M(l)}},[b]),h.useEffect(()=>{var m;if(i!=null&&i.length&&Z){let l=0;const o=(m=i==null?void 0:i.filter)==null?void 0:m.call(i,c=>{var C;return c.checked&&(l+=((C=c.payType)==null?void 0:C.toLowerCase())==="topay"?c.total:0),c.checked});x(o),r(o),R(l),s(!1)}},[i,Z]),h.useEffect(()=>{H(d)},[d,H]);const ee=(m,l)=>{const o=[...i];o[l]={...o[l],checked:m.target.checked},m.target.checked?r(c=>[...c,o[l]]):r(c=>c.filter(({_id:C})=>o[l]._id!==C)),M([...o])},de=m=>{var C;m.preventDefault();let l=0;const o=i.find(g=>{var f;return(k==null?void 0:k.toLowerCase())===((f=g.lrNo)==null?void 0:f.toLowerCase())});let c=[...ce];o&&!c.some(g=>g.lrNo===o.lrNo)&&(r(g=>[...g,o]),c=[...c,o]),x((C=c==null?void 0:c.filter)==null?void 0:C.call(c,g=>{var f,E;return(g.checked||(k==null?void 0:k.toLowerCase())===((f=g.lrNo)==null?void 0:f.toLowerCase()))&&(g.checked=!0,l+=((E=g.payType)==null?void 0:E.toLowerCase())==="topay"?g.total:0),g.checked})),R(l),B(g=>({...g,totalFreight:l}))},U=m=>{var o,c,C,g;const l=m.target.value?(g=(C=(c=(o=m.target.value)==null?void 0:o.trim)==null?void 0:c.call(o))==null?void 0:C.toLowerCase)==null?void 0:g.call(C):m.target.value;y(l),M(l?f=>{var q;const E=f;return(q=E==null?void 0:E.forEach)==null||q.call(E,G=>{var Y,J,te,W;G.show=(W=(J=(Y=G.lrNo)==null?void 0:Y.toLowerCase)==null?void 0:(te=J.call(Y)).includes)==null?void 0:W.call(te,l)}),E}:f=>{var q;const E=f;return(q=E==null?void 0:E.forEach)==null||q.call(E,G=>{G.show=!0}),E})};let Q=0,T=0;const ue=(i==null?void 0:i.length)>0&&((D=i==null?void 0:i.map)==null?void 0:D.call(i,(m,l)=>(m.show&&(Q+=1),m.checked&&m.show&&(T+=1),m.show?e.createElement(Je,{className:"groupCheckbox",key:m.lrNo,control:e.createElement(Ke,{name:m._id,size:"small",checked:m.checked,onChange:o=>ee(o,l)}),label:e.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",lineHeight:"1em"}},m.lrNo)}):null)));return e.createElement(e.Fragment,null,e.createElement("form",{action:"",onSubmit:de,id:"lrSelectionForm"},e.createElement(me,{container:!0,spacing:2},e.createElement(me,{item:!0,xs:2},e.createElement("h2",{className:"mb20 text-inline"},"Lorry receipts")),e.createElement(me,{item:!0,xs:2},e.createElement(w,{size:"small",variant:"outlined",label:"Filter LR",value:k,fullWidth:!0,onChange:U,name:"search",id:"search"})),e.createElement(me,{item:!0,xs:2},e.createElement("h4",{className:" text-inline",style:{paddingTop:"5px"}},Q," Out of ",T," selected"))),e.createElement(Xe,{className:"checkboxGroup"},ue),e.createElement("div",{className:"right"},e.createElement(X,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"lrSelectionForm",className:"ml6"},"Update"))),e.createElement(We,{sx:{margin:"20px 0"}}),e.createElement("div",{style:{width:"100%"}},e.createElement(et,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:m=>m._id,rows:d,columns:z,initialState:{...z,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}),e.createElement("div",{style:{textAlign:"end",paddingTop:"10px",paddingRight:"10px"}},e.createElement("p",null,"Total To Pay: ",e.createElement("strong",null," ₹ ",(V=O==null?void 0:O.toFixed)==null?void 0:V.call(O,2))))))},oe={branch:"",date:new Date,vehicle:null,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:"",driver:null,driverName:"",licenseNo:"",phone:"",from:null,fromName:"",to:null,toName:"",lrList:[],totalFreight:"",rent:"",advance:"",totalPayable:"",totalWeight:"",currentTime:null,reachTime:null,paybleAt:null,remark:""},$={branch:{invalid:!1,message:""},date:{invalid:!1,message:""},vehicle:{invalid:!1,message:""},vehicleOwner:{invalid:!1,message:""},vehicleOwnerAddress:{invalid:!1,message:""},vehicleOwnerPhone:{invalid:!1,message:""},driver:{invalid:!1,message:""},licenseNo:{invalid:!1,message:""},phone:{invalid:!1,message:""},from:{invalid:!1,message:""},to:{invalid:!1,message:""},lrList:{invalid:!1,message:""},totalFreight:{invalid:!1,message:""},rent:{invalid:!1,message:""},advance:{invalid:!1,message:""}},Gt=()=>{var Ne,ae,pe,re,we,Ce;const be=Ee(Me),B=Ee(t=>t.user),{branches:b,vehicles:P,suppliers:H,places:d,drivers:x}=Ee(({loadingslip:t})=>t)||{},[z,Z]=h.useState([]),[s,i]=h.useState({...oe}),[M,ce]=h.useState({...oe}),[r,k]=h.useState($),[y,O]=h.useState(""),[R,ee]=h.useState([]),[,de]=h.useState([]),[U,Q]=h.useState(!1),[T,ue]=h.useState([]),D=tt(),V=at(),m=rt(),{lsId:l}=m.state,o=h.useCallback(()=>{V("/transactions/loadingSlips")},[V]),c=h.useCallback(()=>{V("/transactions/localMemoList")},[V]);h.useEffect(()=>{var t;m.pathname&&((t=m.pathname)!=null&&t.endsWith("editLocalMemoLS")?Q(!0):Q(!1))},[m.pathname]),h.useEffect(()=>{if(l){const t=ye()?"":B.userBranches||[];D(Ue(t)).then(({payload:a={}})=>{var N,u,L;const{message:v}=(a==null?void 0:a.data)||{};if(v)O(v);else{const n=(u=(N=a==null?void 0:a.data)==null?void 0:N.map)==null?void 0:u.call(N,A=>({...A,checked:!1})),p=(L=n==null?void 0:n.filter)==null?void 0:L.call(n,A=>!A.associatedLS||A.associatedLS===l);Z(p)}}).catch(()=>{O("Something went wrong! Please try later or contact Administrator.")})}},[l]),h.useEffect(()=>{const t=Object.keys(r);if(t!=null&&t.length){const a=document.querySelector(`input[name=${t[0]}]`);a==null||a.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[r]),h.useEffect(()=>{if(y){const t=document.getElementById("alertError");t==null||t.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[y]),h.useEffect(()=>{l&&(P!=null&&P.length)&&(x!=null&&x.length)&&D(Ge(l)).then(({payload:t={}})=>{var p,A,K,Oe,ne,Se,xe,ie,Fe,ke,le,Le,Pe,se,ze,Ae;const{message:a,vehicleNo:v,licenseNo:N,from:u,to:L,paybleAt:n}=(t==null?void 0:t.data)||{};if(a)O(a);else{O(""),k($);let _={...(t==null?void 0:t.data)||{}};const _e=(K=(A=(p=P==null?void 0:P.map)==null?void 0:p.call(P,I=>I.vehicleNo))==null?void 0:A.indexOf)==null?void 0:K.call(A,v);_.vehicle=P[_e];const He=(Se=(ne=(Oe=x==null?void 0:x.map)==null?void 0:Oe.call(x,I=>I.licenseNo))==null?void 0:ne.indexOf)==null?void 0:Se.call(ne,N);_.driver=x[He];const Be=(Fe=(ie=(xe=d==null?void 0:d.map)==null?void 0:xe.call(d,I=>I._id))==null?void 0:ie.indexOf)==null?void 0:Fe.call(ie,u);_.from=d[Be];const De=(Le=(le=(ke=d==null?void 0:d.map)==null?void 0:ke.call(d,I=>I._id))==null?void 0:le.indexOf)==null?void 0:Le.call(le,L);_.to=d[De];const Ve=(ze=(se=(Pe=b==null?void 0:b.map)==null?void 0:Pe.call(b,I=>I._id))==null?void 0:se.indexOf)==null?void 0:ze.call(se,n);_.paybleAt=b[Ve],_.branch=(Ae=b==null?void 0:b.find)==null?void 0:Ae.call(b,({_id:I})=>I===_.branch),i(_),ce(_)}}).catch(t=>{O(t.message)})},[l,P,x,d,b]),h.useEffect(()=>{var t,a;if(z!=null&&z.length&&((t=s.lrList)!=null&&t.length)){const v=(a=z==null?void 0:z.map)==null?void 0:a.call(z,N=>{var u,L;return{...N,checked:(L=(u=s.lrList)==null?void 0:u.some)==null?void 0:L.call(u,n=>n._id===N._id)}});ee(v)}},[z,s.lrList]);const C=()=>{i(M),O(""),k($)},g=()=>{U?c():o()},f=t=>{const a=t.target.name,v=t.target.value;i(N=>({...N,[a]:v}))},E=(t,a)=>{var v;if(t.preventDefault(),!G(s)){const N={...s};N.lrList=(v=T==null?void 0:T.filter)==null?void 0:v.call(T,u=>u.checked),D(je(N)).then(({payload:u={}})=>{const{message:L}=(u==null?void 0:u.data)||{};L?O(L):a?u!=null&&u.data._id&&D($e({id:u==null?void 0:u.data._id,email:""})).then(({payload:n={}})=>{const{message:p}=(n==null?void 0:n.data)||{};if(p)O(p);else if(n!=null&&n.data.file){const A=Qe(n==null?void 0:n.data.file);if(A){const K=window.open(A,"_blank");K.focus(),K.print(),O(""),k($),i(oe),U?c():o()}}}).catch(n=>{O(n.message)}):(O(""),k($),i(oe),U?c():o())}).catch(u=>{O(u.message)})}},q=t=>{t.preventDefault(),E(t,!0)},G=t=>{var N;const a={...$};t.branch||(a.branch={invalid:!0,message:"Branch is required"}),t.date||(a.date={invalid:!0,message:"Date is required"}),t.vehicle||(a.vehicle={invalid:!0,message:"Vehicle is required"}),t.driver||(a.driver={invalid:!0,message:"Driver name is required"}),t.from||(a.from={invalid:!0,message:"From is required"}),t.to||(a.to={invalid:!0,message:"To is required"}),(N=t.lrList)!=null&&N.length||(a.lrList={invalid:!0,message:"At least one lorry receipt is required"}),(t.totalFreight<0||!t.totalFreight)&&(a.totalFreight={invalid:!0,message:"Total freight is invalid"}),(t.rent<0||!t.rent)&&(a.rent={invalid:!0,message:"Rent is invalid"}),(t.advance<0||!t.advance)&&(a.advance={invalid:!0,message:"Advance is invalid"});let v=!1;for(const u in a)a[u].invalid===!0&&(v=!0);return v&&k(a),v},Y=(t,a)=>{i(v=>({...v,[t]:new Date(a)}))},J=(t,a)=>{i(v=>({...v,[t]:new Date(a).getTime()}))},te=t=>{de(t)},W=(t,a,v)=>{var N,u,L;if(i(n=>({...n,[v]:a})),v==="vehicle")if(a&&a._id){const n=(N=H==null?void 0:H.find)==null?void 0:N.call(H,p=>p._id===a.owner||p.name===a.ownerName);i(p=>({...p,vehicleNo:a==null?void 0:a.vehicleNo,vehicleOwner:n==null?void 0:n.name,vehicleOwnerAddress:`${(n==null?void 0:n.address)||""}, ${(n==null?void 0:n.city)||""}`,vehicleOwnerPhone:n==null?void 0:n.phone}))}else i(n=>({...n,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:""}));if(v==="driver"&&(a&&a._id?i(n=>({...n,driverName:a.name,licenseNo:a.licenseNo,phone:a.telephone})):i(n=>({...n,driverName:"",licenseNo:"",phone:""}))),v==="from")if(a&&a._id){const n=(u=d==null?void 0:d.find)==null?void 0:u.call(d,p=>p._id===a._id);i(p=>({...p,fromName:n.name}))}else i(n=>({...n,fromName:""}));if(v==="to")if(a&&a._id){const n=(L=d==null?void 0:d.find)==null?void 0:L.call(d,p=>p._id===a._id);i(p=>({...p,toName:n.name}))}else i(n=>({...n,toName:""}))};return h.useEffect(()=>{const t=+s.totalFreight+ +s.advance-+s.rent;i(a=>({...a,totalPayable:t}))},[s.totalFreight,s.rent,s.advance]),e.createElement(e.Fragment,null,be&&e.createElement(Ye,null),e.createElement("div",{className:"inner-wrap"},e.createElement("h1",{className:"pageHead"},U?"Edit a local challan":"Edit a challan"),y!==""&&e.createElement(Ze,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(Re,{id:"alertError",severity:"error"},y)),e.createElement("form",{action:"",onSubmit:E,id:"loadingSlipForm"},e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small",error:(Ne=r.branch)==null?void 0:Ne.invalid},e.createElement(j,{disablePortal:!0,size:"small",name:"branch",options:b,value:s.branch||null,onChange:(t,a)=>W(t,a,"branch"),getOptionLabel:t=>t.name,openOnFocus:!0,disabled:B&&B.type&&((pe=(ae=B.type)==null?void 0:ae.toLowerCase)==null?void 0:pe.call(ae))!=="superadmin"&&((we=(re=B.type)==null?void 0:re.toLowerCase)==null?void 0:we.call(re))!=="admin",renderInput:t=>e.createElement(w,{...t,label:"Branch",name:"branch",error:r.branch.invalid,fullWidth:!0})}),((Ce=r.branch)==null?void 0:Ce.invalid)&&e.createElement(F,null,r.branch.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.date.invalid},e.createElement(he,{dateAdapter:ve},e.createElement(qe,{error:r.date.invalid,label:"Date",inputFormat:"DD/MM/YYYY",value:s.date,onChange:Y.bind(null,"date"),renderInput:t=>e.createElement(w,{name:"date",size:"small",...t,error:r.date.invalid})})),r.date.invalid&&e.createElement(F,null,r.date.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small",error:r.vehicle.invalid},e.createElement(j,{disablePortal:!0,autoSelect:!0,size:"small",name:"vehicle",options:P,value:s.vehicle,onChange:(t,a)=>W(t,a,"vehicle"),openOnFocus:!0,renderInput:t=>e.createElement(w,{...t,label:"Vehicle",error:r.vehicle.invalid,fullWidth:!0}),renderOption:(t,a)=>e.createElement("li",{...t,key:a._id},a.label)}),r.vehicle.invalid&&e.createElement(F,null,r.vehicle.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.vehicleOwner.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Vehicle owner",error:r.vehicleOwner.invalid,value:s.vehicleOwner,onChange:f,name:"vehicleOwner",id:"vehicleOwner"}),r.vehicleOwner.invalid&&e.createElement(F,null,r.vehicleOwner.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.vehicleOwnerAddress.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Vehicle owner address",error:r.vehicleOwnerAddress.invalid,value:s.vehicleOwnerAddress,onChange:f,name:"vehicleOwnerAddress",id:"vehicleOwnerAddress"}),r.vehicleOwnerAddress.invalid&&e.createElement(F,null,r.vehicleOwnerAddress.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.vehicleOwnerPhone.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Vehicle owner phone",error:r.vehicleOwnerPhone.invalid,value:s.vehicleOwnerPhone,onChange:f,onInput:Te,name:"vehicleOwnerPhone",id:"vehicleOwnerPhone"}),r.vehicleOwnerPhone.invalid&&e.createElement(F,null,r.vehicleOwnerPhone.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small",error:r.driver.invalid},e.createElement(j,{disablePortal:!0,autoSelect:!0,size:"small",name:"driver",options:x,value:s.driver,onChange:(t,a)=>W(t,a,"driver"),openOnFocus:!0,renderInput:t=>e.createElement(w,{...t,label:"Driver",error:r.driver.invalid,fullWidth:!0}),renderOption:(t,a)=>e.createElement("li",{...t,key:a._id},a.label)}),r.driver.invalid&&e.createElement(F,null,r.driver.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.licenseNo.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"License no",value:s.licenseNo,error:r.licenseNo.invalid,onChange:f,name:"licenseNo",id:"licenseNo"}),r.licenseNo.invalid&&e.createElement(F,null,r.licenseNo.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.phone.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Telephone",value:s.phone,error:r.phone.invalid,onChange:f,onInput:Te,name:"phone",id:"phone"}),r.phone.invalid&&e.createElement(F,null,r.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small",error:r.from.invalid},e.createElement(j,{disablePortal:!0,autoSelect:!0,size:"small",name:"from",options:d,value:s.from,onChange:(t,a)=>W(t,a,"from"),openOnFocus:!0,renderInput:t=>e.createElement(w,{...t,label:"From",error:r.from.invalid,fullWidth:!0})}),r.from.invalid&&e.createElement(F,null,r.from.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small",error:r.to.invalid},e.createElement(j,{disablePortal:!0,autoSelect:!0,size:"small",name:"to",options:d,value:s.to,onChange:(t,a)=>W(t,a,"to"),openOnFocus:!0,renderInput:t=>e.createElement(w,{...t,label:"To",error:r.to.invalid,fullWidth:!0})}),r.to.invalid&&e.createElement(F,null,r.to.message)))))),e.createElement("h2",{className:"mb20"},"Freight details"),r.lrList.invalid&&e.createElement("p",{className:"error"},r.lrList.message),e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement(nt,{loadingSlip:s,setLoadingSlip:i,lorryReceipts:R,setLorryReceipts:ee,handleSelectedLr:te,selectedLR:T,setSelectedLR:ue}),e.createElement(We,{sx:{margin:"20px 0"}}),e.createElement("form",{action:"",onSubmit:E,id:"loadingSlipForm"},e.createElement("h3",{className:"mb20"},"Charges"),e.createElement("div",{className:"grid grid-8-col"},e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.totalFreight.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Total freight",value:s.totalFreight||"",error:r.totalFreight.invalid,onChange:f,onInput:ge,name:"totalFreight",id:"totalFreight"}),r.totalFreight.invalid&&e.createElement(F,null,r.totalFreight.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.rent.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Rent",value:s.rent||"",error:r.rent.invalid,onChange:f,onInput:ge,name:"rent",id:"rent"}),r.rent.invalid&&e.createElement(F,null,r.rent.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,error:r.advance.invalid},e.createElement(w,{size:"small",variant:"outlined",label:"Advance",value:s.advance||"",onChange:f,onInput:ge,name:"advance",id:"advance",error:r.advance.invalid}),r.advance.invalid&&e.createElement(F,null,r.advance.message))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0},e.createElement(w,{size:"small",type:"number",variant:"outlined",label:"Total payable",value:s.totalPayable||"",onChange:f,name:"totalPayable",id:"totalPayable",inputProps:{readOnly:!0}})))))),e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:E,id:"loadingSlipForm"},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(he,{dateAdapter:ve},e.createElement(Ie,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Current time",value:s.currentTime,onChange:J.bind(null,"currentTime"),renderInput:t=>e.createElement(w,{name:"currentTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(he,{dateAdapter:ve},e.createElement(Ie,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Reach time",value:s.reachTime,onChange:J.bind(null,"reachTime"),renderInput:t=>e.createElement(w,{name:"reachTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0,size:"small"},e.createElement(j,{disablePortal:!0,autoSelect:!0,size:"small",name:"paybleAt",options:b,value:s.paybleAt,onChange:(t,a)=>W(t,a,"paybleAt"),openOnFocus:!0,renderInput:t=>e.createElement(w,{...t,label:"Payable at",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(S,{fullWidth:!0},e.createElement(w,{size:"small",variant:"outlined",label:"Remark",value:s.remark,onChange:f,name:"remark",id:"remark"}))))),e.createElement("div",{className:"right"},e.createElement(X,{variant:"outlined",size:"medium",onClick:g},"Back"),e.createElement(X,{variant:"outlined",size:"medium",onClick:C,className:"ml6"},"Reset"),e.createElement(X,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"loadingSlipForm",className:"ml6"},"Save"),e.createElement(X,{variant:"contained",size:"medium",type:"button",color:"primary",form:"loadingSlipForm",className:"ml6",onClick:q},"Save & Print")))))};export{Gt as default};
