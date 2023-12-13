import{r as o,a as r}from"./react-69b9bddd.js";import"./Card.module-3bdbfb7f.js";import{s as D,c as ee,e as re,L as se,r as te}from"./index-aeb4570c.js";import{a as ae,u as ie}from"./react-redux-13959126.js";import{a as ne}from"./react-router-7dadf37a.js";import{O as le,Q as me,a as oe,i as d,A as N,h as u,V as p,l as L}from"./material-04052d9a.js";import"./@babel-5e587562.js";import"./react-dom-69e96a05.js";import"./scheduler-765c72db.js";import"./redux-persist-a379f351.js";import"./redux-fa075741.js";import"./@reduxjs-2459f64e.js";import"./immer-41fd5235.js";import"./redux-thunk-ef899f4c.js";import"./axios-21b846bc.js";import"./hoist-non-react-statics-1d21e5a8.js";import"./react-router-dom-38324838.js";import"./@remix-run-8989dd9f.js";import"./icons-material-40f8e5d8.js";import"./react-icons-6bc9af43.js";import"./use-sync-external-store-20ba4de3.js";import"./system-49be6911.js";import"./styled-engine-f8044af8.js";import"./@emotion-17579717.js";import"./stylis-79144faa.js";import"./utils-49fe0532.js";import"./private-theming-ec89146b.js";import"./react-transition-group-deabed87.js";import"./dom-helpers-9a525042.js";import"./base-e8cfb5a9.js";import"./@popperjs-f3391c26.js";const S={branch:"",type:"",employee:"",username:"",password:"",confirmPassword:""},z={branch:{invalid:!1,message:""},type:{invalid:!1,message:""},employee:{invalid:!1,message:""},username:{invalid:!1,message:""},password:{invalid:!1,message:""},confirmPassword:{invalid:!1,message:""}},_e=()=>{const y=ae(),V=ie(D),[j,G]=o.useState([]),[J,K]=o.useState([]),[a,g]=o.useState(S),[t,U]=o.useState(z),[B,l]=o.useState(""),F=ne(),W=o.useCallback(()=>{F("/users/usersList")},[F]);o.useEffect(()=>{y(ee()).then(({payload:e={}})=>{const{message:s}=(e==null?void 0:e.data)||{};s?l(s):G(e==null?void 0:e.data)}).catch(e=>{l(e.message)}),y(re()).then(({payload:e={}})=>{const{message:s}=(e==null?void 0:e.data)||{};s?l(s):K(e==null?void 0:e.data)}).catch(e=>{l(e.message)})},[]);const C=e=>{const s=e.target.name,i=e.target.value;g(n=>({...n,[s]:i}))},x=(e,s)=>{g(i=>({...i,[s]:e}))},M=e=>{var n,c,m,H,v,O,R,h,q,f,k,E,A,w,I,T,b,_,P,Q;const s={...z};e.branch||(s.branch={invalid:!0,message:"Branch is required"}),e.type||(s.type={invalid:!0,message:"User type is required"}),e.employee||(s.employee={invalid:!0,message:"Employee is required"}),(c=(n=e.username)==null?void 0:n.trim)!=null&&c.call(n)||(s.username={invalid:!0,message:"Username is required"}),(H=(m=e.password)==null?void 0:m.trim)!=null&&H.call(m)?((R=(O=(v=e.password)==null?void 0:v.trim)==null?void 0:O.call(v))==null?void 0:R.length)<5?s.password={invalid:!0,message:"Password length should be 5 or more characters"}:((q=(h=e.password)==null?void 0:h.trim)==null?void 0:q.call(h))!==((k=(f=e.confirmPassword)==null?void 0:f.trim)==null?void 0:k.call(f))&&(s.password={invalid:!0,message:"Password and Confirm password does not match"}):s.password={invalid:!0,message:"Password is required"},(A=(E=e.confirmPassword)==null?void 0:E.trim)!=null&&A.call(E)?((T=(I=(w=e.password)==null?void 0:w.trim)==null?void 0:I.call(w))==null?void 0:T.length)<5?s.confirmPassword={invalid:!0,message:"Confirm password length should be 5 or more characters"}:((_=(b=e.password)==null?void 0:b.trim)==null?void 0:_.call(b))!==((Q=(P=e.confirmPassword)==null?void 0:P.trim)==null?void 0:Q.call(P))&&(s.confirmPassword={invalid:!0,message:"Password and Confirm password does not match"}):s.confirmPassword={invalid:!0,message:"Confirm password is required"};let i=!1;for(const $ in s)s[$].invalid===!0&&(i=!0);return i&&U(s),i},X=e=>{var s,i,n;e.preventDefault(),M(a)||y(te({...a,place:(s=a.branch)==null?void 0:s._id,employee:(i=a.employee)==null?void 0:i._id,userBranches:[(n=a.branch)==null?void 0:n._id]})).then(({payload:c={}})=>{const{message:m}=(c==null?void 0:c.data)||{};m?l(m):(l(""),g(S),W())}).catch(()=>{l("Something went wrong! Please try later or contact Administrator.")})},Y=()=>{g(S),U(z),l("")},Z=()=>{W()};return r.createElement(r.Fragment,null,V&&r.createElement(se,null),r.createElement("h1",{className:"pageHead"},"User Registration"),B!==""&&r.createElement(le,{sx:{width:"100%",margin:"0 0 30px 0",border:"1px solid red",borderRadius:"4px"},spacing:2},r.createElement(me,{severity:"error"},B)),r.createElement("div",{className:"inner-wrap"},r.createElement(oe,{sx:{padding:"20px",marginBottom:"20px"}},r.createElement("form",{action:"",onSubmit:X},r.createElement("div",{className:"grid grid-6-col"},r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,size:"small",error:t.branch.invalid},r.createElement(N,{disablePortal:!0,size:"small",name:"branch",options:j,value:a.branch||null,onChange:(e,s)=>x(s,"branch"),getOptionLabel:e=>e.name||"",openOnFocus:!0,renderInput:e=>r.createElement(u,{...e,label:"Branch",error:t.branch.invalid,fullWidth:!0})}),t.branch.invalid&&r.createElement(p,null,t.branch.message))),r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,size:"small",error:t.type.invalid},r.createElement(N,{disablePortal:!0,size:"small",name:"type",options:["Admin","User"],value:a.type||null,onChange:(e,s)=>x(s,"type"),getOptionLabel:e=>e||"",openOnFocus:!0,renderInput:e=>r.createElement(u,{...e,label:"User Type",error:t.type.invalid,fullWidth:!0})}),t.type.invalid&&r.createElement(p,null,t.type.message))),r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,size:"small",error:t.employee.invalid},r.createElement(N,{disablePortal:!0,size:"small",name:"employee",options:J,value:a.employee||null,onChange:(e,s)=>x(s,"employee"),getOptionLabel:e=>e.name||"",openOnFocus:!0,renderInput:e=>r.createElement(u,{...e,label:"Employee",error:t.employee.invalid,fullWidth:!0})}),t.employee.invalid&&r.createElement(p,null,t.employee.message))),r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,error:t.username.invalid},r.createElement(u,{size:"small",variant:"outlined",label:"Username",error:t.username.invalid,value:a.username,onChange:C,name:"username",id:"username",inputProps:{maxLength:50}}),t.username.invalid&&r.createElement(p,null,t.username.message))),r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,error:t.password.invalid},r.createElement(u,{size:"small",variant:"outlined",label:"Password",error:t.password.invalid,type:"password",value:a.password,onChange:C,name:"password",id:"password",inputProps:{maxLength:20}}),t.password.invalid&&r.createElement(p,null,t.password.message))),r.createElement("div",{className:"grid-item"},r.createElement(d,{fullWidth:!0,error:t.confirmPassword.invalid},r.createElement(u,{size:"small",variant:"outlined",label:"Confirm Password",error:t.confirmPassword.invalid,type:"password",value:a.confirmPassword,onChange:C,name:"confirmPassword",id:"confirmPassword",inputProps:{maxLength:20}}),t.confirmPassword.invalid&&r.createElement(p,null,t.confirmPassword.message)))),r.createElement("div",{className:"right"},r.createElement(L,{variant:"outlined",size:"medium",onClick:Y,className:"btn-style"},"Reset"),r.createElement(L,{variant:"outlined",size:"medium",onClick:Z,className:"ml6 btn-style"},"Cancel"),r.createElement(L,{variant:"contained",size:"medium",type:"submit",color:"primary",className:"ml6 btn-style"},"Save"))))))};export{_e as default};
