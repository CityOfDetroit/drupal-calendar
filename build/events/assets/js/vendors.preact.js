!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="78cd4a65-7036-4b70-9e5e-cbae82ebaea7",e._sentryDebugIdIdentifier="sentry-dbid-78cd4a65-7036-4b70-9e5e-cbae82ebaea7")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"8d96994f52588e9a5c7950afacaa38521f01975a"},(self.webpackChunkdrupal_calendar=self.webpackChunkdrupal_calendar||[]).push([[611],{299:(e,n,t)=>{t.d(n,{d5:()=>T});var _,o,r,l=t(172),i=[],u=[],c=l.fF.__b,f=l.fF.__r,a=l.fF.diffed,s=l.fF.__c,p=l.fF.unmount;function d(){for(var e;e=i.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(y),e.__H.__h.forEach(m),e.__H.__h=[]}catch(_){e.__H.__h=[],l.fF.__e(_,e.__v)}}l.fF.__b=function(e){_=null,c&&c(e)},l.fF.__r=function(e){f&&f(e),0;var n=(_=e.__c).__H;n&&(o===_?(n.__h=[],_.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=u,e.__N=e.i=void 0}))):(n.__h.forEach(y),n.__h.forEach(m),n.__h=[])),o=_},l.fF.diffed=function(e){a&&a(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==i.push(n)&&r===l.fF.requestAnimationFrame||((r=l.fF.requestAnimationFrame)||v)(d)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==u&&(e.__=e.__V),e.i=void 0,e.__V=u}))),o=_=null},l.fF.__c=function(e,n){n.some((function(e){try{e.__h.forEach(y),e.__h=e.__h.filter((function(e){return!e.__||m(e)}))}catch(o){n.some((function(e){e.__h&&(e.__h=[])})),n=[],l.fF.__e(o,e.__v)}})),s&&s(e,n)},l.fF.unmount=function(e){p&&p(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{y(e)}catch(e){n=e}})),t.__H=void 0,n&&l.fF.__e(n,t.__v))};var h="function"==typeof requestAnimationFrame;function v(e){var n,t=function(){clearTimeout(_),h&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);h&&(n=requestAnimationFrame(t))}function y(e){var n=_,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),_=n}function m(e){var n=_;e.__c=e.__(),_=n}function b(e,n){for(var t in n)e[t]=n[t];return e}function g(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var _ in n)if("__source"!==_&&e[_]!==n[_])return!0;return!1}function k(e){this.props=e}(k.prototype=new l.uA).isPureReactComponent=!0,k.prototype.shouldComponentUpdate=function(e,n){return g(this.props,e)||g(this.state,n)};var F=l.fF.__b;l.fF.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),F&&F(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var C=function(e,n){return null==e?null:(0,l.v2)((0,l.v2)(e).map(n))},w=(l.v2,l.fF.__e);l.fF.__e=function(e,n,t,_){if(e.then)for(var o,r=n;r=r.__;)if((o=r.__c)&&o.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),o.__c(e,n);w(e,n,t,_)};var x=l.fF.unmount;function P(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=b({},e)).__c&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return P(e,n,t)}))),e}function E(e,n,t){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return E(e,n,t)})),e.__c&&e.__c.__P===n&&(e.__e&&t.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=t)),e}function S(){this.__u=0,this.t=null,this.__b=null}function A(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function N(){this.u=null,this.o=null}l.fF.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&!0===e.__h&&(e.type=null),x&&x(e)},(S.prototype=new l.uA).__c=function(e,n){var t=n.__c,_=this;null==_.t&&(_.t=[]),_.t.push(t);var o=A(_.__v),r=!1,l=function(){r||(r=!0,t.__R=null,o?o(i):i())};t.__R=l;var i=function(){if(! --_.__u){if(_.state.__a){var e=_.state.__a;_.__v.__k[0]=E(e,e.__c.__P,e.__c.__O)}var n;for(_.setState({__a:_.__b=null});n=_.t.pop();)n.forceUpdate()}},u=!0===n.__h;_.__u++||u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(l,l)},S.prototype.componentWillUnmount=function(){this.t=[]},S.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=P(this.__b,t,_.__O=_.__P)}this.__b=null}var o=n.__a&&(0,l.n)(l.FK,null,e.fallback);return o&&(o.__h=null),[(0,l.n)(l.FK,null,n.__a?null:e.children),o]};var U=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function H(e){return this.getChildContext=function(){return e.context},e.children}function O(e){var n=this,t=e.i;n.componentWillUnmount=function(){(0,l.XX)(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(e){this.childNodes.push(e),n.i.appendChild(e)},insertBefore:function(e,t){this.childNodes.push(e),n.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),n.i.removeChild(e)}}),(0,l.XX)((0,l.n)(H,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}function T(e,n){var t=(0,l.n)(O,{__v:e,i:n});return t.containerInfo=n,t}(N.prototype=new l.uA).__a=function(e){var n=this,t=A(n.__v),_=n.o.get(e);return _[0]++,function(o){var r=function(){n.props.revealOrder?(_.push(o),U(n,e,_)):o()};t?t(r):r()}},N.prototype.render=function(e){this.u=null,this.o=new Map;var n=(0,l.v2)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},N.prototype.componentDidUpdate=N.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){U(e,t,n)}))};var D="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,W=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,L="undefined"!=typeof document,R=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};l.uA.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(l.uA.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var M=l.fF.event;function I(){}function V(){return this.cancelBubble}function $(){return this.defaultPrevented}l.fF.event=function(e){return M&&(e=M(e)),e.persist=I,e.isPropagationStopped=V,e.isDefaultPrevented=$,e.nativeEvent=e};var B={configurable:!0,get:function(){return this.class}},q=l.fF.vnode;l.fF.vnode=function(e){var n=e.type,t=e.props,_=t;if("string"==typeof n){var o=-1===n.indexOf("-");for(var r in _={},t){var i=t[r];L&&"children"===r&&"noscript"===n||"value"===r&&"defaultValue"in t&&null==i||("defaultValue"===r&&"value"in t&&null==t.value?r="value":"download"===r&&!0===i?i="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+n)&&!R(t.type)?r="oninput":/^onfocus$/i.test(r)?r="onfocusin":/^onblur$/i.test(r)?r="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(r)?r=r.toLowerCase():o&&W.test(r)?r=r.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(r)&&(r=r.toLowerCase(),_[r]&&(r="oninputCapture")),_[r]=i)}"select"==n&&_.multiple&&Array.isArray(_.value)&&(_.value=(0,l.v2)(t.children).forEach((function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)}))),"select"==n&&null!=_.defaultValue&&(_.value=(0,l.v2)(t.children).forEach((function(e){e.props.selected=_.multiple?-1!=_.defaultValue.indexOf(e.props.value):_.defaultValue==e.props.value}))),e.props=_,t.class!=t.className&&(B.enumerable="className"in t,null!=t.className&&(_.class=t.className),Object.defineProperty(_,"className",B))}e.$$typeof=D,q&&q(e)};var X=l.fF.__r;l.fF.__r=function(e){X&&X(e),e.__c};l.FK;l.n,l.q6,l._3,l.FK,l.uA},172:(e,n,t)=>{t.d(n,{FK:()=>g,Ob:()=>q,Qv:()=>B,XX:()=>$,_3:()=>b,fF:()=>o,n:()=>y,q6:()=>X,uA:()=>x,v2:()=>O,zO:()=>l});var _,o,r,l,i,u,c,f,a,s={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,t){var o,r,l,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return m(e,i,o,r,null)}function m(e,n,t,_,l){var i={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++r:l};return null==l&&null!=o.vnode&&o.vnode(i),i}function b(){return{current:null}}function g(e){return e.children}function k(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||d.test(n)?t:t+"px"}function F(e,n,t,_,o){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||k(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||k(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?_||e.addEventListener(n,r?w:C,r):e.removeEventListener(n,r?w:C,r);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function C(e){i=!0;try{return this.l[e.type+!1](o.event?o.event(e):e)}finally{i=!1}}function w(e){i=!0;try{return this.l[e.type+!0](o.event?o.event(e):e)}finally{i=!1}}function x(e,n){this.props=e,this.context=n}function P(e,n){if(null==n)return e.__?P(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?P(e):null}function E(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return E(e)}}function S(e){i?setTimeout(e):f(e)}function A(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!N.__r++||c!==o.debounceRendering)&&((c=o.debounceRendering)||S)(N)}function N(){var e,n,t,_,o,r,l,i;for(u.sort((function(e,n){return e.__v.__b-n.__v.__b}));e=u.shift();)e.__d&&(n=u.length,_=void 0,o=void 0,l=(r=(t=e).__v).__e,(i=t.__P)&&(_=[],(o=h({},r)).__v=r.__v+1,W(i,r,o,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[l]:null,_,null==l?P(r):l,r.__h),L(_,r),r.__e!=l&&E(r)),u.length>n&&u.sort((function(e,n){return e.__v.__b-n.__v.__b})));N.__r=0}function U(e,n,t,_,o,r,l,i,u,c){var f,a,d,h,v,y,b,k=_&&_.__k||p,F=k.length;for(t.__k=[],f=0;f<n.length;f++)if(null!=(h=t.__k[f]=null==(h=n[f])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?m(null,h,null,null,h):Array.isArray(h)?m(g,{children:h},null,null,null):h.__b>0?m(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=t,h.__b=t.__b+1,null===(d=k[f])||d&&h.key==d.key&&h.type===d.type)k[f]=void 0;else for(a=0;a<F;a++){if((d=k[a])&&h.key==d.key&&h.type===d.type){k[a]=void 0;break}d=null}W(e,h,d=d||s,o,r,l,i,u,c),v=h.__e,(a=h.ref)&&d.ref!=a&&(b||(b=[]),d.ref&&b.push(d.ref,null,h),b.push(a,h.__c||v,h)),null!=v?(null==y&&(y=v),"function"==typeof h.type&&h.__k===d.__k?h.__d=u=H(h,u,e):u=T(e,h,d,k,v,u),"function"==typeof t.type&&(t.__d=u)):u&&d.__e==u&&u.parentNode!=e&&(u=P(d))}for(t.__e=y,f=F;f--;)null!=k[f]&&("function"==typeof t.type&&null!=k[f].__e&&k[f].__e==t.__d&&(t.__d=D(_).nextSibling),I(k[f],k[f]));if(b)for(f=0;f<b.length;f++)M(b[f],b[++f],b[++f])}function H(e,n,t){for(var _,o=e.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=e,n="function"==typeof _.type?H(_,n,t):T(t,_,_,o,_.__e,n));return n}function O(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){O(e,n)})):n.push(e)),n}function T(e,n,t,_,o,r){var l,i,u;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<_.length;u+=1)if(i==o)break e;e.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function D(e){var n,t,_;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(n=e.__k.length-1;n>=0;n--)if((t=e.__k[n])&&(_=D(t)))return _;return null}function W(e,n,t,_,r,l,i,u,c){var f,a,s,p,d,v,y,m,b,k,F,C,w,P,E,S=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,u=n.__e=t.__e,n.__h=null,l=[u]),(f=o.__b)&&f(n);try{e:if("function"==typeof S){if(m=n.props,b=(f=S.contextType)&&_[f.__c],k=f?b?b.props.value:f.__:_,t.__c?y=(a=n.__c=t.__c).__=a.__E:("prototype"in S&&S.prototype.render?n.__c=a=new S(m,k):(n.__c=a=new x(m,k),a.constructor=S,a.render=V),b&&b.sub(a),a.props=m,a.state||(a.state={}),a.context=k,a.__n=_,s=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=S.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,S.getDerivedStateFromProps(m,a.__s))),p=a.props,d=a.state,a.__v=n,s)null==S.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==S.getDerivedStateFromProps&&m!==p&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,k),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,k)||n.__v===t.__v){for(n.__v!==t.__v&&(a.props=m,a.state=a.__s,a.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),F=0;F<a._sb.length;F++)a.__h.push(a._sb[F]);a._sb=[],a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,k),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(p,d,v)}))}if(a.context=k,a.props=m,a.__P=e,C=o.__r,w=0,"prototype"in S&&S.prototype.render){for(a.state=a.__s,a.__d=!1,C&&C(n),f=a.render(a.props,a.state,a.context),P=0;P<a._sb.length;P++)a.__h.push(a._sb[P]);a._sb=[]}else do{a.__d=!1,C&&C(n),f=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++w<25);a.state=a.__s,null!=a.getChildContext&&(_=h(h({},_),a.getChildContext())),s||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(p,d)),E=null!=f&&f.type===g&&null==f.key?f.props.children:f,U(e,Array.isArray(E)?E:[E],n,t,_,r,l,i,u,c),a.base=n.__e,n.__h=null,a.__h.length&&i.push(a),y&&(a.__E=a.__=null),a.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=R(t.__e,n,t,_,r,l,i,c);(f=o.diffed)&&f(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=u,n.__h=!!c,l[l.indexOf(u)]=null),o.__e(e,n,t)}}function L(e,n){o.__c&&o.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){o.__e(e,n.__v)}}))}function R(e,n,t,o,r,l,i,u){var c,f,a,p=t.props,d=n.props,h=n.type,y=0;if("svg"===h&&(r=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!h&&(h?c.localName===h:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===h)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),l=null,u=!1}if(null===h)p===d||u&&e.data===d||(e.data=d);else{if(l=l&&_.call(e.childNodes),f=(p=t.props||s).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!u){if(null!=l)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,n,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in n||F(e,r,null,t[r],_);for(r in n)o&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||F(e,r,n[r],t[r],_)}(e,d,p,r,u),a)n.__k=[];else if(y=n.props.children,U(e,Array.isArray(y)?y:[y],n,t,o,r&&"foreignObject"!==h,l,i,l?l[0]:t.__k&&P(t,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&v(l[y]);u||("value"in d&&void 0!==(y=d.value)&&(y!==e.value||"progress"===h&&!y||"option"===h&&y!==p.value)&&F(e,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==e.checked&&F(e,"checked",y,p.checked,!1))}return e}function M(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){o.__e(e,t)}}function I(e,n,t){var _,r;if(o.unmount&&o.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||M(_,null,n)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){o.__e(e,n)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&I(_[r],n,t||"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__=e.__e=e.__d=void 0}function V(e,n,t){return this.constructor(e,t)}function $(e,n,t){var r,l,i;o.__&&o.__(e,n),l=(r="function"==typeof t)?null:t&&t.__k||n.__k,i=[],W(n,e=(!r&&t||n).__k=y(g,null,[e]),l||s,s,void 0!==n.ownerSVGElement,!r&&t?[t]:l?null:n.firstChild?_.call(n.childNodes):null,i,!r&&t?t:l?l.__e:n.firstChild,r),L(i,e)}function B(e,n){$(e,n,B)}function q(e,n,t){var o,r,l,i=h({},e.props);for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):t),m(e.type,i,o||e.key,r||e.ref,null)}function X(e,n){var t={__c:n="__cC"+a++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some((function(e){e.__e=!0,A(e)}))},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}_=p.slice,o={__e:function(e,n,t,_){for(var o,r,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),l=o.__d),l)return o.__E=o}catch(n){e=n}throw e}},r=0,l=function(e){return null!=e&&void 0===e.constructor},i=!1,x.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},t),this.props)),e&&h(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),A(this))},x.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),A(this))},x.prototype.render=g,u=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N.__r=0,a=0}}]);
//# sourceMappingURL=vendors.preact.js.map