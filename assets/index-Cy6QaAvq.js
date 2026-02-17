(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Ig(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gu={exports:{}},$o={},Wu={exports:{}},ft={};var Np;function t0(){if(Np)return ft;Np=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(N,V,j){this.props=N,this.context=V,this.refs=E,this.updater=j||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function P(N,V,j){this.props=N,this.context=V,this.refs=E,this.updater=j||S}var A=P.prototype=new x;A.constructor=P,M(A,y.prototype),A.isPureReactComponent=!0;var C=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ce(N,V,j){var ee,fe={},Se=null,Ee=null;if(V!=null)for(ee in V.ref!==void 0&&(Ee=V.ref),V.key!==void 0&&(Se=""+V.key),V)z.call(V,ee)&&!U.hasOwnProperty(ee)&&(fe[ee]=V[ee]);var be=arguments.length-2;if(be===1)fe.children=j;else if(1<be){for(var Ie=Array(be),ke=0;ke<be;ke++)Ie[ke]=arguments[ke+2];fe.children=Ie}if(N&&N.defaultProps)for(ee in be=N.defaultProps,be)fe[ee]===void 0&&(fe[ee]=be[ee]);return{$$typeof:o,type:N,key:Se,ref:Ee,props:fe,_owner:F.current}}function R(N,V){return{$$typeof:o,type:N.type,key:V,ref:N.ref,props:N.props,_owner:N._owner}}function I(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function oe(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(j){return V[j]})}var ue=/\/+/g;function _e(N,V){return typeof N=="object"&&N!==null&&N.key!=null?oe(""+N.key):V.toString(36)}function H(N,V,j,ee,fe){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(Se){case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case o:case e:Ee=!0}}if(Ee)return Ee=N,fe=fe(Ee),N=ee===""?"."+_e(Ee,0):ee,C(fe)?(j="",N!=null&&(j=N.replace(ue,"$&/")+"/"),H(fe,V,j,"",function(ke){return ke})):fe!=null&&(I(fe)&&(fe=R(fe,j+(!fe.key||Ee&&Ee.key===fe.key?"":(""+fe.key).replace(ue,"$&/")+"/")+N)),V.push(fe)),1;if(Ee=0,ee=ee===""?".":ee+":",C(N))for(var be=0;be<N.length;be++){Se=N[be];var Ie=ee+_e(Se,be);Ee+=H(Se,V,j,Ie,fe)}else if(Ie=_(N),typeof Ie=="function")for(N=Ie.call(N),be=0;!(Se=N.next()).done;)Se=Se.value,Ie=ee+_e(Se,be++),Ee+=H(Se,V,j,Ie,fe);else if(Se==="object")throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Z(N,V,j){if(N==null)return N;var ee=[],fe=0;return H(N,ee,"","",function(Se){return V.call(j,Se,fe++)}),ee}function se(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(j){(N._status===0||N._status===-1)&&(N._status=1,N._result=j)},function(j){(N._status===0||N._status===-1)&&(N._status=2,N._result=j)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var ae={current:null},G={transition:null},$={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function W(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:Z,forEach:function(N,V,j){Z(N,function(){V.apply(this,arguments)},j)},count:function(N){var V=0;return Z(N,function(){V++}),V},toArray:function(N){return Z(N,function(V){return V})||[]},only:function(N){if(!I(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ft.Component=y,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=P,ft.StrictMode=r,ft.Suspense=f,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,ft.act=W,ft.cloneElement=function(N,V,j){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ee=M({},N.props),fe=N.key,Se=N.ref,Ee=N._owner;if(V!=null){if(V.ref!==void 0&&(Se=V.ref,Ee=F.current),V.key!==void 0&&(fe=""+V.key),N.type&&N.type.defaultProps)var be=N.type.defaultProps;for(Ie in V)z.call(V,Ie)&&!U.hasOwnProperty(Ie)&&(ee[Ie]=V[Ie]===void 0&&be!==void 0?be[Ie]:V[Ie])}var Ie=arguments.length-2;if(Ie===1)ee.children=j;else if(1<Ie){be=Array(Ie);for(var ke=0;ke<Ie;ke++)be[ke]=arguments[ke+2];ee.children=be}return{$$typeof:o,type:N.type,key:fe,ref:Se,props:ee,_owner:Ee}},ft.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},ft.createElement=ce,ft.createFactory=function(N){var V=ce.bind(null,N);return V.type=N,V},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:u,render:N}},ft.isValidElement=I,ft.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},ft.memo=function(N,V){return{$$typeof:h,type:N,compare:V===void 0?null:V}},ft.startTransition=function(N){var V=G.transition;G.transition={};try{N()}finally{G.transition=V}},ft.unstable_act=W,ft.useCallback=function(N,V){return ae.current.useCallback(N,V)},ft.useContext=function(N){return ae.current.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N){return ae.current.useDeferredValue(N)},ft.useEffect=function(N,V){return ae.current.useEffect(N,V)},ft.useId=function(){return ae.current.useId()},ft.useImperativeHandle=function(N,V,j){return ae.current.useImperativeHandle(N,V,j)},ft.useInsertionEffect=function(N,V){return ae.current.useInsertionEffect(N,V)},ft.useLayoutEffect=function(N,V){return ae.current.useLayoutEffect(N,V)},ft.useMemo=function(N,V){return ae.current.useMemo(N,V)},ft.useReducer=function(N,V,j){return ae.current.useReducer(N,V,j)},ft.useRef=function(N){return ae.current.useRef(N)},ft.useState=function(N){return ae.current.useState(N)},ft.useSyncExternalStore=function(N,V,j){return ae.current.useSyncExternalStore(N,V,j)},ft.useTransition=function(){return ae.current.useTransition()},ft.version="18.3.1",ft}var Ip;function jd(){return Ip||(Ip=1,Wu.exports=t0()),Wu.exports}var Dp;function n0(){if(Dp)return $o;Dp=1;var o=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},_=null,S=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)r.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:S,props:g,_owner:s.current}}return $o.Fragment=t,$o.jsx=c,$o.jsxs=c,$o}var Up;function i0(){return Up||(Up=1,Gu.exports=n0()),Gu.exports}var le=i0(),Zt=jd();const r0=Ig(Zt);var yl={},Xu={exports:{}},On={},ju={exports:{}},qu={};var Fp;function s0(){return Fp||(Fp=1,function(o){function e(G,$){var W=G.length;G.push($);e:for(;0<W;){var N=W-1>>>1,V=G[N];if(0<s(V,$))G[N]=$,G[W]=V,W=N;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var $=G[0],W=G.pop();if(W!==$){G[0]=W;e:for(var N=0,V=G.length,j=V>>>1;N<j;){var ee=2*(N+1)-1,fe=G[ee],Se=ee+1,Ee=G[Se];if(0>s(fe,W))Se<V&&0>s(Ee,fe)?(G[N]=Ee,G[Se]=W,N=Se):(G[N]=fe,G[ee]=W,N=ee);else if(Se<V&&0>s(Ee,W))G[N]=Ee,G[Se]=W,N=Se;else break e}}return $}function s(G,$){var W=G.sortIndex-$.sortIndex;return W!==0?W:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,_=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var $=t(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=G)r(h),$.sortIndex=$.expirationTime,e(f,$);else break;$=t(h)}}function C(G){if(E=!1,A(G),!M)if(t(f)!==null)M=!0,se(z);else{var $=t(h);$!==null&&ae(C,$.startTime-G)}}function z(G,$){M=!1,E&&(E=!1,x(ce),ce=-1),S=!0;var W=_;try{for(A($),g=t(f);g!==null&&(!(g.expirationTime>$)||G&&!oe());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var V=N(g.expirationTime<=$);$=o.unstable_now(),typeof V=="function"?g.callback=V:g===t(f)&&r(f),A($)}else r(f);g=t(f)}if(g!==null)var j=!0;else{var ee=t(h);ee!==null&&ae(C,ee.startTime-$),j=!1}return j}finally{g=null,_=W,S=!1}}var F=!1,U=null,ce=-1,R=5,I=-1;function oe(){return!(o.unstable_now()-I<R)}function ue(){if(U!==null){var G=o.unstable_now();I=G;var $=!0;try{$=U(!0,G)}finally{$?_e():(F=!1,U=null)}}else F=!1}var _e;if(typeof P=="function")_e=function(){P(ue)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Z=H.port2;H.port1.onmessage=ue,_e=function(){Z.postMessage(null)}}else _e=function(){y(ue,0)};function se(G){U=G,F||(F=!0,_e())}function ae(G,$){ce=y(function(){G(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){M||S||(M=!0,se(z))},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(G){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var W=_;_=$;try{return G()}finally{_=W}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var W=_;_=G;try{return $()}finally{_=W}},o.unstable_scheduleCallback=function(G,$,W){var N=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?N+W:N):W=N,G){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=W+V,G={id:m++,callback:$,priorityLevel:G,startTime:W,expirationTime:V,sortIndex:-1},W>N?(G.sortIndex=W,e(h,G),t(f)===null&&G===t(h)&&(E?(x(ce),ce=-1):E=!0,ae(C,W-N))):(G.sortIndex=V,e(f,G),M||S||(M=!0,se(z))),G},o.unstable_shouldYield=oe,o.unstable_wrapCallback=function(G){var $=_;return function(){var W=_;_=$;try{return G.apply(this,arguments)}finally{_=W}}}}(qu)),qu}var Op;function o0(){return Op||(Op=1,ju.exports=s0()),ju.exports}var kp;function a0(){if(kp)return On;kp=1;var o=jd(),e=o0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(s[n]=i,n=0;n<i.length;n++)r.add(i[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,i,l,d){if(l!==null&&l.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,l,d){if(i===null||typeof i>"u"||S(n,i,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,l,d,p,v,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,P);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,P);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,P);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function A(n,i,l,d){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,l,p,d)&&(l=null),d||p===null?_(i)&&(l===null?n.removeAttribute(i):n.setAttribute(i,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(i=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(i):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,i,l):n.setAttribute(i,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),G=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,N;function V(n){if(N===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var j=!1;function ee(n,i){if(!n||j)return"";j=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var d=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){d=J}n.call(i.prototype)}else{try{throw Error()}catch(J){d=J}n()}}catch(J){if(J&&d&&typeof J.stack=="string"){for(var p=J.stack.split(`
`),v=d.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var O=`
`+p[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=D);break}}}finally{j=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?V(n):""}function fe(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case R:return"Profiler";case ce:return"StrictMode";case _e:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case oe:return(n.displayName||"Context")+".Consumer";case I:return(n._context.displayName||"Context")+".Provider";case ue:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ke(n){var i=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),d=""+n[i];if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(T){d=""+T,v.call(this,T)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function dt(n){n._valueTracker||(n._valueTracker=ke(n))}function te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var l=i.getValue(),d="";return n&&(d=Ie(n)?n.checked?"true":"false":n.value),n=d,n!==l?(i.setValue(n),!0):!1}function Yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,i){var l=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function et(n,i){var l=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;l=be(i.value!=null?i.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ze(n,i){i=i.checked,i!=null&&A(n,"checked",i,!1)}function Ct(n,i){ze(n,i);var l=be(i.value),d=i.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?L(n,i.type,l):i.hasOwnProperty("defaultValue")&&L(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rt(n,i,l){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,l||i===n.value||(n.value=i),n.defaultValue=i}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function L(n,i,l){(i!=="number"||Yt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var w=Array.isArray;function Q(n,i,l,d){if(n=n.options,i){i={};for(var p=0;p<l.length;p++)i["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=i.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+be(l),i=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function ve(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function me(n,i){var l=i.value;if(l==null){if(l=i.children,i=i.defaultValue,l!=null){if(i!=null)throw Error(t(92));if(w(l)){if(1<l.length)throw Error(t(93));l=l[0]}i=l}i==null&&(i=""),l=i}n._wrapperState={initialValue:be(l)}}function xe(n,i){var l=be(i.value),d=be(i.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),i.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function He(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function De(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Re(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xe,st=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(i,l,d,p)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Xe=Xe||document.createElement("div"),Xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Xe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pe(n,i){if(i){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=i;return}}n.textContent=i}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ut=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(n){ut.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),_t[i]=_t[n]})});function Qe(n,i,l){return i==null||typeof i=="boolean"||i===""?"":l||typeof i!="number"||i===0||_t.hasOwnProperty(n)&&_t[n]?(""+i).trim():i+"px"}function Ge(n,i){n=n.style;for(var l in i)if(i.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Qe(l,i[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var Fe=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(n,i){if(i){if(Fe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function xt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function ot(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,k=null,Te=null;function Ae(n){if(n=Uo(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),Me(n.stateNode,n.type,i))}}function $e(n){k?Te?Te.push(n):Te=[n]:k=n}function je(){if(k){var n=k,i=Te;if(Te=k=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function Tt(n,i){return n(i)}function wt(){}var Gt=!1;function on(n,i,l){if(Gt)return n(i,l);Gt=!0;try{return Tt(n,i,l)}finally{Gt=!1,(k!==null||Te!==null)&&(wt(),je())}}function St(n,i){var l=n.stateNode;if(l===null)return null;var d=Ua(l);if(d===null)return null;l=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,i,typeof l));return l}var Qt=!1;if(u)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Qt=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Qt=!1}function pa(n,i,l,d,p,v,T,D,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(l,J)}catch(he){this.onError(he)}}var Nr=!1,bi=null,Ir=!1,Qi=null,ma={onError:function(n){Nr=!0,bi=n}};function ga(n,i,l,d,p,v,T,D,O){Nr=!1,bi=null,pa.apply(ma,arguments)}function dc(n,i,l,d,p,v,T,D,O){if(ga.apply(this,arguments),Nr){if(Nr){var J=bi;Nr=!1,bi=null}else throw Error(t(198));Ir||(Ir=!0,Qi=J)}}function Ci(n){var i=n,l=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(l=i.return),n=i.return;while(n)}return i.tag===3?l:null}function _a(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function b(n){if(Ci(n)!==n)throw Error(t(188))}function Y(n){var i=n.alternate;if(!i){if(i=Ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var l=n,d=i;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return b(p),n;if(v===d)return b(p),i;v=v.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,d=v;break}if(D===d){T=!0,d=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,d=p;break}if(D===d){T=!0,d=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:i}function ie(n){return n=Y(n),n!==null?re(n):null}function re(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=re(n);if(i!==null)return i;n=n.sibling}return null}var ne=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,Ve=e.unstable_shouldYield,Ke=e.unstable_requestPaint,Pe=e.unstable_now,at=e.unstable_getCurrentPriorityLevel,Je=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,Nt=e.unstable_NormalPriority,En=e.unstable_LowPriority,jt=e.unstable_IdlePriority,Ln=null,vt=null;function lt(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ln,n,void 0,(n.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:va,Ot=Math.log,Li=Math.LN2;function va(n){return n>>>=0,n===0?32:31-(Ot(n)/Li|0)|0}var _i=64,Ji=4194304;function Wt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jn(n,i){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?d=Wt(D):(v&=T,v!==0&&(d=Wt(v)))}else T=l&~p,T!==0?d=Wt(T):v!==0&&(d=Wt(v));if(d===0)return 0;if(i!==0&&i!==d&&(i&p)===0&&(p=d&-d,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((d&4)!==0&&(d|=l&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=d;0<i;)l=31-Tn(i),p=1<<l,d|=n[l],i&=~p;return d}function _o(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(n,i){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Tn(v),D=1<<T,O=p[T];O===-1?((D&l)===0||(D&d)!==0)&&(p[T]=_o(D,i)):O<=i&&(n.expiredLanes|=D),v&=~D}}function Dr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xa(){var n=_i;return _i<<=1,(_i&4194240)===0&&(_i=64),n}function fs(n){for(var i=[],l=0;31>l;l++)i.push(n);return i}function vo(n,i,l){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tn(i),n[i]=l}function M_(n,i){var l=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Tn(l),v=1<<p;i[p]=0,d[p]=-1,n[p]=-1,l&=~v}}function fc(n,i){var l=n.entangledLanes|=i;for(n=n.entanglements;l;){var d=31-Tn(l),p=1<<d;p&i|n[d]&i&&(n[d]|=i),l&=~p}}var At=0;function uf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var df,hc,ff,hf,pf,pc=!1,ya=[],er=null,tr=null,nr=null,xo=new Map,yo=new Map,ir=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(n,i){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(i.pointerId)}}function So(n,i,l,d,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:l,eventSystemFlags:d,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Uo(i),i!==null&&hc(i)),n):(n.eventSystemFlags|=d,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function T_(n,i,l,d,p){switch(i){case"focusin":return er=So(er,n,i,l,d,p),!0;case"dragenter":return tr=So(tr,n,i,l,d,p),!0;case"mouseover":return nr=So(nr,n,i,l,d,p),!0;case"pointerover":var v=p.pointerId;return xo.set(v,So(xo.get(v)||null,n,i,l,d,p)),!0;case"gotpointercapture":return v=p.pointerId,yo.set(v,So(yo.get(v)||null,n,i,l,d,p)),!0}return!1}function gf(n){var i=Ur(n.target);if(i!==null){var l=Ci(i);if(l!==null){if(i=l.tag,i===13){if(i=_a(l),i!==null){n.blockedOn=i,pf(n.priority,function(){ff(l)});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var l=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Pt=d,l.target.dispatchEvent(d),Pt=null}else return i=Uo(l),i!==null&&hc(i),n.blockedOn=l,!1;i.shift()}return!0}function _f(n,i,l){Sa(n)&&l.delete(i)}function w_(){pc=!1,er!==null&&Sa(er)&&(er=null),tr!==null&&Sa(tr)&&(tr=null),nr!==null&&Sa(nr)&&(nr=null),xo.forEach(_f),yo.forEach(_f)}function Mo(n,i){n.blockedOn===i&&(n.blockedOn=null,pc||(pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,w_)))}function Eo(n){function i(p){return Mo(p,n)}if(0<ya.length){Mo(ya[0],n);for(var l=1;l<ya.length;l++){var d=ya[l];d.blockedOn===n&&(d.blockedOn=null)}}for(er!==null&&Mo(er,n),tr!==null&&Mo(tr,n),nr!==null&&Mo(nr,n),xo.forEach(i),yo.forEach(i),l=0;l<ir.length;l++)d=ir[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<ir.length&&(l=ir[0],l.blockedOn===null);)gf(l),l.blockedOn===null&&ir.shift()}var hs=C.ReactCurrentBatchConfig,Ma=!0;function A_(n,i,l,d){var p=At,v=hs.transition;hs.transition=null;try{At=1,mc(n,i,l,d)}finally{At=p,hs.transition=v}}function R_(n,i,l,d){var p=At,v=hs.transition;hs.transition=null;try{At=4,mc(n,i,l,d)}finally{At=p,hs.transition=v}}function mc(n,i,l,d){if(Ma){var p=gc(n,i,l,d);if(p===null)Ic(n,i,d,Ea,l),mf(n,d);else if(T_(p,n,i,l,d))d.stopPropagation();else if(mf(n,d),i&4&&-1<E_.indexOf(n)){for(;p!==null;){var v=Uo(p);if(v!==null&&df(v),v=gc(n,i,l,d),v===null&&Ic(n,i,d,Ea,l),v===p)break;p=v}p!==null&&d.stopPropagation()}else Ic(n,i,d,null,l)}}var Ea=null;function gc(n,i,l,d){if(Ea=null,n=ot(d),n=Ur(n),n!==null)if(i=Ci(n),i===null)n=null;else if(l=i.tag,l===13){if(n=_a(i),n!==null)return n;n=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function vf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(at()){case Je:return 1;case nt:return 4;case Nt:case En:return 16;case jt:return 536870912;default:return 16}default:return 16}}var rr=null,_c=null,Ta=null;function xf(){if(Ta)return Ta;var n,i=_c,l=i.length,d,p="value"in rr?rr.value:rr.textContent,v=p.length;for(n=0;n<l&&i[n]===p[n];n++);var T=l-n;for(d=1;d<=T&&i[l-d]===p[v-d];d++);return Ta=p.slice(n,1<d?1-d:void 0)}function wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function yf(){return!1}function zn(n){function i(l,d,p,v,T){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Aa:yf,this.isPropagationStopped=yf,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=zn(ps),To=W({},ps,{view:0,detail:0}),b_=zn(To),xc,yc,wo,Ra=W({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(xc=n.screenX-wo.screenX,yc=n.screenY-wo.screenY):yc=xc=0,wo=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),Sf=zn(Ra),C_=W({},Ra,{dataTransfer:0}),L_=zn(C_),P_=W({},To,{relatedTarget:0}),Sc=zn(P_),N_=W({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=zn(N_),D_=W({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U_=zn(D_),F_=W({},ps,{data:0}),Mf=zn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B_[n])?!!i[n]:!1}function Mc(){return z_}var H_=W({},To,{key:function(n){if(n.key){var i=O_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?k_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),V_=zn(H_),G_=W({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=zn(G_),W_=W({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),X_=zn(W_),j_=W({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=zn(j_),Y_=W({},Ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=zn(Y_),$_=[9,13,27,32],Ec=u&&"CompositionEvent"in window,Ao=null;u&&"documentMode"in document&&(Ao=document.documentMode);var Z_=u&&"TextEvent"in window&&!Ao,Tf=u&&(!Ec||Ao&&8<Ao&&11>=Ao),wf=" ",Af=!1;function Rf(n,i){switch(n){case"keyup":return $_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Q_(n,i){switch(n){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Af=!0,wf);case"textInput":return n=i.data,n===wf&&Af?null:n;default:return null}}function J_(n,i){if(ms)return n==="compositionend"||!Ec&&Rf(n,i)?(n=xf(),Ta=_c=rr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tf&&i.locale!=="ko"?null:i.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ev[n.type]:i==="textarea"}function Lf(n,i,l,d){$e(d),i=Na(i,"onChange"),0<i.length&&(l=new vc("onChange","change",null,l,d),n.push({event:l,listeners:i}))}var Ro=null,bo=null;function tv(n){Yf(n,0)}function ba(n){var i=ys(n);if(te(i))return n}function nv(n,i){if(n==="change")return i}var Pf=!1;if(u){var Tc;if(u){var wc="oninput"in document;if(!wc){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),wc=typeof Nf.oninput=="function"}Tc=wc}else Tc=!1;Pf=Tc&&(!document.documentMode||9<document.documentMode)}function If(){Ro&&(Ro.detachEvent("onpropertychange",Df),bo=Ro=null)}function Df(n){if(n.propertyName==="value"&&ba(bo)){var i=[];Lf(i,bo,n,ot(n)),on(tv,i)}}function iv(n,i,l){n==="focusin"?(If(),Ro=i,bo=l,Ro.attachEvent("onpropertychange",Df)):n==="focusout"&&If()}function rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ba(bo)}function sv(n,i){if(n==="click")return ba(i)}function ov(n,i){if(n==="input"||n==="change")return ba(i)}function av(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:av;function Co(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var l=Object.keys(n),d=Object.keys(i);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(i,p)||!oi(n[p],i[p]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ff(n,i){var l=Uf(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=i&&d>=i)return{node:l,offset:i-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Uf(l)}}function Of(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Of(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kf(){for(var n=window,i=Yt();i instanceof n.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)n=i.contentWindow;else break;i=Yt(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lv(n){var i=kf(),l=n.focusedElem,d=n.selectionRange;if(i!==l&&l&&l.ownerDocument&&Of(l.ownerDocument.documentElement,l)){if(d!==null&&Ac(l)){if(i=d.start,n=d.end,n===void 0&&(n=i),"selectionStart"in l)l.selectionStart=i,l.selectionEnd=Math.min(n,l.value.length);else if(n=(i=l.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(d.start,p);d=d.end===void 0?v:Math.min(d.end,p),!n.extend&&v>d&&(p=d,d=v,v=p),p=Ff(l,v);var T=Ff(l,d);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>d?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=l;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<i.length;l++)n=i[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cv=u&&"documentMode"in document&&11>=document.documentMode,gs=null,Rc=null,Lo=null,bc=!1;function Bf(n,i,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;bc||gs==null||gs!==Yt(d)||(d=gs,"selectionStart"in d&&Ac(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Lo&&Co(Lo,d)||(Lo=d,d=Na(Rc,"onSelect"),0<d.length&&(i=new vc("onSelect","select",null,i,l),n.push({event:i,listeners:d}),i.target=gs)))}function Ca(n,i){var l={};return l[n.toLowerCase()]=i.toLowerCase(),l["Webkit"+n]="webkit"+i,l["Moz"+n]="moz"+i,l}var _s={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Cc={},zf={};u&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function La(n){if(Cc[n])return Cc[n];if(!_s[n])return n;var i=_s[n],l;for(l in i)if(i.hasOwnProperty(l)&&l in zf)return Cc[n]=i[l];return n}var Hf=La("animationend"),Vf=La("animationiteration"),Gf=La("animationstart"),Wf=La("transitionend"),Xf=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(n,i){Xf.set(n,i),a(i,[n])}for(var Lc=0;Lc<jf.length;Lc++){var Pc=jf[Lc],uv=Pc.toLowerCase(),dv=Pc[0].toUpperCase()+Pc.slice(1);sr(uv,"on"+dv)}sr(Hf,"onAnimationEnd"),sr(Vf,"onAnimationIteration"),sr(Gf,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Wf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function qf(n,i,l){var d=n.type||"unknown-event";n.currentTarget=l,dc(d,i,void 0,n),n.currentTarget=null}function Yf(n,i){i=(i&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var v=void 0;if(i)for(var T=d.length-1;0<=T;T--){var D=d[T],O=D.instance,J=D.currentTarget;if(D=D.listener,O!==v&&p.isPropagationStopped())break e;qf(p,D,J),v=O}else for(T=0;T<d.length;T++){if(D=d[T],O=D.instance,J=D.currentTarget,D=D.listener,O!==v&&p.isPropagationStopped())break e;qf(p,D,J),v=O}}}if(Ir)throw n=Qi,Ir=!1,Qi=null,n}function Dt(n,i){var l=i[Bc];l===void 0&&(l=i[Bc]=new Set);var d=n+"__bubble";l.has(d)||(Kf(i,n,2,!1),l.add(d))}function Nc(n,i,l){var d=0;i&&(d|=4),Kf(l,n,d,i)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[Pa]){n[Pa]=!0,r.forEach(function(l){l!=="selectionchange"&&(fv.has(l)||Nc(l,!1,n),Nc(l,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pa]||(i[Pa]=!0,Nc("selectionchange",!1,i))}}function Kf(n,i,l,d){switch(vf(i)){case 1:var p=A_;break;case 4:p=R_;break;default:p=mc}l=p.bind(null,i,l,n),p=void 0,!Qt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(i,l,{capture:!0,passive:p}):n.addEventListener(i,l,!0):p!==void 0?n.addEventListener(i,l,{passive:p}):n.addEventListener(i,l,!1)}function Ic(n,i,l,d,p){var v=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var D=d.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=d.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;T=T.return}for(;D!==null;){if(T=Ur(D),T===null)return;if(O=T.tag,O===5||O===6){d=v=T;continue e}D=D.parentNode}}d=d.return}on(function(){var J=v,he=ot(l),ge=[];e:{var de=Xf.get(n);if(de!==void 0){var Le=vc,Ue=n;switch(n){case"keypress":if(wa(l)===0)break e;case"keydown":case"keyup":Le=V_;break;case"focusin":Ue="focus",Le=Sc;break;case"focusout":Ue="blur",Le=Sc;break;case"beforeblur":case"afterblur":Le=Sc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=X_;break;case Hf:case Vf:case Gf:Le=I_;break;case Wf:Le=q_;break;case"scroll":Le=b_;break;case"wheel":Le=K_;break;case"copy":case"cut":case"paste":Le=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Ef}var Oe=(i&4)!==0,qt=!Oe&&n==="scroll",q=Oe?de!==null?de+"Capture":null:de;Oe=[];for(var B=J,K;B!==null;){K=B;var ye=K.stateNode;if(K.tag===5&&ye!==null&&(K=ye,q!==null&&(ye=St(B,q),ye!=null&&Oe.push(Io(B,ye,K)))),qt)break;B=B.return}0<Oe.length&&(de=new Le(de,Ue,null,l,he),ge.push({event:de,listeners:Oe}))}}if((i&7)===0){e:{if(de=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",de&&l!==Pt&&(Ue=l.relatedTarget||l.fromElement)&&(Ur(Ue)||Ue[Pi]))break e;if((Le||de)&&(de=he.window===he?he:(de=he.ownerDocument)?de.defaultView||de.parentWindow:window,Le?(Ue=l.relatedTarget||l.toElement,Le=J,Ue=Ue?Ur(Ue):null,Ue!==null&&(qt=Ci(Ue),Ue!==qt||Ue.tag!==5&&Ue.tag!==6)&&(Ue=null)):(Le=null,Ue=J),Le!==Ue)){if(Oe=Sf,ye="onMouseLeave",q="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(Oe=Ef,ye="onPointerLeave",q="onPointerEnter",B="pointer"),qt=Le==null?de:ys(Le),K=Ue==null?de:ys(Ue),de=new Oe(ye,B+"leave",Le,l,he),de.target=qt,de.relatedTarget=K,ye=null,Ur(he)===J&&(Oe=new Oe(q,B+"enter",Ue,l,he),Oe.target=K,Oe.relatedTarget=qt,ye=Oe),qt=ye,Le&&Ue)t:{for(Oe=Le,q=Ue,B=0,K=Oe;K;K=vs(K))B++;for(K=0,ye=q;ye;ye=vs(ye))K++;for(;0<B-K;)Oe=vs(Oe),B--;for(;0<K-B;)q=vs(q),K--;for(;B--;){if(Oe===q||q!==null&&Oe===q.alternate)break t;Oe=vs(Oe),q=vs(q)}Oe=null}else Oe=null;Le!==null&&$f(ge,de,Le,Oe,!1),Ue!==null&&qt!==null&&$f(ge,qt,Ue,Oe,!0)}}e:{if(de=J?ys(J):window,Le=de.nodeName&&de.nodeName.toLowerCase(),Le==="select"||Le==="input"&&de.type==="file")var Be=nv;else if(Cf(de))if(Pf)Be=ov;else{Be=rv;var qe=iv}else(Le=de.nodeName)&&Le.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(Be=sv);if(Be&&(Be=Be(n,J))){Lf(ge,Be,l,he);break e}qe&&qe(n,de,J),n==="focusout"&&(qe=de._wrapperState)&&qe.controlled&&de.type==="number"&&L(de,"number",de.value)}switch(qe=J?ys(J):window,n){case"focusin":(Cf(qe)||qe.contentEditable==="true")&&(gs=qe,Rc=J,Lo=null);break;case"focusout":Lo=Rc=gs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Bf(ge,l,he);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Bf(ge,l,he)}var Ye;if(Ec)e:{switch(n){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else ms?Rf(n,l)&&(Ze="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Ze="onCompositionStart");Ze&&(Tf&&l.locale!=="ko"&&(ms||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&ms&&(Ye=xf()):(rr=he,_c="value"in rr?rr.value:rr.textContent,ms=!0)),qe=Na(J,Ze),0<qe.length&&(Ze=new Mf(Ze,n,null,l,he),ge.push({event:Ze,listeners:qe}),Ye?Ze.data=Ye:(Ye=bf(l),Ye!==null&&(Ze.data=Ye)))),(Ye=Z_?Q_(n,l):J_(n,l))&&(J=Na(J,"onBeforeInput"),0<J.length&&(he=new Mf("onBeforeInput","beforeinput",null,l,he),ge.push({event:he,listeners:J}),he.data=Ye))}Yf(ge,i)})}function Io(n,i,l){return{instance:n,listener:i,currentTarget:l}}function Na(n,i){for(var l=i+"Capture",d=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=St(n,l),v!=null&&d.unshift(Io(n,v,p)),v=St(n,i),v!=null&&d.push(Io(n,v,p))),n=n.return}return d}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,i,l,d,p){for(var v=i._reactName,T=[];l!==null&&l!==d;){var D=l,O=D.alternate,J=D.stateNode;if(O!==null&&O===d)break;D.tag===5&&J!==null&&(D=J,p?(O=St(l,v),O!=null&&T.unshift(Io(l,O,D))):p||(O=St(l,v),O!=null&&T.push(Io(l,O,D)))),l=l.return}T.length!==0&&n.push({event:i,listeners:T})}var hv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(hv,`
`).replace(pv,"")}function Ia(n,i,l){if(i=Zf(i),Zf(n)!==i&&l)throw Error(t(425))}function Da(){}var Dc=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(n){return Qf.resolve(null).then(n).catch(_v)}:Oc;function _v(n){setTimeout(function(){throw n})}function kc(n,i){var l=i,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),Eo(i);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Eo(i)}function or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return n;i--}else l==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),vi="__reactFiber$"+xs,Do="__reactProps$"+xs,Pi="__reactContainer$"+xs,Bc="__reactEvents$"+xs,vv="__reactListeners$"+xs,xv="__reactHandles$"+xs;function Ur(n){var i=n[vi];if(i)return i;for(var l=n.parentNode;l;){if(i=l[Pi]||l[vi]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(n=Jf(n);n!==null;){if(l=n[vi])return l;n=Jf(n)}return i}n=l,l=n.parentNode}return null}function Uo(n){return n=n[vi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[Do]||null}var zc=[],Ss=-1;function ar(n){return{current:n}}function Ut(n){0>Ss||(n.current=zc[Ss],zc[Ss]=null,Ss--)}function It(n,i){Ss++,zc[Ss]=n.current,n.current=i}var lr={},gn=ar(lr),Nn=ar(!1),Fr=lr;function Ms(n,i){var l=n.type.contextTypes;if(!l)return lr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=i[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function In(n){return n=n.childContextTypes,n!=null}function Fa(){Ut(Nn),Ut(gn)}function eh(n,i,l){if(gn.current!==lr)throw Error(t(168));It(gn,i),It(Nn,l)}function th(n,i,l){var d=n.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in i))throw Error(t(108,Ee(n)||"Unknown",p));return W({},l,d)}function Oa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Fr=gn.current,It(gn,n),It(Nn,Nn.current),!0}function nh(n,i,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=th(n,i,Fr),d.__reactInternalMemoizedMergedChildContext=n,Ut(Nn),Ut(gn),It(gn,n)):Ut(Nn),It(Nn,l)}var Ni=null,ka=!1,Hc=!1;function ih(n){Ni===null?Ni=[n]:Ni.push(n)}function yv(n){ka=!0,ih(n)}function cr(){if(!Hc&&Ni!==null){Hc=!0;var n=0,i=At;try{var l=Ni;for(At=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Ni=null,ka=!1}catch(p){throw Ni!==null&&(Ni=Ni.slice(n+1)),ne(Je,cr),p}finally{At=i,Hc=!1}}return null}var Es=[],Ts=0,Ba=null,za=0,qn=[],Yn=0,Or=null,Ii=1,Di="";function kr(n,i){Es[Ts++]=za,Es[Ts++]=Ba,Ba=n,za=i}function rh(n,i,l){qn[Yn++]=Ii,qn[Yn++]=Di,qn[Yn++]=Or,Or=n;var d=Ii;n=Di;var p=32-Tn(d)-1;d&=~(1<<p),l+=1;var v=32-Tn(i)+p;if(30<v){var T=p-p%5;v=(d&(1<<T)-1).toString(32),d>>=T,p-=T,Ii=1<<32-Tn(i)+p|l<<p|d,Di=v+n}else Ii=1<<v|l<<p|d,Di=n}function Vc(n){n.return!==null&&(kr(n,1),rh(n,1,0))}function Gc(n){for(;n===Ba;)Ba=Es[--Ts],Es[Ts]=null,za=Es[--Ts],Es[Ts]=null;for(;n===Or;)Or=qn[--Yn],qn[Yn]=null,Di=qn[--Yn],qn[Yn]=null,Ii=qn[--Yn],qn[Yn]=null}var Hn=null,Vn=null,kt=!1,ai=null;function sh(n,i){var l=Qn(5,null,null,0);l.elementType="DELETED",l.stateNode=i,l.return=n,i=n.deletions,i===null?(n.deletions=[l],n.flags|=16):i.push(l)}function oh(n,i){switch(n.tag){case 5:var l=n.type;return i=i.nodeType!==1||l.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(l=Or!==null?{id:Ii,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:l,retryLane:1073741824},l=Qn(18,null,null,0),l.stateNode=i,l.return=n,n.child=l,Hn=n,Vn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(kt){var i=Vn;if(i){var l=i;if(!oh(n,i)){if(Wc(n))throw Error(t(418));i=or(l.nextSibling);var d=Hn;i&&oh(n,i)?sh(d,l):(n.flags=n.flags&-4097|2,kt=!1,Hn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Hn=n}}}function ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ha(n){if(n!==Hn)return!1;if(!kt)return ah(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Wc(n))throw lh(),Error(t(418));for(;i;)sh(n,i),i=or(i.nextSibling)}if(ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(i===0){Vn=or(n.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?or(n.stateNode.nextSibling):null;return!0}function lh(){for(var n=Vn;n;)n=or(n.nextSibling)}function ws(){Vn=Hn=null,kt=!1}function jc(n){ai===null?ai=[n]:ai.push(n)}var Sv=C.ReactCurrentBatchConfig;function Fo(n,i,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Va(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ch(n){var i=n._init;return i(n._payload)}function uh(n){function i(q,B){if(n){var K=q.deletions;K===null?(q.deletions=[B],q.flags|=16):K.push(B)}}function l(q,B){if(!n)return null;for(;B!==null;)i(q,B),B=B.sibling;return null}function d(q,B){for(q=new Map;B!==null;)B.key!==null?q.set(B.key,B):q.set(B.index,B),B=B.sibling;return q}function p(q,B){return q=_r(q,B),q.index=0,q.sibling=null,q}function v(q,B,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<B?(q.flags|=2,B):K):(q.flags|=2,B)):(q.flags|=1048576,B)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,B,K,ye){return B===null||B.tag!==6?(B=Ou(K,q.mode,ye),B.return=q,B):(B=p(B,K),B.return=q,B)}function O(q,B,K,ye){var Be=K.type;return Be===U?he(q,B,K.props.children,ye,K.key):B!==null&&(B.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===se&&ch(Be)===B.type)?(ye=p(B,K.props),ye.ref=Fo(q,B,K),ye.return=q,ye):(ye=fl(K.type,K.key,K.props,null,q.mode,ye),ye.ref=Fo(q,B,K),ye.return=q,ye)}function J(q,B,K,ye){return B===null||B.tag!==4||B.stateNode.containerInfo!==K.containerInfo||B.stateNode.implementation!==K.implementation?(B=ku(K,q.mode,ye),B.return=q,B):(B=p(B,K.children||[]),B.return=q,B)}function he(q,B,K,ye,Be){return B===null||B.tag!==7?(B=jr(K,q.mode,ye,Be),B.return=q,B):(B=p(B,K),B.return=q,B)}function ge(q,B,K){if(typeof B=="string"&&B!==""||typeof B=="number")return B=Ou(""+B,q.mode,K),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case z:return K=fl(B.type,B.key,B.props,null,q.mode,K),K.ref=Fo(q,null,B),K.return=q,K;case F:return B=ku(B,q.mode,K),B.return=q,B;case se:var ye=B._init;return ge(q,ye(B._payload),K)}if(w(B)||$(B))return B=jr(B,q.mode,K,null),B.return=q,B;Va(q,B)}return null}function de(q,B,K,ye){var Be=B!==null?B.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Be!==null?null:D(q,B,""+K,ye);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case z:return K.key===Be?O(q,B,K,ye):null;case F:return K.key===Be?J(q,B,K,ye):null;case se:return Be=K._init,de(q,B,Be(K._payload),ye)}if(w(K)||$(K))return Be!==null?null:he(q,B,K,ye,null);Va(q,K)}return null}function Le(q,B,K,ye,Be){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return q=q.get(K)||null,D(B,q,""+ye,Be);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case z:return q=q.get(ye.key===null?K:ye.key)||null,O(B,q,ye,Be);case F:return q=q.get(ye.key===null?K:ye.key)||null,J(B,q,ye,Be);case se:var qe=ye._init;return Le(q,B,K,qe(ye._payload),Be)}if(w(ye)||$(ye))return q=q.get(K)||null,he(B,q,ye,Be,null);Va(B,ye)}return null}function Ue(q,B,K,ye){for(var Be=null,qe=null,Ye=B,Ze=B=0,cn=null;Ye!==null&&Ze<K.length;Ze++){Ye.index>Ze?(cn=Ye,Ye=null):cn=Ye.sibling;var Mt=de(q,Ye,K[Ze],ye);if(Mt===null){Ye===null&&(Ye=cn);break}n&&Ye&&Mt.alternate===null&&i(q,Ye),B=v(Mt,B,Ze),qe===null?Be=Mt:qe.sibling=Mt,qe=Mt,Ye=cn}if(Ze===K.length)return l(q,Ye),kt&&kr(q,Ze),Be;if(Ye===null){for(;Ze<K.length;Ze++)Ye=ge(q,K[Ze],ye),Ye!==null&&(B=v(Ye,B,Ze),qe===null?Be=Ye:qe.sibling=Ye,qe=Ye);return kt&&kr(q,Ze),Be}for(Ye=d(q,Ye);Ze<K.length;Ze++)cn=Le(Ye,q,Ze,K[Ze],ye),cn!==null&&(n&&cn.alternate!==null&&Ye.delete(cn.key===null?Ze:cn.key),B=v(cn,B,Ze),qe===null?Be=cn:qe.sibling=cn,qe=cn);return n&&Ye.forEach(function(vr){return i(q,vr)}),kt&&kr(q,Ze),Be}function Oe(q,B,K,ye){var Be=$(K);if(typeof Be!="function")throw Error(t(150));if(K=Be.call(K),K==null)throw Error(t(151));for(var qe=Be=null,Ye=B,Ze=B=0,cn=null,Mt=K.next();Ye!==null&&!Mt.done;Ze++,Mt=K.next()){Ye.index>Ze?(cn=Ye,Ye=null):cn=Ye.sibling;var vr=de(q,Ye,Mt.value,ye);if(vr===null){Ye===null&&(Ye=cn);break}n&&Ye&&vr.alternate===null&&i(q,Ye),B=v(vr,B,Ze),qe===null?Be=vr:qe.sibling=vr,qe=vr,Ye=cn}if(Mt.done)return l(q,Ye),kt&&kr(q,Ze),Be;if(Ye===null){for(;!Mt.done;Ze++,Mt=K.next())Mt=ge(q,Mt.value,ye),Mt!==null&&(B=v(Mt,B,Ze),qe===null?Be=Mt:qe.sibling=Mt,qe=Mt);return kt&&kr(q,Ze),Be}for(Ye=d(q,Ye);!Mt.done;Ze++,Mt=K.next())Mt=Le(Ye,q,Ze,Mt.value,ye),Mt!==null&&(n&&Mt.alternate!==null&&Ye.delete(Mt.key===null?Ze:Mt.key),B=v(Mt,B,Ze),qe===null?Be=Mt:qe.sibling=Mt,qe=Mt);return n&&Ye.forEach(function(e0){return i(q,e0)}),kt&&kr(q,Ze),Be}function qt(q,B,K,ye){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case z:e:{for(var Be=K.key,qe=B;qe!==null;){if(qe.key===Be){if(Be=K.type,Be===U){if(qe.tag===7){l(q,qe.sibling),B=p(qe,K.props.children),B.return=q,q=B;break e}}else if(qe.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===se&&ch(Be)===qe.type){l(q,qe.sibling),B=p(qe,K.props),B.ref=Fo(q,qe,K),B.return=q,q=B;break e}l(q,qe);break}else i(q,qe);qe=qe.sibling}K.type===U?(B=jr(K.props.children,q.mode,ye,K.key),B.return=q,q=B):(ye=fl(K.type,K.key,K.props,null,q.mode,ye),ye.ref=Fo(q,B,K),ye.return=q,q=ye)}return T(q);case F:e:{for(qe=K.key;B!==null;){if(B.key===qe)if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){l(q,B.sibling),B=p(B,K.children||[]),B.return=q,q=B;break e}else{l(q,B);break}else i(q,B);B=B.sibling}B=ku(K,q.mode,ye),B.return=q,q=B}return T(q);case se:return qe=K._init,qt(q,B,qe(K._payload),ye)}if(w(K))return Ue(q,B,K,ye);if($(K))return Oe(q,B,K,ye);Va(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,B!==null&&B.tag===6?(l(q,B.sibling),B=p(B,K),B.return=q,q=B):(l(q,B),B=Ou(K,q.mode,ye),B.return=q,q=B),T(q)):l(q,B)}return qt}var As=uh(!0),dh=uh(!1),Ga=ar(null),Wa=null,Rs=null,qc=null;function Yc(){qc=Rs=Wa=null}function Kc(n){var i=Ga.current;Ut(Ga),n._currentValue=i}function $c(n,i,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),n===l)break;n=n.return}}function bs(n,i){Wa=n,qc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(Wa===null)throw Error(t(308));Rs=n,Wa.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Br=null;function Zc(n){Br===null?Br=[n]:Br.push(n)}function fh(n,i,l,d){var p=i.interleaved;return p===null?(l.next=l,Zc(i)):(l.next=p.next,p.next=l),i.interleaved=l,Ui(n,d)}function Ui(n,i){n.lanes|=i;var l=n.alternate;for(l!==null&&(l.lanes|=i),l=n,n=n.return;n!==null;)n.childLanes|=i,l=n.alternate,l!==null&&(l.childLanes|=i),l=n,n=n.return;return l.tag===3?l.stateNode:null}var ur=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(n,i,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(yt&2)!==0){var p=d.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),d.pending=i,Ui(n,l)}return p=d.interleaved,p===null?(i.next=i,Zc(d)):(i.next=p.next,p.next=i),d.interleaved=i,Ui(n,l)}function Xa(n,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194240)!==0)){var d=i.lanes;d&=n.pendingLanes,l|=d,i.lanes=l,fc(n,l)}}function ph(n,i){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=i:v=v.next=i}else p=v=i;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=i:n.next=i,l.lastBaseUpdate=i}function ja(n,i,l,d){var p=n.updateQueue;ur=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var O=D,J=O.next;O.next=null,T===null?v=J:T.next=J,T=O;var he=n.alternate;he!==null&&(he=he.updateQueue,D=he.lastBaseUpdate,D!==T&&(D===null?he.firstBaseUpdate=J:D.next=J,he.lastBaseUpdate=O))}if(v!==null){var ge=p.baseState;T=0,he=J=O=null,D=v;do{var de=D.lane,Le=D.eventTime;if((d&de)===de){he!==null&&(he=he.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ue=n,Oe=D;switch(de=i,Le=l,Oe.tag){case 1:if(Ue=Oe.payload,typeof Ue=="function"){ge=Ue.call(Le,ge,de);break e}ge=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=Oe.payload,de=typeof Ue=="function"?Ue.call(Le,ge,de):Ue,de==null)break e;ge=W({},ge,de);break e;case 2:ur=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,de=p.effects,de===null?p.effects=[D]:de.push(D))}else Le={eventTime:Le,lane:de,tag:D.tag,payload:D.payload,callback:D.callback,next:null},he===null?(J=he=Le,O=ge):he=he.next=Le,T|=de;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;de=D,D=de.next,de.next=null,p.lastBaseUpdate=de,p.shared.pending=null}}while(!0);if(he===null&&(O=ge),p.baseState=O,p.firstBaseUpdate=J,p.lastBaseUpdate=he,i=p.shared.interleaved,i!==null){p=i;do T|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);Vr|=T,n.lanes=T,n.memoizedState=ge}}function mh(n,i,l){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var d=n[i],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Oo={},xi=ar(Oo),ko=ar(Oo),Bo=ar(Oo);function zr(n){if(n===Oo)throw Error(t(174));return n}function Jc(n,i){switch(It(Bo,i),It(ko,n),It(xi,Oo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:De(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=De(i,n)}Ut(xi),It(xi,i)}function Cs(){Ut(xi),Ut(ko),Ut(Bo)}function gh(n){zr(Bo.current);var i=zr(xi.current),l=De(i,n.type);i!==l&&(It(ko,n),It(xi,l))}function eu(n){ko.current===n&&(Ut(xi),Ut(ko))}var zt=ar(0);function qa(n){for(var i=n;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Ya=C.ReactCurrentDispatcher,iu=C.ReactCurrentBatchConfig,Hr=0,Ht=null,Jt=null,an=null,Ka=!1,zo=!1,Ho=0,Mv=0;function _n(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var l=0;l<i.length&&l<n.length;l++)if(!oi(n[l],i[l]))return!1;return!0}function su(n,i,l,d,p,v){if(Hr=v,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?Av:Rv,n=l(d,p),zo){v=0;do{if(zo=!1,Ho=0,25<=v)throw Error(t(301));v+=1,an=Jt=null,i.updateQueue=null,Ya.current=bv,n=l(d,p)}while(zo)}if(Ya.current=Qa,i=Jt!==null&&Jt.next!==null,Hr=0,an=Jt=Ht=null,Ka=!1,i)throw Error(t(300));return n}function ou(){var n=Ho!==0;return Ho=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Ht.memoizedState=an=n:an=an.next=n,an}function $n(){if(Jt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=an===null?Ht.memoizedState:an.next;if(i!==null)an=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},an===null?Ht.memoizedState=an=n:an=an.next=n}return an}function Vo(n,i){return typeof i=="function"?i(n):i}function au(n){var i=$n(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=Jt,p=d.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}d.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,d=d.baseState;var D=T=null,O=null,J=v;do{var he=J.lane;if((Hr&he)===he)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),d=J.hasEagerState?J.eagerState:n(d,J.action);else{var ge={lane:he,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(D=O=ge,T=d):O=O.next=ge,Ht.lanes|=he,Vr|=he}J=J.next}while(J!==null&&J!==v);O===null?T=d:O.next=D,oi(d,i.memoizedState)||(Dn=!0),i.memoizedState=d,i.baseState=T,i.baseQueue=O,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Ht.lanes|=v,Vr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[i.memoizedState,l.dispatch]}function lu(n){var i=$n(),l=i.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,v=i.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);oi(v,i.memoizedState)||(Dn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),l.lastRenderedState=v}return[v,d]}function _h(){}function vh(n,i){var l=Ht,d=$n(),p=i(),v=!oi(d.memoizedState,p);if(v&&(d.memoizedState=p,Dn=!0),d=d.queue,cu(Sh.bind(null,l,d,n),[n]),d.getSnapshot!==i||v||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Go(9,yh.bind(null,l,d,p,i),void 0,null),ln===null)throw Error(t(349));(Hr&30)!==0||xh(l,i,p)}return p}function xh(n,i,l){n.flags|=16384,n={getSnapshot:i,value:l},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(l=i.stores,l===null?i.stores=[n]:l.push(n))}function yh(n,i,l,d){i.value=l,i.getSnapshot=d,Mh(i)&&Eh(n)}function Sh(n,i,l){return l(function(){Mh(i)&&Eh(n)})}function Mh(n){var i=n.getSnapshot;n=n.value;try{var l=i();return!oi(n,l)}catch{return!0}}function Eh(n){var i=Ui(n,1);i!==null&&di(i,n,1,-1)}function Th(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},i.queue=n,n=n.dispatch=wv.bind(null,Ht,n),[i.memoizedState,n]}function Go(n,i,l,d){return n={tag:n,create:i,destroy:l,deps:d,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(l=i.lastEffect,l===null?i.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,i.lastEffect=n)),n}function wh(){return $n().memoizedState}function $a(n,i,l,d){var p=yi();Ht.flags|=n,p.memoizedState=Go(1|i,l,void 0,d===void 0?null:d)}function Za(n,i,l,d){var p=$n();d=d===void 0?null:d;var v=void 0;if(Jt!==null){var T=Jt.memoizedState;if(v=T.destroy,d!==null&&ru(d,T.deps)){p.memoizedState=Go(i,l,v,d);return}}Ht.flags|=n,p.memoizedState=Go(1|i,l,v,d)}function Ah(n,i){return $a(8390656,8,n,i)}function cu(n,i){return Za(2048,8,n,i)}function Rh(n,i){return Za(4,2,n,i)}function bh(n,i){return Za(4,4,n,i)}function Ch(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lh(n,i,l){return l=l!=null?l.concat([n]):null,Za(4,4,Ch.bind(null,i,n),l)}function uu(){}function Ph(n,i){var l=$n();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&ru(i,d[1])?d[0]:(l.memoizedState=[n,i],n)}function Nh(n,i){var l=$n();i=i===void 0?null:i;var d=l.memoizedState;return d!==null&&i!==null&&ru(i,d[1])?d[0]:(n=n(),l.memoizedState=[n,i],n)}function Ih(n,i,l){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=l):(oi(l,i)||(l=xa(),Ht.lanes|=l,Vr|=l,n.baseState=!0),i)}function Ev(n,i){var l=At;At=l!==0&&4>l?l:4,n(!0);var d=iu.transition;iu.transition={};try{n(!1),i()}finally{At=l,iu.transition=d}}function Dh(){return $n().memoizedState}function Tv(n,i,l){var d=mr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Uh(n))Fh(i,l);else if(l=fh(n,i,l,d),l!==null){var p=An();di(l,n,d,p),Oh(l,i,d)}}function wv(n,i,l){var d=mr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Uh(n))Fh(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var T=i.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,oi(D,T)){var O=i.interleaved;O===null?(p.next=p,Zc(i)):(p.next=O.next,O.next=p),i.interleaved=p;return}}catch{}finally{}l=fh(n,i,p,d),l!==null&&(p=An(),di(l,n,d,p),Oh(l,i,d))}}function Uh(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Fh(n,i){zo=Ka=!0;var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}function Oh(n,i,l){if((l&4194240)!==0){var d=i.lanes;d&=n.pendingLanes,l|=d,i.lanes=l,fc(n,l)}}var Qa={readContext:Kn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Av={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Ah,useImperativeHandle:function(n,i,l){return l=l!=null?l.concat([n]):null,$a(4194308,4,Ch.bind(null,i,n),l)},useLayoutEffect:function(n,i){return $a(4194308,4,n,i)},useInsertionEffect:function(n,i){return $a(4,2,n,i)},useMemo:function(n,i){var l=yi();return i=i===void 0?null:i,n=n(),l.memoizedState=[n,i],n},useReducer:function(n,i,l){var d=yi();return i=l!==void 0?l(i):i,d.memoizedState=d.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},d.queue=n,n=n.dispatch=Tv.bind(null,Ht,n),[d.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Th,useDebugValue:uu,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Th(!1),i=n[0];return n=Ev.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,l){var d=Ht,p=yi();if(kt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=i(),ln===null)throw Error(t(349));(Hr&30)!==0||xh(d,i,l)}p.memoizedState=l;var v={value:l,getSnapshot:i};return p.queue=v,Ah(Sh.bind(null,d,v,n),[n]),d.flags|=2048,Go(9,yh.bind(null,d,v,l,i),void 0,null),l},useId:function(){var n=yi(),i=ln.identifierPrefix;if(kt){var l=Di,d=Ii;l=(d&~(1<<32-Tn(d)-1)).toString(32)+l,i=":"+i+"R"+l,l=Ho++,0<l&&(i+="H"+l.toString(32)),i+=":"}else l=Mv++,i=":"+i+"r"+l.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Kn,useCallback:Ph,useContext:Kn,useEffect:cu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:bh,useMemo:Nh,useReducer:au,useRef:wh,useState:function(){return au(Vo)},useDebugValue:uu,useDeferredValue:function(n){var i=$n();return Ih(i,Jt.memoizedState,n)},useTransition:function(){var n=au(Vo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Dh,unstable_isNewReconciler:!1},bv={readContext:Kn,useCallback:Ph,useContext:Kn,useEffect:cu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:bh,useMemo:Nh,useReducer:lu,useRef:wh,useState:function(){return lu(Vo)},useDebugValue:uu,useDeferredValue:function(n){var i=$n();return Jt===null?i.memoizedState=n:Ih(i,Jt.memoizedState,n)},useTransition:function(){var n=lu(Vo)[0],i=$n().memoizedState;return[n,i]},useMutableSource:_h,useSyncExternalStore:vh,useId:Dh,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var l in n)i[l]===void 0&&(i[l]=n[l]);return i}return i}function du(n,i,l,d){i=n.memoizedState,l=l(d,i),l=l==null?i:W({},i,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ja={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,i,l){n=n._reactInternals;var d=An(),p=mr(n),v=Fi(d,p);v.payload=i,l!=null&&(v.callback=l),i=dr(n,v,p),i!==null&&(di(i,n,p,d),Xa(i,n,p))},enqueueReplaceState:function(n,i,l){n=n._reactInternals;var d=An(),p=mr(n),v=Fi(d,p);v.tag=1,v.payload=i,l!=null&&(v.callback=l),i=dr(n,v,p),i!==null&&(di(i,n,p,d),Xa(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var l=An(),d=mr(n),p=Fi(l,d);p.tag=2,i!=null&&(p.callback=i),i=dr(n,p,d),i!==null&&(di(i,n,d,l),Xa(i,n,d))}};function kh(n,i,l,d,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,T):i.prototype&&i.prototype.isPureReactComponent?!Co(l,d)||!Co(p,v):!0}function Bh(n,i,l){var d=!1,p=lr,v=i.contextType;return typeof v=="object"&&v!==null?v=Kn(v):(p=In(i)?Fr:gn.current,d=i.contextTypes,v=(d=d!=null)?Ms(n,p):lr),i=new i(l,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ja,n.stateNode=i,i._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function zh(n,i,l,d){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,d),i.state!==n&&Ja.enqueueReplaceState(i,i.state,null)}function fu(n,i,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Qc(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=Kn(v):(v=In(i)?Fr:gn.current,p.context=Ms(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(du(n,i,v,l),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&Ja.enqueueReplaceState(p,p.state,null),ja(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var l="",d=i;do l+=fe(d),d=d.return;while(d);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function hu(n,i,l){return{value:n,source:null,stack:l??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(l){setTimeout(function(){throw l})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Hh(n,i,l){l=Fi(-1,l),l.tag=3,l.payload={element:null};var d=i.value;return l.callback=function(){ol||(ol=!0,Cu=d),pu(n,i)},l}function Vh(n,i,l){l=Fi(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=i.value;l.payload=function(){return d(p)},l.callback=function(){pu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){pu(n,i),typeof d!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),l}function Gh(n,i,l){var d=n.pingCache;if(d===null){d=n.pingCache=new Cv;var p=new Set;d.set(i,p)}else p=d.get(i),p===void 0&&(p=new Set,d.set(i,p));p.has(l)||(p.add(l),n=Gv.bind(null,n,i,l),i.then(n,n))}function Wh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Xh(n,i,l,d,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(i=Fi(-1,1),i.tag=2,dr(l,i,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Lv=C.ReactCurrentOwner,Dn=!1;function wn(n,i,l,d){i.child=n===null?dh(i,null,l,d):As(i,n.child,l,d)}function jh(n,i,l,d,p){l=l.render;var v=i.ref;return bs(i,p),d=su(n,i,l,d,v,p),l=ou(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Oi(n,i,p)):(kt&&l&&Vc(i),i.flags|=1,wn(n,i,d,p),i.child)}function qh(n,i,l,d,p){if(n===null){var v=l.type;return typeof v=="function"&&!Fu(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(i.tag=15,i.type=v,Yh(n,i,v,d,p)):(n=fl(l.type,null,d,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Co,l(T,d)&&n.ref===i.ref)return Oi(n,i,p)}return i.flags|=1,n=_r(v,d),n.ref=i.ref,n.return=i,i.child=n}function Yh(n,i,l,d,p){if(n!==null){var v=n.memoizedProps;if(Co(v,d)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=d=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Oi(n,i,p)}return mu(n,i,l,d,p)}function Kh(n,i,l){var d=i.pendingProps,p=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ns,Gn),Gn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ns,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:l,It(Ns,Gn),Gn|=d}else v!==null?(d=v.baseLanes|l,i.memoizedState=null):d=l,It(Ns,Gn),Gn|=d;return wn(n,i,p,l),i.child}function $h(n,i){var l=i.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,l,d,p){var v=In(l)?Fr:gn.current;return v=Ms(i,v),bs(i,p),l=su(n,i,l,d,v,p),d=ou(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,Oi(n,i,p)):(kt&&d&&Vc(i),i.flags|=1,wn(n,i,l,p),i.child)}function Zh(n,i,l,d,p){if(In(l)){var v=!0;Oa(i)}else v=!1;if(bs(i,p),i.stateNode===null)tl(n,i),Bh(i,l,d),fu(i,l,d,p),d=!0;else if(n===null){var T=i.stateNode,D=i.memoizedProps;T.props=D;var O=T.context,J=l.contextType;typeof J=="object"&&J!==null?J=Kn(J):(J=In(l)?Fr:gn.current,J=Ms(i,J));var he=l.getDerivedStateFromProps,ge=typeof he=="function"||typeof T.getSnapshotBeforeUpdate=="function";ge||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==d||O!==J)&&zh(i,T,d,J),ur=!1;var de=i.memoizedState;T.state=de,ja(i,d,T,p),O=i.memoizedState,D!==d||de!==O||Nn.current||ur?(typeof he=="function"&&(du(i,l,he,d),O=i.memoizedState),(D=ur||kh(i,l,D,d,de,O,J))?(ge||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=O),T.props=d,T.state=O,T.context=J,d=D):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{T=i.stateNode,hh(n,i),D=i.memoizedProps,J=i.type===i.elementType?D:li(i.type,D),T.props=J,ge=i.pendingProps,de=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=Kn(O):(O=In(l)?Fr:gn.current,O=Ms(i,O));var Le=l.getDerivedStateFromProps;(he=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==ge||de!==O)&&zh(i,T,d,O),ur=!1,de=i.memoizedState,T.state=de,ja(i,d,T,p);var Ue=i.memoizedState;D!==ge||de!==Ue||Nn.current||ur?(typeof Le=="function"&&(du(i,l,Le,d),Ue=i.memoizedState),(J=ur||kh(i,l,J,d,de,Ue,O)||!1)?(he||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,Ue,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,Ue,O)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=Ue),T.props=d,T.state=Ue,T.context=O,d=J):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),d=!1)}return gu(n,i,l,d,v,p)}function gu(n,i,l,d,p,v){$h(n,i);var T=(i.flags&128)!==0;if(!d&&!T)return p&&nh(i,l,!1),Oi(n,i,v);d=i.stateNode,Lv.current=i;var D=T&&typeof l.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,n!==null&&T?(i.child=As(i,n.child,null,v),i.child=As(i,null,D,v)):wn(n,i,D,v),i.memoizedState=d.state,p&&nh(i,l,!0),i.child}function Qh(n){var i=n.stateNode;i.pendingContext?eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&eh(n,i.context,!1),Jc(n,i.containerInfo)}function Jh(n,i,l,d,p){return ws(),jc(p),i.flags|=256,wn(n,i,l,d),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ep(n,i,l){var d=i.pendingProps,p=zt.current,v=!1,T=(i.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),It(zt,p&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=d.children,n=d.fallback,v?(d=i.mode,v=i.child,T={mode:"hidden",children:T},(d&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=hl(T,d,0,null),n=jr(n,d,l,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=vu(l),i.memoizedState=_u,n):xu(i,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return Pv(n,i,T,d,D,p,l);if(v){v=d.fallback,T=i.mode,p=n.child,D=p.sibling;var O={mode:"hidden",children:d.children};return(T&1)===0&&i.child!==p?(d=i.child,d.childLanes=0,d.pendingProps=O,i.deletions=null):(d=_r(p,O),d.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=_r(D,v):(v=jr(v,T,l,null),v.flags|=2),v.return=i,d.return=i,d.sibling=v,i.child=d,d=v,v=i.child,T=n.child.memoizedState,T=T===null?vu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,i.memoizedState=_u,d}return v=n.child,n=v.sibling,d=_r(v,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=l),d.return=i,d.sibling=null,n!==null&&(l=i.deletions,l===null?(i.deletions=[n],i.flags|=16):l.push(n)),i.child=d,i.memoizedState=null,d}function xu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,l,d){return d!==null&&jc(d),As(i,n.child,null,l),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Pv(n,i,l,d,p,v,T){if(l)return i.flags&256?(i.flags&=-257,d=hu(Error(t(422))),el(n,i,T,d)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=d.fallback,p=i.mode,d=hl({mode:"visible",children:d.children},p,0,null),v=jr(v,p,T,null),v.flags|=2,d.return=i,v.return=i,d.sibling=v,i.child=d,(i.mode&1)!==0&&As(i,n.child,null,T),i.child.memoizedState=vu(T),i.memoizedState=_u,v);if((i.mode&1)===0)return el(n,i,T,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var D=d.dgst;return d=D,v=Error(t(419)),d=hu(v,d,void 0),el(n,i,T,d)}if(D=(T&n.childLanes)!==0,Dn||D){if(d=ln,d!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Ui(n,p),di(d,n,p,-1))}return Uu(),d=hu(Error(t(421))),el(n,i,T,d)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Wv.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,Vn=or(p.nextSibling),Hn=i,kt=!0,ai=null,n!==null&&(qn[Yn++]=Ii,qn[Yn++]=Di,qn[Yn++]=Or,Ii=n.id,Di=n.overflow,Or=i),i=xu(i,d.children),i.flags|=4096,i)}function tp(n,i,l){n.lanes|=i;var d=n.alternate;d!==null&&(d.lanes|=i),$c(n.return,i,l)}function yu(n,i,l,d,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=l,v.tailMode=p)}function np(n,i,l){var d=i.pendingProps,p=d.revealOrder,v=d.tail;if(wn(n,i,d.children,l),d=zt.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tp(n,l,i);else if(n.tag===19)tp(n,l,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(It(zt,d),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(l=i.child,p=null;l!==null;)n=l.alternate,n!==null&&qa(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=i.child,i.child=null):(p=l.sibling,l.sibling=null),yu(i,!1,p,l,v);break;case"backwards":for(l=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&qa(n)===null){i.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}yu(i,!0,l,null,v);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,l){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(l&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,l=_r(n,n.pendingProps),i.child=l,l.return=i;n.sibling!==null;)n=n.sibling,l=l.sibling=_r(n,n.pendingProps),l.return=i;l.sibling=null}return i.child}function Nv(n,i,l){switch(i.tag){case 3:Qh(i),ws();break;case 5:gh(i);break;case 1:In(i.type)&&Oa(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,p=i.memoizedProps.value;It(Ga,d._currentValue),d._currentValue=p;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(l&i.child.childLanes)!==0?ep(n,i,l):(It(zt,zt.current&1),n=Oi(n,i,l),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(d=(l&i.childLanes)!==0,(n.flags&128)!==0){if(d)return np(n,i,l);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),It(zt,zt.current),d)break;return null;case 22:case 23:return i.lanes=0,Kh(n,i,l)}return Oi(n,i,l)}var ip,Su,rp,sp;ip=function(n,i){for(var l=i.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===i)break;for(;l.sibling===null;){if(l.return===null||l.return===i)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Su=function(){},rp=function(n,i,l,d){var p=n.memoizedProps;if(p!==d){n=i.stateNode,zr(xi.current);var v=null;switch(l){case"input":p=We(n,p),d=We(n,d),v=[];break;case"select":p=W({},p,{value:void 0}),d=W({},d,{value:void 0}),v=[];break;case"textarea":p=ve(n,p),d=ve(n,d),v=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Da)}tt(l,d);var T;l=null;for(J in p)if(!d.hasOwnProperty(J)&&p.hasOwnProperty(J)&&p[J]!=null)if(J==="style"){var D=p[J];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(s.hasOwnProperty(J)?v||(v=[]):(v=v||[]).push(J,null));for(J in d){var O=d[J];if(D=p?.[J],d.hasOwnProperty(J)&&O!==D&&(O!=null||D!=null))if(J==="style")if(D){for(T in D)!D.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&D[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(v||(v=[]),v.push(J,l)),l=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(v=v||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(s.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Dt("scroll",n),v||D===O||(v=[])):(v=v||[]).push(J,O))}l&&(v=v||[]).push("style",l);var J=v;(i.updateQueue=J)&&(i.flags|=4)}},sp=function(n,i,l,d){l!==d&&(i.flags|=4)};function Wo(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(i)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,i}function Iv(n,i,l){var d=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return In(i.type)&&Fa(),vn(i),null;case 3:return d=i.stateNode,Cs(),Ut(Nn),Ut(gn),nu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Ha(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Nu(ai),ai=null))),Su(n,i),vn(i),null;case 5:eu(i);var p=zr(Bo.current);if(l=i.type,n!==null&&i.stateNode!=null)rp(n,i,l,d,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=zr(xi.current),Ha(i)){d=i.stateNode,l=i.type;var v=i.memoizedProps;switch(d[vi]=i,d[Do]=v,n=(i.mode&1)!==0,l){case"dialog":Dt("cancel",d),Dt("close",d);break;case"iframe":case"object":case"embed":Dt("load",d);break;case"video":case"audio":for(p=0;p<Po.length;p++)Dt(Po[p],d);break;case"source":Dt("error",d);break;case"img":case"image":case"link":Dt("error",d),Dt("load",d);break;case"details":Dt("toggle",d);break;case"input":et(d,v),Dt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},Dt("invalid",d);break;case"textarea":me(d,v),Dt("invalid",d)}tt(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?d.textContent!==D&&(v.suppressHydrationWarning!==!0&&Ia(d.textContent,D,n),p=["children",D]):typeof D=="number"&&d.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Ia(d.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Dt("scroll",d)}switch(l){case"input":dt(d),rt(d,v,!0);break;case"textarea":dt(d),He(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=Da)}d=p,i.updateQueue=d,d!==null&&(i.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Re(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=T.createElement(l,{is:d.is}):(n=T.createElement(l),l==="select"&&(T=n,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):n=T.createElementNS(n,l),n[vi]=i,n[Do]=d,ip(n,i,!1,!1),i.stateNode=n;e:{switch(T=xt(l,d),l){case"dialog":Dt("cancel",n),Dt("close",n),p=d;break;case"iframe":case"object":case"embed":Dt("load",n),p=d;break;case"video":case"audio":for(p=0;p<Po.length;p++)Dt(Po[p],n);p=d;break;case"source":Dt("error",n),p=d;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),p=d;break;case"details":Dt("toggle",n),p=d;break;case"input":et(n,d),p=We(n,d),Dt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=W({},d,{value:void 0}),Dt("invalid",n);break;case"textarea":me(n,d),p=ve(n,d),Dt("invalid",n);break;default:p=d}tt(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var O=D[v];v==="style"?Ge(n,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&st(n,O)):v==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&pe(n,O):typeof O=="number"&&pe(n,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?O!=null&&v==="onScroll"&&Dt("scroll",n):O!=null&&A(n,v,O,T))}switch(l){case"input":dt(n),rt(n,d,!1);break;case"textarea":dt(n),He(n);break;case"option":d.value!=null&&n.setAttribute("value",""+be(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?Q(n,!!d.multiple,v,!1):d.defaultValue!=null&&Q(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Da)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)sp(n,i,n.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(l=zr(Bo.current),zr(xi.current),Ha(i)){if(d=i.stateNode,l=i.memoizedProps,d[vi]=i,(v=d.nodeValue!==l)&&(n=Hn,n!==null))switch(n.tag){case 3:Ia(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(d.nodeValue,l,(n.mode&1)!==0)}v&&(i.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[vi]=i,i.stateNode=d}return vn(i),null;case 13:if(Ut(zt),d=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lh(),ws(),i.flags|=98560,v=!1;else if(v=Ha(i),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[vi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),v=!1}else ai!==null&&(Nu(ai),ai=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=l,i):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(zt.current&1)!==0?en===0&&(en=3):Uu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Cs(),Su(n,i),n===null&&No(i.stateNode.containerInfo),vn(i),null;case 10:return Kc(i.type._context),vn(i),null;case 17:return In(i.type)&&Fa(),vn(i),null;case 19:if(Ut(zt),v=i.memoizedState,v===null)return vn(i),null;if(d=(i.flags&128)!==0,T=v.rendering,T===null)if(d)Wo(v,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=qa(n),T!==null){for(i.flags|=128,Wo(v,!1),d=T.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=l,l=i.child;l!==null;)v=l,n=d,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}v.tail!==null&&Pe()>Is&&(i.flags|=128,d=!0,Wo(v,!1),i.lanes=4194304)}else{if(!d)if(n=qa(T),n!==null){if(i.flags|=128,d=!0,l=n.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),Wo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!kt)return vn(i),null}else 2*Pe()-v.renderingStartTime>Is&&l!==1073741824&&(i.flags|=128,d=!0,Wo(v,!1),i.lanes=4194304);v.isBackwards?(T.sibling=i.child,i.child=T):(l=v.last,l!==null?l.sibling=T:i.child=T,v.last=T)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Pe(),i.sibling=null,l=zt.current,It(zt,d?l&1|2:l&1),i):(vn(i),null);case 22:case 23:return Du(),d=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Dv(n,i){switch(Gc(i),i.tag){case 1:return In(i.type)&&Fa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),Ut(Nn),Ut(gn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Ut(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ut(zt),null;case 4:return Cs(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var nl=!1,xn=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Ps(n,i){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Xt(n,i,d)}else l.current=null}function Mu(n,i,l){try{l()}catch(d){Xt(n,i,d)}}var op=!1;function Fv(n,i){if(Dc=Ma,n=kf(),Ac(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,O=-1,J=0,he=0,ge=n,de=null;t:for(;;){for(var Le;ge!==l||p!==0&&ge.nodeType!==3||(D=T+p),ge!==v||d!==0&&ge.nodeType!==3||(O=T+d),ge.nodeType===3&&(T+=ge.nodeValue.length),(Le=ge.firstChild)!==null;)de=ge,ge=Le;for(;;){if(ge===n)break t;if(de===l&&++J===p&&(D=T),de===v&&++he===d&&(O=T),(Le=ge.nextSibling)!==null)break;ge=de,de=ge.parentNode}ge=Le}l=D===-1||O===-1?null:{start:D,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uc={focusedElem:n,selectionRange:l},Ma=!1,Ne=i;Ne!==null;)if(i=Ne,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ne=n;else for(;Ne!==null;){i=Ne;try{var Ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ue!==null){var Oe=Ue.memoizedProps,qt=Ue.memoizedState,q=i.stateNode,B=q.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:li(i.type,Oe),qt);q.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ye){Xt(i,i.return,ye)}if(n=i.sibling,n!==null){n.return=i.return,Ne=n;break}Ne=i.return}return Ue=op,op=!1,Ue}function Xo(n,i,l){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Mu(i,l,v)}p=p.next}while(p!==d)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==i)}}function Eu(n){var i=n.ref;if(i!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof i=="function"?i(n):i.current=n}}function ap(n){var i=n.alternate;i!==null&&(n.alternate=null,ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[vi],delete i[Do],delete i[Bc],delete i[vv],delete i[xv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lp(n){return n.tag===5||n.tag===3||n.tag===4}function cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,i,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?l.nodeType===8?l.parentNode.insertBefore(n,i):l.insertBefore(n,i):(l.nodeType===8?(i=l.parentNode,i.insertBefore(n,l)):(i=l,i.appendChild(n)),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=Da));else if(d!==4&&(n=n.child,n!==null))for(Tu(n,i,l),n=n.sibling;n!==null;)Tu(n,i,l),n=n.sibling}function wu(n,i,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?l.insertBefore(n,i):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(wu(n,i,l),n=n.sibling;n!==null;)wu(n,i,l),n=n.sibling}var fn=null,ci=!1;function fr(n,i,l){for(l=l.child;l!==null;)up(n,i,l),l=l.sibling}function up(n,i,l){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ln,l)}catch{}switch(l.tag){case 5:xn||Ps(l,i);case 6:var d=fn,p=ci;fn=null,fr(n,i,l),fn=d,ci=p,fn!==null&&(ci?(n=fn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):fn.removeChild(l.stateNode));break;case 18:fn!==null&&(ci?(n=fn,l=l.stateNode,n.nodeType===8?kc(n.parentNode,l):n.nodeType===1&&kc(n,l),Eo(n)):kc(fn,l.stateNode));break;case 4:d=fn,p=ci,fn=l.stateNode.containerInfo,ci=!0,fr(n,i,l),fn=d,ci=p;break;case 0:case 11:case 14:case 15:if(!xn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Mu(l,i,T),p=p.next}while(p!==d)}fr(n,i,l);break;case 1:if(!xn&&(Ps(l,i),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(D){Xt(l,i,D)}fr(n,i,l);break;case 21:fr(n,i,l);break;case 22:l.mode&1?(xn=(d=xn)||l.memoizedState!==null,fr(n,i,l),xn=d):fr(n,i,l);break;default:fr(n,i,l)}}function dp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Uv),i.forEach(function(d){var p=Xv.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function ui(n,i){var l=i.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var v=n,T=i,D=T;e:for(;D!==null;){switch(D.tag){case 5:fn=D.stateNode,ci=!1;break e;case 3:fn=D.stateNode.containerInfo,ci=!0;break e;case 4:fn=D.stateNode.containerInfo,ci=!0;break e}D=D.return}if(fn===null)throw Error(t(160));up(v,T,p),fn=null,ci=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(J){Xt(p,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fp(i,n),i=i.sibling}function fp(n,i){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),Si(n),d&4){try{Xo(3,n,n.return),il(3,n)}catch(Oe){Xt(n,n.return,Oe)}try{Xo(5,n,n.return)}catch(Oe){Xt(n,n.return,Oe)}}break;case 1:ui(i,n),Si(n),d&512&&l!==null&&Ps(l,l.return);break;case 5:if(ui(i,n),Si(n),d&512&&l!==null&&Ps(l,l.return),n.flags&32){var p=n.stateNode;try{pe(p,"")}catch(Oe){Xt(n,n.return,Oe)}}if(d&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,D=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&ze(p,v),xt(D,T);var J=xt(D,v);for(T=0;T<O.length;T+=2){var he=O[T],ge=O[T+1];he==="style"?Ge(p,ge):he==="dangerouslySetInnerHTML"?st(p,ge):he==="children"?pe(p,ge):A(p,he,ge,J)}switch(D){case"input":Ct(p,v);break;case"textarea":xe(p,v);break;case"select":var de=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?Q(p,!!v.multiple,Le,!1):de!==!!v.multiple&&(v.defaultValue!=null?Q(p,!!v.multiple,v.defaultValue,!0):Q(p,!!v.multiple,v.multiple?[]:"",!1))}p[Do]=v}catch(Oe){Xt(n,n.return,Oe)}}break;case 6:if(ui(i,n),Si(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Oe){Xt(n,n.return,Oe)}}break;case 3:if(ui(i,n),Si(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(Oe){Xt(n,n.return,Oe)}break;case 4:ui(i,n),Si(n);break;case 13:ui(i,n),Si(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(bu=Pe())),d&4&&dp(n);break;case 22:if(he=l!==null&&l.memoizedState!==null,n.mode&1?(xn=(J=xn)||he,ui(i,n),xn=J):ui(i,n),Si(n),d&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!he&&(n.mode&1)!==0)for(Ne=n,he=n.child;he!==null;){for(ge=Ne=he;Ne!==null;){switch(de=Ne,Le=de.child,de.tag){case 0:case 11:case 14:case 15:Xo(4,de,de.return);break;case 1:Ps(de,de.return);var Ue=de.stateNode;if(typeof Ue.componentWillUnmount=="function"){d=de,l=de.return;try{i=d,Ue.props=i.memoizedProps,Ue.state=i.memoizedState,Ue.componentWillUnmount()}catch(Oe){Xt(d,l,Oe)}}break;case 5:Ps(de,de.return);break;case 22:if(de.memoizedState!==null){mp(ge);continue}}Le!==null?(Le.return=de,Ne=Le):mp(ge)}he=he.sibling}e:for(he=null,ge=n;;){if(ge.tag===5){if(he===null){he=ge;try{p=ge.stateNode,J?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=ge.stateNode,O=ge.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Qe("display",T))}catch(Oe){Xt(n,n.return,Oe)}}}else if(ge.tag===6){if(he===null)try{ge.stateNode.nodeValue=J?"":ge.memoizedProps}catch(Oe){Xt(n,n.return,Oe)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===n)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===n)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===n)break e;he===ge&&(he=null),ge=ge.return}he===ge&&(he=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:ui(i,n),Si(n),d&4&&dp(n);break;case 21:break;default:ui(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var l=n.return;l!==null;){if(lp(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(pe(p,""),d.flags&=-33);var v=cp(n);wu(n,v,p);break;case 3:case 4:var T=d.stateNode.containerInfo,D=cp(n);Tu(n,D,T);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ov(n,i,l){Ne=n,hp(n)}function hp(n,i,l){for(var d=(n.mode&1)!==0;Ne!==null;){var p=Ne,v=p.child;if(p.tag===22&&d){var T=p.memoizedState!==null||nl;if(!T){var D=p.alternate,O=D!==null&&D.memoizedState!==null||xn;D=nl;var J=xn;if(nl=T,(xn=O)&&!J)for(Ne=p;Ne!==null;)T=Ne,O=T.child,T.tag===22&&T.memoizedState!==null?gp(p):O!==null?(O.return=T,Ne=O):gp(p);for(;v!==null;)Ne=v,hp(v),v=v.sibling;Ne=p,nl=D,xn=J}pp(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ne=v):pp(n)}}function pp(n){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var l=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||il(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!xn)if(l===null)d.componentDidMount();else{var p=i.elementType===i.type?l.memoizedProps:li(i.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&mh(i,v,d);break;case 3:var T=i.updateQueue;if(T!==null){if(l=null,i.child!==null)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}mh(i,T,l)}break;case 5:var D=i.stateNode;if(l===null&&i.flags&4){l=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var he=J.memoizedState;if(he!==null){var ge=he.dehydrated;ge!==null&&Eo(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&Eu(i)}catch(de){Xt(i,i.return,de)}}if(i===n){Ne=null;break}if(l=i.sibling,l!==null){l.return=i.return,Ne=l;break}Ne=i.return}}function mp(n){for(;Ne!==null;){var i=Ne;if(i===n){Ne=null;break}var l=i.sibling;if(l!==null){l.return=i.return,Ne=l;break}Ne=i.return}}function gp(n){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var l=i.return;try{il(4,i)}catch(O){Xt(i,l,O)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var p=i.return;try{d.componentDidMount()}catch(O){Xt(i,p,O)}}var v=i.return;try{Eu(i)}catch(O){Xt(i,v,O)}break;case 5:var T=i.return;try{Eu(i)}catch(O){Xt(i,T,O)}}}catch(O){Xt(i,i.return,O)}if(i===n){Ne=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ne=D;break}Ne=i.return}}var kv=Math.ceil,rl=C.ReactCurrentDispatcher,Au=C.ReactCurrentOwner,Zn=C.ReactCurrentBatchConfig,yt=0,ln=null,Kt=null,hn=0,Gn=0,Ns=ar(0),en=0,jo=null,Vr=0,sl=0,Ru=0,qo=null,Un=null,bu=0,Is=1/0,ki=null,ol=!1,Cu=null,hr=null,al=!1,pr=null,ll=0,Yo=0,Lu=null,cl=-1,ul=0;function An(){return(yt&6)!==0?Pe():cl!==-1?cl:cl=Pe()}function mr(n){return(n.mode&1)===0?1:(yt&2)!==0&&hn!==0?hn&-hn:Sv.transition!==null?(ul===0&&(ul=xa()),ul):(n=At,n!==0||(n=window.event,n=n===void 0?16:vf(n.type)),n)}function di(n,i,l,d){if(50<Yo)throw Yo=0,Lu=null,Error(t(185));vo(n,l,d),((yt&2)===0||n!==ln)&&(n===ln&&((yt&2)===0&&(sl|=l),en===4&&gr(n,hn)),Fn(n,d),l===1&&yt===0&&(i.mode&1)===0&&(Is=Pe()+500,ka&&cr()))}function Fn(n,i){var l=n.callbackNode;Pn(n,i);var d=jn(n,n===ln?hn:0);if(d===0)l!==null&&Ce(l),n.callbackNode=null,n.callbackPriority=0;else if(i=d&-d,n.callbackPriority!==i){if(l!=null&&Ce(l),i===1)n.tag===0?yv(vp.bind(null,n)):ih(vp.bind(null,n)),gv(function(){(yt&6)===0&&cr()}),l=null;else{switch(uf(d)){case 1:l=Je;break;case 4:l=nt;break;case 16:l=Nt;break;case 536870912:l=jt;break;default:l=Nt}l=Ap(l,_p.bind(null,n))}n.callbackPriority=i,n.callbackNode=l}}function _p(n,i){if(cl=-1,ul=0,(yt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ds()&&n.callbackNode!==l)return null;var d=jn(n,n===ln?hn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||i)i=dl(n,d);else{i=d;var p=yt;yt|=2;var v=yp();(ln!==n||hn!==i)&&(ki=null,Is=Pe()+500,Wr(n,i));do try{Hv();break}catch(D){xp(n,D)}while(!0);Yc(),rl.current=v,yt=p,Kt!==null?i=0:(ln=null,hn=0,i=en)}if(i!==0){if(i===2&&(p=Dr(n),p!==0&&(d=p,i=Pu(n,p))),i===1)throw l=jo,Wr(n,0),gr(n,d),Fn(n,Pe()),l;if(i===6)gr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!Bv(p)&&(i=dl(n,d),i===2&&(v=Dr(n),v!==0&&(d=v,i=Pu(n,v))),i===1))throw l=jo,Wr(n,0),gr(n,d),Fn(n,Pe()),l;switch(n.finishedWork=p,n.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:Xr(n,Un,ki);break;case 3:if(gr(n,d),(d&130023424)===d&&(i=bu+500-Pe(),10<i)){if(jn(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){An(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Oc(Xr.bind(null,n,Un,ki),i);break}Xr(n,Un,ki);break;case 4:if(gr(n,d),(d&4194240)===d)break;for(i=n.eventTimes,p=-1;0<d;){var T=31-Tn(d);v=1<<T,T=i[T],T>p&&(p=T),d&=~v}if(d=p,d=Pe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*kv(d/1960))-d,10<d){n.timeoutHandle=Oc(Xr.bind(null,n,Un,ki),d);break}Xr(n,Un,ki);break;case 5:Xr(n,Un,ki);break;default:throw Error(t(329))}}}return Fn(n,Pe()),n.callbackNode===l?_p.bind(null,n):null}function Pu(n,i){var l=qo;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Un,Un=l,i!==null&&Nu(i)),n}function Nu(n){Un===null?Un=n:Un.push.apply(Un,n)}function Bv(n){for(var i=n;;){if(i.flags&16384){var l=i.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],v=p.getSnapshot;p=p.value;try{if(!oi(v(),p))return!1}catch{return!1}}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(n,i){for(i&=~Ru,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var l=31-Tn(i),d=1<<l;n[l]=-1,i&=~d}}function vp(n){if((yt&6)!==0)throw Error(t(327));Ds();var i=jn(n,0);if((i&1)===0)return Fn(n,Pe()),null;var l=dl(n,i);if(n.tag!==0&&l===2){var d=Dr(n);d!==0&&(i=d,l=Pu(n,d))}if(l===1)throw l=jo,Wr(n,0),gr(n,i),Fn(n,Pe()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xr(n,Un,ki),Fn(n,Pe()),null}function Iu(n,i){var l=yt;yt|=1;try{return n(i)}finally{yt=l,yt===0&&(Is=Pe()+500,ka&&cr())}}function Gr(n){pr!==null&&pr.tag===0&&(yt&6)===0&&Ds();var i=yt;yt|=1;var l=Zn.transition,d=At;try{if(Zn.transition=null,At=1,n)return n()}finally{At=d,Zn.transition=l,yt=i,(yt&6)===0&&cr()}}function Du(){Gn=Ns.current,Ut(Ns)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,mv(l)),Kt!==null)for(l=Kt.return;l!==null;){var d=l;switch(Gc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Fa();break;case 3:Cs(),Ut(Nn),Ut(gn),nu();break;case 5:eu(d);break;case 4:Cs();break;case 13:Ut(zt);break;case 19:Ut(zt);break;case 10:Kc(d.type._context);break;case 22:case 23:Du()}l=l.return}if(ln=n,Kt=n=_r(n.current,null),hn=Gn=i,en=0,jo=null,Ru=sl=Vr=0,Un=qo=null,Br!==null){for(i=0;i<Br.length;i++)if(l=Br[i],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,d.next=T}l.pending=d}Br=null}return n}function xp(n,i){do{var l=Kt;try{if(Yc(),Ya.current=Qa,Ka){for(var d=Ht.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Ka=!1}if(Hr=0,an=Jt=Ht=null,zo=!1,Ho=0,Au.current=null,l===null||l.return===null){en=1,jo=i,Kt=null;break}e:{var v=n,T=l.return,D=l,O=i;if(i=hn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,he=D,ge=he.tag;if((he.mode&1)===0&&(ge===0||ge===11||ge===15)){var de=he.alternate;de?(he.updateQueue=de.updateQueue,he.memoizedState=de.memoizedState,he.lanes=de.lanes):(he.updateQueue=null,he.memoizedState=null)}var Le=Wh(T);if(Le!==null){Le.flags&=-257,Xh(Le,T,D,v,i),Le.mode&1&&Gh(v,J,i),i=Le,O=J;var Ue=i.updateQueue;if(Ue===null){var Oe=new Set;Oe.add(O),i.updateQueue=Oe}else Ue.add(O);break e}else{if((i&1)===0){Gh(v,J,i),Uu();break e}O=Error(t(426))}}else if(kt&&D.mode&1){var qt=Wh(T);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Xh(qt,T,D,v,i),jc(Ls(O,D));break e}}v=O=Ls(O,D),en!==4&&(en=2),qo===null?qo=[v]:qo.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var q=Hh(v,O,i);ph(v,q);break e;case 1:D=O;var B=v.type,K=v.stateNode;if((v.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(hr===null||!hr.has(K)))){v.flags|=65536,i&=-i,v.lanes|=i;var ye=Vh(v,D,i);ph(v,ye);break e}}v=v.return}while(v!==null)}Mp(l)}catch(Be){i=Be,Kt===l&&l!==null&&(Kt=l=l.return);continue}break}while(!0)}function yp(){var n=rl.current;return rl.current=Qa,n===null?Qa:n}function Uu(){(en===0||en===3||en===2)&&(en=4),ln===null||(Vr&268435455)===0&&(sl&268435455)===0||gr(ln,hn)}function dl(n,i){var l=yt;yt|=2;var d=yp();(ln!==n||hn!==i)&&(ki=null,Wr(n,i));do try{zv();break}catch(p){xp(n,p)}while(!0);if(Yc(),yt=l,rl.current=d,Kt!==null)throw Error(t(261));return ln=null,hn=0,en}function zv(){for(;Kt!==null;)Sp(Kt)}function Hv(){for(;Kt!==null&&!Ve();)Sp(Kt)}function Sp(n){var i=wp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Mp(n):Kt=i,Au.current=null}function Mp(n){var i=n;do{var l=i.alternate;if(n=i.return,(i.flags&32768)===0){if(l=Iv(l,i,Gn),l!==null){Kt=l;return}}else{if(l=Dv(l,i),l!==null){l.flags&=32767,Kt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);en===0&&(en=5)}function Xr(n,i,l){var d=At,p=Zn.transition;try{Zn.transition=null,At=1,Vv(n,i,l,d)}finally{Zn.transition=p,At=d}return null}function Vv(n,i,l,d){do Ds();while(pr!==null);if((yt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(M_(n,v),n===ln&&(Kt=ln=null,hn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||al||(al=!0,Ap(Nt,function(){return Ds(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=Zn.transition,Zn.transition=null;var T=At;At=1;var D=yt;yt|=4,Au.current=null,Fv(n,l),fp(l,n),lv(Uc),Ma=!!Dc,Uc=Dc=null,n.current=l,Ov(l),Ke(),yt=D,At=T,Zn.transition=v}else n.current=l;if(al&&(al=!1,pr=n,ll=p),v=n.pendingLanes,v===0&&(hr=null),lt(l.stateNode),Fn(n,Pe()),i!==null)for(d=n.onRecoverableError,l=0;l<i.length;l++)p=i[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(ol)throw ol=!1,n=Cu,Cu=null,n;return(ll&1)!==0&&n.tag!==0&&Ds(),v=n.pendingLanes,(v&1)!==0?n===Lu?Yo++:(Yo=0,Lu=n):Yo=0,cr(),null}function Ds(){if(pr!==null){var n=uf(ll),i=Zn.transition,l=At;try{if(Zn.transition=null,At=16>n?16:n,pr===null)var d=!1;else{if(n=pr,pr=null,ll=0,(yt&6)!==0)throw Error(t(331));var p=yt;for(yt|=4,Ne=n.current;Ne!==null;){var v=Ne,T=v.child;if((Ne.flags&16)!==0){var D=v.deletions;if(D!==null){for(var O=0;O<D.length;O++){var J=D[O];for(Ne=J;Ne!==null;){var he=Ne;switch(he.tag){case 0:case 11:case 15:Xo(8,he,v)}var ge=he.child;if(ge!==null)ge.return=he,Ne=ge;else for(;Ne!==null;){he=Ne;var de=he.sibling,Le=he.return;if(ap(he),he===J){Ne=null;break}if(de!==null){de.return=Le,Ne=de;break}Ne=Le}}}var Ue=v.alternate;if(Ue!==null){var Oe=Ue.child;if(Oe!==null){Ue.child=null;do{var qt=Oe.sibling;Oe.sibling=null,Oe=qt}while(Oe!==null)}}Ne=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ne=T;else e:for(;Ne!==null;){if(v=Ne,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Xo(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Ne=q;break e}Ne=v.return}}var B=n.current;for(Ne=B;Ne!==null;){T=Ne;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,Ne=K;else e:for(T=B;Ne!==null;){if(D=Ne,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:il(9,D)}}catch(Be){Xt(D,D.return,Be)}if(D===T){Ne=null;break e}var ye=D.sibling;if(ye!==null){ye.return=D.return,Ne=ye;break e}Ne=D.return}}if(yt=p,cr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ln,n)}catch{}d=!0}return d}finally{At=l,Zn.transition=i}}return!1}function Ep(n,i,l){i=Ls(l,i),i=Hh(n,i,1),n=dr(n,i,1),i=An(),n!==null&&(vo(n,1,i),Fn(n,i))}function Xt(n,i,l){if(n.tag===3)Ep(n,n,l);else for(;i!==null;){if(i.tag===3){Ep(i,n,l);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(hr===null||!hr.has(d))){n=Ls(l,n),n=Vh(i,n,1),i=dr(i,n,1),n=An(),i!==null&&(vo(i,1,n),Fn(i,n));break}}i=i.return}}function Gv(n,i,l){var d=n.pingCache;d!==null&&d.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(hn&l)===l&&(en===4||en===3&&(hn&130023424)===hn&&500>Pe()-bu?Wr(n,0):Ru|=l),Fn(n,i)}function Tp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var l=An();n=Ui(n,i),n!==null&&(vo(n,i,l),Fn(n,l))}function Wv(n){var i=n.memoizedState,l=0;i!==null&&(l=i.retryLane),Tp(n,l)}function Xv(n,i){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Tp(n,l)}var wp;wp=function(n,i,l){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((n.lanes&l)===0&&(i.flags&128)===0)return Dn=!1,Nv(n,i,l);Dn=(n.flags&131072)!==0}else Dn=!1,kt&&(i.flags&1048576)!==0&&rh(i,za,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;tl(n,i),n=i.pendingProps;var p=Ms(i,gn.current);bs(i,l),p=su(null,i,d,n,p,l);var v=ou();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(d)?(v=!0,Oa(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Qc(i),p.updater=Ja,i.stateNode=p,p._reactInternals=i,fu(i,d,n,l),i=gu(null,i,d,!0,v,l)):(i.tag=0,kt&&v&&Vc(i),wn(null,i,p,l),i=i.child),i;case 16:d=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,p=d._init,d=p(d._payload),i.type=d,p=i.tag=qv(d),n=li(d,n),p){case 0:i=mu(null,i,d,n,l);break e;case 1:i=Zh(null,i,d,n,l);break e;case 11:i=jh(null,i,d,n,l);break e;case 14:i=qh(null,i,d,li(d.type,n),l);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:li(d,p),mu(n,i,d,p,l);case 1:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:li(d,p),Zh(n,i,d,p,l);case 3:e:{if(Qh(i),n===null)throw Error(t(387));d=i.pendingProps,v=i.memoizedState,p=v.element,hh(n,i),ja(i,d,null,l);var T=i.memoizedState;if(d=T.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Ls(Error(t(423)),i),i=Jh(n,i,d,l,p);break e}else if(d!==p){p=Ls(Error(t(424)),i),i=Jh(n,i,d,l,p);break e}else for(Vn=or(i.stateNode.containerInfo.firstChild),Hn=i,kt=!0,ai=null,l=dh(i,null,d,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ws(),d===p){i=Oi(n,i,l);break e}wn(n,i,d,l)}i=i.child}return i;case 5:return gh(i),n===null&&Xc(i),d=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Fc(d,p)?T=null:v!==null&&Fc(d,v)&&(i.flags|=32),$h(n,i),wn(n,i,T,l),i.child;case 6:return n===null&&Xc(i),null;case 13:return ep(n,i,l);case 4:return Jc(i,i.stateNode.containerInfo),d=i.pendingProps,n===null?i.child=As(i,null,d,l):wn(n,i,d,l),i.child;case 11:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:li(d,p),jh(n,i,d,p,l);case 7:return wn(n,i,i.pendingProps,l),i.child;case 8:return wn(n,i,i.pendingProps.children,l),i.child;case 12:return wn(n,i,i.pendingProps.children,l),i.child;case 10:e:{if(d=i.type._context,p=i.pendingProps,v=i.memoizedProps,T=p.value,It(Ga,d._currentValue),d._currentValue=T,v!==null)if(oi(v.value,T)){if(v.children===p.children&&!Nn.current){i=Oi(n,i,l);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var O=D.firstContext;O!==null;){if(O.context===d){if(v.tag===1){O=Fi(-1,l&-l),O.tag=2;var J=v.updateQueue;if(J!==null){J=J.shared;var he=J.pending;he===null?O.next=O:(O.next=he.next,he.next=O),J.pending=O}}v.lanes|=l,O=v.alternate,O!==null&&(O.lanes|=l),$c(v.return,l,i),D.lanes|=l;break}O=O.next}}else if(v.tag===10)T=v.type===i.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),$c(T,l,i),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===i){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}wn(n,i,p.children,l),i=i.child}return i;case 9:return p=i.type,d=i.pendingProps.children,bs(i,l),p=Kn(p),d=d(p),i.flags|=1,wn(n,i,d,l),i.child;case 14:return d=i.type,p=li(d,i.pendingProps),p=li(d.type,p),qh(n,i,d,p,l);case 15:return Yh(n,i,i.type,i.pendingProps,l);case 17:return d=i.type,p=i.pendingProps,p=i.elementType===d?p:li(d,p),tl(n,i),i.tag=1,In(d)?(n=!0,Oa(i)):n=!1,bs(i,l),Bh(i,d,p),fu(i,d,p,l),gu(null,i,d,!0,n,l);case 19:return np(n,i,l);case 22:return Kh(n,i,l)}throw Error(t(156,i.tag))};function Ap(n,i){return ne(n,i)}function jv(n,i,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,l,d){return new jv(n,i,l,d)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qv(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===Z)return 14}return 2}function _r(n,i){var l=n.alternate;return l===null?(l=Qn(n.tag,i,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=i,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,i=n.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function fl(n,i,l,d,p,v){var T=2;if(d=n,typeof n=="function")Fu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return jr(l.children,p,v,i);case ce:T=8,p|=8;break;case R:return n=Qn(12,l,i,p|2),n.elementType=R,n.lanes=v,n;case _e:return n=Qn(13,l,i,p),n.elementType=_e,n.lanes=v,n;case H:return n=Qn(19,l,i,p),n.elementType=H,n.lanes=v,n;case ae:return hl(l,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case I:T=10;break e;case oe:T=9;break e;case ue:T=11;break e;case Z:T=14;break e;case se:T=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(T,l,i,p),i.elementType=n,i.type=d,i.lanes=v,i}function jr(n,i,l,d){return n=Qn(7,n,d,i),n.lanes=l,n}function hl(n,i,l,d){return n=Qn(22,n,d,i),n.elementType=ae,n.lanes=l,n.stateNode={isHidden:!1},n}function Ou(n,i,l){return n=Qn(6,n,null,i),n.lanes=l,n}function ku(n,i,l){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=l,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,l,d,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fs(0),this.expirationTimes=fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Bu(n,i,l,d,p,v,T,D,O){return n=new Yv(n,i,l,D,O),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Qn(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(v),n}function Kv(n,i,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:d==null?null:""+d,children:n,containerInfo:i,implementation:l}}function Rp(n){if(!n)return lr;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(In(l))return th(n,l,i)}return i}function bp(n,i,l,d,p,v,T,D,O){return n=Bu(l,d,!0,n,p,v,T,D,O),n.context=Rp(null),l=n.current,d=An(),p=mr(l),v=Fi(d,p),v.callback=i??null,dr(l,v,p),n.current.lanes=p,vo(n,p,d),Fn(n,d),n}function pl(n,i,l,d){var p=i.current,v=An(),T=mr(p);return l=Rp(l),i.context===null?i.context=l:i.pendingContext=l,i=Fi(v,T),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=dr(p,i,T),n!==null&&(di(n,p,T,v),Xa(n,p,T)),T}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<i?l:i}}function zu(n,i){Cp(n,i),(n=n.alternate)&&Cp(n,i)}function $v(){return null}var Lp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}gl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){pl(null,n,null,null)}),i[Pi]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=hf();n={blockedOn:null,target:n,priority:i};for(var l=0;l<ir.length&&i!==0&&i<ir[l].priority;l++);ir.splice(l,0,n),l===0&&gf(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Zv(n,i,l,d,p){if(p){if(typeof d=="function"){var v=d;d=function(){var J=ml(T);v.call(J)}}var T=bp(i,d,n,0,null,!1,!1,"",Pp);return n._reactRootContainer=T,n[Pi]=T.current,No(n.nodeType===8?n.parentNode:n),Gr(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var D=d;d=function(){var J=ml(O);D.call(J)}}var O=Bu(n,0,!1,null,null,!1,!1,"",Pp);return n._reactRootContainer=O,n[Pi]=O.current,No(n.nodeType===8?n.parentNode:n),Gr(function(){pl(i,O,l,d)}),O}function vl(n,i,l,d,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var O=ml(T);D.call(O)}}pl(i,T,n,p)}else T=Zv(l,i,n,p,d);return ml(T)}df=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var l=Wt(i.pendingLanes);l!==0&&(fc(i,l|1),Fn(i,Pe()),(yt&6)===0&&(Is=Pe()+500,cr()))}break;case 13:Gr(function(){var d=Ui(n,1);if(d!==null){var p=An();di(d,n,1,p)}}),zu(n,1)}},hc=function(n){if(n.tag===13){var i=Ui(n,134217728);if(i!==null){var l=An();di(i,n,134217728,l)}zu(n,134217728)}},ff=function(n){if(n.tag===13){var i=mr(n),l=Ui(n,i);if(l!==null){var d=An();di(l,n,i,d)}zu(n,i)}},hf=function(){return At},pf=function(n,i){var l=At;try{return At=n,i()}finally{At=l}},Me=function(n,i,l){switch(i){case"input":if(Ct(n,l),i=l.name,l.type==="radio"&&i!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<l.length;i++){var d=l[i];if(d!==n&&d.form===n.form){var p=Ua(d);if(!p)throw Error(t(90));te(d),Ct(d,p)}}}break;case"textarea":xe(n,l);break;case"select":i=l.value,i!=null&&Q(n,!!l.multiple,i,!1)}},Tt=Iu,wt=Gr;var Qv={usingClientEntryPoint:!1,Events:[Uo,ys,Ua,$e,je,Iu]},Ko={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jv={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ie(n),n===null?null:n.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||$v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Ln=xl.inject(Jv),vt=xl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,On.createPortal=function(n,i){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return Kv(n,i,null,l)},On.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var l=!1,d="",p=Lp;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Bu(n,1,!1,null,null,l,!1,d,p),n[Pi]=i.current,No(n.nodeType===8?n.parentNode:n),new Hu(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ie(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Gr(n)},On.hydrate=function(n,i,l){if(!_l(i))throw Error(t(200));return vl(null,n,i,!0,l)},On.hydrateRoot=function(n,i,l){if(!Vu(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,v="",T=Lp;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),i=bp(i,null,n,1,l??null,p,!1,v,T),n[Pi]=i.current,No(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[l,p]:i.mutableSourceEagerHydrationData.push(l,p);return new gl(i)},On.render=function(n,i,l){if(!_l(i))throw Error(t(200));return vl(null,n,i,!1,l)},On.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},On.unstable_batchedUpdates=Iu,On.unstable_renderSubtreeIntoContainer=function(n,i,l,d){if(!_l(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,l,!1,d)},On.version="18.3.1-next-f1338f8080-20240426",On}var Bp;function l0(){if(Bp)return Xu.exports;Bp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xu.exports=a0(),Xu.exports}var zp;function c0(){if(zp)return yl;zp=1;var o=l0();return yl.createRoot=o.createRoot,yl.hydrateRoot=o.hydrateRoot,yl}var u0=c0();const d0=Ig(u0),f0=()=>{const[o,e]=Zt.useState(!1),[t,r]=Zt.useState(!1),s=Zt.useRef(0);return Zt.useEffect(()=>{const a=()=>{const c=window.scrollY;r(c>10),c>80?c>s.current+5?e(!0):c<s.current-5&&e(!1):e(!1),s.current=c};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),le.jsxs(le.Fragment,{children:[le.jsx("style",{children:`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: transform 0.35s ease !important;
        }
        .site-header.header-hidden {
          transform: translateY(-100%);
        }
        .header-nav {
          background: transparent;
          border-radius: 20px;
          min-height: 4rem;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 76rem;
          margin: 12px auto 0;
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .site-header.header-scrolled .header-nav {
          background: rgba(250, 250, 248, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .header-logo a {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text-primary);
        }
        .header-logo img {
          height: 28px;
          width: 28px;
          object-fit: contain;
        }
        .header-logo span {
          font-size: 17px;
          font-weight: 500;
          font-family: var(--font-body);
          letter-spacing: 0.01em;
        }
        .header-cta {
          background: var(--text-primary);
          color: var(--white);
          border-radius: 999px;
          padding: 10px 24px;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-family: var(--font-body);
          letter-spacing: 0.01em;
        }
      `}),le.jsx("header",{className:`site-header ${o?"header-hidden":""} ${t?"header-scrolled":""}`,children:le.jsxs("nav",{className:"header-nav",children:[le.jsx("div",{className:"header-logo",children:le.jsxs("a",{href:"#top",children:[le.jsx("img",{src:"/assets/images/Varosync logo.svg",alt:"Varosync Logo"}),le.jsx("span",{children:"Varosync"})]})}),le.jsxs("a",{href:"mailto:partnerships@varosync.com",className:"header-cta",children:["Get in touch",le.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:le.jsx("path",{d:"M6 14L14 6M14 6H7M14 6V13",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]})},h0=()=>le.jsxs("footer",{className:"footer",children:[le.jsxs("div",{className:"footer-content",children:[le.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[le.jsx("img",{src:"/assets/images/logo_white.svg",alt:"Varosync Logo",style:{width:"32px",height:"32px",display:"block"}}),le.jsx("span",{style:{fontWeight:500,fontSize:"17px",color:"#fff",fontFamily:"var(--font-body)",letterSpacing:"0.01em"},children:"Varosync"})]}),le.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[le.jsx("a",{href:"https://x.com/var0sync/",target:"_blank",rel:"noopener noreferrer","aria-label":"X",style:{display:"inline-flex",alignItems:"center",opacity:.7,transition:"opacity 0.2s"},children:le.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",alt:"X",style:{width:"18px",height:"18px",filter:"invert(1)"}})}),le.jsx("a",{href:"https://www.linkedin.com/company/varosync/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",style:{display:"inline-flex",alignItems:"center",opacity:.7,transition:"opacity 0.2s"},children:le.jsx("img",{src:"https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",alt:"LinkedIn",style:{width:"18px",height:"18px",filter:"invert(1)"}})})]})]}),le.jsx("div",{style:{maxWidth:"var(--content-max-width)",margin:"24px auto 12px auto"},children:le.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.12)"}})}),le.jsxs("div",{style:{maxWidth:"var(--content-max-width)",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[le.jsx("span",{style:{color:"rgba(255,255,255,0.5)",fontSize:"13px",fontFamily:"var(--font-body)",fontWeight:400},children:"© 2026 Varosync. All rights reserved."}),le.jsx("a",{href:"mailto:partnerships@varosync.com",style:{color:"rgba(255,255,255,0.5)",fontSize:"13px",fontFamily:"var(--font-body)",fontWeight:400,textDecoration:"none",transition:"color 0.2s"},children:"partnerships@varosync.com"})]})]});const qd="160",p0=0,Hp=1,m0=2,Dg=1,g0=2,Xi=3,Ki=0,Bn=1,Ei=2,br=0,eo=1,Vp=2,Gp=3,Wp=4,_0=5,es=100,v0=101,x0=102,Xp=103,jp=104,y0=200,S0=201,M0=202,E0=203,Nd=204,Id=205,T0=206,w0=207,A0=208,R0=209,b0=210,C0=211,L0=212,P0=213,N0=214,I0=0,D0=1,U0=2,Zl=3,F0=4,O0=5,k0=6,B0=7,Ug=0,z0=1,H0=2,Cr=0,V0=1,G0=2,W0=3,X0=4,j0=5,q0=6,qp="attached",Y0="detached",Fg=300,io=301,ro=302,Dd=303,Ud=304,sc=306,so=1e3,ti=1001,Ql=1002,dn=1003,Fd=1004,Kl=1005,kn=1006,Og=1007,as=1008,Lr=1009,K0=1010,$0=1011,Yd=1012,kg=1013,Ar=1014,ji=1015,ca=1016,Bg=1017,zg=1018,rs=1020,Z0=1021,ni=1023,Q0=1024,J0=1025,ss=1026,oo=1027,ex=1028,Hg=1029,tx=1030,Vg=1031,Gg=1033,Yu=33776,Ku=33777,$u=33778,Zu=33779,Yp=35840,Kp=35841,$p=35842,Zp=35843,Wg=36196,Qp=37492,Jp=37496,em=37808,tm=37809,nm=37810,im=37811,rm=37812,sm=37813,om=37814,am=37815,lm=37816,cm=37817,um=37818,dm=37819,fm=37820,hm=37821,Qu=36492,pm=36494,mm=36495,nx=36283,gm=36284,_m=36285,vm=36286,ua=2300,ao=2301,Ju=2302,xm=2400,ym=2401,Sm=2402,ix=2500,rx=0,Xg=1,Od=2,jg=3e3,os=3001,sx=3200,ox=3201,qg=0,ax=1,ii="",Bt="srgb",nn="srgb-linear",Kd="display-p3",oc="display-p3-linear",Jl="linear",Ft="srgb",ec="rec709",tc="p3",Us=7680,Mm=519,lx=512,cx=513,ux=514,Yg=515,dx=516,fx=517,hx=518,px=519,kd=35044,Em="300 es",Bd=1035,qi=2e3,nc=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tm=1234567;const sa=Math.PI/180,lo=180/Math.PI;function gi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Mn(o,e,t){return Math.max(e,Math.min(t,o))}function $d(o,e){return(o%e+e)%e}function mx(o,e,t,r,s){return r+(o-e)*(s-r)/(t-e)}function gx(o,e,t){return o!==e?(t-o)/(e-o):0}function oa(o,e,t){return(1-t)*o+t*e}function _x(o,e,t,r){return oa(o,e,1-Math.exp(-t*r))}function vx(o,e=1){return e-Math.abs($d(o,e*2)-e)}function xx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function yx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Sx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Mx(o,e){return o+Math.random()*(e-o)}function Ex(o){return o*(.5-Math.random())}function Tx(o){o!==void 0&&(Tm=o);let e=Tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wx(o){return o*sa}function Ax(o){return o*lo}function zd(o){return(o&o-1)===0&&o!==0}function Rx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ic(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function bx(o,e,t,r,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+r)/2),m=c((e+r)/2),g=a((e-r)/2),_=c((e-r)/2),S=a((r-e)/2),M=c((r-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*h);break;case"YZY":o.set(f*_,u*m,f*g,u*h);break;case"ZXZ":o.set(f*g,f*_,u*m,u*h);break;case"XZX":o.set(u*m,f*M,f*S,u*h);break;case"YXY":o.set(f*S,u*m,f*M,u*h);break;case"ZYZ":o.set(f*M,f*S,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Cx={DEG2RAD:sa,RAD2DEG:lo,generateUUID:gi,clamp:Mn,euclideanModulo:$d,mapLinear:mx,inverseLerp:gx,lerp:oa,damp:_x,pingpong:vx,smoothstep:xx,smootherstep:yx,randInt:Sx,randFloat:Mx,randFloatSpread:Ex,seededRandom:Tx,degToRad:wx,radToDeg:Ax,isPowerOfTwo:zd,ceilPowerOfTwo:Rx,floorPowerOfTwo:ic,setQuaternionFromProperEuler:bx,normalize:bt,denormalize:Ti};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*s+e.x,this.y=a*s+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,r,s,a,c,u,f,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,a,c,u,f,h)}set(e,t,r,s,a,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,a=this.elements,c=r[0],u=r[3],f=r[6],h=r[1],m=r[4],g=r[7],_=r[2],S=r[5],M=r[8],E=s[0],y=s[3],x=s[6],P=s[1],A=s[4],C=s[7],z=s[2],F=s[5],U=s[8];return a[0]=c*E+u*P+f*z,a[3]=c*y+u*A+f*F,a[6]=c*x+u*C+f*U,a[1]=h*E+m*P+g*z,a[4]=h*y+m*A+g*F,a[7]=h*x+m*C+g*U,a[2]=_*E+S*P+M*z,a[5]=_*y+S*A+M*F,a[8]=_*x+S*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*a*m+r*u*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,_=u*f-m*a,S=h*a-c*f,M=t*g+r*_+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-m*r)*E,e[2]=(u*r-s*c)*E,e[3]=_*E,e[4]=(m*t-s*f)*E,e[5]=(s*a-u*t)*E,e[6]=S*E,e[7]=(r*f-h*t)*E,e[8]=(c*t-r*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(r*f,r*h,-r*(f*c+h*u)+c+e,-s*h,s*f,-s*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new ht;function Kg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function da(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Lx(){const o=da("canvas");return o.style.display="block",o}const wm={};function aa(o){o in wm||(wm[o]=!0,console.warn(o))}const Am=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sl={[nn]:{transfer:Jl,primaries:ec,toReference:o=>o,fromReference:o=>o},[Bt]:{transfer:Ft,primaries:ec,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[oc]:{transfer:Jl,primaries:tc,toReference:o=>o.applyMatrix3(Rm),fromReference:o=>o.applyMatrix3(Am)},[Kd]:{transfer:Ft,primaries:tc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Rm),fromReference:o=>o.applyMatrix3(Am).convertLinearToSRGB()}},Px=new Set([nn,oc]),Et={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Px.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const r=Sl[e].toReference,s=Sl[t].fromReference;return s(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Sl[o].primaries},getTransfer:function(o){return o===ii?Jl:Sl[o].transfer}};function to(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function td(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class $g{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=da("canvas")),Fs.width=e.width,Fs.height=e.height;const r=Fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=to(a[c]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(to(t[r]/255)*255):t[r]=to(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nx=0;class Zg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(nd(s[c].image)):a.push(nd(s[c]))}else a=nd(s);r.url=a}return t||(e.images[this.uuid]=r),r}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$g.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ix=0;class pn extends ho{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,r=ti,s=ti,a=kn,c=as,u=ni,f=Lr,h=pn.DEFAULT_ANISOTROPY,m=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=gi(),this.name="",this.source=new Zg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===os?Bt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?os:jg}set encoding(e){aa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?Bt:ii}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Fg;pn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,a;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],S=f[5],M=f[9],E=f[2],y=f[6],x=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,C=(S+1)/2,z=(x+1)/2,F=(m+_)/4,U=(g+E)/4,ce=(M+y)/4;return A>C&&A>z?A<.01?(r=0,s=.707106781,a=.707106781):(r=Math.sqrt(A),s=F/r,a=U/r):C>z?C<.01?(r=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),r=F/s,a=ce/s):z<.01?(r=.707106781,s=.707106781,a=0):(a=Math.sqrt(z),r=U/a,s=ce/a),this.set(r,s,a,t),this}let P=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(P)<.001&&(P=1),this.x=(y-M)/P,this.y=(g-E)/P,this.z=(_-m)/P,this.w=Math.acos((h+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dx extends ho{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const s={width:e,height:t,depth:1};r.encoding!==void 0&&(aa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===os?Bt:ii),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new pn(s,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Dx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qg extends pn{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ux extends pn{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,a,c,u){let f=r[s+0],h=r[s+1],m=r[s+2],g=r[s+3];const _=a[c+0],S=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==_||h!==S||m!==M){let y=1-u;const x=f*_+h*S+m*M+g*E,P=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const z=Math.sqrt(A),F=Math.atan2(z,x*P);y=Math.sin(y*F)/z,u=Math.sin(u*F)/z}const C=u*P;if(f=f*y+_*C,h=h*y+S*C,m=m*y+M*C,g=g*y+E*C,y===1-u){const z=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=z,h*=z,m*=z,g*=z}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,s,a,c){const u=r[s],f=r[s+1],h=r[s+2],m=r[s+3],g=a[c],_=a[c+1],S=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*S-h*_,e[t+1]=f*M+m*_+h*g-u*S,e[t+2]=h*M+m*S+u*_-f*g,e[t+3]=m*M-u*g-f*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(r/2),m=u(s/2),g=u(a/2),_=f(r/2),S=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"YXZ":this._x=_*m*g+h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"ZXY":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g-_*S*M;break;case"ZYX":this._x=_*m*g-h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g+_*S*M;break;case"YZX":this._x=_*m*g+h*S*M,this._y=h*S*g+_*m*M,this._z=h*m*M-_*S*g,this._w=h*m*g-_*S*M;break;case"XZY":this._x=_*m*g-h*S*M,this._y=h*S*g-_*m*M,this._z=h*m*M+_*S*g,this._w=h*m*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=r+u+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-f)*S,this._y=(a-h)*S,this._z=(c-s)*S}else if(r>u&&r>g){const S=2*Math.sqrt(1+r-u-g);this._w=(m-f)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(a+h)/S}else if(u>g){const S=2*Math.sqrt(1+u-r-g);this._w=(a-h)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-r-u);this._w=(c-s)/S,this._x=(a+h)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+s*h-a*f,this._y=s*m+c*f+a*u-r*h,this._z=a*m+c*h+r*f-s*u,this._w=c*m-r*u-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+r*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=r,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*s+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=r*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),r*Math.sin(a),r*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*s,this.y=a[1]*t+a[4]*r+a[7]*s,this.z=a[2]*t+a[5]*r+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*s-u*r),m=2*(u*t-a*s),g=2*(a*r-c*t);return this.x=t+f*h+c*g-u*m,this.y=r+f*m+u*h-a*g,this.z=s+f*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*s,this.y=a[1]*t+a[5]*r+a[9]*s,this.z=a[2]*t+a[6]*r+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-r*f,this.z=r*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new X,bm=new Pr;class $i{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,fi):fi.fromBufferAttribute(a,c),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),El.subVectors(this.max,Zo),Os.subVectors(e.a,Zo),ks.subVectors(e.b,Zo),Bs.subVectors(e.c,Zo),xr.subVectors(ks,Os),yr.subVectors(Bs,ks),qr.subVectors(Os,Bs);let t=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-qr.z,qr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,qr.z,0,-qr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-qr.y,qr.x,0];return!rd(t,Os,ks,Bs,El)||(t=[1,0,0,0,1,0,0,0,1],!rd(t,Os,ks,Bs,El))?!1:(Tl.crossVectors(xr,yr),t=[Tl.x,Tl.y,Tl.z],rd(t,Os,ks,Bs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new X,new X,new X,new X,new X,new X,new X,new X],fi=new X,Ml=new $i,Os=new X,ks=new X,Bs=new X,xr=new X,yr=new X,qr=new X,Zo=new X,El=new X,Tl=new X,Yr=new X;function rd(o,e,t,r,s){for(let a=0,c=o.length-3;a<=c;a+=3){Yr.fromArray(o,a);const u=s.x*Math.abs(Yr.x)+s.y*Math.abs(Yr.y)+s.z*Math.abs(Yr.z),f=e.dot(Yr),h=t.dot(Yr),m=r.dot(Yr);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const Fx=new $i,Qo=new X,sd=new X;class Ai{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Fx.setFromPoints(e).getCenter(r);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(Qo,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(sd)),this.expandByPoint(Qo.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new X,od=new X,wl=new X,Sr=new X,ad=new X,Al=new X,ld=new X;class ac{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){od.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(od);const a=e.distanceTo(t)*.5,c=-this.direction.dot(wl),u=Sr.dot(this.direction),f=-Sr.dot(wl),h=Sr.lengthSq(),m=Math.abs(1-c*c);let g,_,S,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,S=g*(g+c*_+2*u)+_*(c*g+_+2*f)+h}else _=a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),S=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),S=_*(_+2*f)+h):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),S=-g*g+_*(_+2*f)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),S=-g*g+_*(_+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(od).addScaledVector(wl,_),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),s=zi.dot(zi)-r*r,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=r-c,f=r+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,a,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),r>c||a>s||((a>r||isNaN(r))&&(r=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),r>f||u>s)||((u>r||r!==r)&&(r=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,s,a){ad.subVectors(t,e),Al.subVectors(r,e),ld.crossVectors(ad,Al);let c=this.direction.dot(ld),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const f=u*this.direction.dot(Al.crossVectors(Sr,Al));if(f<0)return null;const h=u*this.direction.dot(ad.cross(Sr));if(h<0||f+h>c)return null;const m=-u*Sr.dot(ld);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,r,s,a,c,u,f,h,m,g,_,S,M,E,y){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,a,c,u,f,h,m,g,_,S,M,E,y)}set(e,t,r,s,a,c,u,f,h,m,g,_,S,M,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=S,x[7]=M,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),a=1/zs.setFromMatrixColumn(e,1).length(),c=1/zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,S=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=S+M*h,t[5]=_-E*h,t[9]=-u*f,t[2]=E-_*h,t[6]=M+S*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,S=f*g,M=h*m,E=h*g;t[0]=_+E*u,t[4]=M*u-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=S*u-M,t[6]=E+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,S=f*g,M=h*m,E=h*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,S=c*g,M=u*m,E=u*g;t[0]=f*m,t[4]=M*h-S,t[8]=_*h+E,t[1]=f*g,t[5]=E*h+_,t[9]=S*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,S=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=E-_*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=S*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*f,S=c*h,M=u*f,E=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,kx)}lookAt(e,t,r){const s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Mr.crossVectors(r,Wn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Mr.crossVectors(r,Wn)),Mr.normalize(),Rl.crossVectors(Wn,Mr),s[0]=Mr.x,s[4]=Rl.x,s[8]=Wn.x,s[1]=Mr.y,s[5]=Rl.y,s[9]=Wn.y,s[2]=Mr.z,s[6]=Rl.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,a=this.elements,c=r[0],u=r[4],f=r[8],h=r[12],m=r[1],g=r[5],_=r[9],S=r[13],M=r[2],E=r[6],y=r[10],x=r[14],P=r[3],A=r[7],C=r[11],z=r[15],F=s[0],U=s[4],ce=s[8],R=s[12],I=s[1],oe=s[5],ue=s[9],_e=s[13],H=s[2],Z=s[6],se=s[10],ae=s[14],G=s[3],$=s[7],W=s[11],N=s[15];return a[0]=c*F+u*I+f*H+h*G,a[4]=c*U+u*oe+f*Z+h*$,a[8]=c*ce+u*ue+f*se+h*W,a[12]=c*R+u*_e+f*ae+h*N,a[1]=m*F+g*I+_*H+S*G,a[5]=m*U+g*oe+_*Z+S*$,a[9]=m*ce+g*ue+_*se+S*W,a[13]=m*R+g*_e+_*ae+S*N,a[2]=M*F+E*I+y*H+x*G,a[6]=M*U+E*oe+y*Z+x*$,a[10]=M*ce+E*ue+y*se+x*W,a[14]=M*R+E*_e+y*ae+x*N,a[3]=P*F+A*I+C*H+z*G,a[7]=P*U+A*oe+C*Z+z*$,a[11]=P*ce+A*ue+C*se+z*W,a[15]=P*R+A*_e+C*ae+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],S=e[14],M=e[3],E=e[7],y=e[11],x=e[15];return M*(+a*f*g-s*h*g-a*u*_+r*h*_+s*u*S-r*f*S)+E*(+t*f*S-t*h*_+a*c*_-s*c*S+s*h*m-a*f*m)+y*(+t*h*g-t*u*S-a*c*g+r*c*S+a*u*m-r*h*m)+x*(-s*u*m-t*f*g+t*u*_+s*c*g-r*c*_+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],x=e[15],P=g*y*h-E*_*h+E*f*S-u*y*S-g*f*x+u*_*x,A=M*_*h-m*y*h-M*f*S+c*y*S+m*f*x-c*_*x,C=m*E*h-M*g*h+M*u*S-c*E*S-m*u*x+c*g*x,z=M*g*f-m*E*f-M*u*_+c*E*_+m*u*y-c*g*y,F=t*P+r*A+s*C+a*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=P*U,e[1]=(E*_*a-g*y*a-E*s*S+r*y*S+g*s*x-r*_*x)*U,e[2]=(u*y*a-E*f*a+E*s*h-r*y*h-u*s*x+r*f*x)*U,e[3]=(g*f*a-u*_*a-g*s*h+r*_*h+u*s*S-r*f*S)*U,e[4]=A*U,e[5]=(m*y*a-M*_*a+M*s*S-t*y*S-m*s*x+t*_*x)*U,e[6]=(M*f*a-c*y*a-M*s*h+t*y*h+c*s*x-t*f*x)*U,e[7]=(c*_*a-m*f*a+m*s*h-t*_*h-c*s*S+t*f*S)*U,e[8]=C*U,e[9]=(M*g*a-m*E*a-M*r*S+t*E*S+m*r*x-t*g*x)*U,e[10]=(c*E*a-M*u*a+M*r*h-t*E*h-c*r*x+t*u*x)*U,e[11]=(m*u*a-c*g*a-m*r*h+t*g*h+c*r*S-t*u*S)*U,e[12]=z*U,e[13]=(m*E*s-M*g*s+M*r*_-t*E*_-m*r*y+t*g*y)*U,e[14]=(M*u*s-c*E*s-M*r*f+t*E*f+c*r*y-t*u*y)*U,e[15]=(c*g*s-m*u*s+m*r*f-t*g*f-c*r*_+t*u*_)*U,this}scale(e){const t=this.elements,r=e.x,s=e.y,a=e.z;return t[0]*=r,t[4]*=s,t[8]*=a,t[1]*=r,t[5]*=s,t[9]*=a,t[2]*=r,t[6]*=s,t[10]*=a,t[3]*=r,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),a=1-r,c=e.x,u=e.y,f=e.z,h=a*c,m=a*u;return this.set(h*c+r,h*u-s*f,h*f+s*u,0,h*u+s*f,m*u+r,m*f-s*c,0,h*f-s*u,m*f+s*c,a*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,a,c){return this.set(1,r,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,m=c+c,g=u+u,_=a*h,S=a*m,M=a*g,E=c*m,y=c*g,x=u*g,P=f*h,A=f*m,C=f*g,z=r.x,F=r.y,U=r.z;return s[0]=(1-(E+x))*z,s[1]=(S+C)*z,s[2]=(M-A)*z,s[3]=0,s[4]=(S-C)*F,s[5]=(1-(_+x))*F,s[6]=(y+P)*F,s[7]=0,s[8]=(M+A)*U,s[9]=(y-P)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;let a=zs.set(s[0],s[1],s[2]).length();const c=zs.set(s[4],s[5],s[6]).length(),u=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],hi.copy(this);const h=1/a,m=1/c,g=1/u;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=m,hi.elements[5]*=m,hi.elements[6]*=m,hi.elements[8]*=g,hi.elements[9]*=g,hi.elements[10]*=g,t.setFromRotationMatrix(hi),r.x=a,r.y=c,r.z=u,this}makePerspective(e,t,r,s,a,c,u=qi){const f=this.elements,h=2*a/(t-e),m=2*a/(r-s),g=(t+e)/(t-e),_=(r+s)/(r-s);let S,M;if(u===qi)S=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===nc)S=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,s,a,c,u=qi){const f=this.elements,h=1/(t-e),m=1/(r-s),g=1/(c-a),_=(t+e)*h,S=(r+s)*m;let M,E;if(u===qi)M=(c+a)*g,E=-2*g;else if(u===nc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const zs=new X,hi=new pt,Ox=new X(0,0,0),kx=new X(1,1,1),Mr=new X,Rl=new X,Wn=new X,Cm=new pt,Lm=new Pr;class lc{constructor(e=0,t=0,r=0,s=lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],h=s[5],m=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Mn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lc.DEFAULT_ORDER="XYZ";class Jg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const Pm=new X,Hs=new Pr,Hi=new pt,bl=new X,Jo=new X,zx=new X,Hx=new Pr,Nm=new X(1,0,0),Im=new X(0,1,0),Dm=new X(0,0,1),Vx={type:"added"},Gx={type:"removed"};class Vt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new X,t=new lc,r=new Pr,s=new X(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ht}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Jo,bl,this.up):Hi.lookAt(bl,Jo,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const u=s[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),S=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=s,r;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new X,Vi=new X,cd=new X,Gi=new X,Vs=new X,Gs=new X,Um=new X,ud=new X,dd=new X,fd=new X;let Cl=!1;class mi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),pi.subVectors(e,t),s.cross(pi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,r,s,a){pi.subVectors(s,t),Vi.subVectors(r,t),cd.subVectors(e,t);const c=pi.dot(pi),u=pi.dot(Vi),f=pi.dot(cd),h=Vi.dot(Vi),m=Vi.dot(cd),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,S=(h*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-S-M,M,S)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,t,r,s,a,c,u,f){return Cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cl=!0),this.getInterpolation(e,t,r,s,a,c,u,f)}static getInterpolation(e,t,r,s,a,c,u,f){return this.getBarycoord(e,t,r,s,Gi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Gi.x),f.addScaledVector(c,Gi.y),f.addScaledVector(u,Gi.z),f)}static isFrontFacing(e,t,r,s){return pi.subVectors(r,t),Vi.subVectors(e,t),pi.cross(Vi).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),pi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,s,a){return Cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cl=!0),mi.getInterpolation(e,this.a,this.b,this.c,t,r,s,a)}getInterpolation(e,t,r,s,a){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,s,a)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,a=this.c;let c,u;Vs.subVectors(s,r),Gs.subVectors(a,r),ud.subVectors(e,r);const f=Vs.dot(ud),h=Gs.dot(ud);if(f<=0&&h<=0)return t.copy(r);dd.subVectors(e,s);const m=Vs.dot(dd),g=Gs.dot(dd);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(r).addScaledVector(Vs,c);fd.subVectors(e,a);const S=Vs.dot(fd),M=Gs.dot(fd);if(M>=0&&S<=M)return t.copy(a);const E=S*h-f*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Gs,u);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return Um.subVectors(a,s),u=(g-m)/(g-m+(S-M)),t.copy(s).addScaledVector(Um,u);const x=1/(y+E+_);return c=E*x,u=_*x,t.copy(r).addScaledVector(Vs,c).addScaledVector(Gs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function hd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class it{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,r,s=Et.workingColorSpace){if(e=$d(e,1),t=Mn(t,0,1),r=Mn(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=hd(c,a,e+1/3),this.g=hd(c,a,e),this.b=hd(c,a,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const r=e_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=td(e.r),this.g=td(e.g),this.b=td(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Et.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Mn(Sn.r*255,0,255))*65536+Math.round(Mn(Sn.g*255,0,255))*256+Math.round(Mn(Sn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,s=Sn.g,a=Sn.b,c=Math.max(r,s,a),u=Math.min(r,s,a);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case r:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-r)/g+2;break;case a:f=(r-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Bt){Et.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,s=Sn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(Ll);const r=oa(Er.h,Ll.h,t),s=oa(Er.s,Ll.s,t),a=oa(Er.l,Ll.l,t);return this.setHSL(r,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*s,this.g=a[1]*t+a[4]*r+a[7]*s,this.b=a[2]*t+a[5]*r+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new it;it.NAMES=e_;let Wx=0;class wi extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=eo,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Id,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Ki&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let a=0;a!==s;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new X,Pl=new gt;class tn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=kd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=bt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),s=bt(s,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kd&&(e.usage=this.usage),e}}class t_ extends tn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class n_ extends tn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yi extends tn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Xx=0;const Jn=new pt,pd=new Vt,Ws=new X,Xn=new $i,ea=new $i,un=new X;class si extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?n_:t_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ht().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ea.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(Xn.min,ea.min),Xn.expandByPoint(un),un.addVectors(Xn.max,ea.max),Xn.expandByPoint(un)):(Xn.expandByPoint(ea.min),Xn.expandByPoint(ea.max))}Xn.getCenter(r);let s=0;for(let a=0,c=e.count;a<c;a++)un.fromBufferAttribute(e,a),s=Math.max(s,r.distanceToSquared(un));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)un.fromBufferAttribute(u,h),f&&(Ws.fromBufferAttribute(e,h),un.add(Ws)),s=Math.max(s,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,s=t.position.array,a=t.normal.array,c=t.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,h=[],m=[];for(let I=0;I<u;I++)h[I]=new X,m[I]=new X;const g=new X,_=new X,S=new X,M=new gt,E=new gt,y=new gt,x=new X,P=new X;function A(I,oe,ue){g.fromArray(s,I*3),_.fromArray(s,oe*3),S.fromArray(s,ue*3),M.fromArray(c,I*2),E.fromArray(c,oe*2),y.fromArray(c,ue*2),_.sub(g),S.sub(g),E.sub(M),y.sub(M);const _e=1/(E.x*y.y-y.x*E.y);isFinite(_e)&&(x.copy(_).multiplyScalar(y.y).addScaledVector(S,-E.y).multiplyScalar(_e),P.copy(S).multiplyScalar(E.x).addScaledVector(_,-y.x).multiplyScalar(_e),h[I].add(x),h[oe].add(x),h[ue].add(x),m[I].add(P),m[oe].add(P),m[ue].add(P))}let C=this.groups;C.length===0&&(C=[{start:0,count:r.length}]);for(let I=0,oe=C.length;I<oe;++I){const ue=C[I],_e=ue.start,H=ue.count;for(let Z=_e,se=_e+H;Z<se;Z+=3)A(r[Z+0],r[Z+1],r[Z+2])}const z=new X,F=new X,U=new X,ce=new X;function R(I){U.fromArray(a,I*3),ce.copy(U);const oe=h[I];z.copy(oe),z.sub(U.multiplyScalar(U.dot(oe))).normalize(),F.crossVectors(ce,oe);const _e=F.dot(m[I])<0?-1:1;f[I*4]=z.x,f[I*4+1]=z.y,f[I*4+2]=z.z,f[I*4+3]=_e}for(let I=0,oe=C.length;I<oe;++I){const ue=C[I],_e=ue.start,H=ue.count;for(let Z=_e,se=_e+H;Z<se;Z+=3)R(r[Z+0]),R(r[Z+1]),R(r[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const s=new X,a=new X,c=new X,u=new X,f=new X,h=new X,m=new X,g=new X;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,y),u.add(m),f.add(m),h.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(f.length*m);let S=0,M=0;for(let E=0,y=f.length;E<y;E++){u.isInterleavedBufferAttribute?S=f[E]*u.data.stride+u.offset:S=f[E]*m;for(let x=0;x<m;x++)_[M++]=h[S++]}return new tn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,r=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],S=e(_,r);f.push(S)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const h=r[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,S=g.length;_<S;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fm=new pt,Kr=new ac,Nl=new Ai,Om=new X,Xs=new X,js=new X,qs=new X,md=new X,Il=new X,Dl=new gt,Ul=new gt,Fl=new gt,km=new X,Bm=new X,zm=new X,Ol=new X,kl=new X;class ri extends Vt{constructor(e=new si,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Il.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=u[f],g=a[f];m!==0&&(md.fromBufferAttribute(g,e),c?Il.addScaledVector(md,m):Il.addScaledVector(md.sub(t),m))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(a),Kr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Nl,Om)===null||Kr.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(a).invert(),Kr.copy(e.ray).applyMatrix4(Fm),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const y=_[M],x=c[y.materialIndex],P=Math.max(y.start,S.start),A=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,z=A;C<z;C+=3){const F=u.getX(C),U=u.getX(C+1),ce=u.getX(C+2);s=Bl(this,x,e,r,h,m,g,F,U,ce),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const P=u.getX(y),A=u.getX(y+1),C=u.getX(y+2);s=Bl(this,c,e,r,h,m,g,P,A,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const y=_[M],x=c[y.materialIndex],P=Math.max(y.start,S.start),A=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=P,z=A;C<z;C+=3){const F=C,U=C+1,ce=C+2;s=Bl(this,x,e,r,h,m,g,F,U,ce),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const P=y,A=y+1,C=y+2;s=Bl(this,c,e,r,h,m,g,P,A,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function jx(o,e,t,r,s,a,c,u){let f;if(e.side===Bn?f=r.intersectTriangle(c,a,s,!0,u):f=r.intersectTriangle(s,a,c,e.side===Ki,u),f===null)return null;kl.copy(u),kl.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(kl);return h<t.near||h>t.far?null:{distance:h,point:kl.clone(),object:o}}function Bl(o,e,t,r,s,a,c,u,f,h){o.getVertexPosition(u,Xs),o.getVertexPosition(f,js),o.getVertexPosition(h,qs);const m=jx(o,e,t,r,Xs,js,qs,Ol);if(m){s&&(Dl.fromBufferAttribute(s,u),Ul.fromBufferAttribute(s,f),Fl.fromBufferAttribute(s,h),m.uv=mi.getInterpolation(Ol,Xs,js,qs,Dl,Ul,Fl,new gt)),a&&(Dl.fromBufferAttribute(a,u),Ul.fromBufferAttribute(a,f),Fl.fromBufferAttribute(a,h),m.uv1=mi.getInterpolation(Ol,Xs,js,qs,Dl,Ul,Fl,new gt),m.uv2=m.uv1),c&&(km.fromBufferAttribute(c,u),Bm.fromBufferAttribute(c,f),zm.fromBufferAttribute(c,h),m.normal=mi.getInterpolation(Ol,Xs,js,qs,km,Bm,zm,new X),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new X,materialIndex:0};mi.getNormal(Xs,js,qs,g.normal),m.face=g}return m}class fa extends si{constructor(e=1,t=1,r=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,s,c,2),M("x","z","y",1,-1,e,r,-t,s,c,3),M("x","y","z",1,-1,e,t,r,s,a,4),M("x","y","z",-1,-1,e,t,-r,s,a,5),this.setIndex(f),this.setAttribute("position",new Yi(h,3)),this.setAttribute("normal",new Yi(m,3)),this.setAttribute("uv",new Yi(g,2));function M(E,y,x,P,A,C,z,F,U,ce,R){const I=C/U,oe=z/ce,ue=C/2,_e=z/2,H=F/2,Z=U+1,se=ce+1;let ae=0,G=0;const $=new X;for(let W=0;W<se;W++){const N=W*oe-_e;for(let V=0;V<Z;V++){const j=V*I-ue;$[E]=j*P,$[y]=N*A,$[x]=H,h.push($.x,$.y,$.z),$[E]=0,$[y]=0,$[x]=F>0?1:-1,m.push($.x,$.y,$.z),g.push(V/U),g.push(1-W/ce),ae+=1}}for(let W=0;W<ce;W++)for(let N=0;N<U;N++){const V=_+N+Z*W,j=_+N+Z*(W+1),ee=_+(N+1)+Z*(W+1),fe=_+(N+1)+Z*W;f.push(V,j,fe),f.push(j,ee,fe),G+=6}u.addGroup(S,G,R),S+=G,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(o){const e={};for(const t in o){e[t]={};for(const r in o[t]){const s=o[t][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone():Array.isArray(s)?e[t][r]=s.slice():e[t][r]=s}}return e}function bn(o){const e={};for(let t=0;t<o.length;t++){const r=co(o[t]);for(const s in r)e[s]=r[s]}return e}function qx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function i_(o){return o.getRenderTarget()===null?o.outputColorSpace:Et.workingColorSpace}const Yx={clone:co,merge:bn};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class r_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends r_{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*r/h,s*=c.width/f,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,Ks=1;class Zx extends Vt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Ys,Ks,e,t);s.layers=this.layers,this.add(s);const a=new Cn(Ys,Ks,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Ys,Ks,e,t);c.layers=this.layers,this.add(c);const u=new Cn(Ys,Ks,e,t);u.layers=this.layers,this.add(u);const f=new Cn(Ys,Ks,e,t);f.layers=this.layers,this.add(f);const h=new Cn(Ys,Ks,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===nc)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,s),e.render(t,a),e.setRenderTarget(r,1,s),e.render(t,c),e.setRenderTarget(r,2,s),e.render(t,u),e.setRenderTarget(r,3,s),e.render(t,f),e.setRenderTarget(r,4,s),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,s),e.render(t,m),e.setRenderTarget(g,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class s_ extends pn{constructor(e,t,r,s,a,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:io,super(e,t,r,s,a,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];t.encoding!==void 0&&(aa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===os?Bt:ii),this.texture=new s_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fa(5,5,5),a=new cs({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:br});a.uniforms.tEquirect.value=t;const c=new ri(s,a),u=t.minFilter;return t.minFilter===as&&(t.minFilter=kn),new Zx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,s);e.setRenderTarget(a)}}const gd=new X,Jx=new X,ey=new ht;class Qr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=gd.subVectors(r,t).cross(Jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ey.getNormalMatrix(e),s=this.coplanarPoint(gd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Ai,zl=new X;class Zd{constructor(e=new Qr,t=new Qr,r=new Qr,s=new Qr,a=new Qr,c=new Qr){this.planes=[e,t,r,s,a,c]}set(e,t,r,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],h=s[4],m=s[5],g=s[6],_=s[7],S=s[8],M=s[9],E=s[10],y=s[11],x=s[12],P=s[13],A=s[14],C=s[15];if(r[0].setComponents(f-a,_-h,y-S,C-x).normalize(),r[1].setComponents(f+a,_+h,y+S,C+x).normalize(),r[2].setComponents(f+c,_+m,y+M,C+P).normalize(),r[3].setComponents(f-c,_-m,y-M,C-P).normalize(),r[4].setComponents(f-u,_-g,y-E,C-A).normalize(),t===qi)r[5].setComponents(f+u,_+g,y+E,C+A).normalize();else if(t===nc)r[5].setComponents(u,g,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(zl.x=s.normal.x>0?e.max.x:e.min.x,zl.y=s.normal.y>0?e.max.y:e.min.y,zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o_(){let o=null,e=!1,t=null,r=null;function s(a,c){t(a,c),r=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(r=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function ty(o,e){const t=e.isWebGL2,r=new WeakMap;function s(h,m){const g=h.array,_=h.usage,S=g.byteLength,M=o.createBuffer();o.bindBuffer(m,M),o.bufferData(m,g,_),h.onUploadCallback();let E;if(g instanceof Float32Array)E=o.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=o.SHORT;else if(g instanceof Uint32Array)E=o.UNSIGNED_INT;else if(g instanceof Int32Array)E=o.INT;else if(g instanceof Int8Array)E=o.BYTE;else if(g instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:S}}function a(h,m,g){const _=m.array,S=m._updateRange,M=m.updateRanges;if(o.bindBuffer(g,h),S.count===-1&&M.length===0&&o.bufferSubData(g,0,_),M.length!==0){for(let E=0,y=M.length;E<y;E++){const x=M[E];t?o.bufferSubData(g,x.start*_.BYTES_PER_ELEMENT,_,x.start,x.count):o.bufferSubData(g,x.start*_.BYTES_PER_ELEMENT,_.subarray(x.start,x.start+x.count))}m.clearUpdateRanges()}S.count!==-1&&(t?o.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):o.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=r.get(h);m&&(o.deleteBuffer(m.buffer),r.delete(h))}function f(h,m){if(h.isGLBufferAttribute){const _=r.get(h);(!_||_.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=r.get(h);if(g===void 0)r.set(h,s(h,m));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(g.buffer,h,m),g.version=h.version}}return{get:c,remove:u,update:f}}class Qd extends si{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(r),f=Math.floor(s),h=u+1,m=f+1,g=e/u,_=t/f,S=[],M=[],E=[],y=[];for(let x=0;x<m;x++){const P=x*_-c;for(let A=0;A<h;A++){const C=A*g-a;M.push(C,-P,0),E.push(0,0,1),y.push(A/u),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let P=0;P<u;P++){const A=P+h*x,C=P+h*(x+1),z=P+1+h*(x+1),F=P+1+h*x;S.push(A,C,F),S.push(C,z,F)}this.setIndex(S),this.setAttribute("position",new Yi(M,3)),this.setAttribute("normal",new Yi(E,3)),this.setAttribute("uv",new Yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ry=`vec3 transformedNormal = objectNormal;
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
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`
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
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eS=`PhysicalMaterial material;
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
#endif`,tS=`struct PhysicalMaterial {
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
}`,nS=`
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fS=`#if defined( USE_POINTS_UV )
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
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TS=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,cM=`#define DISTANCE
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
}`,uM=`#define DISTANCE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,MM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,TM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,RM=`#define TOON
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
}`,bM=`#define TOON
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
}`,CM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:dy,begin_vertex:fy,beginnormal_vertex:hy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:yy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:Ty,common:wy,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Ry,displacementmap_pars_vertex:by,displacementmap_vertex:Cy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Py,colorspace_fragment:Ny,colorspace_pars_fragment:Iy,envmap_fragment:Dy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Ky,envmap_vertex:ky,fog_vertex:By,fog_pars_vertex:zy,fog_fragment:Hy,fog_pars_fragment:Vy,gradientmap_pars_fragment:Gy,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:$y,lights_toon_pars_fragment:Zy,lights_phong_fragment:Qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:eS,lights_physical_pars_fragment:tS,lights_fragment_begin:nS,lights_fragment_maps:iS,lights_fragment_end:rS,logdepthbuf_fragment:sS,logdepthbuf_pars_fragment:oS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:lS,map_fragment:cS,map_pars_fragment:uS,map_particle_fragment:dS,map_particle_pars_fragment:fS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:_S,morphtarget_vertex:vS,normal_fragment_begin:xS,normal_fragment_maps:yS,normal_pars_fragment:SS,normal_pars_vertex:MS,normal_vertex:ES,normalmap_pars_fragment:TS,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:RS,iridescence_pars_fragment:bS,opaque_fragment:CS,packing:LS,premultiplied_alpha_fragment:PS,project_vertex:NS,dithering_fragment:IS,dithering_pars_fragment:DS,roughnessmap_fragment:US,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:kS,shadowmap_vertex:BS,shadowmask_pars_fragment:zS,skinbase_vertex:HS,skinning_pars_vertex:VS,skinning_vertex:GS,skinnormal_vertex:WS,specularmap_fragment:XS,specularmap_pars_fragment:jS,tonemapping_fragment:qS,tonemapping_pars_fragment:YS,transmission_fragment:KS,transmission_pars_fragment:$S,uv_pars_fragment:ZS,uv_pars_vertex:QS,uv_vertex:JS,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distanceRGBA_vert:cM,distanceRGBA_frag:uM,equirect_vert:dM,equirect_frag:fM,linedashed_vert:hM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:vM,meshmatcap_vert:xM,meshmatcap_frag:yM,meshnormal_vert:SM,meshnormal_frag:MM,meshphong_vert:EM,meshphong_frag:TM,meshphysical_vert:wM,meshphysical_frag:AM,meshtoon_vert:RM,meshtoon_frag:bM,points_vert:CM,points_frag:LM,shadow_vert:PM,shadow_frag:NM,sprite_vert:IM,sprite_frag:DM},we={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Mi={basic:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:bn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:bn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new it(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:bn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:bn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:bn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:bn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:bn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:bn([we.lights,we.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Mi.physical={uniforms:bn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Hl={r:0,b:0,g:0};function UM(o,e,t,r,s,a,c){const u=new it(0);let f=a===!0?0:1,h,m,g=null,_=0,S=null;function M(y,x){let P=!1,A=x.isScene===!0?x.background:null;A&&A.isTexture&&(A=(x.backgroundBlurriness>0?t:e).get(A)),A===null?E(u,f):A&&A.isColor&&(E(A,1),P=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?r.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===sc)?(m===void 0&&(m=new ri(new fa(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:co(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,m.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,(g!==A||_!==A.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,S=o.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new ri(new Qd(2,2),new cs({name:"BackgroundMaterial",uniforms:co(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Et.getTransfer(A.colorSpace)!==Ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||S!==o.toneMapping)&&(h.material.needsUpdate=!0,g=A,_=A.version,S=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function E(y,x){y.getRGB(Hl,i_(o)),r.buffers.color.setClear(Hl.r,Hl.g,Hl.b,x,c)}return{getClearColor:function(){return u},setClearColor:function(y,x=1){u.set(y),f=x,E(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(y){f=y,E(u,f)},render:M}}function FM(o,e,t,r){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),c=r.isWebGL2||a!==null,u={},f=y(null);let h=f,m=!1;function g(H,Z,se,ae,G){let $=!1;if(c){const W=E(ae,se,Z);h!==W&&(h=W,S(h.object)),$=x(H,ae,se,G),$&&P(H,ae,se,G)}else{const W=Z.wireframe===!0;(h.geometry!==ae.id||h.program!==se.id||h.wireframe!==W)&&(h.geometry=ae.id,h.program=se.id,h.wireframe=W,$=!0)}G!==null&&t.update(G,o.ELEMENT_ARRAY_BUFFER),($||m)&&(m=!1,ce(H,Z,se,ae),G!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function _(){return r.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function S(H){return r.isWebGL2?o.bindVertexArray(H):a.bindVertexArrayOES(H)}function M(H){return r.isWebGL2?o.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function E(H,Z,se){const ae=se.wireframe===!0;let G=u[H.id];G===void 0&&(G={},u[H.id]=G);let $=G[Z.id];$===void 0&&($={},G[Z.id]=$);let W=$[ae];return W===void 0&&(W=y(_()),$[ae]=W),W}function y(H){const Z=[],se=[],ae=[];for(let G=0;G<s;G++)Z[G]=0,se[G]=0,ae[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:ae,object:H,attributes:{},index:null}}function x(H,Z,se,ae){const G=h.attributes,$=Z.attributes;let W=0;const N=se.getAttributes();for(const V in N)if(N[V].location>=0){const ee=G[V];let fe=$[V];if(fe===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(fe=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(fe=H.instanceColor)),ee===void 0||ee.attribute!==fe||fe&&ee.data!==fe.data)return!0;W++}return h.attributesNum!==W||h.index!==ae}function P(H,Z,se,ae){const G={},$=Z.attributes;let W=0;const N=se.getAttributes();for(const V in N)if(N[V].location>=0){let ee=$[V];ee===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor));const fe={};fe.attribute=ee,ee&&ee.data&&(fe.data=ee.data),G[V]=fe,W++}h.attributes=G,h.attributesNum=W,h.index=ae}function A(){const H=h.newAttributes;for(let Z=0,se=H.length;Z<se;Z++)H[Z]=0}function C(H){z(H,0)}function z(H,Z){const se=h.newAttributes,ae=h.enabledAttributes,G=h.attributeDivisors;se[H]=1,ae[H]===0&&(o.enableVertexAttribArray(H),ae[H]=1),G[H]!==Z&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Z),G[H]=Z)}function F(){const H=h.newAttributes,Z=h.enabledAttributes;for(let se=0,ae=Z.length;se<ae;se++)Z[se]!==H[se]&&(o.disableVertexAttribArray(se),Z[se]=0)}function U(H,Z,se,ae,G,$,W){W===!0?o.vertexAttribIPointer(H,Z,se,G,$):o.vertexAttribPointer(H,Z,se,ae,G,$)}function ce(H,Z,se,ae){if(r.isWebGL2===!1&&(H.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const G=ae.attributes,$=se.getAttributes(),W=Z.defaultAttributeValues;for(const N in $){const V=$[N];if(V.location>=0){let j=G[N];if(j===void 0&&(N==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),N==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),j!==void 0){const ee=j.normalized,fe=j.itemSize,Se=t.get(j);if(Se===void 0)continue;const Ee=Se.buffer,be=Se.type,Ie=Se.bytesPerElement,ke=r.isWebGL2===!0&&(be===o.INT||be===o.UNSIGNED_INT||j.gpuType===kg);if(j.isInterleavedBufferAttribute){const dt=j.data,te=dt.stride,Yt=j.offset;if(dt.isInstancedInterleavedBuffer){for(let We=0;We<V.locationSize;We++)z(V.location+We,dt.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let We=0;We<V.locationSize;We++)C(V.location+We);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let We=0;We<V.locationSize;We++)U(V.location+We,fe/V.locationSize,be,ee,te*Ie,(Yt+fe/V.locationSize*We)*Ie,ke)}else{if(j.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)z(V.location+dt,j.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<V.locationSize;dt++)C(V.location+dt);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let dt=0;dt<V.locationSize;dt++)U(V.location+dt,fe/V.locationSize,be,ee,fe*Ie,fe/V.locationSize*dt*Ie,ke)}}else if(W!==void 0){const ee=W[N];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(V.location,ee);break;case 3:o.vertexAttrib3fv(V.location,ee);break;case 4:o.vertexAttrib4fv(V.location,ee);break;default:o.vertexAttrib1fv(V.location,ee)}}}}F()}function R(){ue();for(const H in u){const Z=u[H];for(const se in Z){const ae=Z[se];for(const G in ae)M(ae[G].object),delete ae[G];delete Z[se]}delete u[H]}}function I(H){if(u[H.id]===void 0)return;const Z=u[H.id];for(const se in Z){const ae=Z[se];for(const G in ae)M(ae[G].object),delete ae[G];delete Z[se]}delete u[H.id]}function oe(H){for(const Z in u){const se=u[Z];if(se[H.id]===void 0)continue;const ae=se[H.id];for(const G in ae)M(ae[G].object),delete ae[G];delete se[H.id]}}function ue(){_e(),m=!0,h!==f&&(h=f,S(h.object))}function _e(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:_e,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:oe,initAttributes:A,enableAttribute:C,disableUnusedAttributes:F}}function OM(o,e,t,r){const s=r.isWebGL2;let a;function c(m){a=m}function u(m,g){o.drawArrays(a,m,g),t.update(g,a,1)}function f(m,g,_){if(_===0)return;let S,M;if(s)S=o,M="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](a,m,g,_),t.update(g,a,_)}function h(m,g,_){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<_;M++)this.render(m[M],g[M]);else{S.multiDrawArraysWEBGL(a,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];t.update(M,a,1)}}this.setMode=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function kM(o,e,t){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const f=a(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=c||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),x=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=c||e.has("OES_texture_float"),z=A&&C,F=c?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:C,floatVertexTextures:z,maxSamples:F}}function BM(o){const e=this;let t=null,r=0,s=!1,a=!1;const c=new Qr,u=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||s;return s=_,r=g.length,S},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!y)a?m(null):h();else{const P=a?0:r,A=P*4;let C=x.clippingState||null;f.value=C,C=m(M,_,A,S);for(let z=0;z!==A;++z)C[z]=t[z];x.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=f.value,M!==!0||y===null){const x=S+E*4,P=_.matrixWorldInverse;u.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let A=0,C=S;A!==E;++A,C+=4)c.copy(g[A]).applyMatrix4(P,u),c.normal.toArray(y,C),y[C+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function zM(o){let e=new WeakMap;function t(c,u){return u===Dd?c.mapping=io:u===Ud&&(c.mapping=ro),c}function r(c){if(c&&c.isTexture){const u=c.mapping;if(u===Dd||u===Ud)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new Qx(f.height/2);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Jd extends r_{constructor(e=-1,t=1,r=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=4,Hm=[.125,.215,.35,.446,.526,.582],ts=20,_d=new Jd,Vm=new it;let vd=null,xd=0,yd=0;const Jr=(1+Math.sqrt(5))/2,$s=1/Jr,Gm=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Jr,$s),new X(0,Jr,-$s),new X($s,0,Jr),new X(-$s,0,Jr),new X(Jr,$s,0),new X(-Jr,$s,0)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,s=100){vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,xd,yd),e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ca,format:ni,colorSpace:nn,depthBuffer:!1},s=Xm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(a)),this._blurMaterial=VM(a,e,t)}return s}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,_d)}_sceneToCubeUV(e,t,r,s){const u=new Cn(90,1,t,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Vm),m.toneMapping=Cr,m.autoClear=!1;const S=new ns({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new ri(new fa,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Vm),E=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):P===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const A=this._cubeSize;Vl(s,P*A,x>2?A:0,A,A),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,s=e.mapping===io||e.mapping===ro;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new ri(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Vl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,_d)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Gm[(s-1)%Gm.length];this._blur(e,s-1,s,a,c)}t.autoClear=r}_blur(e,t,r,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,s,"latitudinal",a),this._halfBlur(c,e,r,r,s,"longitudinal",a)}_halfBlur(e,t,r,s,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ri(this._lodPlanes[s],h),_=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*ts-1),E=a/M,y=isFinite(a)?1+Math.floor(m*E):ts;y>ts&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const x=[];let P=0;for(let U=0;U<ts;++U){const ce=U/E,R=Math.exp(-ce*ce/2);x.push(R),U===0?P+=R:U<y&&(P+=2*R)}for(let U=0;U<x.length;U++)x[U]=x[U]/P;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:A}=this;_.dTheta.value=M,_.mipInt.value=A-r;const C=this._sizeLods[s],z=3*C*(s>A-Qs?s-A+Qs:0),F=4*(this._cubeSize-C);Vl(t,z,F,3*C,2*C),f.setRenderTarget(t),f.render(g,_d)}}function HM(o){const e=[],t=[],r=[];let s=o;const a=o-Qs+1+Hm.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-Qs?f=Hm[c-o+Qs-1]:c===0&&(f=0),r.push(f);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,y=2,x=1,P=new Float32Array(E*M*S),A=new Float32Array(y*M*S),C=new Float32Array(x*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,ce=F>2?0:-1,R=[U,ce,0,U+2/3,ce,0,U+2/3,ce+1,0,U,ce,0,U+2/3,ce+1,0,U,ce+1,0];P.set(R,E*M*F),A.set(_,y*M*F);const I=[F,F,F,F,F,F];C.set(I,x*M*F)}const z=new si;z.setAttribute("position",new tn(P,E)),z.setAttribute("uv",new tn(A,y)),z.setAttribute("faceIndex",new tn(C,x)),e.push(z),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Xm(o,e,t){const r=new ls(o,e,t);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vl(o,e,t,r,s){o.viewport.set(e,t,r,s),o.scissor.set(e,t,r,s)}function VM(o,e,t){const r=new Float32Array(ts),s=new X(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function jm(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function qm(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function GM(o){let e=new WeakMap,t=null;function r(u){if(u&&u.isTexture){const f=u.mapping,h=f===Dd||f===Ud,m=f===io||f===ro;if(h||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return t===null&&(t=new Wm(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(h&&g&&g.height>0||m&&g&&s(g)){t===null&&(t=new Wm(o));const _=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",a),_.texture}else return null}}}return u}function s(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function WM(o){const e={};function t(r){if(e[r]!==void 0)return e[r];let s;switch(r){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(r)}return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const s=t(r);return s===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function XM(o,e,t,r){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let y=0,x=E.length;y<x;y++)e.remove(E[y])}_.removeEventListener("dispose",c),delete s[_.id];const S=a.get(_);S&&(e.remove(S),a.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const E=S[M];for(let y=0,x=E.length;y<x;y++)e.update(E[y],o.ARRAY_BUFFER)}}function h(g){const _=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const P=S.array;E=S.version;for(let A=0,C=P.length;A<C;A+=3){const z=P[A+0],F=P[A+1],U=P[A+2];_.push(z,F,F,U,U,z)}}else if(M!==void 0){const P=M.array;E=M.version;for(let A=0,C=P.length/3-1;A<C;A+=3){const z=A+0,F=A+1,U=A+2;_.push(z,F,F,U,U,z)}}else return;const y=new(Kg(_)?n_:t_)(_,1);y.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,y)}function m(g){const _=a.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function jM(o,e,t,r){const s=r.isWebGL2;let a;function c(S){a=S}let u,f;function h(S){u=S.type,f=S.bytesPerElement}function m(S,M){o.drawElements(a,M,u,S*f),t.update(M,a,1)}function g(S,M,E){if(E===0)return;let y,x;if(s)y=o,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](a,M,u,S*f,E),t.update(M,a,E)}function _(S,M,E){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<E;x++)this.render(S[x]/f,M[x]);else{y.multiDrawElementsWEBGL(a,M,0,u,S,0,E);let x=0;for(let P=0;P<E;P++)x+=M[P];t.update(x,a,1)}}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=g,this.renderMultiDraw=_}function qM(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function YM(o,e){return o[0]-e[0]}function KM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function $M(o,e,t){const r={},s=new Float32Array(8),a=new WeakMap,c=new Lt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function f(h,m,g){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=M!==void 0?M.length:0;let y=a.get(m);if(y===void 0||y.count!==E){let Z=function(){_e.dispose(),a.delete(m),m.removeEventListener("dispose",Z)};var S=Z;y!==void 0&&y.texture.dispose();const A=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,z=m.morphAttributes.color!==void 0,F=m.morphAttributes.position||[],U=m.morphAttributes.normal||[],ce=m.morphAttributes.color||[];let R=0;A===!0&&(R=1),C===!0&&(R=2),z===!0&&(R=3);let I=m.attributes.position.count*R,oe=1;I>e.maxTextureSize&&(oe=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ue=new Float32Array(I*oe*4*E),_e=new Qg(ue,I,oe,E);_e.type=ji,_e.needsUpdate=!0;const H=R*4;for(let se=0;se<E;se++){const ae=F[se],G=U[se],$=ce[se],W=I*oe*4*se;for(let N=0;N<ae.count;N++){const V=N*H;A===!0&&(c.fromBufferAttribute(ae,N),ue[W+V+0]=c.x,ue[W+V+1]=c.y,ue[W+V+2]=c.z,ue[W+V+3]=0),C===!0&&(c.fromBufferAttribute(G,N),ue[W+V+4]=c.x,ue[W+V+5]=c.y,ue[W+V+6]=c.z,ue[W+V+7]=0),z===!0&&(c.fromBufferAttribute($,N),ue[W+V+8]=c.x,ue[W+V+9]=c.y,ue[W+V+10]=c.z,ue[W+V+11]=$.itemSize===4?c.w:1)}}y={count:E,texture:_e,size:new gt(I,oe)},a.set(m,y),m.addEventListener("dispose",Z)}let x=0;for(let A=0;A<_.length;A++)x+=_[A];const P=m.morphTargetsRelative?1:1-x;g.getUniforms().setValue(o,"morphTargetBaseInfluence",P),g.getUniforms().setValue(o,"morphTargetInfluences",_),g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,t),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}else{const M=_===void 0?0:_.length;let E=r[m.id];if(E===void 0||E.length!==M){E=[];for(let C=0;C<M;C++)E[C]=[C,0];r[m.id]=E}for(let C=0;C<M;C++){const z=E[C];z[0]=C,z[1]=_[C]}E.sort(KM);for(let C=0;C<8;C++)C<M&&E[C][1]?(u[C][0]=E[C][0],u[C][1]=E[C][1]):(u[C][0]=Number.MAX_SAFE_INTEGER,u[C][1]=0);u.sort(YM);const y=m.morphAttributes.position,x=m.morphAttributes.normal;let P=0;for(let C=0;C<8;C++){const z=u[C],F=z[0],U=z[1];F!==Number.MAX_SAFE_INTEGER&&U?(y&&m.getAttribute("morphTarget"+C)!==y[F]&&m.setAttribute("morphTarget"+C,y[F]),x&&m.getAttribute("morphNormal"+C)!==x[F]&&m.setAttribute("morphNormal"+C,x[F]),s[C]=U,P+=U):(y&&m.hasAttribute("morphTarget"+C)===!0&&m.deleteAttribute("morphTarget"+C),x&&m.hasAttribute("morphNormal"+C)===!0&&m.deleteAttribute("morphNormal"+C),s[C]=0)}const A=m.morphTargetsRelative?1:1-P;g.getUniforms().setValue(o,"morphTargetBaseInfluence",A),g.getUniforms().setValue(o,"morphTargetInfluences",s)}}return{update:f}}function ZM(o,e,t,r){let s=new WeakMap;function a(f){const h=r.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class a_ extends pn{constructor(e,t,r,s,a,c,u,f,h,m){if(m=m!==void 0?m:ss,m!==ss&&m!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===ss&&(r=Ar),r===void 0&&m===oo&&(r=rs),super(null,s,a,c,u,f,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:dn,this.minFilter=f!==void 0?f:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const l_=new pn,c_=new a_(1,1);c_.compareFunction=Yg;const u_=new Qg,d_=new Ux,f_=new s_,Ym=[],Km=[],$m=new Float32Array(16),Zm=new Float32Array(9),Qm=new Float32Array(4);function po(o,e,t){const r=o[0];if(r<=0||r>0)return o;const s=e*t;let a=Ym[s];if(a===void 0&&(a=new Float32Array(s),Ym[s]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function rn(o,e){if(o.length!==e.length)return!1;for(let t=0,r=o.length;t<r;t++)if(o[t]!==e[t])return!1;return!0}function sn(o,e){for(let t=0,r=e.length;t<r;t++)o[t]=e[t]}function cc(o,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let r=0;r!==e;++r)t[r]=o.allocateTextureUnit();return t}function QM(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function JM(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2fv(this.addr,e),sn(t,e)}}function eE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;o.uniform3fv(this.addr,e),sn(t,e)}}function tE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4fv(this.addr,e),sn(t,e)}}function nE(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Qm.set(r),o.uniformMatrix2fv(this.addr,!1,Qm),sn(t,r)}}function iE(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;Zm.set(r),o.uniformMatrix3fv(this.addr,!1,Zm),sn(t,r)}}function rE(o,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;$m.set(r),o.uniformMatrix4fv(this.addr,!1,$m),sn(t,r)}}function sE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function oE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2iv(this.addr,e),sn(t,e)}}function aE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3iv(this.addr,e),sn(t,e)}}function lE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4iv(this.addr,e),sn(t,e)}}function cE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function uE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;o.uniform2uiv(this.addr,e),sn(t,e)}}function dE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;o.uniform3uiv(this.addr,e),sn(t,e)}}function fE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;o.uniform4uiv(this.addr,e),sn(t,e)}}function hE(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s);const a=this.type===o.SAMPLER_2D_SHADOW?c_:l_;t.setTexture2D(e||a,s)}function pE(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||d_,s)}function mE(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.setTextureCube(e||f_,s)}function gE(o,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||u_,s)}function _E(o){switch(o){case 5126:return QM;case 35664:return JM;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return aE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return dE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}function vE(o,e){o.uniform1fv(this.addr,e)}function xE(o,e){const t=po(e,this.size,2);o.uniform2fv(this.addr,t)}function yE(o,e){const t=po(e,this.size,3);o.uniform3fv(this.addr,t)}function SE(o,e){const t=po(e,this.size,4);o.uniform4fv(this.addr,t)}function ME(o,e){const t=po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function EE(o,e){const t=po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function TE(o,e){const t=po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function wE(o,e){o.uniform1iv(this.addr,e)}function AE(o,e){o.uniform2iv(this.addr,e)}function RE(o,e){o.uniform3iv(this.addr,e)}function bE(o,e){o.uniform4iv(this.addr,e)}function CE(o,e){o.uniform1uiv(this.addr,e)}function LE(o,e){o.uniform2uiv(this.addr,e)}function PE(o,e){o.uniform3uiv(this.addr,e)}function NE(o,e){o.uniform4uiv(this.addr,e)}function IE(o,e,t){const r=this.cache,s=e.length,a=cc(t,s);rn(r,a)||(o.uniform1iv(this.addr,a),sn(r,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||l_,a[c])}function DE(o,e,t){const r=this.cache,s=e.length,a=cc(t,s);rn(r,a)||(o.uniform1iv(this.addr,a),sn(r,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||d_,a[c])}function UE(o,e,t){const r=this.cache,s=e.length,a=cc(t,s);rn(r,a)||(o.uniform1iv(this.addr,a),sn(r,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||f_,a[c])}function FE(o,e,t){const r=this.cache,s=e.length,a=cc(t,s);rn(r,a)||(o.uniform1iv(this.addr,a),sn(r,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||u_,a[c])}function OE(o){switch(o){case 5126:return vE;case 35664:return xE;case 35665:return yE;case 35666:return SE;case 35674:return ME;case 35675:return EE;case 35676:return TE;case 5124:case 35670:return wE;case 35667:case 35671:return AE;case 35668:case 35672:return RE;case 35669:case 35673:return bE;case 5125:return CE;case 36294:return LE;case 36295:return PE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return FE}}class kE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_E(t.type)}}class BE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OE(t.type)}}class zE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Jm(o,e){o.seq.push(e),o.map[e.id]=e}function HE(o,e,t){const r=o.name,s=r.length;for(Sd.lastIndex=0;;){const a=Sd.exec(r),c=Sd.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===s){Jm(t,h===void 0?new kE(u,o,e):new BE(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new zE(u),Jm(t,g)),t=g}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);HE(a,c,this)}}setValue(e,t,r,s){const a=this.map[t];a!==void 0&&a.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=r[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&r.push(c)}return r}}function eg(o,e,t){const r=o.createShader(e);return o.shaderSource(r,t),o.compileShader(r),r}const VE=37297;let GE=0;function WE(o,e){const t=o.split(`
`),r=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}function XE(o){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(o);let r;switch(e===t?r="":e===tc&&t===ec?r="LinearDisplayP3ToLinearSRGB":e===ec&&t===tc&&(r="LinearSRGBToLinearDisplayP3"),o){case nn:case oc:return[r,"LinearTransferOETF"];case Bt:case Kd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function tg(o,e,t){const r=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(r&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WE(o.getShaderSource(e),c)}else return s}function jE(o,e){const t=XE(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qE(o,e){let t;switch(e){case V0:t="Linear";break;case G0:t="Reinhard";break;case W0:t="OptimizedCineon";break;case X0:t="ACESFilmic";break;case q0:t="AgX";break;case j0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function YE(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function KE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function $E(o){const e=[];for(const t in o){const r=o[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZE(o,e){const t={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function Js(o){return o!==""}function ng(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(QE,eT)}const JE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eT(o,e){let t=ct[e];if(t===void 0){const r=JE.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(t)}const tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(o){return o.replace(tT,nT)}function nT(o,e,t,r){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function sg(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function rT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function oT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ug:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function aT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function lT(o,e,t,r){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=iT(t),h=rT(t),m=sT(t),g=oT(t),_=aT(t),S=t.isWebGL2?"":YE(t),M=KE(t),E=$E(a),y=s.createProgram();let x,P,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Js).join(`
`),x.length>0&&(x+=`
`),P=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Js).join(`
`),P.length>0&&(P+=`
`)):(x=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),P=[S,sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Cr?qE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,jE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),c=Hd(c),c=ng(c,t),c=ig(c,t),u=Hd(u),u=ng(u,t),u=ig(u,t),c=rg(c),u=rg(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const C=A+x+c,z=A+P+u,F=eg(s,s.VERTEX_SHADER,C),U=eg(s,s.FRAGMENT_SHADER,z);s.attachShader(y,F),s.attachShader(y,U),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function ce(ue){if(o.debug.checkShaderErrors){const _e=s.getProgramInfoLog(y).trim(),H=s.getShaderInfoLog(F).trim(),Z=s.getShaderInfoLog(U).trim();let se=!0,ae=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,y,F,U);else{const G=tg(s,F,"vertex"),$=tg(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+G+`
`+$)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(H===""||Z==="")&&(ae=!1);ae&&(ue.diagnostics={runnable:se,programLog:_e,vertexShader:{log:H,prefix:x},fragmentShader:{log:Z,prefix:P}})}s.deleteShader(F),s.deleteShader(U),R=new $l(s,y),I=ZE(s,y)}let R;this.getUniforms=function(){return R===void 0&&ce(this),R};let I;this.getAttributes=function(){return I===void 0&&ce(this),I};let oe=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=s.getProgramParameter(y,VE)),oe},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=U,this}let cT=0;class uT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dT(e),t.set(e,r)),r}}class dT{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}}function fT(o,e,t,r,s,a,c){const u=new Jg,f=new uT,h=[],m=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let S=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function y(R,I,oe,ue,_e){const H=ue.fog,Z=_e.geometry,se=R.isMeshStandardMaterial?ue.environment:null,ae=(R.isMeshStandardMaterial?t:e).get(R.envMap||se),G=ae&&ae.mapping===sc?ae.image.height:null,$=M[R.type];R.precision!==null&&(S=s.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const W=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,N=W!==void 0?W.length:0;let V=0;Z.morphAttributes.position!==void 0&&(V=1),Z.morphAttributes.normal!==void 0&&(V=2),Z.morphAttributes.color!==void 0&&(V=3);let j,ee,fe,Se;if($){const on=Mi[$];j=on.vertexShader,ee=on.fragmentShader}else j=R.vertexShader,ee=R.fragmentShader,f.update(R),fe=f.getVertexShaderID(R),Se=f.getFragmentShaderID(R);const Ee=o.getRenderTarget(),be=_e.isInstancedMesh===!0,Ie=_e.isBatchedMesh===!0,ke=!!R.map,dt=!!R.matcap,te=!!ae,Yt=!!R.aoMap,We=!!R.lightMap,et=!!R.bumpMap,ze=!!R.normalMap,Ct=!!R.displacementMap,rt=!!R.emissiveMap,L=!!R.metalnessMap,w=!!R.roughnessMap,Q=R.anisotropy>0,ve=R.clearcoat>0,me=R.iridescence>0,xe=R.sheen>0,He=R.transmission>0,Re=Q&&!!R.anisotropyMap,De=ve&&!!R.clearcoatMap,Xe=ve&&!!R.clearcoatNormalMap,st=ve&&!!R.clearcoatRoughnessMap,pe=me&&!!R.iridescenceMap,_t=me&&!!R.iridescenceThicknessMap,ut=xe&&!!R.sheenColorMap,Qe=xe&&!!R.sheenRoughnessMap,Ge=!!R.specularMap,Fe=!!R.specularColorMap,tt=!!R.specularIntensityMap,xt=He&&!!R.transmissionMap,Pt=He&&!!R.thicknessMap,ot=!!R.gradientMap,Me=!!R.alphaMap,k=R.alphaTest>0,Te=!!R.alphaHash,Ae=!!R.extensions,$e=!!Z.attributes.uv1,je=!!Z.attributes.uv2,Tt=!!Z.attributes.uv3;let wt=Cr;return R.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(wt=o.toneMapping),{isWebGL2:m,shaderID:$,shaderType:R.type,shaderName:R.name,vertexShader:j,fragmentShader:ee,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ie,instancing:be,instancingColor:be&&_e.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:nn,map:ke,matcap:dt,envMap:te,envMapMode:te&&ae.mapping,envMapCubeUVHeight:G,aoMap:Yt,lightMap:We,bumpMap:et,normalMap:ze,displacementMap:_&&Ct,emissiveMap:rt,normalMapObjectSpace:ze&&R.normalMapType===ax,normalMapTangentSpace:ze&&R.normalMapType===qg,metalnessMap:L,roughnessMap:w,anisotropy:Q,anisotropyMap:Re,clearcoat:ve,clearcoatMap:De,clearcoatNormalMap:Xe,clearcoatRoughnessMap:st,iridescence:me,iridescenceMap:pe,iridescenceThicknessMap:_t,sheen:xe,sheenColorMap:ut,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:Fe,specularIntensityMap:tt,transmission:He,transmissionMap:xt,thicknessMap:Pt,gradientMap:ot,opaque:R.transparent===!1&&R.blending===eo,alphaMap:Me,alphaTest:k,alphaHash:Te,combine:R.combine,mapUv:ke&&E(R.map.channel),aoMapUv:Yt&&E(R.aoMap.channel),lightMapUv:We&&E(R.lightMap.channel),bumpMapUv:et&&E(R.bumpMap.channel),normalMapUv:ze&&E(R.normalMap.channel),displacementMapUv:Ct&&E(R.displacementMap.channel),emissiveMapUv:rt&&E(R.emissiveMap.channel),metalnessMapUv:L&&E(R.metalnessMap.channel),roughnessMapUv:w&&E(R.roughnessMap.channel),anisotropyMapUv:Re&&E(R.anisotropyMap.channel),clearcoatMapUv:De&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(R.sheenRoughnessMap.channel),specularMapUv:Ge&&E(R.specularMap.channel),specularColorMapUv:Fe&&E(R.specularColorMap.channel),specularIntensityMapUv:tt&&E(R.specularIntensityMap.channel),transmissionMapUv:xt&&E(R.transmissionMap.channel),thicknessMapUv:Pt&&E(R.thicknessMap.channel),alphaMapUv:Me&&E(R.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ze||Q),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:je,vertexUv3s:Tt,pointsUvs:_e.isPoints===!0&&!!Z.attributes.uv&&(ke||Me),fog:!!H,useFog:R.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:_e.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:V,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&oe.length>0,shadowMapType:o.shadowMap.type,toneMapping:wt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ke&&R.map.isVideoTexture===!0&&Et.getTransfer(R.map.colorSpace)===Ft,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ei,flipSided:R.side===Bn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Ae&&R.extensions.derivatives===!0,extensionFragDepth:Ae&&R.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function x(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const oe in R.defines)I.push(oe),I.push(R.defines[oe]);return R.isRawShaderMaterial===!1&&(P(I,R),A(I,R),I.push(o.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function P(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.numLightProbes),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function A(R,I){u.disableAll(),I.isWebGL2&&u.enable(0),I.supportsVertexTextures&&u.enable(1),I.instancing&&u.enable(2),I.instancingColor&&u.enable(3),I.matcap&&u.enable(4),I.envMap&&u.enable(5),I.normalMapObjectSpace&&u.enable(6),I.normalMapTangentSpace&&u.enable(7),I.clearcoat&&u.enable(8),I.iridescence&&u.enable(9),I.alphaTest&&u.enable(10),I.vertexColors&&u.enable(11),I.vertexAlphas&&u.enable(12),I.vertexUv1s&&u.enable(13),I.vertexUv2s&&u.enable(14),I.vertexUv3s&&u.enable(15),I.vertexTangents&&u.enable(16),I.anisotropy&&u.enable(17),I.alphaHash&&u.enable(18),I.batching&&u.enable(19),R.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.skinning&&u.enable(4),I.morphTargets&&u.enable(5),I.morphNormals&&u.enable(6),I.morphColors&&u.enable(7),I.premultipliedAlpha&&u.enable(8),I.shadowMapEnabled&&u.enable(9),I.useLegacyLights&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),R.push(u.mask)}function C(R){const I=M[R.type];let oe;if(I){const ue=Mi[I];oe=Yx.clone(ue.uniforms)}else oe=R.uniforms;return oe}function z(R,I){let oe;for(let ue=0,_e=h.length;ue<_e;ue++){const H=h[ue];if(H.cacheKey===I){oe=H,++oe.usedTimes;break}}return oe===void 0&&(oe=new lT(o,I,R,a),h.push(oe)),oe}function F(R){if(--R.usedTimes===0){const I=h.indexOf(R);h[I]=h[h.length-1],h.pop(),R.destroy()}}function U(R){f.remove(R)}function ce(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:z,releaseProgram:F,releaseShaderCache:U,programs:h,dispose:ce}}function hT(){let o=new WeakMap;function e(a){let c=o.get(a);return c===void 0&&(c={},o.set(a,c)),c}function t(a){o.delete(a)}function r(a,c,u){o.get(a)[c]=u}function s(){o=new WeakMap}return{get:e,remove:t,update:r,dispose:s}}function pT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function og(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ag(){const o=[];let e=0;const t=[],r=[],s=[];function a(){e=0,t.length=0,r.length=0,s.length=0}function c(g,_,S,M,E,y){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=y),e++,x}function u(g,_,S,M,E,y){const x=c(g,_,S,M,E,y);S.transmission>0?r.push(x):S.transparent===!0?s.push(x):t.push(x)}function f(g,_,S,M,E,y){const x=c(g,_,S,M,E,y);S.transmission>0?r.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||pT),r.length>1&&r.sort(_||og),s.length>1&&s.sort(_||og)}function m(){for(let g=e,_=o.length;g<_;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:s,init:a,push:u,unshift:f,finish:m,sort:h}}function mT(){let o=new WeakMap;function e(r,s){const a=o.get(r);let c;return a===void 0?(c=new ag,o.set(r,[c])):s>=a.length?(c=new ag,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function gT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new it};break;case"SpotLight":t={position:new X,direction:new X,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new X,halfWidth:new X,halfHeight:new X};break}return o[e.id]=t,t}}}function _T(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let vT=0;function xT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yT(o,e){const t=new gT,r=_T(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new X);const a=new X,c=new pt,u=new pt;function f(m,g){let _=0,S=0,M=0;for(let ue=0;ue<9;ue++)s.probe[ue].set(0,0,0);let E=0,y=0,x=0,P=0,A=0,C=0,z=0,F=0,U=0,ce=0,R=0;m.sort(xT);const I=g===!0?Math.PI:1;for(let ue=0,_e=m.length;ue<_e;ue++){const H=m[ue],Z=H.color,se=H.intensity,ae=H.distance,G=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Z.r*se*I,S+=Z.g*se*I,M+=Z.b*se*I;else if(H.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(H.sh.coefficients[$],se);R++}else if(H.isDirectionalLight){const $=t.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*I),H.castShadow){const W=H.shadow,N=r.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,s.directionalShadow[E]=N,s.directionalShadowMap[E]=G,s.directionalShadowMatrix[E]=H.shadow.matrix,C++}s.directional[E]=$,E++}else if(H.isSpotLight){const $=t.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(Z).multiplyScalar(se*I),$.distance=ae,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,s.spot[x]=$;const W=H.shadow;if(H.map&&(s.spotLightMap[U]=H.map,U++,W.updateMatrices(H),H.castShadow&&ce++),s.spotLightMatrix[x]=W.matrix,H.castShadow){const N=r.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,s.spotShadow[x]=N,s.spotShadowMap[x]=G,F++}x++}else if(H.isRectAreaLight){const $=t.get(H);$.color.copy(Z).multiplyScalar(se),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),s.rectArea[P]=$,P++}else if(H.isPointLight){const $=t.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity*I),$.distance=H.distance,$.decay=H.decay,H.castShadow){const W=H.shadow,N=r.get(H);N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,s.pointShadow[y]=N,s.pointShadowMap[y]=G,s.pointShadowMatrix[y]=H.shadow.matrix,z++}s.point[y]=$,y++}else if(H.isHemisphereLight){const $=t.get(H);$.skyColor.copy(H.color).multiplyScalar(se*I),$.groundColor.copy(H.groundColor).multiplyScalar(se*I),s.hemi[A]=$,A++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=M;const oe=s.hash;(oe.directionalLength!==E||oe.pointLength!==y||oe.spotLength!==x||oe.rectAreaLength!==P||oe.hemiLength!==A||oe.numDirectionalShadows!==C||oe.numPointShadows!==z||oe.numSpotShadows!==F||oe.numSpotMaps!==U||oe.numLightProbes!==R)&&(s.directional.length=E,s.spot.length=x,s.rectArea.length=P,s.point.length=y,s.hemi.length=A,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=F+U-ce,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=ce,s.numLightProbes=R,oe.directionalLength=E,oe.pointLength=y,oe.spotLength=x,oe.rectAreaLength=P,oe.hemiLength=A,oe.numDirectionalShadows=C,oe.numPointShadows=z,oe.numSpotShadows=F,oe.numSpotMaps=U,oe.numLightProbes=R,s.version=vT++)}function h(m,g){let _=0,S=0,M=0,E=0,y=0;const x=g.matrixWorldInverse;for(let P=0,A=m.length;P<A;P++){const C=m[P];if(C.isDirectionalLight){const z=s.directional[_];z.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(x),_++}else if(C.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(x),z.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(x),M++}else if(C.isRectAreaLight){const z=s.rectArea[E];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(x),u.identity(),c.copy(C.matrixWorld),c.premultiply(x),u.extractRotation(c),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(x),S++}else if(C.isHemisphereLight){const z=s.hemi[y];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(x),y++}}}return{setup:f,setupView:h,state:s}}function lg(o,e){const t=new yT(o,e),r=[],s=[];function a(){r.length=0,s.length=0}function c(g){r.push(g)}function u(g){s.push(g)}function f(g){t.setup(r,g)}function h(g){t.setupView(r,g)}return{init:a,state:{lightsArray:r,shadowsArray:s,lights:t},setupLights:f,setupLightsView:h,pushLight:c,pushShadow:u}}function ST(o,e){let t=new WeakMap;function r(a,c=0){const u=t.get(a);let f;return u===void 0?(f=new lg(o,e),t.set(a,[f])):c>=u.length?(f=new lg(o,e),u.push(f)):f=u[c],f}function s(){t=new WeakMap}return{get:r,dispose:s}}class MT extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
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
}`;function AT(o,e,t){let r=new Zd;const s=new gt,a=new gt,c=new Lt,u=new MT({depthPacking:ox}),f=new ET,h={},m=t.maxTextureSize,g={[Ki]:Bn,[Bn]:Ki,[Ei]:Ei},_=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:TT,fragmentShader:wT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new si;M.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ri(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let x=this.type;this.render=function(F,U,ce){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const R=o.getRenderTarget(),I=o.getActiveCubeFace(),oe=o.getActiveMipmapLevel(),ue=o.state;ue.setBlending(br),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const _e=x!==Xi&&this.type===Xi,H=x===Xi&&this.type!==Xi;for(let Z=0,se=F.length;Z<se;Z++){const ae=F[Z],G=ae.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const $=G.getFrameExtents();if(s.multiply($),a.copy(G.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/$.x),s.x=a.x*$.x,G.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/$.y),s.y=a.y*$.y,G.mapSize.y=a.y)),G.map===null||_e===!0||H===!0){const N=this.type!==Xi?{minFilter:dn,magFilter:dn}:{};G.map!==null&&G.map.dispose(),G.map=new ls(s.x,s.y,N),G.map.texture.name=ae.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const W=G.getViewportCount();for(let N=0;N<W;N++){const V=G.getViewport(N);c.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),ue.viewport(c),G.updateMatrices(ae,N),r=G.getFrustum(),C(U,ce,G.camera,ae,this.type)}G.isPointLightShadow!==!0&&this.type===Xi&&P(G,ce),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(R,I,oe)};function P(F,U){const ce=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ls(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(U,null,ce,_,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(U,null,ce,S,E,null)}function A(F,U,ce,R){let I=null;const oe=ce.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(oe!==void 0)I=oe;else if(I=ce.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ue=I.uuid,_e=U.uuid;let H=h[ue];H===void 0&&(H={},h[ue]=H);let Z=H[_e];Z===void 0&&(Z=I.clone(),H[_e]=Z,U.addEventListener("dispose",z)),I=Z}if(I.visible=U.visible,I.wireframe=U.wireframe,R===Xi?I.side=U.shadowSide!==null?U.shadowSide:U.side:I.side=U.shadowSide!==null?U.shadowSide:g[U.side],I.alphaMap=U.alphaMap,I.alphaTest=U.alphaTest,I.map=U.map,I.clipShadows=U.clipShadows,I.clippingPlanes=U.clippingPlanes,I.clipIntersection=U.clipIntersection,I.displacementMap=U.displacementMap,I.displacementScale=U.displacementScale,I.displacementBias=U.displacementBias,I.wireframeLinewidth=U.wireframeLinewidth,I.linewidth=U.linewidth,ce.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const ue=o.properties.get(I);ue.light=ce}return I}function C(F,U,ce,R,I){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&I===Xi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,F.matrixWorld);const _e=e.update(F),H=F.material;if(Array.isArray(H)){const Z=_e.groups;for(let se=0,ae=Z.length;se<ae;se++){const G=Z[se],$=H[G.materialIndex];if($&&$.visible){const W=A(F,$,R,I);F.onBeforeShadow(o,F,U,ce,_e,W,G),o.renderBufferDirect(ce,null,_e,W,F,G),F.onAfterShadow(o,F,U,ce,_e,W,G)}}}else if(H.visible){const Z=A(F,H,R,I);F.onBeforeShadow(o,F,U,ce,_e,Z,null),o.renderBufferDirect(ce,null,_e,Z,F,null),F.onAfterShadow(o,F,U,ce,_e,Z,null)}}const ue=F.children;for(let _e=0,H=ue.length;_e<H;_e++)C(ue[_e],U,ce,R,I)}function z(F){F.target.removeEventListener("dispose",z);for(const ce in h){const R=h[ce],I=F.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function RT(o,e,t){const r=t.isWebGL2;function s(){let k=!1;const Te=new Lt;let Ae=null;const $e=new Lt(0,0,0,0);return{setMask:function(je){Ae!==je&&!k&&(o.colorMask(je,je,je,je),Ae=je)},setLocked:function(je){k=je},setClear:function(je,Tt,wt,Gt,on){on===!0&&(je*=Gt,Tt*=Gt,wt*=Gt),Te.set(je,Tt,wt,Gt),$e.equals(Te)===!1&&(o.clearColor(je,Tt,wt,Gt),$e.copy(Te))},reset:function(){k=!1,Ae=null,$e.set(-1,0,0,0)}}}function a(){let k=!1,Te=null,Ae=null,$e=null;return{setTest:function(je){je?Ie(o.DEPTH_TEST):ke(o.DEPTH_TEST)},setMask:function(je){Te!==je&&!k&&(o.depthMask(je),Te=je)},setFunc:function(je){if(Ae!==je){switch(je){case I0:o.depthFunc(o.NEVER);break;case D0:o.depthFunc(o.ALWAYS);break;case U0:o.depthFunc(o.LESS);break;case Zl:o.depthFunc(o.LEQUAL);break;case F0:o.depthFunc(o.EQUAL);break;case O0:o.depthFunc(o.GEQUAL);break;case k0:o.depthFunc(o.GREATER);break;case B0:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ae=je}},setLocked:function(je){k=je},setClear:function(je){$e!==je&&(o.clearDepth(je),$e=je)},reset:function(){k=!1,Te=null,Ae=null,$e=null}}}function c(){let k=!1,Te=null,Ae=null,$e=null,je=null,Tt=null,wt=null,Gt=null,on=null;return{setTest:function(St){k||(St?Ie(o.STENCIL_TEST):ke(o.STENCIL_TEST))},setMask:function(St){Te!==St&&!k&&(o.stencilMask(St),Te=St)},setFunc:function(St,Qt,mn){(Ae!==St||$e!==Qt||je!==mn)&&(o.stencilFunc(St,Qt,mn),Ae=St,$e=Qt,je=mn)},setOp:function(St,Qt,mn){(Tt!==St||wt!==Qt||Gt!==mn)&&(o.stencilOp(St,Qt,mn),Tt=St,wt=Qt,Gt=mn)},setLocked:function(St){k=St},setClear:function(St){on!==St&&(o.clearStencil(St),on=St)},reset:function(){k=!1,Te=null,Ae=null,$e=null,je=null,Tt=null,wt=null,Gt=null,on=null}}}const u=new s,f=new a,h=new c,m=new WeakMap,g=new WeakMap;let _={},S={},M=new WeakMap,E=[],y=null,x=!1,P=null,A=null,C=null,z=null,F=null,U=null,ce=null,R=new it(0,0,0),I=0,oe=!1,ue=null,_e=null,H=null,Z=null,se=null;const ae=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=$>=2);let N=null,V={};const j=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),fe=new Lt().fromArray(j),Se=new Lt().fromArray(ee);function Ee(k,Te,Ae,$e){const je=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(k,Tt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let wt=0;wt<Ae;wt++)r&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(Te,0,o.RGBA,1,1,$e,0,o.RGBA,o.UNSIGNED_BYTE,je):o.texImage2D(Te+wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,je);return Tt}const be={};be[o.TEXTURE_2D]=Ee(o.TEXTURE_2D,o.TEXTURE_2D,1),be[o.TEXTURE_CUBE_MAP]=Ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(be[o.TEXTURE_2D_ARRAY]=Ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),be[o.TEXTURE_3D]=Ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ie(o.DEPTH_TEST),f.setFunc(Zl),rt(!1),L(Hp),Ie(o.CULL_FACE),ze(br);function Ie(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function ke(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function dt(k,Te){return S[k]!==Te?(o.bindFramebuffer(k,Te),S[k]=Te,r&&(k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Te),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Te)),!0):!1}function te(k,Te){let Ae=E,$e=!1;if(k)if(Ae=M.get(Te),Ae===void 0&&(Ae=[],M.set(Te,Ae)),k.isWebGLMultipleRenderTargets){const je=k.texture;if(Ae.length!==je.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,wt=je.length;Tt<wt;Tt++)Ae[Tt]=o.COLOR_ATTACHMENT0+Tt;Ae.length=je.length,$e=!0}}else Ae[0]!==o.COLOR_ATTACHMENT0&&(Ae[0]=o.COLOR_ATTACHMENT0,$e=!0);else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,$e=!0);$e&&(t.isWebGL2?o.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Yt(k){return y!==k?(o.useProgram(k),y=k,!0):!1}const We={[es]:o.FUNC_ADD,[v0]:o.FUNC_SUBTRACT,[x0]:o.FUNC_REVERSE_SUBTRACT};if(r)We[Xp]=o.MIN,We[jp]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(We[Xp]=k.MIN_EXT,We[jp]=k.MAX_EXT)}const et={[y0]:o.ZERO,[S0]:o.ONE,[M0]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[b0]:o.SRC_ALPHA_SATURATE,[A0]:o.DST_COLOR,[T0]:o.DST_ALPHA,[E0]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[R0]:o.ONE_MINUS_DST_COLOR,[w0]:o.ONE_MINUS_DST_ALPHA,[C0]:o.CONSTANT_COLOR,[L0]:o.ONE_MINUS_CONSTANT_COLOR,[P0]:o.CONSTANT_ALPHA,[N0]:o.ONE_MINUS_CONSTANT_ALPHA};function ze(k,Te,Ae,$e,je,Tt,wt,Gt,on,St){if(k===br){x===!0&&(ke(o.BLEND),x=!1);return}if(x===!1&&(Ie(o.BLEND),x=!0),k!==_0){if(k!==P||St!==oe){if((A!==es||F!==es)&&(o.blendEquation(o.FUNC_ADD),A=es,F=es),St)switch(k){case eo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vp:o.blendFunc(o.ONE,o.ONE);break;case Gp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case eo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Gp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Wp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}C=null,z=null,U=null,ce=null,R.set(0,0,0),I=0,P=k,oe=St}return}je=je||Te,Tt=Tt||Ae,wt=wt||$e,(Te!==A||je!==F)&&(o.blendEquationSeparate(We[Te],We[je]),A=Te,F=je),(Ae!==C||$e!==z||Tt!==U||wt!==ce)&&(o.blendFuncSeparate(et[Ae],et[$e],et[Tt],et[wt]),C=Ae,z=$e,U=Tt,ce=wt),(Gt.equals(R)===!1||on!==I)&&(o.blendColor(Gt.r,Gt.g,Gt.b,on),R.copy(Gt),I=on),P=k,oe=!1}function Ct(k,Te){k.side===Ei?ke(o.CULL_FACE):Ie(o.CULL_FACE);let Ae=k.side===Bn;Te&&(Ae=!Ae),rt(Ae),k.blending===eo&&k.transparent===!1?ze(br):ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const $e=k.stencilWrite;h.setTest($e),$e&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ie(o.SAMPLE_ALPHA_TO_COVERAGE):ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){ue!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),ue=k)}function L(k){k!==p0?(Ie(o.CULL_FACE),k!==_e&&(k===Hp?o.cullFace(o.BACK):k===m0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ke(o.CULL_FACE),_e=k}function w(k){k!==H&&(G&&o.lineWidth(k),H=k)}function Q(k,Te,Ae){k?(Ie(o.POLYGON_OFFSET_FILL),(Z!==Te||se!==Ae)&&(o.polygonOffset(Te,Ae),Z=Te,se=Ae)):ke(o.POLYGON_OFFSET_FILL)}function ve(k){k?Ie(o.SCISSOR_TEST):ke(o.SCISSOR_TEST)}function me(k){k===void 0&&(k=o.TEXTURE0+ae-1),N!==k&&(o.activeTexture(k),N=k)}function xe(k,Te,Ae){Ae===void 0&&(N===null?Ae=o.TEXTURE0+ae-1:Ae=N);let $e=V[Ae];$e===void 0&&($e={type:void 0,texture:void 0},V[Ae]=$e),($e.type!==k||$e.texture!==Te)&&(N!==Ae&&(o.activeTexture(Ae),N=Ae),o.bindTexture(k,Te||be[k]),$e.type=k,$e.texture=Te)}function He(){const k=V[N];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Re(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(k){fe.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),fe.copy(k))}function xt(k){Se.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Se.copy(k))}function Pt(k,Te){let Ae=g.get(Te);Ae===void 0&&(Ae=new WeakMap,g.set(Te,Ae));let $e=Ae.get(k);$e===void 0&&($e=o.getUniformBlockIndex(Te,k.name),Ae.set(k,$e))}function ot(k,Te){const $e=g.get(Te).get(k);m.get(Te)!==$e&&(o.uniformBlockBinding(Te,$e,k.__bindingPointIndex),m.set(Te,$e))}function Me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},N=null,V={},S={},M=new WeakMap,E=[],y=null,x=!1,P=null,A=null,C=null,z=null,F=null,U=null,ce=null,R=new it(0,0,0),I=0,oe=!1,ue=null,_e=null,H=null,Z=null,se=null,fe.set(0,0,o.canvas.width,o.canvas.height),Se.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Ie,disable:ke,bindFramebuffer:dt,drawBuffers:te,useProgram:Yt,setBlending:ze,setMaterial:Ct,setFlipSided:rt,setCullFace:L,setLineWidth:w,setPolygonOffset:Q,setScissorTest:ve,activeTexture:me,bindTexture:xe,unbindTexture:He,compressedTexImage2D:Re,compressedTexImage3D:De,texImage2D:Ge,texImage3D:Fe,updateUBOMapping:Pt,uniformBlockBinding:ot,texStorage2D:ut,texStorage3D:Qe,texSubImage2D:Xe,texSubImage3D:st,compressedTexSubImage2D:pe,compressedTexSubImage3D:_t,scissor:tt,viewport:xt,reset:Me}}function bT(o,e,t,r,s,a,c){const u=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return S?new OffscreenCanvas(L,w):da("canvas")}function E(L,w,Q,ve){let me=1;if((L.width>ve||L.height>ve)&&(me=ve/Math.max(L.width,L.height)),me<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const xe=w?ic:Math.floor,He=xe(me*L.width),Re=xe(me*L.height);g===void 0&&(g=M(He,Re));const De=Q?M(He,Re):g;return De.width=He,De.height=Re,De.getContext("2d").drawImage(L,0,0,He,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+He+"x"+Re+")."),De}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return zd(L.width)&&zd(L.height)}function x(L){return u?!1:L.wrapS!==ti||L.wrapT!==ti||L.minFilter!==dn&&L.minFilter!==kn}function P(L,w){return L.generateMipmaps&&w&&L.minFilter!==dn&&L.minFilter!==kn}function A(L){o.generateMipmap(L)}function C(L,w,Q,ve,me=!1){if(u===!1)return w;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe=w;if(w===o.RED&&(Q===o.FLOAT&&(xe=o.R32F),Q===o.HALF_FLOAT&&(xe=o.R16F),Q===o.UNSIGNED_BYTE&&(xe=o.R8)),w===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(xe=o.R8UI),Q===o.UNSIGNED_SHORT&&(xe=o.R16UI),Q===o.UNSIGNED_INT&&(xe=o.R32UI),Q===o.BYTE&&(xe=o.R8I),Q===o.SHORT&&(xe=o.R16I),Q===o.INT&&(xe=o.R32I)),w===o.RG&&(Q===o.FLOAT&&(xe=o.RG32F),Q===o.HALF_FLOAT&&(xe=o.RG16F),Q===o.UNSIGNED_BYTE&&(xe=o.RG8)),w===o.RGBA){const He=me?Jl:Et.getTransfer(ve);Q===o.FLOAT&&(xe=o.RGBA32F),Q===o.HALF_FLOAT&&(xe=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(xe=He===Ft?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function z(L,w,Q){return P(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){return L===dn||L===Fd||L===Kl?o.NEAREST:o.LINEAR}function U(L){const w=L.target;w.removeEventListener("dispose",U),R(w),w.isVideoTexture&&m.delete(w)}function ce(L){const w=L.target;w.removeEventListener("dispose",ce),oe(w)}function R(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Q=L.source,ve=_.get(Q);if(ve){const me=ve[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&I(L),Object.keys(ve).length===0&&_.delete(Q)}r.remove(L)}function I(L){const w=r.get(L);o.deleteTexture(w.__webglTexture);const Q=L.source,ve=_.get(Q);delete ve[w.__cacheKey],c.memory.textures--}function oe(L){const w=L.texture,Q=r.get(L),ve=r.get(w);if(ve.__webglTexture!==void 0&&(o.deleteTexture(ve.__webglTexture),c.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(Q.__webglFramebuffer[me]))for(let xe=0;xe<Q.__webglFramebuffer[me].length;xe++)o.deleteFramebuffer(Q.__webglFramebuffer[me][xe]);else o.deleteFramebuffer(Q.__webglFramebuffer[me]);Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer[me])}else{if(Array.isArray(Q.__webglFramebuffer))for(let me=0;me<Q.__webglFramebuffer.length;me++)o.deleteFramebuffer(Q.__webglFramebuffer[me]);else o.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let me=0;me<Q.__webglColorRenderbuffer.length;me++)Q.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(Q.__webglColorRenderbuffer[me]);Q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let me=0,xe=w.length;me<xe;me++){const He=r.get(w[me]);He.__webglTexture&&(o.deleteTexture(He.__webglTexture),c.memory.textures--),r.remove(w[me])}r.remove(w),r.remove(L)}let ue=0;function _e(){ue=0}function H(){const L=ue;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),ue+=1,L}function Z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function se(L,w){const Q=r.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const ve=L.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Q,L,w);return}}t.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+w)}function ae(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){fe(Q,L,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+w)}function G(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){fe(Q,L,w);return}t.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+w)}function $(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Se(Q,L,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+w)}const W={[so]:o.REPEAT,[ti]:o.CLAMP_TO_EDGE,[Ql]:o.MIRRORED_REPEAT},N={[dn]:o.NEAREST,[Fd]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[Og]:o.LINEAR_MIPMAP_NEAREST,[as]:o.LINEAR_MIPMAP_LINEAR},V={[lx]:o.NEVER,[px]:o.ALWAYS,[cx]:o.LESS,[Yg]:o.LEQUAL,[ux]:o.EQUAL,[hx]:o.GEQUAL,[dx]:o.GREATER,[fx]:o.NOTEQUAL};function j(L,w,Q){if(Q?(o.texParameteri(L,o.TEXTURE_WRAP_S,W[w.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,W[w.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,W[w.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,N[w.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,N[w.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==ti||w.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,F(w.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,F(w.minFilter)),w.minFilter!==dn&&w.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===dn||w.minFilter!==Kl&&w.minFilter!==as||w.type===ji&&e.has("OES_texture_float_linear")===!1||u===!1&&w.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(o.texParameterf(L,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function ee(L,w){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",U));const ve=w.source;let me=_.get(ve);me===void 0&&(me={},_.set(ve,me));const xe=Z(w);if(xe!==L.__cacheKey){me[xe]===void 0&&(me[xe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),me[xe].usedTimes++;const He=me[L.__cacheKey];He!==void 0&&(me[L.__cacheKey].usedTimes--,He.usedTimes===0&&I(w)),L.__cacheKey=xe,L.__webglTexture=me[xe].texture}return Q}function fe(L,w,Q){let ve=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=o.TEXTURE_3D);const me=ee(L,w),xe=w.source;t.bindTexture(ve,L.__webglTexture,o.TEXTURE0+Q);const He=r.get(xe);if(xe.version!==He.__version||me===!0){t.activeTexture(o.TEXTURE0+Q);const Re=Et.getPrimaries(Et.workingColorSpace),De=w.colorSpace===ii?null:Et.getPrimaries(w.colorSpace),Xe=w.colorSpace===ii||Re===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const st=x(w)&&y(w.image)===!1;let pe=E(w.image,st,!1,s.maxTextureSize);pe=rt(w,pe);const _t=y(pe)||u,ut=a.convert(w.format,w.colorSpace);let Qe=a.convert(w.type),Ge=C(w.internalFormat,ut,Qe,w.colorSpace,w.isVideoTexture);j(ve,w,_t);let Fe;const tt=w.mipmaps,xt=u&&w.isVideoTexture!==!0&&Ge!==Wg,Pt=He.__version===void 0||me===!0,ot=z(w,pe,_t);if(w.isDepthTexture)Ge=o.DEPTH_COMPONENT,u?w.type===ji?Ge=o.DEPTH_COMPONENT32F:w.type===Ar?Ge=o.DEPTH_COMPONENT24:w.type===rs?Ge=o.DEPTH24_STENCIL8:Ge=o.DEPTH_COMPONENT16:w.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ss&&Ge===o.DEPTH_COMPONENT&&w.type!==Yd&&w.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ar,Qe=a.convert(w.type)),w.format===oo&&Ge===o.DEPTH_COMPONENT&&(Ge=o.DEPTH_STENCIL,w.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=rs,Qe=a.convert(w.type))),Pt&&(xt?t.texStorage2D(o.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(o.TEXTURE_2D,0,Ge,pe.width,pe.height,0,ut,Qe,null));else if(w.isDataTexture)if(tt.length>0&&_t){xt&&Pt&&t.texStorage2D(o.TEXTURE_2D,ot,Ge,tt[0].width,tt[0].height);for(let Me=0,k=tt.length;Me<k;Me++)Fe=tt[Me],xt?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,ut,Qe,Fe.data):t.texImage2D(o.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,ut,Qe,Fe.data);w.generateMipmaps=!1}else xt?(Pt&&t.texStorage2D(o.TEXTURE_2D,ot,Ge,pe.width,pe.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,pe.width,pe.height,ut,Qe,pe.data)):t.texImage2D(o.TEXTURE_2D,0,Ge,pe.width,pe.height,0,ut,Qe,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xt&&Pt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ot,Ge,tt[0].width,tt[0].height,pe.depth);for(let Me=0,k=tt.length;Me<k;Me++)Fe=tt[Me],w.format!==ni?ut!==null?xt?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,pe.depth,ut,Fe.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ge,Fe.width,Fe.height,pe.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,pe.depth,ut,Qe,Fe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ge,Fe.width,Fe.height,pe.depth,0,ut,Qe,Fe.data)}else{xt&&Pt&&t.texStorage2D(o.TEXTURE_2D,ot,Ge,tt[0].width,tt[0].height);for(let Me=0,k=tt.length;Me<k;Me++)Fe=tt[Me],w.format!==ni?ut!==null?xt?t.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,ut,Fe.data):t.compressedTexImage2D(o.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,ut,Qe,Fe.data):t.texImage2D(o.TEXTURE_2D,Me,Ge,Fe.width,Fe.height,0,ut,Qe,Fe.data)}else if(w.isDataArrayTexture)xt?(Pt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ot,Ge,pe.width,pe.height,pe.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ut,Qe,pe.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,ut,Qe,pe.data);else if(w.isData3DTexture)xt?(Pt&&t.texStorage3D(o.TEXTURE_3D,ot,Ge,pe.width,pe.height,pe.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ut,Qe,pe.data)):t.texImage3D(o.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,ut,Qe,pe.data);else if(w.isFramebufferTexture){if(Pt)if(xt)t.texStorage2D(o.TEXTURE_2D,ot,Ge,pe.width,pe.height);else{let Me=pe.width,k=pe.height;for(let Te=0;Te<ot;Te++)t.texImage2D(o.TEXTURE_2D,Te,Ge,Me,k,0,ut,Qe,null),Me>>=1,k>>=1}}else if(tt.length>0&&_t){xt&&Pt&&t.texStorage2D(o.TEXTURE_2D,ot,Ge,tt[0].width,tt[0].height);for(let Me=0,k=tt.length;Me<k;Me++)Fe=tt[Me],xt?t.texSubImage2D(o.TEXTURE_2D,Me,0,0,ut,Qe,Fe):t.texImage2D(o.TEXTURE_2D,Me,Ge,ut,Qe,Fe);w.generateMipmaps=!1}else xt?(Pt&&t.texStorage2D(o.TEXTURE_2D,ot,Ge,pe.width,pe.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,ut,Qe,pe)):t.texImage2D(o.TEXTURE_2D,0,Ge,ut,Qe,pe);P(w,_t)&&A(ve),He.__version=xe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,Q){if(w.image.length!==6)return;const ve=ee(L,w),me=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Q);const xe=r.get(me);if(me.version!==xe.__version||ve===!0){t.activeTexture(o.TEXTURE0+Q);const He=Et.getPrimaries(Et.workingColorSpace),Re=w.colorSpace===ii?null:Et.getPrimaries(w.colorSpace),De=w.colorSpace===ii||He===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,st=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let Me=0;Me<6;Me++)!Xe&&!st?pe[Me]=E(w.image[Me],!1,!0,s.maxCubemapSize):pe[Me]=st?w.image[Me].image:w.image[Me],pe[Me]=rt(w,pe[Me]);const _t=pe[0],ut=y(_t)||u,Qe=a.convert(w.format,w.colorSpace),Ge=a.convert(w.type),Fe=C(w.internalFormat,Qe,Ge,w.colorSpace),tt=u&&w.isVideoTexture!==!0,xt=xe.__version===void 0||ve===!0;let Pt=z(w,_t,ut);j(o.TEXTURE_CUBE_MAP,w,ut);let ot;if(Xe){tt&&xt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,Fe,_t.width,_t.height);for(let Me=0;Me<6;Me++){ot=pe[Me].mipmaps;for(let k=0;k<ot.length;k++){const Te=ot[k];w.format!==ni?Qe!==null?tt?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k,0,0,Te.width,Te.height,Qe,Te.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k,0,0,Te.width,Te.height,Qe,Ge,Te.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k,Fe,Te.width,Te.height,0,Qe,Ge,Te.data)}}}else{ot=w.mipmaps,tt&&xt&&(ot.length>0&&Pt++,t.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,Fe,pe[0].width,pe[0].height));for(let Me=0;Me<6;Me++)if(st){tt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe[Me].width,pe[Me].height,Qe,Ge,pe[Me].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Fe,pe[Me].width,pe[Me].height,0,Qe,Ge,pe[Me].data);for(let k=0;k<ot.length;k++){const Ae=ot[k].image[Me].image;tt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k+1,0,0,Ae.width,Ae.height,Qe,Ge,Ae.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k+1,Fe,Ae.width,Ae.height,0,Qe,Ge,Ae.data)}}else{tt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Qe,Ge,pe[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Fe,Qe,Ge,pe[Me]);for(let k=0;k<ot.length;k++){const Te=ot[k];tt?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k+1,0,0,Qe,Ge,Te.image[Me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,k+1,Fe,Qe,Ge,Te.image[Me])}}}P(w,ut)&&A(o.TEXTURE_CUBE_MAP),xe.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ee(L,w,Q,ve,me,xe){const He=a.convert(Q.format,Q.colorSpace),Re=a.convert(Q.type),De=C(Q.internalFormat,He,Re,Q.colorSpace);if(!r.get(w).__hasExternalTextures){const st=Math.max(1,w.width>>xe),pe=Math.max(1,w.height>>xe);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,xe,De,st,pe,w.depth,0,He,Re,null):t.texImage2D(me,xe,De,st,pe,0,He,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),ze(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,me,r.get(Q).__webglTexture,0,et(w)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,me,r.get(Q).__webglTexture,xe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function be(L,w,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let ve=u===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Q||ze(w)){const me=w.depthTexture;me&&me.isDepthTexture&&(me.type===ji?ve=o.DEPTH_COMPONENT32F:me.type===Ar&&(ve=o.DEPTH_COMPONENT24));const xe=et(w);ze(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,ve,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,ve,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,ve,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const ve=et(w);Q&&ze(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,o.DEPTH24_STENCIL8,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const ve=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let me=0;me<ve.length;me++){const xe=ve[me],He=a.convert(xe.format,xe.colorSpace),Re=a.convert(xe.type),De=C(xe.internalFormat,He,Re,xe.colorSpace),Xe=et(w);Q&&ze(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,De,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,De,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,De,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ie(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se(w.depthTexture,0);const ve=r.get(w.depthTexture).__webglTexture,me=et(w);if(w.depthTexture.format===ss)ze(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(w.depthTexture.format===oo)ze(w)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ke(L){const w=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,L)}else if(Q){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=o.createRenderbuffer(),be(w.__webglDepthbuffer[ve],L,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),be(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function dt(L,w,Q){const ve=r.get(L);w!==void 0&&Ee(ve.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&ke(L)}function te(L){const w=L.texture,Q=r.get(L),ve=r.get(w);L.addEventListener("dispose",ce),L.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=w.version,c.memory.textures++);const me=L.isWebGLCubeRenderTarget===!0,xe=L.isWebGLMultipleRenderTargets===!0,He=y(L)||u;if(me){Q.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(u&&w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Re]=[];for(let De=0;De<w.mipmaps.length;De++)Q.__webglFramebuffer[Re][De]=o.createFramebuffer()}else Q.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(u&&w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)Q.__webglFramebuffer[Re]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(xe)if(s.drawBuffers){const Re=L.texture;for(let De=0,Xe=Re.length;De<Xe;De++){const st=r.get(Re[De]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&L.samples>0&&ze(L)===!1){const Re=xe?w:[w];Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let De=0;De<Re.length;De++){const Xe=Re[De];Q.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[De]);const st=a.convert(Xe.format,Xe.colorSpace),pe=a.convert(Xe.type),_t=C(Xe.internalFormat,st,pe,Xe.colorSpace,L.isXRRenderTarget===!0),ut=et(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,_t,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,Q.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),be(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){t.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),j(o.TEXTURE_CUBE_MAP,w,He);for(let Re=0;Re<6;Re++)if(u&&w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)Ee(Q.__webglFramebuffer[Re][De],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,De);else Ee(Q.__webglFramebuffer[Re],L,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);P(w,He)&&A(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Re=L.texture;for(let De=0,Xe=Re.length;De<Xe;De++){const st=Re[De],pe=r.get(st);t.bindTexture(o.TEXTURE_2D,pe.__webglTexture),j(o.TEXTURE_2D,st,He),Ee(Q.__webglFramebuffer,L,st,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,0),P(st,He)&&A(o.TEXTURE_2D)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(u?Re=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Re,ve.__webglTexture),j(Re,w,He),u&&w.mipmaps&&w.mipmaps.length>0)for(let De=0;De<w.mipmaps.length;De++)Ee(Q.__webglFramebuffer[De],L,w,o.COLOR_ATTACHMENT0,Re,De);else Ee(Q.__webglFramebuffer,L,w,o.COLOR_ATTACHMENT0,Re,0);P(w,He)&&A(Re),t.unbindTexture()}L.depthBuffer&&ke(L)}function Yt(L){const w=y(L)||u,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ve=0,me=Q.length;ve<me;ve++){const xe=Q[ve];if(P(xe,w)){const He=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Re=r.get(xe).__webglTexture;t.bindTexture(He,Re),A(He),t.unbindTexture()}}}function We(L){if(u&&L.samples>0&&ze(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,ve=L.height;let me=o.COLOR_BUFFER_BIT;const xe=[],He=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=r.get(L),De=L.isWebGLMultipleRenderTargets===!0;if(De)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){xe.push(o.COLOR_ATTACHMENT0+Xe),L.depthBuffer&&xe.push(He);const st=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(st===!1&&(L.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),De&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]),st===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[He]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[He])),De){const pe=r.get(w[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,Q,ve,0,0,Q,ve,me,o.NEAREST),h&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,Re.__webglColorRenderbuffer[Xe]);const st=r.get(w[Xe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,st,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function et(L){return Math.min(s.maxSamples,L.samples)}function ze(L){const w=r.get(L);return u&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(L){const w=c.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function rt(L,w){const Q=L.colorSpace,ve=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Bd||Q!==nn&&Q!==ii&&(Et.getTransfer(Q)===Ft?u===!1?e.has("EXT_sRGB")===!0&&ve===ni?(L.format=Bd,L.minFilter=kn,L.generateMipmaps=!1):w=$g.sRGBToLinear(w):(ve!==ni||me!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}this.allocateTextureUnit=H,this.resetTextureUnits=_e,this.setTexture2D=se,this.setTexture2DArray=ae,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=dt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ze}function CT(o,e,t){const r=t.isWebGL2;function s(a,c=ii){let u;const f=Et.getTransfer(c);if(a===Lr)return o.UNSIGNED_BYTE;if(a===Bg)return o.UNSIGNED_SHORT_4_4_4_4;if(a===zg)return o.UNSIGNED_SHORT_5_5_5_1;if(a===K0)return o.BYTE;if(a===$0)return o.SHORT;if(a===Yd)return o.UNSIGNED_SHORT;if(a===kg)return o.INT;if(a===Ar)return o.UNSIGNED_INT;if(a===ji)return o.FLOAT;if(a===ca)return r?o.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===Z0)return o.ALPHA;if(a===ni)return o.RGBA;if(a===Q0)return o.LUMINANCE;if(a===J0)return o.LUMINANCE_ALPHA;if(a===ss)return o.DEPTH_COMPONENT;if(a===oo)return o.DEPTH_STENCIL;if(a===Bd)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===ex)return o.RED;if(a===Hg)return o.RED_INTEGER;if(a===tx)return o.RG;if(a===Vg)return o.RG_INTEGER;if(a===Gg)return o.RGBA_INTEGER;if(a===Yu||a===Ku||a===$u||a===Zu)if(f===Ft)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$u)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Zu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yp||a===Kp||a===$p||a===Zp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Yp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$p)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wg)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Qp||a===Jp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Qp)return f===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Jp)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===em||a===tm||a===nm||a===im||a===rm||a===sm||a===om||a===am||a===lm||a===cm||a===um||a===dm||a===fm||a===hm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===em)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===tm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===nm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===im)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===om)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===am)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===um)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hm)return f===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qu||a===pm||a===mm)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===Qu)return f===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nx||a===gm||a===_m||a===vm)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===Qu)return u.COMPRESSED_RED_RGTC1_EXT;if(a===gm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_m)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===rs?r?o.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:s}}class LT extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&_>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new is;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class NT extends ho{constructor(e,t){super();const r=this;let s=null,a=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,_=null,S=null,M=null;const E=t.getContextAttributes();let y=null,x=null;const P=[],A=[],C=new gt;let z=null;const F=new Cn;F.layers.enable(1),F.viewport=new Lt;const U=new Cn;U.layers.enable(2),U.viewport=new Lt;const ce=[F,U],R=new LT;R.layers.enable(1),R.layers.enable(2);let I=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=P[j];return ee===void 0&&(ee=new Md,P[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=P[j];return ee===void 0&&(ee=new Md,P[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=P[j];return ee===void 0&&(ee=new Md,P[j]=ee),ee.getHandSpace()};function ue(j){const ee=A.indexOf(j.inputSource);if(ee===-1)return;const fe=P[ee];fe!==void 0&&(fe.update(j.inputSource,j.frame,h||c),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function _e(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",_e),s.removeEventListener("inputsourceschange",H);for(let j=0;j<P.length;j++){const ee=A[j];ee!==null&&(A[j]=null,P[j].disconnect(ee))}I=null,oe=null,e.setRenderTarget(y),S=null,_=null,g=null,s=null,x=null,V.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",_e),s.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:s.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),x=new ls(S.framebufferWidth,S.framebufferHeight,{format:ni,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let ee=null,fe=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?oo:ss,fe=E.stencil?rs:Ar);const Ee={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ee),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),x=new ls(_.textureWidth,_.textureHeight,{format:ni,type:Lr,depthTexture:new a_(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const be=e.properties.get(x);be.__ignoreDepthValues=_.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(u),V.setContext(s),V.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(j){for(let ee=0;ee<j.removed.length;ee++){const fe=j.removed[ee],Se=A.indexOf(fe);Se>=0&&(A[Se]=null,P[Se].disconnect(fe))}for(let ee=0;ee<j.added.length;ee++){const fe=j.added[ee];let Se=A.indexOf(fe);if(Se===-1){for(let be=0;be<P.length;be++)if(be>=A.length){A.push(fe),Se=be;break}else if(A[be]===null){A[be]=fe,Se=be;break}if(Se===-1)break}const Ee=P[Se];Ee&&Ee.connect(fe)}}const Z=new X,se=new X;function ae(j,ee,fe){Z.setFromMatrixPosition(ee.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const Se=Z.distanceTo(se),Ee=ee.projectionMatrix.elements,be=fe.projectionMatrix.elements,Ie=Ee[14]/(Ee[10]-1),ke=Ee[14]/(Ee[10]+1),dt=(Ee[9]+1)/Ee[5],te=(Ee[9]-1)/Ee[5],Yt=(Ee[8]-1)/Ee[0],We=(be[8]+1)/be[0],et=Ie*Yt,ze=Ie*We,Ct=Se/(-Yt+We),rt=Ct*-Yt;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(rt),j.translateZ(Ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const L=Ie+Ct,w=ke+Ct,Q=et-rt,ve=ze+(Se-rt),me=dt*ke/w*L,xe=te*ke/w*L;j.projectionMatrix.makePerspective(Q,ve,me,xe,L,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function G(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;R.near=U.near=F.near=j.near,R.far=U.far=F.far=j.far,(I!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,oe=R.far);const ee=j.parent,fe=R.cameras;G(R,ee);for(let Se=0;Se<fe.length;Se++)G(fe[Se],ee);fe.length===2?ae(R,F,U):R.projectionMatrix.copy(F.projectionMatrix),$(j,R,ee)};function $(j,ee,fe){fe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(j){f=j,_!==null&&(_.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)};let W=null;function N(j,ee){if(m=ee.getViewerPose(h||c),M=ee,m!==null){const fe=m.views;S!==null&&(e.setRenderTargetFramebuffer(x,S.framebuffer),e.setRenderTarget(x));let Se=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Ee=0;Ee<fe.length;Ee++){const be=fe[Ee];let Ie=null;if(S!==null)Ie=S.getViewport(be);else{const dt=g.getViewSubImage(_,be);Ie=dt.viewport,Ee===0&&(e.setRenderTargetTextures(x,dt.colorTexture,_.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(x))}let ke=ce[Ee];ke===void 0&&(ke=new Cn,ke.layers.enable(Ee),ke.viewport=new Lt,ce[Ee]=ke),ke.matrix.fromArray(be.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(be.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ee===0&&(R.matrix.copy(ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(ke)}}for(let fe=0;fe<P.length;fe++){const Se=A[fe],Ee=P[fe];Se!==null&&Ee!==void 0&&Ee.update(Se,ee,h||c)}W&&W(j,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),M=null}const V=new o_;V.setAnimationLoop(N),this.setAnimationLoop=function(j){W=j},this.dispose=function(){}}}function IT(o,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,i_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,P,A,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),g(y,x)):x.isMeshPhongMaterial?(a(y,x),m(y,x)):x.isMeshStandardMaterial?(a(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(a(y,x),M(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),E(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?f(y,x,P,A):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Bn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Bn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=e.get(x).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap){y.lightMap.value=x.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=x.lightMapIntensity*A,t(x.lightMap,y.lightMapTransform)}x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,P,A){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=A*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),e.get(x).envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&y.clearcoatNormalScale.value.negate())),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const P=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function DT(o,e,t,r){let s={},a={},c=[];const u=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(P,A){const C=A.program;r.uniformBlockBinding(P,C)}function h(P,A){let C=s[P.id];C===void 0&&(M(P),C=m(P),s[P.id]=C,P.addEventListener("dispose",y));const z=A.program;r.updateUBOMapping(P,z);const F=e.render.frame;a[P.id]!==F&&(_(P),a[P.id]=F)}function m(P){const A=g();P.__bindingPointIndex=A;const C=o.createBuffer(),z=P.__size,F=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,C),C}function g(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const A=s[P.id],C=P.uniforms,z=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let F=0,U=C.length;F<U;F++){const ce=Array.isArray(C[F])?C[F]:[C[F]];for(let R=0,I=ce.length;R<I;R++){const oe=ce[R];if(S(oe,F,R,z)===!0){const ue=oe.__offset,_e=Array.isArray(oe.value)?oe.value:[oe.value];let H=0;for(let Z=0;Z<_e.length;Z++){const se=_e[Z],ae=E(se);typeof se=="number"||typeof se=="boolean"?(oe.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,ue+H,oe.__data)):se.isMatrix3?(oe.__data[0]=se.elements[0],oe.__data[1]=se.elements[1],oe.__data[2]=se.elements[2],oe.__data[3]=0,oe.__data[4]=se.elements[3],oe.__data[5]=se.elements[4],oe.__data[6]=se.elements[5],oe.__data[7]=0,oe.__data[8]=se.elements[6],oe.__data[9]=se.elements[7],oe.__data[10]=se.elements[8],oe.__data[11]=0):(se.toArray(oe.__data,H),H+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ue,oe.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,A,C,z){const F=P.value,U=A+"_"+C;if(z[U]===void 0)return typeof F=="number"||typeof F=="boolean"?z[U]=F:z[U]=F.clone(),!0;{const ce=z[U];if(typeof F=="number"||typeof F=="boolean"){if(ce!==F)return z[U]=F,!0}else if(ce.equals(F)===!1)return ce.copy(F),!0}return!1}function M(P){const A=P.uniforms;let C=0;const z=16;for(let U=0,ce=A.length;U<ce;U++){const R=Array.isArray(A[U])?A[U]:[A[U]];for(let I=0,oe=R.length;I<oe;I++){const ue=R[I],_e=Array.isArray(ue.value)?ue.value:[ue.value];for(let H=0,Z=_e.length;H<Z;H++){const se=_e[H],ae=E(se),G=C%z;G!==0&&z-G<ae.boundary&&(C+=z-G),ue.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=C,C+=ae.storage}}}const F=C%z;return F>0&&(C+=z-F),P.__size=C,P.__cache={},this}function E(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function y(P){const A=P.target;A.removeEventListener("dispose",y);const C=c.indexOf(A.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function x(){for(const P in s)o.deleteBuffer(s[P]);c=[],s={},a={}}return{bind:f,update:h,dispose:x}}class h_{constructor(e={}){const{canvas:t=Lx(),context:r=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=c;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,y=null;const x=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Cr,this.toneMappingExposure=1;const A=this;let C=!1,z=0,F=0,U=null,ce=-1,R=null;const I=new Lt,oe=new Lt;let ue=null;const _e=new it(0);let H=0,Z=t.width,se=t.height,ae=1,G=null,$=null;const W=new Lt(0,0,Z,se),N=new Lt(0,0,Z,se);let V=!1;const j=new Zd;let ee=!1,fe=!1,Se=null;const Ee=new pt,be=new gt,Ie=new X,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return U===null?ae:1}let te=r;function Yt(b,Y){for(let ie=0;ie<b.length;ie++){const re=b[ie],ne=t.getContext(re,Y);if(ne!==null)return ne}return null}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Te,!1),te===null){const Y=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&Y.shift(),te=Yt(Y,b),te===null)throw Yt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,et,ze,Ct,rt,L,w,Q,ve,me,xe,He,Re,De,Xe,st,pe,_t,ut,Qe,Ge,Fe,tt,xt;function Pt(){We=new WM(te),et=new kM(te,We,e),We.init(et),Fe=new CT(te,We,et),ze=new RT(te,We,et),Ct=new qM(te),rt=new hT,L=new bT(te,We,ze,rt,et,Fe,Ct),w=new zM(A),Q=new GM(A),ve=new ty(te,et),tt=new FM(te,We,ve,et),me=new XM(te,ve,Ct,tt),xe=new ZM(te,me,ve,Ct),ut=new $M(te,et,L),st=new BM(rt),He=new fT(A,w,Q,We,et,tt,st),Re=new IT(A,rt),De=new mT,Xe=new ST(We,et),_t=new UM(A,w,Q,ze,xe,_,f),pe=new AT(A,xe,et),xt=new DT(te,Ct,et,ze),Qe=new OM(te,We,Ct,et),Ge=new jM(te,We,Ct,et),Ct.programs=He.programs,A.capabilities=et,A.extensions=We,A.properties=rt,A.renderLists=De,A.shadowMap=pe,A.state=ze,A.info=Ct}Pt();const ot=new NT(A,te);this.xr=ot,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(Z,se,!1))},this.getSize=function(b){return b.set(Z,se)},this.setSize=function(b,Y,ie=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,se=Y,t.width=Math.floor(b*ae),t.height=Math.floor(Y*ae),ie===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(Z*ae,se*ae).floor()},this.setDrawingBufferSize=function(b,Y,ie){Z=b,se=Y,ae=ie,t.width=Math.floor(b*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,Y,ie,re){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,Y,ie,re),ze.viewport(I.copy(W).multiplyScalar(ae).floor())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,Y,ie,re){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,Y,ie,re),ze.scissor(oe.copy(N).multiplyScalar(ae).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){ze.setScissorTest(V=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(b=!0,Y=!0,ie=!0){let re=0;if(b){let ne=!1;if(U!==null){const Ce=U.texture.format;ne=Ce===Gg||Ce===Vg||Ce===Hg}if(ne){const Ce=U.texture.type,Ve=Ce===Lr||Ce===Ar||Ce===Yd||Ce===rs||Ce===Bg||Ce===zg,Ke=_t.getClearColor(),Pe=_t.getClearAlpha(),at=Ke.r,Je=Ke.g,nt=Ke.b;Ve?(S[0]=at,S[1]=Je,S[2]=nt,S[3]=Pe,te.clearBufferuiv(te.COLOR,0,S)):(M[0]=at,M[1]=Je,M[2]=nt,M[3]=Pe,te.clearBufferiv(te.COLOR,0,M))}else re|=te.COLOR_BUFFER_BIT}Y&&(re|=te.DEPTH_BUFFER_BIT),ie&&(re|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),De.dispose(),Xe.dispose(),rt.dispose(),w.dispose(),Q.dispose(),xe.dispose(),tt.dispose(),xt.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",on),ot.removeEventListener("sessionend",St),Se&&(Se.dispose(),Se=null),Qt.stop()};function Me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Ct.autoReset,Y=pe.enabled,ie=pe.autoUpdate,re=pe.needsUpdate,ne=pe.type;Pt(),Ct.autoReset=b,pe.enabled=Y,pe.autoUpdate=ie,pe.needsUpdate=re,pe.type=ne}function Te(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ae(b){const Y=b.target;Y.removeEventListener("dispose",Ae),$e(Y)}function $e(b){je(b),rt.remove(b)}function je(b){const Y=rt.get(b).programs;Y!==void 0&&(Y.forEach(function(ie){He.releaseProgram(ie)}),b.isShaderMaterial&&He.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ie,re,ne,Ce){Y===null&&(Y=ke);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,Ke=dc(b,Y,ie,re,ne);ze.setMaterial(re,Ve);let Pe=ie.index,at=1;if(re.wireframe===!0){if(Pe=me.getWireframeAttribute(ie),Pe===void 0)return;at=2}const Je=ie.drawRange,nt=ie.attributes.position;let Nt=Je.start*at,En=(Je.start+Je.count)*at;Ce!==null&&(Nt=Math.max(Nt,Ce.start*at),En=Math.min(En,(Ce.start+Ce.count)*at)),Pe!==null?(Nt=Math.max(Nt,0),En=Math.min(En,Pe.count)):nt!=null&&(Nt=Math.max(Nt,0),En=Math.min(En,nt.count));const jt=En-Nt;if(jt<0||jt===1/0)return;tt.setup(ne,re,Ke,ie,Pe);let Ln,vt=Qe;if(Pe!==null&&(Ln=ve.get(Pe),vt=Ge,vt.setIndex(Ln)),ne.isMesh)re.wireframe===!0?(ze.setLineWidth(re.wireframeLinewidth*dt()),vt.setMode(te.LINES)):vt.setMode(te.TRIANGLES);else if(ne.isLine){let lt=re.linewidth;lt===void 0&&(lt=1),ze.setLineWidth(lt*dt()),ne.isLineSegments?vt.setMode(te.LINES):ne.isLineLoop?vt.setMode(te.LINE_LOOP):vt.setMode(te.LINE_STRIP)}else ne.isPoints?vt.setMode(te.POINTS):ne.isSprite&&vt.setMode(te.TRIANGLES);if(ne.isBatchedMesh)vt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)vt.renderInstances(Nt,jt,ne.count);else if(ie.isInstancedBufferGeometry){const lt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Tn=Math.min(ie.instanceCount,lt);vt.renderInstances(Nt,jt,Tn)}else vt.render(Nt,jt)};function Tt(b,Y,ie){b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Bn,b.needsUpdate=!0,Qi(b,Y,ie),b.side=Ki,b.needsUpdate=!0,Qi(b,Y,ie),b.side=Ei):Qi(b,Y,ie)}this.compile=function(b,Y,ie=null){ie===null&&(ie=b),y=Xe.get(ie),y.init(),P.push(y),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),b!==ie&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(y.pushLight(ne),ne.castShadow&&y.pushShadow(ne))}),y.setupLights(A._useLegacyLights);const re=new Set;return b.traverse(function(ne){const Ce=ne.material;if(Ce)if(Array.isArray(Ce))for(let Ve=0;Ve<Ce.length;Ve++){const Ke=Ce[Ve];Tt(Ke,ie,ne),re.add(Ke)}else Tt(Ce,ie,ne),re.add(Ce)}),P.pop(),y=null,re},this.compileAsync=function(b,Y,ie=null){const re=this.compile(b,Y,ie);return new Promise(ne=>{function Ce(){if(re.forEach(function(Ve){rt.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){ne(b);return}setTimeout(Ce,10)}We.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let wt=null;function Gt(b){wt&&wt(b)}function on(){Qt.stop()}function St(){Qt.start()}const Qt=new o_;Qt.setAnimationLoop(Gt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){wt=b,ot.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},ot.addEventListener("sessionstart",on),ot.addEventListener("sessionend",St),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(Y),Y=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,Y,U),y=Xe.get(b,P.length),y.init(),P.push(y),Ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,ee=st.init(this.clippingPlanes,fe),E=De.get(b,x.length),E.init(),x.push(E),mn(b,Y,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(G,$),this.info.render.frame++,ee===!0&&st.beginShadows();const ie=y.state.shadowsArray;if(pe.render(ie,b,Y),ee===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(E,b),y.setupLights(A._useLegacyLights),Y.isArrayCamera){const re=Y.cameras;for(let ne=0,Ce=re.length;ne<Ce;ne++){const Ve=re[ne];pa(E,b,Ve,Ve.viewport)}}else pa(E,b,Y);U!==null&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),b.isScene===!0&&b.onAfterRender(A,b,Y),tt.resetDefaultState(),ce=-1,R=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function mn(b,Y,ie,re){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){re&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const Ve=xe.update(b),Ke=b.material;Ke.visible&&E.push(b,Ve,Ke,ie,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Ve=xe.update(b),Ke=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ie.copy(Ve.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ke)){const Pe=Ve.groups;for(let at=0,Je=Pe.length;at<Je;at++){const nt=Pe[at],Nt=Ke[nt.materialIndex];Nt&&Nt.visible&&E.push(b,Ve,Nt,ie,Ie.z,nt)}}else Ke.visible&&E.push(b,Ve,Ke,ie,Ie.z,null)}}const Ce=b.children;for(let Ve=0,Ke=Ce.length;Ve<Ke;Ve++)mn(Ce[Ve],Y,ie,re)}function pa(b,Y,ie,re){const ne=b.opaque,Ce=b.transmissive,Ve=b.transparent;y.setupLightsView(ie),ee===!0&&st.setGlobalState(A.clippingPlanes,ie),Ce.length>0&&Nr(ne,Ce,Y,ie),re&&ze.viewport(I.copy(re)),ne.length>0&&bi(ne,Y,ie),Ce.length>0&&bi(Ce,Y,ie),Ve.length>0&&bi(Ve,Y,ie),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Nr(b,Y,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;const Ce=et.isWebGL2;Se===null&&(Se=new ls(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ca:Lr,minFilter:as,samples:Ce?4:0})),A.getDrawingBufferSize(be),Ce?Se.setSize(be.x,be.y):Se.setSize(ic(be.x),ic(be.y));const Ve=A.getRenderTarget();A.setRenderTarget(Se),A.getClearColor(_e),H=A.getClearAlpha(),H<1&&A.setClearColor(16777215,.5),A.clear();const Ke=A.toneMapping;A.toneMapping=Cr,bi(b,ie,re),L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se);let Pe=!1;for(let at=0,Je=Y.length;at<Je;at++){const nt=Y[at],Nt=nt.object,En=nt.geometry,jt=nt.material,Ln=nt.group;if(jt.side===Ei&&Nt.layers.test(re.layers)){const vt=jt.side;jt.side=Bn,jt.needsUpdate=!0,Ir(Nt,ie,re,En,jt,Ln),jt.side=vt,jt.needsUpdate=!0,Pe=!0}}Pe===!0&&(L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se)),A.setRenderTarget(Ve),A.setClearColor(_e,H),A.toneMapping=Ke}function bi(b,Y,ie){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Ce=b.length;ne<Ce;ne++){const Ve=b[ne],Ke=Ve.object,Pe=Ve.geometry,at=re===null?Ve.material:re,Je=Ve.group;Ke.layers.test(ie.layers)&&Ir(Ke,Y,ie,Pe,at,Je)}}function Ir(b,Y,ie,re,ne,Ce){b.onBeforeRender(A,Y,ie,re,ne,Ce),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(A,Y,ie,re,b,Ce),ne.transparent===!0&&ne.side===Ei&&ne.forceSinglePass===!1?(ne.side=Bn,ne.needsUpdate=!0,A.renderBufferDirect(ie,Y,re,ne,b,Ce),ne.side=Ki,ne.needsUpdate=!0,A.renderBufferDirect(ie,Y,re,ne,b,Ce),ne.side=Ei):A.renderBufferDirect(ie,Y,re,ne,b,Ce),b.onAfterRender(A,Y,ie,re,ne,Ce)}function Qi(b,Y,ie){Y.isScene!==!0&&(Y=ke);const re=rt.get(b),ne=y.state.lights,Ce=y.state.shadowsArray,Ve=ne.state.version,Ke=He.getParameters(b,ne.state,Ce,Y,ie),Pe=He.getProgramCacheKey(Ke);let at=re.programs;re.environment=b.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(b.isMeshStandardMaterial?Q:w).get(b.envMap||re.environment),at===void 0&&(b.addEventListener("dispose",Ae),at=new Map,re.programs=at);let Je=at.get(Pe);if(Je!==void 0){if(re.currentProgram===Je&&re.lightsStateVersion===Ve)return ga(b,Ke),Je}else Ke.uniforms=He.getUniforms(b),b.onBuild(ie,Ke,A),b.onBeforeCompile(Ke,A),Je=He.acquireProgram(Ke,Pe),at.set(Pe,Je),re.uniforms=Ke.uniforms;const nt=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(nt.clippingPlanes=st.uniform),ga(b,Ke),re.needsLights=_a(b),re.lightsStateVersion=Ve,re.needsLights&&(nt.ambientLightColor.value=ne.state.ambient,nt.lightProbe.value=ne.state.probe,nt.directionalLights.value=ne.state.directional,nt.directionalLightShadows.value=ne.state.directionalShadow,nt.spotLights.value=ne.state.spot,nt.spotLightShadows.value=ne.state.spotShadow,nt.rectAreaLights.value=ne.state.rectArea,nt.ltc_1.value=ne.state.rectAreaLTC1,nt.ltc_2.value=ne.state.rectAreaLTC2,nt.pointLights.value=ne.state.point,nt.pointLightShadows.value=ne.state.pointShadow,nt.hemisphereLights.value=ne.state.hemi,nt.directionalShadowMap.value=ne.state.directionalShadowMap,nt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,nt.spotShadowMap.value=ne.state.spotShadowMap,nt.spotLightMatrix.value=ne.state.spotLightMatrix,nt.spotLightMap.value=ne.state.spotLightMap,nt.pointShadowMap.value=ne.state.pointShadowMap,nt.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=Je,re.uniformsList=null,Je}function ma(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=$l.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function ga(b,Y){const ie=rt.get(b);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function dc(b,Y,ie,re,ne){Y.isScene!==!0&&(Y=ke),L.resetTextureUnits();const Ce=Y.fog,Ve=re.isMeshStandardMaterial?Y.environment:null,Ke=U===null?A.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nn,Pe=(re.isMeshStandardMaterial?Q:w).get(re.envMap||Ve),at=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!ie.morphAttributes.position,Nt=!!ie.morphAttributes.normal,En=!!ie.morphAttributes.color;let jt=Cr;re.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(jt=A.toneMapping);const Ln=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,vt=Ln!==void 0?Ln.length:0,lt=rt.get(re),Tn=y.state.lights;if(ee===!0&&(fe===!0||b!==R)){const Pn=b===R&&re.id===ce;st.setState(re,b,Pn)}let Ot=!1;re.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Tn.state.version||lt.outputColorSpace!==Ke||ne.isBatchedMesh&&lt.batching===!1||!ne.isBatchedMesh&&lt.batching===!0||ne.isInstancedMesh&&lt.instancing===!1||!ne.isInstancedMesh&&lt.instancing===!0||ne.isSkinnedMesh&&lt.skinning===!1||!ne.isSkinnedMesh&&lt.skinning===!0||ne.isInstancedMesh&&lt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&lt.instancingColor===!1&&ne.instanceColor!==null||lt.envMap!==Pe||re.fog===!0&&lt.fog!==Ce||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==st.numPlanes||lt.numIntersection!==st.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==Je||lt.morphTargets!==nt||lt.morphNormals!==Nt||lt.morphColors!==En||lt.toneMapping!==jt||et.isWebGL2===!0&&lt.morphTargetsCount!==vt)&&(Ot=!0):(Ot=!0,lt.__version=re.version);let Li=lt.currentProgram;Ot===!0&&(Li=Qi(re,Y,ne));let va=!1,_i=!1,Ji=!1;const Wt=Li.getUniforms(),jn=lt.uniforms;if(ze.useProgram(Li.program)&&(va=!0,_i=!0,Ji=!0),re.id!==ce&&(ce=re.id,_i=!0),va||R!==b){Wt.setValue(te,"projectionMatrix",b.projectionMatrix),Wt.setValue(te,"viewMatrix",b.matrixWorldInverse);const Pn=Wt.map.cameraPosition;Pn!==void 0&&Pn.setValue(te,Ie.setFromMatrixPosition(b.matrixWorld)),et.logarithmicDepthBuffer&&Wt.setValue(te,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Wt.setValue(te,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,_i=!0,Ji=!0)}if(ne.isSkinnedMesh){Wt.setOptional(te,ne,"bindMatrix"),Wt.setOptional(te,ne,"bindMatrixInverse");const Pn=ne.skeleton;Pn&&(et.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Wt.setValue(te,"boneTexture",Pn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Wt.setOptional(te,ne,"batchingTexture"),Wt.setValue(te,"batchingTexture",ne._matricesTexture,L));const _o=ie.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0&&et.isWebGL2===!0)&&ut.update(ne,ie,Li),(_i||lt.receiveShadow!==ne.receiveShadow)&&(lt.receiveShadow=ne.receiveShadow,Wt.setValue(te,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(jn.envMap.value=Pe,jn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),_i&&(Wt.setValue(te,"toneMappingExposure",A.toneMappingExposure),lt.needsLights&&Ci(jn,Ji),Ce&&re.fog===!0&&Re.refreshFogUniforms(jn,Ce),Re.refreshMaterialUniforms(jn,re,ae,se,Se),$l.upload(te,ma(lt),jn,L)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&($l.upload(te,ma(lt),jn,L),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Wt.setValue(te,"center",ne.center),Wt.setValue(te,"modelViewMatrix",ne.modelViewMatrix),Wt.setValue(te,"normalMatrix",ne.normalMatrix),Wt.setValue(te,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Pn=re.uniformsGroups;for(let Dr=0,xa=Pn.length;Dr<xa;Dr++)if(et.isWebGL2){const fs=Pn[Dr];xt.update(fs,Li),xt.bind(fs,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Ci(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function _a(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,Y,ie){rt.get(b.texture).__webglTexture=Y,rt.get(b.depthTexture).__webglTexture=ie;const re=rt.get(b);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,Y){const ie=rt.get(b);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,ie=0){U=b,z=Y,F=ie;let re=!0,ne=null,Ce=!1,Ve=!1;if(b){const Pe=rt.get(b);Pe.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(te.FRAMEBUFFER,null),re=!1):Pe.__webglFramebuffer===void 0?L.setupRenderTarget(b):Pe.__hasExternalTextures&&L.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ve=!0);const Je=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?ne=Je[Y][ie]:ne=Je[Y],Ce=!0):et.isWebGL2&&b.samples>0&&L.useMultisampledRTT(b)===!1?ne=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[ie]:ne=Je,I.copy(b.viewport),oe.copy(b.scissor),ue=b.scissorTest}else I.copy(W).multiplyScalar(ae).floor(),oe.copy(N).multiplyScalar(ae).floor(),ue=V;if(ze.bindFramebuffer(te.FRAMEBUFFER,ne)&&et.drawBuffers&&re&&ze.drawBuffers(b,ne),ze.viewport(I),ze.scissor(oe),ze.setScissorTest(ue),Ce){const Pe=rt.get(b.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,ie)}else if(Ve){const Pe=rt.get(b.texture),at=Y||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Pe.__webglTexture,ie||0,at)}ce=-1},this.readRenderTargetPixels=function(b,Y,ie,re,ne,Ce,Ve){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ke=Ke[Ve]),Ke){ze.bindFramebuffer(te.FRAMEBUFFER,Ke);try{const Pe=b.texture,at=Pe.format,Je=Pe.type;if(at!==ni&&Fe.convert(at)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Je===ca&&(We.has("EXT_color_buffer_half_float")||et.isWebGL2&&We.has("EXT_color_buffer_float"));if(Je!==Lr&&Fe.convert(Je)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===ji&&(et.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-re&&ie>=0&&ie<=b.height-ne&&te.readPixels(Y,ie,re,ne,Fe.convert(at),Fe.convert(Je),Ce)}finally{const Pe=U!==null?rt.get(U).__webglFramebuffer:null;ze.bindFramebuffer(te.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,Y,ie=0){const re=Math.pow(2,-ie),ne=Math.floor(Y.image.width*re),Ce=Math.floor(Y.image.height*re);L.setTexture2D(Y,0),te.copyTexSubImage2D(te.TEXTURE_2D,ie,0,0,b.x,b.y,ne,Ce),ze.unbindTexture()},this.copyTextureToTexture=function(b,Y,ie,re=0){const ne=Y.image.width,Ce=Y.image.height,Ve=Fe.convert(ie.format),Ke=Fe.convert(ie.type);L.setTexture2D(ie,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ie.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ie.unpackAlignment),Y.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,re,b.x,b.y,ne,Ce,Ve,Ke,Y.image.data):Y.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,re,b.x,b.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ve,Y.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,re,b.x,b.y,Ve,Ke,Y.image),re===0&&ie.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,ie,re,ne=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=b.max.x-b.min.x+1,Ve=b.max.y-b.min.y+1,Ke=b.max.z-b.min.z+1,Pe=Fe.convert(re.format),at=Fe.convert(re.type);let Je;if(re.isData3DTexture)L.setTexture3D(re,0),Je=te.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)L.setTexture2DArray(re,0),Je=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment);const nt=te.getParameter(te.UNPACK_ROW_LENGTH),Nt=te.getParameter(te.UNPACK_IMAGE_HEIGHT),En=te.getParameter(te.UNPACK_SKIP_PIXELS),jt=te.getParameter(te.UNPACK_SKIP_ROWS),Ln=te.getParameter(te.UNPACK_SKIP_IMAGES),vt=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,vt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,vt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,b.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,b.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,b.min.z),ie.isDataTexture||ie.isData3DTexture?te.texSubImage3D(Je,ne,Y.x,Y.y,Y.z,Ce,Ve,Ke,Pe,at,vt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(Je,ne,Y.x,Y.y,Y.z,Ce,Ve,Ke,Pe,vt.data)):te.texSubImage3D(Je,ne,Y.x,Y.y,Y.z,Ce,Ve,Ke,Pe,at,vt),te.pixelStorei(te.UNPACK_ROW_LENGTH,nt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Nt),te.pixelStorei(te.UNPACK_SKIP_PIXELS,En),te.pixelStorei(te.UNPACK_SKIP_ROWS,jt),te.pixelStorei(te.UNPACK_SKIP_IMAGES,Ln),ne===0&&re.generateMipmaps&&te.generateMipmap(Je),ze.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),ze.unbindTexture()},this.resetState=function(){z=0,F=0,U=null,ze.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kd?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?os:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?Bt:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UT extends h_{}UT.prototype.isWebGL1Renderer=!0;class FT extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class OT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[r+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new X;class tf{constructor(e,t,r,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this}setXYZW(e,t,r,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),r=bt(r,this.array),s=bt(s,this.array),a=bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cg=new X,ug=new Lt,dg=new Lt,kT=new X,fg=new pt,Gl=new X,Ed=new Ai,hg=new pt,Td=new ac;class BT extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qp,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Gl),this.boundingBox.expandByPoint(Gl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Gl),this.boundingSphere.expandByPoint(Gl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,s=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ed.copy(this.boundingSphere),Ed.applyMatrix4(s),e.ray.intersectsSphere(Ed)!==!1&&(hg.copy(s).invert(),Td.copy(e.ray).applyMatrix4(hg),!(this.boundingBox!==null&&Td.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Td)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let r=0,s=t.count;r<s;r++){e.fromBufferAttribute(t,r);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,s=this.geometry;ug.fromBufferAttribute(s.attributes.skinIndex,e),dg.fromBufferAttribute(s.attributes.skinWeight,e),cg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=dg.getComponent(a);if(c!==0){const u=ug.getComponent(a);fg.multiplyMatrices(r.bones[u].matrixWorld,r.boneInverses[u]),t.addScaledVector(kT.copy(cg).applyMatrix4(fg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class p_ extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zT extends pn{constructor(e=null,t=1,r=1,s,a,c,u,f,h=dn,m=dn,g,_){super(null,c,u,f,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pg=new pt,HT=new pt;class nf{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,s=this.bones.length;r<s;r++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new pt;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:HT;pg.multiplyMatrices(u,t[a]),pg.toArray(r,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new zT(t,e,e,ni,ji);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,s=e.bones.length;r<s;r++){const a=e.bones[r];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new p_),this.bones.push(c),this.boneInverses.push(new pt().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=r[s];e.boneInverses.push(u.toArray())}return e}}class Vd extends tn{constructor(e,t,r,s=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new pt,mg=new pt,Wl=[],gg=new $i,VT=new pt,ta=new ri,na=new Ai;class GT extends ri{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vd(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<r;s++)this.setMatrixAt(s,VT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Zs),gg.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(gg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Zs),na.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const r=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(r),e.ray.intersectsSphere(na)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Zs),mg.multiplyMatrices(r,Zs),ta.matrixWorld=mg,ta.raycast(e,Wl);for(let c=0,u=Wl.length;c<u;c++){const f=Wl[c];f.instanceId=a,f.object=this,t.push(f)}Wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class m_ extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _g=new X,vg=new X,xg=new pt,wd=new ac,Xl=new Ai;class rf extends Vt{constructor(e=new si,t=new m_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let s=1,a=t.count;s<a;s++)_g.fromBufferAttribute(t,s-1),vg.fromBufferAttribute(t,s),r[s]=r[s-1],r[s]+=_g.distanceTo(vg);e.setAttribute("lineDistance",new Yi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(s),Xl.radius+=a,e.ray.intersectsSphere(Xl)===!1)return;xg.copy(s).invert(),wd.copy(e.ray).applyMatrix4(xg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=new X,m=new X,g=new X,_=new X,S=this.isLineSegments?2:1,M=r.index,y=r.attributes.position;if(M!==null){const x=Math.max(0,c.start),P=Math.min(M.count,c.start+c.count);for(let A=x,C=P-1;A<C;A+=S){const z=M.getX(A),F=M.getX(A+1);if(h.fromBufferAttribute(y,z),m.fromBufferAttribute(y,F),wd.distanceSqToSegment(h,m,_,g)>f)continue;_.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(_);ce<e.near||ce>e.far||t.push({distance:ce,point:g.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,c.start),P=Math.min(y.count,c.start+c.count);for(let A=x,C=P-1;A<C;A+=S){if(h.fromBufferAttribute(y,A),m.fromBufferAttribute(y,A+1),wd.distanceSqToSegment(h,m,_,g)>f)continue;_.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(_);F<e.near||F>e.far||t.push({distance:F,point:g.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}const yg=new X,Sg=new X;class WT extends rf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let s=0,a=t.count;s<a;s+=2)yg.fromBufferAttribute(t,s),Sg.fromBufferAttribute(t,s+1),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+yg.distanceTo(Sg);e.setAttribute("lineDistance",new Yi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XT extends rf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sf extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mg=new pt,Gd=new ac,jl=new Ai,ql=new X;class g_ extends Vt{constructor(e=new si,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(s),jl.radius+=a,e.ray.intersectsSphere(jl)===!1)return;Mg.copy(s).invert(),Gd.copy(e.ray).applyMatrix4(Mg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=r.index,g=r.attributes.position;if(h!==null){const _=Math.max(0,c.start),S=Math.min(h.count,c.start+c.count);for(let M=_,E=S;M<E;M++){const y=h.getX(M);ql.fromBufferAttribute(g,y),Eg(ql,y,f,s,e,t,this)}}else{const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let M=_,E=S;M<E;M++)ql.fromBufferAttribute(g,M),Eg(ql,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Eg(o,e,t,r,s,a,c){const u=Gd.distanceSqToPoint(o);if(u<t){const f=new X;Gd.closestPointToPoint(o,f),f.applyMatrix4(r);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,object:c})}}class of extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qg,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends of{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Yl(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function jT(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function qT(o){function e(s,a){return o[s]-o[a]}const t=o.length,r=new Array(t);for(let s=0;s!==t;++s)r[s]=s;return r.sort(e),r}function Tg(o,e,t){const r=o.length,s=new o.constructor(r);for(let a=0,c=0;c!==r;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function __(o,e,t,r){let s=1,a=o[0];for(;a!==void 0&&a[r]===void 0;)a=o[s++];if(a===void 0)return;let c=a[r];if(c!==void 0)if(Array.isArray(c))do c=a[r],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[r],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[r],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class ha{constructor(e,t,r,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,s=t[r],a=t[r-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=r+2;;){if(s===void 0){if(e<a)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===u)break;if(a=s,s=t[++r],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(r=2,a=u);for(let f=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===f)break;if(s=a,a=t[--r-1],e>=a)break t}c=r,r=0;break n}break e}for(;r<c;){const u=r+c>>>1;e<t[u]?c=u:r=u+1}if(s=t[r],a=t[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,s)}return this.interpolate_(r,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=r[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class YT extends ha{constructor(e,t,r,s){super(e,t,r,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xm,endingEnd:xm}}intervalChanged_(e,t,r){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case ym:a=e,u=2*t-r;break;case Sm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=r}if(f===void 0)switch(this.getSettings_().endingEnd){case ym:c=e,f=2*r-t;break;case Sm:c=1,f=r+s[1]-s[0];break;default:c=e-1,f=t}const h=(r-t)*.5,m=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-r),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,r,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,S=this._weightNext,M=(r-t)/(s-t),E=M*M,y=E*M,x=-_*y+2*_*E-_*M,P=(1+_)*y+(-1.5-2*_)*E+(-.5+_)*M+1,A=(-1-S)*y+(1.5+S)*E+.5*M,C=S*y-S*E;for(let z=0;z!==u;++z)a[z]=x*c[m+z]+P*c[h+z]+A*c[f+z]+C*c[g+z];return a}}class KT extends ha{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=(r-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[h+_]*g+c[f+_]*m;return a}}class $T extends ha{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ri{constructor(e,t,r,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yl(t,this.TimeBufferType),this.values=Yl(r,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Yl(e.times,Array),values:Yl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(r.interpolation=s)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new $T(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new KT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new YT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case Ju:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Ju}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]*=e}return this}trim(e,t){const r=this.times,s=r.length;let a=0,c=s-1;for(;a!==s&&r[a]<e;)++a;for(;c!==-1&&r[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=r.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,s=this.values,a=r.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=r[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&jT(s))for(let u=0,f=s.length;u!==f;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),s=this.getInterpolation()===Ju,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const h=e[u],m=e[u+1];if(h!==m&&(u!==1||h!==e[0]))if(s)f=!0;else{const g=u*r,_=g-r,S=g+r;for(let M=0;M!==r;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[S+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*r,_=c*r;for(let S=0;S!==r;++S)t[_+S]=t[g+S]}++c}}if(a>0){e[c]=e[a];for(let u=a*r,f=c*r,h=0;h!==r;++h)t[f+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,s=new r(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=ao;class mo extends Ri{}mo.prototype.ValueTypeName="bool";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=ua;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class v_ extends Ri{}v_.prototype.ValueTypeName="color";class uo extends Ri{}uo.prototype.ValueTypeName="number";class ZT extends ha{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(r-t)/(s-t);let h=e*u;for(let m=h+u;h!==m;h+=4)Pr.slerpFlat(a,0,c,h-u,c,h,f);return a}}class us extends Ri{InterpolantFactoryMethodLinear(e){return new ZT(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=ao;us.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends Ri{}go.prototype.ValueTypeName="string";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=ua;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends Ri{}fo.prototype.ValueTypeName="vector";class QT{constructor(e,t=-1,r,s=ix){this.name=e,this.tracks=r,this.duration=t,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,s=1/(e.fps||1);for(let c=0,u=r.length;c!==u;++c)t.push(ew(r[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],r=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=r.length;a!==c;++a)t.push(Ri.toJSON(r[a]));return s}static CreateFromMorphTargetSequence(e,t,r,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],h=[];f.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const m=qT(f);f=Tg(f,1,m),h=Tg(h,1,m),!s&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new uo(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/r))}return new this(e,-1,c)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const s=e;r=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<r.length;s++)if(r[s].name===t)return r[s];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,r));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(g,_,S,M,E){if(S.length!==0){const y=[],x=[];__(S,y,x,M),y.length!==0&&E.push(new g(_,y,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const S={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)S[_[M].morphTargets[E]]=-1;for(const E in S){const y=[],x=[];for(let P=0;P!==_[M].morphTargets.length;++P){const A=_[M];y.push(A.time),x.push(A.morphTarget===E?1:0)}s.push(new uo(".morphTargetInfluence["+E+"]",y,x))}f=S.length*c}else{const S=".bones["+t[g].name+"]";r(fo,S+".position",_,"pos",s),r(us,S+".quaternion",_,"rot",s),r(fo,S+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,s=e.length;r!==s;++r){const a=this.tracks[r];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JT(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return fo;case"color":return v_;case"quaternion":return us;case"bool":case"boolean":return mo;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function ew(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JT(o.type);if(o.times===void 0){const t=[],r=[];__(o.keys,t,r,"value"),o.times=t,o.values=r}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Rr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tw{constructor(e,t,r){const s=this;let a=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const nw=new tw;class ds{constructor(e){this.manager=e!==void 0?e:nw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(s,a){r.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class iw extends Error{constructor(e,t){super(e),this.response=t}}class rc extends ds{constructor(e){super(e)}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Rr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:r,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:r,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Wi[e],g=h.body.getReader(),_=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),S=_?parseInt(_):0,M=S!==0;let E=0;const y=new ReadableStream({start(x){P();function P(){g.read().then(({done:A,value:C})=>{if(A)x.close();else{E+=C.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:S});for(let F=0,U=m.length;F<U;F++){const ce=m[F];ce.onProgress&&ce.onProgress(z)}x.enqueue(C),P()}})}}});return new Response(y)}else throw new iw(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,S=new TextDecoder(_);return h.arrayBuffer().then(M=>S.decode(M))}}}).then(h=>{Rr.add(e,h);const m=Wi[e];delete Wi[e];for(let g=0,_=m.length;g<_;g++){const S=m[g];S.onLoad&&S.onLoad(h)}}).catch(h=>{const m=Wi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Wi[e];for(let g=0,_=m.length;g<_;g++){const S=m[g];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rw extends ds{constructor(e){super(e)}load(e,t,r,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Rr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=da("img");function f(){m(),Rr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class sw extends ds{constructor(e){super(e)}load(e,t,r,s){const a=new pn,c=new rw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},r,s),a}}class uc extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ad=new pt,wg=new X,Ag=new X;class af{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(wg),Ag.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ag),t.updateMatrixWorld(),Ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ow extends af{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=lo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(r!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=r,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class aw extends uc{constructor(e,t,r=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=r,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new ow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rg=new pt,ia=new X,Rd=new X;class lw extends af{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,s=this.matrix,a=e.distance||r.far;a!==r.far&&(r.far=a,r.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),r.position.copy(ia),Rd.copy(r.position),Rd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Rd),r.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),Rg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rg)}}class cw extends uc{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new lw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uw extends af{constructor(){super(new Jd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x_ extends uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new uw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dw extends uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class la{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,s=e.length;r<s;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fw extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Rr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Rr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Rr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Rr.add(e,f),a.manager.itemStart(e)}}const lf="\\[\\]\\.:\\/",hw=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",pw="[^"+lf.replace("\\.","")+"]",mw=/((?:WC+[\/:])*)/.source.replace("WC",cf),gw=/(WCOD+)?/.source.replace("WCOD",pw),_w=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),vw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),xw=new RegExp("^"+mw+gw+_w+vw+"$"),yw=["material","materials","bones","map"];class Sw{constructor(e,t,r){const s=r||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,s=this._bindings[r];s!==void 0&&s.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=r.length;s!==a;++s)r[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class Rt{constructor(e,t,r){this.path=t,this.parsedPath=r||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,r):new Rt(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hw,"")}static parseTrackName(e){const t=xw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=r.nodeName.substring(s+1);yw.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=r(u.children);if(f)return f}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)e[t++]=r[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,a=r.length;s!==a;++s)r[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=Sw;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function bg(o,e){if(e===rx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Od||e===Xg){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const r=t.count-2,s=[];if(e===Od)for(let c=1;c<=r;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<r;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Mw extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rw(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Ow(t)}),this.register(function(t){return new kw(t)}),this.register(function(t){return new Cw(t)}),this.register(function(t){return new Lw(t)}),this.register(function(t){return new Pw(t)}),this.register(function(t){return new Nw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new Iw(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new Uw(t)}),this.register(function(t){return new Dw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new zw(t)})}load(e,t,r,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=la.extractUrlBase(e);c=la.resolveURL(h,this.path)}else c=la.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new rc(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},r,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===y_){try{c[mt.KHR_BINARY_GLTF]=new Hw(e)}catch(g){s&&s(g);return}a=JSON.parse(c[mt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new eA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case mt.KHR_MATERIALS_UNLIT:c[g]=new ww;break;case mt.KHR_DRACO_MESH_COMPRESSION:c[g]=new Vw(a,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:c[g]=new Gw;break;case mt.KHR_MESH_QUANTIZATION:c[g]=new Ww;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(r,s)}parseAsync(e,t){const r=this;return new Promise(function(s,a){r.parse(e,t,s,a)})}}function Ew(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tw{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let s=t.cache.get(r);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new it(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],nn);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new x_(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new cw(m),h.distance=g;break;case"spot":h=new aw(m),h.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,wr(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(h),t.cache.add(r,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,a=r.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return r._getNodeRef(t.cache,u,f)})}}class ww{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return ns}extendParams(e,t,r){const s=[];e.color=new it(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],nn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(r.assignTexture(e,"map",a.baseColorTexture,Bt))}return Promise.all(s)}}class Aw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Rw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(r.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(r.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new gt(u,u)}return Promise.all(a)}}class bw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(r.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(r.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class Cw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],nn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(r.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Bt)),c.sheenRoughnessTexture!==void 0&&a.push(r.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class Lw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(r.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class Pw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(r.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(u[0],u[1],u[2],nn),Promise.all(a)}}class Nw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Iw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(r.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(u[0],u[1],u[2],nn),c.specularColorTexture!==void 0&&a.push(r.assignTexture(t,"specularColorMap",c.specularColorTexture,Bt)),Promise.all(a)}}class Dw{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(r.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class Uw{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(r.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class Fw{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class Ow{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,s=r.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=r.textureLoader;if(u.uri){const h=r.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return r.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kw{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,s=r.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=r.textureLoader;if(u.uri){const h=r.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return r.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bw{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const s=r.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(S){return S.buffer}):c.ready.then(function(){const S=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(S),m,g,_,s.mode,s.filter),S})})}else return null}}class zw{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const s=t.meshes[r.mesh];for(const h of s.primitives)if(h.mode!==ei.TRIANGLES&&h.mode!==ei.TRIANGLE_STRIP&&h.mode!==ei.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=r.extensions[this.name].attributes,u=[],f={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(m=>(f[h]=m,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,S=[];for(const M of g){const E=new pt,y=new X,x=new Pr,P=new X(1,1,1),A=new GT(M.geometry,M.material,_);for(let C=0;C<_;C++)f.TRANSLATION&&y.fromBufferAttribute(f.TRANSLATION,C),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,C),f.SCALE&&P.fromBufferAttribute(f.SCALE,C),A.setMatrixAt(C,E.compose(y,x,P));for(const C in f)if(C==="_COLOR_0"){const z=f[C];A.instanceColor=new Vd(z.array,z.itemSize,z.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,f[C]);Vt.prototype.copy.call(A,M),this.parser.assignFinalMaterial(A),S.push(A)}return m.isGroup?(m.clear(),m.add(...S),m):S[0]}))}}const y_="glTF",ra=12,Cg={JSON:1313821514,BIN:5130562};class Hw{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ra),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ra,a=new DataView(e,ra);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===Cg.JSON){const h=new Uint8Array(e,ra+c,u);this.content=r.decode(h)}else if(f===Cg.BIN){const h=ra+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Vw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},h={};for(const m in c){const g=Wd[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Wd[m]||m.toLowerCase();if(c[m]!==void 0){const _=r.accessors[e.attributes[m]],S=no[_.componentType];h[g]=S.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(S){for(const M in S.attributes){const E=S.attributes[M],y=f[M];y!==void 0&&(E.normalized=y)}g(S)},u,h,nn,_)})})}}class Gw{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ww{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class S_ extends ha{constructor(e,t,r,s){super(e,t,r,s)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=r[a+c];return t}interpolate_(e,t,r,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,m=s-t,g=(r-t)/m,_=g*g,S=_*g,M=e*h,E=M-h,y=-2*S+3*_,x=S-_,P=1-y,A=x-_+g;for(let C=0;C!==u;C++){const z=c[E+C+u],F=c[E+C+f]*m,U=c[M+C+u],ce=c[M+C]*m;a[C]=P*z+A*F+y*U+x*ce}return a}}const Xw=new Pr;class jw extends S_{interpolate_(e,t,r,s){const a=super.interpolate_(e,t,r,s);return Xw.fromArray(a).normalize().toArray(a),a}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lg={9728:dn,9729:kn,9984:Fd,9985:Og,9986:Kl,9987:as},Pg={33071:ti,33648:Ql,10497:so},bd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qw={CUBICSPLINE:void 0,LINEAR:ao,STEP:ua},Cd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new of({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),o.DefaultMaterial}function Zr(o,e,t){for(const r in t.extensions)o[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function wr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Kw(o,e,t){let r=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(r=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),r&&s&&a)break}if(!r&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(r){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(h){const m=h[0],g=h[1],_=h[2];return r&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function $w(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let r=0,s=t.length;r<s;r++)o.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zw(o){let e;const t=o.extensions&&o.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ld(t.attributes):e=o.indices+":"+Ld(o.attributes)+":"+o.mode,o.targets!==void 0)for(let r=0,s=o.targets.length;r<s;r++)e+=":"+Ld(o.targets[r]);return e}function Ld(o){let e="";const t=Object.keys(o).sort();for(let r=0,s=t.length;r<s;r++)e+=t[r]+":"+o[t[r]]+";";return e}function Xd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Jw=new pt;class eA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ew,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,s=!1,a=-1;typeof navigator<"u"&&(r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,a=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||r||s&&a<98?this.textureLoader=new sw(this.options.manager):this.textureLoader=new fw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:r,userData:{}};return Zr(a,u,s),wr(u,s),Promise.all(r._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(r[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const s=r.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[h,m]of c.children.entries())a(m,u.children[h])};return a(r,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const s=e(t[r]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&r.push(a)}return r}getDependency(e,t){const r=e+":"+t;let s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(r,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return r.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){r.load(la.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const s=t.byteLength||0,a=t.byteOffset||0;return r.slice(a,a+s)})}loadAccessor(e){const t=this,r=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=bd[s.type],u=no[s.componentType],f=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new tn(h,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=bd[s.type],h=no[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,S=s.bufferView!==void 0?r.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,y;if(S&&S!==g){const x=Math.floor(_/S),P="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let A=t.cache.get(P);A||(E=new h(u,x*S,s.count*S/m),A=new OT(E,S/m),t.cache.add(P,A)),y=new tf(A,f,_%S/m,M)}else u===null?E=new h(s.count*f):E=new h(u,_,s.count*f),y=new tn(E,f,M);if(s.sparse!==void 0){const x=bd.SCALAR,P=no[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,z=new P(c[1],A,s.sparse.count*x),F=new h(c[2],C,s.sparse.count*f);u!==null&&(y=new tn(y.array.slice(),y.itemSize,y.normalized));for(let U=0,ce=z.length;U<ce;U++){const R=z[U];if(y.setX(R,F[U*f]),f>=2&&y.setY(R,F[U*f+1]),f>=3&&y.setZ(R,F[U*f+2]),f>=4&&y.setW(R,F[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,r=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=r.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,r){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,r).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=Lg[_.magFilter]||kn,m.minFilter=Lg[_.minFilter]||as,m.wrapS=Pg[_.wrapS]||so,m.wrapT=Pg[_.wrapT]||so,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const r=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=r.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,S){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const y=new pn(E);y.needsUpdate=!0,_(y)}),t.load(la.resolveURL(g,a.path),M,void 0,S)})}).then(function(g){return h===!0&&u.revokeObjectURL(f),g.userData.mimeType=c.mimeType||Qw(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,r,s){const a=this;return this.getDependency("texture",r.index).then(function(c){if(!c)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(c=c.clone(),c.channel=r.texCoord),a.extensions[mt.KHR_TEXTURE_TRANSFORM]){const u=r.extensions!==void 0?r.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+r.uuid;let f=this.cache.get(u);f||(f=new sf,wi.prototype.copy.call(f,r),f.color.copy(r.color),f.map=r.map,f.sizeAttenuation=!1,this.cache.add(u,f)),r=f}else if(e.isLine){const u="LineBasicMaterial:"+r.uuid;let f=this.cache.get(u);f||(f=new m_,wi.prototype.copy.call(f,r),f.color.copy(r.color),f.map=r.map,this.cache.add(u,f)),r=f}if(s||a||c){let u="ClonedMaterial:"+r.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=r.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(r))),r=f}e.material=r}getMaterialType(){return of}loadMaterial(e){const t=this,r=this.json,s=this.extensions,a=r.materials[e];let c;const u={},f=a.extensions||{},h=[];if(f[mt.KHR_MATERIALS_UNLIT]){const g=s[mt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new it(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],nn),u.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,Bt)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ei);const m=a.alphaMode||Cd.OPAQUE;if(m===Cd.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Cd.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==ns&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new gt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==ns&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==ns){const g=a.emissiveFactor;u.emissive=new it().setRGB(g[0],g[1],g[2],nn)}return a.emissiveTexture!==void 0&&c!==ns&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,Bt)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),wr(g,a),t.associations.set(g,{materials:e}),a.extensions&&Zr(s,g,a),g})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,s=this.primitiveCache;function a(u){return r[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return Ng(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],m=Zw(h),g=s[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=Ng(new si,h,t),s[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,r=this.json,s=this.extensions,a=r.meshes[e],c=a.primitives,u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f].material===void 0?Yw(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let S=0,M=m.length;S<M;S++){const E=m[S],y=c[S];let x;const P=h[S];if(y.mode===ei.TRIANGLES||y.mode===ei.TRIANGLE_STRIP||y.mode===ei.TRIANGLE_FAN||y.mode===void 0)x=a.isSkinnedMesh===!0?new BT(E,P):new ri(E,P),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===ei.TRIANGLE_STRIP?x.geometry=bg(x.geometry,Xg):y.mode===ei.TRIANGLE_FAN&&(x.geometry=bg(x.geometry,Od));else if(y.mode===ei.LINES)x=new WT(E,P);else if(y.mode===ei.LINE_STRIP)x=new rf(E,P);else if(y.mode===ei.LINE_LOOP)x=new XT(E,P);else if(y.mode===ei.POINTS)x=new g_(E,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&$w(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),wr(x,a),y.extensions&&Zr(s,x,y),t.assignFinalMaterial(x),g.push(x)}for(let S=0,M=g.length;S<M;S++)t.associations.set(g[S],{meshes:e,primitives:S});if(g.length===1)return a.extensions&&Zr(s,g[0],a),g[0];const _=new is;a.extensions&&Zr(s,_,a),t.associations.set(_,{meshes:e});for(let S=0,M=g.length;S<M;S++)_.add(g[S]);return _})}loadCamera(e){let t;const r=this.json.cameras[e],s=r[r.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new Cn(Cx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):r.type==="orthographic"&&(t=new Jd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),wr(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let s=0,a=t.joints.length;s<a;s++)r.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){u.push(g);const _=new pt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new nf(u,f)})}loadAnimation(e){const t=this.json,r=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const S=s.channels[g],M=s.samplers[S.sampler],E=S.target,y=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,P=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",y)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",P)),h.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],S=g[1],M=g[2],E=g[3],y=g[4],x=[];for(let P=0,A=_.length;P<A;P++){const C=_[P],z=S[P],F=M[P],U=E[P],ce=y[P];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const R=r._createAnimationTracks(C,z,F,U,ce);if(R)for(let I=0;I<R.length;I++)x.push(R[I])}return new QT(a,void 0,x)})}createNodeMesh(e){const t=this.json,r=this,s=t.nodes[e];return s.mesh===void 0?null:r.getDependency("mesh",s.mesh).then(function(a){const c=r._getNodeRef(r.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,h=s.weights.length;f<h;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,r=this,s=t.nodes[e],a=r._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,m=u.length;h<m;h++)c.push(r.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):r.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(S){S.isSkinnedMesh&&S.bind(_,Jw)});for(let S=0,M=g.length;S<M;S++)m.add(g[S]);return m})}_loadNodeShallow(e){const t=this.json,r=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let m;if(a.isBone===!0?m=new p_:h.length>1?m=new is:h.length===1?m=h[0]:m=new Vt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),wr(m,a),a.extensions&&Zr(r,m,a),a.matrix!==void 0){const g=new pt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],s=this,a=new is;r.name&&(a.name=s.createUniqueName(r.name)),wr(a,r),r.extensions&&Zr(t,a,r);const c=r.nodes||[],u=[];for(let f=0,h=c.length;f<h;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const h=m=>{const g=new Map;for(const[_,S]of s.associations)(_ instanceof wi||_ instanceof pn)&&g.set(_,S);return m.traverse(_=>{const S=s.associations.get(_);S!=null&&g.set(_,S)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,r,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Tr[a.path]===Tr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let h;switch(Tr[a.path]){case Tr.weights:h=uo;break;case Tr.rotation:h=us;break;case Tr.position:case Tr.scale:h=fo;break;default:switch(r.itemSize){case 1:h=uo;break;case 2:case 3:default:h=fo;break}break}const m=s.interpolation!==void 0?qw[s.interpolation]:ao,g=this._getArrayFromAccessor(r);for(let _=0,S=f.length;_<S;_++){const M=new h(f[_]+"."+Tr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=Xd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*r;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(r){const s=this instanceof us?jw:S_;return new s(this.times,this.values,this.getValueSize()/3,r)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tA(o,e,t){const r=e.attributes,s=new $i;if(r.POSITION!==void 0){const u=t.json.accessors[r.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(s.set(new X(f[0],f[1],f[2]),new X(h[0],h[1],h[2])),u.normalized){const m=Xd(no[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new X,f=new X;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],S=_.min,M=_.max;if(S!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(S[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(S[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(S[2]),Math.abs(M[2]))),_.normalized){const E=Xd(no[_.componentType]);f.multiplyScalar(E)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Ai;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function Ng(o,e,t){const r=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in r){const u=Wd[c]||c.toLowerCase();u in o.attributes||s.push(a(r[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Et.workingColorSpace!==nn&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),wr(o,e),tA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Kw(o,e.targets,t):o})}const Pd=new WeakMap;class nA extends ds{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,s){const a=new rc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,c=>{this.parse(c,t,s)},r,s)}parse(e,t,r=()=>{}){this.decodeDracoFile(e,t,null,null,Bt).catch(r)}decodeDracoFile(e,t,r,s,a=nn,c=()=>{}){const u={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!r,vertexColorSpace:a};return this.decodeGeometry(e,u).then(t).catch(c)}decodeGeometry(e,t){const r=JSON.stringify(t);if(Pd.has(e)){const f=Pd.get(e);if(f.key===r)return f.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const a=this.workerNextTaskID++,c=e.byteLength,u=this._getWorker(a,c).then(f=>(s=f,new Promise((h,m)=>{s._callbacks[a]={resolve:h,reject:m},s.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(f=>this._createGeometry(f.geometry));return u.catch(()=>!0).then(()=>{s&&a&&this._releaseTask(s,a)}),Pd.set(e,{key:r,promise:u}),u}_createGeometry(e){const t=new si;e.index&&t.setIndex(new tn(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r],a=s.name,c=s.array,u=s.itemSize,f=new tn(c,u);a==="color"&&(this._assignVertexColorSpace(f,s.vertexColorSpace),f.normalized=!(c instanceof Float32Array)),t.setAttribute(a,f)}return t}_assignVertexColorSpace(e,t){if(t!==Bt)return;const r=new it;for(let s=0,a=e.count;s<a;s++)r.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,r.r,r.g,r.b)}_loadLibrary(e,t){const r=new rc(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise((s,a)=>{r.load(e,s,void 0,a)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(r=>{const s=r[0];e||(this.decoderConfig.wasmBinary=r[1]);const a=iA.toString(),c=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(a){const c=a.data;switch(c.type){case"decode":s._callbacks[c.id].resolve(c);break;case"error":s._callbacks[c.id].reject(c);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+c.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,a){return s._taskLoad>a._taskLoad?-1:1});const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function iA(){let o,e;onmessage=function(c){const u=c.data;switch(u.type){case"init":o=u.decoderConfig,e=new Promise(function(m){o.onModuleLoaded=function(g){m({draco:g})},DracoDecoderModule(o)});break;case"decode":const f=u.buffer,h=u.taskConfig;e.then(m=>{const g=m.draco,_=new g.Decoder;try{const S=t(g,_,new Int8Array(f),h),M=S.attributes.map(E=>E.array.buffer);S.index&&M.push(S.index.array.buffer),self.postMessage({type:"decode",id:u.id,geometry:S},M)}catch(S){console.error(S),self.postMessage({type:"error",id:u.id,error:S.message})}finally{g.destroy(_)}});break}};function t(c,u,f,h){const m=h.attributeIDs,g=h.attributeTypes;let _,S;const M=u.GetEncodedGeometryType(f);if(M===c.TRIANGULAR_MESH)_=new c.Mesh,S=u.DecodeArrayToMesh(f,f.byteLength,_);else if(M===c.POINT_CLOUD)_=new c.PointCloud,S=u.DecodeArrayToPointCloud(f,f.byteLength,_);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!S.ok()||_.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+S.error_msg());const E={index:null,attributes:[]};for(const y in m){const x=self[g[y]];let P,A;if(h.useUniqueIDs)A=m[y],P=u.GetAttributeByUniqueId(_,A);else{if(A=u.GetAttributeId(_,c[m[y]]),A===-1)continue;P=u.GetAttribute(_,A)}const C=s(c,u,_,y,x,P);y==="color"&&(C.vertexColorSpace=h.vertexColorSpace),E.attributes.push(C)}return M===c.TRIANGULAR_MESH&&(E.index=r(c,u,_)),c.destroy(_),E}function r(c,u,f){const m=f.num_faces()*3,g=m*4,_=c._malloc(g);u.GetTrianglesUInt32Array(f,g,_);const S=new Uint32Array(c.HEAPF32.buffer,_,m).slice();return c._free(_),{array:S,itemSize:1}}function s(c,u,f,h,m,g){const _=g.num_components(),M=f.num_points()*_,E=M*m.BYTES_PER_ELEMENT,y=a(c,m),x=c._malloc(E);u.GetAttributeDataArrayForAllPoints(f,g,y,E,x);const P=new m(c.HEAPF32.buffer,x,M).slice();return c._free(x),{name:h,array:P,itemSize:_}}function a(c,u){switch(u){case Float32Array:return c.DT_FLOAT32;case Int8Array:return c.DT_INT8;case Int16Array:return c.DT_INT16;case Int32Array:return c.DT_INT32;case Uint8Array:return c.DT_UINT8;case Uint16Array:return c.DT_UINT16;case Uint32Array:return c.DT_UINT32}}}const rA=3,sA=60,oA=1e3/sA,aA=()=>{const o=Zt.useRef(null),e=Zt.useRef(null),t=Zt.useRef(null),r=Zt.useRef(null),s=Zt.useRef(null),a=Zt.useRef(null),c=Zt.useRef(null),u=Zt.useRef(0),[f,h]=Zt.useState(!1),[m,g]=Zt.useState(!0),_=Zt.useCallback(S=>{if(!(!e.current||!t.current||!r.current)){if(S-u.current<oA){c.current=requestAnimationFrame(_);return}u.current=S;try{const M=S*.001;if(a.current&&(a.current.rotation.x=M*.1,a.current.rotation.y=M*.05),s.current){const E=(s.current.rotation.y+.01)%(Math.PI*2);s.current.rotation.y=E,s.current.position.y=Math.sin(M*1.2)*.05,s.current.scale.x!==1&&s.current.scale.set(1,1,1)}r.current.render(e.current,t.current),c.current=requestAnimationFrame(_)}catch(M){console.error("Animation error:",M),r.current&&e.current&&t.current&&r.current.render(e.current,t.current),c.current=requestAnimationFrame(_)}}},[]);return Zt.useEffect(()=>{let S=0,M=!1,E=!1;if(!o.current)return;const y=o.current,x=document.createElement("canvas");if(!(x.getContext("webgl")||x.getContext("experimental-webgl"))){console.warn("WebGL not available, showing fallback"),h(!0);return}try{let A=function(){if(E)return;const W=new Mw,N=new nA;N.setDecoderPath("/draco/"),W.setDRACOLoader(N),W.load("/assets/3d/proteindna.glb",V=>{if(M||E)return;M=!0,g(!1);const j=V.scene;j.scale.set(8,8,8),j.position.set(0,0,0),j.traverse(ee=>{ee.isMesh&&(ee.castShadow=!1,ee.receiveShadow=!1,ee.material&&ee.material.isMeshStandardMaterial&&(ee.material.roughness=.7,ee.material.metalness=.1,ee.material.needsUpdate=!0),ee.geometry&&(ee.geometry.computeBoundingSphere(),ee.geometry.computeBoundingBox()))}),s.current=j,C.add(j),!ue&&!E&&(ue=!0,u.current=performance.now(),_(performance.now()))},()=>{},V=>{console.error("Model loading error:",V),S<rA&&!E?(S++,setTimeout(A,1e3)):(h(!0),g(!1))})};const C=new FT;e.current=C;const z=y.clientWidth,F=y.clientHeight,U=new Cn(75,z/F,.1,1e3),ce=window.innerWidth<=768;U.position.z=ce?2.3:2,U.position.y=.1,U.position.x=-.1,t.current=U;const R=new h_({antialias:!0,alpha:!0,powerPreference:"high-performance",stencil:!1,depth:!0});R.setSize(z,F),R.setClearColor(0,0),R.shadowMap.enabled=!1,R.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current=R,y.appendChild(R.domElement),R.domElement.style.width="100%",R.domElement.style.height="100%",R.domElement.style.position="relative",R.domElement.style.left="0",R.domElement.style.top="0";const I=new dw(16777215,.8);C.add(I);const oe=new x_(16775399,1.5);oe.position.set(5,10,7),C.add(oe);let ue=!1;A();const _e=50,H=new si,Z=new Float32Array(_e*3),se=new Float32Array(_e*3);for(let W=0;W<_e;W++)Z[W*3]=(Math.random()-.5)*8,Z[W*3+1]=(Math.random()-.5)*8,Z[W*3+2]=(Math.random()-.5)*8,se[W*3]=.6+Math.random()*.4,se[W*3+1]=.2+Math.random()*.3,se[W*3+2]=.8+Math.random()*.2;H.setAttribute("position",new tn(Z,3)),H.setAttribute("color",new tn(se,3));const ae=new sf({size:.04,vertexColors:!0,transparent:!0,opacity:.5}),G=new g_(H,ae);a.current=G,C.add(G);const $=()=>{if(E||!U||!R||!y)return;const W=y.clientWidth,N=y.clientHeight;U.aspect=W/N,U.updateProjectionMatrix(),R.setSize(W,N)};return window.addEventListener("resize",$),()=>{E=!0,c.current&&(cancelAnimationFrame(c.current),c.current=null),window.removeEventListener("resize",$),R&&y.contains(R.domElement)&&(y.removeChild(R.domElement),R.dispose()),C&&C.clear(),e.current=null,t.current=null,r.current=null,s.current=null,a.current=null}}catch(A){console.error("3D setup error:",A),h(!0),g(!1)}},[_]),le.jsxs("div",{ref:o,className:"hero-3d",style:{width:"100%",height:"100%",position:"relative"},children:[m&&le.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",color:"#666",fontSize:"14px",zIndex:1},children:"Loading 3D Model..."}),f&&le.jsx("img",{src:"/assets/images/fallback.png",alt:"3D Fallback",className:"hero-3d-fallback",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"300px",height:"auto",zIndex:1}})]})},lA=()=>{const o=Zt.useRef([]);return Zt.useEffect(()=>{document.title="Varosync - Home"},[]),Zt.useEffect(()=>{const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&r.target.classList.add("statement-visible")})},{threshold:.15});return o.current.forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[]),le.jsxs(le.Fragment,{children:[le.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-10,pointerEvents:"none",background:`
            linear-gradient(120deg, #FBEEF5 0%, #FDF5F9 60%, transparent 100%),
            linear-gradient(60deg, #FFF9FC 10%, transparent 80%),
            linear-gradient(200deg, #FDF5F9 20%, #FFF9FC 80%, transparent 100%),
            linear-gradient(90deg, #FBEEF5 0%, transparent 100%)
          `,transition:"background 1s"},"aria-hidden":"true"}),le.jsxs("div",{className:"section home-hero",style:{position:"relative"},children:[le.jsx("div",{className:"spacing nav-height"}),le.jsx("div",{className:"spacing _100px tablet-60px mobile-40px"}),le.jsx("div",{className:"container",children:le.jsxs("div",{className:"comp-hero-card-module a--group",children:[le.jsx("div",{className:"list-horizontal just-right a--group",children:le.jsx("div",{className:"flex-w-child-100",children:le.jsxs("div",{className:"el extra-pad-bottom",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,transitionTimingFunction:"ease"},children:[le.jsxs("div",{className:"flex-horizontal",children:[le.jsx("div",{className:"news-image-module-image-wrap flex-child-grow",children:le.jsxs("h1",{className:"type-h1",children:["Most programs fail ",le.jsx("em",{children:"after"})," the molecule works."]})}),le.jsx("div",{className:"flex-w-child-50 tablet-hidden"})]}),le.jsx("div",{className:"animate-parent",children:le.jsxs("div",{className:"a--anim",children:[le.jsx("div",{className:"a--delay",children:"0"}),le.jsx("div",{className:"a--type",children:"a--up"}),le.jsx("div",{className:"a--type",children:"none"})]})})]})})}),le.jsxs("div",{className:"list-horizontal min1t a--group",children:[le.jsx("div",{className:"flex-child-grow",children:le.jsxs("div",{className:"el hero-text-el",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,height:"100%",transitionTimingFunction:"ease"},children:[le.jsx("div",{className:"news-image-module-image-wrap flex-bottom-left",children:le.jsx("div",{className:"max-w-66 max-w-560px",children:le.jsx("p",{className:"hero-subtext",children:"Modeling what screens cannot measure."})})}),le.jsx("div",{className:"animate-parent",children:le.jsxs("div",{className:"a--anim",children:[le.jsx("div",{className:"a--delay",children:"2"}),le.jsx("div",{className:"a--type",children:"a--up"}),le.jsx("div",{className:"a--type",children:"a--h-150-100"})]})})]})}),le.jsx("div",{className:"flex-w-child-25 tablet-1-6th min1l",children:le.jsx("div",{className:"el el-empty",style:{transitionDuration:"1s",transform:"translate(0px, 0px)",opacity:1,transitionTimingFunction:"ease"},children:le.jsx("div",{className:"animate-parent",children:le.jsxs("div",{className:"a--anim",children:[le.jsx("div",{className:"a--delay",children:"1"}),le.jsx("div",{className:"a--type",children:"a--up"}),le.jsx("div",{className:"a--type",children:"none"})]})})})})]}),le.jsx("div",{className:"animate-list",children:le.jsxs("div",{className:"a--list-settings",children:[le.jsx("div",{className:"a--type",children:"a--up"}),le.jsx("div",{className:"a--columns-desktop",children:"3"}),le.jsx("div",{className:"a--columns-tablet",children:"2"}),le.jsx("div",{className:"a--columns-mobile",children:"1"})]})})]})}),le.jsxs("div",{className:"hero-3d-overlay-grid",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:10,display:"grid",gridTemplateColumns:"1fr minmax(320px, 1fr)",pointerEvents:"none"},children:[le.jsx("div",{style:{pointerEvents:"none",width:"100%",height:"100%"}}),le.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",width:"100%",height:"100%",overflow:"hidden",minWidth:0},children:le.jsx("div",{className:"hero-3d",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:le.jsx(aA,{})})})]})]}),le.jsx("style",{children:`
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
      `}),le.jsxs("section",{className:"statement-section statement-fact",ref:e=>{o.current[0]=e},children:[le.jsx("div",{className:"statement-blob-area statement-blob-area--left",children:le.jsx("img",{src:"/assets/images/landing3.png",alt:"",className:"statement-blob-img"})}),le.jsx("div",{className:"statement-inner",children:le.jsx("p",{className:"statement-primary",children:"Affinity is not the bottleneck."})})]}),le.jsxs("section",{className:"statement-section statement-critique",ref:e=>{o.current[1]=e},children:[le.jsxs("div",{className:"statement-inner",children:[le.jsx("p",{className:"statement-primary",children:"Screening is negative selection."}),le.jsx("p",{className:"statement-secondary",children:"It discards failure, but cannot manufacture success."})]}),le.jsx("div",{className:"statement-blob-area statement-blob-area--right",children:le.jsx("img",{src:"/assets/images/landing1.png",alt:"",className:"statement-blob-img"})})]}),le.jsxs("section",{className:"statement-section statement-hook",ref:e=>{o.current[2]=e},children:[le.jsx("div",{className:"statement-blob-area statement-blob-area--left",children:le.jsx("img",{src:"/assets/images/landing2.png",alt:"",className:"statement-blob-img",style:{transform:"scaleX(-1)"}})}),le.jsx("div",{className:"statement-inner",children:le.jsx("p",{className:"statement-primary",children:"Performance must be an input, not an outcome."})})]}),le.jsx("section",{className:"trusted-section",children:le.jsxs("div",{className:"trusted-container",children:[le.jsx("h2",{className:"trusted-label",children:"Trusted by"}),le.jsxs("div",{className:"trusted-logos",children:[le.jsx("a",{href:"https://www.ucsf.edu",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/UCSF.png",alt:"UCSF",className:"trusted-logo",loading:"lazy"})}),le.jsx("a",{href:"https://medicine.yale.edu",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/Yale.png",alt:"Yale School of Medicine",className:"trusted-logo trusted-logo-tall",loading:"lazy"})}),le.jsx("a",{href:"https://www.columbia.edu",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/Columbia.png",alt:"Columbia University",className:"trusted-logo trusted-logo-columbia",loading:"lazy"})}),le.jsx("a",{href:"https://www.jclinic.mit.edu",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/MIT_Jameel.png",alt:"MIT Jameel Clinic",className:"trusted-logo trusted-logo-jameel",loading:"lazy"})}),le.jsx("a",{href:"https://new.nsf.gov/funding/initiatives/i-corps",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/nsf-icorps.png",alt:"NSF I-Corps",className:"trusted-logo",loading:"lazy"})}),le.jsx("a",{href:"https://www.nvidia.com/en-us/startups/",target:"_blank",rel:"noopener noreferrer",children:le.jsx("img",{src:"/assets/images/inceptionlogo.svg",alt:"NVIDIA Inception",className:"trusted-logo",loading:"lazy"})})]})]})}),le.jsx("style",{children:`
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
          height: 60px;
        }

        ._100px {
          height: 60px;
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
          min-height: 0;
          display: flex;
          align-items: flex-start;
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
          align-items: flex-start;
          display: flex;
        }

        .type-h1 {
          font-size: 3.8rem;
          font-weight: 300;
          line-height: 1.2;
          color: #000;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          font-family: var(--font-family);
        }

        .type-xl {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #000;
          font-weight: 300;
          margin-top: 0;
          font-family: var(--font-family);
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
            align-items: flex-start;
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
            height: 20px;
          }

          .spacing.nav-height {
            height: 60px;
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
            align-items: flex-start;
          }

          .el-empty {
            min-height: 0;
          }
        }
      `})]})};function cA(){return le.jsxs("div",{className:"app",children:[le.jsx(f0,{}),le.jsx("main",{className:"main",children:le.jsx(lA,{})}),le.jsx(h0,{})]})}d0.createRoot(document.getElementById("root")).render(le.jsx(r0.StrictMode,{children:le.jsx(cA,{})}));
//# sourceMappingURL=index-Cy6QaAvq.js.map
