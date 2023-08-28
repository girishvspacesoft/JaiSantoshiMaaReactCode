import{u as ce,a as at,b as ie,o as Q,c as Ee,s as Ve,g as ct,d as ut,e as dt,f as Ht,h as ve,i as Qe,j as Nt,k as Ft,l as De}from"./utils-c03c978f.js";import{r as i,j as U}from"./react-bfabd40c.js";import{_ as L,d as Pe}from"./@babel-e11bafe1.js";import{c as Lt}from"./@popperjs-f3391c26.js";import{r as ft}from"./react-dom-b0178e93.js";function Mt(e){return typeof e=="string"}function Dt(e,n,s){return e===void 0||Mt(e)?n:L({},n,{ownerState:L({},n.ownerState,s)})}const $t={disableDefaultClasses:!1},Bt=i.createContext($t);function pt(e){const{disableDefaultClasses:n}=i.useContext(Bt);return s=>n?"":e(s)}function ht(e,n=[]){if(e===void 0)return{};const s={};return Object.keys(e).filter(t=>t.match(/^on[A-Z]/)&&typeof e[t]=="function"&&!n.includes(t)).forEach(t=>{s[t]=e[t]}),s}function Vt(e,n,s){return typeof e=="function"?e(n,s):e}function gt(e){var n,s,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(s=gt(e[n]))&&(t&&(t+=" "),t+=s);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function et(){for(var e,n,s=0,t="";s<arguments.length;)(e=arguments[s++])&&(n=gt(e))&&(t&&(t+=" "),t+=n);return t}function tt(e){if(e===void 0)return{};const n={};return Object.keys(e).filter(s=>!(s.match(/^on[A-Z]/)&&typeof e[s]=="function")).forEach(s=>{n[s]=e[s]}),n}function jt(e){const{getSlotProps:n,additionalProps:s,externalSlotProps:t,externalForwardedProps:a,className:l}=e;if(!n){const P=et(a==null?void 0:a.className,t==null?void 0:t.className,l,s==null?void 0:s.className),m=L({},s==null?void 0:s.style,a==null?void 0:a.style,t==null?void 0:t.style),C=L({},s,a,t);return P.length>0&&(C.className=P),Object.keys(m).length>0&&(C.style=m),{props:C,internalRef:void 0}}const c=ht(L({},a,t)),u=tt(t),h=tt(a),v=n(c),x=et(v==null?void 0:v.className,s==null?void 0:s.className,l,a==null?void 0:a.className,t==null?void 0:t.className),b=L({},v==null?void 0:v.style,s==null?void 0:s.style,a==null?void 0:a.style,t==null?void 0:t.style),T=L({},v,s,h,u);return x.length>0&&(T.className=x),Object.keys(b).length>0&&(T.style=b),{props:T,internalRef:v.ref}}const Kt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function je(e){var n;const{elementType:s,externalSlotProps:t,ownerState:a,skipResolvingSlotProps:l=!1}=e,c=Pe(e,Kt),u=l?{}:Vt(t,a),{props:h,internalRef:v}=jt(L({},c,{externalSlotProps:u})),x=ce(v,u==null?void 0:u.ref,(n=e.additionalProps)==null?void 0:n.ref);return Dt(s,L({},h,{ref:x}),a)}function Tn(e){const{badgeContent:n,invisible:s=!1,max:t=99,showZero:a=!1}=e,l=at({badgeContent:n,max:t});let c=s;s===!1&&n===0&&!a&&(c=!0);const{badgeContent:u,max:h=t}=c?l:e,v=u&&Number(u)>h?`${h}+`:u;return{badgeContent:u,invisible:c,max:h,displayValue:v}}function nt(e){return e.substring(2).toLowerCase()}function Ut(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function On(e){const{children:n,disableReactTree:s=!1,mouseEvent:t="onClick",onClickAway:a,touchEvent:l="onTouchEnd"}=e,c=i.useRef(!1),u=i.useRef(null),h=i.useRef(!1),v=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const x=ce(n.ref,u),b=ie(m=>{const C=v.current;v.current=!1;const H=Q(u.current);if(!h.current||!u.current||"clientX"in m&&Ut(m,H))return;if(c.current){c.current=!1;return}let E;m.composedPath?E=m.composedPath().indexOf(u.current)>-1:E=!H.documentElement.contains(m.target)||u.current.contains(m.target),!E&&(s||!C)&&a(m)}),T=m=>C=>{v.current=!0;const H=n.props[m];H&&H(C)},P={ref:x};return l!==!1&&(P[l]=T(l)),i.useEffect(()=>{if(l!==!1){const m=nt(l),C=Q(u.current),H=()=>{c.current=!0};return C.addEventListener(m,b),C.addEventListener("touchmove",H),()=>{C.removeEventListener(m,b),C.removeEventListener("touchmove",H)}}},[b,l]),t!==!1&&(P[t]=T(t)),i.useEffect(()=>{if(t!==!1){const m=nt(t),C=Q(u.current);return C.addEventListener(m,b),()=>{C.removeEventListener(m,b)}}},[b,t]),U.jsx(i.Fragment,{children:i.cloneElement(n,P)})}const Wt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function zt(e){const n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:n}function _t(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const n=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let s=n(`[name="${e.name}"]:checked`);return s||(s=n(`[name="${e.name}"]`)),s!==e}function qt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||_t(e))}function Yt(e){const n=[],s=[];return Array.from(e.querySelectorAll(Wt)).forEach((t,a)=>{const l=zt(t);l===-1||!qt(t)||(l===0?n.push(t):s.push({documentOrder:a,tabIndex:l,node:t}))}),s.sort((t,a)=>t.tabIndex===a.tabIndex?t.documentOrder-a.documentOrder:t.tabIndex-a.tabIndex).map(t=>t.node).concat(n)}function Zt(){return!0}function Xt(e){const{children:n,disableAutoFocus:s=!1,disableEnforceFocus:t=!1,disableRestoreFocus:a=!1,getTabbable:l=Yt,isEnabled:c=Zt,open:u}=e,h=i.useRef(!1),v=i.useRef(null),x=i.useRef(null),b=i.useRef(null),T=i.useRef(null),P=i.useRef(!1),m=i.useRef(null),C=ce(n.ref,m),H=i.useRef(null);i.useEffect(()=>{!u||!m.current||(P.current=!s)},[s,u]),i.useEffect(()=>{if(!u||!m.current)return;const f=Q(m.current);return m.current.contains(f.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),P.current&&m.current.focus()),()=>{a||(b.current&&b.current.focus&&(h.current=!0,b.current.focus()),b.current=null)}},[u]),i.useEffect(()=>{if(!u||!m.current)return;const f=Q(m.current),A=k=>{const{current:I}=m;if(I!==null){if(!f.hasFocus()||t||!c()||h.current){h.current=!1;return}if(!I.contains(f.activeElement)){if(k&&T.current!==k.target||f.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!P.current)return;let S=[];if((f.activeElement===v.current||f.activeElement===x.current)&&(S=l(m.current)),S.length>0){var q,F;const X=!!((q=H.current)!=null&&q.shiftKey&&((F=H.current)==null?void 0:F.key)==="Tab"),K=S[0],M=S[S.length-1];typeof K!="string"&&typeof M!="string"&&(X?M.focus():K.focus())}else I.focus()}}},w=k=>{H.current=k,!(t||!c()||k.key!=="Tab")&&f.activeElement===m.current&&k.shiftKey&&(h.current=!0,x.current&&x.current.focus())};f.addEventListener("focusin",A),f.addEventListener("keydown",w,!0);const N=setInterval(()=>{f.activeElement&&f.activeElement.tagName==="BODY"&&A(null)},50);return()=>{clearInterval(N),f.removeEventListener("focusin",A),f.removeEventListener("keydown",w,!0)}},[s,t,a,c,u,l]);const E=f=>{b.current===null&&(b.current=f.relatedTarget),P.current=!0,T.current=f.target;const A=n.props.onFocus;A&&A(f)},R=f=>{b.current===null&&(b.current=f.relatedTarget),P.current=!0};return U.jsxs(i.Fragment,{children:[U.jsx("div",{tabIndex:u?0:-1,onFocus:R,ref:v,"data-testid":"sentinelStart"}),i.cloneElement(n,{ref:C,onFocus:E}),U.jsx("div",{tabIndex:u?0:-1,onFocus:R,ref:x,"data-testid":"sentinelEnd"})]})}function Gt(e){return typeof e=="function"?e():e}const mt=i.forwardRef(function(n,s){const{children:t,container:a,disablePortal:l=!1}=n,[c,u]=i.useState(null),h=ce(i.isValidElement(t)?t.ref:null,s);if(Ee(()=>{l||u(Gt(a)||document.body)},[a,l]),Ee(()=>{if(c&&!l)return Ve(s,c),()=>{Ve(s,null)}},[s,c,l]),l){if(i.isValidElement(t)){const v={ref:h};return i.cloneElement(t,v)}return U.jsx(i.Fragment,{children:t})}return U.jsx(i.Fragment,{children:c&&ft.createPortal(t,c)})});function Jt(e){return ct("MuiPopper",e)}ut("MuiPopper",["root"]);const Qt=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],en=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function tn(e,n){if(n==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Ke(e){return typeof e=="function"?e():e}function nn(e){return e.nodeType!==void 0}const rn=()=>dt({root:["root"]},pt(Jt)),on={},sn=i.forwardRef(function(n,s){var t;const{anchorEl:a,children:l,direction:c,disablePortal:u,modifiers:h,open:v,placement:x,popperOptions:b,popperRef:T,slotProps:P={},slots:m={},TransitionProps:C}=n,H=Pe(n,Qt),E=i.useRef(null),R=ce(E,s),f=i.useRef(null),A=ce(f,T),w=i.useRef(A);Ee(()=>{w.current=A},[A]),i.useImperativeHandle(T,()=>f.current,[]);const N=tn(x,c),[k,I]=i.useState(N),[q,F]=i.useState(Ke(a));i.useEffect(()=>{f.current&&f.current.forceUpdate()}),i.useEffect(()=>{a&&F(Ke(a))},[a]),Ee(()=>{if(!q||!v)return;const D=re=>{I(re.placement)};let G=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:re})=>{D(re)}}];h!=null&&(G=G.concat(h)),b&&b.modifiers!=null&&(G=G.concat(b.modifiers));const ne=Lt(q,E.current,L({placement:N},b,{modifiers:G}));return w.current(ne),()=>{ne.destroy(),w.current(null)}},[q,u,h,v,b,N]);const S={placement:k};C!==null&&(S.TransitionProps=C);const X=rn(),K=(t=m.root)!=null?t:"div",M=je({elementType:K,externalSlotProps:P.root,externalForwardedProps:H,additionalProps:{role:"tooltip",ref:R},ownerState:n,className:X.root});return U.jsx(K,L({},M,{children:typeof l=="function"?l(S):l}))}),In=i.forwardRef(function(n,s){const{anchorEl:t,children:a,container:l,direction:c="ltr",disablePortal:u=!1,keepMounted:h=!1,modifiers:v,open:x,placement:b="bottom",popperOptions:T=on,popperRef:P,style:m,transition:C=!1,slotProps:H={},slots:E={}}=n,R=Pe(n,en),[f,A]=i.useState(!0),w=()=>{A(!1)},N=()=>{A(!0)};if(!h&&!x&&(!C||f))return null;let k;if(l)k=l;else if(t){const F=Ke(t);k=F&&nn(F)?Q(F).body:Q(null).body}const I=!x&&h&&(!C||f)?"none":void 0,q=C?{in:x,onEnter:w,onExited:N}:void 0;return U.jsx(mt,{disablePortal:u,container:k,children:U.jsx(sn,L({anchorEl:t,direction:c,disablePortal:u,modifiers:v,ref:s,open:C?!f:x,placement:b,popperOptions:T,popperRef:P,slotProps:H,slots:E},R,{style:L({position:"fixed",top:0,left:0,display:I},m),TransitionProps:q,children:a}))})});function ln(e){const n=Q(e);return n.body===e?ve(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ye(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function rt(e){return parseInt(ve(e).getComputedStyle(e).paddingRight,10)||0}function an(e){const s=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,t=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return s||t}function ot(e,n,s,t,a){const l=[n,s,...t];[].forEach.call(e.children,c=>{const u=l.indexOf(c)===-1,h=!an(c);u&&h&&ye(c,a)})}function $e(e,n){let s=-1;return e.some((t,a)=>n(t)?(s=a,!0):!1),s}function cn(e,n){const s=[],t=e.container;if(!n.disableScrollLock){if(ln(t)){const c=Ht(Q(t));s.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${rt(t)+c}px`;const u=Q(t).querySelectorAll(".mui-fixed");[].forEach.call(u,h=>{s.push({value:h.style.paddingRight,property:"padding-right",el:h}),h.style.paddingRight=`${rt(h)+c}px`})}let l;if(t.parentNode instanceof DocumentFragment)l=Q(t).body;else{const c=t.parentElement,u=ve(t);l=(c==null?void 0:c.nodeName)==="HTML"&&u.getComputedStyle(c).overflowY==="scroll"?c:t}s.push({value:l.style.overflow,property:"overflow",el:l},{value:l.style.overflowX,property:"overflow-x",el:l},{value:l.style.overflowY,property:"overflow-y",el:l}),l.style.overflow="hidden"}return()=>{s.forEach(({value:l,el:c,property:u})=>{l?c.style.setProperty(u,l):c.style.removeProperty(u)})}}function un(e){const n=[];return[].forEach.call(e.children,s=>{s.getAttribute("aria-hidden")==="true"&&n.push(s)}),n}class dn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(n,s){let t=this.modals.indexOf(n);if(t!==-1)return t;t=this.modals.length,this.modals.push(n),n.modalRef&&ye(n.modalRef,!1);const a=un(s);ot(s,n.mount,n.modalRef,a,!0);const l=$e(this.containers,c=>c.container===s);return l!==-1?(this.containers[l].modals.push(n),t):(this.containers.push({modals:[n],container:s,restore:null,hiddenSiblings:a}),t)}mount(n,s){const t=$e(this.containers,l=>l.modals.indexOf(n)!==-1),a=this.containers[t];a.restore||(a.restore=cn(a,s))}remove(n,s=!0){const t=this.modals.indexOf(n);if(t===-1)return t;const a=$e(this.containers,c=>c.modals.indexOf(n)!==-1),l=this.containers[a];if(l.modals.splice(l.modals.indexOf(n),1),this.modals.splice(t,1),l.modals.length===0)l.restore&&l.restore(),n.modalRef&&ye(n.modalRef,s),ot(l.container,n.mount,n.modalRef,l.hiddenSiblings,!1),this.containers.splice(a,1);else{const c=l.modals[l.modals.length-1];c.modalRef&&ye(c.modalRef,!1)}return t}isTopModal(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}function fn(e){return ct("MuiModal",e)}ut("MuiModal",["root","hidden","backdrop"]);const pn=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],hn=e=>{const{open:n,exited:s}=e;return dt({root:["root",!n&&s&&"hidden"],backdrop:["backdrop"]},pt(fn))};function gn(e){return typeof e=="function"?e():e}function mn(e){return e?e.props.hasOwnProperty("in"):!1}const bn=new dn,An=i.forwardRef(function(n,s){var t,a;const{children:l,closeAfterTransition:c=!1,container:u,disableAutoFocus:h=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:x=!1,disablePortal:b=!1,disableRestoreFocus:T=!1,disableScrollLock:P=!1,hideBackdrop:m=!1,keepMounted:C=!1,manager:H=bn,onBackdropClick:E,onClose:R,onKeyDown:f,open:A,onTransitionEnter:w,onTransitionExited:N,slotProps:k={},slots:I={}}=n,q=Pe(n,pn),F=H,[S,X]=i.useState(!A),K=i.useRef({}),M=i.useRef(null),D=i.useRef(null),G=ce(D,s),ne=mn(l),re=(t=n["aria-hidden"])!=null?t:!0,Ae=()=>Q(M.current),ee=()=>(K.current.modalRef=D.current,K.current.mountNode=M.current,K.current),Re=()=>{F.mount(ee(),{disableScrollLock:P}),D.current&&(D.current.scrollTop=0)},we=ie(()=>{const y=gn(u)||Ae().body;F.add(ee(),y),D.current&&Re()}),W=i.useCallback(()=>F.isTopModal(ee()),[F]),z=ie(y=>{M.current=y,!(!y||!D.current)&&(A&&W()?Re():ye(D.current,re))}),oe=i.useCallback(()=>{F.remove(ee(),re)},[F,re]);i.useEffect(()=>()=>{oe()},[oe]),i.useEffect(()=>{A?we():(!ne||!c)&&oe()},[A,oe,ne,c,we]);const ue=L({},n,{closeAfterTransition:c,disableAutoFocus:h,disableEnforceFocus:v,disableEscapeKeyDown:x,disablePortal:b,disableRestoreFocus:T,disableScrollLock:P,exited:S,hideBackdrop:m,keepMounted:C}),$=hn(ue),Y=()=>{X(!1),w&&w()},pe=()=>{X(!0),N&&N(),c&&oe()},He=y=>{y.target===y.currentTarget&&(E&&E(y),R&&R(y,"backdropClick"))},Z=y=>{f&&f(y),!(y.key!=="Escape"||!W())&&(x||(y.stopPropagation(),R&&R(y,"escapeKeyDown")))},ae={};l.props.tabIndex===void 0&&(ae.tabIndex="-1"),ne&&(ae.onEnter=Qe(Y,l.props.onEnter),ae.onExited=Qe(pe,l.props.onExited));const me=(a=I.root)!=null?a:"div",_=je({elementType:me,externalSlotProps:k.root,externalForwardedProps:q,additionalProps:{ref:G,role:"presentation",onKeyDown:Z},className:$.root,ownerState:ue}),g=I.backdrop,Ne=je({elementType:g,externalSlotProps:k.backdrop,additionalProps:{"aria-hidden":!0,onClick:He,open:A},className:$.backdrop,ownerState:ue});return!C&&!A&&(!ne||S)?null:U.jsx(mt,{ref:z,container:u,disablePortal:b,children:U.jsxs(me,L({},_,{children:[!m&&g?U.jsx(g,L({},Ne)):null,U.jsx(Xt,{disableEnforceFocus:v,disableAutoFocus:h,disableRestoreFocus:T,isEnabled:W,open:A,children:i.cloneElement(l,ae)})]}))})});function Hn(e){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:t,open:a,resumeHideDuration:l}=e,c=i.useRef();i.useEffect(()=>{if(!a)return;function E(R){R.defaultPrevented||(R.key==="Escape"||R.key==="Esc")&&(t==null||t(R,"escapeKeyDown"))}return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[a,t]);const u=ie((E,R)=>{t==null||t(E,R)}),h=ie(E=>{!t||E==null||(clearTimeout(c.current),c.current=setTimeout(()=>{u(null,"timeout")},E))});i.useEffect(()=>(a&&h(n),()=>{clearTimeout(c.current)}),[a,n,h]);const v=E=>{t==null||t(E,"clickaway")},x=()=>{clearTimeout(c.current)},b=i.useCallback(()=>{n!=null&&h(l??n*.5)},[n,l,h]),T=E=>R=>{const f=E.onBlur;f==null||f(R),b()},P=E=>R=>{const f=E.onFocus;f==null||f(R),x()},m=E=>R=>{const f=E.onMouseEnter;f==null||f(R),x()},C=E=>R=>{const f=E.onMouseLeave;f==null||f(R),b()};return i.useEffect(()=>{if(!s&&a)return window.addEventListener("focus",b),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",x)}},[s,b,a]),{getRootProps:(E={})=>{const R=ht(e),f=L({},R,E);return L({role:"presentation"},f,{onBlur:T(f),onFocus:P(f),onMouseEnter:m(f),onMouseLeave:C(f)})},onClickAway:v}}const xn=["onChange","maxRows","minRows","style","value"];function Ie(e){return parseInt(e,10)||0}const yn={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function st(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Nn=i.forwardRef(function(n,s){const{onChange:t,maxRows:a,minRows:l=1,style:c,value:u}=n,h=Pe(n,xn),{current:v}=i.useRef(u!=null),x=i.useRef(null),b=ce(s,x),T=i.useRef(null),P=i.useRef(0),[m,C]=i.useState({outerHeightStyle:0}),H=i.useCallback(()=>{const w=x.current,k=ve(w).getComputedStyle(w);if(k.width==="0px")return{outerHeightStyle:0};const I=T.current;I.style.width=k.width,I.value=w.value||n.placeholder||"x",I.value.slice(-1)===`
`&&(I.value+=" ");const q=k.boxSizing,F=Ie(k.paddingBottom)+Ie(k.paddingTop),S=Ie(k.borderBottomWidth)+Ie(k.borderTopWidth),X=I.scrollHeight;I.value="x";const K=I.scrollHeight;let M=X;l&&(M=Math.max(Number(l)*K,M)),a&&(M=Math.min(Number(a)*K,M)),M=Math.max(M,K);const D=M+(q==="border-box"?F+S:0),G=Math.abs(M-X)<=1;return{outerHeightStyle:D,overflow:G}},[a,l,n.placeholder]),E=(w,N)=>{const{outerHeightStyle:k,overflow:I}=N;return P.current<20&&(k>0&&Math.abs((w.outerHeightStyle||0)-k)>1||w.overflow!==I)?(P.current+=1,{overflow:I,outerHeightStyle:k}):w},R=i.useCallback(()=>{const w=H();st(w)||C(N=>E(N,w))},[H]),f=()=>{const w=H();st(w)||ft.flushSync(()=>{C(N=>E(N,w))})};i.useEffect(()=>{const w=Nt(()=>{P.current=0,x.current&&f()});let N;const k=x.current,I=ve(k);return I.addEventListener("resize",w),typeof ResizeObserver<"u"&&(N=new ResizeObserver(w),N.observe(k)),()=>{w.clear(),I.removeEventListener("resize",w),N&&N.disconnect()}}),Ee(()=>{R()}),i.useEffect(()=>{P.current=0},[u]);const A=w=>{P.current=0,v||R(),t&&t(w)};return U.jsxs(i.Fragment,{children:[U.jsx("textarea",L({value:u,onChange:A,ref:b,rows:l,style:L({height:m.outerHeightStyle,overflow:m.overflow?"hidden":void 0},c)},h)),U.jsx("textarea",{"aria-hidden":!0,className:n.className,readOnly:!0,ref:T,tabIndex:-1,style:L({},yn.shadow,c,{paddingTop:0,paddingBottom:0})})]})});function lt(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function En(e={}){const{ignoreAccents:n=!0,ignoreCase:s=!0,limit:t,matchFrom:a="any",stringify:l,trim:c=!1}=e;return(u,{inputValue:h,getOptionLabel:v})=>{let x=c?h.trim():h;s&&(x=x.toLowerCase()),n&&(x=lt(x));const b=x?u.filter(T=>{let P=(l||v)(T);return s&&(P=P.toLowerCase()),n&&(P=lt(P)),a==="start"?P.indexOf(x)===0:P.indexOf(x)>-1}):u;return typeof t=="number"?b.slice(0,t):b}}function Be(e,n){for(let s=0;s<e.length;s+=1)if(n(e[s]))return s;return-1}const vn=En(),it=5,Pn=e=>{var n;return e.current!==null&&((n=e.current.parentElement)==null?void 0:n.contains(document.activeElement))};function Fn(e){const{unstable_isActiveElementInListbox:n=Pn,unstable_classNamePrefix:s="Mui",autoComplete:t=!1,autoHighlight:a=!1,autoSelect:l=!1,blurOnSelect:c=!1,clearOnBlur:u=!e.freeSolo,clearOnEscape:h=!1,componentName:v="useAutocomplete",defaultValue:x=e.multiple?[]:null,disableClearable:b=!1,disableCloseOnSelect:T=!1,disabled:P,disabledItemsFocusable:m=!1,disableListWrap:C=!1,filterOptions:H=vn,filterSelectedOptions:E=!1,freeSolo:R=!1,getOptionDisabled:f,getOptionLabel:A=o=>{var r;return(r=o.label)!=null?r:o},groupBy:w,handleHomeEndKeys:N=!e.freeSolo,id:k,includeInputInList:I=!1,inputValue:q,isOptionEqualToValue:F=(o,r)=>o===r,multiple:S=!1,onChange:X,onClose:K,onHighlightChange:M,onInputChange:D,onOpen:G,open:ne,openOnFocus:re=!1,options:Ae,readOnly:ee=!1,selectOnFocus:Re=!e.freeSolo,value:we}=e,W=Ft(k);let z=A;z=o=>{const r=A(o);return typeof r!="string"?String(r):r};const oe=i.useRef(!1),ue=i.useRef(!0),$=i.useRef(null),Y=i.useRef(null),[pe,He]=i.useState(null),[Z,ae]=i.useState(-1),me=a?0:-1,_=i.useRef(me),[g,Ne]=De({controlled:we,default:x,name:v}),[y,Se]=De({controlled:q,default:"",name:v,state:"inputValue"}),[Ce,Ue]=i.useState(!1),ke=i.useCallback((o,r)=>{if(!(S?g.length<r.length:r!==null)&&!u)return;let p;if(S)p="";else if(r==null)p="";else{const O=z(r);p=typeof O=="string"?O:""}y!==p&&(Se(p),D&&D(o,p,"reset"))},[z,y,S,D,Se,u,g]),[he,We]=De({controlled:ne,default:!1,name:v,state:"open"}),[bt,ze]=i.useState(!0),_e=!S&&g!=null&&y===z(g),J=he&&!ee,B=J?H(Ae.filter(o=>!(E&&(S?g:[g]).some(r=>r!==null&&F(o,r)))),{inputValue:_e&&bt?"":y,getOptionLabel:z}):[],se=at({filteredOptions:B,value:g,inputValue:y});i.useEffect(()=>{const o=g!==se.value;Ce&&!o||R&&!o||ke(null,g)},[g,ke,Ce,se.value,R]);const Fe=he&&B.length>0&&!ee,Te=ie(o=>{o===-1?$.current.focus():pe.querySelector(`[data-tag-index="${o}"]`).focus()});i.useEffect(()=>{S&&Z>g.length-1&&(ae(-1),Te(-1))},[g,S,Z,Te]);function xt(o,r){if(!Y.current||o===-1)return-1;let d=o;for(;;){if(r==="next"&&d===B.length||r==="previous"&&d===-1)return-1;const p=Y.current.querySelector(`[data-option-index="${d}"]`),O=m?!1:!p||p.disabled||p.getAttribute("aria-disabled")==="true";if(p&&!p.hasAttribute("tabindex")||O)d+=r==="next"?1:-1;else return d}}const de=ie(({event:o,index:r,reason:d="auto"})=>{if(_.current=r,r===-1?$.current.removeAttribute("aria-activedescendant"):$.current.setAttribute("aria-activedescendant",`${W}-option-${r}`),M&&M(o,r===-1?null:B[r],d),!Y.current)return;const p=Y.current.querySelector(`[role="option"].${s}-focused`);p&&(p.classList.remove(`${s}-focused`),p.classList.remove(`${s}-focusVisible`));let O=Y.current;if(Y.current.getAttribute("role")!=="listbox"&&(O=Y.current.parentElement.querySelector('[role="listbox"]')),!O)return;if(r===-1){O.scrollTop=0;return}const j=Y.current.querySelector(`[data-option-index="${r}"]`);if(j&&(j.classList.add(`${s}-focused`),d==="keyboard"&&j.classList.add(`${s}-focusVisible`),O.scrollHeight>O.clientHeight&&d!=="mouse"&&d!=="touch")){const V=j,te=O.clientHeight+O.scrollTop,Je=V.offsetTop+V.offsetHeight;Je>te?O.scrollTop=Je-O.clientHeight:V.offsetTop-V.offsetHeight*(w?1.3:0)<O.scrollTop&&(O.scrollTop=V.offsetTop-V.offsetHeight*(w?1.3:0))}}),le=ie(({event:o,diff:r,direction:d="next",reason:p="auto"})=>{if(!J)return;const j=xt((()=>{const V=B.length-1;if(r==="reset")return me;if(r==="start")return 0;if(r==="end")return V;const te=_.current+r;return te<0?te===-1&&I?-1:C&&_.current!==-1||Math.abs(r)>1?0:V:te>V?te===V+1&&I?-1:C||Math.abs(r)>1?V:0:te})(),d);if(de({index:j,reason:p,event:o}),t&&r!=="reset")if(j===-1)$.current.value=y;else{const V=z(B[j]);$.current.value=V,V.toLowerCase().indexOf(y.toLowerCase())===0&&y.length>0&&$.current.setSelectionRange(y.length,V.length)}}),yt=()=>{const o=(r,d)=>{const p=r?z(r):"",O=d?z(d):"";return p===O};if(_.current!==-1&&se.filteredOptions&&se.filteredOptions.length!==B.length&&se.inputValue===y&&(S?g.length===se.value.length&&se.value.every((r,d)=>z(g[d])===z(r)):o(se.value,g))){const r=se.filteredOptions[_.current];if(r&&B.some(p=>z(p)===z(r)))return!0}return!1},Le=i.useCallback(()=>{if(!J||yt())return;const o=S?g[0]:g;if(B.length===0||o==null){le({diff:"reset"});return}if(Y.current){if(o!=null){const r=B[_.current];if(S&&r&&Be(g,p=>F(r,p))!==-1)return;const d=Be(B,p=>F(p,o));d===-1?le({diff:"reset"}):de({index:d});return}if(_.current>=B.length-1){de({index:B.length-1});return}de({index:_.current})}},[B.length,S?!1:g,E,le,de,J,y,S]),Et=ie(o=>{Ve(Y,o),o&&Le()});i.useEffect(()=>{Le()},[Le]);const fe=o=>{he||(We(!0),ze(!0),G&&G(o))},be=(o,r)=>{he&&(We(!1),K&&K(o,r))},ge=(o,r,d,p)=>{if(S){if(g.length===r.length&&g.every((O,j)=>O===r[j]))return}else if(g===r)return;X&&X(o,r,d,p),Ne(r)},Oe=i.useRef(!1),xe=(o,r,d="selectOption",p="options")=>{let O=d,j=r;if(S){j=Array.isArray(g)?g.slice():[];const V=Be(j,te=>F(r,te));V===-1?j.push(r):p!=="freeSolo"&&(j.splice(V,1),O="removeOption")}ke(o,j),ge(o,j,O,{option:r}),!T&&(!o||!o.ctrlKey&&!o.metaKey)&&be(o,O),(c===!0||c==="touch"&&Oe.current||c==="mouse"&&!Oe.current)&&$.current.blur()};function vt(o,r){if(o===-1)return-1;let d=o;for(;;){if(r==="next"&&d===g.length||r==="previous"&&d===-1)return-1;const p=pe.querySelector(`[data-tag-index="${d}"]`);if(!p||!p.hasAttribute("tabindex")||p.disabled||p.getAttribute("aria-disabled")==="true")d+=r==="next"?1:-1;else return d}}const qe=(o,r)=>{if(!S)return;y===""&&be(o,"toggleInput");let d=Z;Z===-1?y===""&&r==="previous"&&(d=g.length-1):(d+=r==="next"?1:-1,d<0&&(d=0),d===g.length&&(d=-1)),d=vt(d,r),ae(d),Te(d)},Ye=o=>{oe.current=!0,Se(""),D&&D(o,"","clear"),ge(o,S?[]:null,"clear")},Pt=o=>r=>{if(o.onKeyDown&&o.onKeyDown(r),!r.defaultMuiPrevented&&(Z!==-1&&["ArrowLeft","ArrowRight"].indexOf(r.key)===-1&&(ae(-1),Te(-1)),r.which!==229))switch(r.key){case"Home":J&&N&&(r.preventDefault(),le({diff:"start",direction:"next",reason:"keyboard",event:r}));break;case"End":J&&N&&(r.preventDefault(),le({diff:"end",direction:"previous",reason:"keyboard",event:r}));break;case"PageUp":r.preventDefault(),le({diff:-it,direction:"previous",reason:"keyboard",event:r}),fe(r);break;case"PageDown":r.preventDefault(),le({diff:it,direction:"next",reason:"keyboard",event:r}),fe(r);break;case"ArrowDown":r.preventDefault(),le({diff:1,direction:"next",reason:"keyboard",event:r}),fe(r);break;case"ArrowUp":r.preventDefault(),le({diff:-1,direction:"previous",reason:"keyboard",event:r}),fe(r);break;case"ArrowLeft":qe(r,"previous");break;case"ArrowRight":qe(r,"next");break;case"Enter":if(_.current!==-1&&J){const d=B[_.current],p=f?f(d):!1;if(r.preventDefault(),p)return;xe(r,d,"selectOption"),t&&$.current.setSelectionRange($.current.value.length,$.current.value.length)}else R&&y!==""&&_e===!1&&(S&&r.preventDefault(),xe(r,y,"createOption","freeSolo"));break;case"Escape":J?(r.preventDefault(),r.stopPropagation(),be(r,"escape")):h&&(y!==""||S&&g.length>0)&&(r.preventDefault(),r.stopPropagation(),Ye(r));break;case"Backspace":if(S&&!ee&&y===""&&g.length>0){const d=Z===-1?g.length-1:Z,p=g.slice();p.splice(d,1),ge(r,p,"removeOption",{option:g[d]})}break;case"Delete":if(S&&!ee&&y===""&&g.length>0&&Z!==-1){const d=Z,p=g.slice();p.splice(d,1),ge(r,p,"removeOption",{option:g[d]})}break}},Rt=o=>{Ue(!0),re&&!oe.current&&fe(o)},Ze=o=>{if(n(Y)){$.current.focus();return}Ue(!1),ue.current=!0,oe.current=!1,l&&_.current!==-1&&J?xe(o,B[_.current],"blur"):l&&R&&y!==""?xe(o,y,"blur","freeSolo"):u&&ke(o,g),be(o,"blur")},wt=o=>{const r=o.target.value;y!==r&&(Se(r),ze(!1),D&&D(o,r,"input")),r===""?!b&&!S&&ge(o,null,"clear"):fe(o)},St=o=>{const r=Number(o.currentTarget.getAttribute("data-option-index"));_.current!==r&&de({event:o,index:r,reason:"mouse"})},Ct=o=>{de({event:o,index:Number(o.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Oe.current=!0},kt=o=>{const r=Number(o.currentTarget.getAttribute("data-option-index"));xe(o,B[r],"selectOption"),Oe.current=!1},Tt=o=>r=>{const d=g.slice();d.splice(o,1),ge(r,d,"removeOption",{option:g[o]})},Xe=o=>{he?be(o,"toggleInput"):fe(o)},Ot=o=>{o.currentTarget.contains(o.target)&&o.target.getAttribute("id")!==W&&o.preventDefault()},It=o=>{o.currentTarget.contains(o.target)&&($.current.focus(),Re&&ue.current&&$.current.selectionEnd-$.current.selectionStart===0&&$.current.select(),ue.current=!1)},At=o=>{(y===""||!he)&&Xe(o)};let Me=R&&y.length>0;Me=Me||(S?g.length>0:g!==null);let Ge=B;return w&&(Ge=B.reduce((o,r,d)=>{const p=w(r);return o.length>0&&o[o.length-1].group===p?o[o.length-1].options.push(r):o.push({key:d,index:d,group:p,options:[r]}),o},[])),P&&Ce&&Ze(),{getRootProps:(o={})=>L({"aria-owns":Fe?`${W}-listbox`:null},o,{onKeyDown:Pt(o),onMouseDown:Ot,onClick:It}),getInputLabelProps:()=>({id:`${W}-label`,htmlFor:W}),getInputProps:()=>({id:W,value:y,onBlur:Ze,onFocus:Rt,onChange:wt,onMouseDown:At,"aria-activedescendant":J?"":null,"aria-autocomplete":t?"both":"list","aria-controls":Fe?`${W}-listbox`:void 0,"aria-expanded":Fe,autoComplete:"off",ref:$,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:P}),getClearProps:()=>({tabIndex:-1,onClick:Ye}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:Xe}),getTagProps:({index:o})=>L({key:o,"data-tag-index":o,tabIndex:-1},!ee&&{onDelete:Tt(o)}),getListboxProps:()=>({role:"listbox",id:`${W}-listbox`,"aria-labelledby":`${W}-label`,ref:Et,onMouseDown:o=>{o.preventDefault()}}),getOptionProps:({index:o,option:r})=>{const d=(S?g:[g]).some(O=>O!=null&&F(r,O)),p=f?f(r):!1;return{key:z(r),tabIndex:-1,role:"option",id:`${W}-option-${o}`,onMouseMove:St,onClick:kt,onTouchStart:Ct,"data-option-index":o,"aria-disabled":p,"aria-selected":d}},id:W,inputValue:y,value:g,dirty:Me,expanded:J&&pe,popupOpen:J,focused:Ce||Z!==-1,anchorEl:pe,setAnchorEl:He,focusedTag:Z,groupedOptions:Ge}}export{On as C,Xt as F,An as M,In as P,Nn as T,Tn as a,je as b,Hn as c,Dt as d,En as e,Mt as i,Vt as r,Fn as u};