(self.webpackChunkawesomescreenshot_extension=self.webpackChunkawesomescreenshot_extension||[]).push([[204],{30899:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(87462),i=n(4942),o=n(79508),s=n(54549),c=n(94184),a=n.n(c),u=n(1413),l=n(44925),f=n(15671),p=n(43144),d=n(79340),h=n(98557),m=n(67294),y=n(50344),v=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function $(e){return"string"==typeof e}var g=function(e){(0,d.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=t.apply(this,arguments)).onClick=function(){var t=e.props,n=t.onClick,r=t.onStepClick,i=t.stepIndex;n&&n.apply(void 0,arguments),r(i)},e}return(0,p.Z)(n,[{key:"renderIconNode",value:function(){var e,t,n=this.props,r=n.prefixCls,o=n.progressDot,s=n.stepIcon,c=n.stepNumber,u=n.status,l=n.title,f=n.description,p=n.icon,d=n.iconPrefix,h=n.icons,y=a()("".concat(r,"-icon"),"".concat(d,"icon"),(e={},(0,i.Z)(e,"".concat(d,"icon-").concat(p),p&&$(p)),(0,i.Z)(e,"".concat(d,"icon-check"),!p&&"finish"===u&&(h&&!h.finish||!h)),(0,i.Z)(e,"".concat(d,"icon-cross"),!p&&"error"===u&&(h&&!h.error||!h)),e)),v=m.createElement("span",{className:"".concat(r,"-icon-dot")});return t=o?"function"==typeof o?m.createElement("span",{className:"".concat(r,"-icon")},o(v,{index:c-1,status:u,title:l,description:f})):m.createElement("span",{className:"".concat(r,"-icon")},v):p&&!$(p)?m.createElement("span",{className:"".concat(r,"-icon")},p):h&&h.finish&&"finish"===u?m.createElement("span",{className:"".concat(r,"-icon")},h.finish):h&&h.error&&"error"===u?m.createElement("span",{className:"".concat(r,"-icon")},h.error):p||"finish"===u||"error"===u?m.createElement("span",{className:y}):m.createElement("span",{className:"".concat(r,"-icon")},c),s&&(t=s({index:c-1,status:u,title:l,description:f,node:t})),t}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,o=t.style,s=t.active,c=t.status,f=void 0===c?"wait":c,p=(t.iconPrefix,t.icon),d=(t.wrapperStyle,t.stepNumber,t.disabled),h=t.description,y=t.title,$=t.subTitle,g=(t.progressDot,t.stepIcon,t.tailContent),b=(t.icons,t.stepIndex,t.onStepClick),S=t.onClick,x=(0,l.Z)(t,v),w=a()("".concat(r,"-item"),"".concat(r,"-item-").concat(f),n,(e={},(0,i.Z)(e,"".concat(r,"-item-custom"),p),(0,i.Z)(e,"".concat(r,"-item-active"),s),(0,i.Z)(e,"".concat(r,"-item-disabled"),!0===d),e)),C=(0,u.Z)({},o),k={};return b&&!d&&(k.role="button",k.tabIndex=0,k.onClick=this.onClick),m.createElement("div",Object.assign({},x,{className:w,style:C}),m.createElement("div",Object.assign({onClick:S},k,{className:"".concat(r,"-item-container")}),m.createElement("div",{className:"".concat(r,"-item-tail")},g),m.createElement("div",{className:"".concat(r,"-item-icon")},this.renderIconNode()),m.createElement("div",{className:"".concat(r,"-item-content")},m.createElement("div",{className:"".concat(r,"-item-title")},y,$&&m.createElement("div",{title:"string"==typeof $?$:void 0,className:"".concat(r,"-item-subtitle")},$)),h&&m.createElement("div",{className:"".concat(r,"-item-description")},h))))}}]),n}(m.Component),b=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange"],S=function(e){(0,d.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=t.apply(this,arguments)).onStepClick=function(t){var n=e.props,r=n.onChange,i=n.current;r&&i!==t&&r(t)},e}return(0,p.Z)(n,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,o=n.style,s=void 0===o?{}:o,c=n.className,f=n.children,p=n.direction,d=n.type,h=n.labelPlacement,v=n.iconPrefix,$=n.status,g=n.size,S=n.current,x=n.progressDot,w=n.stepIcon,C=n.initial,k=n.icons,E=n.onChange,_=(0,l.Z)(n,b),M="navigation"===d,D=x?"vertical":h,O=a()(r,"".concat(r,"-").concat(p),c,(e={},(0,i.Z)(e,"".concat(r,"-").concat(g),g),(0,i.Z)(e,"".concat(r,"-label-").concat(D),"horizontal"===p),(0,i.Z)(e,"".concat(r,"-dot"),!!x),(0,i.Z)(e,"".concat(r,"-navigation"),M),e));return m.createElement("div",Object.assign({className:O,style:s},_),(0,y.Z)(f).map((function(e,n){var i=C+n,o=(0,u.Z)({stepNumber:"".concat(i+1),stepIndex:i,key:i,prefixCls:r,iconPrefix:v,wrapperStyle:s,progressDot:x,stepIcon:w,icons:k,onStepClick:E&&t.onStepClick},e.props);return"error"===$&&n===S-1&&(o.className="".concat(r,"-next-error")),e.props.status||(o.status=i===S?$:i<S?"finish":"wait"),o.active=i===S,(0,m.cloneElement)(e,o)})))}}]),n}(m.Component);S.Step=g,S.defaultProps={type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};const x=S;var w=n(53124),C=n(29439);function k(){var e=m.useReducer((function(e){return e+1}),0);return(0,C.Z)(e,2)[1]}var E={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},_=new Map,M=-1,D={};const O={matchHandlers:{},dispatch:function(e){return D=e,_.forEach((function(e){return e(D)})),_.size>=1},subscribe:function(e){return _.size||this.register(),M+=1,_.set(M,e),e(D),M},unsubscribe:function(e){_.delete(e),_.size||this.unregister()},unregister:function(){var e=this;Object.keys(E).forEach((function(t){var n=E[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),_.clear()},register:function(){var e=this;Object.keys(E).forEach((function(t){var n=E[t],o=function(n){var o=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},D),(0,i.Z)({},t,o)))},s=window.matchMedia(n);s.addListener(o),e.matchHandlers[n]={mql:s,listener:o},o(s)}))}};const N=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,m.useRef)({}),n=k();return(0,m.useEffect)((function(){var r=O.subscribe((function(r){t.current=r,e&&n()}));return function(){return O.unsubscribe(r)}}),[]),t.current};var Z=n(54458),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},I=function(e){var t,n=e.percent,c=e.size,u=e.className,l=e.direction,f=e.responsive,p=P(e,["percent","size","className","direction","responsive"]),d=N(f).xs,h=m.useContext(w.E_),y=h.getPrefixCls,v=h.direction,$=m.useCallback((function(){return f&&d?"vertical":l}),[d,l]),g=y("steps",e.prefixCls),b=y("",e.iconPrefix),S=a()((t={},(0,i.Z)(t,"".concat(g,"-rtl"),"rtl"===v),(0,i.Z)(t,"".concat(g,"-with-progress"),void 0!==n),t),u),C={finish:m.createElement(o.Z,{className:"".concat(g,"-finish-icon")}),error:m.createElement(s.Z,{className:"".concat(g,"-error-icon")})};return m.createElement(x,(0,r.Z)({icons:C},p,{size:c,direction:$(),stepIcon:function(e){var t=e.node;if("process"===e.status&&void 0!==n){var r="small"===c?32:40;return m.createElement("div",{className:"".concat(g,"-progress-icon")},m.createElement(Z.Z,{type:"circle",percent:n,width:r,strokeWidth:4,format:function(){return null}}),t)}return t},prefixCls:g,iconPrefix:b,className:S}))};I.Step=x.Step,I.defaultProps={current:0,responsive:!0};const j=I},30853:(e,t,n)=>{"use strict";n(22092),n(91826)},51609:(e,t,n)=>{"use strict";var r=n(64867),i=n(91849),o=n(30321),s=n(47185);var c=function e(t){var n=new o(t),c=i(o.prototype.request,n);return r.extend(c,o.prototype,n),r.extend(c,n),c.create=function(n){return e(s(t,n))},c}(n(45546));c.Axios=o,c.CanceledError=n(60644),c.CancelToken=n(14972),c.isCancel=n(26502),c.VERSION=n(97288).version,c.toFormData=n(47675),c.AxiosError=n(82648),c.Cancel=c.CanceledError,c.all=function(e){return Promise.all(e)},c.spread=n(8713),c.isAxiosError=n(16268),e.exports=c,e.exports.default=c},27484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",s="hour",c="day",a="week",u="month",l="quarter",f="year",p="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},$={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,s=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:f,w:a,d:c,D:p,h:s,m:o,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",b={};b[g]=y;var S=function(e){return e instanceof k},x=function e(t,n,r){var i;if(!t)return g;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var c=t.name;b[c]=t,i=c}return!r&&i&&(g=i),i||!r&&g},w=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},C=$;C.l=x,C.i=S,C.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function y(e){this.$L=x(e.locale,null,!0),this.parse(e)}var v=y.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return C},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return w(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<w(e)},v.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!C.u(t)||t,l=C.p(e),d=function(e,t){var i=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},h=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,y=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case f:return r?d(1,0):d(31,11);case u:return r?d(1,y):d(0,y+1);case a:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return d(r?v-b:v+(6-b),y);case c:case p:return h($+"Hours",0);case s:return h($+"Minutes",1);case o:return h($+"Seconds",2);case i:return h($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,a=C.p(e),l="set"+(this.$u?"UTC":""),d=(n={},n[c]=l+"Date",n[p]=l+"Date",n[u]=l+"Month",n[f]=l+"FullYear",n[s]=l+"Hours",n[o]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[a],h=a===c?this.$D+(t-this.$W):t;if(a===u||a===f){var m=this.clone().set(p,1);m.$d[d](h),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[C.p(e)]()},v.add=function(r,l){var p,d=this;r=Number(r);var h=C.p(l),m=function(e){var t=w(d);return C.w(t.date(t.date()+Math.round(e*r)),d)};if(h===u)return this.set(u,this.$M+r);if(h===f)return this.set(f,this.$y+r);if(h===c)return m(1);if(h===a)return m(7);var y=(p={},p[o]=t,p[s]=n,p[i]=e,p)[h]||1,v=this.$d.getTime()+r*y;return C.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),o=this.$H,s=this.$m,c=this.$M,a=n.weekdays,u=n.months,l=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return C.s(o%12||12,e,"0")},p=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:C.s(c+1,2,"0"),MMM:l(n.monthsShort,c,u,3),MMMM:l(u,c),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,a,2),ddd:l(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(o),HH:C.s(o,2,"0"),h:f(1),hh:f(2),a:p(o,s,!0),A:p(o,s,!1),m:String(s),mm:C.s(s,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||h[e]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,p,d){var h,m=C.p(p),y=w(r),v=(y.utcOffset()-this.utcOffset())*t,$=this-y,g=C.m(this,y);return g=(h={},h[f]=g/12,h[u]=g,h[l]=g/3,h[a]=($-v)/6048e5,h[c]=($-v)/864e5,h[s]=$/n,h[o]=$/t,h[i]=$/e,h)[m]||$,d?g:C.a(g)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return C.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),E=k.prototype;return w.prototype=E,[["$ms",r],["$s",i],["$m",o],["$H",s],["$W",c],["$M",u],["$y",f],["$D",p]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,k,w),e.$i=!0),w},w.locale=x,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=b[g],w.Ls=b,w.p={},w}()},72408:(e,t,n)=>{"use strict";var r=n(27418),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,a=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,p=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||$}function S(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||$}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=b.prototype;var w=x.prototype=new S;w.constructor=x,r(w,b.prototype),w.isPureReactComponent=!0;var C={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,i={},s=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:C.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g,O=[];function N(e,t,n,r){if(O.length){var i=O.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function Z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function P(e,t,n,r){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return n(r,e,""===t?"."+j(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=t+j(i=e[a],a);c+=P(i,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),a=0;!(i=e.next()).done;)c+=P(i=i.value,u=t+j(i,a++),n,r);else if("object"===i)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function I(e,t,n){return null==e?0:P(e,"",t,n)}function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(D,"$&/")+"/"),I(e,A,t=N(t,o,r,i)),Z(t)}var z={current:null};function H(){var e=z.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,R,t=N(null,null,t,n)),Z(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(v(143));return e}},t.Component=b,t.Fragment=c,t.Profiler=u,t.PureComponent=x,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var i=r({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=C.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)k.call(t,l)&&!E.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return H().useCallback(e,t)},t.useContext=function(e,t){return H().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return H().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return H().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return H().useLayoutEffect(e,t)},t.useMemo=function(e,t){return H().useMemo(e,t)},t.useReducer=function(e,t,n){return H().useReducer(e,t,n)},t.useRef=function(e){return H().useRef(e)},t.useState=function(e){return H().useState(e)},t.version="16.14.0"},67294:(e,t,n)=>{"use strict";e.exports=n(72408)}}]);