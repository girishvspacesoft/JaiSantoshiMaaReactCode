import{r as h,a as e}from"./react-69b9bddd.js";import{L as he,A as ve,D as Ye,T as Te}from"./x-date-pickers-f3802fc3.js";import"./Card.module-3bdbfb7f.js";import{bm as je,k as $e,bz as Qe,bA as Je,L as Ke,P as Le,an as ge,bB as Xe,bs as Ze,b5 as ye}from"./index-aeb4570c.js";import{F as Re,g as et,v as me,h as O,a0 as tt,l as K,D as _e,O as at,Q as nt,a as fe,i as C,A as G,V as F}from"./material-04052d9a.js";import{D as rt}from"./x-data-grid-83fc2422.js";import{u as Ee,a as it}from"./react-redux-13959126.js";import{a as lt,b as st}from"./react-router-7dadf37a.js";import"./@babel-5e587562.js";import"./@date-io-28dabb9c.js";import"./dayjs-39ab3f8d.js";import"./utils-49fe0532.js";import"./clsx-1229b3e0.js";import"./base-e8cfb5a9.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./@popperjs-f3391c26.js";import"./rifm-bf33b601.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./stylis-79144faa.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./prop-types-b6d0a120.js";import"./reselect-36a88051.js";const mt=({loadingSlip:be,setLoadingSlip:H,lorryReceipts:p,setLorryReceipts:P,handleSelectedLr:_,selectedLR:c,setSelectedLR:S,updatedLR:d,setUpdatedLR:X,setSearchLr:s})=>{var $,ee;const E=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"consignorName",headerName:"Consignor",flex:1},{field:"from",headerName:"From",flex:1},{field:"consigneeName",headerName:"Consignee",flex:1},{field:"to",headerName:"To",flex:1},{field:"weight",headerName:"Weight",flex:1},{field:"total",headerName:"To pay",flex:1,type:"number",renderCell:l=>{var o,r,m;return((o=l.row.payType)==null?void 0:o.toLowerCase())==="topay"?e.createElement("strong",null,"₹ ",(m=(r=Number(l.row.total))==null?void 0:r.toFixed)==null?void 0:m.call(r,2)):"-"}}],[Z,ce]=h.useState(!0),[n,I]=h.useState([]),[k,x]=h.useState(""),[B,Y]=h.useState(0);h.useEffect(()=>{var l;if(p!=null&&p.length){const o=[...p];(l=o==null?void 0:o.forEach)==null||l.call(o,r=>{var b,g,T,D;let m=0;(g=(b=r.transactions)==null?void 0:b.forEach)==null||g.call(b,z=>{m+=+z.weight}),r.weight=m,r.checked=(r==null?void 0:r.checked)||!1,r.show=(D=(T=r.lrNo).includes)==null?void 0:D.call(T,k)}),X(o)}},[p]),h.useEffect(()=>{var l;if(d!=null&&d.length&&Z){let o=0;const r=(l=d==null?void 0:d.filter)==null?void 0:l.call(d,m=>{var b;return m.checked&&(o+=((b=m.payType)==null?void 0:b.toLowerCase())==="topay"?m.total:0),m.checked});S(r),I(r),Y(o),ce(!1)}},[d,Z]),h.useEffect(()=>{_(c)},[c,_]);const de=(l,o)=>{const r=[...d];r[o]={...r[o],checked:l.target.checked},l.target.checked?I(m=>[...m,r[o]]):I(m=>m.filter(({_id:b})=>r[o]._id!==b)),X([...r])},q=l=>{var b;l.preventDefault();let o=0;const r=d.find(g=>{var T;return(k==null?void 0:k.toLowerCase())===((T=g.lrNo)==null?void 0:T.toLowerCase())});let m=[...n];r&&!m.some(g=>g.lrNo===r.lrNo)&&(I(g=>[...g,r]),m=[...m,r]),S((b=m==null?void 0:m.filter)==null?void 0:b.call(m,g=>{var T,D;return(g.checked||(k==null?void 0:k.toLowerCase())===((T=g.lrNo)==null?void 0:T.toLowerCase()))&&(g.checked=!0,o+=((D=g.payType)==null?void 0:D.toLowerCase())==="topay"?g.total:0),g.checked})),Y(o),H(g=>({...g,totalFreight:o}))},y=l=>{var r,m,b,g;const o=l.target.value?(g=(b=(m=(r=l.target.value)==null?void 0:r.trim)==null?void 0:m.call(r))==null?void 0:b.toLowerCase)==null?void 0:g.call(b):l.target.value;x(o),W(l.target.value)},W=l=>{var r;const o=(r=l.trim)==null?void 0:r.call(l);s(o)};let R=0,j=0;const ue=(d==null?void 0:d.length)>0&&(($=d==null?void 0:d.map)==null?void 0:$.call(d,(l,o)=>(l.show&&(R+=1),l.checked&&l.show&&(j+=1),l.show?e.createElement(Re,{className:"groupCheckbox",key:l.lrNo,control:e.createElement(et,{name:l._id,size:"small",checked:l.checked||!1,onChange:r=>de(r,o)}),label:e.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",lineHeight:"1em"}},l.lrNo)}):null)));return e.createElement(e.Fragment,null,e.createElement("form",{action:"",onSubmit:q,id:"lrSelectionForm"},e.createElement(me,{container:!0,spacing:2},e.createElement(me,{item:!0,xs:2},e.createElement("h2",{className:"mb20 text-inline"},"Lorry receipts")),e.createElement(me,{item:!0,xs:2},e.createElement(O,{size:"small",variant:"outlined",label:"Filter LR",value:k||"",fullWidth:!0,onChange:y,name:"search",id:"search"})),e.createElement(me,{item:!0,xs:2},e.createElement("h4",{className:" text-inline",style:{paddingTop:"5px"}},R," Out of ",j," selected"))),e.createElement(tt,{className:"checkboxGroup"},ue),e.createElement("div",{className:"right"},e.createElement(K,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"lrSelectionForm",className:"ml6"},"Update"))),e.createElement(_e,{sx:{margin:"20px 0"}}),e.createElement("div",{style:{width:"100%"}},e.createElement(rt,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:l=>l._id,rows:c,columns:E,initialState:{...E,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}),e.createElement("div",{style:{textAlign:"end",paddingTop:"10px",paddingRight:"10px"}},e.createElement("p",null,"Total To Pay: ",e.createElement("strong",null," ₹ ",(ee=B==null?void 0:B.toFixed)==null?void 0:ee.call(B,2))))))},oe={branch:"",date:new Date,vehicle:null,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:"",driver:null,driverName:"",licenseNo:"",phone:"",from:null,fromName:"",to:null,toName:"",lrList:[],totalFreight:"",rent:"",advance:"",totalPayable:"",totalWeight:"",currentTime:null,reachTime:null,paybleAt:null,remark:""},U={branch:{invalid:!1,message:""},date:{invalid:!1,message:""},vehicle:{invalid:!1,message:""},vehicleOwner:{invalid:!1,message:""},vehicleOwnerAddress:{invalid:!1,message:""},vehicleOwnerPhone:{invalid:!1,message:""},driver:{invalid:!1,message:""},licenseNo:{invalid:!1,message:""},phone:{invalid:!1,message:""},from:{invalid:!1,message:""},to:{invalid:!1,message:""},lrList:{invalid:!1,message:""},totalFreight:{invalid:!1,message:""},rent:{invalid:!1,message:""},advance:{invalid:!1,message:""}},Jt=()=>{var we,ae,pe,ne,Oe,Ce;const be=Ee(je),H=Ee(t=>t.user),{branches:p,vehicles:P,suppliers:_,places:c,drivers:S}=Ee(({loadingslip:t})=>t)||{},[d,X]=h.useState([]),[s,E]=h.useState({...oe}),[Z,ce]=h.useState({...oe}),[n,I]=h.useState(U),[k,x]=h.useState(""),[B,Y]=h.useState([]),[,de]=h.useState([]),[q,y]=h.useState(!1),[W,R]=h.useState([]),[j,ue]=h.useState(""),[$,ee]=h.useState([]),l=it(),o=lt(),r=st(),{lsId:m}=r.state,b=h.useCallback(()=>{o("/transactions/loadingSlips")},[o]),g=h.useCallback(()=>{o("/transactions/localMemoList")},[o]);h.useEffect(()=>{var t;r.pathname&&((t=r.pathname)!=null&&t.endsWith("editLocalMemoLS")?y(!0):y(!1))},[r.pathname]),h.useEffect(()=>{if(m){const t=$e()?"":H.userBranches||[];l(Qe({branches:t,search:j,lsId:m})).then(({payload:a={}})=>{var N;const{message:v}=(a==null?void 0:a.data)||{};if(v)x(v);else{const w=$.filter(({checked:i})=>i),f=[...w,...((N=a==null?void 0:a.data)==null?void 0:N.filter(({lrNo:i})=>!(w!=null&&w.some(u=>i===u.lrNo))))||[]];X(f)}}).catch(()=>{x("Something went wrong! Please try later or contact Administrator.")})}},[m,j]),h.useEffect(()=>{const t=Object.keys(n);if(t!=null&&t.length){const a=document.querySelector(`input[name=${t[0]}]`);a==null||a.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[n]),h.useEffect(()=>{if(k){const t=document.getElementById("alertError");t==null||t.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[k]),h.useEffect(()=>{m&&(P!=null&&P.length)&&(S!=null&&S.length)&&l(Je(m)).then(({payload:t={}})=>{var u,V,Q,J,re,Se,xe,ie,Fe,ke,le,Pe,ze,se,Ae,Ie;const{message:a,vehicleNo:v,driver:N,from:w,to:f,paybleAt:i}=(t==null?void 0:t.data)||{};if(a)x(a);else{x(""),I(U);let L={...(t==null?void 0:t.data)||{}};const Ve=(Q=(V=(u=P==null?void 0:P.map)==null?void 0:u.call(P,A=>A.vehicleNo))==null?void 0:V.indexOf)==null?void 0:Q.call(V,v);L.vehicle=P[Ve];const qe=(Se=(re=(J=S==null?void 0:S.map)==null?void 0:J.call(S,A=>A._id))==null?void 0:re.indexOf)==null?void 0:Se.call(re,N);L.driver=S[qe];const Me=(Fe=(ie=(xe=c==null?void 0:c.map)==null?void 0:xe.call(c,A=>A._id))==null?void 0:ie.indexOf)==null?void 0:Fe.call(ie,w);L.from=c[Me];const Ge=(Pe=(le=(ke=c==null?void 0:c.map)==null?void 0:ke.call(c,A=>A._id))==null?void 0:le.indexOf)==null?void 0:Pe.call(le,f);L.to=c[Ge];const Ue=(Ae=(se=(ze=p==null?void 0:p.map)==null?void 0:ze.call(p,A=>A._id))==null?void 0:se.indexOf)==null?void 0:Ae.call(se,i);L.paybleAt=p[Ue],L.branch=(Ie=p==null?void 0:p.find)==null?void 0:Ie.call(p,({_id:A})=>A===L.branch),E(L),ce(L)}}).catch(t=>{x(t.message)})},[m,P,S,c,p]),h.useEffect(()=>{var t,a;if(d!=null&&d.length&&((t=s.lrList)!=null&&t.length)){const v=(a=d==null?void 0:d.map)==null?void 0:a.call(d,N=>{var w,f;return{...N,checked:(N==null?void 0:N.checked)||((f=(w=s.lrList)==null?void 0:w.some)==null?void 0:f.call(w,i=>i._id===N._id))}});Y(v)}},[d,s.lrList]);const T=()=>{E(Z),x(""),I(U)},D=()=>{q?g():b()},z=t=>{const a=t.target.name,v=t.target.value;E(N=>({...N,[a]:v}))},te=(t,a)=>{var v,N;if(t.preventDefault(),!He(s)){const w={...s};w.lrList=(v=W==null?void 0:W.filter)==null?void 0:v.call(W,f=>f.checked),w.driver=(N=w.driver)==null?void 0:N._id,l(Xe(w)).then(({payload:f={}})=>{const{message:i}=(f==null?void 0:f.data)||{};i?x(i):a?f!=null&&f.data._id&&l(Ze({id:f==null?void 0:f.data._id,email:""})).then(({payload:u={}})=>{const{message:V}=(u==null?void 0:u.data)||{};if(V)x(V);else if(u!=null&&u.data.file){const Q=ye(u==null?void 0:u.data.file);if(Q){const J=window.open(Q,"_blank");J.focus(),J.print(),x(""),I(U),E(oe),q?g():b()}}}).catch(u=>{x(u.message)}):(x(""),I(U),E(oe),q?g():b())}).catch(f=>{x(f.message)})}},We=t=>{t.preventDefault(),te(t,!0)},He=t=>{var N;const a={...U};t.branch||(a.branch={invalid:!0,message:"Branch is required"}),t.date||(a.date={invalid:!0,message:"Date is required"}),t.vehicle||(a.vehicle={invalid:!0,message:"Vehicle is required"}),t.driver||(a.driver={invalid:!0,message:"Driver name is required"}),t.from||(a.from={invalid:!0,message:"From is required"}),t.to||(a.to={invalid:!0,message:"To is required"}),(N=t.lrList)!=null&&N.length||(a.lrList={invalid:!0,message:"At least one lorry receipt is required"}),(t.totalFreight<0||!t.totalFreight)&&(a.totalFreight={invalid:!0,message:"Total freight is invalid"}),(t.rent<0||!t.rent)&&(a.rent={invalid:!0,message:"Rent is invalid"}),(t.advance<0||!t.advance)&&(a.advance={invalid:!0,message:"Advance is invalid"});let v=!1;for(const w in a)a[w].invalid===!0&&(v=!0);return v&&I(a),v},Be=(t,a)=>{E(v=>({...v,[t]:new Date(a)}))},Ne=(t,a)=>{E(v=>({...v,[t]:new Date(a).getTime()}))},De=t=>{de(t)},M=(t,a,v)=>{var N,w,f;if(E(i=>({...i,[v]:a})),v==="vehicle")if(a&&a._id){const i=(N=_==null?void 0:_.find)==null?void 0:N.call(_,u=>u._id===a.owner||u.name===a.ownerName);E(u=>({...u,vehicleNo:a==null?void 0:a.vehicleNo,vehicleOwner:i==null?void 0:i.name,vehicleOwnerAddress:`${(i==null?void 0:i.address)||""}, ${(i==null?void 0:i.city)||""}`,vehicleOwnerPhone:i==null?void 0:i.phone}))}else E(i=>({...i,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:""}));if(v==="driver"&&(a&&a._id?E(i=>({...i,driverName:a.name,licenseNo:a.licenseNo,phone:a.telephone})):E(i=>({...i,driverName:"",licenseNo:"",phone:""}))),v==="from")if(a&&a._id){const i=(w=c==null?void 0:c.find)==null?void 0:w.call(c,u=>u._id===a._id);E(u=>({...u,fromName:i.name}))}else E(i=>({...i,fromName:""}));if(v==="to")if(a&&a._id){const i=(f=c==null?void 0:c.find)==null?void 0:f.call(c,u=>u._id===a._id);E(u=>({...u,toName:i.name}))}else E(i=>({...i,toName:""}))};return h.useEffect(()=>{const t=+s.totalFreight+ +s.advance-+s.rent;E(a=>({...a,totalPayable:t}))},[s.totalFreight,s.rent,s.advance]),e.createElement(e.Fragment,null,be&&e.createElement(Ke,null),e.createElement("div",{className:"inner-wrap"},e.createElement("h1",{className:"pageHead"},q?"Edit a local challan":"Edit a challan"),k!==""&&e.createElement(at,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(nt,{id:"alertError",severity:"error"},k)),e.createElement("form",{action:"",onSubmit:te,id:"loadingSlipForm"},e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small",error:(we=n.branch)==null?void 0:we.invalid},e.createElement(G,{disablePortal:!0,size:"small",name:"branch",options:p,value:s.branch||null,onChange:(t,a)=>M(t,a,"branch"),getOptionLabel:t=>t.name,openOnFocus:!0,disabled:H&&H.type&&((pe=(ae=H.type)==null?void 0:ae.toLowerCase)==null?void 0:pe.call(ae))!=="superadmin"&&((Oe=(ne=H.type)==null?void 0:ne.toLowerCase)==null?void 0:Oe.call(ne))!=="admin",renderInput:t=>e.createElement(O,{...t,label:"Branch",name:"branch",error:n.branch.invalid,fullWidth:!0})}),((Ce=n.branch)==null?void 0:Ce.invalid)&&e.createElement(F,null,n.branch.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.date.invalid},e.createElement(he,{dateAdapter:ve},e.createElement(Ye,{error:n.date.invalid,label:"Date",inputFormat:"DD/MM/YYYY",value:s.date||"",onChange:Be.bind(null,"date"),renderInput:t=>e.createElement(O,{name:"date",size:"small",...t,error:n.date.invalid})})),n.date.invalid&&e.createElement(F,null,n.date.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small",error:n.vehicle.invalid},e.createElement(G,{disablePortal:!0,autoSelect:!0,size:"small",name:"vehicle",options:P,value:s.vehicle||null,onChange:(t,a)=>M(t,a,"vehicle"),openOnFocus:!0,renderInput:t=>e.createElement(O,{...t,label:"Vehicle",error:n.vehicle.invalid,fullWidth:!0}),renderOption:(t,a)=>e.createElement("li",{...t,key:a._id},a.label)}),n.vehicle.invalid&&e.createElement(F,null,n.vehicle.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.vehicleOwner.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Vehicle owner",error:n.vehicleOwner.invalid,value:s.vehicleOwner||"",onChange:z,name:"vehicleOwner",id:"vehicleOwner"}),n.vehicleOwner.invalid&&e.createElement(F,null,n.vehicleOwner.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.vehicleOwnerAddress.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Vehicle owner address",error:n.vehicleOwnerAddress.invalid,value:s.vehicleOwnerAddress||"",onChange:z,name:"vehicleOwnerAddress",id:"vehicleOwnerAddress"}),n.vehicleOwnerAddress.invalid&&e.createElement(F,null,n.vehicleOwnerAddress.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.vehicleOwnerPhone.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Vehicle owner phone",error:n.vehicleOwnerPhone.invalid,value:s.vehicleOwnerPhone||"",onChange:z,onInput:Le,name:"vehicleOwnerPhone",id:"vehicleOwnerPhone"}),n.vehicleOwnerPhone.invalid&&e.createElement(F,null,n.vehicleOwnerPhone.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small",error:n.driver.invalid},e.createElement(G,{disablePortal:!0,autoSelect:!0,size:"small",name:"driver",options:S,value:s.driver||null,onChange:(t,a)=>M(t,a,"driver"),openOnFocus:!0,renderInput:t=>e.createElement(O,{...t,label:"Driver",error:n.driver.invalid,fullWidth:!0}),renderOption:(t,a)=>e.createElement("li",{...t,key:a._id},a.label)}),n.driver.invalid&&e.createElement(F,null,n.driver.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.licenseNo.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"License no",value:s.licenseNo,error:n.licenseNo.invalid,onChange:z,name:"licenseNo",id:"licenseNo"}),n.licenseNo.invalid&&e.createElement(F,null,n.licenseNo.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.phone.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Telephone",value:s.phone,error:n.phone.invalid,onChange:z,onInput:Le,name:"phone",id:"phone"}),n.phone.invalid&&e.createElement(F,null,n.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small",error:n.from.invalid},e.createElement(G,{disablePortal:!0,autoSelect:!0,size:"small",name:"from",options:c,value:s.from,onChange:(t,a)=>M(t,a,"from"),openOnFocus:!0,renderInput:t=>e.createElement(O,{...t,label:"From",error:n.from.invalid,fullWidth:!0})}),n.from.invalid&&e.createElement(F,null,n.from.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small",error:n.to.invalid},e.createElement(G,{disablePortal:!0,autoSelect:!0,size:"small",name:"to",options:c,value:s.to,onChange:(t,a)=>M(t,a,"to"),openOnFocus:!0,renderInput:t=>e.createElement(O,{...t,label:"To",error:n.to.invalid,fullWidth:!0})}),n.to.invalid&&e.createElement(F,null,n.to.message)))))),e.createElement("h2",{className:"mb20"},"Freight details"),n.lrList.invalid&&e.createElement("p",{className:"error"},n.lrList.message),e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement(mt,{loadingSlip:s,setLoadingSlip:E,lorryReceipts:B,setLorryReceipts:Y,handleSelectedLr:De,selectedLR:W,setSelectedLR:R,setSearchLr:ue,updatedLR:$,setUpdatedLR:ee}),e.createElement(_e,{sx:{margin:"20px 0"}}),e.createElement("form",{action:"",onSubmit:te,id:"loadingSlipForm"},e.createElement("h3",{className:"mb20"},"Charges"),e.createElement("div",{className:"grid grid-8-col"},e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.totalFreight.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Total freight",value:s.totalFreight||"",error:n.totalFreight.invalid,onChange:z,onInput:ge,name:"totalFreight",id:"totalFreight"}),n.totalFreight.invalid&&e.createElement(F,null,n.totalFreight.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.rent.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Rent",value:s.rent||"",error:n.rent.invalid,onChange:z,onInput:ge,name:"rent",id:"rent"}),n.rent.invalid&&e.createElement(F,null,n.rent.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,error:n.advance.invalid},e.createElement(O,{size:"small",variant:"outlined",label:"Advance",value:s.advance||"",onChange:z,onInput:ge,name:"advance",id:"advance",error:n.advance.invalid}),n.advance.invalid&&e.createElement(F,null,n.advance.message))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0},e.createElement(O,{size:"small",type:"number",variant:"outlined",label:"Total payable",value:s.totalPayable||"",onChange:z,name:"totalPayable",id:"totalPayable",inputProps:{readOnly:!0}})))))),e.createElement(fe,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:te,id:"loadingSlipForm"},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(he,{dateAdapter:ve},e.createElement(Te,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Current time",value:s.currentTime,onChange:Ne.bind(null,"currentTime"),renderInput:t=>e.createElement(O,{name:"currentTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(he,{dateAdapter:ve},e.createElement(Te,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Reach time",value:s.reachTime,onChange:Ne.bind(null,"reachTime"),renderInput:t=>e.createElement(O,{name:"reachTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0,size:"small"},e.createElement(G,{disablePortal:!0,autoSelect:!0,size:"small",name:"paybleAt",options:p,value:s.paybleAt,onChange:(t,a)=>M(t,a,"paybleAt"),openOnFocus:!0,renderInput:t=>e.createElement(O,{...t,label:"Payable at",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(C,{fullWidth:!0},e.createElement(O,{size:"small",variant:"outlined",label:"Remark",value:s.remark,onChange:z,name:"remark",id:"remark"}))))),e.createElement("div",{className:"right"},e.createElement(K,{variant:"outlined",size:"medium",onClick:D},"Back"),e.createElement(K,{variant:"outlined",size:"medium",onClick:T,className:"ml6"},"Reset"),e.createElement(K,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"loadingSlipForm",className:"ml6"},"Save"),e.createElement(K,{variant:"contained",size:"medium",type:"button",color:"primary",form:"loadingSlipForm",className:"ml6",onClick:We},"Save & Print")))))};export{Jt as default};
