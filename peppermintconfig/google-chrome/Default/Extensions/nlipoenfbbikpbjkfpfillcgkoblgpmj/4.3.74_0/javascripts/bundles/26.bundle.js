"use strict";(self.webpackChunkawesomescreenshot_extension=self.webpackChunkawesomescreenshot_extension||[]).push([[26],{33603:(e,t,n)=>{n.d(t,{mL:()=>r});(0,n(93355).b)("bottomLeft","bottomRight","topLeft","topRight");var r=function(e,t,n){return void 0!==n?n:"".concat(e,"-").concat(t)}},96159:(e,t,n)=>{n.d(t,{Tm:()=>a});var r=n(67294),o=r.isValidElement;function a(e,t){return function(e,t,n){return o(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t}(e,e,t)}},31808:(e,t,n)=>{n.d(t,{jD:()=>o});var r=n(98924),o=function(){return(0,r.Z)()&&window.document.documentElement}},65223:(e,t,n)=>{n.d(t,{Ux:()=>i});var r=n(87462),o=(n(6077),n(67294)),a=o.createContext({}),i=function(e){var t=e.children,n=e.status,i=e.override,s=(0,o.useContext)(a),c=(0,o.useMemo)((function(){var e=(0,r.Z)({},s);return i&&delete e.isFormItemInput,n&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e}),[n,i,s]);return o.createElement(a.Provider,{value:c},t)}},77667:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),o=n(15671),a=n(43144),i=n(79340),s=n(98557),c=n(67294),u=n(67178),l=n(74350),E=function(e){(0,i.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"getLocale",value:function(){var e=this.props,t=e.componentName,n=e.defaultLocale||l.Z[null!=t?t:"global"],o=this.context,a=t&&o?o[t]:{};return(0,r.Z)((0,r.Z)({},n instanceof Function?n():n),a||{})}},{key:"getLocaleCode",value:function(){var e=this.context,t=e&&e.locale;return e&&e.exist&&!t?l.Z.locale:t}},{key:"render",value:function(){return this.props.children(this.getLocale(),this.getLocaleCode(),this.context)}}]),n}(c.Component);E.defaultProps={componentName:"global"},E.contextType=u.Z},28665:(e,t,n)=>{n.d(t,{Z:()=>s,k:()=>a});var r=n(67294),o=n(80334),a="RC_FORM_INTERNAL_HOOKS",i=function(){(0,o.ZP)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")};const s=r.createContext({getFieldValue:i,getFieldsValue:i,getFieldError:i,getFieldWarning:i,getFieldsError:i,isFieldsTouched:i,isFieldTouched:i,isFieldValidating:i,isFieldsValidating:i,resetFields:i,setFields:i,setFieldsValue:i,validateFields:i,submit:i,getInternalHooks:function(){return i(),{dispatch:i,initEntityValue:i,registerField:i,useSubscribe:i,setInitialValues:i,destroyForm:i,setCallbacks:i,registerWatch:i,getFields:i,setValidateMessages:i,setPreserve:i,getInitialValue:i}}})},82131:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(67294).createContext(null)},6077:(e,t,n)=>{n.d(t,{RV:()=>c.R,zb:()=>u.Z});var r=n(67294),o=n(61045),a=n(45378),i=n(4294),s=n(5318),c=n(81696),u=n(28665),l=(n(82131),n(21806)),E=r.forwardRef(s.Z);E.FormProvider=c.R,E.Field=o.Z,E.List=a.Z,E.useForm=i.Z,E.useWatch=l.Z},84173:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(44925),a=n(1413),i=n(15671),s=n(43144),c=n(79340),u=n(98557),l=n(67294),E=n(94542),d=n(94159),f=n(52378),v=["component","children","onVisibleChanged","onAllRemoved"],N=["status"],A=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.Z,n=function(e){(0,c.Z)(E,e);var n=(0,u.Z)(E);function E(){var e;(0,i.Z)(this,E);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={keyEntities:[]},e.removeKey=function(t){var n=e.state.keyEntities.map((function(e){return e.key!==t?e:(0,a.Z)((0,a.Z)({},e),{},{status:f.Td})}));return e.setState({keyEntities:n}),n.filter((function(e){return e.status!==f.Td})).length},e}return(0,s.Z)(E,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,a=this.props,i=a.component,s=a.children,c=a.onVisibleChanged,u=a.onAllRemoved,E=(0,o.Z)(a,v),d=i||l.Fragment,m={};return A.forEach((function(e){m[e]=E[e],delete E[e]})),delete E.keys,l.createElement(d,E,n.map((function(n){var a=n.status,i=(0,o.Z)(n,N),E=a===f.zM||a===f.ff;return l.createElement(t,(0,r.Z)({},m,{key:i.key,visible:E,eventProps:i,onVisibleChanged:function(t){(null==c||c(t,{key:i.key}),t)||0===e.removeKey(i.key)&&u&&u()}}),s)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,r=t.keyEntities,o=(0,f.l4)(n);return{keyEntities:(0,f.uz)(r,o).filter((function(e){var t=r.find((function(t){var n=t.key;return e.key===n}));return!t||t.status!==f.Td||e.status!==f.p4}))}}}]),E}(l.Component);return n.defaultProps={component:"div"},n}(d.Cq)},50344:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(59864);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r.Children.forEach(e,(function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(a(e)):(0,o.isFragment)(e)&&e.props?n=n.concat(a(e.props.children,t)):n.push(e))})),n}},15105:(e,t,n)=>{n.d(t,{Z:()=>o});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const o=r},75164:(e,t,n)=>{n.d(t,{Z:()=>c});var r=function(e){return+setTimeout(e,16)},o=function(e){return clearTimeout(e)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(r=function(e){return window.requestAnimationFrame(e)},o=function(e){return window.cancelAnimationFrame(e)});var a=0,i=new Map;function s(e){i.delete(e)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a+=1;function o(t){if(0===t)s(n),e();else{var a=r((function(){o(t-1)}));i.set(n,a)}}return o(t),n}c.cancel=function(e){var t=i.get(e);return s(t),o(t)}},42550:(e,t,n)=>{n.d(t,{Yr:()=>s,mH:()=>a,sQ:()=>i});var r=n(71002),o=n(59864);n(56982);function a(e,t){"function"==typeof e?e(t):"object"===(0,r.Z)(e)&&e&&"current"in e&&(e.current=t)}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter((function(e){return e}));return r.length<=1?r[0]:function(e){t.forEach((function(t){a(t,e)}))}}function s(e){var t,n,r=(0,o.isMemo)(e)?e.type.type:e.type;return!("function"==typeof r&&!(null===(t=r.prototype)||void 0===t?void 0:t.render))&&!("function"==typeof e&&!(null===(n=e.prototype)||void 0===n?void 0:n.render))}},80334:(e,t,n)=>{n.d(t,{ZP:()=>i});var r={};function o(e,t){0}function a(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}const i=function(e,t){a(o,e,t)}}}]);