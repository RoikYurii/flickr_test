!function i(s,a,u){function c(e,t){if(!a[e]){if(!s[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(f)return f(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[e]={exports:{}};s[e][0].call(o.exports,function(t){return c(s[e][1][t]||t)},o,o.exports,i,s,a,u)}return a[e].exports}for(var f="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e){"use strict";e.exports=t("./").polyfill()},{"./":2}],2:[function(z,r,n){(function(H,N){var t,e;t=this,e=function(){"use strict";function c(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,e=void 0,o=void 0,s=function(t,e){h[n]=t,h[n+1]=e,2===(n+=2)&&(o?o(d):m())};var t="undefined"!=typeof window?window:void 0,i=t||{},a=i.MutationObserver||i.WebKitMutationObserver,u="undefined"==typeof self&&void 0!==H&&"[object process]"==={}.toString.call(H),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(d,1)}}var h=new Array(1e3);function d(){for(var t=0;t<n;t+=2){(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0}n=0}var p,y,v,b,m=void 0;function w(t,e){var r=this,n=new this.constructor(A);void 0===n[g]&&R(n);var o=r._state;if(o){var i=arguments[o-1];s(function(){return I(o,n,i,r._result)})}else U(r,n,t,e);return n}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return B(e,t),e}m=u?function(){return H.nextTick(d)}:a?(y=0,v=new a(d),b=document.createTextNode(""),v.observe(b,{characterData:!0}),function(){b.data=y=++y%2}):f?((p=new MessageChannel).port1.onmessage=d,function(){return p.port2.postMessage(0)}):void 0===t&&"function"==typeof z?function(){try{var t=Function("return this")().require("vertx");return void 0!==(e=t.runOnLoop||t.runOnContext)?function(){e(d)}:l()}catch(t){return l()}}():l();var g=Math.random().toString(36).substring(2);function A(){}var E=void 0,T=1,O=2,x={error:null};function j(t){try{return t.then}catch(t){return x.error=t,x}}function P(t,e,r){e.constructor===t.constructor&&r===w&&e.constructor.resolve===_?function(e,t){t._state===T?S(e,t._result):t._state===O?M(e,t._result):U(t,void 0,function(t){return B(e,t)},function(t){return M(e,t)})}(t,e):r===x?(M(t,x.error),x.error=null):void 0===r?S(t,e):c(r)?function(t,n,o){s(function(e){var r=!1,t=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(o,n,function(t){r||(r=!0,n!==t?B(e,t):S(e,t))},function(t){r||(r=!0,M(e,t))},e._label);!r&&t&&(r=!0,M(e,t))},t)}(t,e,r):S(t,e)}function B(t,e){t===e?M(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"==e||"function"==e)}(e)?S(t,e):P(t,e,j(e))}function D(t){t._onerror&&t._onerror(t._result),k(t)}function S(t,e){t._state===E&&(t._result=e,t._state=T,0!==t._subscribers.length&&s(k,t))}function M(t,e){t._state===E&&(t._state=O,t._result=e,s(D,t))}function U(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+T]=r,o[i+O]=n,0===i&&t._state&&s(k,t)}function k(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?I(r,n,o,i):o(i);t._subscribers.length=0}}function I(t,e,r,n){var o=c(r),i=void 0,s=void 0,a=void 0,u=void 0;if(o){if((i=function(t,e){try{return t(e)}catch(t){return x.error=t,x}}(r,n))===x?(u=!0,s=i.error,i.error=null):a=!0,e===i)return void M(e,new TypeError("A promises callback cannot return that same promise."))}else i=n,a=!0;e._state!==E||(o&&a?B(e,i):u?M(e,s):t===T?S(e,i):t===O&&M(e,i))}var F=0;function R(t){t[g]=F++,t._state=void 0,t._result=void 0,t._subscribers=[]}var C=(L.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},L.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===_){var o=j(e);if(o===w&&e._state!==E)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===$){var i=new r(A);P(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},L.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,t===O?M(n,r):this._result[e]=r),0===this._remaining&&S(n,this._result)},L.prototype._willSettleAt=function(t,e){var r=this;U(t,void 0,function(t){return r._settledAt(T,e,t)},function(t){return r._settledAt(O,e,t)})},L);function L(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[g]||R(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}var $=(q.prototype.catch=function(t){return this.then(null,t)},q.prototype.finally=function(e){var r=this.constructor;return c(e)?this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})}):this.then(e,e)},q);function q(t){this[g]=F++,this._result=this._state=void 0,this._subscribers=[],A!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof q?function(e,t){try{t(function(t){B(e,t)},function(t){M(e,t)})}catch(t){M(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return $.prototype.then=w,$.all=function(t){return new C(this,t).promise},$.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var r=o.length,n=0;n<r;n++)i.resolve(o[n]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},$.resolve=_,$.reject=function(t){var e=new this(A);return M(e,t),e},$._setScheduler=function(t){o=t},$._setAsap=function(t){s=t},$._asap=s,$.polyfill=function(){var t=void 0;if(void 0!==N)t=N;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=$},$.Promise=$},"object"==typeof n&&void 0!==r?r.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}).call(this,z("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:4}],3:[function(t,e){t("whatwg-fetch"),e.exports=self.fetch.bind(self)},{"whatwg-fetch":5}],4:[function(t,e){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=a(h);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||f||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(){return[]},o.binding=function(){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],5:[function(t,e,r){var n,o;n=this,o=function(a){"use strict";var e="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in self,o="ArrayBuffer"in self;if(o)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&-1<i.indexOf(Object.prototype.toString.call(t))};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function d(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function p(t){var e=new FileReader,r=d(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o&&u&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=d(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=c(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},r&&(l.prototype[Symbol.iterator]=l.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return-1<b.indexOf(e)?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),n=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function _(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},v.call(m.prototype),v.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];_.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},a.DOMException=self.DOMException;try{new a.DOMException}catch(t){a.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function A(i,s){return new Promise(function(r,t){var e=new m(i,s);if(e.signal&&e.signal.aborted)return t(new a.DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function o(){n.abort()}n.onload=function(){var t={status:n.status,statusText:n.statusText,headers:function(t){var o=new l;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var n=e.join(":").trim();o.append(r,n)}}),o}(n.getAllResponseHeaders()||"")};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;r(new _(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new a.DOMException("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&u&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",o),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",o)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}A.polyfill=!0,self.fetch||(self.fetch=A,self.Headers=l,self.Request=m,self.Response=_),a.Headers=l,a.Request=m,a.Response=_,a.fetch=A,Object.defineProperty(a,"__esModule",{value:!0})},"object"==typeof r&&void 0!==e?o(r):"function"==typeof define&&define.amd?define(["exports"],o):o(n.WHATWGFetch={})},{}],6:[function(t,e,r){"use strict";var n;function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=new(((n=t("./photoDOM"))&&n.__esModule?n:{default:n}).default),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,r){e&&o(t.prototype,e),r&&o(t,r)}(t,[{key:"get",value:function(t){var e=0<arguments.length&&void 0!==t?t:{options:options},r=e.data,n=e.page,o=e.type;fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b593d1a115b3d98bf97a2790a4646f6&tags=".concat(r,"&per_page=10&page=").concat(n,"&format=json&nojsoncallback=1")).then(function(t){return t.json()}).then(function(t){i.addPhotos([t,o])}).catch(function(t){console.log(t)}),$("#loadIcon").fadeOut()}}]),t}();r.default=s},{"./photoDOM":7}],7:[function(t,e,r){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._imagesHtml=$("#imagesContainer")}return function(t,e,r){e&&n(t.prototype,e),r&&n(t,r)}(t,[{key:"getOptions",value:function(t){var e=$("#searchInp"),r=$(e).val();r&&$(e).attr("data-val",r);var n=t.attr("data-page"),o=t.attr("data-type");return 0<r.length?("standart"===o&&(this._imagesHtml.html(""),$("#lazyBtn").hide()),{data:r,page:n,type:o}):"lazy"===o?{data:r=$(e).attr("data-val"),page:n,type:o}:(alert("Потрібно ввести запит"),!1)}},{key:"addPhotos",value:function(t){var e=a(0<arguments.length&&void 0!==t?t:[r,n],2),r=e[0],n=e[1];if("0"===r.photos.total)alert("Зображень не знайдено :(");else if("ok"===r.stat){var o="";r.photos.photo.forEach(function(t){var e="https://farm".concat(t.farm,".staticflickr.com/").concat(t.server,"/").concat(t.id,"_").concat(t.secret,"_n.jpg");o+='<div class="images__item">\n                        <p>'.concat(t.title,'</p>\n                        <img src="').concat(e,'" alt="').concat(t.title,'">\n                      </div>\n                      ')}),this._imagesHtml.append(o);var i=$("#lazyBtn");if("standart"===n)$(i).fadeIn(),$(i).attr("data-page",2);else{var s=+i.attr("data-page")+1;$(i).attr("data-page",s)}}else 3===r.code?alert("Потрібно ввести запит"):(alert("Виникла помилка"),console.log(r.code+" - "+r.message))}}]),t}();r.default=o},{}],8:[function(t){"use strict";t("isomorphic-fetch"),t("es6-promise/auto");var e=n(t("./blocks/api.js")),r=n(t("./blocks/photoDOM"));function n(t){return t&&t.__esModule?t:{default:t}}var o=new e.default,i=new r.default;function s(t){var e=i.getOptions(t);e&&($("#loadIcon").fadeIn(),o.get(e))}$("#searchForm").on("submit",function(t){t.preventDefault(),s($(this))}),$("#lazyBtn").on("click",function(){s($(this))})},{"./blocks/api.js":6,"./blocks/photoDOM":7,"es6-promise/auto":1,"isomorphic-fetch":3}]},{},[8]);
//# sourceMappingURL=main.js.map
