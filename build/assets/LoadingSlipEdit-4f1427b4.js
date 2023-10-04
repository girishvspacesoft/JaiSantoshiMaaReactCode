import{r as g,a as e}from"./react-bfabd40c.js";import{L as pe,A as be,D as Ue,T as Te}from"./x-date-pickers-7b1cc7dd.js";import"./Card.module-3bdbfb7f.js";import{bi as Ge,b5 as Ye,bv as $e,bw as je,L as De,O as Ae,al as Ne,bx as Qe,bp as Je,b3 as Ke,$ as Xe}from"./index-2b581a02.js";import{F as Ze,g as ye,v as ve,h as b,a0 as Re,l as ee,D as _e,O as et,Q as tt,a as we,i as O,A as K,V as z}from"./material-e0a59a28.js";import{D as nt}from"./x-data-grid-cceece3f.js";import{u as Se,a as it}from"./react-redux-45d870ba.js";import{a as rt,b as at}from"./react-router-622b2d59.js";import"./@babel-e11bafe1.js";import"./@date-io-f382d426.js";import"./dayjs-7f45ce31.js";import"./utils-c03c978f.js";import"./clsx-1229b3e0.js";import"./base-ff50cfe3.js";import"./@popperjs-f3391c26.js";import"./react-dom-b0178e93.js";import"./scheduler-765c72db.js";import"./rifm-7b0f12ad.js";import"./system-a1d29c52.js";import"./styled-engine-f3bd09bf.js";import"./@emotion-77835cc8.js";import"./hoist-non-react-statics-6cfbf744.js";import"./stylis-79144faa.js";import"./private-theming-970ac73c.js";import"./react-transition-group-7ded6f4d.js";import"./dom-helpers-9a525042.js";import"./redux-persist-d9cc1560.js";import"./redux-b7ba668d.js";import"./@reduxjs-4d37e7cf.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-4a70c6fc.js";import"./react-router-dom-60901e53.js";import"./@remix-run-d753ad9e.js";import"./icons-material-4539f19e.js";import"./react-icons-55b3b9a0.js";import"./use-sync-external-store-18921cc2.js";import"./prop-types-d7fd566a.js";import"./reselect-36a88051.js";const lt=({loadingSlip:Oe,setLoadingSlip:$,customers:w,lorryReceipts:f,setLorryReceipts:j,handleSelectedLr:d,selectedLR:p,setSelectedLR:te})=>{var _,le;const I=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"consignorName",headerName:"Consignor",flex:1},{field:"from",headerName:"From",flex:1},{field:"consigneeName",headerName:"Consignee",flex:1},{field:"to",headerName:"To",flex:1},{field:"weight",headerName:"Weight",flex:1},{field:"total",headerName:"To pay",flex:1,type:"number",renderCell:s=>{var o,m;return e.createElement("strong",null,"₹ ",(m=(o=Number(s.row.total))==null?void 0:o.toFixed)==null?void 0:m.call(o,2))}}],[ne,l]=g.useState(!0),[r,D]=g.useState([]),[fe,i]=g.useState(""),[L,V]=g.useState(0);g.useEffect(()=>{var s;if(f!=null&&f.length){const o=[...f];(s=o==null?void 0:o.forEach)==null||s.call(o,m=>{var k,W;let S=0;(W=(k=m.transactions)==null?void 0:k.forEach)==null||W.call(k,U=>{S+=+U.weight}),m.weight=S,m.show=!0}),D(o)}},[f,w]),g.useEffect(()=>{var s;if(r!=null&&r.length&&ne){let o=0;te((s=r==null?void 0:r.filter)==null?void 0:s.call(r,m=>(m.checked&&(o+=m.total),m.checked))),V(o),l(!1)}},[r,ne]),g.useEffect(()=>{d(p)},[p,d]);const P=(s,o)=>{const m=[...r];m[o]={...m[o],checked:s.target.checked},D([...m])},Ee=s=>{var m;s.preventDefault();let o=0;te((m=r==null?void 0:r.filter)==null?void 0:m.call(r,S=>(S.checked&&(o+=S.total),S.checked))),V(o)},ie=s=>{var m,S,k,W;const o=s.target.value?(W=(k=(S=(m=s.target.value)==null?void 0:m.trim)==null?void 0:S.call(m))==null?void 0:k.toLowerCase)==null?void 0:W.call(k):s.target.value;i(o),D(o?U=>{var F;const x=U;return(F=x==null?void 0:x.forEach)==null||F.call(x,H=>{var Q,se,oe,Z;H.show=(Z=(se=(Q=H.lrNo)==null?void 0:Q.toLowerCase)==null?void 0:(oe=se.call(Q)).includes)==null?void 0:Z.call(oe,o)}),x}:U=>{var F;const x=U;return(F=x==null?void 0:x.forEach)==null||F.call(x,H=>{H.show=!0}),x})};let re=0,M=0;const ae=(r==null?void 0:r.length)>0&&((_=r==null?void 0:r.map)==null?void 0:_.call(r,(s,o)=>(s.show&&(re+=1),s.checked&&s.show&&(M+=1),s.show?e.createElement(Ze,{className:"groupCheckbox",key:s.lrNo,control:e.createElement(ye,{name:s._id,size:"small",checked:s.checked,onChange:m=>P(m,o)}),label:e.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",lineHeight:"1em"}},s.lrNo)}):null)));return e.createElement(e.Fragment,null,e.createElement(ve,{container:!0,spacing:2},e.createElement(ve,{item:!0,xs:2},e.createElement("h2",{className:"mb20 text-inline"},"Lorry receipts")),e.createElement(ve,{item:!0,xs:2},e.createElement(b,{size:"small",variant:"outlined",label:"Filter LR",value:fe,onChange:ie,name:"search",id:"search"})),e.createElement(ve,{item:!0,xs:2},e.createElement("h4",{className:" text-inline",style:{paddingTop:"5px"}},re," Out of ",M," selected"))),e.createElement("form",{action:"",onSubmit:Ee,id:"lrSelectionForm"},e.createElement(Re,{className:"checkboxGroup"},ae)),e.createElement("div",{className:"right"},e.createElement(ee,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"lrSelectionForm",className:"ml6"},"Update")),e.createElement(_e,{sx:{margin:"20px 0"}}),e.createElement("div",{style:{width:"100%"}},e.createElement(nt,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:s=>s._id,rows:p,columns:I,initialState:{...I,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}),e.createElement("div",{style:{textAlign:"end",paddingTop:"10px",paddingRight:"10px"}},e.createElement("p",null,"Total To Pay: ",e.createElement("strong",null," ₹ ",(le=L==null?void 0:L.toFixed)==null?void 0:le.call(L,2))))))},ge={branch:"",date:new Date,vehicle:null,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:"",driver:null,driverName:"",licenseNo:"",phone:"",from:null,fromName:"",to:null,toName:"",lrList:[],totalFreight:"",rent:"",advance:"",totalPayable:"",totalWeight:"",currentTime:null,reachTime:null,paybleAt:null,remark:""},X={branch:{invalid:!1,message:""},date:{invalid:!1,message:""},vehicle:{invalid:!1,message:""},vehicleOwner:{invalid:!1,message:""},vehicleOwnerAddress:{invalid:!1,message:""},vehicleOwnerPhone:{invalid:!1,message:""},driver:{invalid:!1,message:""},licenseNo:{invalid:!1,message:""},phone:{invalid:!1,message:""},from:{invalid:!1,message:""},to:{invalid:!1,message:""},lrList:{invalid:!1,message:""},totalFreight:{invalid:!1,message:""},rent:{invalid:!1,message:""},advance:{invalid:!1,message:""}},Dt=()=>{var xe,me,Fe,ce,Ce,Pe;const Oe=Se(Ge),$=Se(t=>t.user),{branches:w,vehicles:f,suppliers:j,places:d,drivers:p,customers:te}=Se(({loadingslip:t})=>t)||{},[I,ne]=g.useState([]),[l,r]=g.useState({...ge}),[D,fe]=g.useState({...ge}),[i,L]=g.useState(X),[V,P]=g.useState(""),[Ee,ie]=g.useState([]),[,re]=g.useState([]),[M,ae]=g.useState(!1),[_,le]=g.useState([]),s=it(),o=rt(),m=at(),{lsId:S}=m.state,k=g.useCallback(()=>{o("/transactions/loadingSlips")},[o]),W=g.useCallback(()=>{o("/transactions/localMemoList")},[o]);g.useEffect(()=>{var t;m.pathname&&((t=m.pathname)!=null&&t.endsWith("editLocalMemoLS")?ae(!0):ae(!1))},[m.pathname]),g.useEffect(()=>{if(S){const t=Ye()?"":$.userBranches||[];s($e(t)).then(({payload:n={}})=>{var E,c,N;const{message:v}=(n==null?void 0:n.data)||{};if(v)P(v);else{const u=(c=(E=n==null?void 0:n.data)==null?void 0:E.map)==null?void 0:c.call(E,a=>({...a,checked:!1})),C=(N=u==null?void 0:u.filter)==null?void 0:N.call(u,a=>!a.associatedLS||a.associatedLS===S);ne(C)}}).catch(()=>{P("Something went wrong! Please try later or contact Administrator.")})}},[S]),g.useEffect(()=>{const t=Object.keys(i);if(t!=null&&t.length){const n=document.querySelector(`input[name=${t[0]}]`);n==null||n.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[i]),g.useEffect(()=>{if(V){const t=document.getElementById("alertError");t==null||t.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}},[V]),g.useEffect(()=>{S&&(f!=null&&f.length)&&(p!=null&&p.length)&&s(je(S)).then(({payload:t={}})=>{var C,a,h,T,q,y,G,Y,R,de,ue,ke,ze,he,Ie,Le;const{message:n,vehicleNo:v,licenseNo:E,from:c,to:N,paybleAt:u}=(t==null?void 0:t.data)||{};if(n)P(n);else{P(""),L(X);let B={...(t==null?void 0:t.data)||{}};const He=(h=(a=(C=f==null?void 0:f.map)==null?void 0:C.call(f,A=>A.vehicleNo))==null?void 0:a.indexOf)==null?void 0:h.call(a,v);B.vehicle=f[He];const qe=(y=(q=(T=p==null?void 0:p.map)==null?void 0:T.call(p,A=>A.licenseNo))==null?void 0:q.indexOf)==null?void 0:y.call(q,E);B.driver=p[qe];const Be=(R=(Y=(G=d==null?void 0:d.map)==null?void 0:G.call(d,A=>A._id))==null?void 0:Y.indexOf)==null?void 0:R.call(Y,c);B.from=d[Be];const Ve=(ke=(ue=(de=d==null?void 0:d.map)==null?void 0:de.call(d,A=>A._id))==null?void 0:ue.indexOf)==null?void 0:ke.call(ue,N);B.to=d[Ve];const Me=(Ie=(he=(ze=w==null?void 0:w.map)==null?void 0:ze.call(w,A=>A._id))==null?void 0:he.indexOf)==null?void 0:Ie.call(he,u);B.paybleAt=w[Me],B.branch=(Le=w==null?void 0:w.find)==null?void 0:Le.call(w,({_id:A})=>A===B.branch),r(B),fe(B)}}).catch(t=>{P(t.message)})},[S,f,p,d,w]),g.useEffect(()=>{var t,n;if(I!=null&&I.length&&((t=l.lrList)!=null&&t.length)){const v=(n=I==null?void 0:I.map)==null?void 0:n.call(I,E=>{var c,N;return{...E,checked:(N=(c=l.lrList)==null?void 0:c.some)==null?void 0:N.call(c,u=>u._id===E._id)}});ie(v)}},[I,l.lrList]);const U=()=>{r(D),P(""),L(X)},x=()=>{M?W():k()},F=t=>{const n=t.target.name,v=t.target.value;r(E=>({...E,[n]:v}))},H=(t,n)=>{var v;if(t.preventDefault(),!se(l)){const E={...l};E.lrList=(v=_==null?void 0:_.filter)==null?void 0:v.call(_,c=>c.checked),s(Qe(E)).then(({payload:c={}})=>{const{message:N}=(c==null?void 0:c.data)||{};N?P(N):n?c!=null&&c.data._id&&s(Je({id:c==null?void 0:c.data._id,email:""})).then(({payload:u={}})=>{const{message:C}=(u==null?void 0:u.data)||{};if(C)P(C);else if(u!=null&&u.data.file){const a=Ke(u==null?void 0:u.data.file);if(a){const h=window.open(a,"_blank");h.focus(),h.print(),P(""),L(X),r(ge),M?W():k()}}}).catch(u=>{P(u.message)}):(P(""),L(X),r(ge),M?W():k())}).catch(c=>{P(c.message)})}},Q=t=>{t.preventDefault(),H(t,!0)},se=t=>{var E,c,N,u,C,a,h,T,q,y,G,Y,R;const n={...X};t.branch||(n.branch={invalid:!0,message:"Branch is required"}),t.date||(n.date={invalid:!0,message:"Date is required"}),t.vehicle||(n.vehicle={invalid:!0,message:"Vehicle is required"}),(c=(E=t.vehicleOwner)==null?void 0:E.trim)!=null&&c.call(E)||(n.vehicleOwner={invalid:!0,message:"Vehicle owner is required"}),(u=(N=t.vehicleOwnerAddress)==null?void 0:N.trim)!=null&&u.call(N)||(n.vehicleOwnerAddress={invalid:!0,message:"Vehicle owner address is required"}),(a=(C=t.vehicleOwnerPhone)==null?void 0:C.trim)!=null&&a.call(C)||(n.vehicleOwnerPhone={invalid:!0,message:"Owner phone no is required"}),t.driver||(n.driver={invalid:!0,message:"Driver name is required"}),(T=(h=t.licenseNo)==null?void 0:h.trim)!=null&&T.call(h)||(n.licenseNo={invalid:!0,message:"License no is required"}),(y=(q=t.phone)==null?void 0:q.trim)!=null&&y.call(q)||(n.phone={invalid:!0,message:"Driver's phone no is required"}),t.phone&&((Y=(G=t.phone)==null?void 0:G.trim)!=null&&Y.call(G))&&!Xe.test(t.phone)&&(n.phone={invalid:!0,message:"Phone no should be 10 digits number"}),t.from||(n.from={invalid:!0,message:"From is required"}),t.to||(n.to={invalid:!0,message:"To is required"}),(R=t.lrList)!=null&&R.length||(n.lrList={invalid:!0,message:"At least one lorry receipt is required"}),(t.totalFreight<0||!t.totalFreight)&&(n.totalFreight={invalid:!0,message:"Total freight is invalid"}),(t.rent<0||!t.rent)&&(n.rent={invalid:!0,message:"Rent is invalid"}),(t.advance<0||!t.advance)&&(n.advance={invalid:!0,message:"Advance is invalid"});let v=!1;for(const de in n)n[de].invalid===!0&&(v=!0);return v&&L(n),v},oe=(t,n)=>{r(v=>({...v,[t]:new Date(n)}))},Z=(t,n)=>{r(v=>({...v,[t]:new Date(n).getTime()}))},We=t=>{re(t)},J=(t,n,v)=>{var E,c,N,u,C;if(r(a=>({...a,[v]:n})),v==="vehicle")if(n&&n._id){const a=(E=f==null?void 0:f.find)==null?void 0:E.call(f,T=>T._id===n._id),h=(c=j==null?void 0:j.find)==null?void 0:c.call(j,T=>T._id===a.owner);r(T=>({...T,vehicleNo:a.vehicleNo,vehicleOwner:h.name,vehicleOwnerAddress:`${h.address}, ${h.city}`,vehicleOwnerPhone:h.phone}))}else r(a=>({...a,vehicleNo:"",vehicleOwner:"",vehicleOwnerAddress:"",vehicleOwnerPhone:""}));if(v==="driver")if(n&&n._id){const a=(N=p==null?void 0:p.find)==null?void 0:N.call(p,h=>h._id===n._id);r(h=>({...h,driverName:a.name,licenseNo:a.licenseNo,phone:a.telephone}))}else r(a=>({...a,driverName:"",licenseNo:"",phone:""}));if(v==="from")if(n&&n._id){const a=(u=d==null?void 0:d.find)==null?void 0:u.call(d,h=>h._id===n._id);r(h=>({...h,fromName:a.name}))}else r(a=>({...a,fromName:""}));if(v==="to")if(n&&n._id){const a=(C=d==null?void 0:d.find)==null?void 0:C.call(d,h=>h._id===n._id);r(h=>({...h,toName:a.name}))}else r(a=>({...a,toName:""}))};return g.useEffect(()=>{const t=+l.totalFreight+ +l.advance-+l.rent;r(n=>({...n,totalPayable:t}))},[l.totalFreight,l.rent,l.advance]),e.createElement(e.Fragment,null,Oe&&e.createElement(De,null),e.createElement("div",{className:"inner-wrap"},e.createElement("h1",{className:"pageHead"},M?"Edit a local challan":"Edit a challan"),V!==""&&e.createElement(et,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},e.createElement(tt,{id:"alertError",severity:"error"},V)),e.createElement("form",{action:"",onSubmit:H,id:"loadingSlipForm"},e.createElement(we,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small",error:(xe=i.branch)==null?void 0:xe.invalid},e.createElement(K,{disablePortal:!0,size:"small",name:"branch",options:w,value:l.branch||null,onChange:(t,n)=>J(t,n,"branch"),getOptionLabel:t=>t.name,openOnFocus:!0,disabled:$&&$.type&&((Fe=(me=$.type)==null?void 0:me.toLowerCase)==null?void 0:Fe.call(me))!=="superadmin"&&((Ce=(ce=$.type)==null?void 0:ce.toLowerCase)==null?void 0:Ce.call(ce))!=="admin",renderInput:t=>e.createElement(b,{...t,label:"Branch",name:"branch",error:i.branch.invalid,fullWidth:!0})}),((Pe=i.branch)==null?void 0:Pe.invalid)&&e.createElement(z,null,i.branch.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.date.invalid},e.createElement(pe,{dateAdapter:be},e.createElement(Ue,{error:i.date.invalid,label:"Date",inputFormat:"DD/MM/YYYY",value:l.date,onChange:oe.bind(null,"date"),renderInput:t=>e.createElement(b,{name:"date",size:"small",...t,error:i.date.invalid})})),i.date.invalid&&e.createElement(z,null,i.date.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small",error:i.vehicle.invalid},e.createElement(K,{disablePortal:!0,autoSelect:!0,size:"small",name:"vehicle",options:f,value:l.vehicle,onChange:(t,n)=>J(t,n,"vehicle"),openOnFocus:!0,renderInput:t=>e.createElement(b,{...t,label:"Vehicle",error:i.vehicle.invalid,fullWidth:!0})}),i.vehicle.invalid&&e.createElement(z,null,i.vehicle.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.vehicleOwner.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Vehicle owner",error:i.vehicleOwner.invalid,value:l.vehicleOwner,onChange:F,name:"vehicleOwner",id:"vehicleOwner",inputProps:{readOnly:!0}}),i.vehicleOwner.invalid&&e.createElement(z,null,i.vehicleOwner.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.vehicleOwnerPhone.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Vehicle owner phone",error:i.vehicleOwnerPhone.invalid,value:l.vehicleOwnerPhone,onChange:F,onInput:Ae,name:"vehicleOwnerPhone",id:"vehicleOwnerPhone"}),i.vehicleOwnerPhone.invalid&&e.createElement(z,null,i.vehicleOwnerPhone.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small",error:i.driver.invalid},e.createElement(K,{disablePortal:!0,autoSelect:!0,size:"small",name:"driver",options:p,value:l.driver,onChange:(t,n)=>J(t,n,"driver"),openOnFocus:!0,renderInput:t=>e.createElement(b,{...t,label:"Driver",error:i.driver.invalid,fullWidth:!0})}),i.driver.invalid&&e.createElement(z,null,i.driver.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.licenseNo.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"License no",value:l.licenseNo,error:i.licenseNo.invalid,onChange:F,name:"licenseNo",id:"licenseNo",inputProps:{readOnly:!0}}),i.licenseNo.invalid&&e.createElement(z,null,i.licenseNo.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.phone.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Telephone",value:l.phone,error:i.phone.invalid,onChange:F,onInput:Ae,name:"phone",id:"phone",inputProps:{readOnly:!0}}),i.phone.invalid&&e.createElement(z,null,i.phone.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small",error:i.from.invalid},e.createElement(K,{disablePortal:!0,autoSelect:!0,size:"small",name:"from",options:d,value:l.from,onChange:(t,n)=>J(t,n,"from"),openOnFocus:!0,renderInput:t=>e.createElement(b,{...t,label:"From",error:i.from.invalid,fullWidth:!0})}),i.from.invalid&&e.createElement(z,null,i.from.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small",error:i.to.invalid},e.createElement(K,{disablePortal:!0,autoSelect:!0,size:"small",name:"to",options:d,value:l.to,onChange:(t,n)=>J(t,n,"to"),openOnFocus:!0,renderInput:t=>e.createElement(b,{...t,label:"To",error:i.to.invalid,fullWidth:!0})}),i.to.invalid&&e.createElement(z,null,i.to.message)))))),e.createElement("h2",{className:"mb20"},"Freight details"),i.lrList.invalid&&e.createElement("p",{className:"error"},i.lrList.message),e.createElement(we,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement(lt,{loadingSlip:l,setLoadingSlip:r,customers:te,lorryReceipts:Ee,setLorryReceipts:ie,handleSelectedLr:We,selectedLR:_,setSelectedLR:le}),e.createElement(_e,{sx:{margin:"20px 0"}}),e.createElement("form",{action:"",onSubmit:H,id:"loadingSlipForm"},e.createElement("h3",{className:"mb20"},"Charges"),e.createElement("div",{className:"grid grid-8-col"},e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.totalFreight.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Total freight",value:l.totalFreight||"",error:i.totalFreight.invalid,onChange:F,onInput:Ne,name:"totalFreight",id:"totalFreight"}),i.totalFreight.invalid&&e.createElement(z,null,i.totalFreight.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.rent.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Rent",value:l.rent||"",error:i.rent.invalid,onChange:F,onInput:Ne,name:"rent",id:"rent"}),i.rent.invalid&&e.createElement(z,null,i.rent.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,error:i.advance.invalid},e.createElement(b,{size:"small",variant:"outlined",label:"Advance",value:l.advance||"",onChange:F,onInput:Ne,name:"advance",id:"advance",error:i.advance.invalid}),i.advance.invalid&&e.createElement(z,null,i.advance.message))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0},e.createElement(b,{size:"small",type:"number",variant:"outlined",label:"Total payable",value:l.totalPayable||"",onChange:F,name:"totalPayable",id:"totalPayable",inputProps:{readOnly:!0}})))))),e.createElement(we,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement("form",{action:"",onSubmit:H,id:"loadingSlipForm"},e.createElement("div",{className:"grid grid-6-col"},e.createElement("div",{className:"grid-item"},e.createElement(pe,{dateAdapter:be},e.createElement(Te,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Current time",value:l.currentTime,onChange:Z.bind(null,"currentTime"),renderInput:t=>e.createElement(b,{name:"currentTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(pe,{dateAdapter:be},e.createElement(Te,{ampmInClock:!0,inputFormat:"hh:mm a",label:"Reach time",value:l.reachTime,onChange:Z.bind(null,"reachTime"),renderInput:t=>e.createElement(b,{name:"reachTime",size:"small",...t})}))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0,size:"small"},e.createElement(K,{disablePortal:!0,autoSelect:!0,size:"small",name:"paybleAt",options:w,value:l.paybleAt,onChange:(t,n)=>J(t,n,"paybleAt"),openOnFocus:!0,renderInput:t=>e.createElement(b,{...t,label:"Payable at",fullWidth:!0})}))),e.createElement("div",{className:"grid-item"},e.createElement(O,{fullWidth:!0},e.createElement(b,{size:"small",variant:"outlined",label:"Remark",value:l.remark,onChange:F,name:"remark",id:"remark"}))))),e.createElement("div",{className:"right"},e.createElement(ee,{variant:"outlined",size:"medium",onClick:x},"Back"),e.createElement(ee,{variant:"outlined",size:"medium",onClick:U,className:"ml6"},"Reset"),e.createElement(ee,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"loadingSlipForm",className:"ml6"},"Save"),e.createElement(ee,{variant:"contained",size:"medium",type:"button",color:"primary",form:"loadingSlipForm",className:"ml6",onClick:Q},"Save & Print")))))};export{Dt as default};