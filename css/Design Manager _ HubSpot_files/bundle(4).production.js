!function(e){var t,r,n={}
function o(t){if(n[t])return n[t].exports
var r=n[t]={i:t,l:!1,exports:{}}
e[t].call(r.exports,r,r.exports,o)
r.l=!0
return r.exports}o.linkDlb=function(e,n){t=e
r=n}
window["__webpack_require_head-dlb/bundle.production.js__"]=o
o.dlbcr=function(e){if(!t)throw new Error("dlb consumer not properly linked")
var n=r[e]
if(void 0===n)throw new Error("dlb consumer does not provide module "+e)
return t(n)}
o.m=e
o.c=n
o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})}
o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
Object.defineProperty(e,"__esModule",{value:!0})}
o.t=function(e,t){1&t&&(e=o(e))
if(8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
o.r(r)
Object.defineProperty(r,"default",{enumerable:!0,value:e})
if(2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n))
return r}
o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
o.d(t,"a",t)
return t}
o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
o.p="//static.hsappstatic.net/head-dlb/static-1.1070/"
o(o.s=0)}([function(e,t,r){"use strict"
var n=r(1)
r(2)
var o=r(3),a=n(r(13)),i=n(r(14));(0,o.enableRejectionTracking)();(0,i.default)()
a.default.modules.useGlobals=e=>"raven-hubspot/configure"!==e&&"PortalIdParser"!==e&&"enviro"!==e
a.default.define("raven-hubspot/configure",[],()=>{const e=r(15)
return e.default||e})
a.default.define("PortalIdParser",[],()=>{const e=r(17)
return e.default||e})
a.default.define("enviro",[],()=>{const e=r(16)
return e.default||e})
Object.defineProperty(window,"Raven",{get:()=>r(5)})
Object.defineProperty(window,"enviro",{get(){const e=r(16)
return e.default||e}})},function(e,t){function r(e){return e&&e.__esModule?e:{default:e}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){var r;((r="undefined"!=typeof window&&null!==window?window:"undefined"!=typeof global&&null!==global?global:this).hns=r.hns2=function(e,t){var n,o,a,i,s=e.split("."),l=r,u="",c=s.length-1
t=t||{}
n=s[c]
for(var f=0;f<c;f++){l[u=s[f]]=l[u]||{}
l=l[u]}if(l[n]&&t!==l[n]){o=l[n]
a=[]
for(var d in t)if(t.hasOwnProperty(d))if("object"==typeof o[d]){t[d]!==o[d]&&a.push({qSource:t[d],qTarget:o[d]})
for(;a.length>0;){i=a.shift()
for(var p in i.qSource)i.qSource.hasOwnProperty(p)&&("object"!=typeof i.qSource[p]||"object"!=typeof i.qTarget[p]||i.qSource[p]&&void 0!==i.qSource[p].classList&&void 0!==i.qSource[p].nodeType?i.qTarget[p]=i.qSource[p]:i.qSource[p]!==i.qTarget[p]&&a.push({qSource:i.qSource[p],qTarget:i.qTarget[p]}))}}else o[d]=t[d]}else l[n]=t
"undefined"!=typeof hubspot&&hubspot.updateDependencies&&hubspot.updateDependencies(e)
return l[n]})("hubspot")
!function(){"undefined"!=typeof hubspot&&null!==hubspot&&hubspot.define&&console.warn("hubspot.define included more than once, you most certainly _don't_ want this")
hubspot=hubspot||{}
hubspot.modules=hubspot.modules||{}
var e=[],t={},r={},n={},o={},a="<hubspot.require>",i=1
hubspot.modules.useGlobals=function(e){return!0}
hubspot.modules.getNamespace=function(e){if(r[e])return r[e]
if(!hubspot.modules.useGlobals(e))return null
var t,n=e.split("."),o=n.length,a=window
for(t=0;t<o&&(a=a[n[t]]);++t);return a}
hubspot.getDeferredModules=function(){return e}
hubspot.getIdleModules=function(){return t}
hubspot.getLoadedModules=function(){return r}
hubspot.getErroredModules=function(){return n}
hubspot.getAllModuleDefinitions=function(){return o}
var s=function(){return a.replace(">"," "+i+++">")}
hubspot.getBlockingModules=function(){for(var t,r=e,n=[],o={},a={},i=r.length;i--;){var s=r[i]
if(s&&s.deps){a[s.ns]=!0
for(var l=s.deps.length;l--;)o[s.deps[l]]=!0}}for(t in o)a[t]||n.push(t)
return n}
function l(){var e
if(void 0!==hubspot._cached_debug_define_enabled)return hubspot._cached_debug_define_enabled
if(!0===window.HUBSPOT_DEBUG_DEFINE)e=!0
else{var t="test"
try{localStorage.setItem(t,t)
localStorage.removeItem(t)
e="true"===localStorage.HUBSPOT_DEBUG_DEFINE}catch(t){e=!1}}hubspot._cached_debug_define_enabled=e
return e}function u(e){var t,r,o=[],i=e.allDeps
for(t=0;t<i.length;t++)o[t]=hubspot.modules.getNamespace(i[t])
try{r="function"==typeof e.module?e.module.apply(this,o):e.module}catch(t){var s=e.ns||a
n[s]=!0
if(l())throw t
setTimeout((function(){s.length>0&&console.log("Error while defining hubspot module:",s)
throw t}),0)
return}return r}function c(e){var t
t=u(e)
if(e.ns){r[e.ns]=t
hubspot.modules.useGlobals(e.ns)?window.hns2(e.ns,t):hubspot.updateDependencies(e.ns)}}hubspot.updateDependencies=function(t){var r,n,o,a,i=[]
for(o=0;o<e.length;o++)if((r=e[o]).depsDict[t]){delete r.depsDict[t]
n=r.deps
for(a=0;a<n.length;a++)if(n[a]===t){n.splice(a,1)
break}if(0===n.length){e.splice(o,1)
i.push(r)
o--}}for(o=0;o<i.length;o++)c(i[o])}
function f(t){var r
for(r=0;r<e.length;r++)if(e[r].depsDict[t])return!0
return!1}function d(r,n){for(var o,a,i=n.deps,s=n.depsDict,l=i.length,u=[];l--;){a=i[l]
if(hubspot.modules.getNamespace(a)){i.splice(l,1)
delete s[a]}t[a]&&u.push(a)}i.length>0?e.push(n):c(n)
for(l=0;l<u.length;l++){a=u[l]
if(o=t[a]){delete t[a]
d(a,o)}}}function p(e){return{fileName:e.getFileName(),lineNumber:e.getLineNumber(),columnNumber:e.getColumnNumber(),functionName:e.getFunctionName()}}function h(){if(!Error.captureStackTrace)return(new Error).stack
var e=Error.prepareStackTrace
try{Error.prepareStackTrace=function(e,t){return t}
var t=new Error
Error.captureStackTrace(t)
var r=t.stack,n=(r[0].getFileName(),r.slice(2).map(p).filter((function(e){return!e.functionName||0!==e.functionName.indexOf("hubspot.define")&&0!==e.functionName.indexOf("hubspot.require")})))
return n.length>0?n:null}catch(e){return null}finally{Error.prepareStackTrace=e}}hubspot.defineHelper=function(e,n,a,i){var u,c,p,g={}
l()&&(p=h())
if("string"==typeof n)throw new Error("hubspot.define/require must be provided an array of dependencies, not a string")
if("boolean"!=typeof i)throw new Error("hubspot.defineHelper must be called with the isEagerDefinition flag")
if(void 0!==r[e]){if("function"!=typeof a)throw new Error("You cannot redefine a module with hubspot.define, '"+e+"' has already been defined once.")
console.warn("You should not redefine a module with hubspot.define, '"+e+"' has already been defined once.")}for(var b=0;b<n.length;b++)g[c=n[b]]=c
u={ns:e,allDeps:n.slice(),deps:n,depsDict:g,module:a,stack:p}
o[e||s()]=u
null==e||i||f(e)?d(e,u):t[e]=u}
hubspot.defineEager=function(e,t,r){hubspot.defineHelper(e,t,r,!0)}
hubspot.defineLazy=function(e,t,r){hubspot.defineHelper(e,t,r,!1)}
hubspot.define=hubspot.defineEager
hubspot.require=function(e,t){hubspot.defineEager(null,e,t)}
hubspot.requireSync=function(e){var t
hubspot.require([e],(function(e){t=e}))
if(!t)throw new Error(e+" has not been defined with hubspot.define or is blocked")
return t}}()
!function(){var e=[],t=[]
window.addEventListener("unhandledrejection",(function(r){t.push(r.promise)
e.push(r.reason)}))
window.addEventListener("rejectionhandled",(function(r){var n=r.promise,o=t.indexOf(n)
if(-1!==o){t.splice(o,1)
e.splice(o,1)}}))
hubspot.getUnhandledReasons=function(){return e.slice()}}()
hubspot.define=hubspot.defineLazy},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.enableRejectionTracking=t.disableRejectionTracking=void 0
var n=r(4)
let o=!1
const a=()=>window.newrelic,i=e=>null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1),s=e=>{const t=r(5),o=(0,n.getUniqueKey)(),s=i(e),l={tags:{isUnhandledPromiseRejection:!0,unhandledRejectionUuid:o,typeOfReason:s}}
"string"==typeof e?t.captureMessage(e,l):t.captureException(e,l)
if(a()){let t={isUnhandledPromiseRejection:!0,typeOfReason:s,unhandledRejectionUuid:o}
e&&e._hsAdditionalProperties&&(t=Object.assign({},t,e._hsAdditionalProperties))
a().noticeError(e,t)}},l=e=>"object"==typeof e?null!==e:"function"==typeof e,u=e=>{e.preventDefault()
if(l(e.promise)){console.error("Unhandled Promise Rejection",e.reason)
s(e.reason)}},c=()=>{o=!1
window.removeEventListener("unhandledrejection",u)}
t.disableRejectionTracking=c
const f=()=>{o&&c()
o=!0
window.addEventListener("unhandledrejection",u)}
t.enableRejectionTracking=f},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.getUniqueKey=void 0
const n=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})
t.getUniqueKey=n},function(e,t,r){var{Raven:n}=r(6),o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=o.Raven,i=new n
i.noConflict=function(){o.Raven=a
return i}
i.afterLoad()
e.exports=i},function(e,t,r){"use strict"
r.r(t)
r.d(t,"Raven",(function(){return N}))
var n=r(7),o=r.n(n),a=r(8),i=r(10),s=r(11),l=r(9),u=l.isError,c=l.isObject,f=(c=l.isObject,l.isErrorEvent),d=l.isUndefined,p=l.isFunction,h=l.isString,g=l.isEmptyObject,b=l.each,v=l.objectMerge,m=l.truncate,_=l.objectFrozen,y=l.hasKey,w=l.joinRegExp,E=l.urlencode,x=l.uuid4,k=l.isSameException,S=l.isSameStacktrace,O=l.parseUrl,C=l.fill,R=r(12).wrapMethod,j="source protocol user pass host port path".split(" "),T=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/
function P(){return+new Date}var I="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},D=I.document,U=I.navigator
function q(e,t){return p(t)?function(r){return t(r,e)}:t}function N(){this._hasJSON=!("object"!=typeof JSON||!JSON.stringify)
this._hasDocument=!d(D)
this._hasNavigator=!d(U)
this._lastCapturedException=null
this._lastData=null
this._lastEventId=null
this._globalServer=null
this._globalKey=null
this._globalProject=null
this._globalContext={}
this._globalOptions={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1}
this._ignoreOnError=0
this._isRavenInstalled=!1
this._originalErrorStackTraceLimit=Error.stackTraceLimit
this._originalConsole=I.console||{}
this._originalConsoleMethods={}
this._plugins=[]
this._startTime=P()
this._wrappedBuiltIns=[]
this._breadcrumbs=[]
this._lastCapturedEvent=null
this._keypressTimeout
this._location=I.location
this._lastHref=this._location&&this._location.href
this._resetBackoff()
for(var e in this._originalConsole)this._originalConsoleMethods[e]=this._originalConsole[e]}N.prototype={VERSION:"3.19.1",debug:!1,TraceKit:a,config:function(e,t){var r=this
if(r._globalServer){this._logDebug("error","Error: Raven has already been configured")
return r}if(!e)return r
var n=r._globalOptions
t&&b(t,(function(e,t){"tags"===e||"extra"===e||"user"===e?r._globalContext[e]=t:n[e]=t}))
r.setDSN(e)
n.ignoreErrors.push(/^Script error\.?$/)
n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/)
n.ignoreErrors=w(n.ignoreErrors)
n.ignoreUrls=!!n.ignoreUrls.length&&w(n.ignoreUrls)
n.whitelistUrls=!!n.whitelistUrls.length&&w(n.whitelistUrls)
n.includePaths=w(n.includePaths)
n.maxBreadcrumbs=Math.max(0,Math.min(n.maxBreadcrumbs||100,100))
var o={xhr:!0,console:!0,dom:!0,location:!0},i=n.autoBreadcrumbs
"[object Object]"==={}.toString.call(i)?i=v(o,i):!1!==i&&(i=o)
n.autoBreadcrumbs=i
var s={tryCatch:!0},l=n.instrument
"[object Object]"==={}.toString.call(l)?l=v(s,l):!1!==l&&(l=s)
n.instrument=l
a.collectWindowErrors=!!n.collectWindowErrors
return r},install:function(){var e=this
if(e.isSetup()&&!e._isRavenInstalled){a.report.subscribe((function(){e._handleOnErrorStackInfo.apply(e,arguments)}))
e._globalOptions.instrument&&e._globalOptions.instrument.tryCatch&&e._instrumentTryCatch()
e._globalOptions.autoBreadcrumbs&&e._instrumentBreadcrumbs()
e._drainPlugins()
e._isRavenInstalled=!0}Error.stackTraceLimit=e._globalOptions.stackTraceLimit
return this},setDSN:function(e){var t=this,r=t._parseDSN(e),n=r.path.lastIndexOf("/"),o=r.path.substr(1,n)
t._dsn=e
t._globalKey=r.user
t._globalSecret=r.pass&&r.pass.substr(1)
t._globalProject=r.path.substr(n+1)
t._globalServer=t._getGlobalServer(r)
t._globalEndpoint=t._globalServer+"/"+o+"api/"+t._globalProject+"/store/"
this._resetBackoff()},context:function(e,t,r){if(p(e)){r=t||[]
t=e
e=void 0}return this.wrap(e,t).apply(this,r)},wrap:function(e,t,r){var n=this
if(d(t)&&!p(e))return e
if(p(e)){t=e
e=void 0}if(!p(t))return t
try{if(t.__raven__)return t
if(t.__raven_wrapper__)return t.__raven_wrapper__}catch(e){return t}function o(){var o=[],a=arguments.length,i=!e||e&&!1!==e.deep
r&&p(r)&&r.apply(this,arguments)
for(;a--;)o[a]=i?n.wrap(e,arguments[a]):arguments[a]
try{return t.apply(this,o)}catch(t){n._ignoreNextOnError()
n.captureException(t,e)
throw t}}for(var a in t)y(t,a)&&(o[a]=t[a])
o.prototype=t.prototype
t.__raven_wrapper__=o
o.__raven__=!0
o.__inner__=t
return o},uninstall:function(){a.report.uninstall()
this._restoreBuiltIns()
Error.stackTraceLimit=this._originalErrorStackTraceLimit
this._isRavenInstalled=!1
return this},capturePageEvent:function(e,t={}){const r={message:e,...t,level:"info",isPageEvent:!0}
this._send(r)
return this},captureException:function(e,t){var r=!u(e),n=!f(e),o=f(e)&&!e.error
if(r&&n||o)return this.captureMessage(e,v({trimHeadFrames:1,stacktrace:!0},t))
f(e)&&(e=e.error)
this._lastCapturedException=e
try{var i=a.computeStackTrace(e)
this._handleStackInfo(i,t)}catch(t){if(e!==t)throw t}return this},captureMessage:function(e,t){if(this._globalOptions.ignoreErrors.test&&this._globalOptions.ignoreErrors.test(e))this._triggerEvent("captureIgnored",{level:t&&t.level||"error"})
else{var r,n=v({message:e+""},t=t||{})
try{throw new Error(e)}catch(e){r=e}r.name=null
var o=a.computeStackTrace(r),i=o.stack[1],s=i&&i.url||""
if((!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(s))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(s))){if(this._globalOptions.stacktrace||t&&t.stacktrace){t={fingerprint:e,...t,trimHeadFrames:(t.trimHeadFrames||0)+1}
var l=this._prepareFrames(o,t)
n.stacktrace={frames:l.reverse()}}this._send(n)
return this}}},captureBreadcrumb:function(e){var t=v({timestamp:P()/1e3},e)
if(p(this._globalOptions.breadcrumbCallback)){var r=this._globalOptions.breadcrumbCallback(t)
if(c(r)&&!g(r))t=r
else if(!1===r)return this}this._breadcrumbs.push(t)
this._breadcrumbs.length>this._globalOptions.maxBreadcrumbs&&this._breadcrumbs.shift()
return this},addPlugin:function(e){var t=[].slice.call(arguments,1)
this._plugins.push([e,t])
this._isRavenInstalled&&this._drainPlugins()
return this},setUserContext:function(e){this._globalContext.user=e
return this},setExtraContext:function(e){this._mergeContext("extra",e)
return this},setTagsContext:function(e){this._mergeContext("tags",e)
return this},clearContext:function(){this._globalContext={}
return this},getContext:function(){return JSON.parse(i(this._globalContext))},setEnvironment:function(e){this._globalOptions.environment=e
return this},setRelease:function(e){this._globalOptions.release=e
return this},setDataCallback:function(e){var t=this._globalOptions.dataCallback
this._globalOptions.dataCallback=q(t,e)
return this},setBreadcrumbCallback:function(e){var t=this._globalOptions.breadcrumbCallback
this._globalOptions.breadcrumbCallback=q(t,e)
return this},setShouldSendCallback:function(e){var t=this._globalOptions.shouldSendCallback
this._globalOptions.shouldSendCallback=q(t,e)
return this},setTransport:function(e){this._globalOptions.transport=e
return this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){if(!this._hasJSON)return!1
if(!this._globalServer){if(!this.ravenNotConfiguredError){this.ravenNotConfiguredError=!0
this._logDebug("error","Error: Raven has not been configured.")}return!1}return!0},afterLoad:function(){var e=I.RavenConfig
e&&this.config(e.dsn,e.config).install()},showReportDialog:function(e){if(D){var t=(e=e||{}).eventId||this.lastEventId()
if(!t)throw new s("Missing eventId")
var r=e.dsn||this._dsn
if(!r)throw new s("Missing DSN")
var n=encodeURIComponent,o=""
o+="?eventId="+n(t)
o+="&dsn="+n(r)
var a=e.user||this._globalContext.user
if(a){a.name&&(o+="&name="+n(a.name))
a.email&&(o+="&email="+n(a.email))}var i=this._getGlobalServer(this._parseDSN(r)),l=D.createElement("script")
l.async=!0
l.src=i+"/api/embed/error-page/"+o;(D.head||D.body).appendChild(l)}},_ignoreNextOnError:function(){var e=this
this._ignoreOnError+=1
setTimeout((function(){e._ignoreOnError-=1}))},_triggerEvent:function(e,t){var r,n
if(this._hasDocument){t=t||{}
e="raven"+e.substr(0,1).toUpperCase()+e.substr(1)
D.createEvent?(r=D.createEvent("HTMLEvents")).initEvent(e,!0,!0):(r=D.createEventObject()).eventType=e
for(n in t)y(t,n)&&(r[n]=t[n])
if(D.createEvent)D.dispatchEvent(r)
else try{D.fireEvent("on"+r.eventType.toLowerCase(),r)}catch(e){}}},_breadcrumbEventHandler:function(e){var t=this
return function(r){t._keypressTimeout=null
if(t._lastCapturedEvent!==r){t._lastCapturedEvent=r
var n
try{n=o()(r.target)}catch(e){n="<unknown>"}t.captureBreadcrumb({category:"ui."+e,message:n})}}},_keypressEventHandler:function(){var e=this,t=1e3
return function(r){var n
try{n=r.target}catch(e){return}var o=n&&n.tagName
if(o&&("INPUT"===o||"TEXTAREA"===o||n.isContentEditable)){var a=e._keypressTimeout
a||e._breadcrumbEventHandler("input")(r)
clearTimeout(a)
e._keypressTimeout=setTimeout((function(){e._keypressTimeout=null}),t)}}},_captureUrlChange:function(e,t){var r=O(this._location.href),n=O(t),o=O(e)
this._lastHref=t
r.protocol===n.protocol&&r.host===n.host&&(t=n.relative)
r.protocol===o.protocol&&r.host===o.host&&(e=o.relative)
this.captureBreadcrumb({category:"navigation",data:{to:t,from:e}})},_instrumentTryCatch:function(){var e=this,t=e._wrappedBuiltIns
function r(t){return function(r,n){for(var o=new Array(arguments.length),a=0;a<o.length;++a)o[a]=arguments[a]
var i=o[0]
p(i)&&(o[0]=e.wrap(i))
return t.apply?t.apply(this,o):t(o[0],o[1])}}var n=this._globalOptions.autoBreadcrumbs
function o(r){var o=I[r]&&I[r].prototype
if(o&&o.hasOwnProperty&&o.hasOwnProperty("addEventListener")){C(o,"addEventListener",(function(t){return function(o,a,i,s){try{a&&a.handleEvent&&(a.handleEvent=e.wrap(a.handleEvent))}catch(e){}var l,u,c
if(n&&n.dom&&("EventTarget"===r||"Node"===r)){u=e._breadcrumbEventHandler("click")
c=e._keypressEventHandler()
l=function(e){if(e){var t
try{t=e.type}catch(e){return}return"click"===t?u(e):"keypress"===t?c(e):void 0}}}return t.call(this,o,e.wrap(a,void 0,l),i,s)}}),t)
C(o,"removeEventListener",(function(e){return function(t,r,n,o){try{r=r&&(r.__raven_wrapper__?r.__raven_wrapper__:r)}catch(e){}return e.call(this,t,r,n,o)}}),t)}}C(I,"setTimeout",r,t)
C(I,"setInterval",r,t)
I.requestAnimationFrame&&C(I,"requestAnimationFrame",(function(t){return function(r){return t(e.wrap(r))}}),t)
for(var a=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<a.length;i++)o(a[i])},_instrumentBreadcrumbs:function(){var e=this,t=this._globalOptions.autoBreadcrumbs,r=e._wrappedBuiltIns
function n(t,r){t in r&&p(r[t])&&C(r,t,(function(t){return e.wrap(t)}))}if(t.xhr&&"XMLHttpRequest"in I){var o=XMLHttpRequest.prototype
C(o,"open",(function(t){return function(r,n){h(n)&&-1===n.indexOf(e._globalKey)&&(this.__raven_xhr={method:r,url:n,status_code:null})
return t.apply(this,arguments)}}),r)
C(o,"send",(function(t){return function(r){var o=this
function a(){if(o.__raven_xhr&&4===o.readyState){try{o.__raven_xhr.status_code=o.status
const e=o.getResponseHeader("X-Hubspot-Correlation-Id")
e&&(o.__raven_xhr.correlationId=e)}catch(e){}e.captureBreadcrumb({type:"http",category:"xhr",data:o.__raven_xhr})}}for(var i=["onload","onerror","onprogress"],s=0;s<i.length;s++)n(i[s],o)
"onreadystatechange"in o&&p(o.onreadystatechange)?C(o,"onreadystatechange",(function(t){return e.wrap(t,void 0,a)})):o.onreadystatechange=a
return t.apply(this,arguments)}}),r)}t.xhr&&"fetch"in I&&C(I,"fetch",(function(t){return function(r,n){for(var o=new Array(arguments.length),a=0;a<o.length;++a)o[a]=arguments[a]
var i,s=o[0],l="GET"
if("string"==typeof s)i=s
else if("Request"in I&&s instanceof I.Request){i=s.url
s.method&&(l=s.method)}else i=""+s
o[1]&&o[1].method&&(l=o[1].method)
var u={method:l,url:i,status_code:null}
e.captureBreadcrumb({type:"http",category:"fetch",data:u})
return t.apply(this,o).then((function(e){u.status_code=e.status
const t=e.headers.get("X-Hubspot-Correlation-Id")
t&&(u.correlationId=t)
return e}))}}),r)
if(t.dom&&this._hasDocument)if(D.addEventListener){D.addEventListener("click",e._breadcrumbEventHandler("click"),!1)
D.addEventListener("keypress",e._keypressEventHandler(),!1)}else{D.attachEvent("onclick",e._breadcrumbEventHandler("click"))
D.attachEvent("onkeypress",e._keypressEventHandler())}var a=I.chrome,i=!(a&&a.app&&a.app.runtime)&&I.history&&history.pushState&&history.replaceState
if(t.location&&i){var s=I.onpopstate
I.onpopstate=function(){var t=e._location.href
e._captureUrlChange(e._lastHref,t)
if(s)return s.apply(this,arguments)}
var l=function(t){return function(){var r=arguments.length>2?arguments[2]:void 0
r&&e._captureUrlChange(e._lastHref,r+"")
return t.apply(this,arguments)}}
C(history,"pushState",l,r)
C(history,"replaceState",l,r)}if(t.console&&"console"in I&&console.log){var u=function(t,r){e.captureBreadcrumb({message:t,level:r.level,category:"console"})}
b(["debug","info","warn","error","log"],(function(e,t){R(console,t,u)}))}},_restoreBuiltIns:function(){for(var e;this._wrappedBuiltIns.length;){var t=(e=this._wrappedBuiltIns.shift())[0],r=e[1],n=e[2]
t[r]=n}},_drainPlugins:function(){var e=this
b(this._plugins,(function(t,r){var n=r[0],o=r[1]
n.apply(e,[e].concat(o))}))},_parseDSN:function(e){var t=T.exec(e),r={},n=7
try{for(;n--;)r[j[n]]=t[n]||""}catch(t){throw new s("Invalid DSN: "+e)}if(r.pass&&!this._globalOptions.allowSecretKey)throw new s("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key")
return r},_getGlobalServer:function(e){var t="//"+e.host+(e.port?":"+e.port:"")
e.protocol&&(t=e.protocol+":"+t)
return t},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(e,t){var r=this._prepareFrames(e,t)
this._triggerEvent("handle",{stackInfo:e,options:t})
this._processException(e.name,e.message,e.url,e.lineno,r,t)},_prepareFrames:function(e,t){var r=this,n=[]
if(e.stack&&e.stack.length){b(e.stack,(function(t,o){var a=r._normalizeFrame(o,e.url)
a&&n.push(a)}))
if(t&&t.trimHeadFrames)for(var o=0;o<t.trimHeadFrames&&o<n.length;o++)n[o].in_app=!1}return n=n.slice(0,this._globalOptions.stackTraceLimit)},_normalizeFrame:function(e,t){var r={filename:e.url,lineno:e.line,colno:e.column,function:e.func||"?"}
e.url||(r.filename=t)
r.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(r.filename)||/(Raven|TraceKit)\./.test(r.function)||/raven\.(min\.)?js$/.test(r.filename))
return r},_processException:function(e,t,r,n,o,a){var i=(e?e+": ":"")+(t||"")
if(this._globalOptions.ignoreErrors.test&&(this._globalOptions.ignoreErrors.test(t)||this._globalOptions.ignoreErrors.test(i)))this._triggerEvent("captureIgnored",{level:a&&a.level||"error"})
else{var s
if(o&&o.length){r=o[0].filename||r
o.reverse()
s={frames:o}}else r&&(s={frames:[{filename:r,lineno:n,in_app:!0}]})
if((!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(r))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(r))){var l=v({exception:{values:[{type:e,value:t,stacktrace:s}]},culprit:r},a)
this._send(l)}}},_trimPacket:function(e){var t=this._globalOptions.maxMessageLength
e.message&&(e.message=m(e.message,t))
if(e.exception){var r=e.exception.values[0]
r.value=m(r.value,t)}var n=e.request
if(n){n.url&&(n.url=m(n.url,this._globalOptions.maxUrlLength))
n.Referer&&(n.Referer=m(n.Referer,this._globalOptions.maxUrlLength))}e.breadcrumbs&&e.breadcrumbs.values&&this._trimBreadcrumbs(e.breadcrumbs)
return e},_trimBreadcrumbs:function(e){for(var t,r,n,o=["to","from","url"],a=0;a<e.values.length;++a)if((r=e.values[a]).hasOwnProperty("data")&&c(r.data)&&!_(r.data)){n=v({},r.data)
for(var i=0;i<o.length;++i){t=o[i]
n.hasOwnProperty(t)&&n[t]&&(n[t]=m(n[t],this._globalOptions.maxUrlLength))}e.values[a].data=n}},_getHttpData:function(){if(this._hasNavigator||this._hasDocument){var e={}
this._hasNavigator&&U.userAgent&&(e.headers={"User-Agent":navigator.userAgent})
if(this._hasDocument){D.location&&D.location.href&&(e.url=D.location.href)
if(D.referrer){e.headers||(e.headers={})
e.headers.Referer=D.referrer}}return e}},_resetBackoff:function(){this._backoffDuration=0
this._backoffStart=null},_shouldBackoff:function(){return this._backoffDuration&&P()-this._backoffStart<this._backoffDuration},_isRepeatData:function(e){if(e.isPageEvent)return!1
var t=this._lastData
return!(!t||e.message!==t.message||e.culprit!==t.culprit)&&(e.stacktrace||t.stacktrace?S(e.stacktrace,t.stacktrace):!e.exception&&!t.exception||k(e.exception,t.exception))},_setBackoffState:function(e){if(!this._shouldBackoff()){var t=e.status
if(400===t||401===t||429===t){var r
try{r=e.getResponseHeader("Retry-After")
r=1e3*parseInt(r,10)}catch(e){}this._backoffDuration=r||(2*this._backoffDuration||1e3)
this._backoffStart=P()}}},_send:function(e){var t=this._globalOptions,r={project:this._globalProject,logger:t.logger,platform:"javascript"},n=this._getHttpData()
n&&(r.request=n)
e.trimHeadFrames&&delete e.trimHeadFrames;(e=v(r,e)).tags=v(v({},this._globalContext.tags),e.tags)
e.extra=v(v({},this._globalContext.extra),e.extra)
e.extra["session:duration"]=P()-this._startTime
e.extra.sessionId=window.hubspot&&window.hubspot.sessionId
!e.isPageEvent&&this._breadcrumbs&&this._breadcrumbs.length>0&&(e.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)})
g(e.tags)&&delete e.tags
this._globalContext.user&&(e.user=this._globalContext.user)
t.environment&&(e.environment=t.environment)
t.release&&(e.release=t.release)
t.serverName&&(e.server_name=t.serverName)
p(t.dataCallback)&&(e=t.dataCallback(e)||e)
e&&!g(e)&&(p(t.shouldSendCallback)&&!t.shouldSendCallback(e)||(this._shouldBackoff()?this._logDebug("warn","Raven dropped error due to backoff: ",e):"number"==typeof t.sampleRate?Math.random()<t.sampleRate&&this._sendProcessedPayload(e):this._sendProcessedPayload(e)))},_getUuid:function(){return x()},_sendProcessedPayload:function(e,t){var r=this,n=this._globalOptions
if(this.isSetup()){e=this._trimPacket(e)
if(this._globalOptions.allowDuplicates||!this._isRepeatData(e)){this._lastEventId=e.event_id||(e.event_id=this._getUuid())
this._lastData=e
this._logDebug("debug","Raven about to send:",e)
var o={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey}
this._globalSecret&&(o.sentry_secret=this._globalSecret)
var a=e.exception&&e.exception.values[0]
this.captureBreadcrumb({category:e.isPageEvent?"pageEvent":"sentry",message:a?(a.type?a.type+": ":"")+a.value:e.message,data:e.isPageEvent?e.extra:void 0,event_id:e.event_id,level:e.level||"error"})
var i=this._globalEndpoint;(n.transport||this._makeRequest).call(this,{url:i,auth:o,query:e.isPageEvent?{isPageEvent:"true"}:void 0,data:e,options:n,onSuccess:function(){r._resetBackoff()
r._triggerEvent("success",{data:e,src:i})
t&&t()},onError:function(n){r._logDebug("error","Raven transport failed to send: ",n)
n.request&&r._setBackoffState(n.request)
r._triggerEvent("failure",{data:e,src:i})
n=n||new Error("Raven send failed (no additional details provided)")
t&&t(n)}})}else this._logDebug("warn","Raven dropped repeat event: ",e)}},_makeRequest:function(e){var t=I.XMLHttpRequest&&new I.XMLHttpRequest
if(t){if("withCredentials"in t||"undefined"!=typeof XDomainRequest){var r=e.url
if("withCredentials"in t)t.onreadystatechange=function(){if(4===t.readyState)if(200===t.status)e.onSuccess&&e.onSuccess()
else if(e.onError){var r=new Error("Sentry error code: "+t.status)
r.request=t
e.onError(r)}}
else{t=new XDomainRequest
r=r.replace(/^https?:/,"")
e.onSuccess&&(t.onload=e.onSuccess)
e.onError&&(t.onerror=function(){var r=new Error("Sentry error code: XDomainRequest")
r.request=t
e.onError(r)})}t.open("POST",`${r}?${E(e.auth)}${e.query?"&"+E(e.query):""}`)
t.send(i(e.data))}}},_logDebug:function(e){this._originalConsoleMethods[e]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[e],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(e,t){d(t)?delete this._globalContext[e]:this._globalContext[e]=v(this._globalContext[e]||{},t)}}
N.prototype.setUser=N.prototype.setUserContext
N.prototype.setReleaseContext=N.prototype.setRelease},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=i
const n=5,o=60,a=["name","title","alt","data-test-id","data-key"]
function i(e){const t=[],r=" > "
let o=e,a=0
for(;o&&a<n;){const e=s(o)
if("html"===e)break
t.push(e)
a+=1
o=o.parentNode}return t.reverse().join(r)}function s(e){const t=[]
if(!e||!e.tagName)return""
t.push(e.tagName.toLowerCase())
e.id&&t.push("#"+e.id)
for(const r of a){const n=e.getAttribute(r)
n&&t.push(`[${r}="${n}"]`)}let r=0
for(const n of e.classList)if(!n.startsWith("private-")){if(r+n.length>o)break
r+=n.length
t.push("."+n)}return t.join("")}e.exports=t.default},function(e,t,r){var n=r(9),o={collectWindowErrors:!0,debug:!1},a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=[].slice,s="?",l=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
function u(){return"undefined"==typeof document||null==document.location?"":document.location.href}o.report=function(){var e,t,r=[],c=null,f=null,d=null
function p(e){m()
r.push(e)}function h(e){for(var t=r.length-1;t>=0;--t)r[t]===e&&r.splice(t,1)}function g(){_()
r=[]}function b(e,t){var n=null
if(!t||o.collectWindowErrors){for(var a in r)if(r.hasOwnProperty(a))try{r[a].apply(null,[e].concat(i.call(arguments,2)))}catch(e){n=e}if(n)throw n}}function v(t,r,a,i,c){if(d){o.computeStackTrace.augmentStackTraceWithInitialElement(d,r,a,t)
y()}else if(c&&n.isError(c))b(o.computeStackTrace(c),!0)
else{var f={url:r,line:a,column:i},p=void 0,h=t
if("[object String]"==={}.toString.call(t)){var g
if(g=t.match(l)){p=g[1]
h=g[2]}}f.func=s
b({name:p,message:h,url:u(),stack:[f]},!0)}return!!e&&e.apply(this,arguments)}function m(){if(!t){e=a.onerror
a.onerror=v
t=!0}}function _(){if(t){a.onerror=e
t=!1
e=void 0}}function y(){var e=d,t=c
c=null
d=null
f=null
b.apply(null,[e,!1].concat(t))}function w(e,t){var r=i.call(arguments,1)
if(d){if(f===e)return
y()}var n=o.computeStackTrace(e)
d=n
f=e
c=r
setTimeout((function(){f===e&&y()}),n.incomplete?2e3:0)
if(!1!==t)throw e}w.subscribe=p
w.unsubscribe=h
w.uninstall=g
return w}()
o.computeStackTrace=function(){function e(e){if(void 0!==e.stack&&e.stack){for(var t,r,n,o=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|bpm|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,a=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|bpm|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,i=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|bpm|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,l=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,f=e.stack.split("\n"),d=[],p=(/^(.*) is undefined$/.exec(e.message),0),h=f.length;p<h;++p){if(r=o.exec(f[p])){var g=r[2]&&0===r[2].indexOf("native")
if(r[2]&&0===r[2].indexOf("eval")&&(t=c.exec(r[2]))){r[2]=t[1]
r[3]=t[2]
r[4]=t[3]}n={url:g?null:r[2],func:r[1]||s,args:g?[r[2]]:[],line:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}else if(r=i.exec(f[p]))n={url:r[2],func:r[1]||s,args:[],line:+r[3],column:r[4]?+r[4]:null}
else{if(!(r=a.exec(f[p])))continue
if(r[3]&&r[3].indexOf(" > eval")>-1&&(t=l.exec(r[3]))){r[3]=t[1]
r[4]=t[2]
r[5]=null}else 0!==p||r[5]||void 0===e.columnNumber||(d[0].column=e.columnNumber+1)
n={url:r[3],func:r[1]||s,args:r[2]?r[2].split(","):[],line:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}!n.func&&n.line&&(n.func=s)
d.push(n)}return d.length?{name:e.name,message:e.message,url:u(),stack:d}:null}}function t(e,t,r,n){var o={url:t,line:r}
if(o.url&&o.line){e.incomplete=!1
o.func||(o.func=s)
if(e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1
if(!e.stack[0].line&&e.stack[0].func===o.func){e.stack[0].line=o.line
return!1}}e.stack.unshift(o)
e.partial=!0
return!0}e.incomplete=!0
return!1}function r(e,a){for(var i,l,c=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,f=[],d={},p=!1,h=r.caller;h&&!p;h=h.caller)if(h!==n&&h!==o.report){l={url:null,func:s,line:null,column:null}
h.name?l.func=h.name:(i=c.exec(h.toString()))&&(l.func=i[1])
if(void 0===l.func)try{l.func=i.input.substring(0,i.input.indexOf("{"))}catch(e){}d[""+h]?p=!0:d[""+h]=!0
f.push(l)}a&&f.splice(0,a)
var g={name:e.name,message:e.message,url:u(),stack:f}
t(g,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description)
return g}function n(t,n){var a=null
n=null==n?0:+n
try{if(a=e(t))return a}catch(e){if(o.debug)throw e}try{if(a=r(t,n+1))return a}catch(e){if(o.debug)throw e}return{name:t.name,message:t.message,url:u()}}n.augmentStackTraceWithInitialElement=t
n.computeStackTraceFromStackProp=e
return n}()
e.exports=o},function(e,t){var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function n(e){return"object"==typeof e&&null!==e}function o(e){switch({}.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0
default:return e instanceof Error}}function a(e){return c()&&"[object ErrorEvent]"==={}.toString.call(e)}function i(e){return void 0===e}function s(e){return"function"==typeof e}function l(e){return"[object String]"===Object.prototype.toString.call(e)}function u(e){for(var t in e)return!1
return!0}function c(){try{new ErrorEvent("")
return!0}catch(e){return!1}}function f(e){function t(t,r){var n=e(t)||t
return r&&r(n)||n}return t}function d(e,t){var r,n
if(i(e.length))for(r in e)b(e,r)&&t.call(null,r,e[r])
else if(n=e.length)for(r=0;r<n;r++)t.call(null,r,e[r])}function p(e,t){if(!t)return e
d(t,(function(t,r){e[t]=r}))
return e}function h(e){return!!Object.isFrozen&&Object.isFrozen(e)}function g(e,t){return!t||e.length<=t?e:e.substr(0,t)+"…"}function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function v(e){for(var t,r=[],n=0,o=e.length;n<o;n++)l(t=e[n])?r.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):t&&t.source&&r.push(t.source)
return new RegExp(r.join("|"),"i")}function m(e){var t=[]
d(e,(function(e,r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}))
return t.join("&")}function _(e){var t=e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
if(!t)return{}
var r=t[6]||"",n=t[8]||""
return{protocol:t[2],host:t[4],path:t[5],relative:t[5]+r+n}}function y(){var e=r.crypto||r.msCrypto
if(!i(e)&&e.getRandomValues){var t=new Uint16Array(8)
e.getRandomValues(t)
t[3]=4095&t[3]|16384
t[4]=16383&t[4]|32768
var n=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t
return t}
return n(t[0])+n(t[1])+n(t[2])+n(t[3])+n(t[4])+n(t[5])+n(t[6])+n(t[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)}))}function w(e,t){return!!(!!e^!!t)}function E(e,t){if(w(e,t))return!1
e=e.values[0]
t=t.values[0]
return e.type===t.type&&e.value===t.value&&x(e.stacktrace,t.stacktrace)}function x(e,t){if(null==e&&null==t)return!0
if(w(e,t))return!1
var r,n,o=e.frames,a=t.frames
if(o.length!==a.length)return!1
for(var i=0;i<o.length;i++){r=o[i]
n=a[i]
if(r.filename!==n.filename||r.lineno!==n.lineno||r.colno!==n.colno||r.function!==n.function)return!1}return!0}function k(e,t,r,n){var o=e[t]
e[t]=r(o)
n&&n.push([e,t,o])}e.exports={isObject:n,isError:o,isErrorEvent:a,isUndefined:i,isFunction:s,isString:l,isEmptyObject:u,supportsErrorEvent:c,wrappedCallback:f,each:d,objectMerge:p,truncate:g,objectFrozen:h,hasKey:b,joinRegExp:v,urlencode:m,uuid4:y,isSameException:E,isSameStacktrace:x,parseUrl:_,fill:k}},function(e,t){(e.exports=n).getSerialize=a
function r(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return r
return-1}function n(e,t,r,n){return JSON.stringify(e,a(t,n),r)}function o(e){var t={stack:e.stack,message:e.message,name:e.name}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t}function a(e,t){var n=[],a=[]
null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+a.slice(0,r(n,t)).join(".")+"]"})
return function(i,s){if(n.length>0){var l=r(n,this)
~l?n.splice(l+1):n.push(this)
~l?a.splice(l,1/0,i):a.push(i)
~r(n,s)&&(s=t.call(this,i,s))}else n.push(s)
return null==e?s instanceof Error?o(s):s:e.call(this,i,s)}}},function(e,t){function r(e){this.name="RavenConfigError"
this.message=e}r.prototype=new Error
r.prototype.constructor=r
e.exports=r},function(e,t){var r=function(e,t,r){var n=e[t],o=e
if(t in e){var a="warn"===t?"warning":t
e[t]=function(){var e=[].slice.call(arguments),i=""+e.join(" "),s={level:a,logger:"console",extra:{arguments:e}}
if("assert"===t){if(!1===e[0]){i="Assertion failed: "+(e.slice(1).join(" ")||"console.assert")
s.extra.arguments=e.slice(1)
r&&r(i,s)}}else r&&r(i,s)
n&&Function.prototype.apply.call(n,o,e)}}}
e.exports={wrapMethod:r}},function(e,t){e.exports=function(){if(void 0===window.hubspot)throw new Error("Could not find hubspot global variable.")
return window.hubspot}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
function n(){window.addEventListener("pageshow",e=>{e.persisted&&window.location.reload()})}e.exports=t.default},function(e,t,r){"use strict"
var n=r(1)
Object.defineProperty(t,"__esModule",{value:!0})
t.default=d
var o=n(r(16)),a=n(r(17)),i=n(r(5)),s=n(r(13)),l=r(18)
const u=2e5
function c(e){const t=()=>{s.default.newRelicErrorsToIgnore(e)}
s.default._newRelicCallbacks?s.default._newRelicCallbacks.push(t):s.default._newRelicCallbacks=[t]}function f(e){return function(t){e&&(t=e(t))
try{const e=JSON.stringify(t.extra)
if(e.length>u){o.default.debug("sentry")&&console.error(`Excessively large message logged to Raven (${e.length} characters). The extra data is logged here but will not be sent to Sentry.`,t.extra)
t.extra={message:"Error processing Sentry (extra data more than 200kb stringified). Existing extra data removed."}}}catch(e){o.default.debug("sentry")&&console.error("An unserializable object was logged to Raven as `extra` data. The extra data is logged here but will not be sent to Sentry.",t.extra)
t.extra={message:"Error processing Sentry (extra data not serializable). Existing extra data removed."}}return t}}function d(e,t={}){if(void 0===s.default.bender)if("prod"!==o.default.getShort("sentry"))console.warn("[raven-hubspot] `project` and `release` Sentry tags will not be set. See: HubSpot/raven-hubspot/issues/40")
else{s.default._newRelicCallbacks=s.default._newRelicCallbacks||[]
s.default._newRelicCallbacks.push(()=>{window.newrelic.setCustomAttribute&&window.newrelic.setCustomAttribute("ravenMissingTags",!0)})}const{bender:r}=s.default,n={sampleRate:1,stacktrace:!0,ignoreErrors:["Aborting: redirection in progress",/Aborting: notifying parents of unauthorized response/,/Cannot set property 'install' of undefined/,/ResizeObserver loop completed with undelivered notifications/,/ResizeObserver loop limit exceeded/,/'URLSearchParams' is not defined/,/Not implemented on this platform/],ignoreUrls:[]},u=t.ignoreErrors||[]
c((t=Object.assign({},n,t,{ignoreErrors:[...n.ignoreErrors,...u]})).ignoreErrors)
const d=o.default.getShort("sentry")
let p
try{p=!!(document&&document.cookie&&document.cookie.includes("hs_selenium"))}catch(e){p=!1}const h=(0,l.getDeployInfo)()
i.default.config(e,{release:r&&r.currentProjectVersion,ignoreErrors:t.ignoreErrors,ignoreUrls:t.ignoreUrls,sampleRate:t.sampleRate,environment:d,tags:Object.assign({env:d,project:h?h.deployable:r&&r.currentProject,portalId:a.default.get(),hublet:o.default.getHublet(),isAcceptanceTest:p},t.tags),breadcrumbCallback:t.breadcrumbCallback||(e=>e),autoBreadcrumbs:{console:!1},dataCallback:f(t.dataCallback),shouldSendCallback:t.shouldSendCallback||(()=>!0),stacktrace:t.stacktrace}).install()
!o.default.debug("sentry")&&o.default.deployed("sentry")||(i.default.debug=!0)
o.default.deployed("sentry")||i.default.setTransport(({onSuccess:e})=>{e()})}const p=window.setInterval
window.setInterval=function(e,...t){"function"!=typeof e&&i.default.captureException(new Error("Implied eval. Only a function should be passed as first arg of setInterval."))
return p(e,...t)}
const h=window.setTimeout
window.setTimeout=function(e,...t){"function"!=typeof e&&i.default.captureException(new Error("Implied eval. Only a function should be passed as first arg of setTimeout."))
return h(e,...t)}
e.exports=t.default},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
const n=["api","local","app","private","platform","tools","meetings"],o=["hubspotstarter","hubspotfree"],a=["growth"],i={com:["hubspot","hubteam","grader","getsignals","getsidekick","gettally","hubspotemail","customer-hub","hubspotservicehub","hubspotquote","hubspotdocuments"].join("|"),net:o.join("|"),org:a.join("|")},s=function e(t){const r=new RegExp(`^(?!local|test|selenium)(.*\\.)?(${Object.entries(i).map(([e,t])=>`(?:${t})(qa)?\\.${e}`).join("|")}|(?:connect)\\.com|(?:connect)(qa)\\.co|wthubspot\\.(com|de|es|fr|jp))$`).test(t.hostname),o=new RegExp(Object.entries(i).map(([e,t])=>`(?:${t})qa\\.${e}`).join("|")+"|(?:connect)qa\\.co|wthubspot\\.(com|de|es|fr|jp)"),a=new RegExp(`^(?:${n.join("|")})-(.*).(?:hubspot|hubteam)(?:qa)?.com`),s=new RegExp("^(.*).(?:hubspotquote)(?:qa)?.com"),l=new RegExp("^app-(.*).(?:hubspotdocuments)(?:qa)?.com"),u="ENV",c="Enviro error: the default argument for .get and .getShort is no longer supported",f=e=>{let t=window[e]
if(null==t)try{t=window.sessionStorage.getItem(e)}catch(e){}if(null==t)try{t=window.localStorage.getItem(e)}catch(e){}return t},d=()=>{const e=f(u)
return e||(o.test(t.host)?"qa":"prod")},p=(e,t)=>{window[e]=t
return t},h={prod:"production",qa:"development"},g=e=>{if("string"==typeof e){const t=e.toLowerCase()
return h[t]||t}return e},b=e=>{e="string"==typeof e?e.toLowerCase():void 0
return Object.keys(h).find(t=>e===h[t])||e},v=(e,t)=>{if(null!=t)throw new Error(c)
let r=null
if(e){const t=e.split(".").reverse()
for(let e=0;e<t.length;e++){const n=t[e]
r=f(n.toUpperCase()+"_ENV")
if(r)break}}if(null==r){const e=d()
r=null!=e?e:"qa"}return g(r)},m=(e,t)=>{if(null!=t)throw new Error(c)
return b(v(e))},_=m,y=e=>"prod"===_(e),w=e=>"qa"===_(e)
return{createEnviro:e,debug:(e,t=!1)=>{let r
"string"==typeof e&&(r=f(e.toUpperCase()+"_DEBUG"))
null==r&&(r=f("DEBUG"))
return null==r?t:r},denormalize:b,deployed:e=>{let t
"string"==typeof e&&(t=f(e.toUpperCase()+"_DEPLOYED"))
null==t&&(t=f("DEPLOYED"))
return null==t?r:!!t},enabled:(e,t=!1)=>{let r=f(e.toUpperCase()+"_ENABLED")
null==r&&(r=JSON.stringify(t))
return"true"===(""+r).toLowerCase()},get:v,getHublet:()=>{const e=f("HUBLET")
return e||(a.test(t.hostname)?a.exec(t.hostname)[1]:s.test(t.hostname)?s.exec(t.hostname)[1]:l.test(t.hostname)?l.exec(t.hostname)[1]:"na1")},getInternal:m,getShort:_,isProd:y,isQa:w,normalize:g,set:function(e,t){if(1===arguments.length){t=e
e=u}return p(e,t)},setDebug:(e,t=!0)=>{if("string"==typeof e)try{t?localStorage.setItem(e.toUpperCase()+"_DEBUG",JSON.stringify(!0)):localStorage.removeItem(e.toUpperCase()+"_DEBUG")}catch(r){p(e.toUpperCase()+"_DEBUG",t||void 0)}else{t=null==e||e
try{t?localStorage.setItem("DEBUG",JSON.stringify(t)):localStorage.removeItem("DEBUG")}catch(e){p("DEBUG",t||void 0)}}}}}
t.default=s(document.location)
e.exports=t.default},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
t.default={id:null,pathRegex:/^\/(?:[A-Za-z0-9-_]*)\/(\d+)(?:\/|$)/,queryParamRegex:/(?:\?|&)portalid=(\d+)/i,getPortalIdFromPath(e){if(document){null==e&&(e=this.pathRegex)
return this.parsePortalIdFromString(document.location.pathname,e)}},getPortalIdFromQueryParam(){if(document)return this.parsePortalIdFromString(document.location.search,this.queryParamRegex)},parsePortalIdFromString(e,t){const r=t.exec(e),n=null!=r?r[1]:void 0
return n?+n:void 0},get(e){null==e&&(e={})
if(this.id&&!e.reparse)return this.id
const t=this.getPortalIdFromPath(e.regex)||this.getPortalIdFromQueryParam()
if(!e.preserveGlobalId){null==window.hubspot&&(window.hubspot={})
null==window.hubspot.portal&&(window.hubspot.portal={})
null==window.hubspot.portal.id&&(window.hubspot.portal.id=t)
t&&(this.id=t)}return t}}
e.exports=t.default},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.getDeployInfo=o
const n="d"
function o(e=window.performance){try{const t=e.getEntriesByType("navigation")[0],r=t.serverTiming.find(e=>e.name===n).description,[o,a]=r.split("#")
return void 0!==o&&void 0!==a?{deployable:o,deployId:a}:void 0}catch(e){return}}}])

//# sourceMappingURL=//static.hsappstatic.net/head-dlb/static-1.1070/bundle.production.js.map