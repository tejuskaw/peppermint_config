(self.webpackChunkawesomescreenshot_extension=self.webpackChunkawesomescreenshot_extension||[]).push([[873],{33603:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>u,mL:()=>l,q0:()=>s});var i=function(){return{height:0,opacity:0}},r=function(e){return{height:e.scrollHeight,opacity:1}},o=function(e,t){return!0===(null==t?void 0:t.deadline)||"height"===t.propertyName},a={motionName:"ant-motion-collapse",onAppearStart:i,onEnterStart:i,onAppearActive:r,onEnterActive:r,onLeaveStart:function(e){return{height:e?e.offsetHeight:0}},onLeaveActive:i,onAppearEnd:o,onEnterEnd:o,onLeaveEnd:o,motionDeadline:500},s=((0,n(93355).b)("bottomLeft","bottomRight","topLeft","topRight"),function(e){return void 0===e||"topLeft"!==e&&"topRight"!==e?"slide-up":"slide-down"}),l=function(e,t,n){return void 0!==n?n:"".concat(e,"-").concat(t)};const u=a},27484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",b="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},g={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,u),o=n-r<0,a=t.clone().add(i+(o?-1:1),u);return+(-(i+(n-r)/(o?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:b,w:l,d:s,D:d,h:a,m:o,s:r,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",y={};y[x]=S;var M=function(e){return e instanceof w},v=function e(t,n,i){var r;if(!t)return x;if("string"==typeof t){var o=t.toLowerCase();y[o]&&(r=o),n&&(y[o]=n,r=o);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var s=t.name;y[s]=t,r=s}return!i&&r&&(x=r),r||!i&&x},$=function(e,t){if(M(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},O=g;O.l=v,O.i=M,O.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function S(e){this.$L=v(e.locale,null,!0),this.parse(e)}var m=S.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return $(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<$(e)},m.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,i=!!O.u(t)||t,c=O.p(e),f=function(e,t){var r=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(s)},h=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,S=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case b:return i?f(1,0):f(31,11);case u:return i?f(1,S):f(0,S+1);case l:var x=this.$locale().weekStart||0,y=(p<x?p+7:p)-x;return f(i?m-y:m+(6-y),S);case s:case d:return h(g+"Hours",0);case a:return h(g+"Minutes",1);case o:return h(g+"Seconds",2);case r:return h(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var n,l=O.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[d]=c+"Date",n[u]=c+"Month",n[b]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===u||l===b){var p=this.clone().set(d,1);p.$d[f](h),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[O.p(e)]()},m.add=function(i,c){var d,f=this;i=Number(i);var h=O.p(c),p=function(e){var t=$(f);return O.w(t.date(t.date()+Math.round(e*i)),f)};if(h===u)return this.set(u,this.$M+i);if(h===b)return this.set(b,this.$y+i);if(h===s)return p(1);if(h===l)return p(7);var S=(d={},d[o]=t,d[a]=n,d[r]=e,d)[h]||1,m=this.$d.getTime()+i*S;return O.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,r,o){return e&&(e[n]||e(t,i))||r[n].slice(0,o)},b=function(e){return O.s(o%12||12,e,"0")},d=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:O.s(o,2,"0"),h:b(1),hh:b(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(e,t){return t||h[e]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,d,f){var h,p=O.p(d),S=$(i),m=(S.utcOffset()-this.utcOffset())*t,g=this-S,x=O.m(this,S);return x=(h={},h[b]=x/12,h[u]=x,h[c]=x/3,h[l]=(g-m)/6048e5,h[s]=(g-m)/864e5,h[a]=g/n,h[o]=g/t,h[r]=g/e,h)[p]||g,f?x:O.a(x)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=v(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},S}(),E=w.prototype;return $.prototype=E,[["$ms",i],["$s",r],["$m",o],["$H",a],["$W",s],["$M",u],["$y",b],["$D",d]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,w,$),e.$i=!0),$},$.locale=v,$.isDayjs=M,$.unix=function(e){return $(1e3*e)},$.en=y[x],$.Ls=y,$.p={},$}()},31795:function(e,t,n){var i;e=n.nmd(e),function(){"use strict";var r={function:!0,object:!0},o=r[typeof window]&&window||this,a=r[typeof t]&&t,s=r.object&&e&&!e.nodeType&&e,l=a&&s&&"object"==typeof n.g&&n.g;!l||l.global!==l&&l.window!==l&&l.self!==l||(o=l);var u=Math.pow(2,53)-1,c=/\bOpera/,b=Object.prototype,d=b.hasOwnProperty,f=b.toString;function h(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function p(e){return e=y(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:h(e)}function S(e,t){for(var n in e)d.call(e,n)&&t(e[n],n,e)}function m(e){return null==e?h(e):f.call(e).slice(8,-1)}function g(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function x(e,t){var n=null;return function(e,t){var n=-1,i=e?e.length:0;if("number"==typeof i&&i>-1&&i<=u)for(;++n<i;)t(e[n],n,e);else S(e,t)}(e,(function(i,r){n=t(n,i,r,e)})),n}function y(e){return String(e).replace(/^ +| +$/g,"")}var M=function e(t){var n=o,i=t&&"object"==typeof t&&"String"!=m(t);i&&(n=t,t=null);var r=n.navigator||{},a=r.userAgent||"";t||(t=a);var s,l,u,b,d,h=i?!!r.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(f.toString()),M="Object",v=i?M:"ScriptBridgingProxyObject",$=i?M:"Environment",O=i&&n.java?"JavaPackage":m(n.java),w=i?M:"RuntimeObject",E=/\bJava/.test(O)&&n.java,P=E&&m(n.environment)==$,k=E?"a":"α",C=E?"b":"β",W=n.document||{},A=n.operamini||n.opera,T=c.test(T=i&&A?A["[[Class]]"]:m(A))?T:A=null,D=t,I=[],B=null,R=t==a,F=R&&A&&"function"==typeof A.version&&A.version(),G=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,n){return e||RegExp("\\b"+(n.pattern||g(n))+"\\b","i").exec(t)&&(n.label||n)})),_=function(e){return x(e,(function(e,n){return e||RegExp("\\b"+(n.pattern||g(n))+"\\b","i").exec(t)&&(n.label||n)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),L=H([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),N=function(e){return x(e,(function(e,n,i){return e||(n[L]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(L)]||RegExp("\\b"+g(i)+"(?:\\b|\\w*\\d)","i").exec(t))&&i}))}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),j=function(e){return x(e,(function(e,n){var i=n.pattern||g(n);return!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(i=i[/[\d.]+$/.exec(e)])&&(e="Windows "+i),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),p(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,i,n.label||n)),e}))}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function H(e){return x(e,(function(e,n){var i=n.pattern||g(n);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(i,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=p(e[0].replace(RegExp(i,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}if(G&&(G=[G]),N&&!L&&(L=H([N])),(s=/\bGoogle TV\b/.exec(L))&&(L=s[0]),/\bSimulator\b/i.test(t)&&(L=(L?L+" ":"")+"Simulator"),"Opera Mini"==_&&/\bOPiOS\b/.test(t)&&I.push("running in Turbo/Uncompressed mode"),"IE"==_&&/\blike iPhone OS\b/.test(t)?(N=(s=e(t.replace(/like iPhone OS/,""))).manufacturer,L=s.product):/^iP/.test(L)?(_||(_="Safari"),j="iOS"+((s=/ OS ([\d_]+)/i.exec(t))?" "+s[1].replace(/_/g,"."):"")):"Konqueror"!=_||/buntu/i.test(j)?N&&"Google"!=N&&(/Chrome/.test(_)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(L))||/\bAndroid\b/.test(j)&&/^Chrome/.test(_)&&/\bVersion\//i.test(t)?(_="Android Browser",j=/\bAndroid\b/.test(j)?j:"Android"):"Silk"==_?(/\bMobi/i.test(t)||(j="Android",I.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&I.unshift("accelerated")):"PaleMoon"==_&&(s=/\bFirefox\/([\d.]+)\b/.exec(t))?I.push("identifying as Firefox "+s[1]):"Firefox"==_&&(s=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(j||(j="Firefox OS"),L||(L=s[1])):!_||(s=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(_))?(_&&!L&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s+"/")+8))&&(_=null),(s=L||N||j)&&(L||N||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(j))&&(_=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(j)?j:s)+" Browser")):"Electron"==_&&(s=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&I.push("Chromium "+s):j="Kubuntu",F||(F=x(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",g(_),"(?:Firefox|Minefield|NetFront)"],(function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))),(s=("iCab"==G&&parseFloat(F)>3?"WebKit":/\bOpera\b/.test(_)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(t)&&("Mac OS"==j?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(_)&&"NetFront")&&(G=[s]),"IE"==_&&(s=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(_+=" Mobile",j="Windows Phone "+(/\+$/.test(s)?s:s+".x"),I.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(_="IE Mobile",j="Windows Phone 8.x",I.unshift("desktop mode"),F||(F=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=_&&"Trident"==G&&(s=/\brv:([\d.]+)/.exec(t))&&(_&&I.push("identifying as "+_+(F?" "+F:"")),_="IE",F=s[1]),R){if(b="global",d=null!=(u=n)?typeof u[b]:"number",/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!u[b])m(s=n.runtime)==v?(_="Adobe AIR",j=s.flash.system.Capabilities.os):m(s=n.phantom)==w?(_="PhantomJS",F=(s=s.version||null)&&s.major+"."+s.minor+"."+s.patch):"number"==typeof W.documentMode&&(s=/\bTrident\/(\d+)/i.exec(t))?(F=[F,W.documentMode],(s=+s[1]+4)!=F[1]&&(I.push("IE "+F[1]+" mode"),G&&(G[1]=""),F[1]=s),F="IE"==_?String(F[1].toFixed(1)):F[0]):"number"==typeof W.documentMode&&/^(?:Chrome|Firefox)\b/.test(_)&&(I.push("masking as "+_+" "+F),_="IE",F="11.0",G=["Trident"],j="Windows");else if(E&&(D=(s=E.lang.System).getProperty("os.arch"),j=j||s.getProperty("os.name")+" "+s.getProperty("os.version")),P){try{F=n.require("ringo/engine").version.join("."),_="RingoJS"}catch(e){(s=n.system)&&s.global.system==n.system&&(_="Narwhal",j||(j=s[0].os||null))}_||(_="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(s=n.process)&&("object"==typeof s.versions&&("string"==typeof s.versions.electron?(I.push("Node "+s.versions.node),_="Electron",F=s.versions.electron):"string"==typeof s.versions.nw&&(I.push("Chromium "+F,"Node "+s.versions.node),_="NW.js",F=s.versions.nw)),_||(_="Node.js",D=s.arch,j=s.platform,F=(F=/[\d.]+/.exec(s.version))?F[0]:null));j=j&&p(j)}if(F&&(s=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(R&&r.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(B=/b/i.test(s)?"beta":"alpha",F=F.replace(RegExp(s+"\\+?$"),"")+("beta"==B?C:k)+(/\d+\+?/.exec(s)||"")),"Fennec"==_||"Firefox"==_&&/\b(?:Android|Firefox OS)\b/.test(j))_="Firefox Mobile";else if("Maxthon"==_&&F)F=F.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(L))"Xbox 360"==L&&(j=null),"Xbox 360"==L&&/\bIEMobile\b/.test(t)&&I.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(_)&&(!_||L||/Browser|Mobi/.test(_))||"Windows CE"!=j&&!/Mobi/i.test(t))if("IE"==_&&R)try{null===n.external&&I.unshift("platform preview")}catch(e){I.unshift("embedded")}else(/\bBlackBerry\b/.test(L)||/\bBB10\b/.test(t))&&(s=(RegExp(L.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||F)?(j=((s=[s,/BB10/.test(t)])[1]?(L=null,N="BlackBerry"):"Device Software")+" "+s[0],F=null):this!=S&&"Wii"!=L&&(R&&A||/Opera/.test(_)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==_&&/\bOS X (?:\d+\.){2,}/.test(j)||"IE"==_&&(j&&!/^Win/.test(j)&&F>5.5||/\bWindows XP\b/.test(j)&&F>8||8==F&&!/\bTrident\b/.test(t)))&&!c.test(s=e.call(S,t.replace(c,"")+";"))&&s.name&&(s="ing as "+s.name+((s=s.version)?" "+s:""),c.test(_)?(/\bIE\b/.test(s)&&"Mac OS"==j&&(j=null),s="identify"+s):(s="mask"+s,_=T?p(T.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(s)&&(j=null),R||(F=null)),G=["Presto"],I.push(s));else _+=" Mobile";(s=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(s=[parseFloat(s.replace(/\.(\d)$/,".0$1")),s],"Safari"==_&&"+"==s[1].slice(-1)?(_="WebKit Nightly",B="alpha",F=s[1].slice(0,-1)):F!=s[1]&&F!=(s[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(F=null),s[1]=(/\bChrome\/([\d.]+)/i.exec(t)||0)[1],537.36==s[0]&&537.36==s[2]&&parseFloat(s[1])>=28&&"WebKit"==G&&(G=["Blink"]),R&&(h||s[1])?(G&&(G[1]="like Chrome"),s=s[1]||((s=s[0])<530?1:s<532?2:s<532.05?3:s<533?4:s<534.03?5:s<534.07?6:s<534.1?7:s<534.13?8:s<534.16?9:s<534.24?10:s<534.3?11:s<535.01?12:s<535.02?"13+":s<535.07?15:s<535.11?16:s<535.19?17:s<536.05?18:s<536.1?19:s<537.01?20:s<537.11?"21+":s<537.13?23:s<537.18?24:s<537.24?25:s<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),s=(s=s[0])<400?1:s<500?2:s<526?3:s<533?4:s<534?"4+":s<535?5:s<537?6:s<538?7:s<601?8:"8"),G&&(G[1]+=" "+(s+="number"==typeof s?".x":/[.+]/.test(s)?"":"+")),"Safari"==_&&(!F||parseInt(F)>45)&&(F=s)),"Opera"==_&&(s=/\bzbov|zvav$/.exec(j))?(_+=" ",I.unshift("desktop mode"),"zvav"==s?(_+="Mini",F=null):_+="Mobile",j=j.replace(RegExp(" *"+s+"$"),"")):"Safari"==_&&/\bChrome\b/.exec(G&&G[1])&&(I.unshift("desktop mode"),_="Chrome Mobile",F=null,/\bOS X\b/.test(j)?(N="Apple",j="iOS 4.3+"):j=null),F&&0==F.indexOf(s=/[\d.]+$/.exec(j))&&t.indexOf("/"+s+"-")>-1&&(j=y(j.replace(s,""))),G&&!/\b(?:Avant|Nook)\b/.test(_)&&(/Browser|Lunascape|Maxthon/.test(_)||"Safari"!=_&&/^iOS/.test(j)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(_)&&G[1])&&(s=G[G.length-1])&&I.push(s),I.length&&(I=["("+I.join("; ")+")"]),N&&L&&L.indexOf(N)<0&&I.push("on "+N),L&&I.push((/^on /.test(I[I.length-1])?"":"on ")+L),j&&(s=/ ([\d.+]+)$/.exec(j),l=s&&"/"==j.charAt(j.length-s[0].length-1),j={architecture:32,family:s&&!l?j.replace(s[0],""):j,version:s?s[1]:null,toString:function(){var e=this.version;return this.family+(e&&!l?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(s=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(D))&&!/\bi686\b/i.test(D)?(j&&(j.architecture=64,j.family=j.family.replace(RegExp(" *"+s),"")),_&&(/\bWOW64\b/i.test(t)||R&&/\w(?:86|32)$/.test(r.cpuClass||r.platform)&&!/\bWin64; x64\b/i.test(t))&&I.unshift("32-bit")):j&&/^OS X/.test(j.family)&&"Chrome"==_&&parseFloat(F)>=39&&(j.architecture=64),t||(t=null);var X={};return X.description=t,X.layout=G&&G[0],X.manufacturer=N,X.name=_,X.prerelease=B,X.product=L,X.ua=t,X.version=_&&F,X.os=j||{architecture:null,family:null,version:null,toString:function(){return"null"}},X.parse=e,X.toString=function(){return this.description||""},X.version&&I.unshift(F),X.name&&I.unshift(_),j&&_&&(j!=String(j).split(" ")[0]||j!=_.split(" ")[0]&&!L)&&I.push(L?"("+j+")":"on "+j),I.length&&(X.description=I.join(" ")),X}();o.platform=M,void 0===(i=function(){return M}.call(t,n,t,e))||(e.exports=i)}.call(this)}}]);