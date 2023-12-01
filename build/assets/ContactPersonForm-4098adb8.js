import{r as h,a as e}from"./react-69b9bddd.js";import{g as $,e as A,f as B}from"./icons-material-40f8e5d8.js";import{X as W,Y as H,w as f,Z as I,f as k,a as R,i as u,h as E,V as b,l as T}from"./material-04052d9a.js";import{P as q,a0 as w,S as L}from"./index-1d9d8716.js";const M="_accordion_content_1sack_1",U="_label_1sack_5",V="_content_1sack_12",r={accordion_content:M,label:U,content:V},D=({contactPersons:i,handleTriggerEdit:c,handleTriggerDelete:n})=>{var l;const[p,m]=h.useState("panel0"),d=a=>(t,s)=>{m(s?a:!1)},o=a=>{c(a)},N=a=>{n(a)};return i&&(i==null?void 0:i.length)>0?(l=i==null?void 0:i.map)==null?void 0:l.call(i,(a,t)=>e.createElement(W,{key:`panel${t}`,expanded:p===`panel${t}`,onChange:d(`panel${t}`)},e.createElement(H,{expandIcon:e.createElement($,null),"aria-controls":`panel${t}-content`,id:`panel${t}-header`},e.createElement(f,{sx:{width:"33%",flexShrink:0,color:"text.secondary"}},"Contact person ",t+1),e.createElement(f,null,a.name)),e.createElement(I,null,e.createElement("div",{className:r.accordion_content},e.createElement("p",{className:r.label},"Address:"),e.createElement("p",{className:r.content},a.address)),e.createElement("div",{className:r.accordion_content},e.createElement("p",{className:r.label},"Designation:"),e.createElement("p",{className:r.content},a.designation)),e.createElement("div",{className:r.accordion_content},e.createElement("p",{className:r.label},"Email:"),e.createElement("p",{className:r.content},a.email)),e.createElement("div",{className:r.accordion_content},e.createElement("p",{className:r.label},"Phone:"),e.createElement("p",{className:r.content},a.phone)),e.createElement("div",{className:"right"},e.createElement(k,{size:"small",onClick:o.bind(null,t),color:"primary"},e.createElement(A,null)),"  ",e.createElement(k,{size:"small",onClick:N.bind(null,t),color:"error"},e.createElement(B,null)))))):e.createElement(f,{variant:"h7",gutterBottom:!0},"No contact person added")},_={name:{invalid:!1,message:""},phone:{invalid:!1,message:""},email:{invalid:!1,message:""}},z={name:"",address:"",designation:"",email:"",phone:""},G=({onContactPersonAdd:i,editContact:c})=>{const[n,p]=h.useState(_),[m,d]=h.useState(z);h.useEffect(()=>{c&&d(c)},[c]);const o=l=>{const a=l.target.name,t=l.target.value;d(s=>({...s,[a]:t}))},N=l=>{var s,x,g,y,v,S;const a={..._};(x=(s=l.name)==null?void 0:s.trim)!=null&&x.call(s)||(a.name={invalid:!0,message:"Name is required"}),(y=(g=l.phone)==null?void 0:g.trim)!=null&&y.call(g)||(a.phone={invalid:!0,message:"Phone is required"}),((S=(v=l.phone)==null?void 0:v.trim)==null?void 0:S.call(v))!==""&&!w.test(l.phone)&&(a.phone={invalid:!0,message:"Mobile number should be 10 digits number"}),l.email!==""&&!L.test(l.email)&&(a.email={invalid:!0,message:"Email is invalid"});let t=!1;for(const F in a)a[F].invalid===!0&&(t=!0);return t&&p(a),t},C=l=>{l.preventDefault(),N(m)||(i(m),p(_),d(z))};return e.createElement("form",{action:"",id:"contactPersonForm",onSubmit:C},e.createElement(R,{sx:{padding:"20px",marginBottom:"20px"}},e.createElement(f,{variant:"h6",gutterBottom:!0},"Contact person"),e.createElement("div",{className:"grid grid-3-col"},e.createElement("div",{className:"grid-item"},e.createElement(u,{fullWidth:!0,error:n.name.invalid},e.createElement(E,{size:"small",variant:"outlined",label:"Contact person name",value:m.name,error:n.name.invalid,onChange:o,name:"name",id:"name"}),n.name.invalid&&e.createElement(b,null,n.name.message))),e.createElement("div",{className:"grid-item"},e.createElement(u,{fullWidth:!0},e.createElement(E,{size:"small",variant:"outlined",label:"Address",value:m.address,onChange:o,name:"address",id:"address"}))),e.createElement("div",{className:"grid-item"},e.createElement(u,{fullWidth:!0},e.createElement(E,{size:"small",variant:"outlined",label:"Designation",value:m.designation,onChange:o,name:"designation",id:"designation"}))),e.createElement("div",{className:"grid-item"},e.createElement(u,{fullWidth:!0,error:n.email.invalid},e.createElement(E,{size:"small",variant:"outlined",label:"Email",value:m.email,error:n.email.invalid,onChange:o,name:"email",id:"email"}),n.email.invalid&&e.createElement(b,null,n.email.message))),e.createElement("div",{className:"grid-item"},e.createElement(u,{fullWidth:!0,error:n.phone.invalid},e.createElement(E,{size:"small",variant:"outlined",label:"Phone",value:m.phone,error:n.phone.invalid,onChange:o,onInput:q,name:"phone",id:"phone"}),n.phone.invalid&&e.createElement(b,null,n.phone.message)))),e.createElement("div",{className:"right"},e.createElement(T,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"contactPersonForm"},c?"Update":"Add"))))};export{G as C,D as a};
