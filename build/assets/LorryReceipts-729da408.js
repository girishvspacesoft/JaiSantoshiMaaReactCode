import{r as u,a}from"./react-bfabd40c.js";import{a4 as N}from"./index-2b581a02.js";import{F as k,g as b,a0 as D,l as z,D as H}from"./material-e0a59a28.js";import{D as _}from"./x-data-grid-cceece3f.js";const I=({lorryReceipts:t,setLRForBill:B,bill:E,setBill:x})=>{var h;const C=e=>`${e.from} to ${e.to}`,w=e=>{var n,m;return(m=(n=e.transactions)==null?void 0:n.reduce)==null?void 0:m.call(n,(l,o)=>l+ +o.articleNo,0)},i=[{field:"_id",headerName:"Id"},{field:"lrNo",headerName:"LR no.",flex:1},{field:"description",headerName:"Description",flex:1,renderCell:e=>C(e.row)},{field:"articles",headerName:"Articles",flex:1,renderCell:e=>w(e.row)},{field:"wayBillNo",headerName:"Way bill no & date",flex:1,renderCell:e=>e.row.wayBillNo?`${e.row.wayBillNo} ${N(e.row.date)}`:N(e.row.date)},{field:"invoiceNo",headerName:"Memo no.",flex:1},{field:"total",headerName:"Amount",flex:1,renderCell:e=>{var n,m;return a.createElement("strong",null,"₹ ",(m=(n=Number(e.row.total))==null?void 0:n.toFixed)==null?void 0:m.call(n,2))}}],[S,r]=u.useState([]),[d,s]=u.useState(!1),v=e=>{e.preventDefault(),x(n=>({...n,lrList:[...S]}))},F=e=>{var o,g,f;const n=e.target.name,m=e.target.checked,l=(o=t==null?void 0:t.map)==null?void 0:o.call(t,c=>(c._id===n&&(c.checked=m),c));r((g=l==null?void 0:l.filter)==null?void 0:g.call(l,c=>c.checked)),s((f=l==null?void 0:l.every)==null?void 0:f.call(l,c=>c.checked))},A=e=>{var m,l;s(e.target.checked);const n=(m=t==null?void 0:t.map)==null?void 0:m.call(t,o=>(o.checked=e.target.checked,o));r((l=n==null?void 0:n.filter)==null?void 0:l.call(n,o=>o.checked))};return a.createElement(a.Fragment,null,a.createElement("div",{className:"grid grid-7-col"},a.createElement("div",{className:"grid-item"},a.createElement("h2",{className:"mb20 text-inline"},"Lorry receipts")),(t==null?void 0:t.length)>0&&a.createElement("div",{className:"grid-item"},a.createElement(k,{className:"groupCheckbox",key:"selectAll",control:a.createElement(b,{name:d,size:"small",checked:d,onChange:A}),label:a.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",lineHeight:"1em"}},"Select all")}))),a.createElement("form",{action:"",onSubmit:v,id:"lrSelectionForm"},(t==null?void 0:t.length)===0&&a.createElement("p",null,"No lorry receipts found for billing!"),a.createElement("div",{className:"bl_lrCheckboxes"},a.createElement(D,{className:"checkboxGroup"},(t==null?void 0:t.length)>0&&((h=t==null?void 0:t.map)==null?void 0:h.call(t,e=>a.createElement(k,{className:"groupCheckbox",key:e.lrNo,control:a.createElement(b,{name:e._id,size:"small",checked:e.checked,onChange:F}),label:a.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",lineHeight:"1em"}},e.lrNo)}))))),a.createElement("div",{className:"right"},a.createElement(z,{variant:"contained",size:"medium",type:"submit",color:"primary",form:"lrSelectionForm",className:"ml6"},"Add"))),a.createElement(H,{sx:{margin:"20px 0"}}),a.createElement(_,{sx:{backgroundColor:"primary.contrastText"},autoHeight:!0,density:"compact",getRowId:e=>e._id||Math.random(),rows:E.lrList,columns:i,initialState:{...i,columns:{columnVisibilityModel:{_id:!1}}},pageSize:10,rowsPerPageOptions:[10],disableSelectionOnClick:!0}))};export{I as L};