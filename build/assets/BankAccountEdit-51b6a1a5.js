import{r as s,a as t}from"./react-69b9bddd.js";import{u as w,a as D}from"./react-redux-13959126.js";import{aJ as ee,aN as te,aP as ne,L as ae,an as ie,aQ as re}from"./index-aeb4570c.js";import"./Card.module-3bdbfb7f.js";import{a as ce,b as oe}from"./react-router-7dadf37a.js";import{O as le,Q as se,a as ue,i as d,A as J,h as p,V as g,l as T}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./use-sync-external-store-20ba4de3.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const C={bank:"",ifsc:"",accountType:"",accountHolder:"",customerId:"",accountNo:"",openingBalance:""},H={bank:{invalid:!1,message:""},ifsc:{invalid:!1,message:""},accountType:{invalid:!1,message:""},accountHolder:{invalid:!1,message:""},customerId:{invalid:!1,message:""},accountNo:{invalid:!1,message:""},openingBalance:{invalid:!1,message:""}},me=["Current account","Saving account","Recurring account","Fixed Deposit / Account"],Ve=()=>{const V=w(ee),{banks:i}=w(({bankaccount:e})=>e),[c,u]=s.useState(C),[o,j]=s.useState(C),[a,S]=s.useState(H),[A,v]=s.useState(""),B=D(),F=ce(),G=oe(),{bankAccountId:I}=G.state,x=s.useCallback(()=>{F("/master/bankAccounts")},[F]);s.useEffect(()=>{var e;u({...o,bank:(e=i==null?void 0:i.find)==null?void 0:e.call(i,({_id:n})=>(o==null?void 0:o.bank)===n),accountType:{label:o.accountType,value:o.accountType}})},[o,i]),s.useEffect(()=>{B(te())},[]),s.useEffect(()=>{I&&B(ne(I)).then(({payload:e={}})=>{const{message:n}=(e==null?void 0:e.data)||{};n?v(n):(u(e==null?void 0:e.data),j(e==null?void 0:e.data))}).catch(e=>{v(e.message)})},[I]);const K=()=>{var e;u({...o,bank:(e=i==null?void 0:i.find)==null?void 0:e.call(i,({_id:n})=>(o==null?void 0:o.bank)===n)}),v(""),S(H)},M=()=>{x()},E=e=>{const n=e.target.name,r=e.target.value;u(l=>({...l,[n]:r}))},U=(e,n)=>{u(r=>({...r,bank:n,ifsc:(n==null?void 0:n.ifsc)||""}))},X=(e,n)=>{u(r=>({...r,accountType:n}))},Y=e=>{var n,r;e.preventDefault(),Z(c)||B(re({...c,bank:(n=c.bank)==null?void 0:n._id,accountType:(r=c.accountType)==null?void 0:r.value})).then(({payload:l={}})=>{const{message:m}=(l==null?void 0:l.data)||{};m?v(m):(v(""),u(C),x())}).catch(l=>{v(l.message)})},Z=e=>{var l,m,z,f,W,b,q,h,y,L,O,N,P,R,Q,k,_;const n={...H};(l=e.bank)!=null&&l._id||(n.bank={invalid:!0,message:"Bank is required"}),(z=(m=e.ifsc)==null?void 0:m.trim)!=null&&z.call(m)||(n.ifsc={invalid:!0,message:"IFSC code is required"}),(W=(f=e.accountHolder)==null?void 0:f.trim)!=null&&W.call(f)||(n.accountHolder={invalid:!0,message:"Account holder name is required"}),e.accountType||(n.accountType={invalid:!0,message:"Account type is required"}),(q=(b=e.customerId)==null?void 0:b.trim)!=null&&q.call(b)||(n.customerId={invalid:!0,message:"Customer ID is required"}),(y=(h=e.accountNo)==null?void 0:h.trim)!=null&&y.call(h)||(n.accountNo={invalid:!0,message:"Account number is required"}),(P=(N=(O=(L=e.openingBalance).toString)==null?void 0:O.call(L))==null?void 0:N.trim)!=null&&P.call(N)||(n.openingBalance={invalid:!0,message:"Opening balance is required"}),((_=(k=(Q=(R=e.openingBalance).toString)==null?void 0:Q.call(R))==null?void 0:k.trim)==null?void 0:_.call(k))!==""&&isNaN(e.openingBalance)&&isNaN(parseFloat(e.openingBalance))&&(n.openingBalance={invalid:!0,message:"Opening balance should be a number"});let r=!1;for(const $ in n)n[$].invalid===!0&&(r=!0);return r&&S(n),r};return t.createElement(t.Fragment,null,V&&t.createElement(ae,null),t.createElement("h1",{className:"pageHead"},"Edit a bank account"),A!==""&&t.createElement(le,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},t.createElement(se,{severity:"error"},A)),t.createElement(ue,{sx:{padding:"20px",marginBottom:"20px"}},t.createElement("form",{action:"",onSubmit:Y},t.createElement("div",{className:"grid grid-6-col"},t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,size:"small",error:a.bank.invalid},t.createElement(J,{disablePortal:!0,autoSelect:!0,size:"small",name:"bank",options:i,value:c.bank,onChange:(e,n)=>U(e,n),openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Bank",error:a.bank.invalid,fullWidth:!0})}),a.bank.invalid&&t.createElement(g,null,a.bank.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,error:a.ifsc.invalid},t.createElement(p,{size:"small",variant:"outlined",label:"IFSC",value:c.ifsc,error:a.ifsc.invalid,onChange:E,name:"ifsc",id:"ifsc",InputProps:{readOnly:!0}}),a.ifsc.invalid&&t.createElement(g,null,a.ifsc.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,size:"small",error:a.accountType.invalid},t.createElement(J,{disablePortal:!0,autoSelect:!0,size:"small",name:"accountType",options:me,value:c.accountType,onChange:(e,n)=>X(e,n),openOnFocus:!0,renderInput:e=>t.createElement(p,{...e,label:"Account type",error:a.accountType.invalid,fullWidth:!0})}),a.accountType.invalid&&t.createElement(g,null,a.accountType.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,error:a.accountHolder.invalid},t.createElement(p,{size:"small",variant:"outlined",label:"Account holder",value:c.accountHolder,error:a.accountHolder.invalid,onChange:E,name:"accountHolder",id:"accountHolder"}),a.accountHolder.invalid&&t.createElement(g,null,a.accountHolder.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,error:a.customerId.invalid},t.createElement(p,{size:"small",variant:"outlined",label:"Customer Id",error:a.customerId.invalid,value:c.customerId,onChange:E,name:"customerId",id:"customerId"}),a.customerId.invalid&&t.createElement(g,null,a.customerId.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,error:a.accountNo.invalid},t.createElement(p,{size:"small",variant:"outlined",label:"Account number",value:c.accountNo,error:a.accountNo.invalid,onChange:E,name:"accountNo",id:"accountNo"}),a.accountNo.invalid&&t.createElement(g,null,a.accountNo.message))),t.createElement("div",{className:"grid-item"},t.createElement(d,{fullWidth:!0,error:a.openingBalance.invalid},t.createElement(p,{size:"small",variant:"outlined",label:"Opening balance",value:c.openingBalance||"",error:a.openingBalance.invalid,onChange:E,onInput:ie,name:"openingBalance",id:"openingBalance"}),a.openingBalance.invalid&&t.createElement(g,null,a.openingBalance.message)))),t.createElement("div",{className:"right"},t.createElement(T,{variant:"outlined",size:"medium",onClick:M},"Back"),t.createElement(T,{variant:"outlined",size:"medium",onClick:K,className:"ml6"},"Reset"),t.createElement(T,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6"},"Save")))))};export{Ve as default};