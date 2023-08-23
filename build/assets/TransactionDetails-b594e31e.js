import{r as g,a as i}from"./react-bfabd40c.js";import{e as D,f as ee}from"./icons-material-4539f19e.js";import{a as te,u as ie}from"./react-redux-45d870ba.js";import{aY as re,bd as ae,L as le,al as C}from"./index-60b53c60.js";import"./Card.module-3bdbfb7f.js";import{i as N,A as P,h as w,V as T,m as R,l as V,f as G}from"./material-e0a59a28.js";import{D as ne}from"./x-data-grid-cceece3f.js";const v=[{label:"Fixed",value:"Fixed"},{label:"Kg",value:"Kg"},{label:"Case",value:"Case"}],z={article:null,articleNo:"",description:"",weight:"",chargeWeight:"",rateType:v[0],rate:"",freight:""},S={article:{invalid:!1,message:""},articleNo:{invalid:!1,message:""},weight:{invalid:!1,message:""},chargeWeight:{invalid:!1,message:""},rateType:{invalid:!1,message:""},rate:{invalid:!1,message:""},freight:{invalid:!1,message:""}},fe=({articles:o,lorryReceipt:p,setLorryReceipt:y})=>{var K;const _=[{field:"article",headerName:"Article",flex:1,renderCell:e=>{var t,a;return typeof e.row.article=="string"?e.row.article:(t=e.row.article)!=null&&t.label?(a=e.row.article)==null?void 0:a.label:null}},{field:"articleNo",headerName:"No. of articles",flex:1},{field:"description",headerName:"Description",flex:1},{field:"weight",headerName:"Weight",flex:1},{field:"chargeWeight",headerName:"Charge weight",flex:1},{field:"rateType",headerName:"Rate type",flex:1,renderCell:e=>{var t,a;return typeof((t=e.row)==null?void 0:t.rateType)=="string"?e.row.rateType:(a=e.row.rateType)!=null&&a.value?e.row.rateType.value:null}},{field:"rate",headerName:"Rate",flex:1},{field:"freight",headerName:"Freight",flex:1},{field:"actions",headerName:"Action",flex:1,sortable:!1,renderCell:e=>{const t=l=>(l.stopPropagation(),X(e.row.id||e.row._id,!!e.row._id)),a=l=>(l.stopPropagation(),Z(e.row.id||e.row._id,!!e.row._id));return i.createElement(i.Fragment,null,i.createElement(G,{size:"small",onClick:t,color:"primary"},i.createElement(D,null)),"  ",i.createElement(G,{size:"small",onClick:a,color:"error"},i.createElement(ee,null)))}}],U=te(),$=ie(re),[n,H]=g.useState(S),[r,E]=g.useState(z),[M,q]=g.useState(!1),[k,A]=g.useState(!1),[x,L]=g.useState(!1),[F,j]=g.useState(!1),[se,O]=g.useState("");let I=g.useRef(null);g.useEffect(()=>{M&&!k&&(I.current.focus(),y(e=>{var a,l,d,s,m,c;let t={...e,transactions:[...e.transactions]};if(x){let f;t.transactions[0]._id?f=(m=(s=t.transactions)==null?void 0:s.filter)==null?void 0:m.call(s,u=>u._id!==r._id):f=(d=(l=t.transactions)==null?void 0:l.filter)==null?void 0:d.call(l,u=>u.id!==r.id);const h=(c=o==null?void 0:o.filter)==null?void 0:c.call(o,u=>u._id===r.article||u.name===r.article),b={...r};h!=null&&h.length&&(b.article=h[0].name),t.transactions=[...f,{...b}]}else{const f={...r,id:Math.random()},h=(a=o==null?void 0:o.filter)==null?void 0:a.call(o,b=>b._id===f.article);h!=null&&h.length&&(f.article=h[0].name),t.transactions=[...e.transactions,{...f}]}return t}),E(z),q(!1),L(!1))},[M,k,r,o,x,y]),g.useEffect(()=>{r!=null&&r.weight&&E(e=>({...e,chargeWeight:e.weight}))},[r==null?void 0:r.weight]),g.useEffect(()=>{var t;let e;r.rateType&&(((t=r.rateType)==null?void 0:t.value)==="Kg"||r.rateType==="Kg")&&r.chargeWeight&&r.rate&&(e=+r.chargeWeight*+Number(r.rate)),r.rateType&&r.rateType.value==="Case"&&r.rate&&r.articleNo&&(e=+r.articleNo*+Number(r.rate)),e&&E(a=>({...a,freight:e}))},[r.rate,r.chargeWeight,r.rateType,r.articleNo]),g.useEffect(()=>{p.consignor&&p.consignor._id&&U(ae(p.consignor._id)).then(({payload:e={}})=>{const{message:t}=(e==null?void 0:e.data)||{};t?O(t):j(e==null?void 0:e.data.rateMaster)}).catch(e=>{O(e.message)})},[p.consignor]),g.useEffect(()=>{var e,t;if(F&&r.article&&r.article.name){const a=(t=(e=F.rates)==null?void 0:e.find)==null?void 0:t.call(e,l=>{var d,s,m,c;return((s=(d=l.article)==null?void 0:d.toLowerCase)==null?void 0:s.call(d))===((c=(m=r.article.name)==null?void 0:m.toLowerCase)==null?void 0:c.call(m))});a&&E(l=>({...l,rate:a.rate}))}else E(a=>({...a,rate:""}))},[F,r.article]);const W=e=>{const t=e.target.name,a=e.target.value;E(l=>({...l,[t]:a}))},J=()=>{E(z),H(S)},Q=e=>{e.preventDefault(),H(t=>Y(r)),q(!0)},X=(e,t)=>{var s,m,c,f,h,b;let a;t?a={...((f=(c=p.transactions)==null?void 0:c.filter)==null?void 0:f.call(c,u=>u._id===e)[0])||{}}:a={...((m=(s=p.transactions)==null?void 0:s.filter)==null?void 0:m.call(s,u=>u.id===e)[0])||{}};const l=(h=o==null?void 0:o.findIndex)==null?void 0:h.call(o,u=>u.name===a.article);l>=0&&(a.article=o[l]);const d=(b=v==null?void 0:v.findIndex)==null?void 0:b.call(v,u=>u.label===a.rateType);d>=0&&(a.rateType=v[d]),E(a),L(!0)},Z=(e,t)=>{var l,d,s,m;let a;t?a=(m=(s=p.transactions)==null?void 0:s.filter)==null?void 0:m.call(s,c=>c._id!==e):a=(d=(l=p.transactions)==null?void 0:l.filter)==null?void 0:d.call(l,c=>c.id!==e),y(c=>({...c,transactions:a}))},Y=e=>{var l,d;const t={...S};e.article||(t.article={invalid:!0,message:"Article is required"}),(typeof e.articleNo=="string"&&!((d=(l=e.articleNo)==null?void 0:l.trim)!=null&&d.call(l))||typeof e.articleNo=="number"&&e.articleNo<=0)&&(t.articleNo={invalid:!0,message:"Number of articles is required"}),e.articleNo&&isNaN(e.articleNo)&&(t.materialCost={invalid:!0,message:"Number of articles should be a number"}),(!e.weight||e.weight<=0)&&e.rateType===v[1]&&(t.weight={invalid:!0,message:"Weight is required"}),(!e.chargeWeight||e.chargeWeight<=0)&&e.rateType===v[1]&&(t.chargeWeight={invalid:!0,message:"Charge weight is required"}),e.weight&&isNaN(e.weight)&&(t.weight={invalid:!0,message:"Weight should be in a number"}),e.rateType||(t.rateType={invalid:!0,message:"Rate type is required"}),e.rate&&isNaN(e.weight)&&(t.rate={invalid:!0,message:"Rate  is required"}),e.freight||(t.freight={invalid:!0,message:"Freight is required"});let a=!1;for(const s in t)t[s].invalid===!0&&(a=!0);return A(!!a),t},B=(e,t,a)=>{E(l=>({...l,[a]:t}))};return i.createElement("div",null,$&&i.createElement(le,null),i.createElement("form",{id:"transactionDetailsForm",onSubmit:Q,className:"mb20"},i.createElement("div",{className:"grid grid-8-col"},i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,size:"small",error:n.article.invalid},i.createElement(P,{autoSelect:!0,autoHighlight:!0,ref:I,size:"small",name:"article",options:o,value:r.article,onChange:(e,t)=>B(e,t,"article"),openOnFocus:!0,renderInput:e=>i.createElement(w,{...e,label:"Article",error:n.article.invalid,fullWidth:!0,inputRef:I})}),n.article.invalid&&i.createElement(T,null,n.article.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,error:n.articleNo.invalid},i.createElement(w,{size:"small",variant:"outlined",label:"No of articles",value:r.articleNo||"",error:n.articleNo.invalid,onChange:W,onInput:C,name:"articleNo",id:"articleNo"}),n.articleNo.invalid&&i.createElement(T,null,n.articleNo.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0},i.createElement(w,{size:"small",variant:"outlined",label:"Description",value:r.description,onChange:W,name:"description",id:"description"}))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,error:n.weight.invalid},i.createElement(w,{size:"small",variant:"outlined",label:"Weight",value:r.weight||"",error:n.weight.invalid,onChange:W,onInput:C,name:"weight",id:"weight"}),n.weight.invalid&&i.createElement(T,null,n.weight.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,error:n.chargeWeight.invalid},i.createElement(w,{size:"small",variant:"outlined",label:"Charge weight",value:r.chargeWeight||"",error:n.chargeWeight.invalid,onChange:W,onInput:C,name:"chargeWeight",id:"chargeWeight"}),n.chargeWeight.invalid&&i.createElement(T,null,n.chargeWeight.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,size:"small",error:n.rateType.invalid},i.createElement(P,{autoSelect:!0,size:"small",name:"rateType",options:v,value:r.rateType,onChange:(e,t)=>B(e,t,"rateType"),openOnFocus:!0,renderInput:e=>i.createElement(w,{...e,label:"Rate type",error:n.rateType.invalid,fullWidth:!0})}),n.rateType.invalid&&i.createElement(T,null,n.rateType.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,error:n.rate.invalid},i.createElement(w,{size:"small",variant:"outlined",label:"Rate",value:r.rate||"",error:n.rate.invalid,onChange:W,onInput:C,name:"rate",id:"rate",disabled:r.rateType==="Fixed",InputProps:{startAdornment:i.createElement(R,{position:"start"},"₹")}}),n.rate.invalid&&i.createElement(T,null,n.rate.message))),i.createElement("div",{className:"grid-item"},i.createElement(N,{fullWidth:!0,error:n.freight.invalid},i.createElement(w,{size:"small",variant:"outlined",label:"Freight",value:r.freight||"",error:n.freight.invalid,name:"freight",id:"freight",InputProps:{readOnly:((K=r.rateType)==null?void 0:K.value)!=="Fixed",startAdornment:i.createElement(R,{position:"start"},"₹")},onChange:W,onInput:C}),n.freight.invalid&&i.createElement(T,null,n.freight.message)))),i.createElement("div",{className:"right"},i.createElement(V,{variant:"outlined",size:"medium",onClick:J,className:"ml6"},"Reset"),i.createElement(V,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"transactionDetailsForm",className:"ml6"},x?"Update":"Add"))),i.createElement(ne,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e.id||e._id,rows:p.transactions,columns:_,initialState:{..._,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))};export{fe as T};
