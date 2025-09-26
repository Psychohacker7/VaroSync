function Y0(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in s)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(s,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function f_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sd={exports:{}},ra={},od={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function K0(){if(nm)return ht;nm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=m&&I[m]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(I,G,q){this.props=I,this.context=G,this.refs=M,this.updater=q||S}v.prototype.isReactComponent={},v.prototype.setState=function(I,G){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,G,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=v.prototype;function C(I,G,q){this.props=I,this.context=G,this.refs=M,this.updater=q||S}var A=C.prototype=new y;A.constructor=C,E(A,v.prototype),A.isPureReactComponent=!0;var L=Array.isArray,z=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function ce(I,G,q){var te,fe={},Ee=null,Te=null;if(G!=null)for(te in G.ref!==void 0&&(Te=G.ref),G.key!==void 0&&(Ee=""+G.key),G)z.call(G,te)&&!F.hasOwnProperty(te)&&(fe[te]=G[te]);var Ce=arguments.length-2;if(Ce===1)fe.children=q;else if(1<Ce){for(var De=Array(Ce),Be=0;Be<Ce;Be++)De[Be]=arguments[Be+2];fe.children=De}if(I&&I.defaultProps)for(te in Ce=I.defaultProps,Ce)fe[te]===void 0&&(fe[te]=Ce[te]);return{$$typeof:s,type:I,key:Ee,ref:Te,props:fe,_owner:O.current}}function R(I,G){return{$$typeof:s,type:I.type,key:G,ref:I.ref,props:I.props,_owner:I._owner}}function D(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function ae(I){var G={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return G[q]})}var ue=/\/+/g;function _e(I,G){return typeof I=="object"&&I!==null&&I.key!=null?ae(""+I.key):G.toString(36)}function V(I,G,q,te,fe){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var Te=!1;if(I===null)Te=!0;else switch(Ee){case"string":case"number":Te=!0;break;case"object":switch(I.$$typeof){case s:case e:Te=!0}}if(Te)return Te=I,fe=fe(Te),I=te===""?"."+_e(Te,0):te,L(fe)?(q="",I!=null&&(q=I.replace(ue,"$&/")+"/"),V(fe,G,q,"",function(Be){return Be})):fe!=null&&(D(fe)&&(fe=R(fe,q+(!fe.key||Te&&Te.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+I)),G.push(fe)),1;if(Te=0,te=te===""?".":te+":",L(I))for(var Ce=0;Ce<I.length;Ce++){Ee=I[Ce];var De=te+_e(Ee,Ce);Te+=V(Ee,G,q,De,fe)}else if(De=_(I),typeof De=="function")for(I=De.call(I),Ce=0;!(Ee=I.next()).done;)Ee=Ee.value,De=te+_e(Ee,Ce++),Te+=V(Ee,G,q,De,fe);else if(Ee==="object")throw G=String(I),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Te}function Q(I,G,q){if(I==null)return I;var te=[],fe=0;return V(I,te,"","",function(Ee){return G.call(q,Ee,fe++)}),te}function oe(I){if(I._status===-1){var G=I._result;G=G(),G.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=G)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},W={transition:null},Z={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:W,ReactCurrentOwner:O};function j(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:Q,forEach:function(I,G,q){Q(I,function(){G.apply(this,arguments)},q)},count:function(I){var G=0;return Q(I,function(){G++}),G},toArray:function(I){return Q(I,function(G){return G})||[]},only:function(I){if(!D(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ht.Component=v,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=C,ht.StrictMode=i,ht.Suspense=f,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ht.act=j,ht.cloneElement=function(I,G,q){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=E({},I.props),fe=I.key,Ee=I.ref,Te=I._owner;if(G!=null){if(G.ref!==void 0&&(Ee=G.ref,Te=O.current),G.key!==void 0&&(fe=""+G.key),I.type&&I.type.defaultProps)var Ce=I.type.defaultProps;for(De in G)z.call(G,De)&&!F.hasOwnProperty(De)&&(te[De]=G[De]===void 0&&Ce!==void 0?Ce[De]:G[De])}var De=arguments.length-2;if(De===1)te.children=q;else if(1<De){Ce=Array(De);for(var Be=0;Be<De;Be++)Ce[Be]=arguments[Be+2];te.children=Ce}return{$$typeof:s,type:I.type,key:fe,ref:Ee,props:te,_owner:Te}},ht.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},ht.createElement=ce,ht.createFactory=function(I){var G=ce.bind(null,I);return G.type=I,G},ht.createRef=function(){return{current:null}},ht.forwardRef=function(I){return{$$typeof:u,render:I}},ht.isValidElement=D,ht.lazy=function(I){return{$$typeof:p,_payload:{_status:-1,_result:I},_init:oe}},ht.memo=function(I,G){return{$$typeof:h,type:I,compare:G===void 0?null:G}},ht.startTransition=function(I){var G=W.transition;W.transition={};try{I()}finally{W.transition=G}},ht.unstable_act=j,ht.useCallback=function(I,G){return le.current.useCallback(I,G)},ht.useContext=function(I){return le.current.useContext(I)},ht.useDebugValue=function(){},ht.useDeferredValue=function(I){return le.current.useDeferredValue(I)},ht.useEffect=function(I,G){return le.current.useEffect(I,G)},ht.useId=function(){return le.current.useId()},ht.useImperativeHandle=function(I,G,q){return le.current.useImperativeHandle(I,G,q)},ht.useInsertionEffect=function(I,G){return le.current.useInsertionEffect(I,G)},ht.useLayoutEffect=function(I,G){return le.current.useLayoutEffect(I,G)},ht.useMemo=function(I,G){return le.current.useMemo(I,G)},ht.useReducer=function(I,G,q){return le.current.useReducer(I,G,q)},ht.useRef=function(I){return le.current.useRef(I)},ht.useState=function(I){return le.current.useState(I)},ht.useSyncExternalStore=function(I,G,q){return le.current.useSyncExternalStore(I,G,q)},ht.useTransition=function(){return le.current.useTransition()},ht.version="18.3.1",ht}var im;function mf(){return im||(im=1,od.exports=K0()),od.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function $0(){if(rm)return ra;rm=1;var s=mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var p,m={},_=null,S=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:_,ref:S,props:m,_owner:o.current}}return ra.Fragment=t,ra.jsx=c,ra.jsxs=c,ra}var sm;function Z0(){return sm||(sm=1,sd.exports=$0()),sd.exports}var w=Z0(),ye=mf();const h_=f_(ye),Q0=Y0({__proto__:null,default:h_},[ye]);var Pl={},ad={exports:{}},kn={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function J0(){return om||(om=1,function(s){function e(W,Z){var j=W.length;W.push(Z);e:for(;0<j;){var I=j-1>>>1,G=W[I];if(0<o(G,Z))W[I]=Z,W[j]=G,j=I;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var Z=W[0],j=W.pop();if(j!==Z){W[0]=j;e:for(var I=0,G=W.length,q=G>>>1;I<q;){var te=2*(I+1)-1,fe=W[te],Ee=te+1,Te=W[Ee];if(0>o(fe,j))Ee<G&&0>o(Te,fe)?(W[I]=Te,W[Ee]=j,I=Ee):(W[I]=fe,W[te]=j,I=te);else if(Ee<G&&0>o(Te,j))W[I]=Te,W[Ee]=j,I=Ee;else break e}}return Z}function o(W,Z){var j=W.sortIndex-Z.sortIndex;return j!==0?j:W.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var f=[],h=[],p=1,m=null,_=3,S=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var Z=t(h);Z!==null;){if(Z.callback===null)i(h);else if(Z.startTime<=W)i(h),Z.sortIndex=Z.expirationTime,e(f,Z);else break;Z=t(h)}}function L(W){if(M=!1,A(W),!E)if(t(f)!==null)E=!0,oe(z);else{var Z=t(h);Z!==null&&le(L,Z.startTime-W)}}function z(W,Z){E=!1,M&&(M=!1,y(ce),ce=-1),S=!0;var j=_;try{for(A(Z),m=t(f);m!==null&&(!(m.expirationTime>Z)||W&&!ae());){var I=m.callback;if(typeof I=="function"){m.callback=null,_=m.priorityLevel;var G=I(m.expirationTime<=Z);Z=s.unstable_now(),typeof G=="function"?m.callback=G:m===t(f)&&i(f),A(Z)}else i(f);m=t(f)}if(m!==null)var q=!0;else{var te=t(h);te!==null&&le(L,te.startTime-Z),q=!1}return q}finally{m=null,_=j,S=!1}}var O=!1,F=null,ce=-1,R=5,D=-1;function ae(){return!(s.unstable_now()-D<R)}function ue(){if(F!==null){var W=s.unstable_now();D=W;var Z=!0;try{Z=F(!0,W)}finally{Z?_e():(O=!1,F=null)}}else O=!1}var _e;if(typeof C=="function")_e=function(){C(ue)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Q=V.port2;V.port1.onmessage=ue,_e=function(){Q.postMessage(null)}}else _e=function(){v(ue,0)};function oe(W){F=W,O||(O=!0,_e())}function le(W,Z){ce=v(function(){W(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(z))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(W){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var j=_;_=Z;try{return W()}finally{_=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,Z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=_;_=W;try{return Z()}finally{_=j}},s.unstable_scheduleCallback=function(W,Z,j){var I=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?I+j:I):j=I,W){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,W={id:p++,callback:Z,priorityLevel:W,startTime:j,expirationTime:G,sortIndex:-1},j>I?(W.sortIndex=j,e(h,W),t(f)===null&&W===t(h)&&(M?(y(ce),ce=-1):M=!0,le(L,j-I))):(W.sortIndex=G,e(f,W),E||S||(E=!0,oe(z))),W},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(W){var Z=_;return function(){var j=_;_=Z;try{return W.apply(this,arguments)}finally{_=j}}}}(cd)),cd}var am;function ex(){return am||(am=1,ld.exports=J0()),ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function tx(){if(lm)return kn;lm=1;var s=mf(),e=ex();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(n){return f.call(m,n)?!0:f.call(p,n)?!1:h.test(n)?m[n]=!0:(p[n]=!0,!1)}function S(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,d){if(r===null||typeof r>"u"||S(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,d,g,x,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];v[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,C);v[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,C);v[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,C);v[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,r,l,d){var g=v.hasOwnProperty(r)?v[r]:null;(g!==null?g.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,g,d)&&(l=null),d||g===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,d=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),ae=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),W=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,I;function G(n){if(I===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var q=!1;function te(n,r){if(!n||q)return"";q=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ee){var d=ee}Reflect.construct(n,[],r)}else{try{r.call()}catch(ee){d=ee}n.call(r.prototype)}else{try{throw Error()}catch(ee){d=ee}n()}}catch(ee){if(ee&&d&&typeof ee.stack=="string"){for(var g=ee.stack.split(`
`),x=d.stack.split(`
`),T=g.length-1,U=x.length-1;1<=T&&0<=U&&g[T]!==x[U];)U--;for(;1<=T&&0<=U;T--,U--)if(g[T]!==x[U]){if(T!==1||U!==1)do if(T--,U--,0>U||g[T]!==x[U]){var k=`
`+g[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=U);break}}}finally{q=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?G(n):""}function fe(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case R:return"Profiler";case ce:return"StrictMode";case _e:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ae:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case ue:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return r=n.displayName||null,r!==null?r:Ee(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Ee(n(r))}catch{}}return null}function Te(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(r);case 8:return r===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(n){var r=De(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(T){d=""+T,x.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ft(n){n._valueTracker||(n._valueTracker=Be(n))}function ne(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=De(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Kt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,r){var l=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function tt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function He(n,r){r=r.checked,r!=null&&A(n,"checked",r,!1)}function Lt(n,r){He(n,r);var l=Ce(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?N(n,r.type,l):r.hasOwnProperty("defaultValue")&&N(n,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function st(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function N(n,r,l){(r!=="number"||Kt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var b=Array.isArray;function J(n,r,l,d){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Ce(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,d&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function ve(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function me(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(b(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ce(l)}}function xe(n,r){var l=Ce(r.value),d=Ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Re(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xe,ot=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,g)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Xe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function pe(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dt=["Webkit","ms","Moz","O"];Object.keys(vt).forEach(function(n){dt.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),vt[r]=vt[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||vt.hasOwnProperty(n)&&vt[n]?(""+r).trim():r+"px"}function We(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,g=Je(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,g):n[l]=g}}var Oe=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(n,r){if(r){if(Oe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function yt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function at(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,B=null,we=null;function be(n){if(n=Go(n)){if(typeof Me!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Xa(r),Me(n.stateNode,n.type,r))}}function Ze(n){B?we?we.push(n):we=[n]:B=n}function qe(){if(B){var n=B,r=we;if(we=B=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function wt(n,r){return n(r)}function At(){}var Wt=!1;function an(n,r,l){if(Wt)return n(r,l);Wt=!0;try{return wt(n,r,l)}finally{Wt=!1,(B!==null||we!==null)&&(At(),qe())}}function Et(n,r){var l=n.stateNode;if(l===null)return null;var d=Xa(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Jt=!1;if(u)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Jt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Jt=!1}function wa(n,r,l,d,g,x,T,U,k){var ee=Array.prototype.slice.call(arguments,3);try{r.apply(l,ee)}catch(he){this.onError(he)}}var Fr=!1,Ci=null,Or=!1,er=null,Aa={onError:function(n){Fr=!0,Ci=n}};function ba(n,r,l,d,g,x,T,U,k){Fr=!1,Ci=null,wa.apply(Aa,arguments)}function bc(n,r,l,d,g,x,T,U,k){if(ba.apply(this,arguments),Fr){if(Fr){var ee=Ci;Fr=!1,Ci=null}else throw Error(t(198));Or||(Or=!0,er=ee)}}function Li(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ra(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function P(n){if(Li(n)!==n)throw Error(t(188))}function K(n){var r=n.alternate;if(!r){if(r=Li(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var g=l.return;if(g===null)break;var x=g.alternate;if(x===null){if(d=g.return,d!==null){l=d;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===l)return P(g),n;if(x===d)return P(g),r;x=x.sibling}throw Error(t(188))}if(l.return!==d.return)l=g,d=x;else{for(var T=!1,U=g.child;U;){if(U===l){T=!0,l=g,d=x;break}if(U===d){T=!0,d=g,l=x;break}U=U.sibling}if(!T){for(U=x.child;U;){if(U===l){T=!0,l=x,d=g;break}if(U===d){T=!0,d=x,l=g;break}U=U.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function re(n){return n=K(n),n!==null?se(n):null}function se(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=se(n);if(r!==null)return r;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,Le=e.unstable_cancelCallback,Ge=e.unstable_shouldYield,$e=e.unstable_requestPaint,Ne=e.unstable_now,lt=e.unstable_getCurrentPriorityLevel,et=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,It=e.unstable_NormalPriority,Tn=e.unstable_LowPriority,qt=e.unstable_IdlePriority,Pn=null,xt=null;function ct(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Pn,n,void 0,(n.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Ca,kt=Math.log,Pi=Math.LN2;function Ca(n){return n>>>=0,n===0?32:31-(kt(n)/Pi|0)|0}var vi=64,tr=4194304;function jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qn(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,g=n.suspendedLanes,x=n.pingedLanes,T=l&268435455;if(T!==0){var U=T&~g;U!==0?d=jt(U):(x&=T,x!==0&&(d=jt(x)))}else T=l&~g,T!==0?d=jt(T):x!==0&&(d=jt(x));if(d===0)return 0;if(r!==0&&r!==d&&(r&g)===0&&(g=d&-d,x=r&-r,g>=x||g===16&&(x&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-wn(r),g=1<<l,d|=n[l],r&=~g;return d}function wo(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nn(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,g=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-wn(x),U=1<<T,k=g[T];k===-1?((U&l)===0||(U&d)!==0)&&(g[T]=wo(U,r)):k<=r&&(n.expiredLanes|=U),x&=~U}}function kr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function La(){var n=vi;return vi<<=1,(vi&4194240)===0&&(vi=64),n}function vs(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Ao(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-wn(r),n[r]=l}function mv(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-wn(l),x=1<<g;r[g]=0,d[g]=-1,n[g]=-1,l&=~x}}function Rc(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-wn(l),g=1<<d;g&r|n[d]&r&&(n[d]|=r),l&=~g}}var bt=0;function Df(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Uf,Cc,Ff,Of,kf,Lc=!1,Pa=[],nr=null,ir=null,rr=null,bo=new Map,Ro=new Map,sr=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(n,r){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(r.pointerId)}}function Co(n,r,l,d,g,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:x,targetContainers:[g]},r!==null&&(r=Go(r),r!==null&&Cc(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function _v(n,r,l,d,g){switch(r){case"focusin":return nr=Co(nr,n,r,l,d,g),!0;case"dragenter":return ir=Co(ir,n,r,l,d,g),!0;case"mouseover":return rr=Co(rr,n,r,l,d,g),!0;case"pointerover":var x=g.pointerId;return bo.set(x,Co(bo.get(x)||null,n,r,l,d,g)),!0;case"gotpointercapture":return x=g.pointerId,Ro.set(x,Co(Ro.get(x)||null,n,r,l,d,g)),!0}return!1}function zf(n){var r=Br(n.target);if(r!==null){var l=Li(r);if(l!==null){if(r=l.tag,r===13){if(r=Ra(l),r!==null){n.blockedOn=r,kf(n.priority,function(){Ff(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Nc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Nt=d,l.target.dispatchEvent(d),Nt=null}else return r=Go(l),r!==null&&Cc(r),n.blockedOn=l,!1;r.shift()}return!0}function Hf(n,r,l){Na(n)&&l.delete(r)}function vv(){Lc=!1,nr!==null&&Na(nr)&&(nr=null),ir!==null&&Na(ir)&&(ir=null),rr!==null&&Na(rr)&&(rr=null),bo.forEach(Hf),Ro.forEach(Hf)}function Lo(n,r){n.blockedOn===r&&(n.blockedOn=null,Lc||(Lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vv)))}function Po(n){function r(g){return Lo(g,n)}if(0<Pa.length){Lo(Pa[0],n);for(var l=1;l<Pa.length;l++){var d=Pa[l];d.blockedOn===n&&(d.blockedOn=null)}}for(nr!==null&&Lo(nr,n),ir!==null&&Lo(ir,n),rr!==null&&Lo(rr,n),bo.forEach(r),Ro.forEach(r),l=0;l<sr.length;l++)d=sr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<sr.length&&(l=sr[0],l.blockedOn===null);)zf(l),l.blockedOn===null&&sr.shift()}var xs=L.ReactCurrentBatchConfig,Ia=!0;function xv(n,r,l,d){var g=bt,x=xs.transition;xs.transition=null;try{bt=1,Pc(n,r,l,d)}finally{bt=g,xs.transition=x}}function yv(n,r,l,d){var g=bt,x=xs.transition;xs.transition=null;try{bt=4,Pc(n,r,l,d)}finally{bt=g,xs.transition=x}}function Pc(n,r,l,d){if(Ia){var g=Nc(n,r,l,d);if(g===null)Kc(n,r,d,Da,l),Bf(n,d);else if(_v(g,n,r,l,d))d.stopPropagation();else if(Bf(n,d),r&4&&-1<gv.indexOf(n)){for(;g!==null;){var x=Go(g);if(x!==null&&Uf(x),x=Nc(n,r,l,d),x===null&&Kc(n,r,d,Da,l),x===g)break;g=x}g!==null&&d.stopPropagation()}else Kc(n,r,d,null,l)}}var Da=null;function Nc(n,r,l,d){if(Da=null,n=at(d),n=Br(n),n!==null)if(r=Li(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ra(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Da=n,null}function Vf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lt()){case et:return 1;case it:return 4;case It:case Tn:return 16;case qt:return 536870912;default:return 16}default:return 16}}var or=null,Ic=null,Ua=null;function Gf(){if(Ua)return Ua;var n,r=Ic,l=r.length,d,g="value"in or?or.value:or.textContent,x=g.length;for(n=0;n<l&&r[n]===g[n];n++);var T=l-n;for(d=1;d<=T&&r[l-d]===g[x-d];d++);return Ua=g.slice(n,1<d?1-d:void 0)}function Fa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Oa(){return!0}function Wf(){return!1}function Hn(n){function r(l,d,g,x,T){this._reactName=l,this._targetInst=g,this.type=d,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Oa:Wf,this.isPropagationStopped=Wf,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),r}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Hn(ys),No=j({},ys,{view:0,detail:0}),Sv=Hn(No),Uc,Fc,Io,ka=j({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Io&&(Io&&n.type==="mousemove"?(Uc=n.screenX-Io.screenX,Fc=n.screenY-Io.screenY):Fc=Uc=0,Io=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),jf=Hn(ka),Ev=j({},ka,{dataTransfer:0}),Mv=Hn(Ev),Tv=j({},No,{relatedTarget:0}),Oc=Hn(Tv),wv=j({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=Hn(wv),bv=j({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Rv=Hn(bv),Cv=j({},ys,{data:0}),Xf=Hn(Cv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Nv[n])?!!r[n]:!1}function kc(){return Iv}var Dv=j({},No,{key:function(n){if(n.key){var r=Lv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Uv=Hn(Dv),Fv=j({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=Hn(Fv),Ov=j({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),kv=Hn(Ov),Bv=j({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Hn(Bv),Hv=j({},ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Hn(Hv),Gv=[9,13,27,32],Bc=u&&"CompositionEvent"in window,Do=null;u&&"documentMode"in document&&(Do=document.documentMode);var Wv=u&&"TextEvent"in window&&!Do,Yf=u&&(!Bc||Do&&8<Do&&11>=Do),Kf=" ",$f=!1;function Zf(n,r){switch(n){case"keyup":return Gv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function jv(n,r){switch(n){case"compositionend":return Qf(r);case"keypress":return r.which!==32?null:($f=!0,Kf);case"textInput":return n=r.data,n===Kf&&$f?null:n;default:return null}}function Xv(n,r){if(Ss)return n==="compositionend"||!Bc&&Zf(n,r)?(n=Gf(),Ua=Ic=or=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Yf&&r.locale!=="ko"?null:r.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!qv[n.type]:r==="textarea"}function eh(n,r,l,d){Ze(d),r=Ga(r,"onChange"),0<r.length&&(l=new Dc("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Uo=null,Fo=null;function Yv(n){vh(n,0)}function Ba(n){var r=As(n);if(ne(r))return n}function Kv(n,r){if(n==="change")return r}var th=!1;if(u){var zc;if(u){var Hc="oninput"in document;if(!Hc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),Hc=typeof nh.oninput=="function"}zc=Hc}else zc=!1;th=zc&&(!document.documentMode||9<document.documentMode)}function ih(){Uo&&(Uo.detachEvent("onpropertychange",rh),Fo=Uo=null)}function rh(n){if(n.propertyName==="value"&&Ba(Fo)){var r=[];eh(r,Fo,n,at(n)),an(Yv,r)}}function $v(n,r,l){n==="focusin"?(ih(),Uo=r,Fo=l,Uo.attachEvent("onpropertychange",rh)):n==="focusout"&&ih()}function Zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ba(Fo)}function Qv(n,r){if(n==="click")return Ba(r)}function Jv(n,r){if(n==="input"||n==="change")return Ba(r)}function e0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ai=typeof Object.is=="function"?Object.is:e0;function Oo(n,r){if(ai(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var g=l[d];if(!f.call(r,g)||!ai(n[g],r[g]))return!1}return!0}function sh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function oh(n,r){var l=sh(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sh(l)}}function ah(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ah(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function lh(){for(var n=window,r=Kt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Kt(n.document)}return r}function Vc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function t0(n){var r=lh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&ah(l.ownerDocument.documentElement,l)){if(d!==null&&Vc(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,x=Math.min(d.start,g);d=d.end===void 0?x:Math.min(d.end,g),!n.extend&&x>d&&(g=d,d=x,x=g),g=oh(l,x);var T=oh(l,d);g&&T&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),x>d?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n0=u&&"documentMode"in document&&11>=document.documentMode,Es=null,Gc=null,ko=null,Wc=!1;function ch(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Wc||Es==null||Es!==Kt(d)||(d=Es,"selectionStart"in d&&Vc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ko&&Oo(ko,d)||(ko=d,d=Ga(Gc,"onSelect"),0<d.length&&(r=new Dc("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Es)))}function za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ms={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},jc={},uh={};u&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ha(n){if(jc[n])return jc[n];if(!Ms[n])return n;var r=Ms[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in uh)return jc[n]=r[l];return n}var dh=Ha("animationend"),fh=Ha("animationiteration"),hh=Ha("animationstart"),ph=Ha("transitionend"),mh=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,r){mh.set(n,r),a(r,[n])}for(var Xc=0;Xc<gh.length;Xc++){var qc=gh[Xc],i0=qc.toLowerCase(),r0=qc[0].toUpperCase()+qc.slice(1);ar(i0,"on"+r0)}ar(dh,"onAnimationEnd"),ar(fh,"onAnimationIteration"),ar(hh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(ph,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function _h(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,bc(d,r,void 0,n),n.currentTarget=null}function vh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],g=d.event;d=d.listeners;e:{var x=void 0;if(r)for(var T=d.length-1;0<=T;T--){var U=d[T],k=U.instance,ee=U.currentTarget;if(U=U.listener,k!==x&&g.isPropagationStopped())break e;_h(g,U,ee),x=k}else for(T=0;T<d.length;T++){if(U=d[T],k=U.instance,ee=U.currentTarget,U=U.listener,k!==x&&g.isPropagationStopped())break e;_h(g,U,ee),x=k}}}if(Or)throw n=er,Or=!1,er=null,n}function Ut(n,r){var l=r[tu];l===void 0&&(l=r[tu]=new Set);var d=n+"__bubble";l.has(d)||(xh(r,n,2,!1),l.add(d))}function Yc(n,r,l){var d=0;r&&(d|=4),xh(l,n,d,r)}var Va="_reactListening"+Math.random().toString(36).slice(2);function zo(n){if(!n[Va]){n[Va]=!0,i.forEach(function(l){l!=="selectionchange"&&(s0.has(l)||Yc(l,!1,n),Yc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Va]||(r[Va]=!0,Yc("selectionchange",!1,r))}}function xh(n,r,l,d){switch(Vf(r)){case 1:var g=xv;break;case 4:g=yv;break;default:g=Pc}l=g.bind(null,r,l,n),g=void 0,!Jt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),d?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function Kc(n,r,l,d,g){var x=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var U=d.stateNode.containerInfo;if(U===g||U.nodeType===8&&U.parentNode===g)break;if(T===4)for(T=d.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===g||k.nodeType===8&&k.parentNode===g))return;T=T.return}for(;U!==null;){if(T=Br(U),T===null)return;if(k=T.tag,k===5||k===6){d=x=T;continue e}U=U.parentNode}}d=d.return}an(function(){var ee=x,he=at(l),ge=[];e:{var de=mh.get(n);if(de!==void 0){var Pe=Dc,Fe=n;switch(n){case"keypress":if(Fa(l)===0)break e;case"keydown":case"keyup":Pe=Uv;break;case"focusin":Fe="focus",Pe=Oc;break;case"focusout":Fe="blur",Pe=Oc;break;case"beforeblur":case"afterblur":Pe=Oc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=kv;break;case dh:case fh:case hh:Pe=Av;break;case ph:Pe=zv;break;case"scroll":Pe=Sv;break;case"wheel":Pe=Vv;break;case"copy":case"cut":case"paste":Pe=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=qf}var ke=(r&4)!==0,Yt=!ke&&n==="scroll",Y=ke?de!==null?de+"Capture":null:de;ke=[];for(var H=ee,$;H!==null;){$=H;var Se=$.stateNode;if($.tag===5&&Se!==null&&($=Se,Y!==null&&(Se=Et(H,Y),Se!=null&&ke.push(Ho(H,Se,$)))),Yt)break;H=H.return}0<ke.length&&(de=new Pe(de,Fe,null,l,he),ge.push({event:de,listeners:ke}))}}if((r&7)===0){e:{if(de=n==="mouseover"||n==="pointerover",Pe=n==="mouseout"||n==="pointerout",de&&l!==Nt&&(Fe=l.relatedTarget||l.fromElement)&&(Br(Fe)||Fe[Ni]))break e;if((Pe||de)&&(de=he.window===he?he:(de=he.ownerDocument)?de.defaultView||de.parentWindow:window,Pe?(Fe=l.relatedTarget||l.toElement,Pe=ee,Fe=Fe?Br(Fe):null,Fe!==null&&(Yt=Li(Fe),Fe!==Yt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Pe=null,Fe=ee),Pe!==Fe)){if(ke=jf,Se="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(ke=qf,Se="onPointerLeave",Y="onPointerEnter",H="pointer"),Yt=Pe==null?de:As(Pe),$=Fe==null?de:As(Fe),de=new ke(Se,H+"leave",Pe,l,he),de.target=Yt,de.relatedTarget=$,Se=null,Br(he)===ee&&(ke=new ke(Y,H+"enter",Fe,l,he),ke.target=$,ke.relatedTarget=Yt,Se=ke),Yt=Se,Pe&&Fe)t:{for(ke=Pe,Y=Fe,H=0,$=ke;$;$=Ts($))H++;for($=0,Se=Y;Se;Se=Ts(Se))$++;for(;0<H-$;)ke=Ts(ke),H--;for(;0<$-H;)Y=Ts(Y),$--;for(;H--;){if(ke===Y||Y!==null&&ke===Y.alternate)break t;ke=Ts(ke),Y=Ts(Y)}ke=null}else ke=null;Pe!==null&&yh(ge,de,Pe,ke,!1),Fe!==null&&Yt!==null&&yh(ge,Yt,Fe,ke,!0)}}e:{if(de=ee?As(ee):window,Pe=de.nodeName&&de.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&de.type==="file")var ze=Kv;else if(Jf(de))if(th)ze=Jv;else{ze=Zv;var Ye=$v}else(Pe=de.nodeName)&&Pe.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(ze=Qv);if(ze&&(ze=ze(n,ee))){eh(ge,ze,l,he);break e}Ye&&Ye(n,de,ee),n==="focusout"&&(Ye=de._wrapperState)&&Ye.controlled&&de.type==="number"&&N(de,"number",de.value)}switch(Ye=ee?As(ee):window,n){case"focusin":(Jf(Ye)||Ye.contentEditable==="true")&&(Es=Ye,Gc=ee,ko=null);break;case"focusout":ko=Gc=Es=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,ch(ge,l,he);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":ch(ge,l,he)}var Ke;if(Bc)e:{switch(n){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Ss?Zf(n,l)&&(Qe="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Qe="onCompositionStart");Qe&&(Yf&&l.locale!=="ko"&&(Ss||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Ss&&(Ke=Gf()):(or=he,Ic="value"in or?or.value:or.textContent,Ss=!0)),Ye=Ga(ee,Qe),0<Ye.length&&(Qe=new Xf(Qe,n,null,l,he),ge.push({event:Qe,listeners:Ye}),Ke?Qe.data=Ke:(Ke=Qf(l),Ke!==null&&(Qe.data=Ke)))),(Ke=Wv?jv(n,l):Xv(n,l))&&(ee=Ga(ee,"onBeforeInput"),0<ee.length&&(he=new Xf("onBeforeInput","beforeinput",null,l,he),ge.push({event:he,listeners:ee}),he.data=Ke))}vh(ge,r)})}function Ho(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ga(n,r){for(var l=r+"Capture",d=[];n!==null;){var g=n,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Et(n,l),x!=null&&d.unshift(Ho(n,x,g)),x=Et(n,r),x!=null&&d.push(Ho(n,x,g))),n=n.return}return d}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yh(n,r,l,d,g){for(var x=r._reactName,T=[];l!==null&&l!==d;){var U=l,k=U.alternate,ee=U.stateNode;if(k!==null&&k===d)break;U.tag===5&&ee!==null&&(U=ee,g?(k=Et(l,x),k!=null&&T.unshift(Ho(l,k,U))):g||(k=Et(l,x),k!=null&&T.push(Ho(l,k,U)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function Sh(n){return(typeof n=="string"?n:""+n).replace(o0,`
`).replace(a0,"")}function Wa(n,r,l){if(r=Sh(r),Sh(n)!==r&&l)throw Error(t(425))}function ja(){}var $c=null,Zc=null;function Qc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,c0=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(u0)}:Jc;function u0(n){setTimeout(function(){throw n})}function eu(n,r){var l=r,d=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(d===0){n.removeChild(g),Po(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=g}while(l);Po(r)}function lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),xi="__reactFiber$"+ws,Vo="__reactProps$"+ws,Ni="__reactContainer$"+ws,tu="__reactEvents$"+ws,d0="__reactListeners$"+ws,f0="__reactHandles$"+ws;function Br(n){var r=n[xi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ni]||l[xi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Mh(n);n!==null;){if(l=n[xi])return l;n=Mh(n)}return r}n=l,l=n.parentNode}return null}function Go(n){return n=n[xi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xa(n){return n[Vo]||null}var nu=[],bs=-1;function cr(n){return{current:n}}function Ft(n){0>bs||(n.current=nu[bs],nu[bs]=null,bs--)}function Dt(n,r){bs++,nu[bs]=n.current,n.current=r}var ur={},_n=cr(ur),In=cr(!1),zr=ur;function Rs(n,r){var l=n.type.contextTypes;if(!l)return ur;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in l)g[x]=r[x];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function Dn(n){return n=n.childContextTypes,n!=null}function qa(){Ft(In),Ft(_n)}function Th(n,r,l){if(_n.current!==ur)throw Error(t(168));Dt(_n,r),Dt(In,l)}function wh(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var g in d)if(!(g in r))throw Error(t(108,Te(n)||"Unknown",g));return j({},l,d)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,zr=_n.current,Dt(_n,n),Dt(In,In.current),!0}function Ah(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=wh(n,r,zr),d.__reactInternalMemoizedMergedChildContext=n,Ft(In),Ft(_n),Dt(_n,n)):Ft(In),Dt(In,l)}var Ii=null,Ka=!1,iu=!1;function bh(n){Ii===null?Ii=[n]:Ii.push(n)}function h0(n){Ka=!0,bh(n)}function dr(){if(!iu&&Ii!==null){iu=!0;var n=0,r=bt;try{var l=Ii;for(bt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Ii=null,Ka=!1}catch(g){throw Ii!==null&&(Ii=Ii.slice(n+1)),ie(et,dr),g}finally{bt=r,iu=!1}}return null}var Cs=[],Ls=0,$a=null,Za=0,Yn=[],Kn=0,Hr=null,Di=1,Ui="";function Vr(n,r){Cs[Ls++]=Za,Cs[Ls++]=$a,$a=n,Za=r}function Rh(n,r,l){Yn[Kn++]=Di,Yn[Kn++]=Ui,Yn[Kn++]=Hr,Hr=n;var d=Di;n=Ui;var g=32-wn(d)-1;d&=~(1<<g),l+=1;var x=32-wn(r)+g;if(30<x){var T=g-g%5;x=(d&(1<<T)-1).toString(32),d>>=T,g-=T,Di=1<<32-wn(r)+g|l<<g|d,Ui=x+n}else Di=1<<x|l<<g|d,Ui=n}function ru(n){n.return!==null&&(Vr(n,1),Rh(n,1,0))}function su(n){for(;n===$a;)$a=Cs[--Ls],Cs[Ls]=null,Za=Cs[--Ls],Cs[Ls]=null;for(;n===Hr;)Hr=Yn[--Kn],Yn[Kn]=null,Ui=Yn[--Kn],Yn[Kn]=null,Di=Yn[--Kn],Yn[Kn]=null}var Vn=null,Gn=null,Bt=!1,li=null;function Ch(n,r){var l=Jn(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Lh(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Vn=n,Gn=lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Vn=n,Gn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Hr!==null?{id:Di,overflow:Ui}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Jn(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Vn=n,Gn=null,!0):!1;default:return!1}}function ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function au(n){if(Bt){var r=Gn;if(r){var l=r;if(!Lh(n,r)){if(ou(n))throw Error(t(418));r=lr(l.nextSibling);var d=Vn;r&&Lh(n,r)?Ch(d,l):(n.flags=n.flags&-4097|2,Bt=!1,Vn=n)}}else{if(ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Vn=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Qa(n){if(n!==Vn)return!1;if(!Bt)return Ph(n),Bt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Qc(n.type,n.memoizedProps)),r&&(r=Gn)){if(ou(n))throw Nh(),Error(t(418));for(;r;)Ch(n,r),r=lr(r.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Gn=lr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Gn=null}}else Gn=Vn?lr(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=Gn;n;)n=lr(n.nextSibling)}function Ps(){Gn=Vn=null,Bt=!1}function lu(n){li===null?li=[n]:li.push(n)}var p0=L.ReactCurrentBatchConfig;function Wo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var g=d,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(T){var U=g.refs;T===null?delete U[x]:U[x]=T},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ja(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ih(n){var r=n._init;return r(n._payload)}function Dh(n){function r(Y,H){if(n){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function l(Y,H){if(!n)return null;for(;H!==null;)r(Y,H),H=H.sibling;return null}function d(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function g(Y,H){return Y=xr(Y,H),Y.index=0,Y.sibling=null,Y}function x(Y,H,$){return Y.index=$,n?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,H,$,Se){return H===null||H.tag!==6?(H=Ju($,Y.mode,Se),H.return=Y,H):(H=g(H,$),H.return=Y,H)}function k(Y,H,$,Se){var ze=$.type;return ze===F?he(Y,H,$.props.children,Se,$.key):H!==null&&(H.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&Ih(ze)===H.type)?(Se=g(H,$.props),Se.ref=Wo(Y,H,$),Se.return=Y,Se):(Se=Ml($.type,$.key,$.props,null,Y.mode,Se),Se.ref=Wo(Y,H,$),Se.return=Y,Se)}function ee(Y,H,$,Se){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=ed($,Y.mode,Se),H.return=Y,H):(H=g(H,$.children||[]),H.return=Y,H)}function he(Y,H,$,Se,ze){return H===null||H.tag!==7?(H=$r($,Y.mode,Se,ze),H.return=Y,H):(H=g(H,$),H.return=Y,H)}function ge(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Ju(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case z:return $=Ml(H.type,H.key,H.props,null,Y.mode,$),$.ref=Wo(Y,null,H),$.return=Y,$;case O:return H=ed(H,Y.mode,$),H.return=Y,H;case oe:var Se=H._init;return ge(Y,Se(H._payload),$)}if(b(H)||Z(H))return H=$r(H,Y.mode,$,null),H.return=Y,H;Ja(Y,H)}return null}function de(Y,H,$,Se){var ze=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return ze!==null?null:U(Y,H,""+$,Se);if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return $.key===ze?k(Y,H,$,Se):null;case O:return $.key===ze?ee(Y,H,$,Se):null;case oe:return ze=$._init,de(Y,H,ze($._payload),Se)}if(b($)||Z($))return ze!==null?null:he(Y,H,$,Se,null);Ja(Y,$)}return null}function Pe(Y,H,$,Se,ze){if(typeof Se=="string"&&Se!==""||typeof Se=="number")return Y=Y.get($)||null,U(H,Y,""+Se,ze);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case z:return Y=Y.get(Se.key===null?$:Se.key)||null,k(H,Y,Se,ze);case O:return Y=Y.get(Se.key===null?$:Se.key)||null,ee(H,Y,Se,ze);case oe:var Ye=Se._init;return Pe(Y,H,$,Ye(Se._payload),ze)}if(b(Se)||Z(Se))return Y=Y.get($)||null,he(H,Y,Se,ze,null);Ja(H,Se)}return null}function Fe(Y,H,$,Se){for(var ze=null,Ye=null,Ke=H,Qe=H=0,un=null;Ke!==null&&Qe<$.length;Qe++){Ke.index>Qe?(un=Ke,Ke=null):un=Ke.sibling;var Mt=de(Y,Ke,$[Qe],Se);if(Mt===null){Ke===null&&(Ke=un);break}n&&Ke&&Mt.alternate===null&&r(Y,Ke),H=x(Mt,H,Qe),Ye===null?ze=Mt:Ye.sibling=Mt,Ye=Mt,Ke=un}if(Qe===$.length)return l(Y,Ke),Bt&&Vr(Y,Qe),ze;if(Ke===null){for(;Qe<$.length;Qe++)Ke=ge(Y,$[Qe],Se),Ke!==null&&(H=x(Ke,H,Qe),Ye===null?ze=Ke:Ye.sibling=Ke,Ye=Ke);return Bt&&Vr(Y,Qe),ze}for(Ke=d(Y,Ke);Qe<$.length;Qe++)un=Pe(Ke,Y,Qe,$[Qe],Se),un!==null&&(n&&un.alternate!==null&&Ke.delete(un.key===null?Qe:un.key),H=x(un,H,Qe),Ye===null?ze=un:Ye.sibling=un,Ye=un);return n&&Ke.forEach(function(yr){return r(Y,yr)}),Bt&&Vr(Y,Qe),ze}function ke(Y,H,$,Se){var ze=Z($);if(typeof ze!="function")throw Error(t(150));if($=ze.call($),$==null)throw Error(t(151));for(var Ye=ze=null,Ke=H,Qe=H=0,un=null,Mt=$.next();Ke!==null&&!Mt.done;Qe++,Mt=$.next()){Ke.index>Qe?(un=Ke,Ke=null):un=Ke.sibling;var yr=de(Y,Ke,Mt.value,Se);if(yr===null){Ke===null&&(Ke=un);break}n&&Ke&&yr.alternate===null&&r(Y,Ke),H=x(yr,H,Qe),Ye===null?ze=yr:Ye.sibling=yr,Ye=yr,Ke=un}if(Mt.done)return l(Y,Ke),Bt&&Vr(Y,Qe),ze;if(Ke===null){for(;!Mt.done;Qe++,Mt=$.next())Mt=ge(Y,Mt.value,Se),Mt!==null&&(H=x(Mt,H,Qe),Ye===null?ze=Mt:Ye.sibling=Mt,Ye=Mt);return Bt&&Vr(Y,Qe),ze}for(Ke=d(Y,Ke);!Mt.done;Qe++,Mt=$.next())Mt=Pe(Ke,Y,Qe,Mt.value,Se),Mt!==null&&(n&&Mt.alternate!==null&&Ke.delete(Mt.key===null?Qe:Mt.key),H=x(Mt,H,Qe),Ye===null?ze=Mt:Ye.sibling=Mt,Ye=Mt);return n&&Ke.forEach(function(q0){return r(Y,q0)}),Bt&&Vr(Y,Qe),ze}function Yt(Y,H,$,Se){if(typeof $=="object"&&$!==null&&$.type===F&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case z:e:{for(var ze=$.key,Ye=H;Ye!==null;){if(Ye.key===ze){if(ze=$.type,ze===F){if(Ye.tag===7){l(Y,Ye.sibling),H=g(Ye,$.props.children),H.return=Y,Y=H;break e}}else if(Ye.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===oe&&Ih(ze)===Ye.type){l(Y,Ye.sibling),H=g(Ye,$.props),H.ref=Wo(Y,Ye,$),H.return=Y,Y=H;break e}l(Y,Ye);break}else r(Y,Ye);Ye=Ye.sibling}$.type===F?(H=$r($.props.children,Y.mode,Se,$.key),H.return=Y,Y=H):(Se=Ml($.type,$.key,$.props,null,Y.mode,Se),Se.ref=Wo(Y,H,$),Se.return=Y,Y=Se)}return T(Y);case O:e:{for(Ye=$.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){l(Y,H.sibling),H=g(H,$.children||[]),H.return=Y,Y=H;break e}else{l(Y,H);break}else r(Y,H);H=H.sibling}H=ed($,Y.mode,Se),H.return=Y,Y=H}return T(Y);case oe:return Ye=$._init,Yt(Y,H,Ye($._payload),Se)}if(b($))return Fe(Y,H,$,Se);if(Z($))return ke(Y,H,$,Se);Ja(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(l(Y,H.sibling),H=g(H,$),H.return=Y,Y=H):(l(Y,H),H=Ju($,Y.mode,Se),H.return=Y,Y=H),T(Y)):l(Y,H)}return Yt}var Ns=Dh(!0),Uh=Dh(!1),el=cr(null),tl=null,Is=null,cu=null;function uu(){cu=Is=tl=null}function du(n){var r=el.current;Ft(el),n._currentValue=r}function fu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function Ds(n,r){tl=n,cu=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Un=!0),n.firstContext=null)}function $n(n){var r=n._currentValue;if(cu!==n)if(n={context:n,memoizedValue:r,next:null},Is===null){if(tl===null)throw Error(t(308));Is=n,tl.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return r}var Gr=null;function hu(n){Gr===null?Gr=[n]:Gr.push(n)}function Fh(n,r,l,d){var g=r.interleaved;return g===null?(l.next=l,hu(r)):(l.next=g.next,g.next=l),r.interleaved=l,Fi(n,d)}function Fi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var fr=!1;function pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(St&2)!==0){var g=d.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),d.pending=r,Fi(n,l)}return g=d.interleaved,g===null?(r.next=r,hu(d)):(r.next=g.next,g.next=r),d.interleaved=r,Fi(n,l)}function nl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Rc(n,l)}}function kh(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var g=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?g=x=T:x=x.next=T,l=l.next}while(l!==null);x===null?g=x=r:x=x.next=r}else g=x=r;l={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function il(n,r,l,d){var g=n.updateQueue;fr=!1;var x=g.firstBaseUpdate,T=g.lastBaseUpdate,U=g.shared.pending;if(U!==null){g.shared.pending=null;var k=U,ee=k.next;k.next=null,T===null?x=ee:T.next=ee,T=k;var he=n.alternate;he!==null&&(he=he.updateQueue,U=he.lastBaseUpdate,U!==T&&(U===null?he.firstBaseUpdate=ee:U.next=ee,he.lastBaseUpdate=k))}if(x!==null){var ge=g.baseState;T=0,he=ee=k=null,U=x;do{var de=U.lane,Pe=U.eventTime;if((d&de)===de){he!==null&&(he=he.next={eventTime:Pe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Fe=n,ke=U;switch(de=r,Pe=l,ke.tag){case 1:if(Fe=ke.payload,typeof Fe=="function"){ge=Fe.call(Pe,ge,de);break e}ge=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=ke.payload,de=typeof Fe=="function"?Fe.call(Pe,ge,de):Fe,de==null)break e;ge=j({},ge,de);break e;case 2:fr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,de=g.effects,de===null?g.effects=[U]:de.push(U))}else Pe={eventTime:Pe,lane:de,tag:U.tag,payload:U.payload,callback:U.callback,next:null},he===null?(ee=he=Pe,k=ge):he=he.next=Pe,T|=de;if(U=U.next,U===null){if(U=g.shared.pending,U===null)break;de=U,U=de.next,de.next=null,g.lastBaseUpdate=de,g.shared.pending=null}}while(!0);if(he===null&&(k=ge),g.baseState=k,g.firstBaseUpdate=ee,g.lastBaseUpdate=he,r=g.shared.interleaved,r!==null){g=r;do T|=g.lane,g=g.next;while(g!==r)}else x===null&&(g.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=ge}}function Bh(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],g=d.callback;if(g!==null){if(d.callback=null,d=l,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var jo={},yi=cr(jo),Xo=cr(jo),qo=cr(jo);function Wr(n){if(n===jo)throw Error(t(174));return n}function mu(n,r){switch(Dt(qo,r),Dt(Xo,n),Dt(yi,jo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ue(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ue(r,n)}Ft(yi),Dt(yi,r)}function Us(){Ft(yi),Ft(Xo),Ft(qo)}function zh(n){Wr(qo.current);var r=Wr(yi.current),l=Ue(r,n.type);r!==l&&(Dt(Xo,n),Dt(yi,l))}function gu(n){Xo.current===n&&(Ft(yi),Ft(Xo))}var Ht=cr(0);function rl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var _u=[];function vu(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var sl=L.ReactCurrentDispatcher,xu=L.ReactCurrentBatchConfig,jr=0,Vt=null,en=null,ln=null,ol=!1,Yo=!1,Ko=0,m0=0;function vn(){throw Error(t(321))}function yu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ai(n[l],r[l]))return!1;return!0}function Su(n,r,l,d,g,x){if(jr=x,Vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,sl.current=n===null||n.memoizedState===null?x0:y0,n=l(d,g),Yo){x=0;do{if(Yo=!1,Ko=0,25<=x)throw Error(t(301));x+=1,ln=en=null,r.updateQueue=null,sl.current=S0,n=l(d,g)}while(Yo)}if(sl.current=cl,r=en!==null&&en.next!==null,jr=0,ln=en=Vt=null,ol=!1,r)throw Error(t(300));return n}function Eu(){var n=Ko!==0;return Ko=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Vt.memoizedState=ln=n:ln=ln.next=n,ln}function Zn(){if(en===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var r=ln===null?Vt.memoizedState:ln.next;if(r!==null)ln=r,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},ln===null?Vt.memoizedState=ln=n:ln=ln.next=n}return ln}function $o(n,r){return typeof r=="function"?r(n):r}function Mu(n){var r=Zn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=en,g=d.baseQueue,x=l.pending;if(x!==null){if(g!==null){var T=g.next;g.next=x.next,x.next=T}d.baseQueue=g=x,l.pending=null}if(g!==null){x=g.next,d=d.baseState;var U=T=null,k=null,ee=x;do{var he=ee.lane;if((jr&he)===he)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),d=ee.hasEagerState?ee.eagerState:n(d,ee.action);else{var ge={lane:he,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(U=k=ge,T=d):k=k.next=ge,Vt.lanes|=he,Xr|=he}ee=ee.next}while(ee!==null&&ee!==x);k===null?T=d:k.next=U,ai(d,r.memoizedState)||(Un=!0),r.memoizedState=d,r.baseState=T,r.baseQueue=k,l.lastRenderedState=d}if(n=l.interleaved,n!==null){g=n;do x=g.lane,Vt.lanes|=x,Xr|=x,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Tu(n){var r=Zn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,g=l.pending,x=r.memoizedState;if(g!==null){l.pending=null;var T=g=g.next;do x=n(x,T.action),T=T.next;while(T!==g);ai(x,r.memoizedState)||(Un=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,d]}function Hh(){}function Vh(n,r){var l=Vt,d=Zn(),g=r(),x=!ai(d.memoizedState,g);if(x&&(d.memoizedState=g,Un=!0),d=d.queue,wu(jh.bind(null,l,d,n),[n]),d.getSnapshot!==r||x||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,Zo(9,Wh.bind(null,l,d,g,r),void 0,null),cn===null)throw Error(t(349));(jr&30)!==0||Gh(l,r,g)}return g}function Gh(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Wh(n,r,l,d){r.value=l,r.getSnapshot=d,Xh(r)&&qh(n)}function jh(n,r,l){return l(function(){Xh(r)&&qh(n)})}function Xh(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ai(n,l)}catch{return!0}}function qh(n){var r=Fi(n,1);r!==null&&fi(r,n,1,-1)}function Yh(n){var r=Si();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:n},r.queue=n,n=n.dispatch=v0.bind(null,Vt,n),[r.memoizedState,n]}function Zo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Vt.updateQueue,r===null?(r={lastEffect:null,stores:null},Vt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function Kh(){return Zn().memoizedState}function al(n,r,l,d){var g=Si();Vt.flags|=n,g.memoizedState=Zo(1|r,l,void 0,d===void 0?null:d)}function ll(n,r,l,d){var g=Zn();d=d===void 0?null:d;var x=void 0;if(en!==null){var T=en.memoizedState;if(x=T.destroy,d!==null&&yu(d,T.deps)){g.memoizedState=Zo(r,l,x,d);return}}Vt.flags|=n,g.memoizedState=Zo(1|r,l,x,d)}function $h(n,r){return al(8390656,8,n,r)}function wu(n,r){return ll(2048,8,n,r)}function Zh(n,r){return ll(4,2,n,r)}function Qh(n,r){return ll(4,4,n,r)}function Jh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function ep(n,r,l){return l=l!=null?l.concat([n]):null,ll(4,4,Jh.bind(null,r,n),l)}function Au(){}function tp(n,r){var l=Zn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&yu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function np(n,r){var l=Zn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&yu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function ip(n,r,l){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=l):(ai(l,r)||(l=La(),Vt.lanes|=l,Xr|=l,n.baseState=!0),r)}function g0(n,r){var l=bt;bt=l!==0&&4>l?l:4,n(!0);var d=xu.transition;xu.transition={};try{n(!1),r()}finally{bt=l,xu.transition=d}}function rp(){return Zn().memoizedState}function _0(n,r,l){var d=_r(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},sp(n))op(r,l);else if(l=Fh(n,r,l,d),l!==null){var g=bn();fi(l,n,d,g),ap(l,r,d)}}function v0(n,r,l){var d=_r(n),g={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(sp(n))op(r,g);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var T=r.lastRenderedState,U=x(T,l);if(g.hasEagerState=!0,g.eagerState=U,ai(U,T)){var k=r.interleaved;k===null?(g.next=g,hu(r)):(g.next=k.next,k.next=g),r.interleaved=g;return}}catch{}finally{}l=Fh(n,r,g,d),l!==null&&(g=bn(),fi(l,n,d,g),ap(l,r,d))}}function sp(n){var r=n.alternate;return n===Vt||r!==null&&r===Vt}function op(n,r){Yo=ol=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function ap(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Rc(n,l)}}var cl={readContext:$n,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},x0={readContext:$n,useCallback:function(n,r){return Si().memoizedState=[n,r===void 0?null:r],n},useContext:$n,useEffect:$h,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,al(4194308,4,Jh.bind(null,r,n),l)},useLayoutEffect:function(n,r){return al(4194308,4,n,r)},useInsertionEffect:function(n,r){return al(4,2,n,r)},useMemo:function(n,r){var l=Si();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Si();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=_0.bind(null,Vt,n),[d.memoizedState,n]},useRef:function(n){var r=Si();return n={current:n},r.memoizedState=n},useState:Yh,useDebugValue:Au,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Yh(!1),r=n[0];return n=g0.bind(null,n[1]),Si().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Vt,g=Si();if(Bt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),cn===null)throw Error(t(349));(jr&30)!==0||Gh(d,r,l)}g.memoizedState=l;var x={value:l,getSnapshot:r};return g.queue=x,$h(jh.bind(null,d,x,n),[n]),d.flags|=2048,Zo(9,Wh.bind(null,d,x,l,r),void 0,null),l},useId:function(){var n=Si(),r=cn.identifierPrefix;if(Bt){var l=Ui,d=Di;l=(d&~(1<<32-wn(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=Ko++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=m0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},y0={readContext:$n,useCallback:tp,useContext:$n,useEffect:wu,useImperativeHandle:ep,useInsertionEffect:Zh,useLayoutEffect:Qh,useMemo:np,useReducer:Mu,useRef:Kh,useState:function(){return Mu($o)},useDebugValue:Au,useDeferredValue:function(n){var r=Zn();return ip(r,en.memoizedState,n)},useTransition:function(){var n=Mu($o)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:rp,unstable_isNewReconciler:!1},S0={readContext:$n,useCallback:tp,useContext:$n,useEffect:wu,useImperativeHandle:ep,useInsertionEffect:Zh,useLayoutEffect:Qh,useMemo:np,useReducer:Tu,useRef:Kh,useState:function(){return Tu($o)},useDebugValue:Au,useDeferredValue:function(n){var r=Zn();return en===null?r.memoizedState=n:ip(r,en.memoizedState,n)},useTransition:function(){var n=Tu($o)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:rp,unstable_isNewReconciler:!1};function ci(n,r){if(n&&n.defaultProps){r=j({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function bu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:j({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ul={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=bn(),g=_r(n),x=Oi(d,g);x.payload=r,l!=null&&(x.callback=l),r=hr(n,x,g),r!==null&&(fi(r,n,g,d),nl(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=bn(),g=_r(n),x=Oi(d,g);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=hr(n,x,g),r!==null&&(fi(r,n,g,d),nl(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=bn(),d=_r(n),g=Oi(l,d);g.tag=2,r!=null&&(g.callback=r),r=hr(n,g,d),r!==null&&(fi(r,n,d,l),nl(r,n,d))}};function lp(n,r,l,d,g,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,x,T):r.prototype&&r.prototype.isPureReactComponent?!Oo(l,d)||!Oo(g,x):!0}function cp(n,r,l){var d=!1,g=ur,x=r.contextType;return typeof x=="object"&&x!==null?x=$n(x):(g=Dn(r)?zr:_n.current,d=r.contextTypes,x=(d=d!=null)?Rs(n,g):ur),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ul,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=x),r}function up(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&ul.enqueueReplaceState(r,r.state,null)}function Ru(n,r,l,d){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},pu(n);var x=r.contextType;typeof x=="object"&&x!==null?g.context=$n(x):(x=Dn(r)?zr:_n.current,g.context=Rs(n,x)),g.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(bu(n,r,x,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&ul.enqueueReplaceState(g,g.state,null),il(n,l,g,d),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,r){try{var l="",d=r;do l+=fe(d),d=d.return;while(d);var g=l}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:g,digest:null}}function Cu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Lu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function dp(n,r,l){l=Oi(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){_l||(_l=!0,ju=d),Lu(n,r)},l}function fp(n,r,l){l=Oi(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var g=r.value;l.payload=function(){return d(g)},l.callback=function(){Lu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Lu(n,r),typeof d!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function hp(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new E0;var g=new Set;d.set(r,g)}else g=d.get(r),g===void 0&&(g=new Set,d.set(r,g));g.has(l)||(g.add(l),n=F0.bind(null,n,r,l),r.then(n,n))}function pp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function mp(n,r,l,d,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Oi(-1,1),r.tag=2,hr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var M0=L.ReactCurrentOwner,Un=!1;function An(n,r,l,d){r.child=n===null?Uh(r,null,l,d):Ns(r,n.child,l,d)}function gp(n,r,l,d,g){l=l.render;var x=r.ref;return Ds(r,g),d=Su(n,r,l,d,x,g),l=Eu(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,ki(n,r,g)):(Bt&&l&&ru(r),r.flags|=1,An(n,r,d,g),r.child)}function _p(n,r,l,d,g){if(n===null){var x=l.type;return typeof x=="function"&&!Qu(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,vp(n,r,x,d,g)):(n=Ml(l.type,null,d,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&g)===0){var T=x.memoizedProps;if(l=l.compare,l=l!==null?l:Oo,l(T,d)&&n.ref===r.ref)return ki(n,r,g)}return r.flags|=1,n=xr(x,d),n.ref=r.ref,n.return=r,r.child=n}function vp(n,r,l,d,g){if(n!==null){var x=n.memoizedProps;if(Oo(x,d)&&n.ref===r.ref)if(Un=!1,r.pendingProps=d=x,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Un=!0);else return r.lanes=n.lanes,ki(n,r,g)}return Pu(n,r,l,d,g)}function xp(n,r,l){var d=r.pendingProps,g=d.children,x=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(ks,Wn),Wn|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Dt(ks,Wn),Wn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:l,Dt(ks,Wn),Wn|=d}else x!==null?(d=x.baseLanes|l,r.memoizedState=null):d=l,Dt(ks,Wn),Wn|=d;return An(n,r,g,l),r.child}function yp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Pu(n,r,l,d,g){var x=Dn(l)?zr:_n.current;return x=Rs(r,x),Ds(r,g),l=Su(n,r,l,d,x,g),d=Eu(),n!==null&&!Un?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,ki(n,r,g)):(Bt&&d&&ru(r),r.flags|=1,An(n,r,l,g),r.child)}function Sp(n,r,l,d,g){if(Dn(l)){var x=!0;Ya(r)}else x=!1;if(Ds(r,g),r.stateNode===null)fl(n,r),cp(r,l,d),Ru(r,l,d,g),d=!0;else if(n===null){var T=r.stateNode,U=r.memoizedProps;T.props=U;var k=T.context,ee=l.contextType;typeof ee=="object"&&ee!==null?ee=$n(ee):(ee=Dn(l)?zr:_n.current,ee=Rs(r,ee));var he=l.getDerivedStateFromProps,ge=typeof he=="function"||typeof T.getSnapshotBeforeUpdate=="function";ge||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==d||k!==ee)&&up(r,T,d,ee),fr=!1;var de=r.memoizedState;T.state=de,il(r,d,T,g),k=r.memoizedState,U!==d||de!==k||In.current||fr?(typeof he=="function"&&(bu(r,l,he,d),k=r.memoizedState),(U=fr||lp(r,l,U,d,de,k,ee))?(ge||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=k),T.props=d,T.state=k,T.context=ee,d=U):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{T=r.stateNode,Oh(n,r),U=r.memoizedProps,ee=r.type===r.elementType?U:ci(r.type,U),T.props=ee,ge=r.pendingProps,de=T.context,k=l.contextType,typeof k=="object"&&k!==null?k=$n(k):(k=Dn(l)?zr:_n.current,k=Rs(r,k));var Pe=l.getDerivedStateFromProps;(he=typeof Pe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==ge||de!==k)&&up(r,T,d,k),fr=!1,de=r.memoizedState,T.state=de,il(r,d,T,g);var Fe=r.memoizedState;U!==ge||de!==Fe||In.current||fr?(typeof Pe=="function"&&(bu(r,l,Pe,d),Fe=r.memoizedState),(ee=fr||lp(r,l,ee,d,de,Fe,k)||!1)?(he||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,Fe,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,Fe,k)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&de===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&de===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Fe),T.props=d,T.state=Fe,T.context=k,d=ee):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&de===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&de===n.memoizedState||(r.flags|=1024),d=!1)}return Nu(n,r,l,d,x,g)}function Nu(n,r,l,d,g,x){yp(n,r);var T=(r.flags&128)!==0;if(!d&&!T)return g&&Ah(r,l,!1),ki(n,r,x);d=r.stateNode,M0.current=r;var U=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&T?(r.child=Ns(r,n.child,null,x),r.child=Ns(r,null,U,x)):An(n,r,U,x),r.memoizedState=d.state,g&&Ah(r,l,!0),r.child}function Ep(n){var r=n.stateNode;r.pendingContext?Th(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Th(n,r.context,!1),mu(n,r.containerInfo)}function Mp(n,r,l,d,g){return Ps(),lu(g),r.flags|=256,An(n,r,l,d),r.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,r,l){var d=r.pendingProps,g=Ht.current,x=!1,T=(r.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(g&2)!==0),U?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),Dt(Ht,g&1),n===null)return au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=d.children,n=d.fallback,x?(d=r.mode,x=r.child,T={mode:"hidden",children:T},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Tl(T,d,0,null),n=$r(n,d,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Du(l),r.memoizedState=Iu,n):Uu(r,T));if(g=n.memoizedState,g!==null&&(U=g.dehydrated,U!==null))return T0(n,r,T,d,U,g,l);if(x){x=d.fallback,T=r.mode,g=n.child,U=g.sibling;var k={mode:"hidden",children:d.children};return(T&1)===0&&r.child!==g?(d=r.child,d.childLanes=0,d.pendingProps=k,r.deletions=null):(d=xr(g,k),d.subtreeFlags=g.subtreeFlags&14680064),U!==null?x=xr(U,x):(x=$r(x,T,l,null),x.flags|=2),x.return=r,d.return=r,d.sibling=x,r.child=d,d=x,x=r.child,T=n.child.memoizedState,T=T===null?Du(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~l,r.memoizedState=Iu,d}return x=n.child,n=x.sibling,d=xr(x,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Uu(n,r){return r=Tl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function dl(n,r,l,d){return d!==null&&lu(d),Ns(r,n.child,null,l),n=Uu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function T0(n,r,l,d,g,x,T){if(l)return r.flags&256?(r.flags&=-257,d=Cu(Error(t(422))),dl(n,r,T,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=d.fallback,g=r.mode,d=Tl({mode:"visible",children:d.children},g,0,null),x=$r(x,g,T,null),x.flags|=2,d.return=r,x.return=r,d.sibling=x,r.child=d,(r.mode&1)!==0&&Ns(r,n.child,null,T),r.child.memoizedState=Du(T),r.memoizedState=Iu,x);if((r.mode&1)===0)return dl(n,r,T,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var U=d.dgst;return d=U,x=Error(t(419)),d=Cu(x,d,void 0),dl(n,r,T,d)}if(U=(T&n.childLanes)!==0,Un||U){if(d=cn,d!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|T))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Fi(n,g),fi(d,n,g,-1))}return Zu(),d=Cu(Error(t(421))),dl(n,r,T,d)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=O0.bind(null,n),g._reactRetry=r,null):(n=x.treeContext,Gn=lr(g.nextSibling),Vn=r,Bt=!0,li=null,n!==null&&(Yn[Kn++]=Di,Yn[Kn++]=Ui,Yn[Kn++]=Hr,Di=n.id,Ui=n.overflow,Hr=r),r=Uu(r,d.children),r.flags|=4096,r)}function wp(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),fu(n.return,r,l)}function Fu(n,r,l,d,g){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:g}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=l,x.tailMode=g)}function Ap(n,r,l){var d=r.pendingProps,g=d.revealOrder,x=d.tail;if(An(n,r,d.children,l),d=Ht.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,l,r);else if(n.tag===19)wp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Dt(Ht,d),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&rl(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),Fu(r,!1,g,l,x);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&rl(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Fu(r,!0,l,null,x);break;case"together":Fu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ki(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Xr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=xr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=xr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function w0(n,r,l){switch(r.tag){case 3:Ep(r),Ps();break;case 5:zh(r);break;case 1:Dn(r.type)&&Ya(r);break;case 4:mu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,g=r.memoizedProps.value;Dt(el,d._currentValue),d._currentValue=g;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Dt(Ht,Ht.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Tp(n,r,l):(Dt(Ht,Ht.current&1),n=ki(n,r,l),n!==null?n.sibling:null);Dt(Ht,Ht.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Ap(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Dt(Ht,Ht.current),d)break;return null;case 22:case 23:return r.lanes=0,xp(n,r,l)}return ki(n,r,l)}var bp,Ou,Rp,Cp;bp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ou=function(){},Rp=function(n,r,l,d){var g=n.memoizedProps;if(g!==d){n=r.stateNode,Wr(yi.current);var x=null;switch(l){case"input":g=je(n,g),d=je(n,d),x=[];break;case"select":g=j({},g,{value:void 0}),d=j({},d,{value:void 0}),x=[];break;case"textarea":g=ve(n,g),d=ve(n,d),x=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=ja)}nt(l,d);var T;l=null;for(ee in g)if(!d.hasOwnProperty(ee)&&g.hasOwnProperty(ee)&&g[ee]!=null)if(ee==="style"){var U=g[ee];for(T in U)U.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?x||(x=[]):(x=x||[]).push(ee,null));for(ee in d){var k=d[ee];if(U=g?.[ee],d.hasOwnProperty(ee)&&k!==U&&(k!=null||U!=null))if(ee==="style")if(U){for(T in U)!U.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in k)k.hasOwnProperty(T)&&U[T]!==k[T]&&(l||(l={}),l[T]=k[T])}else l||(x||(x=[]),x.push(ee,l)),l=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(x=x||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(x=x||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ut("scroll",n),x||U===k||(x=[])):(x=x||[]).push(ee,k))}l&&(x=x||[]).push("style",l);var ee=x;(r.updateQueue=ee)&&(r.flags|=4)}},Cp=function(n,r,l,d){l!==d&&(r.flags|=4)};function Qo(n,r){if(!Bt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function xn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function A0(n,r,l){var d=r.pendingProps;switch(su(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(r),null;case 1:return Dn(r.type)&&qa(),xn(r),null;case 3:return d=r.stateNode,Us(),Ft(In),Ft(_n),vu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Qa(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,li!==null&&(Yu(li),li=null))),Ou(n,r),xn(r),null;case 5:gu(r);var g=Wr(qo.current);if(l=r.type,n!==null&&r.stateNode!=null)Rp(n,r,l,d,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return xn(r),null}if(n=Wr(yi.current),Qa(r)){d=r.stateNode,l=r.type;var x=r.memoizedProps;switch(d[xi]=r,d[Vo]=x,n=(r.mode&1)!==0,l){case"dialog":Ut("cancel",d),Ut("close",d);break;case"iframe":case"object":case"embed":Ut("load",d);break;case"video":case"audio":for(g=0;g<Bo.length;g++)Ut(Bo[g],d);break;case"source":Ut("error",d);break;case"img":case"image":case"link":Ut("error",d),Ut("load",d);break;case"details":Ut("toggle",d);break;case"input":tt(d,x),Ut("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},Ut("invalid",d);break;case"textarea":me(d,x),Ut("invalid",d)}nt(l,x),g=null;for(var T in x)if(x.hasOwnProperty(T)){var U=x[T];T==="children"?typeof U=="string"?d.textContent!==U&&(x.suppressHydrationWarning!==!0&&Wa(d.textContent,U,n),g=["children",U]):typeof U=="number"&&d.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&Wa(d.textContent,U,n),g=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Ut("scroll",d)}switch(l){case"input":ft(d),st(d,x,!0);break;case"textarea":ft(d),Ve(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=ja)}d=g,r.updateQueue=d,d!==null&&(r.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Re(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=T.createElement(l,{is:d.is}):(n=T.createElement(l),l==="select"&&(T=n,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):n=T.createElementNS(n,l),n[xi]=r,n[Vo]=d,bp(n,r,!1,!1),r.stateNode=n;e:{switch(T=yt(l,d),l){case"dialog":Ut("cancel",n),Ut("close",n),g=d;break;case"iframe":case"object":case"embed":Ut("load",n),g=d;break;case"video":case"audio":for(g=0;g<Bo.length;g++)Ut(Bo[g],n);g=d;break;case"source":Ut("error",n),g=d;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),g=d;break;case"details":Ut("toggle",n),g=d;break;case"input":tt(n,d),g=je(n,d),Ut("invalid",n);break;case"option":g=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},g=j({},d,{value:void 0}),Ut("invalid",n);break;case"textarea":me(n,d),g=ve(n,d),Ut("invalid",n);break;default:g=d}nt(l,g),U=g;for(x in U)if(U.hasOwnProperty(x)){var k=U[x];x==="style"?We(n,k):x==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ot(n,k)):x==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&pe(n,k):typeof k=="number"&&pe(n,""+k):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?k!=null&&x==="onScroll"&&Ut("scroll",n):k!=null&&A(n,x,k,T))}switch(l){case"input":ft(n),st(n,d,!1);break;case"textarea":ft(n),Ve(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ce(d.value));break;case"select":n.multiple=!!d.multiple,x=d.value,x!=null?J(n,!!d.multiple,x,!1):d.defaultValue!=null&&J(n,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=ja)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xn(r),null;case 6:if(n&&r.stateNode!=null)Cp(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Wr(qo.current),Wr(yi.current),Qa(r)){if(d=r.stateNode,l=r.memoizedProps,d[xi]=r,(x=d.nodeValue!==l)&&(n=Vn,n!==null))switch(n.tag){case 3:Wa(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wa(d.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[xi]=r,r.stateNode=d}return xn(r),null;case 13:if(Ft(Ht),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Gn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Nh(),Ps(),r.flags|=98560,x=!1;else if(x=Qa(r),d!==null&&d.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[xi]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;xn(r),x=!1}else li!==null&&(Yu(li),li=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ht.current&1)!==0?tn===0&&(tn=3):Zu())),r.updateQueue!==null&&(r.flags|=4),xn(r),null);case 4:return Us(),Ou(n,r),n===null&&zo(r.stateNode.containerInfo),xn(r),null;case 10:return du(r.type._context),xn(r),null;case 17:return Dn(r.type)&&qa(),xn(r),null;case 19:if(Ft(Ht),x=r.memoizedState,x===null)return xn(r),null;if(d=(r.flags&128)!==0,T=x.rendering,T===null)if(d)Qo(x,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=rl(n),T!==null){for(r.flags|=128,Qo(x,!1),d=T.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)x=l,n=d,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Dt(Ht,Ht.current&1|2),r.child}n=n.sibling}x.tail!==null&&Ne()>Bs&&(r.flags|=128,d=!0,Qo(x,!1),r.lanes=4194304)}else{if(!d)if(n=rl(T),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Qo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!Bt)return xn(r),null}else 2*Ne()-x.renderingStartTime>Bs&&l!==1073741824&&(r.flags|=128,d=!0,Qo(x,!1),r.lanes=4194304);x.isBackwards?(T.sibling=r.child,r.child=T):(l=x.last,l!==null?l.sibling=T:r.child=T,x.last=T)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Ne(),r.sibling=null,l=Ht.current,Dt(Ht,d?l&1|2:l&1),r):(xn(r),null);case 22:case 23:return $u(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(Wn&1073741824)!==0&&(xn(r),r.subtreeFlags&6&&(r.flags|=8192)):xn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function b0(n,r){switch(su(r),r.tag){case 1:return Dn(r.type)&&qa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),Ft(In),Ft(_n),vu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return gu(r),null;case 13:if(Ft(Ht),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ft(Ht),null;case 4:return Us(),null;case 10:return du(r.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var hl=!1,yn=!1,R0=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Os(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Xt(n,r,d)}else l.current=null}function ku(n,r,l){try{l()}catch(d){Xt(n,r,d)}}var Lp=!1;function C0(n,r){if($c=Ia,n=lh(),Vc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var g=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var T=0,U=-1,k=-1,ee=0,he=0,ge=n,de=null;t:for(;;){for(var Pe;ge!==l||g!==0&&ge.nodeType!==3||(U=T+g),ge!==x||d!==0&&ge.nodeType!==3||(k=T+d),ge.nodeType===3&&(T+=ge.nodeValue.length),(Pe=ge.firstChild)!==null;)de=ge,ge=Pe;for(;;){if(ge===n)break t;if(de===l&&++ee===g&&(U=T),de===x&&++he===d&&(k=T),(Pe=ge.nextSibling)!==null)break;ge=de,de=ge.parentNode}ge=Pe}l=U===-1||k===-1?null:{start:U,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:n,selectionRange:l},Ia=!1,Ie=r;Ie!==null;)if(r=Ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ie=n;else for(;Ie!==null;){r=Ie;try{var Fe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var ke=Fe.memoizedProps,Yt=Fe.memoizedState,Y=r.stateNode,H=Y.getSnapshotBeforeUpdate(r.elementType===r.type?ke:ci(r.type,ke),Yt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=r.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Se){Xt(r,r.return,Se)}if(n=r.sibling,n!==null){n.return=r.return,Ie=n;break}Ie=r.return}return Fe=Lp,Lp=!1,Fe}function Jo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&n)===n){var x=g.destroy;g.destroy=void 0,x!==void 0&&ku(r,l,x)}g=g.next}while(g!==d)}}function pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Bu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Pp(n){var r=n.alternate;r!==null&&(n.alternate=null,Pp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[xi],delete r[Vo],delete r[tu],delete r[d0],delete r[f0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ja));else if(d!==4&&(n=n.child,n!==null))for(zu(n,r,l),n=n.sibling;n!==null;)zu(n,r,l),n=n.sibling}function Hu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Hu(n,r,l),n=n.sibling;n!==null;)Hu(n,r,l),n=n.sibling}var hn=null,ui=!1;function pr(n,r,l){for(l=l.child;l!==null;)Dp(n,r,l),l=l.sibling}function Dp(n,r,l){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Pn,l)}catch{}switch(l.tag){case 5:yn||Os(l,r);case 6:var d=hn,g=ui;hn=null,pr(n,r,l),hn=d,ui=g,hn!==null&&(ui?(n=hn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):hn.removeChild(l.stateNode));break;case 18:hn!==null&&(ui?(n=hn,l=l.stateNode,n.nodeType===8?eu(n.parentNode,l):n.nodeType===1&&eu(n,l),Po(n)):eu(hn,l.stateNode));break;case 4:d=hn,g=ui,hn=l.stateNode.containerInfo,ui=!0,pr(n,r,l),hn=d,ui=g;break;case 0:case 11:case 14:case 15:if(!yn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var x=g,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&ku(l,r,T),g=g.next}while(g!==d)}pr(n,r,l);break;case 1:if(!yn&&(Os(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(U){Xt(l,r,U)}pr(n,r,l);break;case 21:pr(n,r,l);break;case 22:l.mode&1?(yn=(d=yn)||l.memoizedState!==null,pr(n,r,l),yn=d):pr(n,r,l);break;default:pr(n,r,l)}}function Up(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new R0),r.forEach(function(d){var g=k0.bind(null,n,d);l.has(d)||(l.add(d),d.then(g,g))})}}function di(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var g=l[d];try{var x=n,T=r,U=T;e:for(;U!==null;){switch(U.tag){case 5:hn=U.stateNode,ui=!1;break e;case 3:hn=U.stateNode.containerInfo,ui=!0;break e;case 4:hn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(hn===null)throw Error(t(160));Dp(x,T,g),hn=null,ui=!1;var k=g.alternate;k!==null&&(k.return=null),g.return=null}catch(ee){Xt(g,r,ee)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Fp(r,n),r=r.sibling}function Fp(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(r,n),Ei(n),d&4){try{Jo(3,n,n.return),pl(3,n)}catch(ke){Xt(n,n.return,ke)}try{Jo(5,n,n.return)}catch(ke){Xt(n,n.return,ke)}}break;case 1:di(r,n),Ei(n),d&512&&l!==null&&Os(l,l.return);break;case 5:if(di(r,n),Ei(n),d&512&&l!==null&&Os(l,l.return),n.flags&32){var g=n.stateNode;try{pe(g,"")}catch(ke){Xt(n,n.return,ke)}}if(d&4&&(g=n.stateNode,g!=null)){var x=n.memoizedProps,T=l!==null?l.memoizedProps:x,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&He(g,x),yt(U,T);var ee=yt(U,x);for(T=0;T<k.length;T+=2){var he=k[T],ge=k[T+1];he==="style"?We(g,ge):he==="dangerouslySetInnerHTML"?ot(g,ge):he==="children"?pe(g,ge):A(g,he,ge,ee)}switch(U){case"input":Lt(g,x);break;case"textarea":xe(g,x);break;case"select":var de=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var Pe=x.value;Pe!=null?J(g,!!x.multiple,Pe,!1):de!==!!x.multiple&&(x.defaultValue!=null?J(g,!!x.multiple,x.defaultValue,!0):J(g,!!x.multiple,x.multiple?[]:"",!1))}g[Vo]=x}catch(ke){Xt(n,n.return,ke)}}break;case 6:if(di(r,n),Ei(n),d&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,x=n.memoizedProps;try{g.nodeValue=x}catch(ke){Xt(n,n.return,ke)}}break;case 3:if(di(r,n),Ei(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Po(r.containerInfo)}catch(ke){Xt(n,n.return,ke)}break;case 4:di(r,n),Ei(n);break;case 13:di(r,n),Ei(n),g=n.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Wu=Ne())),d&4&&Up(n);break;case 22:if(he=l!==null&&l.memoizedState!==null,n.mode&1?(yn=(ee=yn)||he,di(r,n),yn=ee):di(r,n),Ei(n),d&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!he&&(n.mode&1)!==0)for(Ie=n,he=n.child;he!==null;){for(ge=Ie=he;Ie!==null;){switch(de=Ie,Pe=de.child,de.tag){case 0:case 11:case 14:case 15:Jo(4,de,de.return);break;case 1:Os(de,de.return);var Fe=de.stateNode;if(typeof Fe.componentWillUnmount=="function"){d=de,l=de.return;try{r=d,Fe.props=r.memoizedProps,Fe.state=r.memoizedState,Fe.componentWillUnmount()}catch(ke){Xt(d,l,ke)}}break;case 5:Os(de,de.return);break;case 22:if(de.memoizedState!==null){Bp(ge);continue}}Pe!==null?(Pe.return=de,Ie=Pe):Bp(ge)}he=he.sibling}e:for(he=null,ge=n;;){if(ge.tag===5){if(he===null){he=ge;try{g=ge.stateNode,ee?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=ge.stateNode,k=ge.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=Je("display",T))}catch(ke){Xt(n,n.return,ke)}}}else if(ge.tag===6){if(he===null)try{ge.stateNode.nodeValue=ee?"":ge.memoizedProps}catch(ke){Xt(n,n.return,ke)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===n)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===n)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===n)break e;he===ge&&(he=null),ge=ge.return}he===ge&&(he=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:di(r,n),Ei(n),d&4&&Up(n);break;case 21:break;default:di(r,n),Ei(n)}}function Ei(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Np(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(pe(g,""),d.flags&=-33);var x=Ip(n);Hu(n,x,g);break;case 3:case 4:var T=d.stateNode.containerInfo,U=Ip(n);zu(n,U,T);break;default:throw Error(t(161))}}catch(k){Xt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function L0(n,r,l){Ie=n,Op(n)}function Op(n,r,l){for(var d=(n.mode&1)!==0;Ie!==null;){var g=Ie,x=g.child;if(g.tag===22&&d){var T=g.memoizedState!==null||hl;if(!T){var U=g.alternate,k=U!==null&&U.memoizedState!==null||yn;U=hl;var ee=yn;if(hl=T,(yn=k)&&!ee)for(Ie=g;Ie!==null;)T=Ie,k=T.child,T.tag===22&&T.memoizedState!==null?zp(g):k!==null?(k.return=T,Ie=k):zp(g);for(;x!==null;)Ie=x,Op(x),x=x.sibling;Ie=g,hl=U,yn=ee}kp(n)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,Ie=x):kp(n)}}function kp(n){for(;Ie!==null;){var r=Ie;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:yn||pl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!yn)if(l===null)d.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:ci(r.type,l.memoizedProps);d.componentDidUpdate(g,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Bh(r,x,d);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Bh(r,T,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ee=r.alternate;if(ee!==null){var he=ee.memoizedState;if(he!==null){var ge=he.dehydrated;ge!==null&&Po(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||r.flags&512&&Bu(r)}catch(de){Xt(r,r.return,de)}}if(r===n){Ie=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function Bp(n){for(;Ie!==null;){var r=Ie;if(r===n){Ie=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function zp(n){for(;Ie!==null;){var r=Ie;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{pl(4,r)}catch(k){Xt(r,l,k)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var g=r.return;try{d.componentDidMount()}catch(k){Xt(r,g,k)}}var x=r.return;try{Bu(r)}catch(k){Xt(r,x,k)}break;case 5:var T=r.return;try{Bu(r)}catch(k){Xt(r,T,k)}}}catch(k){Xt(r,r.return,k)}if(r===n){Ie=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Ie=U;break}Ie=r.return}}var P0=Math.ceil,ml=L.ReactCurrentDispatcher,Vu=L.ReactCurrentOwner,Qn=L.ReactCurrentBatchConfig,St=0,cn=null,$t=null,pn=0,Wn=0,ks=cr(0),tn=0,ea=null,Xr=0,gl=0,Gu=0,ta=null,Fn=null,Wu=0,Bs=1/0,Bi=null,_l=!1,ju=null,mr=null,vl=!1,gr=null,xl=0,na=0,Xu=null,yl=-1,Sl=0;function bn(){return(St&6)!==0?Ne():yl!==-1?yl:yl=Ne()}function _r(n){return(n.mode&1)===0?1:(St&2)!==0&&pn!==0?pn&-pn:p0.transition!==null?(Sl===0&&(Sl=La()),Sl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:Vf(n.type)),n)}function fi(n,r,l,d){if(50<na)throw na=0,Xu=null,Error(t(185));Ao(n,l,d),((St&2)===0||n!==cn)&&(n===cn&&((St&2)===0&&(gl|=l),tn===4&&vr(n,pn)),On(n,d),l===1&&St===0&&(r.mode&1)===0&&(Bs=Ne()+500,Ka&&dr()))}function On(n,r){var l=n.callbackNode;Nn(n,r);var d=qn(n,n===cn?pn:0);if(d===0)l!==null&&Le(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Le(l),r===1)n.tag===0?h0(Vp.bind(null,n)):bh(Vp.bind(null,n)),c0(function(){(St&6)===0&&dr()}),l=null;else{switch(Df(d)){case 1:l=et;break;case 4:l=it;break;case 16:l=It;break;case 536870912:l=qt;break;default:l=It}l=$p(l,Hp.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Hp(n,r){if(yl=-1,Sl=0,(St&6)!==0)throw Error(t(327));var l=n.callbackNode;if(zs()&&n.callbackNode!==l)return null;var d=qn(n,n===cn?pn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=El(n,d);else{r=d;var g=St;St|=2;var x=Wp();(cn!==n||pn!==r)&&(Bi=null,Bs=Ne()+500,Yr(n,r));do try{D0();break}catch(U){Gp(n,U)}while(!0);uu(),ml.current=x,St=g,$t!==null?r=0:(cn=null,pn=0,r=tn)}if(r!==0){if(r===2&&(g=kr(n),g!==0&&(d=g,r=qu(n,g))),r===1)throw l=ea,Yr(n,0),vr(n,d),On(n,Ne()),l;if(r===6)vr(n,d);else{if(g=n.current.alternate,(d&30)===0&&!N0(g)&&(r=El(n,d),r===2&&(x=kr(n),x!==0&&(d=x,r=qu(n,x))),r===1))throw l=ea,Yr(n,0),vr(n,d),On(n,Ne()),l;switch(n.finishedWork=g,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Kr(n,Fn,Bi);break;case 3:if(vr(n,d),(d&130023424)===d&&(r=Wu+500-Ne(),10<r)){if(qn(n,0)!==0)break;if(g=n.suspendedLanes,(g&d)!==d){bn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=Jc(Kr.bind(null,n,Fn,Bi),r);break}Kr(n,Fn,Bi);break;case 4:if(vr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,g=-1;0<d;){var T=31-wn(d);x=1<<T,T=r[T],T>g&&(g=T),d&=~x}if(d=g,d=Ne()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*P0(d/1960))-d,10<d){n.timeoutHandle=Jc(Kr.bind(null,n,Fn,Bi),d);break}Kr(n,Fn,Bi);break;case 5:Kr(n,Fn,Bi);break;default:throw Error(t(329))}}}return On(n,Ne()),n.callbackNode===l?Hp.bind(null,n):null}function qu(n,r){var l=ta;return n.current.memoizedState.isDehydrated&&(Yr(n,r).flags|=256),n=El(n,r),n!==2&&(r=Fn,Fn=l,r!==null&&Yu(r)),n}function Yu(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function N0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var g=l[d],x=g.getSnapshot;g=g.value;try{if(!ai(x(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function vr(n,r){for(r&=~Gu,r&=~gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-wn(r),d=1<<l;n[l]=-1,r&=~d}}function Vp(n){if((St&6)!==0)throw Error(t(327));zs();var r=qn(n,0);if((r&1)===0)return On(n,Ne()),null;var l=El(n,r);if(n.tag!==0&&l===2){var d=kr(n);d!==0&&(r=d,l=qu(n,d))}if(l===1)throw l=ea,Yr(n,0),vr(n,r),On(n,Ne()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Kr(n,Fn,Bi),On(n,Ne()),null}function Ku(n,r){var l=St;St|=1;try{return n(r)}finally{St=l,St===0&&(Bs=Ne()+500,Ka&&dr())}}function qr(n){gr!==null&&gr.tag===0&&(St&6)===0&&zs();var r=St;St|=1;var l=Qn.transition,d=bt;try{if(Qn.transition=null,bt=1,n)return n()}finally{bt=d,Qn.transition=l,St=r,(St&6)===0&&dr()}}function $u(){Wn=ks.current,Ft(ks)}function Yr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,l0(l)),$t!==null)for(l=$t.return;l!==null;){var d=l;switch(su(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&qa();break;case 3:Us(),Ft(In),Ft(_n),vu();break;case 5:gu(d);break;case 4:Us();break;case 13:Ft(Ht);break;case 19:Ft(Ht);break;case 10:du(d.type._context);break;case 22:case 23:$u()}l=l.return}if(cn=n,$t=n=xr(n.current,null),pn=Wn=r,tn=0,ea=null,Gu=gl=Xr=0,Fn=ta=null,Gr!==null){for(r=0;r<Gr.length;r++)if(l=Gr[r],d=l.interleaved,d!==null){l.interleaved=null;var g=d.next,x=l.pending;if(x!==null){var T=x.next;x.next=g,d.next=T}l.pending=d}Gr=null}return n}function Gp(n,r){do{var l=$t;try{if(uu(),sl.current=cl,ol){for(var d=Vt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}ol=!1}if(jr=0,ln=en=Vt=null,Yo=!1,Ko=0,Vu.current=null,l===null||l.return===null){tn=1,ea=r,$t=null;break}e:{var x=n,T=l.return,U=l,k=r;if(r=pn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,he=U,ge=he.tag;if((he.mode&1)===0&&(ge===0||ge===11||ge===15)){var de=he.alternate;de?(he.updateQueue=de.updateQueue,he.memoizedState=de.memoizedState,he.lanes=de.lanes):(he.updateQueue=null,he.memoizedState=null)}var Pe=pp(T);if(Pe!==null){Pe.flags&=-257,mp(Pe,T,U,x,r),Pe.mode&1&&hp(x,ee,r),r=Pe,k=ee;var Fe=r.updateQueue;if(Fe===null){var ke=new Set;ke.add(k),r.updateQueue=ke}else Fe.add(k);break e}else{if((r&1)===0){hp(x,ee,r),Zu();break e}k=Error(t(426))}}else if(Bt&&U.mode&1){var Yt=pp(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),mp(Yt,T,U,x,r),lu(Fs(k,U));break e}}x=k=Fs(k,U),tn!==4&&(tn=2),ta===null?ta=[x]:ta.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var Y=dp(x,k,r);kh(x,Y);break e;case 1:U=k;var H=x.type,$=x.stateNode;if((x.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(mr===null||!mr.has($)))){x.flags|=65536,r&=-r,x.lanes|=r;var Se=fp(x,U,r);kh(x,Se);break e}}x=x.return}while(x!==null)}Xp(l)}catch(ze){r=ze,$t===l&&l!==null&&($t=l=l.return);continue}break}while(!0)}function Wp(){var n=ml.current;return ml.current=cl,n===null?cl:n}function Zu(){(tn===0||tn===3||tn===2)&&(tn=4),cn===null||(Xr&268435455)===0&&(gl&268435455)===0||vr(cn,pn)}function El(n,r){var l=St;St|=2;var d=Wp();(cn!==n||pn!==r)&&(Bi=null,Yr(n,r));do try{I0();break}catch(g){Gp(n,g)}while(!0);if(uu(),St=l,ml.current=d,$t!==null)throw Error(t(261));return cn=null,pn=0,tn}function I0(){for(;$t!==null;)jp($t)}function D0(){for(;$t!==null&&!Ge();)jp($t)}function jp(n){var r=Kp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,r===null?Xp(n):$t=r,Vu.current=null}function Xp(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=A0(l,r,Wn),l!==null){$t=l;return}}else{if(l=b0(l,r),l!==null){l.flags&=32767,$t=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);tn===0&&(tn=5)}function Kr(n,r,l){var d=bt,g=Qn.transition;try{Qn.transition=null,bt=1,U0(n,r,l,d)}finally{Qn.transition=g,bt=d}return null}function U0(n,r,l,d){do zs();while(gr!==null);if((St&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(mv(n,x),n===cn&&($t=cn=null,pn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||vl||(vl=!0,$p(It,function(){return zs(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Qn.transition,Qn.transition=null;var T=bt;bt=1;var U=St;St|=4,Vu.current=null,C0(n,l),Fp(l,n),t0(Zc),Ia=!!$c,Zc=$c=null,n.current=l,L0(l),$e(),St=U,bt=T,Qn.transition=x}else n.current=l;if(vl&&(vl=!1,gr=n,xl=g),x=n.pendingLanes,x===0&&(mr=null),ct(l.stateNode),On(n,Ne()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],d(g.value,{componentStack:g.stack,digest:g.digest});if(_l)throw _l=!1,n=ju,ju=null,n;return(xl&1)!==0&&n.tag!==0&&zs(),x=n.pendingLanes,(x&1)!==0?n===Xu?na++:(na=0,Xu=n):na=0,dr(),null}function zs(){if(gr!==null){var n=Df(xl),r=Qn.transition,l=bt;try{if(Qn.transition=null,bt=16>n?16:n,gr===null)var d=!1;else{if(n=gr,gr=null,xl=0,(St&6)!==0)throw Error(t(331));var g=St;for(St|=4,Ie=n.current;Ie!==null;){var x=Ie,T=x.child;if((Ie.flags&16)!==0){var U=x.deletions;if(U!==null){for(var k=0;k<U.length;k++){var ee=U[k];for(Ie=ee;Ie!==null;){var he=Ie;switch(he.tag){case 0:case 11:case 15:Jo(8,he,x)}var ge=he.child;if(ge!==null)ge.return=he,Ie=ge;else for(;Ie!==null;){he=Ie;var de=he.sibling,Pe=he.return;if(Pp(he),he===ee){Ie=null;break}if(de!==null){de.return=Pe,Ie=de;break}Ie=Pe}}}var Fe=x.alternate;if(Fe!==null){var ke=Fe.child;if(ke!==null){Fe.child=null;do{var Yt=ke.sibling;ke.sibling=null,ke=Yt}while(ke!==null)}}Ie=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,Ie=T;else e:for(;Ie!==null;){if(x=Ie,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Jo(9,x,x.return)}var Y=x.sibling;if(Y!==null){Y.return=x.return,Ie=Y;break e}Ie=x.return}}var H=n.current;for(Ie=H;Ie!==null;){T=Ie;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,Ie=$;else e:for(T=H;Ie!==null;){if(U=Ie,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:pl(9,U)}}catch(ze){Xt(U,U.return,ze)}if(U===T){Ie=null;break e}var Se=U.sibling;if(Se!==null){Se.return=U.return,Ie=Se;break e}Ie=U.return}}if(St=g,dr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Pn,n)}catch{}d=!0}return d}finally{bt=l,Qn.transition=r}}return!1}function qp(n,r,l){r=Fs(l,r),r=dp(n,r,1),n=hr(n,r,1),r=bn(),n!==null&&(Ao(n,1,r),On(n,r))}function Xt(n,r,l){if(n.tag===3)qp(n,n,l);else for(;r!==null;){if(r.tag===3){qp(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(mr===null||!mr.has(d))){n=Fs(l,n),n=fp(r,n,1),r=hr(r,n,1),n=bn(),r!==null&&(Ao(r,1,n),On(r,n));break}}r=r.return}}function F0(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=bn(),n.pingedLanes|=n.suspendedLanes&l,cn===n&&(pn&l)===l&&(tn===4||tn===3&&(pn&130023424)===pn&&500>Ne()-Wu?Yr(n,0):Gu|=l),On(n,r)}function Yp(n,r){r===0&&((n.mode&1)===0?r=1:(r=tr,tr<<=1,(tr&130023424)===0&&(tr=4194304)));var l=bn();n=Fi(n,r),n!==null&&(Ao(n,r,l),On(n,l))}function O0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Yp(n,l)}function k0(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Yp(n,l)}var Kp;Kp=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||In.current)Un=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Un=!1,w0(n,r,l);Un=(n.flags&131072)!==0}else Un=!1,Bt&&(r.flags&1048576)!==0&&Rh(r,Za,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;fl(n,r),n=r.pendingProps;var g=Rs(r,_n.current);Ds(r,l),g=Su(null,r,d,n,g,l);var x=Eu();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Dn(d)?(x=!0,Ya(r)):x=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,pu(r),g.updater=ul,r.stateNode=g,g._reactInternals=r,Ru(r,d,n,l),r=Nu(null,r,d,!0,x,l)):(r.tag=0,Bt&&x&&ru(r),An(null,r,g,l),r=r.child),r;case 16:d=r.elementType;e:{switch(fl(n,r),n=r.pendingProps,g=d._init,d=g(d._payload),r.type=d,g=r.tag=z0(d),n=ci(d,n),g){case 0:r=Pu(null,r,d,n,l);break e;case 1:r=Sp(null,r,d,n,l);break e;case 11:r=gp(null,r,d,n,l);break e;case 14:r=_p(null,r,d,ci(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:ci(d,g),Pu(n,r,d,g,l);case 1:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:ci(d,g),Sp(n,r,d,g,l);case 3:e:{if(Ep(r),n===null)throw Error(t(387));d=r.pendingProps,x=r.memoizedState,g=x.element,Oh(n,r),il(r,d,null,l);var T=r.memoizedState;if(d=T.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){g=Fs(Error(t(423)),r),r=Mp(n,r,d,l,g);break e}else if(d!==g){g=Fs(Error(t(424)),r),r=Mp(n,r,d,l,g);break e}else for(Gn=lr(r.stateNode.containerInfo.firstChild),Vn=r,Bt=!0,li=null,l=Uh(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ps(),d===g){r=ki(n,r,l);break e}An(n,r,d,l)}r=r.child}return r;case 5:return zh(r),n===null&&au(r),d=r.type,g=r.pendingProps,x=n!==null?n.memoizedProps:null,T=g.children,Qc(d,g)?T=null:x!==null&&Qc(d,x)&&(r.flags|=32),yp(n,r),An(n,r,T,l),r.child;case 6:return n===null&&au(r),null;case 13:return Tp(n,r,l);case 4:return mu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Ns(r,null,d,l):An(n,r,d,l),r.child;case 11:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:ci(d,g),gp(n,r,d,g,l);case 7:return An(n,r,r.pendingProps,l),r.child;case 8:return An(n,r,r.pendingProps.children,l),r.child;case 12:return An(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,g=r.pendingProps,x=r.memoizedProps,T=g.value,Dt(el,d._currentValue),d._currentValue=T,x!==null)if(ai(x.value,T)){if(x.children===g.children&&!In.current){r=ki(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var U=x.dependencies;if(U!==null){T=x.child;for(var k=U.firstContext;k!==null;){if(k.context===d){if(x.tag===1){k=Oi(-1,l&-l),k.tag=2;var ee=x.updateQueue;if(ee!==null){ee=ee.shared;var he=ee.pending;he===null?k.next=k:(k.next=he.next,he.next=k),ee.pending=k}}x.lanes|=l,k=x.alternate,k!==null&&(k.lanes|=l),fu(x.return,l,r),U.lanes|=l;break}k=k.next}}else if(x.tag===10)T=x.type===r.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=l,U=T.alternate,U!==null&&(U.lanes|=l),fu(T,l,r),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===r){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}An(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,d=r.pendingProps.children,Ds(r,l),g=$n(g),d=d(g),r.flags|=1,An(n,r,d,l),r.child;case 14:return d=r.type,g=ci(d,r.pendingProps),g=ci(d.type,g),_p(n,r,d,g,l);case 15:return vp(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,g=r.pendingProps,g=r.elementType===d?g:ci(d,g),fl(n,r),r.tag=1,Dn(d)?(n=!0,Ya(r)):n=!1,Ds(r,l),cp(r,d,g),Ru(r,d,g,l),Nu(null,r,d,!0,n,l);case 19:return Ap(n,r,l);case 22:return xp(n,r,l)}throw Error(t(156,r.tag))};function $p(n,r){return ie(n,r)}function B0(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,r,l,d){return new B0(n,r,l,d)}function Qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z0(n){if(typeof n=="function")return Qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===Q)return 14}return 2}function xr(n,r){var l=n.alternate;return l===null?(l=Jn(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ml(n,r,l,d,g,x){var T=2;if(d=n,typeof n=="function")Qu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return $r(l.children,g,x,r);case ce:T=8,g|=8;break;case R:return n=Jn(12,l,r,g|2),n.elementType=R,n.lanes=x,n;case _e:return n=Jn(13,l,r,g),n.elementType=_e,n.lanes=x,n;case V:return n=Jn(19,l,r,g),n.elementType=V,n.lanes=x,n;case le:return Tl(l,g,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:T=10;break e;case ae:T=9;break e;case ue:T=11;break e;case Q:T=14;break e;case oe:T=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Jn(T,l,r,g),r.elementType=n,r.type=d,r.lanes=x,r}function $r(n,r,l,d){return n=Jn(7,n,d,r),n.lanes=l,n}function Tl(n,r,l,d){return n=Jn(22,n,d,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function Ju(n,r,l){return n=Jn(6,n,null,r),n.lanes=l,n}function ed(n,r,l){return r=Jn(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function H0(n,r,l,d,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vs(0),this.expirationTimes=vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function td(n,r,l,d,g,x,T,U,k){return n=new H0(n,r,l,U,k),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Jn(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(x),n}function V0(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function Zp(n){if(!n)return ur;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Dn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Dn(l))return wh(n,l,r)}return r}function Qp(n,r,l,d,g,x,T,U,k){return n=td(l,d,!0,n,g,x,T,U,k),n.context=Zp(null),l=n.current,d=bn(),g=_r(l),x=Oi(d,g),x.callback=r??null,hr(l,x,g),n.current.lanes=g,Ao(n,g,d),On(n,d),n}function wl(n,r,l,d){var g=r.current,x=bn(),T=_r(g);return l=Zp(l),r.context===null?r.context=l:r.pendingContext=l,r=Oi(x,T),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=hr(g,r,T),n!==null&&(fi(n,g,T,x),nl(n,g,T)),T}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function nd(n,r){Jp(n,r),(n=n.alternate)&&Jp(n,r)}function G0(){return null}var em=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}bl.prototype.render=id.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));wl(n,r,null,null)},bl.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qr(function(){wl(null,n,null,null)}),r[Ni]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Of();n={blockedOn:null,target:n,priority:r};for(var l=0;l<sr.length&&r!==0&&r<sr[l].priority;l++);sr.splice(l,0,n),l===0&&zf(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tm(){}function W0(n,r,l,d,g){if(g){if(typeof d=="function"){var x=d;d=function(){var ee=Al(T);x.call(ee)}}var T=Qp(r,d,n,0,null,!1,!1,"",tm);return n._reactRootContainer=T,n[Ni]=T.current,zo(n.nodeType===8?n.parentNode:n),qr(),T}for(;g=n.lastChild;)n.removeChild(g);if(typeof d=="function"){var U=d;d=function(){var ee=Al(k);U.call(ee)}}var k=td(n,0,!1,null,null,!1,!1,"",tm);return n._reactRootContainer=k,n[Ni]=k.current,zo(n.nodeType===8?n.parentNode:n),qr(function(){wl(r,k,l,d)}),k}function Cl(n,r,l,d,g){var x=l._reactRootContainer;if(x){var T=x;if(typeof g=="function"){var U=g;g=function(){var k=Al(T);U.call(k)}}wl(r,T,n,g)}else T=W0(l,r,n,g,d);return Al(T)}Uf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=jt(r.pendingLanes);l!==0&&(Rc(r,l|1),On(r,Ne()),(St&6)===0&&(Bs=Ne()+500,dr()))}break;case 13:qr(function(){var d=Fi(n,1);if(d!==null){var g=bn();fi(d,n,1,g)}}),nd(n,1)}},Cc=function(n){if(n.tag===13){var r=Fi(n,134217728);if(r!==null){var l=bn();fi(r,n,134217728,l)}nd(n,134217728)}},Ff=function(n){if(n.tag===13){var r=_r(n),l=Fi(n,r);if(l!==null){var d=bn();fi(l,n,r,d)}nd(n,r)}},Of=function(){return bt},kf=function(n,r){var l=bt;try{return bt=n,r()}finally{bt=l}},Me=function(n,r,l){switch(r){case"input":if(Lt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var g=Xa(d);if(!g)throw Error(t(90));ne(d),Lt(d,g)}}}break;case"textarea":xe(n,l);break;case"select":r=l.value,r!=null&&J(n,!!l.multiple,r,!1)}},wt=Ku,At=qr;var j0={usingClientEntryPoint:!1,Events:[Go,As,Xa,Ze,qe,Ku]},ia={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=re(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Pn=Ll.inject(X0),xt=Ll}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0,kn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(r))throw Error(t(200));return V0(n,r,null,l)},kn.createRoot=function(n,r){if(!rd(n))throw Error(t(299));var l=!1,d="",g=em;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=td(n,1,!1,null,null,l,!1,d,g),n[Ni]=r.current,zo(n.nodeType===8?n.parentNode:n),new id(r)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=re(r),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return qr(n)},kn.hydrate=function(n,r,l){if(!Rl(r))throw Error(t(200));return Cl(null,n,r,!0,l)},kn.hydrateRoot=function(n,r,l){if(!rd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,g=!1,x="",T=em;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Qp(r,null,n,1,l??null,g,!1,x,T),n[Ni]=r.current,zo(n),d)for(n=0;n<d.length;n++)l=d[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new bl(r)},kn.render=function(n,r,l){if(!Rl(r))throw Error(t(200));return Cl(null,n,r,!1,l)},kn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},kn.unstable_batchedUpdates=Ku,kn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Rl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,r,l,!1,d)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var cm;function p_(){if(cm)return ad.exports;cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ad.exports=tx(),ad.exports}var um;function nx(){if(um)return Pl;um=1;var s=p_();return Pl.createRoot=s.createRoot,Pl.hydrateRoot=s.hydrateRoot,Pl}var ix=nx();const rx=f_(ix);p_();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},_a.apply(this,arguments)}var Rr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Rr||(Rr={}));const dm="popstate";function sx(s){s===void 0&&(s={});function e(i,o){let{pathname:a,search:c,hash:u}=i.location;return Zd("",{pathname:a,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:lc(o)}return ax(e,t,null,s)}function Qt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function m_(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ox(){return Math.random().toString(36).substr(2,8)}function fm(s,e){return{usr:s.state,key:s.key,idx:e}}function Zd(s,e,t,i){return t===void 0&&(t=null),_a({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:t,key:e&&e.key||i||ox()})}function lc(s){let{pathname:e="/",search:t="",hash:i=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function yo(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substr(i),s=s.substr(0,i)),s&&(e.pathname=s)}return e}function ax(s,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,u=Rr.Pop,f=null,h=p();h==null&&(h=0,c.replaceState(_a({},c.state,{idx:h}),""));function p(){return(c.state||{idx:null}).idx}function m(){u=Rr.Pop;let v=p(),y=v==null?null:v-h;h=v,f&&f({action:u,location:M.location,delta:y})}function _(v,y){u=Rr.Push;let C=Zd(M.location,v,y);h=p()+1;let A=fm(C,h),L=M.createHref(C);try{c.pushState(A,"",L)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(L)}a&&f&&f({action:u,location:M.location,delta:1})}function S(v,y){u=Rr.Replace;let C=Zd(M.location,v,y);h=p();let A=fm(C,h),L=M.createHref(C);c.replaceState(A,"",L),a&&f&&f({action:u,location:M.location,delta:0})}function E(v){let y=o.location.origin!=="null"?o.location.origin:o.location.href,C=typeof v=="string"?v:lc(v);return C=C.replace(/ $/,"%20"),Qt(y,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,y)}let M={get action(){return u},get location(){return s(o,c)},listen(v){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(dm,m),f=v,()=>{o.removeEventListener(dm,m),f=null}},createHref(v){return e(o,v)},createURL:E,encodeLocation(v){let y=E(v);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:S,go(v){return c.go(v)}};return M}var hm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(hm||(hm={}));function lx(s,e,t){return t===void 0&&(t="/"),cx(s,e,t)}function cx(s,e,t,i){let o=typeof e=="string"?yo(e):e,a=gf(o.pathname||"/",t);if(a==null)return null;let c=g_(s);ux(c);let u=null;for(let f=0;u==null&&f<c.length;++f){let h=Ex(a);u=xx(c[f],h)}return u}function g_(s,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(a,c,u)=>{let f={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};f.relativePath.startsWith("/")&&(Qt(f.relativePath.startsWith(i),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(i.length));let h=Pr([i,f.relativePath]),p=t.concat(f);a.children&&a.children.length>0&&(Qt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),g_(a.children,e,p,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:_x(h,a.index),routesMeta:p})};return s.forEach((a,c)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,c);else for(let f of __(a.path))o(a,c,f)}),e}function __(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=__(i.join("/")),u=[];return u.push(...c.map(f=>f===""?a:[a,f].join("/"))),o&&u.push(...c),u.map(f=>s.startsWith("/")&&f===""?"/":f)}function ux(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:vx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const dx=/^:[\w-]+$/,fx=3,hx=2,px=1,mx=10,gx=-2,pm=s=>s==="*";function _x(s,e){let t=s.split("/"),i=t.length;return t.some(pm)&&(i+=gx),e&&(i+=hx),t.filter(o=>!pm(o)).reduce((o,a)=>o+(dx.test(a)?fx:a===""?px:mx),i)}function vx(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function xx(s,e,t){let{routesMeta:i}=s,o={},a="/",c=[];for(let u=0;u<i.length;++u){let f=i[u],h=u===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",m=yx({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},p),_=f.route;if(!m)return null;Object.assign(o,m.params),c.push({params:o,pathname:Pr([a,m.pathname]),pathnameBase:Ax(Pr([a,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(a=Pr([a,m.pathnameBase]))}return c}function yx(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=Sx(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((h,p,m)=>{let{paramName:_,isOptional:S}=p;if(_==="*"){let M=u[m]||"";c=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const E=u[m];return S&&!E?h[_]=void 0:h[_]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:c,pattern:s}}function Sx(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),m_(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,f)=>(i.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Ex(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return m_(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function gf(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function Mx(s,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?yo(s):s;return{pathname:t?t.startsWith("/")?t:Tx(t,e):e,search:bx(i),hash:Rx(o)}}function Tx(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ud(s,e,t,i){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wx(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function v_(s,e){let t=wx(s);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function x_(s,e,t,i){i===void 0&&(i=!1);let o;typeof s=="string"?o=yo(s):(o=_a({},s),Qt(!o.pathname||!o.pathname.includes("?"),ud("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),ud("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),ud("#","search","hash",o)));let a=s===""||o.pathname==="",c=a?"/":o.pathname,u;if(c==null)u=t;else{let m=e.length-1;if(!i&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),m-=1;o.pathname=_.join("/")}u=m>=0?e[m]:"/"}let f=Mx(o,u),h=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(h||p)&&(f.pathname+="/"),f}const Pr=s=>s.join("/").replace(/\/\/+/g,"/"),Ax=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),bx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Rx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Cx(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const y_=["post","put","patch","delete"];new Set(y_);const Lx=["get",...y_];new Set(Lx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},va.apply(this,arguments)}const _f=ye.createContext(null),Px=ye.createContext(null),ms=ye.createContext(null),vc=ye.createContext(null),gs=ye.createContext({outlet:null,matches:[],isDataRoute:!1}),S_=ye.createContext(null);function Nx(s,e){let{relative:t}=e===void 0?{}:e;Ea()||Qt(!1);let{basename:i,navigator:o}=ye.useContext(ms),{hash:a,pathname:c,search:u}=M_(s,{relative:t}),f=c;return i!=="/"&&(f=c==="/"?i:Pr([i,c])),o.createHref({pathname:f,search:u,hash:a})}function Ea(){return ye.useContext(vc)!=null}function xc(){return Ea()||Qt(!1),ye.useContext(vc).location}function E_(s){ye.useContext(ms).static||ye.useLayoutEffect(s)}function Ix(){let{isDataRoute:s}=ye.useContext(gs);return s?Xx():Dx()}function Dx(){Ea()||Qt(!1);let s=ye.useContext(_f),{basename:e,future:t,navigator:i}=ye.useContext(ms),{matches:o}=ye.useContext(gs),{pathname:a}=xc(),c=JSON.stringify(v_(o,t.v7_relativeSplatPath)),u=ye.useRef(!1);return E_(()=>{u.current=!0}),ye.useCallback(function(h,p){if(p===void 0&&(p={}),!u.current)return;if(typeof h=="number"){i.go(h);return}let m=x_(h,JSON.parse(c),a,p.relative==="path");s==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Pr([e,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[e,i,c,a,s])}function M_(s,e){let{relative:t}=e===void 0?{}:e,{future:i}=ye.useContext(ms),{matches:o}=ye.useContext(gs),{pathname:a}=xc(),c=JSON.stringify(v_(o,i.v7_relativeSplatPath));return ye.useMemo(()=>x_(s,JSON.parse(c),a,t==="path"),[s,c,a,t])}function Ux(s,e){return Fx(s,e)}function Fx(s,e,t,i){Ea()||Qt(!1);let{navigator:o}=ye.useContext(ms),{matches:a}=ye.useContext(gs),c=a[a.length-1],u=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let h=xc(),p;if(e){var m;let v=typeof e=="string"?yo(e):e;f==="/"||(m=v.pathname)!=null&&m.startsWith(f)||Qt(!1),p=v}else p=h;let _=p.pathname||"/",S=_;if(f!=="/"){let v=f.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(v.length).join("/")}let E=lx(s,{pathname:S}),M=Hx(E&&E.map(v=>Object.assign({},v,{params:Object.assign({},u,v.params),pathname:Pr([f,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?f:Pr([f,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,t,i);return e&&M?ye.createElement(vc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Rr.Pop}},M):M}function Ox(){let s=jx(),e=Cx(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),t?ye.createElement("pre",{style:o},t):null,null)}const kx=ye.createElement(Ox,null);class Bx extends ye.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ye.createElement(gs.Provider,{value:this.props.routeContext},ye.createElement(S_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zx(s){let{routeContext:e,match:t,children:i}=s,o=ye.useContext(_f);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ye.createElement(gs.Provider,{value:e},i)}function Hx(s,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),s==null){var a;if(!t)return null;if(t.errors)s=t.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let c=s,u=(o=t)==null?void 0:o.errors;if(u!=null){let p=c.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);p>=0||Qt(!1),c=c.slice(0,Math.min(c.length,p+1))}let f=!1,h=-1;if(t&&i&&i.v7_partialHydration)for(let p=0;p<c.length;p++){let m=c[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:_,errors:S}=t,E=m.route.loader&&_[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||E){f=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((p,m,_)=>{let S,E=!1,M=null,v=null;t&&(S=u&&m.route.id?u[m.route.id]:void 0,M=m.route.errorElement||kx,f&&(h<0&&_===0?(qx("route-fallback"),E=!0,v=null):h===_&&(E=!0,v=m.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,_+1)),C=()=>{let A;return S?A=M:E?A=v:m.route.Component?A=ye.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=p,ye.createElement(zx,{match:m,routeContext:{outlet:p,matches:y,isDataRoute:t!=null},children:A})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?ye.createElement(Bx,{location:t.location,revalidation:t.revalidation,component:M,error:S,children:C(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):C()},null)}var T_=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(T_||{}),w_=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(w_||{});function Vx(s){let e=ye.useContext(_f);return e||Qt(!1),e}function Gx(s){let e=ye.useContext(Px);return e||Qt(!1),e}function Wx(s){let e=ye.useContext(gs);return e||Qt(!1),e}function A_(s){let e=Wx(),t=e.matches[e.matches.length-1];return t.route.id||Qt(!1),t.route.id}function jx(){var s;let e=ye.useContext(S_),t=Gx(),i=A_();return e!==void 0?e:(s=t.errors)==null?void 0:s[i]}function Xx(){let{router:s}=Vx(T_.UseNavigateStable),e=A_(w_.UseNavigateStable),t=ye.useRef(!1);return E_(()=>{t.current=!0}),ye.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,va({fromRouteId:e},a)))},[s,e])}const mm={};function qx(s,e,t){mm[s]||(mm[s]=!0)}function Yx(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function ro(s){Qt(!1)}function Kx(s){let{basename:e="/",children:t=null,location:i,navigationType:o=Rr.Pop,navigator:a,static:c=!1,future:u}=s;Ea()&&Qt(!1);let f=e.replace(/^\/*/,"/"),h=ye.useMemo(()=>({basename:f,navigator:a,static:c,future:va({v7_relativeSplatPath:!1},u)}),[f,u,a,c]);typeof i=="string"&&(i=yo(i));let{pathname:p="/",search:m="",hash:_="",state:S=null,key:E="default"}=i,M=ye.useMemo(()=>{let v=gf(p,f);return v==null?null:{location:{pathname:v,search:m,hash:_,state:S,key:E},navigationType:o}},[f,p,m,_,S,E,o]);return M==null?null:ye.createElement(ms.Provider,{value:h},ye.createElement(vc.Provider,{children:t,value:M}))}function $x(s){let{children:e,location:t}=s;return Ux(Qd(e),t)}new Promise(()=>{});function Qd(s,e){e===void 0&&(e=[]);let t=[];return ye.Children.forEach(s,(i,o)=>{if(!ye.isValidElement(i))return;let a=[...e,o];if(i.type===ye.Fragment){t.push.apply(t,Qd(i.props.children,a));return}i.type!==ro&&Qt(!1),!i.props.index||!i.props.children||Qt(!1);let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Qd(i.props.children,a)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=t[i])}return s},Jd.apply(this,arguments)}function Zx(s,e){if(s==null)return{};var t={},i=Object.keys(s),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=s[o]);return t}function Qx(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Jx(s,e){return s.button===0&&(!e||e==="_self")&&!Qx(s)}const ey=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ty="6";try{window.__reactRouterVersion=ty}catch{}const ny="startTransition",gm=Q0[ny];function iy(s){let{basename:e,children:t,future:i,window:o}=s,a=ye.useRef();a.current==null&&(a.current=sx({window:o,v5Compat:!0}));let c=a.current,[u,f]=ye.useState({action:c.action,location:c.location}),{v7_startTransition:h}=i||{},p=ye.useCallback(m=>{h&&gm?gm(()=>f(m)):f(m)},[f,h]);return ye.useLayoutEffect(()=>c.listen(p),[c,p]),ye.useEffect(()=>Yx(i),[i]),ye.createElement(Kx,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:c,future:i})}const ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dd=ye.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:a,replace:c,state:u,target:f,to:h,preventScrollReset:p,viewTransition:m}=e,_=Zx(e,ey),{basename:S}=ye.useContext(ms),E,M=!1;if(typeof h=="string"&&sy.test(h)&&(E=h,ry))try{let A=new URL(window.location.href),L=h.startsWith("//")?new URL(A.protocol+h):new URL(h),z=gf(L.pathname,S);L.origin===A.origin&&z!=null?h=z+L.search+L.hash:M=!0}catch{}let v=Nx(h,{relative:o}),y=oy(h,{replace:c,state:u,target:f,preventScrollReset:p,relative:o,viewTransition:m});function C(A){i&&i(A),A.defaultPrevented||y(A)}return ye.createElement("a",Jd({},_,{href:E||v,onClick:M||a?i:C,ref:t,target:f}))});var _m;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(_m||(_m={}));var vm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(vm||(vm={}));function oy(s,e){let{target:t,replace:i,state:o,preventScrollReset:a,relative:c,viewTransition:u}=e===void 0?{}:e,f=Ix(),h=xc(),p=M_(s,{relative:c});return ye.useCallback(m=>{if(Jx(m,t)){m.preventDefault();let _=i!==void 0?i:lc(h)===lc(p);f(s,{replace:_,state:o,preventScrollReset:a,relative:c,viewTransition:u})}},[h,f,p,i,o,t,s,a,c,u])}const xm=[{to:"/technology",label:"Technology"},{to:"/company",label:"Company"},{to:"/news",label:"News"}],ay=()=>{const[s,e]=ye.useState(!1),[t,i]=ye.useState(!1),o=ye.useRef(0),[a,c]=ye.useState(!0);ye.useEffect(()=>{const m=()=>{const _=window.scrollY;if(c(_<=10),_>20){const S=_-o.current;S>10?e(!0):S<-10&&e(!1)}else e(!1);o.current=_};return window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]);const u=()=>{i(!t)},f=()=>{i(!1)};ye.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const h={position:"fixed",top:0,left:0,width:"100%",zIndex:50,transform:s?"translateY(-100%)":"translateY(0)",transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"transform"},p={background:a?"transparent":"rgba(255, 255, 255, 0.25)",boxShadow:a?"none":"0 8px 32px rgba(0,0,0,0.10)",borderRadius:a?"0":"2rem",border:a?"none":"1px solid rgba(0,0,0,0.04)",backdropFilter:a?"none":"blur(16px)",WebkitBackdropFilter:a?"none":"blur(16px)",transition:"all 0.3s ease",minHeight:"4rem",margin:"12px 20px 0 20px",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:"76rem",marginLeft:"auto",marginRight:"auto"};return w.jsxs(w.Fragment,{children:[w.jsx("div",{style:h,children:w.jsxs("nav",{style:p,children:[w.jsx("div",{style:{flex:"1",display:"flex",alignItems:"center"},children:w.jsxs(dd,{to:"/",style:{display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",color:"#111"},children:[w.jsx("img",{src:"/assets/images/Varosync logo.svg",alt:"Varosync Logo",style:{height:"32px",width:"32px",objectFit:"contain"}}),w.jsx("span",{style:{fontSize:"18px",fontWeight:500,fontFamily:"var(--font-family)"},children:"Varosync"})]})}),w.jsx("div",{style:{display:"none",flex:"1",justifyContent:"center"},className:"desktop-nav",children:w.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:xm.map(m=>w.jsx(dd,{to:m.to,style:{color:"#111",textDecoration:"none",fontWeight:500,fontSize:"16px",transition:"color 0.2s",fontFamily:"var(--font-family)"},children:m.label},m.to))})}),w.jsx("div",{style:{flex:"1",display:"none",justifyContent:"flex-end",alignItems:"center"},className:"desktop-nav",children:w.jsxs("a",{href:"mailto:partnerships@varosync.com",style:{background:"#111",color:"#fff",borderRadius:"999px",padding:"10px 24px",fontWeight:600,fontSize:"16px",display:"flex",alignItems:"center",gap:"8px",textDecoration:"none",transition:"background 0.2s",fontFamily:"var(--font-family)"},children:["Get in touch",w.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M6 14L14 6M14 6H7M14 6V13",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),w.jsx("button",{onClick:u,style:{display:"none",background:"transparent",border:"none",padding:"8px",cursor:"pointer",color:"#111"},className:"mobile-menu-btn",children:w.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),w.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),w.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]})}),w.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"rgba(255, 255, 255, 0.98)",zIndex:100,transform:t?"translateX(0)":"translateX(100%)",transition:"transform 0.3s ease-in-out",display:"flex",flexDirection:"column"},className:"mobile-menu-overlay",children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px",borderBottom:"1px solid #e5e5e5"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[w.jsx("img",{src:"/assets/images/Varosync logo.svg",alt:"Varosync Logo",style:{height:"32px",width:"32px",objectFit:"contain"}}),w.jsx("span",{style:{fontSize:"18px",fontWeight:500,color:"#111",fontFamily:"var(--font-family)"},children:"Varosync"})]}),w.jsx("button",{onClick:f,style:{background:"transparent",border:"none",padding:"8px",cursor:"pointer",color:"#666"},children:w.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),w.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),w.jsxs("div",{style:{flex:1,padding:"40px 24px"},children:[w.jsx("nav",{style:{marginBottom:"48px"},children:xm.map(m=>w.jsx(dd,{to:m.to,onClick:f,style:{display:"block",color:"#111",textDecoration:"none",fontSize:"24px",fontWeight:500,marginBottom:"24px",transition:"color 0.2s",fontFamily:"var(--font-family)"},children:m.label},m.to))}),w.jsx("div",{style:{paddingTop:"32px",borderTop:"1px solid #e5e5e5"},children:w.jsxs("a",{href:"mailto:partnerships@varosync.com",onClick:f,style:{background:"#111",color:"#fff",borderRadius:"999px",padding:"16px 32px",fontWeight:600,fontSize:"18px",display:"inline-flex",alignItems:"center",gap:"12px",textDecoration:"none",transition:"background 0.2s",fontFamily:"var(--font-family)"},children:["Get in touch",w.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:w.jsx("path",{d:"M6 14L14 6M14 6H7M14 6V13",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})]})]})},cc='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',fd={fontWeight:650,marginBottom:8,color:"#fff",fontSize:16,letterSpacing:.5,fontFamily:cc},zi={color:"#fff",textDecoration:"none",fontWeight:400,fontSize:15,opacity:.92,fontFamily:cc},ly=()=>w.jsxs("footer",{className:"footer",children:[w.jsxs("div",{className:"footer-content",style:{alignItems:"flex-start",position:"relative"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,minWidth:180},children:[w.jsx("img",{src:"/assets/images/logo_white.svg",alt:"Varosync Logo",style:{width:48,height:48,display:"block"}}),w.jsx("span",{style:{fontWeight:500,fontSize:22,color:"#fff",letterSpacing:1,fontFamily:cc},children:"Varosync"})]}),w.jsx("div",{style:{flex:1}}),w.jsxs("div",{style:{minWidth:160},children:[w.jsx("div",{style:fd,children:"COMPANY"}),w.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,lineHeight:1.8},children:[w.jsx("li",{children:w.jsx("a",{href:"/company",style:zi,children:"About Us"})}),w.jsx("li",{children:w.jsx("a",{href:"/technology",style:zi,children:"Technology"})}),w.jsx("li",{children:w.jsx("a",{href:"/news",style:zi,children:"Blog & Press"})}),w.jsx("li",{children:w.jsx("a",{href:"mailto:partnerships@varosync.com",style:zi,children:"Careers"})}),w.jsx("li",{children:w.jsx("a",{href:"mailto:partnerships@varosync.com",style:zi,children:"Contact Us"})})]})]}),w.jsxs("div",{style:{minWidth:180},children:[w.jsx("div",{style:fd,children:"DEVELOPMENT"}),w.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,lineHeight:1.8},children:[w.jsx("li",{children:w.jsx("a",{href:"mailto:partnerships@varosync.com",style:zi,children:"Licensing & pipeline"})}),w.jsx("li",{children:w.jsx("a",{href:"mailto:partnerships@varosync.com",style:zi,children:"Clinical trials"})})]})]}),w.jsxs("div",{style:{minWidth:200},children:[w.jsx("div",{style:fd,children:"POLICIES & SOCIAL"}),w.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,lineHeight:1.8},children:[w.jsx("li",{children:w.jsx("a",{href:"https://crimson-lilian-17.tiiny.site",target:"_blank",rel:"noopener noreferrer",style:zi,children:"Code of Conduct"})}),w.jsx("li",{children:w.jsx("a",{href:"https://crimson-lilian-17.tiiny.site",target:"_blank",rel:"noopener noreferrer",style:zi,children:"Privacy Policy"})}),w.jsxs("li",{style:{display:"flex",gap:12,marginTop:8},children:[w.jsx("a",{href:"https://x.com/var0sync/",target:"_blank",rel:"noopener noreferrer","aria-label":"X",style:{display:"inline-flex",alignItems:"center"},children:w.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",alt:"X",style:{width:24,height:24,filter:"invert(1)"}})}),w.jsx("a",{href:"https://www.linkedin.com/company/varosync/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{display:"inline-flex",alignItems:"center"},children:w.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",alt:"LinkedIn",style:{width:24,height:24,filter:"invert(1)"}})})]})]})]})]}),w.jsx("div",{style:{maxWidth:1200,margin:"32px auto 12px auto",padding:"0 16px"},children:w.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.2)"}})}),w.jsx("div",{style:{textAlign:"center",color:"#fff",fontSize:15,opacity:.8,marginBottom:4,fontWeight:400,fontFamily:cc},children:"© 2025 Varosync. All rights reserved."})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="160",cy=0,ym=1,uy=2,b_=1,dy=2,qi=3,Zi=0,zn=1,Ti=2,Nr=0,ao=1,Sm=2,Em=3,Mm=4,fy=5,rs=100,hy=101,py=102,Tm=103,wm=104,my=200,gy=201,_y=202,vy=203,ef=204,tf=205,xy=206,yy=207,Sy=208,Ey=209,My=210,Ty=211,wy=212,Ay=213,by=214,Ry=0,Cy=1,Ly=2,uc=3,Py=4,Ny=5,Iy=6,Dy=7,R_=0,Uy=1,Fy=2,Ir=0,Oy=1,ky=2,By=3,zy=4,Hy=5,Vy=6,Am="attached",Gy="detached",C_=300,uo=301,fo=302,nf=303,rf=304,yc=306,ho=1e3,ni=1001,dc=1002,fn=1003,sf=1004,oc=1005,Bn=1006,L_=1007,ds=1008,Dr=1009,Wy=1010,jy=1011,xf=1012,P_=1013,Cr=1014,Yi=1015,xa=1016,N_=1017,I_=1018,ls=1020,Xy=1021,ii=1023,qy=1024,Yy=1025,cs=1026,po=1027,Ky=1028,D_=1029,$y=1030,U_=1031,F_=1033,hd=33776,pd=33777,md=33778,gd=33779,bm=35840,Rm=35841,Cm=35842,Lm=35843,O_=36196,Pm=37492,Nm=37496,Im=37808,Dm=37809,Um=37810,Fm=37811,Om=37812,km=37813,Bm=37814,zm=37815,Hm=37816,Vm=37817,Gm=37818,Wm=37819,jm=37820,Xm=37821,_d=36492,qm=36494,Ym=36495,Zy=36283,Km=36284,$m=36285,Zm=36286,ya=2300,mo=2301,vd=2302,Qm=2400,Jm=2401,eg=2402,Qy=2500,Jy=0,k_=1,of=2,B_=3e3,us=3001,eS=3200,tS=3201,z_=0,nS=1,ri="",zt="srgb",rn="srgb-linear",yf="display-p3",Sc="display-p3-linear",fc="linear",Ot="srgb",hc="rec709",pc="p3",Hs=7680,tg=519,iS=512,rS=513,sS=514,H_=515,oS=516,aS=517,lS=518,cS=519,af=35044,ng="300 es",lf=1035,Ki=2e3,mc=2001;class So{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const ha=Math.PI/180,go=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function Sf(s,e){return(s%e+e)%e}function uS(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function dS(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function fS(s,e,t,i){return pa(s,e,1-Math.exp(-t*i))}function hS(s,e=1){return e-Math.abs(Sf(s,e*2)-e)}function pS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _S(s,e){return s+Math.random()*(e-s)}function vS(s){return s*(.5-Math.random())}function xS(s){s!==void 0&&(ig=s);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yS(s){return s*ha}function SS(s){return s*go}function cf(s){return(s&s-1)===0&&s!==0}function ES(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function MS(s,e,t,i,o){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),p=c((e+i)/2),m=a((e-i)/2),_=c((e-i)/2),S=a((i-e)/2),E=c((i-e)/2);switch(o){case"XYX":s.set(u*p,f*m,f*_,u*h);break;case"YZY":s.set(f*_,u*p,f*m,u*h);break;case"ZXZ":s.set(f*m,f*_,u*p,u*h);break;case"XZX":s.set(u*p,f*E,f*S,u*h);break;case"YXY":s.set(f*S,u*p,f*E,u*h);break;case"ZYZ":s.set(f*E,f*S,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:ha,RAD2DEG:go,generateUUID:_i,clamp:Mn,euclideanModulo:Sf,mapLinear:uS,inverseLerp:dS,lerp:pa,damp:fS,pingpong:hS,smoothstep:pS,smootherstep:mS,randInt:gS,randFloat:_S,randFloatSpread:vS,seededRandom:xS,degToRad:yS,radToDeg:SS,isPowerOfTwo:cf,ceilPowerOfTwo:ES,floorPowerOfTwo:gc,setQuaternionFromProperEuler:MS,normalize:Ct,denormalize:wi};class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,o,a,c,u,f,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h)}set(e,t,i,o,a,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],m=i[7],_=i[2],S=i[5],E=i[8],M=o[0],v=o[3],y=o[6],C=o[1],A=o[4],L=o[7],z=o[2],O=o[5],F=o[8];return a[0]=c*M+u*C+f*z,a[3]=c*v+u*A+f*O,a[6]=c*y+u*L+f*F,a[1]=h*M+p*C+m*z,a[4]=h*v+p*A+m*O,a[7]=h*y+p*L+m*F,a[2]=_*M+S*C+E*z,a[5]=_*v+S*A+E*O,a[8]=_*y+S*L+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*f+o*a*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*c-u*h,_=u*f-p*a,S=h*a-c*f,E=t*m+i*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(o*h-p*i)*M,e[2]=(u*i-o*c)*M,e[3]=_*M,e[4]=(p*t-o*f)*M,e[5]=(o*a-u*t)*M,e[6]=S*M,e[7]=(i*f-h*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-o*h,o*f,-o*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(xd.makeScale(e,t)),this}rotate(e){return this.premultiply(xd.makeRotation(-e)),this}translate(e,t){return this.premultiply(xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xd=new pt;function V_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wS(){const s=Sa("canvas");return s.style.display="block",s}const rg={};function ma(s){s in rg||(rg[s]=!0,console.warn(s))}const sg=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),og=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nl={[rn]:{transfer:fc,primaries:hc,toReference:s=>s,fromReference:s=>s},[zt]:{transfer:Ot,primaries:hc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Sc]:{transfer:fc,primaries:pc,toReference:s=>s.applyMatrix3(og),fromReference:s=>s.applyMatrix3(sg)},[yf]:{transfer:Ot,primaries:pc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(og),fromReference:s=>s.applyMatrix3(sg).convertLinearToSRGB()}},AS=new Set([rn,Sc]),Tt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!AS.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Nl[e].toReference,o=Nl[t].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Nl[s].primaries},getTransfer:function(s){return s===ri?fc:Nl[s].transfer}};function lo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class G_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=Sa("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=lo(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lo(t[i]/255)*255):t[i]=lo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class W_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Sd(o[c].image)):a.push(Sd(o[c]))}else a=Sd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?G_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;class mn extends So{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=ni,o=ni,a=Bn,c=ds,u=ii,f=Dr,h=mn.DEFAULT_ANISOTROPY,p=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=_i(),this.name="",this.source=new W_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===us?zt:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?us:B_}set encoding(e){ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?zt:ri}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=C_;mn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,h=f[0],p=f[4],m=f[8],_=f[1],S=f[5],E=f[9],M=f[2],v=f[6],y=f[10];if(Math.abs(p-_)<.01&&Math.abs(m-M)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+M)<.1&&Math.abs(E+v)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,L=(S+1)/2,z=(y+1)/2,O=(p+_)/4,F=(m+M)/4,ce=(E+v)/4;return A>L&&A>z?A<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(A),o=O/i,a=F/i):L>z?L<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),i=O/o,a=ce/o):z<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(z),i=F/a,o=ce/a),this.set(i,o,a,t),this}let C=Math.sqrt((v-E)*(v-E)+(m-M)*(m-M)+(_-p)*(_-p));return Math.abs(C)<.001&&(C=1),this.x=(v-E)/C,this.y=(m-M)/C,this.z=(_-p)/C,this.w=Math.acos((h+S+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends So{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const o={width:e,height:t,depth:1};i.encoding!==void 0&&(ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===us?zt:ri),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new W_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends CS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class j_ extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LS extends mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let f=i[o+0],h=i[o+1],p=i[o+2],m=i[o+3];const _=a[c+0],S=a[c+1],E=a[c+2],M=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==_||h!==S||p!==E){let v=1-u;const y=f*_+h*S+p*E+m*M,C=y>=0?1:-1,A=1-y*y;if(A>Number.EPSILON){const z=Math.sqrt(A),O=Math.atan2(z,y*C);v=Math.sin(v*O)/z,u=Math.sin(u*O)/z}const L=u*C;if(f=f*v+_*L,h=h*v+S*L,p=p*v+E*L,m=m*v+M*L,v===1-u){const z=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=z,h*=z,p*=z,m*=z}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],f=i[o+1],h=i[o+2],p=i[o+3],m=a[c],_=a[c+1],S=a[c+2],E=a[c+3];return e[t]=u*E+p*m+f*S-h*_,e[t+1]=f*E+p*_+h*m-u*S,e[t+2]=h*E+p*S+u*_-f*m,e[t+3]=p*E-u*m-f*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(o/2),m=u(a/2),_=f(i/2),S=f(o/2),E=f(a/2);switch(c){case"XYZ":this._x=_*p*m+h*S*E,this._y=h*S*m-_*p*E,this._z=h*p*E+_*S*m,this._w=h*p*m-_*S*E;break;case"YXZ":this._x=_*p*m+h*S*E,this._y=h*S*m-_*p*E,this._z=h*p*E-_*S*m,this._w=h*p*m+_*S*E;break;case"ZXY":this._x=_*p*m-h*S*E,this._y=h*S*m+_*p*E,this._z=h*p*E+_*S*m,this._w=h*p*m-_*S*E;break;case"ZYX":this._x=_*p*m-h*S*E,this._y=h*S*m+_*p*E,this._z=h*p*E-_*S*m,this._w=h*p*m+_*S*E;break;case"YZX":this._x=_*p*m+h*S*E,this._y=h*S*m+_*p*E,this._z=h*p*E-_*S*m,this._w=h*p*m-_*S*E;break;case"XZY":this._x=_*p*m-h*S*E,this._y=h*S*m-_*p*E,this._z=h*p*E+_*S*m,this._w=h*p*m+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],_=i+u+m;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(p-f)*S,this._y=(a-h)*S,this._z=(c-o)*S}else if(i>u&&i>m){const S=2*Math.sqrt(1+i-u-m);this._w=(p-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(a+h)/S}else if(u>m){const S=2*Math.sqrt(1+u-i-m);this._w=(a-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+p)/S}else{const S=2*Math.sqrt(1+m-i-u);this._w=(c-o)/S,this._x=(a+h)/S,this._y=(f+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*f,this._y=o*p+c*f+a*u-i*h,this._z=a*p+c*h+i*f-o*u,this._w=c*p-i*u-o*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=c*m+this._w*_,this._x=i*m+this._x*_,this._y=o*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),i*Math.sin(a),i*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),m=2*(a*i-c*t);return this.x=t+f*h+c*m-u*p,this.y=i+f*p+u*h-a*m,this.z=o+f*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=o*f-a*u,this.y=a*c-i*f,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ed=new X,ag=new Ur;class Qi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(a,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Il.copy(i.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Dl.subVectors(this.max,sa),Gs.subVectors(e.a,sa),Ws.subVectors(e.b,sa),js.subVectors(e.c,sa),Sr.subVectors(Ws,Gs),Er.subVectors(js,Ws),Zr.subVectors(Gs,js);let t=[0,-Sr.z,Sr.y,0,-Er.z,Er.y,0,-Zr.z,Zr.y,Sr.z,0,-Sr.x,Er.z,0,-Er.x,Zr.z,0,-Zr.x,-Sr.y,Sr.x,0,-Er.y,Er.x,0,-Zr.y,Zr.x,0];return!Md(t,Gs,Ws,js,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,Gs,Ws,js,Dl))?!1:(Ul.crossVectors(Sr,Er),t=[Ul.x,Ul.y,Ul.z],Md(t,Gs,Ws,js,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new X,new X,new X,new X,new X,new X,new X,new X],hi=new X,Il=new Qi,Gs=new X,Ws=new X,js=new X,Sr=new X,Er=new X,Zr=new X,sa=new X,Dl=new X,Ul=new X,Qr=new X;function Md(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){Qr.fromArray(s,a);const u=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),f=e.dot(Qr),h=t.dot(Qr),p=i.dot(Qr);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const PS=new Qi,oa=new X,Td=new X;class bi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):PS.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(oa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Td)),this.expandByPoint(oa.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new X,wd=new X,Fl=new X,Mr=new X,Ad=new X,Ol=new X,bd=new X;class Ec{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){wd.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(wd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),u=Mr.dot(this.direction),f=-Mr.dot(Fl),h=Mr.lengthSq(),p=Math.abs(1-c*c);let m,_,S,E;if(p>0)if(m=c*f-u,_=c*u-f,E=a*p,m>=0)if(_>=-E)if(_<=E){const M=1/p;m*=M,_*=M,S=m*(m+c*_+2*u)+_*(c*m+_+2*f)+h}else _=a,m=Math.max(0,-(c*_+u)),S=-m*m+_*(_+2*f)+h;else _=-a,m=Math.max(0,-(c*_+u)),S=-m*m+_*(_+2*f)+h;else _<=-E?(m=Math.max(0,-(-c*a+u)),_=m>0?-a:Math.min(Math.max(-a,-f),a),S=-m*m+_*(_+2*f)+h):_<=E?(m=0,_=Math.min(Math.max(-a,-f),a),S=_*(_+2*f)+h):(m=Math.max(0,-(c*a+u)),_=m>0?a:Math.min(Math.max(-a,-f),a),S=-m*m+_*(_+2*f)+h);else _=c>0?-a:a,m=Math.max(0,-(c*_+u)),S=-m*m+_*(_+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(wd).addScaledVector(Fl,_),S}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),o=Vi.dot(Vi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),m>=0?(u=(e.min.z-_.z)*m,f=(e.max.z-_.z)*m):(u=(e.max.z-_.z)*m,f=(e.min.z-_.z)*m),i>f||u>o)||((u>i||i!==i)&&(i=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,o,a){Ad.subVectors(t,e),Ol.subVectors(i,e),bd.crossVectors(Ad,Ol);let c=this.direction.dot(bd),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Mr.subVectors(this.origin,e);const f=u*this.direction.dot(Ol.crossVectors(Mr,Ol));if(f<0)return null;const h=u*this.direction.dot(Ad.cross(Mr));if(h<0||f+h>c)return null;const p=-u*Mr.dot(bd);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,o,a,c,u,f,h,p,m,_,S,E,M,v){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,f,h,p,m,_,S,E,M,v)}set(e,t,i,o,a,c,u,f,h,p,m,_,S,E,M,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=h,y[6]=p,y[10]=m,y[14]=_,y[3]=S,y[7]=E,y[11]=M,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Xs.setFromMatrixColumn(e,0).length(),a=1/Xs.setFromMatrixColumn(e,1).length(),c=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(o),h=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=c*p,S=c*m,E=u*p,M=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=S+E*h,t[5]=_-M*h,t[9]=-u*f,t[2]=M-_*h,t[6]=E+S*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*p,S=f*m,E=h*p,M=h*m;t[0]=_+M*u,t[4]=E*u-S,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=S*u-E,t[6]=M+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*p,S=f*m,E=h*p,M=h*m;t[0]=_-M*u,t[4]=-c*m,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*p,t[9]=M-_*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*p,S=c*m,E=u*p,M=u*m;t[0]=f*p,t[4]=E*h-S,t[8]=_*h+M,t[1]=f*m,t[5]=M*h+_,t[9]=S*h-E,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,S=c*h,E=u*f,M=u*h;t[0]=f*p,t[4]=M-_*m,t[8]=E*m+S,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=S*m+E,t[10]=_-M*m}else if(e.order==="XZY"){const _=c*f,S=c*h,E=u*f,M=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=_*m+M,t[5]=c*p,t[9]=S*m-E,t[2]=E*m-S,t[6]=u*p,t[10]=M*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,IS)}lookAt(e,t,i){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Tr.crossVectors(i,jn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Tr.crossVectors(i,jn)),Tr.normalize(),kl.crossVectors(jn,Tr),o[0]=Tr.x,o[4]=kl.x,o[8]=jn.x,o[1]=Tr.y,o[5]=kl.y,o[9]=jn.y,o[2]=Tr.z,o[6]=kl.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],m=i[5],_=i[9],S=i[13],E=i[2],M=i[6],v=i[10],y=i[14],C=i[3],A=i[7],L=i[11],z=i[15],O=o[0],F=o[4],ce=o[8],R=o[12],D=o[1],ae=o[5],ue=o[9],_e=o[13],V=o[2],Q=o[6],oe=o[10],le=o[14],W=o[3],Z=o[7],j=o[11],I=o[15];return a[0]=c*O+u*D+f*V+h*W,a[4]=c*F+u*ae+f*Q+h*Z,a[8]=c*ce+u*ue+f*oe+h*j,a[12]=c*R+u*_e+f*le+h*I,a[1]=p*O+m*D+_*V+S*W,a[5]=p*F+m*ae+_*Q+S*Z,a[9]=p*ce+m*ue+_*oe+S*j,a[13]=p*R+m*_e+_*le+S*I,a[2]=E*O+M*D+v*V+y*W,a[6]=E*F+M*ae+v*Q+y*Z,a[10]=E*ce+M*ue+v*oe+y*j,a[14]=E*R+M*_e+v*le+y*I,a[3]=C*O+A*D+L*V+z*W,a[7]=C*F+A*ae+L*Q+z*Z,a[11]=C*ce+A*ue+L*oe+z*j,a[15]=C*R+A*_e+L*le+z*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],_=e[10],S=e[14],E=e[3],M=e[7],v=e[11],y=e[15];return E*(+a*f*m-o*h*m-a*u*_+i*h*_+o*u*S-i*f*S)+M*(+t*f*S-t*h*_+a*c*_-o*c*S+o*h*p-a*f*p)+v*(+t*h*m-t*u*S-a*c*m+i*c*S+a*u*p-i*h*p)+y*(-o*u*p-t*f*m+t*u*_+o*c*m-i*c*_+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],_=e[10],S=e[11],E=e[12],M=e[13],v=e[14],y=e[15],C=m*v*h-M*_*h+M*f*S-u*v*S-m*f*y+u*_*y,A=E*_*h-p*v*h-E*f*S+c*v*S+p*f*y-c*_*y,L=p*M*h-E*m*h+E*u*S-c*M*S-p*u*y+c*m*y,z=E*m*f-p*M*f-E*u*_+c*M*_+p*u*v-c*m*v,O=t*C+i*A+o*L+a*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(M*_*a-m*v*a-M*o*S+i*v*S+m*o*y-i*_*y)*F,e[2]=(u*v*a-M*f*a+M*o*h-i*v*h-u*o*y+i*f*y)*F,e[3]=(m*f*a-u*_*a-m*o*h+i*_*h+u*o*S-i*f*S)*F,e[4]=A*F,e[5]=(p*v*a-E*_*a+E*o*S-t*v*S-p*o*y+t*_*y)*F,e[6]=(E*f*a-c*v*a-E*o*h+t*v*h+c*o*y-t*f*y)*F,e[7]=(c*_*a-p*f*a+p*o*h-t*_*h-c*o*S+t*f*S)*F,e[8]=L*F,e[9]=(E*m*a-p*M*a-E*i*S+t*M*S+p*i*y-t*m*y)*F,e[10]=(c*M*a-E*u*a+E*i*h-t*M*h-c*i*y+t*u*y)*F,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*S-t*u*S)*F,e[12]=z*F,e[13]=(p*M*o-E*m*o+E*i*_-t*M*_-p*i*v+t*m*v)*F,e[14]=(E*u*o-c*M*o-E*i*f+t*M*f+c*i*v-t*u*v)*F,e[15]=(c*m*o-p*u*o+p*i*f-t*m*f-c*i*_+t*u*_)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*f,h*f+o*u,0,h*u+o*f,p*u+i,p*f-o*c,0,h*f-o*u,p*f+o*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,p=c+c,m=u+u,_=a*h,S=a*p,E=a*m,M=c*p,v=c*m,y=u*m,C=f*h,A=f*p,L=f*m,z=i.x,O=i.y,F=i.z;return o[0]=(1-(M+y))*z,o[1]=(S+L)*z,o[2]=(E-A)*z,o[3]=0,o[4]=(S-L)*O,o[5]=(1-(_+y))*O,o[6]=(v+C)*O,o[7]=0,o[8]=(E+A)*F,o[9]=(v-C)*F,o[10]=(1-(_+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Xs.set(o[0],o[1],o[2]).length();const c=Xs.set(o[4],o[5],o[6]).length(),u=Xs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],pi.copy(this);const h=1/a,p=1/c,m=1/u;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=p,pi.elements[5]*=p,pi.elements[6]*=p,pi.elements[8]*=m,pi.elements[9]*=m,pi.elements[10]*=m,t.setFromRotationMatrix(pi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Ki){const f=this.elements,h=2*a/(t-e),p=2*a/(i-o),m=(t+e)/(t-e),_=(i+o)/(i-o);let S,E;if(u===Ki)S=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===mc)S=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Ki){const f=this.elements,h=1/(t-e),p=1/(i-o),m=1/(c-a),_=(t+e)*h,S=(i+o)*p;let E,M;if(u===Ki)E=(c+a)*m,M=-2*m;else if(u===mc)E=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new X,pi=new mt,NS=new X(0,0,0),IS=new X(1,1,1),Tr=new X,kl=new X,jn=new X,lg=new mt,cg=new Ur;class Mc{constructor(e=0,t=0,i=0,o=Mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],m=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Mn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cg.setFromEuler(this),this.setFromQuaternion(cg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mc.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DS=0;const ug=new X,qs=new Ur,Gi=new mt,Bl=new X,aa=new X,US=new X,FS=new Ur,dg=new X(1,0,0),fg=new X(0,1,0),hg=new X(0,0,1),OS={type:"added"},kS={type:"removed"};class Gt extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new X,t=new Mc,i=new Ur,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new mt},normalMatrix:{value:new pt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,t){return ug.copy(e).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(aa,Bl,this.up):Gi.lookAt(Bl,aa,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),qs.setFromRotationMatrix(Gi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,US),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,FS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++){const u=o[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Gt.DEFAULT_UP=new X(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new X,Wi=new X,Rd=new X,ji=new X,Ys=new X,Ks=new X,pg=new X,Cd=new X,Ld=new X,Pd=new X;let zl=!1;class gi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),mi.subVectors(e,t),o.cross(mi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){mi.subVectors(o,t),Wi.subVectors(i,t),Rd.subVectors(e,t);const c=mi.dot(mi),u=mi.dot(Wi),f=mi.dot(Rd),h=Wi.dot(Wi),p=Wi.dot(Rd),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const _=1/m,S=(h*f-u*p)*_,E=(c*p-u*f)*_;return a.set(1-S-E,E,S)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,i,o,a,c,u,f){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),this.getInterpolation(e,t,i,o,a,c,u,f)}static getInterpolation(e,t,i,o,a,c,u,f){return this.getBarycoord(e,t,i,o,ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ji.x),f.addScaledVector(c,ji.y),f.addScaledVector(u,ji.z),f)}static isFrontFacing(e,t,i,o){return mi.subVectors(i,t),Wi.subVectors(e,t),mi.cross(Wi).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,o,a){return zl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zl=!0),gi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}getInterpolation(e,t,i,o,a){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;Ys.subVectors(o,i),Ks.subVectors(a,i),Cd.subVectors(e,i);const f=Ys.dot(Cd),h=Ks.dot(Cd);if(f<=0&&h<=0)return t.copy(i);Ld.subVectors(e,o);const p=Ys.dot(Ld),m=Ks.dot(Ld);if(p>=0&&m<=p)return t.copy(o);const _=f*m-p*h;if(_<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(Ys,c);Pd.subVectors(e,a);const S=Ys.dot(Pd),E=Ks.dot(Pd);if(E>=0&&S<=E)return t.copy(a);const M=S*h-f*E;if(M<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(i).addScaledVector(Ks,u);const v=p*E-S*m;if(v<=0&&m-p>=0&&S-E>=0)return pg.subVectors(a,o),u=(m-p)/(m-p+(S-E)),t.copy(o).addScaledVector(pg,u);const y=1/(v+M+_);return c=M*y,u=_*y,t.copy(i).addScaledVector(Ys,c).addScaledVector(Ks,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Nd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Tt.workingColorSpace){if(e=Sf(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Nd(c,a,e+1/3),this.g=Nd(c,a,e),this.b=Nd(c,a,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=q_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}copyLinearToSRGB(e){return this.r=yd(e.r),this.g=yd(e.g),this.b=yd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Tt.fromWorkingColorSpace(En.copy(this),e),Math.round(Mn(En.r*255,0,255))*65536+Math.round(Mn(En.g*255,0,255))*256+Math.round(Mn(En.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,o=En.g,a=En.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:f=(o-a)/m+(o<a?6:0);break;case o:f=(a-i)/m+2;break;case a:f=(i-o)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=zt){Tt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,o=En.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Hl);const i=pa(wr.h,Hl.h,t),o=pa(wr.s,Hl.s,t),a=pa(wr.l,Hl.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new rt;rt.NAMES=q_;let BS=0;class Ai extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ao,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ef&&(i.blendSrc=this.blendSrc),this.blendDst!==tf&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class os extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,Vl=new _t;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),o=Ct(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),o=Ct(o,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}}class Y_ extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class K_ extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $i extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zS=0;const ei=new mt,Id=new Gt,$s=new X,Xn=new Qi,la=new Qi,dn=new X;class oi extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?K_:Y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];la.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(Xn.min,la.min),Xn.expandByPoint(dn),dn.addVectors(Xn.max,la.max),Xn.expandByPoint(dn)):(Xn.expandByPoint(la.min),Xn.expandByPoint(la.max))}Xn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)dn.fromBufferAttribute(u,h),f&&($s.fromBufferAttribute(e,h),dn.add($s)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,o=t.position.array,a=t.normal.array,c=t.uv.array,u=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,h=[],p=[];for(let D=0;D<u;D++)h[D]=new X,p[D]=new X;const m=new X,_=new X,S=new X,E=new _t,M=new _t,v=new _t,y=new X,C=new X;function A(D,ae,ue){m.fromArray(o,D*3),_.fromArray(o,ae*3),S.fromArray(o,ue*3),E.fromArray(c,D*2),M.fromArray(c,ae*2),v.fromArray(c,ue*2),_.sub(m),S.sub(m),M.sub(E),v.sub(E);const _e=1/(M.x*v.y-v.x*M.y);isFinite(_e)&&(y.copy(_).multiplyScalar(v.y).addScaledVector(S,-M.y).multiplyScalar(_e),C.copy(S).multiplyScalar(M.x).addScaledVector(_,-v.x).multiplyScalar(_e),h[D].add(y),h[ae].add(y),h[ue].add(y),p[D].add(C),p[ae].add(C),p[ue].add(C))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let D=0,ae=L.length;D<ae;++D){const ue=L[D],_e=ue.start,V=ue.count;for(let Q=_e,oe=_e+V;Q<oe;Q+=3)A(i[Q+0],i[Q+1],i[Q+2])}const z=new X,O=new X,F=new X,ce=new X;function R(D){F.fromArray(a,D*3),ce.copy(F);const ae=h[D];z.copy(ae),z.sub(F.multiplyScalar(F.dot(ae))).normalize(),O.crossVectors(ce,ae);const _e=O.dot(p[D])<0?-1:1;f[D*4]=z.x,f[D*4+1]=z.y,f[D*4+2]=z.z,f[D*4+3]=_e}for(let D=0,ae=L.length;D<ae;++D){const ue=L[D],_e=ue.start,V=ue.count;for(let Q=_e,oe=_e+V;Q<oe;Q+=3)R(i[Q+0]),R(i[Q+1]),R(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);const o=new X,a=new X,c=new X,u=new X,f=new X,h=new X,p=new X,m=new X;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),v=e.getX(_+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,v),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,v),u.add(p),f.add(p),h.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,_=new h.constructor(f.length*p);let S=0,E=0;for(let M=0,v=f.length;M<v;M++){u.isInterleavedBufferAttribute?S=f[M]*u.data.stride+u.offset:S=f[M]*p;for(let y=0;y<p;y++)_[E++]=h[S++]}return new nn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,o=this.attributes;for(const u in o){const f=o[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const _=h[p],S=e(_,i);f.push(S)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,_=h.length;m<_;m++){const S=h[m];p.push(S.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let _=0,S=m.length;_<S;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new mt,Jr=new Ec,Gl=new bi,gg=new X,Zs=new X,Qs=new X,Js=new X,Dd=new X,Wl=new X,jl=new _t,Xl=new _t,ql=new _t,_g=new X,vg=new X,xg=new X,Yl=new X,Kl=new X;class si extends Gt{constructor(e=new oi,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Wl.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=u[f],m=a[f];p!==0&&(Dd.fromBufferAttribute(m,e),c?Wl.addScaledVector(Dd,p):Wl.addScaledVector(Dd.sub(t),p))}t.add(Wl)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(a),Jr.copy(e.ray).recast(e.near),!(Gl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Gl,gg)===null||Jr.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(a).invert(),Jr.copy(e.ray).applyMatrix4(mg),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const v=_[E],y=c[v.materialIndex],C=Math.max(v.start,S.start),A=Math.min(u.count,Math.min(v.start+v.count,S.start+S.count));for(let L=C,z=A;L<z;L+=3){const O=u.getX(L),F=u.getX(L+1),ce=u.getX(L+2);o=$l(this,y,e,i,h,p,m,O,F,ce),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(u.count,S.start+S.count);for(let v=E,y=M;v<y;v+=3){const C=u.getX(v),A=u.getX(v+1),L=u.getX(v+2);o=$l(this,c,e,i,h,p,m,C,A,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const v=_[E],y=c[v.materialIndex],C=Math.max(v.start,S.start),A=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let L=C,z=A;L<z;L+=3){const O=L,F=L+1,ce=L+2;o=$l(this,y,e,i,h,p,m,O,F,ce),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let v=E,y=M;v<y;v+=3){const C=v,A=v+1,L=v+2;o=$l(this,c,e,i,h,p,m,C,A,L),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function HS(s,e,t,i,o,a,c,u){let f;if(e.side===zn?f=i.intersectTriangle(c,a,o,!0,u):f=i.intersectTriangle(o,a,c,e.side===Zi,u),f===null)return null;Kl.copy(u),Kl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Kl);return h<t.near||h>t.far?null:{distance:h,point:Kl.clone(),object:s}}function $l(s,e,t,i,o,a,c,u,f,h){s.getVertexPosition(u,Zs),s.getVertexPosition(f,Qs),s.getVertexPosition(h,Js);const p=HS(s,e,t,i,Zs,Qs,Js,Yl);if(p){o&&(jl.fromBufferAttribute(o,u),Xl.fromBufferAttribute(o,f),ql.fromBufferAttribute(o,h),p.uv=gi.getInterpolation(Yl,Zs,Qs,Js,jl,Xl,ql,new _t)),a&&(jl.fromBufferAttribute(a,u),Xl.fromBufferAttribute(a,f),ql.fromBufferAttribute(a,h),p.uv1=gi.getInterpolation(Yl,Zs,Qs,Js,jl,Xl,ql,new _t),p.uv2=p.uv1),c&&(_g.fromBufferAttribute(c,u),vg.fromBufferAttribute(c,f),xg.fromBufferAttribute(c,h),p.normal=gi.getInterpolation(Yl,Zs,Qs,Js,_g,vg,xg,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:f,c:h,normal:new X,materialIndex:0};gi.getNormal(Zs,Qs,Js,m.normal),p.face=m}return p}class Ma extends oi{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],p=[],m=[];let _=0,S=0;E("z","y","x",-1,-1,i,t,e,c,a,0),E("z","y","x",1,-1,i,t,-e,c,a,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new $i(h,3)),this.setAttribute("normal",new $i(p,3)),this.setAttribute("uv",new $i(m,2));function E(M,v,y,C,A,L,z,O,F,ce,R){const D=L/F,ae=z/ce,ue=L/2,_e=z/2,V=O/2,Q=F+1,oe=ce+1;let le=0,W=0;const Z=new X;for(let j=0;j<oe;j++){const I=j*ae-_e;for(let G=0;G<Q;G++){const q=G*D-ue;Z[M]=q*C,Z[v]=I*A,Z[y]=V,h.push(Z.x,Z.y,Z.z),Z[M]=0,Z[v]=0,Z[y]=O>0?1:-1,p.push(Z.x,Z.y,Z.z),m.push(G/F),m.push(1-j/ce),le+=1}}for(let j=0;j<ce;j++)for(let I=0;I<F;I++){const G=_+I+Q*j,q=_+I+Q*(j+1),te=_+(I+1)+Q*(j+1),fe=_+(I+1)+Q*j;f.push(G,q,fe),f.push(q,te,fe),W+=6}u.addGroup(S,W,R),S+=W,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const i=_o(s[t]);for(const o in i)e[o]=i[o]}return e}function VS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $_(s){return s.getRenderTarget()===null?s.outputColorSpace:Tt.workingColorSpace}const GS={clone:_o,merge:Cn};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Z_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends Z_{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class XS extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ln(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new Ln(eo,to,e,t);a.layers=this.layers,this.add(a);const c=new Ln(eo,to,e,t);c.layers=this.layers,this.add(c);const u=new Ln(eo,to,e,t);u.layers=this.layers,this.add(u);const f=new Ln(eo,to,e,t);f.layers=this.layers,this.add(f);const h=new Ln(eo,to,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(m,_,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Q_ extends mn{constructor(e,t,i,o,a,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:uo,super(e,t,i,o,a,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qS extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];t.encoding!==void 0&&(ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?zt:ri),this.texture=new Q_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ma(5,5,5),a=new hs({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:Nr});a.uniforms.tEquirect.value=t;const c=new si(o,a),u=t.minFilter;return t.minFilter===ds&&(t.minFilter=Bn),new XS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}const Ud=new X,YS=new X,KS=new pt;class ns{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Ud.subVectors(i,t).cross(YS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ud),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||KS.getNormalMatrix(e),o=this.coplanarPoint(Ud).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new bi,Zl=new X;class Ef{constructor(e=new ns,t=new ns,i=new ns,o=new ns,a=new ns,c=new ns){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],f=o[3],h=o[4],p=o[5],m=o[6],_=o[7],S=o[8],E=o[9],M=o[10],v=o[11],y=o[12],C=o[13],A=o[14],L=o[15];if(i[0].setComponents(f-a,_-h,v-S,L-y).normalize(),i[1].setComponents(f+a,_+h,v+S,L+y).normalize(),i[2].setComponents(f+c,_+p,v+E,L+C).normalize(),i[3].setComponents(f-c,_-p,v-E,L-C).normalize(),i[4].setComponents(f-u,_-m,v-M,L-A).normalize(),t===Ki)i[5].setComponents(f+u,_+m,v+M,L+A).normalize();else if(t===mc)i[5].setComponents(u,m,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Zl.x=o.normal.x>0?e.max.x:e.min.x,Zl.y=o.normal.y>0?e.max.y:e.min.y,Zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J_(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function $S(s,e){const t=e.isWebGL2,i=new WeakMap;function o(h,p){const m=h.array,_=h.usage,S=m.byteLength,E=s.createBuffer();s.bindBuffer(p,E),s.bufferData(p,m,_),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)M=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:E,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function a(h,p,m){const _=p.array,S=p._updateRange,E=p.updateRanges;if(s.bindBuffer(m,h),S.count===-1&&E.length===0&&s.bufferSubData(m,0,_),E.length!==0){for(let M=0,v=E.length;M<v;M++){const y=E[M];t?s.bufferSubData(m,y.start*_.BYTES_PER_ELEMENT,_,y.start,y.count):s.bufferSubData(m,y.start*_.BYTES_PER_ELEMENT,_.subarray(y.start,y.start+y.count))}p.clearUpdateRanges()}S.count!==-1&&(t?s.bufferSubData(m,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(m,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(s.deleteBuffer(p.buffer),i.delete(h))}function f(h,p){if(h.isGLBufferAttribute){const _=i.get(h);(!_||_.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);if(m===void 0)i.set(h,o(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:c,remove:u,update:f}}class Mf extends oi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(o),h=u+1,p=f+1,m=e/u,_=t/f,S=[],E=[],M=[],v=[];for(let y=0;y<p;y++){const C=y*_-c;for(let A=0;A<h;A++){const L=A*m-a;E.push(L,-C,0),M.push(0,0,1),v.push(A/u),v.push(1-y/f)}}for(let y=0;y<f;y++)for(let C=0;C<u;C++){const A=C+h*y,L=C+h*(y+1),z=C+1+h*(y+1),O=C+1+h*y;S.push(A,L,O),S.push(L,z,O)}this.setIndex(S),this.setAttribute("position",new $i(E,3)),this.setAttribute("normal",new $i(M,3)),this.setAttribute("uv",new $i(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:ZS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:eE,alphatest_fragment:tE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:rE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:aE,beginnormal_vertex:lE,bsdfs:cE,iridescence_fragment:uE,bumpmap_pars_fragment:dE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:xE,common:yE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:EE,displacementmap_pars_vertex:ME,displacementmap_vertex:TE,emissivemap_fragment:wE,emissivemap_pars_fragment:AE,colorspace_fragment:bE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:LE,envmap_pars_fragment:PE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:WE,envmap_vertex:IE,fog_vertex:DE,fog_pars_vertex:UE,fog_fragment:FE,fog_pars_fragment:OE,gradientmap_pars_fragment:kE,lightmap_fragment:BE,lightmap_pars_fragment:zE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:VE,lights_pars_begin:GE,lights_toon_fragment:jE,lights_toon_pars_fragment:XE,lights_phong_fragment:qE,lights_phong_pars_fragment:YE,lights_physical_fragment:KE,lights_physical_pars_fragment:$E,lights_fragment_begin:ZE,lights_fragment_maps:QE,lights_fragment_end:JE,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:oM,map_particle_pars_fragment:aM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphcolor_vertex:uM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:hM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:_M,normal_vertex:vM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:MM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:bM,dithering_fragment:RM,dithering_pars_fragment:CM,roughnessmap_fragment:LM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:IM,shadowmap_vertex:DM,shadowmask_pars_fragment:UM,skinbase_vertex:FM,skinning_pars_vertex:OM,skinning_vertex:kM,skinnormal_vertex:BM,specularmap_fragment:zM,specularmap_pars_fragment:HM,tonemapping_fragment:VM,tonemapping_pars_fragment:GM,transmission_fragment:WM,transmission_pars_fragment:jM,uv_pars_fragment:XM,uv_pars_vertex:qM,uv_vertex:YM,worldpos_vertex:KM,background_vert:$M,background_frag:ZM,backgroundCube_vert:QM,backgroundCube_frag:JM,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:oT,equirect_frag:aT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:_T,meshphong_vert:vT,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:ET,meshtoon_frag:MT,points_vert:TT,points_frag:wT,shadow_vert:AT,shadow_frag:bT,sprite_vert:RT,sprite_frag:CT},Ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Mi={basic:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Cn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Cn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Cn([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Cn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Cn([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Cn([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Cn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Cn([Ae.lights,Ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Mi.physical={uniforms:Cn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ql={r:0,b:0,g:0};function LT(s,e,t,i,o,a,c){const u=new rt(0);let f=a===!0?0:1,h,p,m=null,_=0,S=null;function E(v,y){let C=!1,A=y.isScene===!0?y.background:null;A&&A.isTexture&&(A=(y.backgroundBlurriness>0?t:e).get(A)),A===null?M(u,f):A&&A.isColor&&(M(A,1),C=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===yc)?(p===void 0&&(p=new si(new Ma(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:_o(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,(m!==A||_!==A.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,m=A,_=A.version,S=s.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new si(new Mf(2,2),new hs({name:"BackgroundMaterial",uniforms:_o(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||_!==A.version||S!==s.toneMapping)&&(h.material.needsUpdate=!0,m=A,_=A.version,S=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function M(v,y){v.getRGB(Ql,$_(s)),i.buffers.color.setClear(Ql.r,Ql.g,Ql.b,y,c)}return{getClearColor:function(){return u},setClearColor:function(v,y=1){u.set(v),f=y,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,M(u,f)},render:E}}function PT(s,e,t,i){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||a!==null,u={},f=v(null);let h=f,p=!1;function m(V,Q,oe,le,W){let Z=!1;if(c){const j=M(le,oe,Q);h!==j&&(h=j,S(h.object)),Z=y(V,le,oe,W),Z&&C(V,le,oe,W)}else{const j=Q.wireframe===!0;(h.geometry!==le.id||h.program!==oe.id||h.wireframe!==j)&&(h.geometry=le.id,h.program=oe.id,h.wireframe=j,Z=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Z||p)&&(p=!1,ce(V,Q,oe,le),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function _(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function S(V){return i.isWebGL2?s.bindVertexArray(V):a.bindVertexArrayOES(V)}function E(V){return i.isWebGL2?s.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function M(V,Q,oe){const le=oe.wireframe===!0;let W=u[V.id];W===void 0&&(W={},u[V.id]=W);let Z=W[Q.id];Z===void 0&&(Z={},W[Q.id]=Z);let j=Z[le];return j===void 0&&(j=v(_()),Z[le]=j),j}function v(V){const Q=[],oe=[],le=[];for(let W=0;W<o;W++)Q[W]=0,oe[W]=0,le[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:oe,attributeDivisors:le,object:V,attributes:{},index:null}}function y(V,Q,oe,le){const W=h.attributes,Z=Q.attributes;let j=0;const I=oe.getAttributes();for(const G in I)if(I[G].location>=0){const te=W[G];let fe=Z[G];if(fe===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),te===void 0||te.attribute!==fe||fe&&te.data!==fe.data)return!0;j++}return h.attributesNum!==j||h.index!==le}function C(V,Q,oe,le){const W={},Z=Q.attributes;let j=0;const I=oe.getAttributes();for(const G in I)if(I[G].location>=0){let te=Z[G];te===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(te=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(te=V.instanceColor));const fe={};fe.attribute=te,te&&te.data&&(fe.data=te.data),W[G]=fe,j++}h.attributes=W,h.attributesNum=j,h.index=le}function A(){const V=h.newAttributes;for(let Q=0,oe=V.length;Q<oe;Q++)V[Q]=0}function L(V){z(V,0)}function z(V,Q){const oe=h.newAttributes,le=h.enabledAttributes,W=h.attributeDivisors;oe[V]=1,le[V]===0&&(s.enableVertexAttribArray(V),le[V]=1),W[V]!==Q&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Q),W[V]=Q)}function O(){const V=h.newAttributes,Q=h.enabledAttributes;for(let oe=0,le=Q.length;oe<le;oe++)Q[oe]!==V[oe]&&(s.disableVertexAttribArray(oe),Q[oe]=0)}function F(V,Q,oe,le,W,Z,j){j===!0?s.vertexAttribIPointer(V,Q,oe,W,Z):s.vertexAttribPointer(V,Q,oe,le,W,Z)}function ce(V,Q,oe,le){if(i.isWebGL2===!1&&(V.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const W=le.attributes,Z=oe.getAttributes(),j=Q.defaultAttributeValues;for(const I in Z){const G=Z[I];if(G.location>=0){let q=W[I];if(q===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),q!==void 0){const te=q.normalized,fe=q.itemSize,Ee=t.get(q);if(Ee===void 0)continue;const Te=Ee.buffer,Ce=Ee.type,De=Ee.bytesPerElement,Be=i.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||q.gpuType===P_);if(q.isInterleavedBufferAttribute){const ft=q.data,ne=ft.stride,Kt=q.offset;if(ft.isInstancedInterleavedBuffer){for(let je=0;je<G.locationSize;je++)z(G.location+je,ft.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let je=0;je<G.locationSize;je++)L(G.location+je);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let je=0;je<G.locationSize;je++)F(G.location+je,fe/G.locationSize,Ce,te,ne*De,(Kt+fe/G.locationSize*je)*De,Be)}else{if(q.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)z(G.location+ft,q.meshPerAttribute);V.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ft=0;ft<G.locationSize;ft++)L(G.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ft=0;ft<G.locationSize;ft++)F(G.location+ft,fe/G.locationSize,Ce,te,fe*De,fe/G.locationSize*ft*De,Be)}}else if(j!==void 0){const te=j[I];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(G.location,te);break;case 3:s.vertexAttrib3fv(G.location,te);break;case 4:s.vertexAttrib4fv(G.location,te);break;default:s.vertexAttrib1fv(G.location,te)}}}}O()}function R(){ue();for(const V in u){const Q=u[V];for(const oe in Q){const le=Q[oe];for(const W in le)E(le[W].object),delete le[W];delete Q[oe]}delete u[V]}}function D(V){if(u[V.id]===void 0)return;const Q=u[V.id];for(const oe in Q){const le=Q[oe];for(const W in le)E(le[W].object),delete le[W];delete Q[oe]}delete u[V.id]}function ae(V){for(const Q in u){const oe=u[Q];if(oe[V.id]===void 0)continue;const le=oe[V.id];for(const W in le)E(le[W].object),delete le[W];delete oe[V.id]}}function ue(){_e(),p=!0,h!==f&&(h=f,S(h.object))}function _e(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:m,reset:ue,resetDefaultState:_e,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:ae,initAttributes:A,enableAttribute:L,disableUnusedAttributes:O}}function NT(s,e,t,i){const o=i.isWebGL2;let a;function c(p){a=p}function u(p,m){s.drawArrays(a,p,m),t.update(m,a,1)}function f(p,m,_){if(_===0)return;let S,E;if(o)S=s,E="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[E](a,p,m,_),t.update(m,a,_)}function h(p,m,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<_;E++)this.render(p[E],m[E]);else{S.multiDrawArraysWEBGL(a,p,0,m,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M];t.update(E,a,1)}}this.setMode=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function IT(s,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const f=a(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,L=c||e.has("OES_texture_float"),z=A&&L,O=c?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:o,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:E,maxAttributes:M,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:C,vertexTextures:A,floatFragmentTextures:L,floatVertexTextures:z,maxSamples:O}}function DT(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new ns,u=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const S=m.length!==0||_||i!==0||o;return o=_,i=m.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,S){const E=m.clippingPlanes,M=m.clipIntersection,v=m.clipShadows,y=s.get(m);if(!o||E===null||E.length===0||a&&!v)a?p(null):h();else{const C=a?0:i,A=C*4;let L=y.clippingState||null;f.value=L,L=p(E,_,A,S);for(let z=0;z!==A;++z)L[z]=t[z];y.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,_,S,E){const M=m!==null?m.length:0;let v=null;if(M!==0){if(v=f.value,E!==!0||v===null){const y=S+M*4,C=_.matrixWorldInverse;u.getNormalMatrix(C),(v===null||v.length<y)&&(v=new Float32Array(y));for(let A=0,L=S;A!==M;++A,L+=4)c.copy(m[A]).applyMatrix4(C,u),c.normal.toArray(v,L),v[L+3]=c.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}function UT(s){let e=new WeakMap;function t(c,u){return u===nf?c.mapping=uo:u===rf&&(c.mapping=fo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===nf||u===rf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new qS(f.height/2);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",o),t(h.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Tf extends Z_{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,yg=[.125,.215,.35,.446,.526,.582],ss=20,Fd=new Tf,Sg=new rt;let Od=null,kd=0,Bd=0;const is=(1+Math.sqrt(5))/2,no=1/is,Eg=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,is,no),new X(0,is,-no),new X(no,0,is),new X(-no,0,is),new X(is,no,0),new X(-is,no,0)];class Mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,kd,Bd),e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:xa,format:ii,colorSpace:rn,depthBuffer:!1},o=Tg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(a)),this._blurMaterial=OT(a,e,t)}return o}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Fd)}_sceneToCubeUV(e,t,i,o){const u=new Ln(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(Sg),p.toneMapping=Ir,p.autoClear=!1;const S=new os({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),E=new si(new Ma,S);let M=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,M=!0):(S.color.copy(Sg),M=!0);for(let y=0;y<6;y++){const C=y%3;C===0?(u.up.set(0,f[y],0),u.lookAt(h[y],0,0)):C===1?(u.up.set(0,0,f[y]),u.lookAt(0,h[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,h[y]));const A=this._cubeSize;Jl(o,C*A,y>2?A:0,A,A),p.setRenderTarget(o),M&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===uo||e.mapping===fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new si(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Jl(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Fd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Eg[(o-1)%Eg.length];this._blur(e,o-1,o,a,c)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new si(this._lodPlanes[o],h),_=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*ss-1),M=a/E,v=isFinite(a)?1+Math.floor(p*M):ss;v>ss&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ss}`);const y=[];let C=0;for(let F=0;F<ss;++F){const ce=F/M,R=Math.exp(-ce*ce/2);y.push(R),F===0?C+=R:F<v&&(C+=2*R)}for(let F=0;F<y.length;F++)y[F]=y[F]/C;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:A}=this;_.dTheta.value=E,_.mipInt.value=A-i;const L=this._sizeLods[o],z=3*L*(o>A-so?o-A+so:0),O=4*(this._cubeSize-L);Jl(t,z,O,3*L,2*L),f.setRenderTarget(t),f.render(m,Fd)}}function FT(s){const e=[],t=[],i=[];let o=s;const a=s-so+1+yg.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let f=1/u;c>s-so?f=yg[c-s+so-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,E=6,M=3,v=2,y=1,C=new Float32Array(M*E*S),A=new Float32Array(v*E*S),L=new Float32Array(y*E*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,ce=O>2?0:-1,R=[F,ce,0,F+2/3,ce,0,F+2/3,ce+1,0,F,ce,0,F+2/3,ce+1,0,F,ce+1,0];C.set(R,M*E*O),A.set(_,v*E*O);const D=[O,O,O,O,O,O];L.set(D,y*E*O)}const z=new oi;z.setAttribute("position",new nn(C,M)),z.setAttribute("uv",new nn(A,v)),z.setAttribute("faceIndex",new nn(L,y)),e.push(z),o>so&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tg(s,e,t){const i=new fs(s,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jl(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function OT(s,e,t){const i=new Float32Array(ss),o=new X(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function wg(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Ag(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===nf||f===rf,p=f===uo||f===fo;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new Mg(s)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(h&&m&&m.height>0||p&&m&&o(m)){t===null&&(t=new Mg(s));const _=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",a),_.texture}else return null}}}return u}function o(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function BT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function zT(s,e,t,i){const o={},a=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const M=_.morphAttributes[E];for(let v=0,y=M.length;v<y;v++)e.remove(M[v])}_.removeEventListener("dispose",c),delete o[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(m,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,t.memory.geometries++),_}function f(m){const _=m.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const S=m.morphAttributes;for(const E in S){const M=S[E];for(let v=0,y=M.length;v<y;v++)e.update(M[v],s.ARRAY_BUFFER)}}function h(m){const _=[],S=m.index,E=m.attributes.position;let M=0;if(S!==null){const C=S.array;M=S.version;for(let A=0,L=C.length;A<L;A+=3){const z=C[A+0],O=C[A+1],F=C[A+2];_.push(z,O,O,F,F,z)}}else if(E!==void 0){const C=E.array;M=E.version;for(let A=0,L=C.length/3-1;A<L;A+=3){const z=A+0,O=A+1,F=A+2;_.push(z,O,O,F,F,z)}}else return;const v=new(V_(_)?K_:Y_)(_,1);v.version=M;const y=a.get(m);y&&e.remove(y),a.set(m,v)}function p(m){const _=a.get(m);if(_){const S=m.index;S!==null&&_.version<S.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function HT(s,e,t,i){const o=i.isWebGL2;let a;function c(S){a=S}let u,f;function h(S){u=S.type,f=S.bytesPerElement}function p(S,E){s.drawElements(a,E,u,S*f),t.update(E,a,1)}function m(S,E,M){if(M===0)return;let v,y;if(o)v=s,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](a,E,u,S*f,M),t.update(E,a,M)}function _(S,E,M){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<M;y++)this.render(S[y]/f,E[y]);else{v.multiDrawElementsWEBGL(a,E,0,u,S,0,M);let y=0;for(let C=0;C<M;C++)y+=E[C];t.update(y,a,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function VT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function GT(s,e){return s[0]-e[0]}function WT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function jT(s,e,t){const i={},o=new Float32Array(8),a=new WeakMap,c=new Pt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function f(h,p,m){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=E!==void 0?E.length:0;let v=a.get(p);if(v===void 0||v.count!==M){let Q=function(){_e.dispose(),a.delete(p),p.removeEventListener("dispose",Q)};var S=Q;v!==void 0&&v.texture.dispose();const A=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,z=p.morphAttributes.color!==void 0,O=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],ce=p.morphAttributes.color||[];let R=0;A===!0&&(R=1),L===!0&&(R=2),z===!0&&(R=3);let D=p.attributes.position.count*R,ae=1;D>e.maxTextureSize&&(ae=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ue=new Float32Array(D*ae*4*M),_e=new j_(ue,D,ae,M);_e.type=Yi,_e.needsUpdate=!0;const V=R*4;for(let oe=0;oe<M;oe++){const le=O[oe],W=F[oe],Z=ce[oe],j=D*ae*4*oe;for(let I=0;I<le.count;I++){const G=I*V;A===!0&&(c.fromBufferAttribute(le,I),ue[j+G+0]=c.x,ue[j+G+1]=c.y,ue[j+G+2]=c.z,ue[j+G+3]=0),L===!0&&(c.fromBufferAttribute(W,I),ue[j+G+4]=c.x,ue[j+G+5]=c.y,ue[j+G+6]=c.z,ue[j+G+7]=0),z===!0&&(c.fromBufferAttribute(Z,I),ue[j+G+8]=c.x,ue[j+G+9]=c.y,ue[j+G+10]=c.z,ue[j+G+11]=Z.itemSize===4?c.w:1)}}v={count:M,texture:_e,size:new _t(D,ae)},a.set(p,v),p.addEventListener("dispose",Q)}let y=0;for(let A=0;A<_.length;A++)y+=_[A];const C=p.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",_),m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const E=_===void 0?0:_.length;let M=i[p.id];if(M===void 0||M.length!==E){M=[];for(let L=0;L<E;L++)M[L]=[L,0];i[p.id]=M}for(let L=0;L<E;L++){const z=M[L];z[0]=L,z[1]=_[L]}M.sort(WT);for(let L=0;L<8;L++)L<E&&M[L][1]?(u[L][0]=M[L][0],u[L][1]=M[L][1]):(u[L][0]=Number.MAX_SAFE_INTEGER,u[L][1]=0);u.sort(GT);const v=p.morphAttributes.position,y=p.morphAttributes.normal;let C=0;for(let L=0;L<8;L++){const z=u[L],O=z[0],F=z[1];O!==Number.MAX_SAFE_INTEGER&&F?(v&&p.getAttribute("morphTarget"+L)!==v[O]&&p.setAttribute("morphTarget"+L,v[O]),y&&p.getAttribute("morphNormal"+L)!==y[O]&&p.setAttribute("morphNormal"+L,y[O]),o[L]=F,C+=F):(v&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),y&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),o[L]=0)}const A=p.morphTargetsRelative?1:1-C;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:f}}function XT(s,e,t,i){let o=new WeakMap;function a(f){const h=i.render.frame,p=f.geometry,m=e.get(f,p);if(o.get(m)!==h&&(e.update(m),o.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return m}function c(){o=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class ev extends mn{constructor(e,t,i,o,a,c,u,f,h,p){if(p=p!==void 0?p:cs,p!==cs&&p!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===cs&&(i=Cr),i===void 0&&p===po&&(i=ls),super(null,o,a,c,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:fn,this.minFilter=f!==void 0?f:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tv=new mn,nv=new ev(1,1);nv.compareFunction=H_;const iv=new j_,rv=new LS,sv=new Q_,bg=[],Rg=[],Cg=new Float32Array(16),Lg=new Float32Array(9),Pg=new Float32Array(4);function Eo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=bg[o];if(a===void 0&&(a=new Float32Array(o),bg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Tc(s,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function qT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function KT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function $T(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function ZT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Pg.set(i),s.uniformMatrix2fv(this.addr,!1,Pg),on(t,i)}}function QT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Lg.set(i),s.uniformMatrix3fv(this.addr,!1,Lg),on(t,i)}}function JT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Cg.set(i),s.uniformMatrix4fv(this.addr,!1,Cg),on(t,i)}}function ew(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function rw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function lw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);const a=this.type===s.SAMPLER_2D_SHADOW?nv:tv;t.setTexture2D(e||a,o)}function cw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||rv,o)}function uw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||sv,o)}function dw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||iv,o)}function fw(s){switch(s){case 5126:return qT;case 35664:return YT;case 35665:return KT;case 35666:return $T;case 35674:return ZT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}function hw(s,e){s.uniform1fv(this.addr,e)}function pw(s,e){const t=Eo(e,this.size,2);s.uniform2fv(this.addr,t)}function mw(s,e){const t=Eo(e,this.size,3);s.uniform3fv(this.addr,t)}function gw(s,e){const t=Eo(e,this.size,4);s.uniform4fv(this.addr,t)}function _w(s,e){const t=Eo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vw(s,e){const t=Eo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xw(s,e){const t=Eo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yw(s,e){s.uniform1iv(this.addr,e)}function Sw(s,e){s.uniform2iv(this.addr,e)}function Ew(s,e){s.uniform3iv(this.addr,e)}function Mw(s,e){s.uniform4iv(this.addr,e)}function Tw(s,e){s.uniform1uiv(this.addr,e)}function ww(s,e){s.uniform2uiv(this.addr,e)}function Aw(s,e){s.uniform3uiv(this.addr,e)}function bw(s,e){s.uniform4uiv(this.addr,e)}function Rw(s,e,t){const i=this.cache,o=e.length,a=Tc(t,o);sn(i,a)||(s.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||tv,a[c])}function Cw(s,e,t){const i=this.cache,o=e.length,a=Tc(t,o);sn(i,a)||(s.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||rv,a[c])}function Lw(s,e,t){const i=this.cache,o=e.length,a=Tc(t,o);sn(i,a)||(s.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||sv,a[c])}function Pw(s,e,t){const i=this.cache,o=e.length,a=Tc(t,o);sn(i,a)||(s.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||iv,a[c])}function Nw(s){switch(s){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Ew;case 35669:case 35673:return Mw;case 5125:return Tw;case 36294:return ww;case 36295:return Aw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Iw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fw(t.type)}}class Dw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nw(t.type)}}class Uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function Ng(s,e){s.seq.push(e),s.map[e.id]=e}function Fw(s,e,t){const i=s.name,o=i.length;for(zd.lastIndex=0;;){const a=zd.exec(i),c=zd.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===o){Ng(t,h===void 0?new Iw(u,s,e):new Dw(u,s,e));break}else{let m=t.map[u];m===void 0&&(m=new Uw(u),Ng(t,m)),t=m}}}class ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Fw(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Ig(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Ow=37297;let kw=0;function Bw(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function zw(s){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(s);let i;switch(e===t?i="":e===pc&&t===hc?i="LinearDisplayP3ToLinearSRGB":e===hc&&t===pc&&(i="LinearSRGBToLinearDisplayP3"),s){case rn:case Sc:return[i,"LinearTransferOETF"];case zt:case yf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Dg(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Bw(s.getShaderSource(e),c)}else return o}function Hw(s,e){const t=zw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vw(s,e){let t;switch(e){case Oy:t="Linear";break;case ky:t="Reinhard";break;case By:t="OptimizedCineon";break;case zy:t="ACESFilmic";break;case Vy:t="AgX";break;case Hy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gw(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oo).join(`
`)}function Ww(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oo).join(`
`)}function jw(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xw(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function oo(s){return s!==""}function Ug(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(s){return s.replace(qw,Kw)}const Yw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kw(s,e){let t=ut[e];if(t===void 0){const i=Yw.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(s){return s.replace($w,Zw)}function Zw(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function kg(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dy?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case uo:case fo:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case Uy:e="ENVMAP_BLENDING_MIX";break;case Fy:e="ENVMAP_BLENDING_ADD";break}return e}function nA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iA(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=Qw(t),h=Jw(t),p=eA(t),m=tA(t),_=nA(t),S=t.isWebGL2?"":Gw(t),E=Ww(t),M=jw(a),v=o.createProgram();let y,C,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),y.length>0&&(y+=`
`),C=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),C.length>0&&(C+=`
`)):(y=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),C=[S,kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ir?Vw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Hw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),c=uf(c),c=Ug(c,t),c=Fg(c,t),u=uf(u),u=Ug(u,t),u=Fg(u,t),c=Og(c),u=Og(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const L=A+y+c,z=A+C+u,O=Ig(o,o.VERTEX_SHADER,L),F=Ig(o,o.FRAGMENT_SHADER,z);o.attachShader(v,O),o.attachShader(v,F),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v);function ce(ue){if(s.debug.checkShaderErrors){const _e=o.getProgramInfoLog(v).trim(),V=o.getShaderInfoLog(O).trim(),Q=o.getShaderInfoLog(F).trim();let oe=!0,le=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,v,O,F);else{const W=Dg(o,O,"vertex"),Z=Dg(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+W+`
`+Z)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(V===""||Q==="")&&(le=!1);le&&(ue.diagnostics={runnable:oe,programLog:_e,vertexShader:{log:V,prefix:y},fragmentShader:{log:Q,prefix:C}})}o.deleteShader(O),o.deleteShader(F),R=new ac(o,v),D=Xw(o,v)}let R;this.getUniforms=function(){return R===void 0&&ce(this),R};let D;this.getAttributes=function(){return D===void 0&&ce(this),D};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=o.getProgramParameter(v,Ow)),ae},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=F,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oA(e),t.set(e,i)),i}}class oA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function aA(s,e,t,i,o,a,c){const u=new X_,f=new sA,h=[],p=o.isWebGL2,m=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return R===0?"uv":`uv${R}`}function v(R,D,ae,ue,_e){const V=ue.fog,Q=_e.geometry,oe=R.isMeshStandardMaterial?ue.environment:null,le=(R.isMeshStandardMaterial?t:e).get(R.envMap||oe),W=le&&le.mapping===yc?le.image.height:null,Z=E[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const j=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,I=j!==void 0?j.length:0;let G=0;Q.morphAttributes.position!==void 0&&(G=1),Q.morphAttributes.normal!==void 0&&(G=2),Q.morphAttributes.color!==void 0&&(G=3);let q,te,fe,Ee;if(Z){const an=Mi[Z];q=an.vertexShader,te=an.fragmentShader}else q=R.vertexShader,te=R.fragmentShader,f.update(R),fe=f.getVertexShaderID(R),Ee=f.getFragmentShaderID(R);const Te=s.getRenderTarget(),Ce=_e.isInstancedMesh===!0,De=_e.isBatchedMesh===!0,Be=!!R.map,ft=!!R.matcap,ne=!!le,Kt=!!R.aoMap,je=!!R.lightMap,tt=!!R.bumpMap,He=!!R.normalMap,Lt=!!R.displacementMap,st=!!R.emissiveMap,N=!!R.metalnessMap,b=!!R.roughnessMap,J=R.anisotropy>0,ve=R.clearcoat>0,me=R.iridescence>0,xe=R.sheen>0,Ve=R.transmission>0,Re=J&&!!R.anisotropyMap,Ue=ve&&!!R.clearcoatMap,Xe=ve&&!!R.clearcoatNormalMap,ot=ve&&!!R.clearcoatRoughnessMap,pe=me&&!!R.iridescenceMap,vt=me&&!!R.iridescenceThicknessMap,dt=xe&&!!R.sheenColorMap,Je=xe&&!!R.sheenRoughnessMap,We=!!R.specularMap,Oe=!!R.specularColorMap,nt=!!R.specularIntensityMap,yt=Ve&&!!R.transmissionMap,Nt=Ve&&!!R.thicknessMap,at=!!R.gradientMap,Me=!!R.alphaMap,B=R.alphaTest>0,we=!!R.alphaHash,be=!!R.extensions,Ze=!!Q.attributes.uv1,qe=!!Q.attributes.uv2,wt=!!Q.attributes.uv3;let At=Ir;return R.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(At=s.toneMapping),{isWebGL2:p,shaderID:Z,shaderType:R.type,shaderName:R.name,vertexShader:q,fragmentShader:te,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:De,instancing:Ce,instancingColor:Ce&&_e.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:rn,map:Be,matcap:ft,envMap:ne,envMapMode:ne&&le.mapping,envMapCubeUVHeight:W,aoMap:Kt,lightMap:je,bumpMap:tt,normalMap:He,displacementMap:_&&Lt,emissiveMap:st,normalMapObjectSpace:He&&R.normalMapType===nS,normalMapTangentSpace:He&&R.normalMapType===z_,metalnessMap:N,roughnessMap:b,anisotropy:J,anisotropyMap:Re,clearcoat:ve,clearcoatMap:Ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ot,iridescence:me,iridescenceMap:pe,iridescenceThicknessMap:vt,sheen:xe,sheenColorMap:dt,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Oe,specularIntensityMap:nt,transmission:Ve,transmissionMap:yt,thicknessMap:Nt,gradientMap:at,opaque:R.transparent===!1&&R.blending===ao,alphaMap:Me,alphaTest:B,alphaHash:we,combine:R.combine,mapUv:Be&&M(R.map.channel),aoMapUv:Kt&&M(R.aoMap.channel),lightMapUv:je&&M(R.lightMap.channel),bumpMapUv:tt&&M(R.bumpMap.channel),normalMapUv:He&&M(R.normalMap.channel),displacementMapUv:Lt&&M(R.displacementMap.channel),emissiveMapUv:st&&M(R.emissiveMap.channel),metalnessMapUv:N&&M(R.metalnessMap.channel),roughnessMapUv:b&&M(R.roughnessMap.channel),anisotropyMapUv:Re&&M(R.anisotropyMap.channel),clearcoatMapUv:Ue&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(R.sheenRoughnessMap.channel),specularMapUv:We&&M(R.specularMap.channel),specularColorMapUv:Oe&&M(R.specularColorMap.channel),specularIntensityMapUv:nt&&M(R.specularIntensityMap.channel),transmissionMapUv:yt&&M(R.transmissionMap.channel),thicknessMapUv:Nt&&M(R.thicknessMap.channel),alphaMapUv:Me&&M(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(He||J),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:wt,pointsUvs:_e.isPoints===!0&&!!Q.attributes.uv&&(Be||Me),fog:!!V,useFog:R.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:_e.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:G,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Be&&R.map.isVideoTexture===!0&&Tt.getTransfer(R.map.colorSpace)===Ot,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ti,flipSided:R.side===zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:be&&R.extensions.derivatives===!0,extensionFragDepth:be&&R.extensions.fragDepth===!0,extensionDrawBuffers:be&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&R.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function y(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)D.push(ae),D.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(C(D,R),A(D,R),D.push(s.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function C(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function A(R,D){u.disableAll(),D.isWebGL2&&u.enable(0),D.supportsVertexTextures&&u.enable(1),D.instancing&&u.enable(2),D.instancingColor&&u.enable(3),D.matcap&&u.enable(4),D.envMap&&u.enable(5),D.normalMapObjectSpace&&u.enable(6),D.normalMapTangentSpace&&u.enable(7),D.clearcoat&&u.enable(8),D.iridescence&&u.enable(9),D.alphaTest&&u.enable(10),D.vertexColors&&u.enable(11),D.vertexAlphas&&u.enable(12),D.vertexUv1s&&u.enable(13),D.vertexUv2s&&u.enable(14),D.vertexUv3s&&u.enable(15),D.vertexTangents&&u.enable(16),D.anisotropy&&u.enable(17),D.alphaHash&&u.enable(18),D.batching&&u.enable(19),R.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.skinning&&u.enable(4),D.morphTargets&&u.enable(5),D.morphNormals&&u.enable(6),D.morphColors&&u.enable(7),D.premultipliedAlpha&&u.enable(8),D.shadowMapEnabled&&u.enable(9),D.useLegacyLights&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),R.push(u.mask)}function L(R){const D=E[R.type];let ae;if(D){const ue=Mi[D];ae=GS.clone(ue.uniforms)}else ae=R.uniforms;return ae}function z(R,D){let ae;for(let ue=0,_e=h.length;ue<_e;ue++){const V=h[ue];if(V.cacheKey===D){ae=V,++ae.usedTimes;break}}return ae===void 0&&(ae=new iA(s,D,R,a),h.push(ae)),ae}function O(R){if(--R.usedTimes===0){const D=h.indexOf(R);h[D]=h[h.length-1],h.pop(),R.destroy()}}function F(R){f.remove(R)}function ce(){f.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:L,acquireProgram:z,releaseProgram:O,releaseShaderCache:F,programs:h,dispose:ce}}function lA(){let s=new WeakMap;function e(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function t(a){s.delete(a)}function i(a,c,u){s.get(a)[c]=u}function o(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function cA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zg(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m,_,S,E,M,v){let y=s[e];return y===void 0?(y={id:m.id,object:m,geometry:_,material:S,groupOrder:E,renderOrder:m.renderOrder,z:M,group:v},s[e]=y):(y.id=m.id,y.object=m,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=m.renderOrder,y.z=M,y.group=v),e++,y}function u(m,_,S,E,M,v){const y=c(m,_,S,E,M,v);S.transmission>0?i.push(y):S.transparent===!0?o.push(y):t.push(y)}function f(m,_,S,E,M,v){const y=c(m,_,S,E,M,v);S.transmission>0?i.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function h(m,_){t.length>1&&t.sort(m||cA),i.length>1&&i.sort(_||Bg),o.length>1&&o.sort(_||Bg)}function p(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:f,finish:p,sort:h}}function uA(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new zg,s.set(i,[c])):o>=a.length?(c=new zg,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function dA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function fA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hA=0;function pA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mA(s,e){const t=new dA,i=fA(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,c=new mt,u=new mt;function f(p,m){let _=0,S=0,E=0;for(let ue=0;ue<9;ue++)o.probe[ue].set(0,0,0);let M=0,v=0,y=0,C=0,A=0,L=0,z=0,O=0,F=0,ce=0,R=0;p.sort(pA);const D=m===!0?Math.PI:1;for(let ue=0,_e=p.length;ue<_e;ue++){const V=p[ue],Q=V.color,oe=V.intensity,le=V.distance,W=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Q.r*oe*D,S+=Q.g*oe*D,E+=Q.b*oe*D;else if(V.isLightProbe){for(let Z=0;Z<9;Z++)o.probe[Z].addScaledVector(V.sh.coefficients[Z],oe);R++}else if(V.isDirectionalLight){const Z=t.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity*D),V.castShadow){const j=V.shadow,I=i.get(V);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,o.directionalShadow[M]=I,o.directionalShadowMap[M]=W,o.directionalShadowMatrix[M]=V.shadow.matrix,L++}o.directional[M]=Z,M++}else if(V.isSpotLight){const Z=t.get(V);Z.position.setFromMatrixPosition(V.matrixWorld),Z.color.copy(Q).multiplyScalar(oe*D),Z.distance=le,Z.coneCos=Math.cos(V.angle),Z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Z.decay=V.decay,o.spot[y]=Z;const j=V.shadow;if(V.map&&(o.spotLightMap[F]=V.map,F++,j.updateMatrices(V),V.castShadow&&ce++),o.spotLightMatrix[y]=j.matrix,V.castShadow){const I=i.get(V);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,o.spotShadow[y]=I,o.spotShadowMap[y]=W,O++}y++}else if(V.isRectAreaLight){const Z=t.get(V);Z.color.copy(Q).multiplyScalar(oe),Z.halfWidth.set(V.width*.5,0,0),Z.halfHeight.set(0,V.height*.5,0),o.rectArea[C]=Z,C++}else if(V.isPointLight){const Z=t.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity*D),Z.distance=V.distance,Z.decay=V.decay,V.castShadow){const j=V.shadow,I=i.get(V);I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,o.pointShadow[v]=I,o.pointShadowMap[v]=W,o.pointShadowMatrix[v]=V.shadow.matrix,z++}o.point[v]=Z,v++}else if(V.isHemisphereLight){const Z=t.get(V);Z.skyColor.copy(V.color).multiplyScalar(oe*D),Z.groundColor.copy(V.groundColor).multiplyScalar(oe*D),o.hemi[A]=Z,A++}}C>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_FLOAT_1,o.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ae.LTC_HALF_1,o.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=E;const ae=o.hash;(ae.directionalLength!==M||ae.pointLength!==v||ae.spotLength!==y||ae.rectAreaLength!==C||ae.hemiLength!==A||ae.numDirectionalShadows!==L||ae.numPointShadows!==z||ae.numSpotShadows!==O||ae.numSpotMaps!==F||ae.numLightProbes!==R)&&(o.directional.length=M,o.spot.length=y,o.rectArea.length=C,o.point.length=v,o.hemi.length=A,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=z,o.pointShadowMap.length=z,o.spotShadow.length=O,o.spotShadowMap.length=O,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=z,o.spotLightMatrix.length=O+F-ce,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=ce,o.numLightProbes=R,ae.directionalLength=M,ae.pointLength=v,ae.spotLength=y,ae.rectAreaLength=C,ae.hemiLength=A,ae.numDirectionalShadows=L,ae.numPointShadows=z,ae.numSpotShadows=O,ae.numSpotMaps=F,ae.numLightProbes=R,o.version=hA++)}function h(p,m){let _=0,S=0,E=0,M=0,v=0;const y=m.matrixWorldInverse;for(let C=0,A=p.length;C<A;C++){const L=p[C];if(L.isDirectionalLight){const z=o.directional[_];z.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(y),_++}else if(L.isSpotLight){const z=o.spot[E];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const z=o.rectArea[M];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(y),u.identity(),c.copy(L.matrixWorld),c.premultiply(y),u.extractRotation(c),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const z=o.point[S];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const z=o.hemi[v];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(y),v++}}}return{setup:f,setupView:h,state:o}}function Hg(s,e){const t=new mA(s,e),i=[],o=[];function a(){i.length=0,o.length=0}function c(m){i.push(m)}function u(m){o.push(m)}function f(m){t.setup(i,m)}function h(m){t.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function gA(s,e){let t=new WeakMap;function i(a,c=0){const u=t.get(a);let f;return u===void 0?(f=new Hg(s,e),t.set(a,[f])):c>=u.length?(f=new Hg(s,e),u.push(f)):f=u[c],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class _A extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(s,e,t){let i=new Ef;const o=new _t,a=new _t,c=new Pt,u=new _A({depthPacking:tS}),f=new vA,h={},p=t.maxTextureSize,m={[Zi]:zn,[zn]:Zi,[Ti]:Ti},_=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let y=this.type;this.render=function(O,F,ce){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const R=s.getRenderTarget(),D=s.getActiveCubeFace(),ae=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Nr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const _e=y!==qi&&this.type===qi,V=y===qi&&this.type!==qi;for(let Q=0,oe=O.length;Q<oe;Q++){const le=O[Q],W=le.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Z=W.getFrameExtents();if(o.multiply(Z),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/Z.x),o.x=a.x*Z.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/Z.y),o.y=a.y*Z.y,W.mapSize.y=a.y)),W.map===null||_e===!0||V===!0){const I=this.type!==qi?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new fs(o.x,o.y,I),W.map.texture.name=le.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const j=W.getViewportCount();for(let I=0;I<j;I++){const G=W.getViewport(I);c.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),ue.viewport(c),W.updateMatrices(le,I),i=W.getFrustum(),L(F,ce,W.camera,le,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&C(W,ce),W.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(R,D,ae)};function C(O,F){const ce=e.update(M);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new fs(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,ce,_,M,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,ce,S,M,null)}function A(O,F,ce,R){let D=null;const ae=ce.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(ae!==void 0)D=ae;else if(D=ce.isPointLight===!0?f:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=D.uuid,_e=F.uuid;let V=h[ue];V===void 0&&(V={},h[ue]=V);let Q=V[_e];Q===void 0&&(Q=D.clone(),V[_e]=Q,F.addEventListener("dispose",z)),D=Q}if(D.visible=F.visible,D.wireframe=F.wireframe,R===qi?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:m[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,ce.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ue=s.properties.get(D);ue.light=ce}return D}function L(O,F,ce,R,D){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===qi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,O.matrixWorld);const _e=e.update(O),V=O.material;if(Array.isArray(V)){const Q=_e.groups;for(let oe=0,le=Q.length;oe<le;oe++){const W=Q[oe],Z=V[W.materialIndex];if(Z&&Z.visible){const j=A(O,Z,R,D);O.onBeforeShadow(s,O,F,ce,_e,j,W),s.renderBufferDirect(ce,null,_e,j,O,W),O.onAfterShadow(s,O,F,ce,_e,j,W)}}}else if(V.visible){const Q=A(O,V,R,D);O.onBeforeShadow(s,O,F,ce,_e,Q,null),s.renderBufferDirect(ce,null,_e,Q,O,null),O.onAfterShadow(s,O,F,ce,_e,Q,null)}}const ue=O.children;for(let _e=0,V=ue.length;_e<V;_e++)L(ue[_e],F,ce,R,D)}function z(O){O.target.removeEventListener("dispose",z);for(const ce in h){const R=h[ce],D=O.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function EA(s,e,t){const i=t.isWebGL2;function o(){let B=!1;const we=new Pt;let be=null;const Ze=new Pt(0,0,0,0);return{setMask:function(qe){be!==qe&&!B&&(s.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){B=qe},setClear:function(qe,wt,At,Wt,an){an===!0&&(qe*=Wt,wt*=Wt,At*=Wt),we.set(qe,wt,At,Wt),Ze.equals(we)===!1&&(s.clearColor(qe,wt,At,Wt),Ze.copy(we))},reset:function(){B=!1,be=null,Ze.set(-1,0,0,0)}}}function a(){let B=!1,we=null,be=null,Ze=null;return{setTest:function(qe){qe?De(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(qe){we!==qe&&!B&&(s.depthMask(qe),we=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case Ry:s.depthFunc(s.NEVER);break;case Cy:s.depthFunc(s.ALWAYS);break;case Ly:s.depthFunc(s.LESS);break;case uc:s.depthFunc(s.LEQUAL);break;case Py:s.depthFunc(s.EQUAL);break;case Ny:s.depthFunc(s.GEQUAL);break;case Iy:s.depthFunc(s.GREATER);break;case Dy:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=qe}},setLocked:function(qe){B=qe},setClear:function(qe){Ze!==qe&&(s.clearDepth(qe),Ze=qe)},reset:function(){B=!1,we=null,be=null,Ze=null}}}function c(){let B=!1,we=null,be=null,Ze=null,qe=null,wt=null,At=null,Wt=null,an=null;return{setTest:function(Et){B||(Et?De(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Et){we!==Et&&!B&&(s.stencilMask(Et),we=Et)},setFunc:function(Et,Jt,gn){(be!==Et||Ze!==Jt||qe!==gn)&&(s.stencilFunc(Et,Jt,gn),be=Et,Ze=Jt,qe=gn)},setOp:function(Et,Jt,gn){(wt!==Et||At!==Jt||Wt!==gn)&&(s.stencilOp(Et,Jt,gn),wt=Et,At=Jt,Wt=gn)},setLocked:function(Et){B=Et},setClear:function(Et){an!==Et&&(s.clearStencil(Et),an=Et)},reset:function(){B=!1,we=null,be=null,Ze=null,qe=null,wt=null,At=null,Wt=null,an=null}}}const u=new o,f=new a,h=new c,p=new WeakMap,m=new WeakMap;let _={},S={},E=new WeakMap,M=[],v=null,y=!1,C=null,A=null,L=null,z=null,O=null,F=null,ce=null,R=new rt(0,0,0),D=0,ae=!1,ue=null,_e=null,V=null,Q=null,oe=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=Z>=2);let I=null,G={};const q=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),fe=new Pt().fromArray(q),Ee=new Pt().fromArray(te);function Te(B,we,be,Ze){const qe=new Uint8Array(4),wt=s.createTexture();s.bindTexture(B,wt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<be;At++)i&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,Ze,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(we+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return wt}const Ce={};Ce[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),De(s.DEPTH_TEST),f.setFunc(uc),st(!1),N(ym),De(s.CULL_FACE),He(Nr);function De(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Be(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function ft(B,we){return S[B]!==we?(s.bindFramebuffer(B,we),S[B]=we,i&&(B===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=we),B===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function ne(B,we){let be=M,Ze=!1;if(B)if(be=E.get(we),be===void 0&&(be=[],E.set(we,be)),B.isWebGLMultipleRenderTargets){const qe=B.texture;if(be.length!==qe.length||be[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,At=qe.length;wt<At;wt++)be[wt]=s.COLOR_ATTACHMENT0+wt;be.length=qe.length,Ze=!0}}else be[0]!==s.COLOR_ATTACHMENT0&&(be[0]=s.COLOR_ATTACHMENT0,Ze=!0);else be[0]!==s.BACK&&(be[0]=s.BACK,Ze=!0);Ze&&(t.isWebGL2?s.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Kt(B){return v!==B?(s.useProgram(B),v=B,!0):!1}const je={[rs]:s.FUNC_ADD,[hy]:s.FUNC_SUBTRACT,[py]:s.FUNC_REVERSE_SUBTRACT};if(i)je[Tm]=s.MIN,je[wm]=s.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(je[Tm]=B.MIN_EXT,je[wm]=B.MAX_EXT)}const tt={[my]:s.ZERO,[gy]:s.ONE,[_y]:s.SRC_COLOR,[ef]:s.SRC_ALPHA,[My]:s.SRC_ALPHA_SATURATE,[Sy]:s.DST_COLOR,[xy]:s.DST_ALPHA,[vy]:s.ONE_MINUS_SRC_COLOR,[tf]:s.ONE_MINUS_SRC_ALPHA,[Ey]:s.ONE_MINUS_DST_COLOR,[yy]:s.ONE_MINUS_DST_ALPHA,[Ty]:s.CONSTANT_COLOR,[wy]:s.ONE_MINUS_CONSTANT_COLOR,[Ay]:s.CONSTANT_ALPHA,[by]:s.ONE_MINUS_CONSTANT_ALPHA};function He(B,we,be,Ze,qe,wt,At,Wt,an,Et){if(B===Nr){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(De(s.BLEND),y=!0),B!==fy){if(B!==C||Et!==ae){if((A!==rs||O!==rs)&&(s.blendEquation(s.FUNC_ADD),A=rs,O=rs),Et)switch(B){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFunc(s.ONE,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}L=null,z=null,F=null,ce=null,R.set(0,0,0),D=0,C=B,ae=Et}return}qe=qe||we,wt=wt||be,At=At||Ze,(we!==A||qe!==O)&&(s.blendEquationSeparate(je[we],je[qe]),A=we,O=qe),(be!==L||Ze!==z||wt!==F||At!==ce)&&(s.blendFuncSeparate(tt[be],tt[Ze],tt[wt],tt[At]),L=be,z=Ze,F=wt,ce=At),(Wt.equals(R)===!1||an!==D)&&(s.blendColor(Wt.r,Wt.g,Wt.b,an),R.copy(Wt),D=an),C=B,ae=!1}function Lt(B,we){B.side===Ti?Be(s.CULL_FACE):De(s.CULL_FACE);let be=B.side===zn;we&&(be=!be),st(be),B.blending===ao&&B.transparent===!1?He(Nr):He(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),u.setMask(B.colorWrite);const Ze=B.stencilWrite;h.setTest(Ze),Ze&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),J(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(B){ue!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),ue=B)}function N(B){B!==cy?(De(s.CULL_FACE),B!==_e&&(B===ym?s.cullFace(s.BACK):B===uy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),_e=B}function b(B){B!==V&&(W&&s.lineWidth(B),V=B)}function J(B,we,be){B?(De(s.POLYGON_OFFSET_FILL),(Q!==we||oe!==be)&&(s.polygonOffset(we,be),Q=we,oe=be)):Be(s.POLYGON_OFFSET_FILL)}function ve(B){B?De(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function me(B){B===void 0&&(B=s.TEXTURE0+le-1),I!==B&&(s.activeTexture(B),I=B)}function xe(B,we,be){be===void 0&&(I===null?be=s.TEXTURE0+le-1:be=I);let Ze=G[be];Ze===void 0&&(Ze={type:void 0,texture:void 0},G[be]=Ze),(Ze.type!==B||Ze.texture!==we)&&(I!==be&&(s.activeTexture(be),I=be),s.bindTexture(B,we||Ce[B]),Ze.type=B,Ze.texture=we)}function Ve(){const B=G[I];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(B){fe.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function yt(B){Ee.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ee.copy(B))}function Nt(B,we){let be=m.get(we);be===void 0&&(be=new WeakMap,m.set(we,be));let Ze=be.get(B);Ze===void 0&&(Ze=s.getUniformBlockIndex(we,B.name),be.set(B,Ze))}function at(B,we){const Ze=m.get(we).get(B);p.get(we)!==Ze&&(s.uniformBlockBinding(we,Ze,B.__bindingPointIndex),p.set(we,Ze))}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},I=null,G={},S={},E=new WeakMap,M=[],v=null,y=!1,C=null,A=null,L=null,z=null,O=null,F=null,ce=null,R=new rt(0,0,0),D=0,ae=!1,ue=null,_e=null,V=null,Q=null,oe=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:De,disable:Be,bindFramebuffer:ft,drawBuffers:ne,useProgram:Kt,setBlending:He,setMaterial:Lt,setFlipSided:st,setCullFace:N,setLineWidth:b,setPolygonOffset:J,setScissorTest:ve,activeTexture:me,bindTexture:xe,unbindTexture:Ve,compressedTexImage2D:Re,compressedTexImage3D:Ue,texImage2D:We,texImage3D:Oe,updateUBOMapping:Nt,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:Je,texSubImage2D:Xe,texSubImage3D:ot,compressedTexSubImage2D:pe,compressedTexSubImage3D:vt,scissor:nt,viewport:yt,reset:Me}}function MA(s,e,t,i,o,a,c){const u=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):Sa("canvas")}function M(N,b,J,ve){let me=1;if((N.width>ve||N.height>ve)&&(me=ve/Math.max(N.width,N.height)),me<1||b===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const xe=b?gc:Math.floor,Ve=xe(me*N.width),Re=xe(me*N.height);m===void 0&&(m=E(Ve,Re));const Ue=J?E(Ve,Re):m;return Ue.width=Ve,Ue.height=Re,Ue.getContext("2d").drawImage(N,0,0,Ve,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ve+"x"+Re+")."),Ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function v(N){return cf(N.width)&&cf(N.height)}function y(N){return u?!1:N.wrapS!==ni||N.wrapT!==ni||N.minFilter!==fn&&N.minFilter!==Bn}function C(N,b){return N.generateMipmaps&&b&&N.minFilter!==fn&&N.minFilter!==Bn}function A(N){s.generateMipmap(N)}function L(N,b,J,ve,me=!1){if(u===!1)return b;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xe=b;if(b===s.RED&&(J===s.FLOAT&&(xe=s.R32F),J===s.HALF_FLOAT&&(xe=s.R16F),J===s.UNSIGNED_BYTE&&(xe=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.R8UI),J===s.UNSIGNED_SHORT&&(xe=s.R16UI),J===s.UNSIGNED_INT&&(xe=s.R32UI),J===s.BYTE&&(xe=s.R8I),J===s.SHORT&&(xe=s.R16I),J===s.INT&&(xe=s.R32I)),b===s.RG&&(J===s.FLOAT&&(xe=s.RG32F),J===s.HALF_FLOAT&&(xe=s.RG16F),J===s.UNSIGNED_BYTE&&(xe=s.RG8)),b===s.RGBA){const Ve=me?fc:Tt.getTransfer(ve);J===s.FLOAT&&(xe=s.RGBA32F),J===s.HALF_FLOAT&&(xe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xe=Ve===Ot?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function z(N,b,J){return C(N,J)===!0||N.isFramebufferTexture&&N.minFilter!==fn&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function O(N){return N===fn||N===sf||N===oc?s.NEAREST:s.LINEAR}function F(N){const b=N.target;b.removeEventListener("dispose",F),R(b),b.isVideoTexture&&p.delete(b)}function ce(N){const b=N.target;b.removeEventListener("dispose",ce),ae(b)}function R(N){const b=i.get(N);if(b.__webglInit===void 0)return;const J=N.source,ve=_.get(J);if(ve){const me=ve[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(N),Object.keys(ve).length===0&&_.delete(J)}i.remove(N)}function D(N){const b=i.get(N);s.deleteTexture(b.__webglTexture);const J=N.source,ve=_.get(J);delete ve[b.__cacheKey],c.memory.textures--}function ae(N){const b=N.texture,J=i.get(N),ve=i.get(b);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),c.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(J.__webglFramebuffer[me]))for(let xe=0;xe<J.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(J.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(J.__webglFramebuffer[me]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[me])}else{if(Array.isArray(J.__webglFramebuffer))for(let me=0;me<J.__webglFramebuffer.length;me++)s.deleteFramebuffer(J.__webglFramebuffer[me]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let me=0;me<J.__webglColorRenderbuffer.length;me++)J.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[me]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let me=0,xe=b.length;me<xe;me++){const Ve=i.get(b[me]);Ve.__webglTexture&&(s.deleteTexture(Ve.__webglTexture),c.memory.textures--),i.remove(b[me])}i.remove(b),i.remove(N)}let ue=0;function _e(){ue=0}function V(){const N=ue;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),ue+=1,N}function Q(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function oe(N,b){const J=i.get(N);if(N.isVideoTexture&&Lt(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(J,N,b);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function le(N,b){const J=i.get(N);if(N.version>0&&J.__version!==N.version){fe(J,N,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function W(N,b){const J=i.get(N);if(N.version>0&&J.__version!==N.version){fe(J,N,b);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function Z(N,b){const J=i.get(N);if(N.version>0&&J.__version!==N.version){Ee(J,N,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const j={[ho]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[dc]:s.MIRRORED_REPEAT},I={[fn]:s.NEAREST,[sf]:s.NEAREST_MIPMAP_NEAREST,[oc]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[L_]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},G={[iS]:s.NEVER,[cS]:s.ALWAYS,[rS]:s.LESS,[H_]:s.LEQUAL,[sS]:s.EQUAL,[lS]:s.GEQUAL,[oS]:s.GREATER,[aS]:s.NOTEQUAL};function q(N,b,J){if(J?(s.texParameteri(N,s.TEXTURE_WRAP_S,j[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,j[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,j[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,I[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,I[b.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==ni||b.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,O(b.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,O(b.minFilter)),b.minFilter!==fn&&b.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,G[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===fn||b.minFilter!==oc&&b.minFilter!==ds||b.type===Yi&&e.has("OES_texture_float_linear")===!1||u===!1&&b.type===xa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(s.texParameterf(N,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function te(N,b){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const ve=b.source;let me=_.get(ve);me===void 0&&(me={},_.set(ve,me));const xe=Q(b);if(xe!==N.__cacheKey){me[xe]===void 0&&(me[xe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),me[xe].usedTimes++;const Ve=me[N.__cacheKey];Ve!==void 0&&(me[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&D(b)),N.__cacheKey=xe,N.__webglTexture=me[xe].texture}return J}function fe(N,b,J){let ve=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=s.TEXTURE_3D);const me=te(N,b),xe=b.source;t.bindTexture(ve,N.__webglTexture,s.TEXTURE0+J);const Ve=i.get(xe);if(xe.version!==Ve.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ue=b.colorSpace===ri?null:Tt.getPrimaries(b.colorSpace),Xe=b.colorSpace===ri||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const ot=y(b)&&v(b.image)===!1;let pe=M(b.image,ot,!1,o.maxTextureSize);pe=st(b,pe);const vt=v(pe)||u,dt=a.convert(b.format,b.colorSpace);let Je=a.convert(b.type),We=L(b.internalFormat,dt,Je,b.colorSpace,b.isVideoTexture);q(ve,b,vt);let Oe;const nt=b.mipmaps,yt=u&&b.isVideoTexture!==!0&&We!==O_,Nt=Ve.__version===void 0||me===!0,at=z(b,pe,vt);if(b.isDepthTexture)We=s.DEPTH_COMPONENT,u?b.type===Yi?We=s.DEPTH_COMPONENT32F:b.type===Cr?We=s.DEPTH_COMPONENT24:b.type===ls?We=s.DEPTH24_STENCIL8:We=s.DEPTH_COMPONENT16:b.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===cs&&We===s.DEPTH_COMPONENT&&b.type!==xf&&b.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Cr,Je=a.convert(b.type)),b.format===po&&We===s.DEPTH_COMPONENT&&(We=s.DEPTH_STENCIL,b.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ls,Je=a.convert(b.type))),Nt&&(yt?t.texStorage2D(s.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,We,pe.width,pe.height,0,dt,Je,null));else if(b.isDataTexture)if(nt.length>0&&vt){yt&&Nt&&t.texStorage2D(s.TEXTURE_2D,at,We,nt[0].width,nt[0].height);for(let Me=0,B=nt.length;Me<B;Me++)Oe=nt[Me],yt?t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,dt,Je,Oe.data):t.texImage2D(s.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,dt,Je,Oe.data);b.generateMipmaps=!1}else yt?(Nt&&t.texStorage2D(s.TEXTURE_2D,at,We,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,dt,Je,pe.data)):t.texImage2D(s.TEXTURE_2D,0,We,pe.width,pe.height,0,dt,Je,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){yt&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,We,nt[0].width,nt[0].height,pe.depth);for(let Me=0,B=nt.length;Me<B;Me++)Oe=nt[Me],b.format!==ii?dt!==null?yt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,pe.depth,dt,Oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,pe.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,pe.depth,dt,Je,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,We,Oe.width,Oe.height,pe.depth,0,dt,Je,Oe.data)}else{yt&&Nt&&t.texStorage2D(s.TEXTURE_2D,at,We,nt[0].width,nt[0].height);for(let Me=0,B=nt.length;Me<B;Me++)Oe=nt[Me],b.format!==ii?dt!==null?yt?t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,dt,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,dt,Je,Oe.data):t.texImage2D(s.TEXTURE_2D,Me,We,Oe.width,Oe.height,0,dt,Je,Oe.data)}else if(b.isDataArrayTexture)yt?(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,We,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,dt,Je,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,dt,Je,pe.data);else if(b.isData3DTexture)yt?(Nt&&t.texStorage3D(s.TEXTURE_3D,at,We,pe.width,pe.height,pe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,dt,Je,pe.data)):t.texImage3D(s.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,dt,Je,pe.data);else if(b.isFramebufferTexture){if(Nt)if(yt)t.texStorage2D(s.TEXTURE_2D,at,We,pe.width,pe.height);else{let Me=pe.width,B=pe.height;for(let we=0;we<at;we++)t.texImage2D(s.TEXTURE_2D,we,We,Me,B,0,dt,Je,null),Me>>=1,B>>=1}}else if(nt.length>0&&vt){yt&&Nt&&t.texStorage2D(s.TEXTURE_2D,at,We,nt[0].width,nt[0].height);for(let Me=0,B=nt.length;Me<B;Me++)Oe=nt[Me],yt?t.texSubImage2D(s.TEXTURE_2D,Me,0,0,dt,Je,Oe):t.texImage2D(s.TEXTURE_2D,Me,We,dt,Je,Oe);b.generateMipmaps=!1}else yt?(Nt&&t.texStorage2D(s.TEXTURE_2D,at,We,pe.width,pe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Je,pe)):t.texImage2D(s.TEXTURE_2D,0,We,dt,Je,pe);C(b,vt)&&A(ve),Ve.__version=xe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ee(N,b,J){if(b.image.length!==6)return;const ve=te(N,b),me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+J);const xe=i.get(me);if(me.version!==xe.__version||ve===!0){t.activeTexture(s.TEXTURE0+J);const Ve=Tt.getPrimaries(Tt.workingColorSpace),Re=b.colorSpace===ri?null:Tt.getPrimaries(b.colorSpace),Ue=b.colorSpace===ri||Ve===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let Me=0;Me<6;Me++)!Xe&&!ot?pe[Me]=M(b.image[Me],!1,!0,o.maxCubemapSize):pe[Me]=ot?b.image[Me].image:b.image[Me],pe[Me]=st(b,pe[Me]);const vt=pe[0],dt=v(vt)||u,Je=a.convert(b.format,b.colorSpace),We=a.convert(b.type),Oe=L(b.internalFormat,Je,We,b.colorSpace),nt=u&&b.isVideoTexture!==!0,yt=xe.__version===void 0||ve===!0;let Nt=z(b,vt,dt);q(s.TEXTURE_CUBE_MAP,b,dt);let at;if(Xe){nt&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,Oe,vt.width,vt.height);for(let Me=0;Me<6;Me++){at=pe[Me].mipmaps;for(let B=0;B<at.length;B++){const we=at[B];b.format!==ii?Je!==null?nt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,0,0,we.width,we.height,Je,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,0,0,we.width,we.height,Je,We,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B,Oe,we.width,we.height,0,Je,We,we.data)}}}else{at=b.mipmaps,nt&&yt&&(at.length>0&&Nt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,Oe,pe[0].width,pe[0].height));for(let Me=0;Me<6;Me++)if(ot){nt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe[Me].width,pe[Me].height,Je,We,pe[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,pe[Me].width,pe[Me].height,0,Je,We,pe[Me].data);for(let B=0;B<at.length;B++){const be=at[B].image[Me].image;nt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,0,0,be.width,be.height,Je,We,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,Oe,be.width,be.height,0,Je,We,be.data)}}else{nt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,We,pe[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Oe,Je,We,pe[Me]);for(let B=0;B<at.length;B++){const we=at[B];nt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,0,0,Je,We,we.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,B+1,Oe,Je,We,we.image[Me])}}}C(b,dt)&&A(s.TEXTURE_CUBE_MAP),xe.__version=me.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Te(N,b,J,ve,me,xe){const Ve=a.convert(J.format,J.colorSpace),Re=a.convert(J.type),Ue=L(J.internalFormat,Ve,Re,J.colorSpace);if(!i.get(b).__hasExternalTextures){const ot=Math.max(1,b.width>>xe),pe=Math.max(1,b.height>>xe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,xe,Ue,ot,pe,b.depth,0,Ve,Re,null):t.texImage2D(me,xe,Ue,ot,pe,0,Ve,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),He(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,i.get(J).__webglTexture,0,tt(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,i.get(J).__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(N,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer&&!b.stencilBuffer){let ve=u===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||He(b)){const me=b.depthTexture;me&&me.isDepthTexture&&(me.type===Yi?ve=s.DEPTH_COMPONENT32F:me.type===Cr&&(ve=s.DEPTH_COMPONENT24));const xe=tt(b);He(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,ve,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,ve,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(b.depthBuffer&&b.stencilBuffer){const ve=tt(b);J&&He(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,b.width,b.height):He(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const ve=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let me=0;me<ve.length;me++){const xe=ve[me],Ve=a.convert(xe.format,xe.colorSpace),Re=a.convert(xe.type),Ue=L(xe.internalFormat,Ve,Re,xe.colorSpace),Xe=tt(b);J&&He(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ue,b.width,b.height):He(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,Ue,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe(b.depthTexture,0);const ve=i.get(b.depthTexture).__webglTexture,me=tt(b);if(b.depthTexture.format===cs)He(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(b.depthTexture.format===po)He(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Be(N){const b=i.get(N),J=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,N)}else if(J){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]=s.createRenderbuffer(),Ce(b.__webglDepthbuffer[ve],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Ce(b.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(N,b,J){const ve=i.get(N);b!==void 0&&Te(ve.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Be(N)}function ne(N){const b=N.texture,J=i.get(N),ve=i.get(b);N.addEventListener("dispose",ce),N.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=b.version,c.memory.textures++);const me=N.isWebGLCubeRenderTarget===!0,xe=N.isWebGLMultipleRenderTargets===!0,Ve=v(N)||u;if(me){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(u&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)J.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else J.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(u&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<b.mipmaps.length;Re++)J.__webglFramebuffer[Re]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(xe)if(o.drawBuffers){const Re=N.texture;for(let Ue=0,Xe=Re.length;Ue<Xe;Ue++){const ot=i.get(Re[Ue]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&N.samples>0&&He(N)===!1){const Re=xe?b:[b];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Re.length;Ue++){const Xe=Re[Ue];J.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ue]);const ot=a.convert(Xe.format,Xe.colorSpace),pe=a.convert(Xe.type),vt=L(Xe.internalFormat,ot,pe,Xe.colorSpace,N.isXRRenderTarget===!0),dt=tt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,vt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),q(s.TEXTURE_CUBE_MAP,b,Ve);for(let Re=0;Re<6;Re++)if(u&&b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Te(J.__webglFramebuffer[Re][Ue],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else Te(J.__webglFramebuffer[Re],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);C(b,Ve)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Re=N.texture;for(let Ue=0,Xe=Re.length;Ue<Xe;Ue++){const ot=Re[Ue],pe=i.get(ot);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),q(s.TEXTURE_2D,ot,Ve),Te(J.__webglFramebuffer,N,ot,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),C(ot,Ve)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(u?Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,ve.__webglTexture),q(Re,b,Ve),u&&b.mipmaps&&b.mipmaps.length>0)for(let Ue=0;Ue<b.mipmaps.length;Ue++)Te(J.__webglFramebuffer[Ue],N,b,s.COLOR_ATTACHMENT0,Re,Ue);else Te(J.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Re,0);C(b,Ve)&&A(Re),t.unbindTexture()}N.depthBuffer&&Be(N)}function Kt(N){const b=v(N)||u,J=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ve=0,me=J.length;ve<me;ve++){const xe=J[ve];if(C(xe,b)){const Ve=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=i.get(xe).__webglTexture;t.bindTexture(Ve,Re),A(Ve),t.unbindTexture()}}}function je(N){if(u&&N.samples>0&&He(N)===!1){const b=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],J=N.width,ve=N.height;let me=s.COLOR_BUFFER_BIT;const xe=[],Ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=i.get(N),Ue=N.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Xe=0;Xe<b.length;Xe++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){xe.push(s.COLOR_ATTACHMENT0+Xe),N.depthBuffer&&xe.push(Ve);const ot=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(ot===!1&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ve])),Ue){const pe=i.get(b[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,J,ve,0,0,J,ve,me,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<b.length;Xe++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]);const ot=i.get(b[Xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function tt(N){return Math.min(o.maxSamples,N.samples)}function He(N){const b=i.get(N);return u&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Lt(N){const b=c.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function st(N,b){const J=N.colorSpace,ve=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===lf||J!==rn&&J!==ri&&(Tt.getTransfer(J)===Ot?u===!1?e.has("EXT_sRGB")===!0&&ve===ii?(N.format=lf,N.minFilter=Bn,N.generateMipmaps=!1):b=G_.sRGBToLinear(b):(ve!==ii||me!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}this.allocateTextureUnit=V,this.resetTextureUnits=_e,this.setTexture2D=oe,this.setTexture2DArray=le,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=ft,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=He}function TA(s,e,t){const i=t.isWebGL2;function o(a,c=ri){let u;const f=Tt.getTransfer(c);if(a===Dr)return s.UNSIGNED_BYTE;if(a===N_)return s.UNSIGNED_SHORT_4_4_4_4;if(a===I_)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Wy)return s.BYTE;if(a===jy)return s.SHORT;if(a===xf)return s.UNSIGNED_SHORT;if(a===P_)return s.INT;if(a===Cr)return s.UNSIGNED_INT;if(a===Yi)return s.FLOAT;if(a===xa)return i?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===Xy)return s.ALPHA;if(a===ii)return s.RGBA;if(a===qy)return s.LUMINANCE;if(a===Yy)return s.LUMINANCE_ALPHA;if(a===cs)return s.DEPTH_COMPONENT;if(a===po)return s.DEPTH_STENCIL;if(a===lf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===Ky)return s.RED;if(a===D_)return s.RED_INTEGER;if(a===$y)return s.RG;if(a===U_)return s.RG_INTEGER;if(a===F_)return s.RGBA_INTEGER;if(a===hd||a===pd||a===md||a===gd)if(f===Ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===hd)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pd)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===md)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gd)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===hd)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pd)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===md)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gd)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bm||a===Rm||a===Cm||a===Lm)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===bm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cm)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Lm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===O_)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Pm||a===Nm)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Pm)return f===Ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Nm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Im||a===Dm||a===Um||a===Fm||a===Om||a===km||a===Bm||a===zm||a===Hm||a===Vm||a===Gm||a===Wm||a===jm||a===Xm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Im)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Um)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Fm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Om)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===km)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xm)return f===Ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_d||a===qm||a===Ym)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===_d)return f===Ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ym)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Zy||a===Km||a===$m||a===Zm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===_d)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Km)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===$m)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ls?i?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:o}}class wA extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,i),y=this._getHandJoint(h,M);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bA extends So{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",f=1,h=null,p=null,m=null,_=null,S=null,E=null;const M=t.getContextAttributes();let v=null,y=null;const C=[],A=[],L=new _t;let z=null;const O=new Ln;O.layers.enable(1),O.viewport=new Pt;const F=new Ln;F.layers.enable(2),F.viewport=new Pt;const ce=[O,F],R=new wA;R.layers.enable(1),R.layers.enable(2);let D=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=C[q];return te===void 0&&(te=new Hd,C[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=C[q];return te===void 0&&(te=new Hd,C[q]=te),te.getGripSpace()},this.getHand=function(q){let te=C[q];return te===void 0&&(te=new Hd,C[q]=te),te.getHandSpace()};function ue(q){const te=A.indexOf(q.inputSource);if(te===-1)return;const fe=C[te];fe!==void 0&&(fe.update(q.inputSource,q.frame,h||c),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function _e(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",_e),o.removeEventListener("inputsourceschange",V);for(let q=0;q<C.length;q++){const te=A[q];te!==null&&(A[q]=null,C[q].disconnect(te))}D=null,ae=null,e.setRenderTarget(v),S=null,_=null,m=null,o=null,y=null,G.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",_e),o.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,te),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),y=new fs(S.framebufferWidth,S.framebufferHeight,{format:ii,type:Dr,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let te=null,fe=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?po:cs,fe=M.stencil?ls:Cr);const Te={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};m=new XRWebGLBinding(o,t),_=m.createProjectionLayer(Te),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),y=new fs(_.textureWidth,_.textureHeight,{format:ii,type:Dr,depthTexture:new ev(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Ce=e.properties.get(y);Ce.__ignoreDepthValues=_.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(u),G.setContext(o),G.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function V(q){for(let te=0;te<q.removed.length;te++){const fe=q.removed[te],Ee=A.indexOf(fe);Ee>=0&&(A[Ee]=null,C[Ee].disconnect(fe))}for(let te=0;te<q.added.length;te++){const fe=q.added[te];let Ee=A.indexOf(fe);if(Ee===-1){for(let Ce=0;Ce<C.length;Ce++)if(Ce>=A.length){A.push(fe),Ee=Ce;break}else if(A[Ce]===null){A[Ce]=fe,Ee=Ce;break}if(Ee===-1)break}const Te=C[Ee];Te&&Te.connect(fe)}}const Q=new X,oe=new X;function le(q,te,fe){Q.setFromMatrixPosition(te.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const Ee=Q.distanceTo(oe),Te=te.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,De=Te[14]/(Te[10]-1),Be=Te[14]/(Te[10]+1),ft=(Te[9]+1)/Te[5],ne=(Te[9]-1)/Te[5],Kt=(Te[8]-1)/Te[0],je=(Ce[8]+1)/Ce[0],tt=De*Kt,He=De*je,Lt=Ee/(-Kt+je),st=Lt*-Kt;te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const N=De+Lt,b=Be+Lt,J=tt-st,ve=He+(Ee-st),me=ft*Be/b*N,xe=ne*Be/b*N;q.projectionMatrix.makePerspective(J,ve,me,xe,N,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;R.near=F.near=O.near=q.near,R.far=F.far=O.far=q.far,(D!==R.near||ae!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,ae=R.far);const te=q.parent,fe=R.cameras;W(R,te);for(let Ee=0;Ee<fe.length;Ee++)W(fe[Ee],te);fe.length===2?le(R,O,F):R.projectionMatrix.copy(O.projectionMatrix),Z(q,R,te)};function Z(q,te,fe){fe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=go*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(q){f=q,_!==null&&(_.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)};let j=null;function I(q,te){if(p=te.getViewerPose(h||c),E=te,p!==null){const fe=p.views;S!==null&&(e.setRenderTargetFramebuffer(y,S.framebuffer),e.setRenderTarget(y));let Ee=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let Te=0;Te<fe.length;Te++){const Ce=fe[Te];let De=null;if(S!==null)De=S.getViewport(Ce);else{const ft=m.getViewSubImage(_,Ce);De=ft.viewport,Te===0&&(e.setRenderTargetTextures(y,ft.colorTexture,_.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(y))}let Be=ce[Te];Be===void 0&&(Be=new Ln,Be.layers.enable(Te),Be.viewport=new Pt,ce[Te]=Be),Be.matrix.fromArray(Ce.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ce.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(De.x,De.y,De.width,De.height),Te===0&&(R.matrix.copy(Be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(Be)}}for(let fe=0;fe<C.length;fe++){const Ee=A[fe],Te=C[fe];Ee!==null&&Te!==void 0&&Te.update(Ee,te,h||c)}j&&j(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),E=null}const G=new J_;G.setAnimationLoop(I),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}function RA(s,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function i(v,y){y.color.getRGB(v.fogColor.value,$_(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function o(v,y,C,A,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(v,y):y.isMeshToonMaterial?(a(v,y),m(v,y)):y.isMeshPhongMaterial?(a(v,y),p(v,y)):y.isMeshStandardMaterial?(a(v,y),_(v,y),y.isMeshPhysicalMaterial&&S(v,y,L)):y.isMeshMatcapMaterial?(a(v,y),E(v,y)):y.isMeshDepthMaterial?a(v,y):y.isMeshDistanceMaterial?(a(v,y),M(v,y)):y.isMeshNormalMaterial?a(v,y):y.isLineBasicMaterial?(c(v,y),y.isLineDashedMaterial&&u(v,y)):y.isPointsMaterial?f(v,y,C,A):y.isSpriteMaterial?h(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===zn&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===zn&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const C=e.get(y).envMap;if(C&&(v.envMap.value=C,v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap){v.lightMap.value=y.lightMap;const A=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=y.lightMapIntensity*A,t(y.lightMap,v.lightMapTransform)}y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function c(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function u(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function f(v,y,C,A){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*C,v.scale.value=A*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function h(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function p(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function m(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function _(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),e.get(y).envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function S(v,y,C){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&v.clearcoatNormalScale.value.negate())),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,y){y.matcap&&(v.matcap.value=y.matcap)}function M(v,y){const C=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function CA(s,e,t,i){let o={},a={},c=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(C,A){const L=A.program;i.uniformBlockBinding(C,L)}function h(C,A){let L=o[C.id];L===void 0&&(E(C),L=p(C),o[C.id]=L,C.addEventListener("dispose",v));const z=A.program;i.updateUBOMapping(C,z);const O=e.render.frame;a[C.id]!==O&&(_(C),a[C.id]=O)}function p(C){const A=m();C.__bindingPointIndex=A;const L=s.createBuffer(),z=C.__size,O=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,z,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,L),L}function m(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const A=o[C.id],L=C.uniforms,z=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let O=0,F=L.length;O<F;O++){const ce=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,D=ce.length;R<D;R++){const ae=ce[R];if(S(ae,O,R,z)===!0){const ue=ae.__offset,_e=Array.isArray(ae.value)?ae.value:[ae.value];let V=0;for(let Q=0;Q<_e.length;Q++){const oe=_e[Q],le=M(oe);typeof oe=="number"||typeof oe=="boolean"?(ae.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ue+V,ae.__data)):oe.isMatrix3?(ae.__data[0]=oe.elements[0],ae.__data[1]=oe.elements[1],ae.__data[2]=oe.elements[2],ae.__data[3]=0,ae.__data[4]=oe.elements[3],ae.__data[5]=oe.elements[4],ae.__data[6]=oe.elements[5],ae.__data[7]=0,ae.__data[8]=oe.elements[6],ae.__data[9]=oe.elements[7],ae.__data[10]=oe.elements[8],ae.__data[11]=0):(oe.toArray(ae.__data,V),V+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,ae.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,A,L,z){const O=C.value,F=A+"_"+L;if(z[F]===void 0)return typeof O=="number"||typeof O=="boolean"?z[F]=O:z[F]=O.clone(),!0;{const ce=z[F];if(typeof O=="number"||typeof O=="boolean"){if(ce!==O)return z[F]=O,!0}else if(ce.equals(O)===!1)return ce.copy(O),!0}return!1}function E(C){const A=C.uniforms;let L=0;const z=16;for(let F=0,ce=A.length;F<ce;F++){const R=Array.isArray(A[F])?A[F]:[A[F]];for(let D=0,ae=R.length;D<ae;D++){const ue=R[D],_e=Array.isArray(ue.value)?ue.value:[ue.value];for(let V=0,Q=_e.length;V<Q;V++){const oe=_e[V],le=M(oe),W=L%z;W!==0&&z-W<le.boundary&&(L+=z-W),ue.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=le.storage}}}const O=L%z;return O>0&&(L+=z-O),C.__size=L,C.__cache={},this}function M(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function v(C){const A=C.target;A.removeEventListener("dispose",v);const L=c.indexOf(A.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[A.id]),delete o[A.id],delete a[A.id]}function y(){for(const C in o)s.deleteBuffer(o[C]);c=[],o={},a={}}return{bind:f,update:h,dispose:y}}class ov{constructor(e={}){const{canvas:t=wS(),context:i=null,depth:o=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=c;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,v=null;const y=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Ir,this.toneMappingExposure=1;const A=this;let L=!1,z=0,O=0,F=null,ce=-1,R=null;const D=new Pt,ae=new Pt;let ue=null;const _e=new rt(0);let V=0,Q=t.width,oe=t.height,le=1,W=null,Z=null;const j=new Pt(0,0,Q,oe),I=new Pt(0,0,Q,oe);let G=!1;const q=new Ef;let te=!1,fe=!1,Ee=null;const Te=new mt,Ce=new _t,De=new X,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return F===null?le:1}let ne=i;function Kt(P,K){for(let re=0;re<P.length;re++){const se=P[re],ie=t.getContext(se,K);if(ie!==null)return ie}return null}try{const P={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vf}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",we,!1),ne===null){const K=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&K.shift(),ne=Kt(K,P),ne===null)throw Kt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let je,tt,He,Lt,st,N,b,J,ve,me,xe,Ve,Re,Ue,Xe,ot,pe,vt,dt,Je,We,Oe,nt,yt;function Nt(){je=new BT(ne),tt=new IT(ne,je,e),je.init(tt),Oe=new TA(ne,je,tt),He=new EA(ne,je,tt),Lt=new VT(ne),st=new lA,N=new MA(ne,je,He,st,tt,Oe,Lt),b=new UT(A),J=new kT(A),ve=new $S(ne,tt),nt=new PT(ne,je,ve,tt),me=new zT(ne,ve,Lt,nt),xe=new XT(ne,me,ve,Lt),dt=new jT(ne,tt,N),ot=new DT(st),Ve=new aA(A,b,J,je,tt,nt,ot),Re=new RA(A,st),Ue=new uA,Xe=new gA(je,tt),vt=new LT(A,b,J,He,xe,_,f),pe=new SA(A,xe,tt),yt=new CA(ne,Lt,tt,He),Je=new NT(ne,je,Lt,tt),We=new HT(ne,je,Lt,tt),Lt.programs=Ve.programs,A.capabilities=tt,A.extensions=je,A.properties=st,A.renderLists=Ue,A.shadowMap=pe,A.state=He,A.info=Lt}Nt();const at=new bA(A,ne);this.xr=at,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const P=je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(Q,oe,!1))},this.getSize=function(P){return P.set(Q,oe)},this.setSize=function(P,K,re=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=P,oe=K,t.width=Math.floor(P*le),t.height=Math.floor(K*le),re===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(Q*le,oe*le).floor()},this.setDrawingBufferSize=function(P,K,re){Q=P,oe=K,le=re,t.width=Math.floor(P*re),t.height=Math.floor(K*re),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,K,re,se){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,K,re,se),He.viewport(D.copy(j).multiplyScalar(le).floor())},this.getScissor=function(P){return P.copy(I)},this.setScissor=function(P,K,re,se){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,K,re,se),He.scissor(ae.copy(I).multiplyScalar(le).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(P){He.setScissorTest(G=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(P=!0,K=!0,re=!0){let se=0;if(P){let ie=!1;if(F!==null){const Le=F.texture.format;ie=Le===F_||Le===U_||Le===D_}if(ie){const Le=F.texture.type,Ge=Le===Dr||Le===Cr||Le===xf||Le===ls||Le===N_||Le===I_,$e=vt.getClearColor(),Ne=vt.getClearAlpha(),lt=$e.r,et=$e.g,it=$e.b;Ge?(S[0]=lt,S[1]=et,S[2]=it,S[3]=Ne,ne.clearBufferuiv(ne.COLOR,0,S)):(E[0]=lt,E[1]=et,E[2]=it,E[3]=Ne,ne.clearBufferiv(ne.COLOR,0,E))}else se|=ne.COLOR_BUFFER_BIT}K&&(se|=ne.DEPTH_BUFFER_BIT),re&&(se|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ue.dispose(),Xe.dispose(),st.dispose(),b.dispose(),J.dispose(),xe.dispose(),nt.dispose(),yt.dispose(),Ve.dispose(),at.dispose(),at.removeEventListener("sessionstart",an),at.removeEventListener("sessionend",Et),Ee&&(Ee.dispose(),Ee=null),Jt.stop()};function Me(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=Lt.autoReset,K=pe.enabled,re=pe.autoUpdate,se=pe.needsUpdate,ie=pe.type;Nt(),Lt.autoReset=P,pe.enabled=K,pe.autoUpdate=re,pe.needsUpdate=se,pe.type=ie}function we(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function be(P){const K=P.target;K.removeEventListener("dispose",be),Ze(K)}function Ze(P){qe(P),st.remove(P)}function qe(P){const K=st.get(P).programs;K!==void 0&&(K.forEach(function(re){Ve.releaseProgram(re)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,re,se,ie,Le){K===null&&(K=Be);const Ge=ie.isMesh&&ie.matrixWorld.determinant()<0,$e=bc(P,K,re,se,ie);He.setMaterial(se,Ge);let Ne=re.index,lt=1;if(se.wireframe===!0){if(Ne=me.getWireframeAttribute(re),Ne===void 0)return;lt=2}const et=re.drawRange,it=re.attributes.position;let It=et.start*lt,Tn=(et.start+et.count)*lt;Le!==null&&(It=Math.max(It,Le.start*lt),Tn=Math.min(Tn,(Le.start+Le.count)*lt)),Ne!==null?(It=Math.max(It,0),Tn=Math.min(Tn,Ne.count)):it!=null&&(It=Math.max(It,0),Tn=Math.min(Tn,it.count));const qt=Tn-It;if(qt<0||qt===1/0)return;nt.setup(ie,se,$e,re,Ne);let Pn,xt=Je;if(Ne!==null&&(Pn=ve.get(Ne),xt=We,xt.setIndex(Pn)),ie.isMesh)se.wireframe===!0?(He.setLineWidth(se.wireframeLinewidth*ft()),xt.setMode(ne.LINES)):xt.setMode(ne.TRIANGLES);else if(ie.isLine){let ct=se.linewidth;ct===void 0&&(ct=1),He.setLineWidth(ct*ft()),ie.isLineSegments?xt.setMode(ne.LINES):ie.isLineLoop?xt.setMode(ne.LINE_LOOP):xt.setMode(ne.LINE_STRIP)}else ie.isPoints?xt.setMode(ne.POINTS):ie.isSprite&&xt.setMode(ne.TRIANGLES);if(ie.isBatchedMesh)xt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)xt.renderInstances(It,qt,ie.count);else if(re.isInstancedBufferGeometry){const ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,wn=Math.min(re.instanceCount,ct);xt.renderInstances(It,qt,wn)}else xt.render(It,qt)};function wt(P,K,re){P.transparent===!0&&P.side===Ti&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,er(P,K,re),P.side=Zi,P.needsUpdate=!0,er(P,K,re),P.side=Ti):er(P,K,re)}this.compile=function(P,K,re=null){re===null&&(re=P),v=Xe.get(re),v.init(),C.push(v),re.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(v.pushLight(ie),ie.castShadow&&v.pushShadow(ie))}),P!==re&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(v.pushLight(ie),ie.castShadow&&v.pushShadow(ie))}),v.setupLights(A._useLegacyLights);const se=new Set;return P.traverse(function(ie){const Le=ie.material;if(Le)if(Array.isArray(Le))for(let Ge=0;Ge<Le.length;Ge++){const $e=Le[Ge];wt($e,re,ie),se.add($e)}else wt(Le,re,ie),se.add(Le)}),C.pop(),v=null,se},this.compileAsync=function(P,K,re=null){const se=this.compile(P,K,re);return new Promise(ie=>{function Le(){if(se.forEach(function(Ge){st.get(Ge).currentProgram.isReady()&&se.delete(Ge)}),se.size===0){ie(P);return}setTimeout(Le,10)}je.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let At=null;function Wt(P){At&&At(P)}function an(){Jt.stop()}function Et(){Jt.start()}const Jt=new J_;Jt.setAnimationLoop(Wt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(P){At=P,at.setAnimationLoop(P),P===null?Jt.stop():Jt.start()},at.addEventListener("sessionstart",an),at.addEventListener("sessionend",Et),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(K),K=at.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,K,F),v=Xe.get(P,C.length),v.init(),C.push(v),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q.setFromProjectionMatrix(Te),fe=this.localClippingEnabled,te=ot.init(this.clippingPlanes,fe),M=Ue.get(P,y.length),M.init(),y.push(M),gn(P,K,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(W,Z),this.info.render.frame++,te===!0&&ot.beginShadows();const re=v.state.shadowsArray;if(pe.render(re,P,K),te===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(M,P),v.setupLights(A._useLegacyLights),K.isArrayCamera){const se=K.cameras;for(let ie=0,Le=se.length;ie<Le;ie++){const Ge=se[ie];wa(M,P,Ge,Ge.viewport)}}else wa(M,P,K);F!==null&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(A,P,K),nt.resetDefaultState(),ce=-1,R=null,C.pop(),C.length>0?v=C[C.length-1]:v=null,y.pop(),y.length>0?M=y[y.length-1]:M=null};function gn(P,K,re,se){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){se&&De.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Te);const Ge=xe.update(P),$e=P.material;$e.visible&&M.push(P,Ge,$e,re,De.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){const Ge=xe.update(P),$e=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),De.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),De.copy(Ge.boundingSphere.center)),De.applyMatrix4(P.matrixWorld).applyMatrix4(Te)),Array.isArray($e)){const Ne=Ge.groups;for(let lt=0,et=Ne.length;lt<et;lt++){const it=Ne[lt],It=$e[it.materialIndex];It&&It.visible&&M.push(P,Ge,It,re,De.z,it)}}else $e.visible&&M.push(P,Ge,$e,re,De.z,null)}}const Le=P.children;for(let Ge=0,$e=Le.length;Ge<$e;Ge++)gn(Le[Ge],K,re,se)}function wa(P,K,re,se){const ie=P.opaque,Le=P.transmissive,Ge=P.transparent;v.setupLightsView(re),te===!0&&ot.setGlobalState(A.clippingPlanes,re),Le.length>0&&Fr(ie,Le,K,re),se&&He.viewport(D.copy(se)),ie.length>0&&Ci(ie,K,re),Le.length>0&&Ci(Le,K,re),Ge.length>0&&Ci(Ge,K,re),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Fr(P,K,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const Le=tt.isWebGL2;Ee===null&&(Ee=new fs(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?xa:Dr,minFilter:ds,samples:Le?4:0})),A.getDrawingBufferSize(Ce),Le?Ee.setSize(Ce.x,Ce.y):Ee.setSize(gc(Ce.x),gc(Ce.y));const Ge=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(_e),V=A.getClearAlpha(),V<1&&A.setClearColor(16777215,.5),A.clear();const $e=A.toneMapping;A.toneMapping=Ir,Ci(P,re,se),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee);let Ne=!1;for(let lt=0,et=K.length;lt<et;lt++){const it=K[lt],It=it.object,Tn=it.geometry,qt=it.material,Pn=it.group;if(qt.side===Ti&&It.layers.test(se.layers)){const xt=qt.side;qt.side=zn,qt.needsUpdate=!0,Or(It,re,se,Tn,qt,Pn),qt.side=xt,qt.needsUpdate=!0,Ne=!0}}Ne===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee)),A.setRenderTarget(Ge),A.setClearColor(_e,V),A.toneMapping=$e}function Ci(P,K,re){const se=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Le=P.length;ie<Le;ie++){const Ge=P[ie],$e=Ge.object,Ne=Ge.geometry,lt=se===null?Ge.material:se,et=Ge.group;$e.layers.test(re.layers)&&Or($e,K,re,Ne,lt,et)}}function Or(P,K,re,se,ie,Le){P.onBeforeRender(A,K,re,se,ie,Le),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(A,K,re,se,P,Le),ie.transparent===!0&&ie.side===Ti&&ie.forceSinglePass===!1?(ie.side=zn,ie.needsUpdate=!0,A.renderBufferDirect(re,K,se,ie,P,Le),ie.side=Zi,ie.needsUpdate=!0,A.renderBufferDirect(re,K,se,ie,P,Le),ie.side=Ti):A.renderBufferDirect(re,K,se,ie,P,Le),P.onAfterRender(A,K,re,se,ie,Le)}function er(P,K,re){K.isScene!==!0&&(K=Be);const se=st.get(P),ie=v.state.lights,Le=v.state.shadowsArray,Ge=ie.state.version,$e=Ve.getParameters(P,ie.state,Le,K,re),Ne=Ve.getProgramCacheKey($e);let lt=se.programs;se.environment=P.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(P.isMeshStandardMaterial?J:b).get(P.envMap||se.environment),lt===void 0&&(P.addEventListener("dispose",be),lt=new Map,se.programs=lt);let et=lt.get(Ne);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===Ge)return ba(P,$e),et}else $e.uniforms=Ve.getUniforms(P),P.onBuild(re,$e,A),P.onBeforeCompile($e,A),et=Ve.acquireProgram($e,Ne),lt.set(Ne,et),se.uniforms=$e.uniforms;const it=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=ot.uniform),ba(P,$e),se.needsLights=Ra(P),se.lightsStateVersion=Ge,se.needsLights&&(it.ambientLightColor.value=ie.state.ambient,it.lightProbe.value=ie.state.probe,it.directionalLights.value=ie.state.directional,it.directionalLightShadows.value=ie.state.directionalShadow,it.spotLights.value=ie.state.spot,it.spotLightShadows.value=ie.state.spotShadow,it.rectAreaLights.value=ie.state.rectArea,it.ltc_1.value=ie.state.rectAreaLTC1,it.ltc_2.value=ie.state.rectAreaLTC2,it.pointLights.value=ie.state.point,it.pointLightShadows.value=ie.state.pointShadow,it.hemisphereLights.value=ie.state.hemi,it.directionalShadowMap.value=ie.state.directionalShadowMap,it.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,it.spotShadowMap.value=ie.state.spotShadowMap,it.spotLightMatrix.value=ie.state.spotLightMatrix,it.spotLightMap.value=ie.state.spotLightMap,it.pointShadowMap.value=ie.state.pointShadowMap,it.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function Aa(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=ac.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function ba(P,K){const re=st.get(P);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function bc(P,K,re,se,ie){K.isScene!==!0&&(K=Be),N.resetTextureUnits();const Le=K.fog,Ge=se.isMeshStandardMaterial?K.environment:null,$e=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:rn,Ne=(se.isMeshStandardMaterial?J:b).get(se.envMap||Ge),lt=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,et=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),it=!!re.morphAttributes.position,It=!!re.morphAttributes.normal,Tn=!!re.morphAttributes.color;let qt=Ir;se.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(qt=A.toneMapping);const Pn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xt=Pn!==void 0?Pn.length:0,ct=st.get(se),wn=v.state.lights;if(te===!0&&(fe===!0||P!==R)){const Nn=P===R&&se.id===ce;ot.setState(se,P,Nn)}let kt=!1;se.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==wn.state.version||ct.outputColorSpace!==$e||ie.isBatchedMesh&&ct.batching===!1||!ie.isBatchedMesh&&ct.batching===!0||ie.isInstancedMesh&&ct.instancing===!1||!ie.isInstancedMesh&&ct.instancing===!0||ie.isSkinnedMesh&&ct.skinning===!1||!ie.isSkinnedMesh&&ct.skinning===!0||ie.isInstancedMesh&&ct.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ct.instancingColor===!1&&ie.instanceColor!==null||ct.envMap!==Ne||se.fog===!0&&ct.fog!==Le||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==ot.numPlanes||ct.numIntersection!==ot.numIntersection)||ct.vertexAlphas!==lt||ct.vertexTangents!==et||ct.morphTargets!==it||ct.morphNormals!==It||ct.morphColors!==Tn||ct.toneMapping!==qt||tt.isWebGL2===!0&&ct.morphTargetsCount!==xt)&&(kt=!0):(kt=!0,ct.__version=se.version);let Pi=ct.currentProgram;kt===!0&&(Pi=er(se,K,ie));let Ca=!1,vi=!1,tr=!1;const jt=Pi.getUniforms(),qn=ct.uniforms;if(He.useProgram(Pi.program)&&(Ca=!0,vi=!0,tr=!0),se.id!==ce&&(ce=se.id,vi=!0),Ca||R!==P){jt.setValue(ne,"projectionMatrix",P.projectionMatrix),jt.setValue(ne,"viewMatrix",P.matrixWorldInverse);const Nn=jt.map.cameraPosition;Nn!==void 0&&Nn.setValue(ne,De.setFromMatrixPosition(P.matrixWorld)),tt.logarithmicDepthBuffer&&jt.setValue(ne,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&jt.setValue(ne,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,vi=!0,tr=!0)}if(ie.isSkinnedMesh){jt.setOptional(ne,ie,"bindMatrix"),jt.setOptional(ne,ie,"bindMatrixInverse");const Nn=ie.skeleton;Nn&&(tt.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),jt.setValue(ne,"boneTexture",Nn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(jt.setOptional(ne,ie,"batchingTexture"),jt.setValue(ne,"batchingTexture",ie._matricesTexture,N));const wo=re.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&tt.isWebGL2===!0)&&dt.update(ie,re,Pi),(vi||ct.receiveShadow!==ie.receiveShadow)&&(ct.receiveShadow=ie.receiveShadow,jt.setValue(ne,"receiveShadow",ie.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(qn.envMap.value=Ne,qn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),vi&&(jt.setValue(ne,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&Li(qn,tr),Le&&se.fog===!0&&Re.refreshFogUniforms(qn,Le),Re.refreshMaterialUniforms(qn,se,le,oe,Ee),ac.upload(ne,Aa(ct),qn,N)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ac.upload(ne,Aa(ct),qn,N),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&jt.setValue(ne,"center",ie.center),jt.setValue(ne,"modelViewMatrix",ie.modelViewMatrix),jt.setValue(ne,"normalMatrix",ie.normalMatrix),jt.setValue(ne,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Nn=se.uniformsGroups;for(let kr=0,La=Nn.length;kr<La;kr++)if(tt.isWebGL2){const vs=Nn[kr];yt.update(vs,Pi),yt.bind(vs,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function Li(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Ra(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,K,re){st.get(P.texture).__webglTexture=K,st.get(P.depthTexture).__webglTexture=re;const se=st.get(P);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const re=st.get(P);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,re=0){F=P,z=K,O=re;let se=!0,ie=null,Le=!1,Ge=!1;if(P){const Ne=st.get(P);Ne.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(ne.FRAMEBUFFER,null),se=!1):Ne.__webglFramebuffer===void 0?N.setupRenderTarget(P):Ne.__hasExternalTextures&&N.rebindTextures(P,st.get(P.texture).__webglTexture,st.get(P.depthTexture).__webglTexture);const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ge=!0);const et=st.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[K])?ie=et[K][re]:ie=et[K],Le=!0):tt.isWebGL2&&P.samples>0&&N.useMultisampledRTT(P)===!1?ie=st.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?ie=et[re]:ie=et,D.copy(P.viewport),ae.copy(P.scissor),ue=P.scissorTest}else D.copy(j).multiplyScalar(le).floor(),ae.copy(I).multiplyScalar(le).floor(),ue=G;if(He.bindFramebuffer(ne.FRAMEBUFFER,ie)&&tt.drawBuffers&&se&&He.drawBuffers(P,ie),He.viewport(D),He.scissor(ae),He.setScissorTest(ue),Le){const Ne=st.get(P.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,re)}else if(Ge){const Ne=st.get(P.texture),lt=K||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Ne.__webglTexture,re||0,lt)}ce=-1},this.readRenderTargetPixels=function(P,K,re,se,ie,Le,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=st.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&($e=$e[Ge]),$e){He.bindFramebuffer(ne.FRAMEBUFFER,$e);try{const Ne=P.texture,lt=Ne.format,et=Ne.type;if(lt!==ii&&Oe.convert(lt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=et===xa&&(je.has("EXT_color_buffer_half_float")||tt.isWebGL2&&je.has("EXT_color_buffer_float"));if(et!==Dr&&Oe.convert(et)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===Yi&&(tt.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-se&&re>=0&&re<=P.height-ie&&ne.readPixels(K,re,se,ie,Oe.convert(lt),Oe.convert(et),Le)}finally{const Ne=F!==null?st.get(F).__webglFramebuffer:null;He.bindFramebuffer(ne.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(P,K,re=0){const se=Math.pow(2,-re),ie=Math.floor(K.image.width*se),Le=Math.floor(K.image.height*se);N.setTexture2D(K,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,re,0,0,P.x,P.y,ie,Le),He.unbindTexture()},this.copyTextureToTexture=function(P,K,re,se=0){const ie=K.image.width,Le=K.image.height,Ge=Oe.convert(re.format),$e=Oe.convert(re.type);N.setTexture2D(re,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,re.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,re.unpackAlignment),K.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,se,P.x,P.y,ie,Le,Ge,$e,K.image.data):K.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,se,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,Ge,K.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,se,P.x,P.y,Ge,$e,K.image),se===0&&re.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(P,K,re,se,ie=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,$e=P.max.z-P.min.z+1,Ne=Oe.convert(se.format),lt=Oe.convert(se.type);let et;if(se.isData3DTexture)N.setTexture3D(se,0),et=ne.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)N.setTexture2DArray(se,0),et=ne.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,se.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,se.unpackAlignment);const it=ne.getParameter(ne.UNPACK_ROW_LENGTH),It=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),Tn=ne.getParameter(ne.UNPACK_SKIP_PIXELS),qt=ne.getParameter(ne.UNPACK_SKIP_ROWS),Pn=ne.getParameter(ne.UNPACK_SKIP_IMAGES),xt=re.isCompressedTexture?re.mipmaps[ie]:re.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,xt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,xt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,P.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,P.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,P.min.z),re.isDataTexture||re.isData3DTexture?ne.texSubImage3D(et,ie,K.x,K.y,K.z,Le,Ge,$e,Ne,lt,xt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(et,ie,K.x,K.y,K.z,Le,Ge,$e,Ne,xt.data)):ne.texSubImage3D(et,ie,K.x,K.y,K.z,Le,Ge,$e,Ne,lt,xt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,it),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,It),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,Tn),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,qt),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,Pn),ie===0&&se.generateMipmaps&&ne.generateMipmap(et),He.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){z=0,O=0,F=null,He.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yf?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===Sc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?us:B_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?zt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LA extends ov{}LA.prototype.isWebGL1Renderer=!0;class PA extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class NA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new X;class Af{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),o=Ct(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),o=Ct(o,this.array),a=Ct(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Af(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vg=new X,Gg=new Pt,Wg=new Pt,IA=new X,jg=new mt,ec=new X,Vd=new bi,Xg=new mt,Gd=new Ec;class DA extends si{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Am,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingSphere.expandByPoint(ec)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,o=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vd.copy(this.boundingSphere),Vd.applyMatrix4(o),e.ray.intersectsSphere(Vd)!==!1&&(Xg.copy(o).invert(),Gd.copy(e.ray).applyMatrix4(Xg),!(this.boundingBox!==null&&Gd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let i=0,o=t.count;i<o;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Am?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,o=this.geometry;Gg.fromBufferAttribute(o.attributes.skinIndex,e),Wg.fromBufferAttribute(o.attributes.skinWeight,e),Vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Wg.getComponent(a);if(c!==0){const u=Gg.getComponent(a);jg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(IA.copy(Vg).applyMatrix4(jg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class av extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class UA extends mn{constructor(e=null,t=1,i=1,o,a,c,u,f,h=fn,p=fn,m,_){super(null,c,u,f,h,p,o,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qg=new mt,FA=new mt;class bf{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,o=this.bones.length;i<o;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,o=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:FA;qg.multiplyMatrices(u,t[a]),qg.toArray(i,a*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new bf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new UA(t,e,e,ii,Yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const o=this.bones[t];if(o.name===e)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,o=e.bones.length;i<o;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new av),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let o=0,a=t.length;o<a;o++){const c=t[o];e.bones.push(c.uuid);const u=i[o];e.boneInverses.push(u.toArray())}return e}}class df extends nn{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new mt,Yg=new mt,tc=[],Kg=new Qi,OA=new mt,ca=new si,ua=new bi;class kA extends si{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new df(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,OA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),Kg.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(Kg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),ua.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,io),Yg.multiplyMatrices(i,io),ca.matrixWorld=Yg,ca.raycast(e,tc);for(let c=0,u=tc.length;c<u;c++){const f=tc[c];f.instanceId=a,f.object=this,t.push(f)}tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new df(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class lv extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $g=new X,Zg=new X,Qg=new mt,Wd=new Ec,nc=new bi;class Rf extends Gt{constructor(e=new oi,t=new lv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)$g.fromBufferAttribute(t,o-1),Zg.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=$g.distanceTo(Zg);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(o),nc.radius+=a,e.ray.intersectsSphere(nc)===!1)return;Qg.copy(o).invert(),Wd.copy(e.ray).applyMatrix4(Qg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=new X,p=new X,m=new X,_=new X,S=this.isLineSegments?2:1,E=i.index,v=i.attributes.position;if(E!==null){const y=Math.max(0,c.start),C=Math.min(E.count,c.start+c.count);for(let A=y,L=C-1;A<L;A+=S){const z=E.getX(A),O=E.getX(A+1);if(h.fromBufferAttribute(v,z),p.fromBufferAttribute(v,O),Wd.distanceSqToSegment(h,p,_,m)>f)continue;_.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(_);ce<e.near||ce>e.far||t.push({distance:ce,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,c.start),C=Math.min(v.count,c.start+c.count);for(let A=y,L=C-1;A<L;A+=S){if(h.fromBufferAttribute(v,A),p.fromBufferAttribute(v,A+1),Wd.distanceSqToSegment(h,p,_,m)>f)continue;_.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(_);O<e.near||O>e.far||t.push({distance:O,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}const Jg=new X,e_=new X;class BA extends Rf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)Jg.fromBufferAttribute(t,o),e_.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Jg.distanceTo(e_);e.setAttribute("lineDistance",new $i(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zA extends Rf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cf extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const t_=new mt,ff=new Ec,ic=new bi,rc=new X;class cv extends Gt{constructor(e=new oi,t=new Cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(o),ic.radius+=a,e.ray.intersectsSphere(ic)===!1)return;t_.copy(o).invert(),ff.copy(e.ray).applyMatrix4(t_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,m=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),S=Math.min(h.count,c.start+c.count);for(let E=_,M=S;E<M;E++){const v=h.getX(E);rc.fromBufferAttribute(m,v),n_(rc,v,f,o,e,t,this)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let E=_,M=S;E<M;E++)rc.fromBufferAttribute(m,E),n_(rc,E,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function n_(s,e,t,i,o,a,c){const u=ff.distanceSqToPoint(s);if(u<t){const f=new X;ff.closestPointToPoint(s,f),f.applyMatrix4(i);const h=o.ray.origin.distanceTo(f);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:c})}}class Lf extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=z_,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ji extends Lf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function sc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function HA(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function VA(s){function e(o,a){return s[o]-s[a]}const t=s.length,i=new Array(t);for(let o=0;o!==t;++o)i[o]=o;return i.sort(e),i}function i_(s,e,t){const i=s.length,o=new s.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)o[c++]=s[u+f]}return o}function uv(s,e,t,i){let o=1,a=s[0];for(;a!==void 0&&a[i]===void 0;)a=s[o++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=s[o++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=s[o++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=s[o++];while(a!==void 0)}class Ta{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<o)){for(let u=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=o,o=t[++i],e<o)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(o=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let c=0;c!==o;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class GA extends Ta{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qm,endingEnd:Qm}}intervalChanged_(e,t,i){const o=this.parameterPositions;let a=e-2,c=e+1,u=o[a],f=o[c];if(u===void 0)switch(this.getSettings_().endingStart){case Jm:a=e,u=2*t-i;break;case eg:a=o.length-2,u=t+o[a]-o[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case Jm:c=e,f=2*i-t;break;case eg:c=1,f=i+o[1]-o[0];break;default:c=e-1,f=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,S=this._weightNext,E=(i-t)/(o-t),M=E*E,v=M*E,y=-_*v+2*_*M-_*E,C=(1+_)*v+(-1.5-2*_)*M+(-.5+_)*E+1,A=(-1-S)*v+(1.5+S)*M+.5*E,L=S*v-S*M;for(let z=0;z!==u;++z)a[z]=y*c[p+z]+C*c[h+z]+A*c[f+z]+L*c[m+z];return a}}class WA extends Ta{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=(i-t)/(o-t),m=1-p;for(let _=0;_!==u;++_)a[_]=c[h+_]*m+c[f+_]*p;return a}}class jA extends Ta{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sc(t,this.TimeBufferType),this.values=sc(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sc(e.times,Array),values:sc(e.values,Array)};const o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new WA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new GA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case vd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return vd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){const i=this.times,o=i.length;let a=0,c=o-1;for(;a!==o&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==o){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,o=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(o!==void 0&&HA(o))for(let u=0,f=o.length;u!==f;++u){const h=o[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===vd,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(o)f=!0;else{const m=u*i,_=m-i,S=m+i;for(let E=0;E!==i;++E){const M=t[m+E];if(M!==t[_+E]||M!==t[S+E]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const m=u*i,_=c*i;for(let S=0;S!==i;++S)t[_+S]=t[m+S]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=mo;class Mo extends Ri{}Mo.prototype.ValueTypeName="bool";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=ya;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class dv extends Ri{}dv.prototype.ValueTypeName="color";class vo extends Ri{}vo.prototype.ValueTypeName="number";class XA extends Ta{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(o-t);let h=e*u;for(let p=h+u;h!==p;h+=4)Ur.slerpFlat(a,0,c,h-u,c,h,f);return a}}class ps extends Ri{InterpolantFactoryMethodLinear(e){return new XA(this.times,this.values,this.getValueSize(),e)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=mo;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Ri{}To.prototype.ValueTypeName="string";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=ya;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends Ri{}xo.prototype.ValueTypeName="vector";class qA{constructor(e,t=-1,i,o=Qy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=o,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,o=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(KA(i[c]).scale(o));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,o={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ri.toJSON(i[a]));return o}static CreateFromMorphTargetSequence(e,t,i,o){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],h=[];f.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const p=VA(f);f=i_(f,1,p),h=i_(h,1,p),!o&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new vo(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const o=e;i=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<i.length;o++)if(i[o].name===t)return i[o];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const o={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],p=h.name.match(a);if(p&&p.length>1){const m=p[1];let _=o[m];_||(o[m]=_=[]),_.push(h)}}const c=[];for(const u in o)c.push(this.CreateFromMorphTargetSequence(u,o[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,_,S,E,M){if(S.length!==0){const v=[],y=[];uv(S,v,y,E),v.length!==0&&M.push(new m(_,v,y))}},o=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const _=h[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const S={};let E;for(E=0;E<_.length;E++)if(_[E].morphTargets)for(let M=0;M<_[E].morphTargets.length;M++)S[_[E].morphTargets[M]]=-1;for(const M in S){const v=[],y=[];for(let C=0;C!==_[E].morphTargets.length;++C){const A=_[E];v.push(A.time),y.push(A.morphTarget===M?1:0)}o.push(new vo(".morphTargetInfluence["+M+"]",v,y))}f=S.length*c}else{const S=".bones["+t[m].name+"]";i(xo,S+".position",_,"pos",o),i(ps,S+".quaternion",_,"rot",o),i(xo,S+".scale",_,"scl",o)}}return o.length===0?null:new this(a,f,o,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,o=e.length;i!==o;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function YA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return dv;case"quaternion":return ps;case"bool":case"boolean":return Mo;case"string":return To}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function KA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=YA(s.type);if(s.times===void 0){const t=[],i=[];uv(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Lr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $A{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=h.length;m<_;m+=2){const S=h[m],E=h[m+1];if(S.global&&(S.lastIndex=0),S.test(p))return E}return null}}}const ZA=new $A;class _s{constructor(e){this.manager=e!==void 0?e:ZA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class QA extends Error{constructor(e,t){super(e),this.response=t}}class _c extends _s{constructor(e){super(e)}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Lr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:i,onError:o});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Xi[e],m=h.body.getReader(),_=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),S=_?parseInt(_):0,E=S!==0;let M=0;const v=new ReadableStream({start(y){C();function C(){m.read().then(({done:A,value:L})=>{if(A)y.close();else{M+=L.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:S});for(let O=0,F=p.length;O<F;O++){const ce=p[O];ce.onProgress&&ce.onProgress(z)}y.enqueue(L),C()}})}}});return new Response(v)}else throw new QA(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),_=m&&m[1]?m[1].toLowerCase():void 0,S=new TextDecoder(_);return h.arrayBuffer().then(E=>S.decode(E))}}}).then(h=>{Lr.add(e,h);const p=Xi[e];delete Xi[e];for(let m=0,_=p.length;m<_;m++){const S=p[m];S.onLoad&&S.onLoad(h)}}).catch(h=>{const p=Xi[e];if(p===void 0)throw this.manager.itemError(e),h;delete Xi[e];for(let m=0,_=p.length;m<_;m++){const S=p[m];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class JA extends _s{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Lr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Sa("img");function f(){p(),Lr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(m){p(),o&&o(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class e1 extends _s{constructor(e){super(e)}load(e,t,i,o){const a=new mn,c=new JA(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class wc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jd=new mt,r_=new X,s_=new X;class Pf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;r_.setFromMatrixPosition(e.matrixWorld),t.position.copy(r_),s_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s_),t.updateMatrixWorld(),jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t1 extends Pf{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=go*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class n1 extends wc{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new t1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const o_=new mt,da=new X,Xd=new X;class i1 extends Pf{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),i.position.copy(da),Xd.copy(i.position),Xd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xd),i.updateMatrixWorld(),o.makeTranslation(-da.x,-da.y,-da.z),o_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o_)}}class r1 extends wc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class s1 extends Pf{constructor(){super(new Tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fv extends wc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new s1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class o1 extends wc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ga{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,o=e.length;i<o;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class a1 extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Lr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{o&&o(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Lr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){o&&o(h),Lr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Lr.add(e,f),a.manager.itemStart(e)}}const Nf="\\[\\]\\.:\\/",l1=new RegExp("["+Nf+"]","g"),If="[^"+Nf+"]",c1="[^"+Nf.replace("\\.","")+"]",u1=/((?:WC+[\/:])*)/.source.replace("WC",If),d1=/(WCOD+)?/.source.replace("WCOD",c1),f1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),h1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),p1=new RegExp("^"+u1+d1+f1+h1+"$"),m1=["material","materials","bones","map"];class g1{constructor(e,t,i){const o=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Rt{constructor(e,t,i){this.path=t,this.parsedPath=i||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,i):new Rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l1,"")}static parseTrackName(e){const t=p1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=i.nodeName&&i.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const a=i.nodeName.substring(o+1);m1.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,o),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},o=i(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)e[t++]=i[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let o=0,a=i.length;o!==a;++o)i[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,o=t.propertyName;let a=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[o];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+o+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=g1;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);function a_(s,e){if(e===Jy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===of||e===k_){let t=s.getIndex();if(t===null){const c=[],u=s.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,o=[];if(e===of)for(let c=1;c<=i;c++)o.push(t.getX(0)),o.push(t.getX(c)),o.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(o.push(t.getX(c)),o.push(t.getX(c+1)),o.push(t.getX(c+2))):(o.push(t.getX(c+2)),o.push(t.getX(c+1)),o.push(t.getX(c)));o.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(o),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class _1 extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new E1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new N1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new w1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new U1(t)})}load(e,t,i,o){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=ga.extractUrlBase(e);c=ga.resolveURL(h,this.path)}else c=ga.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){o?o(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new _c(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(p){t(p),a.manager.itemEnd(e)},u)}catch(p){u(p)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,o){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===hv){try{c[gt.KHR_BINARY_GLTF]=new F1(e)}catch(m){o&&o(m);return}a=JSON.parse(c[gt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new K1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[m.name]=m,c[m.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const m=a.extensionsUsed[p],_=a.extensionsRequired||[];switch(m){case gt.KHR_MATERIALS_UNLIT:c[m]=new y1;break;case gt.KHR_DRACO_MESH_COMPRESSION:c[m]=new O1(a,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:c[m]=new k1;break;case gt.KHR_MESH_QUANTIZATION:c[m]=new B1;break;default:_.indexOf(m)>=0&&u[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,o)}parseAsync(e,t){const i=this;return new Promise(function(o,a){i.parse(e,t,o,a)})}}function v1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class x1{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,o=t.length;i<o;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let o=t.cache.get(i);if(o)return o;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const p=new rt(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],rn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new fv(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new r1(p),h.distance=m;break;case"spot":h=new n1(p),h.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,br(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),o=Promise.resolve(h),t.cache.add(i,o),o}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class y1{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return os}extendParams(e,t,i){const o=[];e.color=new rt(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],rn),e.opacity=c[3]}a.baseColorTexture!==void 0&&o.push(i.assignTexture(e,"map",a.baseColorTexture,zt))}return Promise.all(o)}}class S1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class E1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _t(u,u)}return Promise.all(a)}}class M1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class T1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=o.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],rn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,zt)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class w1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class A1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(u[0],u[1],u[2],rn),Promise.all(a)}}class b1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const o=this.parser.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=o.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(u[0],u[1],u[2],rn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,zt)),Promise.all(a)}}class C1{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class L1{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ji}extendMaterialParams(e,t){const i=this.parser,o=i.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const a=[],c=o.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class P1{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,o=i.textures[e];if(!o.extensions||!o.extensions[this.name])return null;const a=o.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class N1{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=o.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I1{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,o=i.json,a=o.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=o.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(o.extensionsRequired&&o.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D1{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const o=i.extensions[this.name],a=this.parser.getDependency("buffer",o.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=o.byteOffset||0,h=o.byteLength||0,p=o.count,m=o.byteStride,_=new Uint8Array(u,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,m,_,o.mode,o.filter).then(function(S){return S.buffer}):c.ready.then(function(){const S=new ArrayBuffer(p*m);return c.decodeGltfBuffer(new Uint8Array(S),p,m,_,o.mode,o.filter),S})})}else return null}}class U1{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const o=t.meshes[i.mesh];for(const h of o.primitives)if(h.mode!==ti.TRIANGLES&&h.mode!==ti.TRIANGLE_STRIP&&h.mode!==ti.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(p=>(f[h]=p,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],_=h[0].count,S=[];for(const E of m){const M=new mt,v=new X,y=new Ur,C=new X(1,1,1),A=new kA(E.geometry,E.material,_);for(let L=0;L<_;L++)f.TRANSLATION&&v.fromBufferAttribute(f.TRANSLATION,L),f.ROTATION&&y.fromBufferAttribute(f.ROTATION,L),f.SCALE&&C.fromBufferAttribute(f.SCALE,L),A.setMatrixAt(L,M.compose(v,y,C));for(const L in f)if(L==="_COLOR_0"){const z=f[L];A.instanceColor=new df(z.array,z.itemSize,z.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&E.geometry.setAttribute(L,f[L]);Gt.prototype.copy.call(A,E),this.parser.assignFinalMaterial(A),S.push(A)}return p.isGroup?(p.clear(),p.add(...S),p):S[0]}))}}const hv="glTF",fa=12,l_={JSON:1313821514,BIN:5130562};class F1{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-fa,a=new DataView(e,fa);let c=0;for(;c<o;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===l_.JSON){const h=new Uint8Array(e,fa+c,u);this.content=i.decode(h)}else if(f===l_.BIN){const h=fa+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class O1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,o=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},h={};for(const p in c){const m=hf[p]||p.toLowerCase();u[m]=c[p]}for(const p in e.attributes){const m=hf[p]||p.toLowerCase();if(c[p]!==void 0){const _=i.accessors[e.attributes[p]],S=co[_.componentType];h[m]=S.name,f[m]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(m,_){o.decodeDracoFile(p,function(S){for(const E in S.attributes){const M=S.attributes[E],v=f[E];v!==void 0&&(M.normalized=v)}m(S)},u,h,rn,_)})})}}class k1{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B1{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class pv extends Ta{constructor(e,t,i,o){super(e,t,i,o)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o*3+o;for(let c=0;c!==o;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,o){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,p=o-t,m=(i-t)/p,_=m*m,S=_*m,E=e*h,M=E-h,v=-2*S+3*_,y=S-_,C=1-v,A=y-_+m;for(let L=0;L!==u;L++){const z=c[M+L+u],O=c[M+L+f]*p,F=c[E+L+u],ce=c[E+L]*p;a[L]=C*z+A*O+v*F+y*ce}return a}}const z1=new Ur;class H1 extends pv{interpolate_(e,t,i,o){const a=super.interpolate_(e,t,i,o);return z1.fromArray(a).normalize().toArray(a),a}}const ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},c_={9728:fn,9729:Bn,9984:sf,9985:L_,9986:oc,9987:ds},u_={33071:ni,33648:dc,10497:ho},qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ar={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V1={CUBICSPLINE:void 0,LINEAR:mo,STEP:ya},Yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Lf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),s.DefaultMaterial}function ts(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function br(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W1(s,e,t){let i=!1,o=!1,a=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(i=!0),m.NORMAL!==void 0&&(o=!0),m.COLOR_0!==void 0&&(a=!0),i&&o&&a)break}if(!i&&!o&&!a)return Promise.resolve(s);const c=[],u=[],f=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(i){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):s.attributes.position;c.push(_)}if(o){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):s.attributes.normal;u.push(_)}if(a){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):s.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(h){const p=h[0],m=h[1],_=h[2];return i&&(s.morphAttributes.position=p),o&&(s.morphAttributes.normal=m),a&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function j1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,o=t.length;i<o;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X1(s){let e;const t=s.extensions&&s.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kd(t.attributes):e=s.indices+":"+Kd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,o=s.targets.length;i<o;i++)e+=":"+Kd(s.targets[i]);return e}function Kd(s){let e="";const t=Object.keys(s).sort();for(let i=0,o=t.length;i<o;i++)e+=t[i]+":"+s[t[i]]+";";return e}function pf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function q1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Y1=new mt;class K1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new v1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,o=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,o=navigator.userAgent.indexOf("Firefox")>-1,a=o?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||o&&a<98?this.textureLoader=new e1(this.options.manager):this.textureLoader=new a1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _c(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,o=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][o.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:o.asset,parser:i,userData:{}};return ts(a,u,o),br(u,o),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let o=0,a=t.length;o<a;o++){const c=t[o].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let o=0,a=e.length;o<a;o++){const c=e[o];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const o=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[h,p]of c.children.entries())a(p,u.children[h])};return a(i,o),o.name+="_instance_"+e.uses[t]++,o}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const o=e(t[i]);if(o)return o}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let o=0;o<t.length;o++){const a=e(t[o]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let o=this.cache.get(i);if(!o){switch(e){case"scene":o=this.loadScene(t);break;case"node":o=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":o=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":o=this.loadAccessor(t);break;case"bufferView":o=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":o=this.loadBuffer(t);break;case"material":o=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":o=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":o=this.loadSkin(t);break;case"animation":o=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":o=this.loadCamera(t);break;default:if(o=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!o)throw new Error("Unknown type: "+e);break}this.cache.add(i,o)}return o}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,o=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(o.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(a,c){i.load(ga.resolveURL(t.uri,o.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const o=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+o)})}loadAccessor(e){const t=this,i=this.json,o=this.json.accessors[e];if(o.bufferView===void 0&&o.sparse===void 0){const c=qd[o.type],u=co[o.componentType],f=o.normalized===!0,h=new u(o.count*c);return Promise.resolve(new nn(h,c,f))}const a=[];return o.bufferView!==void 0?a.push(this.getDependency("bufferView",o.bufferView)):a.push(null),o.sparse!==void 0&&(a.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=qd[o.type],h=co[o.componentType],p=h.BYTES_PER_ELEMENT,m=p*f,_=o.byteOffset||0,S=o.bufferView!==void 0?i.bufferViews[o.bufferView].byteStride:void 0,E=o.normalized===!0;let M,v;if(S&&S!==m){const y=Math.floor(_/S),C="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+y+":"+o.count;let A=t.cache.get(C);A||(M=new h(u,y*S,o.count*S/p),A=new NA(M,S/p),t.cache.add(C,A)),v=new Af(A,f,_%S/p,E)}else u===null?M=new h(o.count*f):M=new h(u,_,o.count*f),v=new nn(M,f,E);if(o.sparse!==void 0){const y=qd.SCALAR,C=co[o.sparse.indices.componentType],A=o.sparse.indices.byteOffset||0,L=o.sparse.values.byteOffset||0,z=new C(c[1],A,o.sparse.count*y),O=new h(c[2],L,o.sparse.count*f);u!==null&&(v=new nn(v.array.slice(),v.itemSize,v.normalized));for(let F=0,ce=z.length;F<ce;F++){const R=z[F];if(v.setX(R,O[F*f]),f>=2&&v.setY(R,O[F*f+1]),f>=3&&v.setZ(R,O[F*f+2]),f>=4&&v.setW(R,O[F*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const o=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=c.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return p.magFilter=c_[_.magFilter]||Bn,p.minFilter=c_[_.minFilter]||ds,p.wrapS=u_[_.wrapS]||ho,p.wrapT=u_[_.wrapT]||ho,o.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,o=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const c=o.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(m){h=!0;const _=new Blob([m],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(_,S){let E=_;t.isImageBitmapLoader===!0&&(E=function(M){const v=new mn(M);v.needsUpdate=!0,_(v)}),t.load(ga.resolveURL(m,a.path),E,void 0,S)})}).then(function(m){return h===!0&&u.revokeObjectURL(f),m.userData.mimeType=c.mimeType||q1(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,i,o){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[gt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return o!==void 0&&(c.colorSpace=o),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const o=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new Cf,Ai.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new lv,Ai.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(o||a||c){let u="ClonedMaterial:"+i.uuid+":";o&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),o&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Lf}loadMaterial(e){const t=this,i=this.json,o=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},h=[];if(f[gt.KHR_MATERIALS_UNLIT]){const m=o[gt.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),h.push(m.extendParams(u,a,t))}else{const m=a.pbrMetallicRoughness||{};if(u.color=new rt(1,1,1),u.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],rn),u.opacity=_[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",m.baseColorTexture,zt)),u.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,u.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ti);const p=a.alphaMode||Yd.OPAQUE;if(p===Yd.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===Yd.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==os&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new _t(1,1),a.normalTexture.scale!==void 0)){const m=a.normalTexture.scale;u.normalScale.set(m,m)}if(a.occlusionTexture!==void 0&&c!==os&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==os){const m=a.emissiveFactor;u.emissive=new rt().setRGB(m[0],m[1],m[2],rn)}return a.emissiveTexture!==void 0&&c!==os&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,zt)),Promise.all(h).then(function(){const m=new c(u);return a.name&&(m.name=a.name),br(m,a),t.associations.set(m,{materials:e}),a.extensions&&ts(o,m,a),m})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,o=this.primitiveCache;function a(u){return i[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return d_(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],p=X1(h),m=o[p];if(m)c.push(m.promise);else{let _;h.extensions&&h.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=d_(new oi,h,t),o[p]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,o=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f].material===void 0?G1(this.cache):this.getDependency("material",c[f].material);u.push(p)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let S=0,E=p.length;S<E;S++){const M=p[S],v=c[S];let y;const C=h[S];if(v.mode===ti.TRIANGLES||v.mode===ti.TRIANGLE_STRIP||v.mode===ti.TRIANGLE_FAN||v.mode===void 0)y=a.isSkinnedMesh===!0?new DA(M,C):new si(M,C),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),v.mode===ti.TRIANGLE_STRIP?y.geometry=a_(y.geometry,k_):v.mode===ti.TRIANGLE_FAN&&(y.geometry=a_(y.geometry,of));else if(v.mode===ti.LINES)y=new BA(M,C);else if(v.mode===ti.LINE_STRIP)y=new Rf(M,C);else if(v.mode===ti.LINE_LOOP)y=new zA(M,C);else if(v.mode===ti.POINTS)y=new cv(M,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(y.geometry.morphAttributes).length>0&&j1(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),br(y,a),v.extensions&&ts(o,y,v),t.assignFinalMaterial(y),m.push(y)}for(let S=0,E=m.length;S<E;S++)t.associations.set(m[S],{meshes:e,primitives:S});if(m.length===1)return a.extensions&&ts(o,m[0],a),m[0];const _=new as;a.extensions&&ts(o,_,a),t.associations.set(_,{meshes:e});for(let S=0,E=m.length;S<E;S++)_.add(m[S]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],o=i[i.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ln(TS.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):i.type==="orthographic"&&(t=new Tf(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),br(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let o=0,a=t.joints.length;o<a;o++)i.push(this._loadNodeShallow(t.joints[o]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(o){const a=o.pop(),c=o,u=[],f=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];if(m){u.push(m);const _=new mt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new bf(u,f)})}loadAnimation(e){const t=this.json,i=this,o=t.animations[e],a=o.name?o.name:"animation_"+e,c=[],u=[],f=[],h=[],p=[];for(let m=0,_=o.channels.length;m<_;m++){const S=o.channels[m],E=o.samplers[S.sampler],M=S.target,v=M.node,y=o.parameters!==void 0?o.parameters[E.input]:E.input,C=o.parameters!==void 0?o.parameters[E.output]:E.output;M.node!==void 0&&(c.push(this.getDependency("node",v)),u.push(this.getDependency("accessor",y)),f.push(this.getDependency("accessor",C)),h.push(E),p.push(M))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(p)]).then(function(m){const _=m[0],S=m[1],E=m[2],M=m[3],v=m[4],y=[];for(let C=0,A=_.length;C<A;C++){const L=_[C],z=S[C],O=E[C],F=M[C],ce=v[C];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const R=i._createAnimationTracks(L,z,O,F,ce);if(R)for(let D=0;D<R.length;D++)y.push(R[D])}return new qA(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,o=t.nodes[e];return o.mesh===void 0?null:i.getDependency("mesh",o.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,o.mesh,a);return o.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,h=o.weights.length;f<h;f++)u.morphTargetInfluences[f]=o.weights[f]}),c})}loadNode(e){const t=this.json,i=this,o=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=o.children||[];for(let h=0,p=u.length;h<p;h++)c.push(i.getDependency("node",u[h]));const f=o.skin===void 0?Promise.resolve(null):i.getDependency("skin",o.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const p=h[0],m=h[1],_=h[2];_!==null&&p.traverse(function(S){S.isSkinnedMesh&&S.bind(_,Y1)});for(let S=0,E=m.length;S<E;S++)p.add(m[S]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,o=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?o.createUniqueName(a.name):"",u=[],f=o._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(o.getDependency("camera",a.camera).then(function(h){return o._getNodeRef(o.cameraCache,a.camera,h)})),o._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let p;if(a.isBone===!0?p=new av:h.length>1?p=new as:h.length===1?p=h[0]:p=new Gt,p!==h[0])for(let m=0,_=h.length;m<_;m++)p.add(h[m]);if(a.name&&(p.userData.name=a.name,p.name=c),br(p,a),a.extensions&&ts(i,p,a),a.matrix!==void 0){const m=new mt;m.fromArray(a.matrix),p.applyMatrix4(m)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return o.associations.has(p)||o.associations.set(p,{}),o.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],o=this,a=new as;i.name&&(a.name=o.createUniqueName(i.name)),br(a,i),i.extensions&&ts(t,a,i);const c=i.nodes||[],u=[];for(let f=0,h=c.length;f<h;f++)u.push(o.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let p=0,m=f.length;p<m;p++)a.add(f[p]);const h=p=>{const m=new Map;for(const[_,S]of o.associations)(_ instanceof Ai||_ instanceof mn)&&m.set(_,S);return p.traverse(_=>{const S=o.associations.get(_);S!=null&&m.set(_,S)}),m};return o.associations=h(a),a})}_createAnimationTracks(e,t,i,o,a){const c=[],u=e.name?e.name:e.uuid,f=[];Ar[a.path]===Ar.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let h;switch(Ar[a.path]){case Ar.weights:h=vo;break;case Ar.rotation:h=ps;break;case Ar.position:case Ar.scale:h=xo;break;default:switch(i.itemSize){case 1:h=vo;break;case 2:case 3:default:h=xo;break}break}const p=o.interpolation!==void 0?V1[o.interpolation]:mo,m=this._getArrayFromAccessor(i);for(let _=0,S=f.length;_<S;_++){const E=new h(f[_]+"."+Ar[a.path],t.array,m,p);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),c.push(E)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=pf(t.constructor),o=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)o[a]=t[a]*i;t=o}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const o=this instanceof ps?H1:pv;return new o(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $1(s,e,t){const i=e.attributes,o=new Qi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(o.set(new X(f[0],f[1],f[2]),new X(h[0],h[1],h[2])),u.normalized){const p=pf(co[u.componentType]);o.min.multiplyScalar(p),o.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new X,f=new X;for(let h=0,p=a.length;h<p;h++){const m=a[h];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],S=_.min,E=_.max;if(S!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(S[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(S[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(S[2]),Math.abs(E[2]))),_.normalized){const M=pf(co[_.componentType]);f.multiplyScalar(M)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(u)}s.boundingBox=o;const c=new bi;o.getCenter(c.center),c.radius=o.min.distanceTo(o.max)/2,s.boundingSphere=c}function d_(s,e,t){const i=e.attributes,o=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){s.setAttribute(u,f)})}for(const c in i){const u=hf[c]||c.toLowerCase();u in s.attributes||o.push(a(i[c],u))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(u){s.setIndex(u)});o.push(c)}return Tt.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),br(s,e),$1(s,e,t),Promise.all(o).then(function(){return e.targets!==void 0?W1(s,e.targets,t):s})}const $d=new WeakMap;class Z1 extends _s{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,o){const a=new _c(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,c=>{this.parse(c,t,o)},i,o)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,zt).catch(i)}decodeDracoFile(e,t,i,o,a=rn,c=()=>{}){const u={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:a};return this.decodeGeometry(e,u).then(t).catch(c)}decodeGeometry(e,t){const i=JSON.stringify(t);if($d.has(e)){const f=$d.get(e);if(f.key===i)return f.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const a=this.workerNextTaskID++,c=e.byteLength,u=this._getWorker(a,c).then(f=>(o=f,new Promise((h,p)=>{o._callbacks[a]={resolve:h,reject:p},o.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(f=>this._createGeometry(f.geometry));return u.catch(()=>!0).then(()=>{o&&a&&this._releaseTask(o,a)}),$d.set(e,{key:i,promise:u}),u}_createGeometry(e){const t=new oi;e.index&&t.setIndex(new nn(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const o=e.attributes[i],a=o.name,c=o.array,u=o.itemSize,f=new nn(c,u);a==="color"&&(this._assignVertexColorSpace(f,o.vertexColorSpace),f.normalized=!(c instanceof Float32Array)),t.setAttribute(a,f)}return t}_assignVertexColorSpace(e,t){if(t!==zt)return;const i=new rt;for(let o=0,a=e.count;o<a;o++)i.fromBufferAttribute(e,o).convertSRGBToLinear(),e.setXYZ(o,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new _c(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((o,a)=>{i.load(e,o,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const o=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=Q1.toString(),c=["/* draco decoder */",o,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const o=new Worker(this.workerSourceURL);o._callbacks={},o._taskCosts={},o._taskLoad=0,o.postMessage({type:"init",decoderConfig:this.decoderConfig}),o.onmessage=function(a){const c=a.data;switch(c.type){case"decode":o._callbacks[c.id].resolve(c);break;case"error":o._callbacks[c.id].reject(c);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+c.type+'"')}},this.workerPool.push(o)}else this.workerPool.sort(function(o,a){return o._taskLoad>a._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Q1(){let s,e;onmessage=function(c){const u=c.data;switch(u.type){case"init":s=u.decoderConfig,e=new Promise(function(p){s.onModuleLoaded=function(m){p({draco:m})},DracoDecoderModule(s)});break;case"decode":const f=u.buffer,h=u.taskConfig;e.then(p=>{const m=p.draco,_=new m.Decoder;try{const S=t(m,_,new Int8Array(f),h),E=S.attributes.map(M=>M.array.buffer);S.index&&E.push(S.index.array.buffer),self.postMessage({type:"decode",id:u.id,geometry:S},E)}catch(S){console.error(S),self.postMessage({type:"error",id:u.id,error:S.message})}finally{m.destroy(_)}});break}};function t(c,u,f,h){const p=h.attributeIDs,m=h.attributeTypes;let _,S;const E=u.GetEncodedGeometryType(f);if(E===c.TRIANGULAR_MESH)_=new c.Mesh,S=u.DecodeArrayToMesh(f,f.byteLength,_);else if(E===c.POINT_CLOUD)_=new c.PointCloud,S=u.DecodeArrayToPointCloud(f,f.byteLength,_);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!S.ok()||_.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+S.error_msg());const M={index:null,attributes:[]};for(const v in p){const y=self[m[v]];let C,A;if(h.useUniqueIDs)A=p[v],C=u.GetAttributeByUniqueId(_,A);else{if(A=u.GetAttributeId(_,c[p[v]]),A===-1)continue;C=u.GetAttribute(_,A)}const L=o(c,u,_,v,y,C);v==="color"&&(L.vertexColorSpace=h.vertexColorSpace),M.attributes.push(L)}return E===c.TRIANGULAR_MESH&&(M.index=i(c,u,_)),c.destroy(_),M}function i(c,u,f){const p=f.num_faces()*3,m=p*4,_=c._malloc(m);u.GetTrianglesUInt32Array(f,m,_);const S=new Uint32Array(c.HEAPF32.buffer,_,p).slice();return c._free(_),{array:S,itemSize:1}}function o(c,u,f,h,p,m){const _=m.num_components(),E=f.num_points()*_,M=E*p.BYTES_PER_ELEMENT,v=a(c,p),y=c._malloc(M);u.GetAttributeDataArrayForAllPoints(f,m,v,M,y);const C=new p(c.HEAPF32.buffer,y,E).slice();return c._free(y),{name:h,array:C,itemSize:_}}function a(c,u){switch(u){case Float32Array:return c.DT_FLOAT32;case Int8Array:return c.DT_INT8;case Int16Array:return c.DT_INT16;case Int32Array:return c.DT_INT32;case Uint8Array:return c.DT_UINT8;case Uint16Array:return c.DT_UINT16;case Uint32Array:return c.DT_UINT32}}}const J1=3,eb=60,tb=1e3/eb,nb=()=>{const s=ye.useRef(null),e=ye.useRef(null),t=ye.useRef(null),i=ye.useRef(null),o=ye.useRef(null),a=ye.useRef(null),c=ye.useRef(null),u=ye.useRef(0),[f,h]=ye.useState(!1),[p,m]=ye.useState(!0),_=ye.useCallback(S=>{if(!(!e.current||!t.current||!i.current)){if(S-u.current<tb){c.current=requestAnimationFrame(_);return}u.current=S;try{const E=S*.001;if(a.current&&(a.current.rotation.x=E*.1,a.current.rotation.y=E*.05),o.current){const M=(o.current.rotation.y+.01)%(Math.PI*2);o.current.rotation.y=M,o.current.position.y=Math.sin(E*1.2)*.05,o.current.scale.x!==1&&o.current.scale.set(1,1,1)}i.current.render(e.current,t.current),c.current=requestAnimationFrame(_)}catch(E){console.error("Animation error:",E),i.current&&e.current&&t.current&&i.current.render(e.current,t.current),c.current=requestAnimationFrame(_)}}},[]);return ye.useEffect(()=>{let S=0,E=!1,M=!1;if(!s.current)return;const v=s.current,y=document.createElement("canvas");if(!(y.getContext("webgl")||y.getContext("experimental-webgl"))){console.warn("WebGL not available, showing fallback"),h(!0);return}try{let A=function(){if(M)return;const j=new _1,I=new Z1;I.setDecoderPath("/draco/"),j.setDRACOLoader(I),j.load("/assets/3d/proteindna.glb",G=>{if(E||M)return;E=!0,m(!1);const q=G.scene;q.scale.set(8,8,8),q.position.set(0,0,0),q.traverse(te=>{te.isMesh&&(te.castShadow=!1,te.receiveShadow=!1,te.material&&te.material.isMeshStandardMaterial&&(te.material.roughness=.7,te.material.metalness=.1,te.material.needsUpdate=!0),te.geometry&&(te.geometry.computeBoundingSphere(),te.geometry.computeBoundingBox()))}),o.current=q,L.add(q),!ue&&!M&&(ue=!0,u.current=performance.now(),_(performance.now()))},()=>{},G=>{console.error("Model loading error:",G),S<J1&&!M?(S++,setTimeout(A,1e3)):(h(!0),m(!1))})};const L=new PA;e.current=L;const z=v.clientWidth,O=v.clientHeight,F=new Ln(75,z/O,.1,1e3),ce=window.innerWidth<=768;F.position.z=ce?2.3:2,F.position.y=.1,F.position.x=-.1,t.current=F;const R=new ov({antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,depth:!0});R.setSize(z,O),R.setClearColor(0,0),R.shadowMap.enabled=!1,R.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current=R,v.appendChild(R.domElement),R.domElement.style.width="100%",R.domElement.style.height="100%",R.domElement.style.position="relative",R.domElement.style.left="0",R.domElement.style.top="0";const D=new o1(16777215,.8);L.add(D);const ae=new fv(16775399,1.5);ae.position.set(5,10,7),L.add(ae);let ue=!1;A();const _e=50,V=new oi,Q=new Float32Array(_e*3),oe=new Float32Array(_e*3);for(let j=0;j<_e;j++)Q[j*3]=(Math.random()-.5)*8,Q[j*3+1]=(Math.random()-.5)*8,Q[j*3+2]=(Math.random()-.5)*8,oe[j*3]=.6+Math.random()*.4,oe[j*3+1]=.2+Math.random()*.3,oe[j*3+2]=.8+Math.random()*.2;V.setAttribute("position",new nn(Q,3)),V.setAttribute("color",new nn(oe,3));const le=new Cf({size:.04,vertexColors:!0,transparent:!0,opacity:.5}),W=new cv(V,le);a.current=W,L.add(W);const Z=()=>{if(M||!F||!R||!v)return;const j=v.clientWidth,I=v.clientHeight;F.aspect=j/I,F.updateProjectionMatrix(),R.setSize(j,I)};return window.addEventListener("resize",Z),()=>{M=!0,c.current&&(cancelAnimationFrame(c.current),c.current=null),window.removeEventListener("resize",Z),R&&v.contains(R.domElement)&&(v.removeChild(R.domElement),R.dispose()),L&&L.clear(),e.current=null,t.current=null,i.current=null,o.current=null,a.current=null}}catch(A){console.error("3D setup error:",A),h(!0),m(!1)}},[_]),w.jsxs("div",{ref:s,className:"hero-3d",style:{width:"100%",height:"100%",position:"relative"},children:[p&&w.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"14px",zIndex:1},children:"Loading 3D Model..."}),f&&w.jsx("img",{src:"/assets/images/fallback.png",alt:"3D Fallback",className:"hero-3d-fallback",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"300px",height:"auto",zIndex:1}})]})},Ac=({page:s})=>{const e=()=>{switch(s){case"landing":return["/assets/images/landing1.png","/assets/images/landing2.png","/assets/images/landing3.png"];case"technology":return["/assets/images/technology1.png","/assets/images/technology2.png","/assets/images/technology3.png"];case"company":return["/assets/images/company2.png"];default:return[]}};return w.jsx("div",{className:`background-blobs background-blobs--${s}`,children:e().map((t,i)=>{let o={height:"auto"};return s==="landing"?i===0?(o.top="2400px",o.left="0%",o.width="clamp(200px, 40vw, 400px)"):i===1?(o.top="1750px",o.right="0%",o.width="clamp(200px, 40vw, 400px)"):i===2&&(o.top="900px",o.left="0%",o.width="clamp(200px, 40vw, 400px)"):s==="technology"?i===0?(o.top="1830px",o.left="0%",o.width="clamp(200px, 40vw, 500px)"):i===1?(o.top="0px",o.right="0%",o.width="clamp(200px, 40vw, 500px)"):i===2&&(o.top="800px",o.left="0%",o.width="clamp(200px, 40vw, 350px)"):s==="company"?i===0&&(o.top="0px",o.left="0%",o.width="clamp(200px, 40vw, 530px)"):s==="contact"&&(i===0?(o.top="500px",o.left="0%",o.width="clamp(150px, 35vw, 300px)"):i===1&&(o.top="1000px",o.right="0%",o.width="clamp(150px, 35vw, 300px)")),w.jsx("img",{src:t,alt:"",className:`blob blob-${i+1}`,style:o},i)})})},ib=()=>(ye.useEffect(()=>{document.title="Varosync - Home"},[]),w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-10,pointerEvents:"none",background:`
            linear-gradient(120deg, #FBEEF5 0%, #FDF5F9 60%, transparent 100%),
            linear-gradient(60deg, #FFF9FC 10%, transparent 80%),
            linear-gradient(200deg, #FDF5F9 20%, #FFF9FC 80%, transparent 100%),
            linear-gradient(90deg, #FBEEF5 0%, transparent 100%)
          `,transition:"background 1s"},"aria-hidden":"true"}),w.jsx(Ac,{page:"landing"}),w.jsxs("div",{className:"section home-hero",style:{position:"relative"},children:[w.jsx("div",{className:"spacing nav-height"}),w.jsx("div",{className:"spacing _100px tablet-60px mobile-40px"}),w.jsx("div",{className:"container",children:w.jsxs("div",{className:"comp-hero-card-module a--group",children:[w.jsx("div",{className:"list-horizontal just-right a--group",children:w.jsx("div",{className:"flex-w-child-100",children:w.jsxs("div",{className:"el extra-pad-bottom",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,transitionTimingFunction:"ease"},children:[w.jsxs("div",{className:"flex-horizontal",children:[w.jsx("div",{className:"news-image-module-image-wrap flex-child-grow",children:w.jsx("h1",{className:"type-h1",children:"Dynamic models for designing precision molecules"})}),w.jsx("div",{className:"flex-w-child-50 tablet-hidden"})]}),w.jsx("div",{className:"animate-parent",children:w.jsxs("div",{className:"a--anim",children:[w.jsx("div",{className:"a--delay",children:"0"}),w.jsx("div",{className:"a--type",children:"a--up"}),w.jsx("div",{className:"a--type",children:"none"})]})})]})})}),w.jsxs("div",{className:"list-horizontal min1t a--group",children:[w.jsx("div",{className:"flex-child-grow",children:w.jsxs("div",{className:"el hero-text-el",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,height:"100%",transitionTimingFunction:"ease"},children:[w.jsx("div",{className:"news-image-module-image-wrap flex-bottom-left",children:w.jsx("div",{className:"max-w-66 max-w-560px",children:w.jsx("p",{className:"type-xl",children:"We're entering a new era where inference-based computational methods uncover a new layer of intelligence in molecular design. At Varosync, we're building that future."})})}),w.jsx("div",{className:"animate-parent",children:w.jsxs("div",{className:"a--anim",children:[w.jsx("div",{className:"a--delay",children:"2"}),w.jsx("div",{className:"a--type",children:"a--up"}),w.jsx("div",{className:"a--type",children:"a--h-150-100"})]})})]})}),w.jsx("div",{className:"flex-w-child-25 tablet-1-6th min1l",children:w.jsx("div",{className:"el el-empty",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,transitionTimingFunction:"ease"},children:w.jsx("div",{className:"animate-parent",children:w.jsxs("div",{className:"a--anim",children:[w.jsx("div",{className:"a--delay",children:"1"}),w.jsx("div",{className:"a--type",children:"a--up"}),w.jsx("div",{className:"a--type",children:"none"})]})})})})]}),w.jsx("div",{className:"animate-list",children:w.jsxs("div",{className:"a--list-settings",children:[w.jsx("div",{className:"a--type",children:"a--up"}),w.jsx("div",{className:"a--columns-desktop",children:"3"}),w.jsx("div",{className:"a--columns-tablet",children:"2"}),w.jsx("div",{className:"a--columns-mobile",children:"1"})]})})]})}),w.jsxs("div",{className:"hero-3d-overlay-grid",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:10,display:"grid",gridTemplateColumns:"1fr minmax(320px, 1fr)",pointerEvents:"none"},children:[w.jsx("div",{style:{pointerEvents:"none",width:"100%",height:"100%"}}),w.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",width:"100%",height:"100%",overflow:"hidden",minWidth:0},children:w.jsx("div",{className:"hero-3d",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:w.jsx(nb,{})})})]})]}),w.jsx("style",{children:`
        /* Desktop: constrain 3D canvas to hero section height */
        .home-hero {
          position: relative !important;
        }
        
        .hero-3d-overlay-grid {
          height: 100% !important;
        }
        
        @media (max-width: 900px) {
          .hero-3d-overlay-grid {
            display: flex !important;
            flex-direction: column !important;
            position: static !important;
            width: 100% !important;
            height: auto !important;
            z-index: 10 !important;
          }
          .hero-3d-overlay-grid > div:first-child {
            display: none !important;
          }
          .hero-3d-overlay-grid > div:last-child {
            width: 100% !important;
            height: 600px !important;
            min-height: 500px !important;
            max-height: 700px !important;
            margin-top: -20px !important;
            margin-bottom: -120px !important;
            pointer-events: auto !important;
          }
        }

        @media (max-width: 480px) {
          .hero-3d-overlay-grid > div:last-child {
            height: 320px !important;
            min-height: 220px !important;
            max-height: 400px !important;
            margin-bottom: 60px !important;
          }
        }
      `}),w.jsx("section",{className:"landing-content-section",children:w.jsxs("div",{className:"landing-content-grid",style:{display:"flex",flexDirection:"row",alignItems:"flex-start"},children:[w.jsx("div",{className:"landing-content-image",style:{flex:1}}),w.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-start",width:"100%",paddingRight:"20px"},children:w.jsxs("div",{className:"landing-content-text",style:{maxWidth:"600px",marginLeft:"-150px",width:"100%"},children:[w.jsx("p",{className:"landing-content-body",style:{fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Varosync is redefining the foundations of drug development while addressing complex patient needs across a range of therapeutic areas. We pursue innovation not through haste but clarity, ensuring every decision is guided by rigorous science and translational relevance. A smarter approach to drug development..."}),w.jsx("br",{}),w.jsx("p",{className:"landing-content-body",style:{fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"... using intelligence and insight. As the science of discovery advances, the translation of molecular insight into viable therapies remains constrained by biological variability and complexity of real world data. We believe that the solution lies in decoding the process. By integrating artificial intelligence with heterogeneous clinical datasets, we uncover latent physiological patterns. By resolving hidden variability in patient response, we strengthen the bridge between molecular potential and clinical efficacy."})]})})]})}),w.jsx("section",{className:"mobile-blob-section",children:w.jsx("img",{src:"/assets/images/landing2.png",alt:"Mobile blob decoration",className:"mobile-blob-image"})}),w.jsx("section",{className:"landing-content-section",children:w.jsxs("div",{className:"funnel-grid",children:[w.jsx("div",{className:"funnel-cell funnel-image-cell",children:w.jsx("img",{src:"/assets/images/funnelopt.png",alt:"Intelligence and insight visualization",className:"funnel-image",loading:"lazy"})}),w.jsx("div",{className:"funnel-cell funnel-empty-cell"}),w.jsx("div",{className:"funnel-cell funnel-empty-cell"}),w.jsx("div",{className:"funnel-cell funnel-text-cell",children:w.jsx("p",{className:"funnel-text",style:{fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Our research engine is designed to navigate the vast and noisy landscape of drug discovery. By systematically evaluating countless molecular starting points against deep biological context, we distill an overwhelming number of possibilities into a focused set of validated, high-conviction targets. This process doesn't just find signals; it clarifies the path to developing medicines that matter."})})]})}),w.jsx("section",{className:"mobile-blob-section-left",children:w.jsx("img",{src:"/assets/images/landing1.png",alt:"Mobile blob decoration left",className:"mobile-blob-image-left"})}),w.jsx("section",{className:"landing-content-section",children:w.jsxs("div",{className:"landing-partners-container",children:[w.jsx("h2",{className:"landing-content-subtitle",style:{fontSize:"3rem",fontWeight:"400",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Our Partners"}),w.jsxs("div",{className:"landing-partners-grid",children:[w.jsx("img",{src:"/assets/images/partnera.png",alt:"Partner company 1",className:"landing-content-img-plain",loading:"lazy"}),w.jsx("img",{src:"/assets/images/partnerb.png",alt:"Partner company 2",className:"landing-content-img-plain",loading:"lazy"})]})]})}),w.jsx("section",{className:"landing-content-section",children:w.jsxs("div",{className:"landing-recognized-container",children:[w.jsx("h2",{className:"landing-content-subtitle",style:{fontSize:"3rem",fontWeight:"400",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Recognized by"}),w.jsx("div",{style:{height:"12px"}}),w.jsxs("div",{className:"landing-recognized-grid",children:[w.jsx("img",{src:"/assets/images/inceptionlogo.svg",alt:"Inception logo",className:"landing-content-img-plain",loading:"lazy",style:{transform:"scale(1.3)",transformOrigin:"center"}}),w.jsx("img",{src:"/assets/images/nybio.png",alt:"NYBIO logo",className:"landing-content-img-plain",loading:"lazy"}),w.jsx("img",{src:"/assets/images/nsf-icorps.png",alt:"Nsf-icorps logo",className:"landing-content-img-plain",loading:"lazy",style:{transform:"scale(1.5)",transformOrigin:"center"}}),w.jsx("img",{src:"/assets/images/theventures.svg",alt:"The Ventures logo",className:"landing-content-img-plain",loading:"lazy",style:{transform:"scale(1.3)",transformOrigin:"center"}})]})]})}),w.jsx("style",{children:`
        /* Exact CSS from the provided HTML file */
        .section {
          padding: 20px 0 0 0 !important;
          margin: 0 !important;
        }

        .section.home-hero {
          padding: 20px 0 0 0 !important;
          margin: 0 !important;
        }

        .spacing {
          height: 20px;
        }

        .nav-height {
          height: 20px;
        }

        ._100px {
          height: 20px;
        }

        .tablet-60px {
          height: 60px;
        }

        .mobile-40px {
          height: 40px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .comp-hero-card-module {
          border-radius: 12px;
          box-shadow: none;
          padding: 0;
          margin-bottom: 0;
          position: relative;
        }

        .list-horizontal {
          display: flex;
          gap: 0px;
          margin-bottom: 0px;
          border: 1px solid black;
          border-radius: 8px;
          padding: 20px;
          position: relative;
        }
        
        .list-horizontal::before {
          content: "2";
          position: absolute;
          top: 5px;
          left: 5px;
          background: blue;
          color: white;
          padding: 2px 6px;
          font-size: 12px;
          font-weight: bold;
          display: none;
        }
        
        .list-horizontal:nth-of-type(2)::before {
          content: "3";
          background: green;
          display: none;
        }
        
        .list-horizontal:nth-of-type(2) {
          border-color: black;
        }

        .flex-w-child-100 {
          flex: 1;
          padding: 10px;
          position: relative;
        }

        .flex-w-child-50 {
          flex: 0 0 50%;
          padding: 10px;
          position: relative;
        }

        .flex-w-child-25 {
          flex: 0 0 25%;
          padding: 10px;
          position: relative;
        }

        .flex-child-grow {
          flex: 1;
          padding: 10px;
          position: relative;
          min-height: 200px;
          display: flex;
          align-items: flex-end;
        }

        .flex-horizontal {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .news-image-module-image-wrap {
          width: 100%;
        }

        .flex-bottom-left {
          align-items: flex-end;
          height: 100%;
          display: flex;
        }

        .type-h1 {
          font-size: 4rem;
          font-weight: 300;
          line-height: 1.2;
          color: #000;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .type-xl {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #000;
          font-weight: 300;
          margin-top: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .max-w-66 {
          max-width: 66%;
        }

        .max-w-560px {
          max-width: 560px;
        }

        .min1t {
          min-height: auto;
        }

        .hero-text-el {
          padding: 0;
        }

        .el {
          opacity: 1;
          transform: none;
        }

        .extra-pad-bottom {
          padding-bottom: 30px;
        }

        .tablet-hidden {
          display: block;
        }

        .tablet-1-6th {
          flex: 0 0 16.66%;
        }

        .el-empty {
          min-height: 0;
        }

        /* Funnel Grid Layout */
        .funnel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .funnel-cell {
          border: 1px solid black;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .funnel-image-cell {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .funnel-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .funnel-text-cell {
          display: flex;
          align-items: flex-center;
          justify-content: flex-start;
          padding: 0 0 30 30 px;
        }

        .funnel-text {
          margin: 0;
          line-height: 1.6;
        }

        .funnel-empty-cell {
          border: none;
        }

        /* Fix image scaling issue - force proper sizing */
        .funnel-image-cell {
          width: 100% !important;
          height: auto !important;
          min-height: 0 !important;
          max-height: 400px !important;
        }

        .funnel-image {
          max-width: 100% !important;
          width: 100% !important;
          height: auto !important;
          max-height: 350px !important;
          object-fit: contain !important;
          display: block !important;
        }

        /* Mobile vertical stack - force single column */
        @media (max-width: 768px) {
          .funnel-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 30px !important;
            padding: 0 15px !important;
          }

          .funnel-empty-cell {
            display: none !important;
          }

          .funnel-cell {
            padding: 15px !important;
          }

          .funnel-image-cell {
            max-height: 500px !important;
          }

          .funnel-image {
            max-height: 450px !important;
          }
        }

        @media (max-width: 480px) {
          .funnel-grid {
            gap: 20px;
            padding: 0 10px;
          }

          .funnel-cell {
            padding: 10px;
          }
        }

        /* Hide animation control elements */
        .animate-parent,
        .animate-list,
        .a--anim,
        .a--delay,
        .a--type,
        .a--list-settings,
        .a--columns-desktop,
        .a--columns-tablet,
        .a--columns-mobile {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .section.home-hero {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .home-hero {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .tablet-hidden {
            display: none;
          }

          .spacing._100px {
            height: 20px;
          }

          .spacing.nav-height {
            height: 20px;
          }

          .type-h1 {
            font-size: 3rem;
          }

          .type-xl {
            font-size: 1.25rem;
          }

          .comp-hero-card-module {
            padding: 40px 30px;
          }

          .list-horizontal {
            flex-direction: column;
            gap: 20px;
          }

          .flex-w-child-50,
          .flex-w-child-25 {
            flex: 1;
          }

          .max-w-66 {
            max-width: 100%;
          }

          .flex-child-grow {
            min-height: 0;
            display: flex;
            align-items: flex-end;
          }

          .el-empty {
            min-height: 0;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .section.home-hero {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .home-hero {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .spacing._100px {
            height: 2px;
          }

          .spacing.nav-height {
            height: 2px;
          }

          .type-h1 {
            font-size: 2.5rem;
          }

          .comp-hero-card-module {
            padding: 30px 20px;
          }

          .flex-child-grow {
            min-height: 0;
            display: flex;
            align-items: flex-end;
          }

          .el-empty {
            min-height: 0;
          }
        }
      `})]})),rb=()=>{const[s,e]=ye.useState(60);ye.useEffect(()=>{document.title="Varosync - Technology"},[]),ye.useEffect(()=>{const o=()=>{const a=document.getElementById("tech-video");if(!a)return;if(window.innerWidth<=768){e(90);return}const u=a.getBoundingClientRect(),f=window.innerHeight;if(u.bottom>0&&u.top<f){const m=60+30*Math.max(0,Math.min(1,(f-u.top)/f));e(m)}};return window.addEventListener("scroll",o),window.addEventListener("resize",o),o(),()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}},[]);const t={fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},i={fontSize:"1.35rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'};return w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-10,pointerEvents:"none",backgroundColor:"#f0f6fd",transition:"background 1s"},"aria-hidden":"true"}),w.jsx(Ac,{page:"technology"}),w.jsx("section",{className:"hero",children:w.jsxs("div",{className:"hero-content",style:{textAlign:"left",marginTop:"50px",marginLeft:"20px",marginRight:"140px"},children:[w.jsx("div",{className:"hero-title-container",style:{border:"1px solid black",borderRadius:"8px",padding:"20px",position:"relative",display:"inline-block",maxWidth:"900px"},children:w.jsx("h1",{style:{fontSize:"4rem",fontWeight:"300",margin:0,color:"#000000",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Deconstructing biology's source code"})}),w.jsx("div",{className:"hero-text-container",style:{paddingBottom:"0px"},children:w.jsx("p",{className:"page-subtitle",style:t,children:"At the heart of our research and development lies a powerful, dual-pronged philosophy: to first understand the intricate complexity of human biology with unprecedented clarity, and then to rationally design and develop therapeutics of remarkable precision. We have cultivated a technology ecosystem that converges predictive, AI-driven science with a versatile, multi-modal therapeutic engine."})})]})}),w.jsx("div",{className:"tech-inline-blob-3","aria-hidden":"true",style:{display:"none"},children:w.jsx("img",{src:"/assets/images/technology3.png",alt:""})}),w.jsx("section",{className:"tech-video-section",children:w.jsx("div",{className:"tech-video-container",children:w.jsxs("video",{id:"tech-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:`${s}%`,height:"auto",borderRadius:"20px",display:"block",margin:"0 auto",maxWidth:"100%"},children:[w.jsx("source",{src:"/assets/videos/outputech.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})}),w.jsx("section",{className:"tech-content-section",children:w.jsxs("div",{className:"tech-content-block",children:[w.jsxs("div",{className:"tech-content-inner",children:[w.jsx("p",{style:t,children:"Varosync is building a new kind of engine, one that bridges biological complexity with computational clarity. Our platform integrates advanced machine learning with real-world data to uncover latent physiological signals and guide therapeutic design with greater precision."}),w.jsx("p",{style:t,children:"By modelling multiscale biological processes ranging from gene expression dynamics to drug metabolism and tissue-level pharmacokinetics. We infer patient-specific trajectories that reflect the true heterogeneity of disease. Using deep learning to capture nonlinear interactions between molecular pathways, physiological rhythms, and external interventions. enabling the prediction of therapeutic outcomes with greater temporal and mechanistic resolution."})]}),w.jsx("div",{className:"tech-inline-blob-1","aria-hidden":"true",style:{display:"none"},children:w.jsx("img",{src:"/assets/images/technology1.png",alt:""})})]})}),w.jsx("section",{className:"tech-content-section-split",children:w.jsxs("div",{className:"tech-split-container",children:[w.jsx("div",{className:"tech-content-left",children:w.jsx("div",{className:"tech-content-left-boxed",children:w.jsxs("div",{className:"tech-content-inner",children:[w.jsx("p",{style:i,children:"Our computational platform integrates diverse data streams to model complex biological systems. By combining machine learning with mechanistic modeling, we can predict how drugs will interact with biological targets and optimize therapeutic outcomes."}),w.jsx("p",{style:i,children:"The platform enables us to rapidly iterate through potential drug candidates, identifying those with the highest likelihood of success while minimizing potential side effects. This approach accelerates the drug development process while maintaining rigorous scientific standards."})]})})}),w.jsx("div",{className:"tech-image-right",children:w.jsx("div",{className:"tech-image-right-boxed",children:w.jsx("img",{src:"/assets/images/handchip.png",alt:"Technology Visualization"})})})]})})]})},sb=()=>(ye.useEffect(()=>{document.title="Varosync - Company"},[]),w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-10,pointerEvents:"none",background:"#effae2",transition:"background 1s"},"aria-hidden":"true"}),w.jsx(Ac,{page:"company"}),w.jsx("div",{className:"spacing nav-height"}),w.jsx("section",{className:"hero",style:{position:"relative",marginTop:"100px",paddingTop:"50px",paddingBottom:"0px",display:"flex",alignItems:"flex-start",justifyContent:"normal"},children:w.jsxs("div",{className:"hero-content",style:{marginLeft:"clamp(5px, 5vw, 400px)",maxWidth:"clamp(600px, 75vw, 1000px)",marginRight:"clamp(20px, 5vw, 50px)",marginTop:"0px",paddingBottom:"40px"},children:[w.jsx("div",{className:"hero-title-container",children:w.jsx("h1",{style:{fontSize:"4rem",fontWeight:"300",margin:0,color:"#000000",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Solving the attrition problem"})}),w.jsxs("div",{className:"hero-text-container",style:{paddingBottom:"0px"},children:[w.jsx("p",{className:"page-subtitle",style:{fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Varosync was founded with a singular, clear-sighted ambition: to deliver transformative medicines that address the underlying drivers of disease. We believe the next frontier in human health lies in understanding and modulating the essential, dynamic processes that govern cellular function. Our purpose is to translate this profound biological understanding into a new generation of therapeutics, offering hope where there was none and pursuing treatments for some of the world's most challenging illnesses."}),w.jsx("p",{className:"page-subtitle",style:{fontSize:"1.5rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Every day, with each new breakthrough, we're getting closer to achieving our ambitious mission to establish a new standard of care with the help of artificial intelligence."})]})]})}),w.jsxs("section",{className:"content",style:{position:"relative",marginTop:"80px"},children:[w.jsxs("div",{className:"content-with-image",children:[w.jsx("div",{className:"company-info",children:w.jsxs("div",{className:"partnership",children:[w.jsx("h2",{style:{fontSize:"2.2rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Partnerships that push boundaries "}),w.jsx("p",{style:{fontSize:"1.2rem",fontWeight:"300",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'},children:"Our culture of collaboration reaches well beyond our own walls and forms the foundation of every partnership, whether with pharmaceutical firms, biotechs, CROs, or other forward-thinking innovators. Our partnerships bring us together in pursuit of a common aim to develop medicines for those who need them most. Transformative discoveries demand tenacity, bold thinking, and true collaboration. That's why we champion rigorous, high-potential science at every stage, applying our expertise to help turn ambitious ideas into tangible breakthroughs."}),w.jsx("img",{src:"/assets/images/company3.png",alt:"",className:"company1-blob company3-blob-inline"})]})}),w.jsx("div",{className:"content-image",children:w.jsx("img",{src:"/assets/images/pillcomp.png",alt:"Company Pill",style:{border:"none",boxShadow:"none",display:"block",maxWidth:"100%",width:"100%",height:"auto",objectFit:"contain"}})})]}),w.jsx("img",{src:"/assets/images/company1.png",alt:"",className:"company1-blob content-blob"})]})]})),ob=()=>{ye.useEffect(()=>{document.title="Varosync - News"},[]);const s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',e=[{id:1,date:"2024",title:"AI Powers a New Era of Drug Discovery and Development",author:"Nature",excerpt:"This article discusses how the integration of artificial intelligence (AI) and big data is revolutionizing the drug discovery process. By combining AI with expert knowledge, pharmaceutical companies are accelerating the development of more effective medicines, reducing the time and cost traditionally associated with bringing new drugs to market. This hybrid approach is poised to provide new treatment options for patients worldwide.",category:"Research",size:"large",url:"https://www.nature.com/articles/d42473-024-00250-9"},{id:2,date:"2023",title:"Molecular Free Energies, Rates, and Mechanisms from Data-Efficient Path Sampling Simulations",author:"Journal of Chemical Theory and Computation (ACS)",excerpt:"This paper introduces a data-efficient method for exploring reaction pathways and free energy surfaces using machine learning-enhanced path sampling. It highlights how physical priors and statistical inference can reduce simulation costs while improving mechanistic fidelity—an approach that aligns closely with our interest in model-driven simulations of pharmacokinetics and biomolecular interactions.",category:"Research",size:"medium",url:"https://pubs.acs.org/doi/10.1021/acs.jctc.3c00821"},{id:3,date:"2024",title:"Starfysh Integrates Spatial Transcriptomic and Histologic Data to Reveal Heterogeneous Tumour–Immune Hubs",author:"Nature Biotechnology",excerpt:"This study introduces Starfysh, a computational framework that combines spatial transcriptomic data with histological context to identify cellular neighbourhoods within the tumour microenvironment. The method enables high-resolution mapping of tumour–immune interactions, uncovering functional hubs that are invisible to conventional analysis. For Varosync, this illustrates the power of integrative modelling in resolving biological heterogeneity.",category:"Research",size:"medium",url:"https://www.nature.com/articles/s41587-024-02173-8"},{id:4,date:"2025",title:"Introducing Varosync",author:"",excerpt:"As we shape the future of pharma, we're proud to introduce Varosync.",category:"Tech",size:"medium",url:"https://www.varosync.com"}];return w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-10,pointerEvents:"none",background:`
            linear-gradient(120deg, #FEF7E8 0%, #FFF9F0 60%, transparent 100%),
            linear-gradient(60deg, #FFFEF9 10%, transparent 80%),
            linear-gradient(200deg, #FFF9F0 20%, #FFFEF9 80%, transparent 100%),
            linear-gradient(90deg, #FEF7E8 0%, transparent 100%)
          `,transition:"background 1s"},"aria-hidden":"true"}),w.jsxs("section",{className:"content",children:[w.jsx("div",{className:"news-header-section",children:" "}),w.jsxs("div",{className:"news-grid",children:[w.jsx("img",{src:"/assets/images/news2.png",alt:"",className:"news-grid-blob blob-row1"}),e.slice(1,3).map(t=>w.jsx("article",{className:"news-card",children:w.jsxs("div",{className:"news-content",children:[w.jsxs("div",{className:"news-header",children:[w.jsxs("span",{className:"news-category-date",style:{fontFamily:s},children:[t.category," • ",t.date]}),w.jsx("h3",{className:"news-title",style:{fontFamily:s},children:t.title}),w.jsx("p",{className:"news-author",style:{fontFamily:s},children:t.author})]}),w.jsxs("div",{className:"news-footer",children:[w.jsx("p",{className:"news-excerpt",style:{fontFamily:s},children:t.excerpt}),w.jsx("a",{href:t.url,className:"read-more",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:s},children:"Read More"})]})]})},t.id)),w.jsx("article",{className:"news-card featured",children:w.jsxs("div",{className:"news-content",children:[w.jsxs("div",{className:"news-header",children:[w.jsxs("span",{className:"news-category-date",style:{fontFamily:s},children:[e[3].category," • ",e[3].date]}),w.jsx("h2",{className:"news-title",style:{fontFamily:s},children:e[3].title}),e[3].author&&w.jsx("p",{className:"news-author",style:{fontFamily:s},children:e[3].author})]}),w.jsxs("div",{className:"news-footer",children:[w.jsx("p",{className:"news-excerpt",style:{fontFamily:s},children:e[3].excerpt}),w.jsx("a",{href:e[3].url,className:"read-more",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:s},children:"Read More"})]})]})}),w.jsx("img",{src:"/assets/images/news1.png",alt:"",className:"news-grid-blob blob-row2"}),w.jsx("img",{src:"/assets/images/news3.png",alt:"",className:"news-grid-blob blob-row3"}),w.jsx("article",{className:"news-card",children:w.jsxs("div",{className:"news-content",children:[w.jsxs("div",{className:"news-header",children:[w.jsxs("span",{className:"news-category-date",style:{fontFamily:s},children:[e[0].category," • ",e[0].date]}),w.jsx("h3",{className:"news-title",style:{fontFamily:s},children:e[0].title}),w.jsx("p",{className:"news-author",style:{fontFamily:s},children:e[0].author})]}),w.jsxs("div",{className:"news-footer",children:[w.jsx("p",{className:"news-excerpt",style:{fontFamily:s},children:e[0].excerpt}),w.jsx("a",{href:e[0].url,className:"read-more",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:s},children:"Read More"})]})]})})]})]})]})},ab=()=>{const[s,e]=ye.useState({name:"",email:"",company:"",subject:"",message:"",newsletter:!1}),[t,i]=ye.useState({}),[o,a]=ye.useState(!1),[c,u]=ye.useState("idle"),f='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',h=(v,y)=>{switch(v){case"name":return y.trim()?y.length<2?"Name must be at least 2 characters long":"":"Name is required";case"email":return y.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)?"":"Please enter a valid email address":"Email is required";case"subject":return y.trim()?"":"Subject is required";case"message":return y.trim()?y.length<10?"Message must be at least 10 characters long":"":"Message is required";default:return""}},p=v=>{const{name:y,value:C,type:A}=v.target,L=A==="checkbox"?v.target.checked:!1;e(z=>({...z,[y]:A==="checkbox"?L:C})),t[y]&&i(z=>({...z,[y]:""}))},m=v=>{const{name:y,value:C}=v.target,A=h(y,C);A&&i(L=>({...L,[y]:A}))},_=()=>{const v={};return["name","email","subject","message"].forEach(C=>{const A=h(C,s[C]);A&&(v[C]=A)}),i(v),Object.keys(v).length===0},S=()=>new Promise((v,y)=>{setTimeout(()=>{Math.random()>.1?v():y(new Error("Network error"))},2e3)}),E=async v=>{if(v.preventDefault(),!!_()){a(!0),u("idle");try{await S(),u("success"),e({name:"",email:"",company:"",subject:"",message:"",newsletter:!1}),i({}),setTimeout(()=>{u("idle")},5e3)}catch{u("error"),setTimeout(()=>{u("idle")},5e3)}finally{a(!1)}}},M=v=>t[v]?"form-group error":s[v]&&!t[v]?"form-group success":"form-group";return w.jsxs("form",{className:"form",onSubmit:E,children:[w.jsxs("div",{className:M("name"),children:[w.jsx("label",{htmlFor:"name",style:{fontFamily:f},children:"Full Name *"}),w.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:p,onBlur:m,required:!0,style:{fontFamily:f}}),t.name&&w.jsx("span",{className:"error-message",style:{fontFamily:f},children:t.name})]}),w.jsxs("div",{className:M("email"),children:[w.jsx("label",{htmlFor:"email",style:{fontFamily:f},children:"Email Address *"}),w.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:p,onBlur:m,required:!0,style:{fontFamily:f}}),t.email&&w.jsx("span",{className:"error-message",style:{fontFamily:f},children:t.email})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"company",style:{fontFamily:f},children:"Company"}),w.jsx("input",{type:"text",id:"company",name:"company",value:s.company,onChange:p,style:{fontFamily:f}})]}),w.jsxs("div",{className:M("subject"),children:[w.jsx("label",{htmlFor:"subject",style:{fontFamily:f},children:"Subject *"}),w.jsxs("select",{id:"subject",name:"subject",value:s.subject,onChange:p,onBlur:m,required:!0,style:{fontFamily:f},children:[w.jsx("option",{value:"",children:"Select a subject"}),w.jsx("option",{value:"general",children:"General Inquiry"}),w.jsx("option",{value:"sales",children:"Sales Question"}),w.jsx("option",{value:"support",children:"Technical Support"}),w.jsx("option",{value:"partnership",children:"Partnership"}),w.jsx("option",{value:"other",children:"Other"})]}),t.subject&&w.jsx("span",{className:"error-message",style:{fontFamily:f},children:t.subject})]}),w.jsxs("div",{className:M("message"),children:[w.jsx("label",{htmlFor:"message",style:{fontFamily:f},children:"Message *"}),w.jsx("textarea",{id:"message",name:"message",rows:5,value:s.message,onChange:p,onBlur:m,required:!0,style:{fontFamily:f}}),t.message&&w.jsx("span",{className:"error-message",style:{fontFamily:f},children:t.message}),w.jsxs("div",{className:"character-counter",style:{fontFamily:f},children:[s.message.length,"/500 characters"]})]}),w.jsx("div",{className:"form-group",children:w.jsxs("label",{className:"checkbox-label",style:{fontFamily:f},children:[w.jsx("input",{type:"checkbox",id:"newsletter",name:"newsletter",checked:s.newsletter,onChange:p}),w.jsx("span",{className:"checkmark"}),"Subscribe to our newsletter for updates"]})}),w.jsx("button",{type:"submit",className:"submit-btn",disabled:o,style:{fontFamily:f},children:o?"Sending...":"Send Message"}),c==="success"&&w.jsx("div",{className:"form-success-message",style:{fontFamily:f},children:"Thank you! Your message has been sent successfully. We'll get back to you soon."}),c==="error"&&w.jsx("div",{className:"form-error-message",style:{fontFamily:f},children:"Failed to send message. Please try again."})]})},lb=()=>{ye.useEffect(()=>{document.title="Varosync - Contact"},[]);const s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';return w.jsxs(w.Fragment,{children:[w.jsx(Ac,{page:"contact"}),w.jsx("section",{className:"hero",children:w.jsxs("div",{className:"hero-content",children:[w.jsx("h1",{className:"page-title",style:{fontFamily:s},children:"Get in Touch"}),w.jsx("p",{className:"page-subtitle",style:{fontFamily:s},children:"Let's discuss how we can help bring your vision to life"})]})}),w.jsx("section",{className:"content",children:w.jsx("div",{className:"content-wrapper",children:w.jsxs("div",{className:"contact-container",children:[w.jsxs("div",{className:"contact-info",children:[w.jsx("h2",{style:{fontFamily:s},children:"Contact Information"}),w.jsxs("div",{className:"contact-item",children:[w.jsx("h3",{style:{fontFamily:s},children:"General Inquiries"}),w.jsx("p",{style:{fontFamily:s},children:"Email: info@varosync.com"}),w.jsx("p",{style:{fontFamily:s},children:"Phone: +1 (555) 123-4567"})]}),w.jsxs("div",{className:"contact-item",children:[w.jsx("h3",{style:{fontFamily:s},children:"Sales"}),w.jsx("p",{style:{fontFamily:s},children:"Email: sales@varosync.com"}),w.jsx("p",{style:{fontFamily:s},children:"Phone: +1 (555) 123-4568"})]}),w.jsxs("div",{className:"contact-item",children:[w.jsx("h3",{style:{fontFamily:s},children:"Support"}),w.jsx("p",{style:{fontFamily:s},children:"Email: support@varosync.com"}),w.jsx("p",{style:{fontFamily:s},children:"Phone: +1 (555) 123-4569"})]}),w.jsxs("div",{className:"contact-item",children:[w.jsx("h3",{style:{fontFamily:s},children:"Office Address"}),w.jsxs("p",{style:{fontFamily:s},children:["123 Innovation Drive",w.jsx("br",{}),"Tech Valley, CA 94025",w.jsx("br",{}),"United States"]})]}),w.jsxs("div",{className:"social-links",children:[w.jsx("h3",{style:{fontFamily:s},children:"Follow Us"}),w.jsxs("div",{className:"social-icons",children:[w.jsx("a",{href:"#linkedin",style:{fontFamily:s},children:"LinkedIn"}),w.jsx("a",{href:"#twitter",style:{fontFamily:s},children:"Twitter"}),w.jsx("a",{href:"#github",style:{fontFamily:s},children:"GitHub"}),w.jsx("a",{href:"#youtube",style:{fontFamily:s},children:"YouTube"})]})]})]}),w.jsxs("div",{className:"contact-form",children:[w.jsx("h2",{style:{fontFamily:s},children:"Send us a Message"}),w.jsx(ab,{})]})]})})})]})};function cb(){return w.jsx(iy,{children:w.jsxs("div",{className:"app",children:[w.jsx(ay,{}),w.jsx("main",{className:"main",children:w.jsxs($x,{children:[w.jsx(ro,{path:"/",element:w.jsx(ib,{})}),w.jsx(ro,{path:"/technology",element:w.jsx(rb,{})}),w.jsx(ro,{path:"/company",element:w.jsx(sb,{})}),w.jsx(ro,{path:"/news",element:w.jsx(ob,{})}),w.jsx(ro,{path:"/contact",element:w.jsx(lb,{})})]})}),w.jsx(ly,{})]})})}rx.createRoot(document.getElementById("root")).render(w.jsx(h_.StrictMode,{children:w.jsx(cb,{})}));
//# sourceMappingURL=index-BQ5Tu59S.js.map
