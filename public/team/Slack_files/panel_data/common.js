/**
 * Blur Copyright (c) 2008-2015 by Abine, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information
 * of Abine, Inc. ("Confidential Information"), subject
 * to the Non-Disclosure Agreement and/or License Agreement you entered
 * into with Abine. You shall use such Confidential Information only
 * in accordance with the terms of said Agreement(s). Abine makes
 * no representations or warranties about the suitability of the
 * software. The software is provided with ABSOLUTELY NO WARRANTY
 * and Abine will NOT BE LIABLE for ANY DAMAGES resulting from
 * the use of the software.
 *
 * Contact license@getabine.com with any license-related questions.
 *
 * https://www.abine.com
 * @license
 *
 */
var ABINE_DNTME=ABINE_DNTME||{};ABINE_DNTME.startTime=Date.now(),window.ABINE_DNTME=window.ABINE_DNTME||ABINE_DNTME,define.unordered=!0,ABINE_DNTME.require=require,ABINE_DNTME.define=define,ABINE_DNTME.define("jquery",["abine/timer"],function(){return $}),ABINE_DNTME.define("abine/baseConfig",[],function(){var e=ABINE_DNTME.config={version:"7.7.2395",buildNum:"2395.4f86045967a07555032d826cb8cab95d9a89bdb4",appName:"Blur",environment:"production",tags:["amo"],crypt:!0,silent:!1,payments:!0,browser:null,serverHost:"mm.abine.com",webHost:"www.abine.com",webAppHost:"dnt.abine.com",mappingServerHost:"mapping.abine.com",phoneServerHost:"phone.abine.com",licenseServerHost:"license.abine.com",emailServerHost:"emails.abine.com",pushNotificationUrl:"https://push.abine.com",disposableDomain:"opayq.com",paymentsServerHost:"payments.abine.com",logLevel:"ERROR",pfVersion:".790 Chrome development",mmVersion:"0.0.1 development",features:"accounts,wallet,abinestore,shareWebsocket",buildTag:"amo",stripe_key:"pk_live_J13Da0TuELwopBJeF4HlBwU9",overriddenKeys:{}};return e.protocol="development"===ABINE_DNTME.config.environment?"http://":"https://",e.tellWebapp=function(t,n){if(t.documentElement.hasAttribute("abine_webapp")&&(t.documentElement.setAttribute("dnt",e.version),t.documentElement.setAttribute("dnt-features",e.features),t.documentElement.setAttribute("dnt-tag",e.tags[0]),t.documentElement.setAttribute("dnt-build-tag",e.buildTag),n)){var r=t.createEvent("Event");r.initEvent("data:tag:changed",!0,!0),t.dispatchEvent(r)}},e.updateTag=function(t,n){e.tags[0]!=t&&(e.tags[0]=t,n&&e.tellWebapp(n,!0))},e}),ABINE_DNTME.define("abine/config",["abine/baseConfig"],function(e){return e.browser="Firefox",e.tellWebapp(document),e}),ABINE_DNTME.require("abine/config"),ABINE_DNTME.define("abine/cobranding",["abine/config"],function(e){var t={"rules.update.url":"http://www.abine.com/rules/update.php","panel.logo.small":"/pages/images/2015panels/panel_b_logo.png","panel.logo.big":"/pages/images/blur_logo_ext_window.png"},n={"rules.update.url":"http://zonealarm.abine.com/update/rules/update.php","panel.logo.small":"/pages/images/zonealarm/logo-small.png","panel.logo.big":"/pages/images/zonealarm/logo-big.png"},r={"panel.logo.small":"/pages/images/samsung/logo-small.png","panel.logo.big":"/pages/images/samsung/logo-big.png"},i={zonealarm:n,zonealarm_webapp:n,samsung:r,samsung_webapp:r};return"production"!=e.environment&&(t["rules.update.url"]="https://rules.abine.com/test-rules.json"),{get:function(n){return e.tags[0]in i&&n in i[e.tags[0]]?i[e.tags[0]][n]:t[n]}}}),ABINE_DNTME.define("abine/timer",[],function(){var e=1,t={},n=function(n,r){var i=e++,a=Cc["@mozilla.org/timer;1"].createInstance(Ci.nsITimer);return t[i]=a,a.initWithCallback(function(){delete t[i],n()},r,Ci.nsITimer.TYPE_ONE_SHOT),i},r=function(e){try{e in t&&(t[e].cancel(),delete t[e])}catch(e){}},i=function(n,r){var i=e++,a=Cc["@mozilla.org/timer;1"].createInstance(Ci.nsITimer);return t[i]=a,a.initWithCallback(n,r,Ci.nsITimer.TYPE_REPEATING_SLACK),i},a={};return"undefined"!=typeof window&&"function"==typeof window.setTimeout?a.setTimeout=function(){return ABINE_DNTME.log,window.setTimeout.apply(window,arguments)}:a.setTimeout=n,"undefined"!=typeof window&&"function"==typeof window.clearTimeout?a.clearTimeout=function(){window.clearTimeout.apply(window,arguments)}:a.clearTimeout=r,"undefined"!=typeof window&&"function"==typeof window.setInterval?a.setInterval=function(){return window.setInterval.apply(window,arguments)}:a.setInterval=i,"undefined"!=typeof window&&"function"==typeof window.clearInterval?a.clearInterval=function(){window.clearInterval.apply(window,arguments)}:a.clearInterval=r,a}),ABINE_DNTME.define("documentcloud/underscore",function(){return _}),ABINE_DNTME.define("documentcloud/underscore/async",["documentcloud/underscore","abine/timer"],function(e,t){var n=t.setTimeout,r={},i=e,a=e.async;i.async=r,r.noConflict=function(){return i.async=a,r};var o=function(e,t){if(e.forEach)return e.forEach(t);for(var n=0;n<e.length;n+=1)t(e[n],n,e)},s=function(e,t){if(e.map)return e.map(t);var n=[];return o(e,function(e,r,i){n.push(t(e,r,i))}),n},l=function(e,t,n){return e.reduce?e.reduce(t,n):(o(e,function(e,r,i){n=t(n,e,r,i)}),n)},c=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t};"undefined"!=typeof process&&process.nextTick?r.nextTick=process.nextTick:r.nextTick=function(e){n(e,0)},r.forEach=function(e,t,n){if(n=n||function(){},!e.length)return n();var r=0;o(e,function(i){t(i,function(t){t?(n(t),n=function(){}):(r+=1,r===e.length&&n(null))})})},r.forEachSeries=function(e,t,n){if(n=n||function(){},!e.length)return n();var r=0,i=function(){t(e[r],function(t){t?(n(t),n=function(){}):(r+=1,r===e.length?n(null):i())})};i()},r.forEachLimit=function(e,t,n,r){if(r=r||function(){},!e.length||t<=0)return r();var i=0,a=0,o=0;!function s(){if(i===e.length)return r();for(;o<t&&a<e.length;)a+=1,o+=1,n(e[a-1],function(t){t?(r(t),r=function(){}):(i+=1,o-=1,i===e.length?r():s())})}()};var u=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.apply(null,[r.forEach].concat(t))}},d=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.apply(null,[r.forEachSeries].concat(t))}},h=function(e,t,n,r){var i=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n,r){i[e.index]=r,t(n)})},function(e){r(e,i)})};r.map=u(h),r.mapSeries=d(h),r.reduce=function(e,t,n,i){r.forEachSeries(e,function(e,r){n(t,e,function(e,n){t=n,r(e)})},function(e){i(e,t)})},r.inject=r.reduce,r.foldl=r.reduce,r.reduceRight=function(e,t,n,i){var a=s(e,function(e){return e}).reverse();r.reduce(a,t,n,i)},r.foldr=r.reduceRight;var f=function(e,t,n,r){var i=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n&&i.push(e),t()})},function(){r(s(i.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};r.filter=u(f),r.filterSeries=d(f),r.select=r.filter,r.selectSeries=r.filterSeries;var p=function(e,t,n,r){var i=[];t=s(t,function(e,t){return{index:t,value:e}}),e(t,function(e,t){n(e.value,function(n){n||i.push(e),t()})},function(){r(s(i.sort(function(e,t){return e.index-t.index}),function(e){return e.value}))})};r.reject=u(p),r.rejectSeries=d(p);var m=function(e,t,n,r){e(t,function(e,t){n(e,function(n){n?(r(e),r=function(){}):t()})},function(){r()})};r.detect=u(m),r.detectSeries=d(m),r.some=function(e,t,n){r.forEach(e,function(e,r){t(e,function(e){e&&(n(!0),n=function(){}),r()})},function(){n(!1)})},r.any=r.some,r.every=function(e,t,n){r.forEach(e,function(e,r){t(e,function(e){e||(n(!1),n=function(){}),r()})},function(){n(!0)})},r.all=r.every,r.sortBy=function(e,t,n){r.map(e,function(e,n){t(e,function(t,r){t?n(t):n(null,{value:e,criteria:r})})},function(e,t){if(e)return n(e);var r=function(e,t){var n=e.criteria,r=t.criteria;return n<r?-1:n>r?1:0};n(null,s(t.sort(r),function(e){return e.value}))})},r.auto=function(e,t){t=t||function(){};var n=c(e);if(!n.length)return t(null);var r={},i=[],a=function(e){i.unshift(e)},s=function(e){for(var t=0;t<i.length;t+=1)if(i[t]===e)return void i.splice(t,1)},u=function(){o(i.slice(0),function(e){e()})};a(function(){c(r).length===n.length&&(t(null,r),t=function(){})}),o(n,function(n){var i=e[n]instanceof Function?[e[n]]:e[n],o=function(e){if(e)t(e),t=function(){};else{var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),r[n]=i,u()}},c=i.slice(0,Math.abs(i.length-1))||[],d=function(){return l(c,function(e,t){return e&&r.hasOwnProperty(t)},!0)&&!r.hasOwnProperty(n)};if(d())i[i.length-1](o,r);else{var h=function(){d()&&(s(h),i[i.length-1](o,r))};a(h)}})},r.waterfall=function(e,t){if(t=t||function(){},!e.length)return t();var n=function(e){return function(i){if(i)t(i),t=function(){};else{var a=Array.prototype.slice.call(arguments,1),o=e.next();o?a.push(n(o)):a.push(t),r.nextTick(function(){e.apply(null,a)})}}};n(r.iterator(e))()},r.parallel=function(e,t){if(t=t||function(){},e.constructor===Array)r.map(e,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n)})},t);else{var n={};r.forEach(c(e),function(t,r){e[t](function(e){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),n[t]=i,r(e)})},function(e){t(e,n)})}},r.series=function(e,t){if(t=t||function(){},e.constructor===Array)r.mapSeries(e,function(e,t){e&&e(function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),t.call(null,e,n)})},t);else{var n={};r.forEachSeries(c(e),function(t,r){e[t](function(e){var i=Array.prototype.slice.call(arguments,1);i.length<=1&&(i=i[0]),n[t]=i,r(e)})},function(e){t(e,n)})}},r.iterator=function(e){var t=function(n){var r=function(){return e.length&&e[n].apply(null,arguments),r.next()};return r.next=function(){return n<e.length-1?t(n+1):null},r};return t(0)},r.apply=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var y=function(e,t,n,r){var i=[];e(t,function(e,t){n(e,function(e,n){i=i.concat(n||[]),t(e)})},function(e){r(e,i)})};r.concat=u(y),r.concatSeries=d(y),r.whilst=function(e,t,n){e()?t(function(i){return i?n(i):void r.whilst(e,t,n)}):n()},r.until=function(e,t,n){e()?n():t(function(i){return i?n(i):void r.until(e,t,n)})},r.queue=function(e,t){var n=0,i={tasks:[],concurrency:t,saturated:null,empty:null,drain:null,push:function(e,n){e.constructor!==Array&&(e=[e]),o(e,function(e){i.tasks.push({data:e,callback:"function"==typeof n?n:null}),i.saturated&&i.tasks.length==t&&i.saturated(),r.nextTick(i.process)})},process:function(){if(n<i.concurrency&&i.tasks.length){var t=i.tasks.shift();i.empty&&0==i.tasks.length&&i.empty(),n+=1,e(t.data,function(){n-=1,t.callback&&t.callback.apply(t,arguments),i.drain&&i.tasks.length+n==0&&i.drain(),i.process()})}},length:function(){return i.tasks.length},running:function(){return n}};return i};var g=function(e){return function(t){var n=Array.prototype.slice.call(arguments,1);t.apply(null,n.concat([function(t){var n=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(t?console.error&&console.error(t):console[e]&&o(n,function(t){console[e](t)}))}]))}};return r.log=g("log"),r.dir=g("dir"),r.memoize=function(e,t){var n={},r={};t=t||function(e){return e};var i=function(){var i=Array.prototype.slice.call(arguments),a=i.pop(),o=t.apply(null,i);o in n?a.apply(null,n[o]):o in r?r[o].push(a):(r[o]=[a],e.apply(null,i.concat([function(){n[o]=arguments;var e=r[o];delete r[o];for(var t=0,i=e.length;t<i;t++)e[t].apply(null,arguments)}])))};return i.unmemoized=e,i},r.unmemoize=function(e){return function(){return(e.unmemoized||e).apply(null,arguments)}},e}),ABINE_DNTME.require(["documentcloud/underscore/async"],function(){}),ABINE_DNTME.define("abine/eventLogger",["abine/config"],function(e){function t(){function e(e){try{Console(e)}catch(e){}}return"undefined"==typeof console||"undefined"==typeof console.debug||ABINE_DNTME.IE_BG?{finest:function(t){e(ABINE_DNTME.context+" [FINEST]["+new Date+"]: "+t)},debug:function(t){e(ABINE_DNTME.context+" [DEBUG]["+new Date+"]: "+t)},info:function(t){e(ABINE_DNTME.context+" [INFO]["+new Date+"]: "+t)},warn:function(t){e(ABINE_DNTME.context+" [WARNING]["+new Date+"]: "+t)},error:function(t){e(ABINE_DNTME.context+" [ERROR]["+new Date+"]: "+t)}}:"undefined"!=typeof console?{finest:function(e){console.debug(ABINE_DNTME.context+" [FINEST]["+new Date+"]: "+e)},debug:function(e){console.debug(ABINE_DNTME.context+" [DEBUG]["+new Date+"]: "+e)},info:function(e){console.info(ABINE_DNTME.context+" [INFO]["+new Date+"]: "+e)},warn:function(e){console.warn(ABINE_DNTME.context+" [WARNING]["+new Date+"]: "+e)},error:function(e){console.error(ABINE_DNTME.context+" [ERROR]["+new Date+"]: "+e)}}:void 0}var n=function(){},r=t();switch(r.dumpObj=function(e){var t=typeof e;if("object"!=t||null===e)return"string"==t&&(e='"'+e+'"'),String(e);var n,i,a=[],o=e&&e.constructor==Array;for(n in e)i=e[n],t=typeof i,"string"==t?i='"'+i+'"':"object"==t&&null!==i&&(i=r.dumpObj(i)),a.push((o?"":'"'+n+'":')+String(i));return(o?"[":"{")+String(a)+(o?"]":"}")},e.logLevel){case"NONE":r.error=n;case"ERROR":r.warn=n;case"WARN":r.info=n;case"INFO":r.debug=n;case"DEBUG":r.finest=n}return r.stackTrace=function(e){e=e||"";try{does.not=exist}catch(n){var t=(n.stack+"").split("\n");t.length>3&&(t.shift(),t.shift(),t.shift()),e+="\n"+t.join("\n")}this.debug(e)},ABINE_DNTME.log=ABINE_DNTME.log||r,r});