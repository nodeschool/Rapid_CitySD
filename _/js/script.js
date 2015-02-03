!function(a,b,c){a.fn.backstretch=function(d,e){return(d===c||0===d.length)&&a.error("No images were supplied for Backstretch"),0===a(b).scrollTop()&&b.scrollTo(0,0),this.each(function(){var b=a(this),c=b.data("backstretch");if(c){if("string"==typeof d&&"function"==typeof c[d])return void c[d](e);e=a.extend(c.options,e),c.destroy(!0)}c=new f(this,d,e),b.data("backstretch",c)})},a.backstretch=function(b,c){return a("body").backstretch(b,c).data("backstretch")},a.expr[":"].backstretch=function(b){return a(b).data("backstretch")!==c},a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var d={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},e={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},f=function(c,e,f){this.options=a.extend({},a.fn.backstretch.defaults,f||{}),this.images=a.isArray(e)?e:[e],a.each(this.images,function(){a("<img />")[0].src=this}),this.isBody=c===document.body,this.$container=a(c),this.$root=this.isBody?a(g?b:document):this.$container,c=this.$container.children(".backstretch").first(),this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(d).appendTo(this.$container),this.isBody||(c=this.$container.css("position"),e=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===e?0:e,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&g?"fixed":"absolute"}),this.index=0,this.show(this.index),a(b).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===b.pageYOffset&&(b.scrollTo(0,1),this.resize())},this))};f.prototype={resize:function(){try{var a,c={left:0,top:0},d=this.isBody?this.$root.width():this.$root.innerWidth(),e=d,f=this.isBody?b.innerHeight?b.innerHeight:this.$root.height():this.$root.innerHeight(),g=e/this.$img.data("ratio");g>=f?(a=(g-f)/2,this.options.centeredY&&(c.top="-"+a+"px")):(g=f,e=g*this.$img.data("ratio"),a=(e-d)/2,this.options.centeredX&&(c.left="-"+a+"px")),this.$wrap.css({width:d,height:f}).find("img:not(.deleteable)").css({width:e,height:g}).css(c)}catch(h){}return this},show:function(b){if(!(Math.abs(b)>this.images.length-1)){var c=this,d=c.$wrap.find("img").addClass("deleteable"),f={relatedTarget:c.$container[0]};return c.$container.trigger(a.Event("backstretch.before",f),[c,b]),this.index=b,clearInterval(c.interval),c.$img=a("<img />").css(e).bind("load",function(e){var g=this.width||a(e.target).width();e=this.height||a(e.target).height(),a(this).data("ratio",g/e),a(this).fadeIn(c.options.speed||c.options.fade,function(){d.remove(),c.paused||c.cycle(),a(["after","show"]).each(function(){c.$container.trigger(a.Event("backstretch."+this,f),[c,b])})}),c.resize()}).appendTo(c.$wrap),c.$img.attr("src",c.images[b]),c}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(c){a(b).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),c||this.$wrap.remove(),this.$container.removeData("backstretch")}};var g,h=navigator.userAgent,i=navigator.platform,j=h.match(/AppleWebKit\/([0-9]+)/),j=!!j&&j[1],k=h.match(/Fennec\/([0-9]+)/),k=!!k&&k[1],l=h.match(/Opera Mobi\/([0-9]+)/),m=!!l&&l[1],n=h.match(/MSIE ([0-9]+)/),n=!!n&&n[1];g=!((-1<i.indexOf("iPhone")||-1<i.indexOf("iPad")||-1<i.indexOf("iPod"))&&j&&534>j||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||l&&7458>m||-1<h.indexOf("Android")&&j&&533>j||k&&6>k||"palmGetResource"in b&&j&&534>j||-1<h.indexOf("MeeGo")&&-1<h.indexOf("NokiaBrowser/8.5.0")||n&&6>=n)}(jQuery,window),$(document).ready(function(a){a(window).load(function(){a("#status").fadeOut("slow"),a("#preloader").delay(500).fadeOut("slow").remove()});var b=a("<a>",{id:"toggle-btn",html:"Menu",title:"Menu",href:"#"}),c=a("nav#nav-wrap"),d=a("ul#nav");c.find("a.menu-btn").remove(),c.prepend(b),b.on("click",function(a){a.preventDefault(),d.slideToggle("fast")}),b.is(":visible")&&d.addClass("mobile"),a(window).resize(function(){b.is(":visible")?d.addClass("mobile"):d.removeClass("mobile")}),a("ul#nav li a").on("click",function(){d.hasClass("mobile")&&d.fadeOut("fast")}),a("#intro").backstretch("images/header-background.jpg");var e=300,f=400,g=400;jQuery(window).scroll(function(){jQuery(window).scrollTop()>=e?jQuery("#go-top").fadeIn(f):jQuery("#go-top").fadeOut(g)}),a("input, textarea").placeholder(),setTimeout(function(){a("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"90px"})},100);var h="2015/03/01";a("div#counter").countdown(h).on("update.countdown",function(b){a(this).html(b.strftime("<span>%D <em>days</em></span><span>%H <em>hours</em></span><span>%M <em>minutes</em></span><span>%S <em>seconds</em></span>"))}),a(".smoothscroll").on("click",function(b){b.preventDefault();var c=this.hash,d=a(c);a("html, body").stop().animate({scrollTop:d.offset().top},800,"swing",function(){window.location.hash=c})});var i=a("section"),j=a("#nav-wrap a");i.waypoint({handler:function(b,c){var d;d=a(this),"up"===c&&(d=d.prev());var e=a('#nav-wrap a[href="#'+d.attr("id")+'"]');j.parent().removeClass("current"),e.parent().addClass("current")},offset:"35%"}),a("#intro, #map").css({height:a(window).height()}),a(window).on("resize",function(){a("#intro, #map").css({height:a(window).height()}),a("body").css({width:a(window).width()}),a("#intro").backstretch("images/header-background.jpg")})}),void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,e,f,g){if(Object.defineProperty)try{return Object.defineProperty(b,e,{configurable:!0,enumerable:!0,get:function(){return d(g),f},set:function(a){d(g),f=a}}),c}catch(h){}a._definePropertyBroken=!0,b[e]=f}var f={};a.migrateWarnings=[],!a.migrateMute&&b.console&&b.console.log&&b.console.log("JQMIGRATE: Logging is active"),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(4>h.length&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') may use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var e=(a.nodeName||"").toLowerCase();return"button"===e?j.apply(this,arguments):("input"!==e&&"option"!==e&&d("jQuery.fn.attr('value', val) no longer sets properties"),a.value=b,c)}};var o,p,q=a.fn.init,r=a.parseJSON,s=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,c,e){var f;return b&&"string"==typeof b&&!a.isPlainObject(c)&&(f=s.exec(a.trim(b)))&&f[0]&&("<"!==b.charAt(0)&&d("$(html) HTML strings must start with '<' character"),f[3]&&d("$(html) HTML text after last tag is ignored"),"#"===f[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),c&&c.context&&(c=c.context),a.parseHTML)?q.call(this,a.parseHTML(f[2],c,!0),c,e):q.apply(this,arguments)},a.fn.init.prototype=a.fn,a.parseJSON=function(a){return a||null===a?r.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){return e&&e instanceof a&&!(e instanceof b)&&(e=b(e)),a.fn.init.call(this,d,e,c)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.ajaxSetup({converters:{"text json":a.parseJSON}});var t=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?t.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var u=/\/(java|ecma)script/i,v=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),v.apply(this,arguments)},a.clean||(a.clean=function(b,e,f,g){e=e||document,e=!e.nodeType&&e[0]||e,e=e.ownerDocument||e,d("jQuery.clean() is deprecated");var h,i,j,k,l=[];if(a.merge(l,a.buildFragment(b,e).childNodes),f)for(j=function(a){return!a.type||u.test(a.type)?g?g.push(a.parentNode?a.parentNode.removeChild(a):a):f.appendChild(a):c},h=0;null!=(i=l[h]);h++)a.nodeName(i,"script")&&j(i)||(f.appendChild(i),i.getElementsByTagName!==c&&(k=a.grep(a.merge([],i.getElementsByTagName("script")),j),l.splice.apply(l,[h+1,0].concat(k)),h+=k.length));return l});var w=a.event.add,x=a.event.remove,y=a.event.trigger,z=a.fn.toggle,A=a.fn.live,B=a.fn.die,C="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",D=RegExp("\\b(?:"+C+")\\b"),E=/(?:^|\s)hover(\.\S+|)\b/,F=function(b){return"string"!=typeof b||a.event.special.hover?b:(E.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(E,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&D.test(b)&&d("AJAX events should be attached to document: "+b),w.call(this,a,F(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){x.call(this,a,F(b)||"",c,d,e)},a.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);return d("jQuery.fn.error() is deprecated"),a.splice(0,0,"error"),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this)},a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return z.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;e.length>g;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),A?A.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),B?B.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||D.test(a)||d("Global events are undocumented and deprecated"),y.call(this,a,b,c||document,e)},a.each(C.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,null,b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}})}(jQuery,window),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){return function(b){var c=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(c)for(var e=0,f=c.length;f>e;++e){var g=c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),i=new RegExp(g[0]),j=g[1]||"",k=g[3]||"",l=null;g=g[2],h.hasOwnProperty(g)&&(l=h[g],l=Number(a[l])),null!==l&&("!"===j&&(l=d(k,l)),""===j&&10>l&&(l="0"+l.toString()),b=b.replace(i,l.toString()))}return b=b.replace(/%%/,"%")}}function d(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var e=100,f=[],g=[];g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var h={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},i=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)),this.setFinalDate(c),this.start()};a.extend(i.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},e)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},pause:function(){this.stop.call(this)},resume:function(){this.start.call(this)},remove:function(){this.stop(),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){return 0===this.$el.closest("html").length?void this.remove():(this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)},void(0===this.totalSecsLeft?(this.stop(),this.dispatchEvent("finish")):this.dispatchEvent("update")))},dispatchEvent:function(b){var d=a.Event(b+".countdown");d.finalDate=this.finalDate,d.offset=a.extend({},this.offset),d.strftime=c(this.offset),this.$el.trigger(d)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];i.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new i(this,b[0],b[1])})}}),function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=c[d]in u;return E.list&&(E.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.7.1",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),J={}.hasOwnProperty;m=f(J,"undefined")||f(J.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return J.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},C.canvastext=function(){return!!o.canvas&&!!f(b.createElement("canvas").getContext("2d").fillText,"function")},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return I("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!!a.history&&!!history.pushState},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var K in C)m(C,K)&&(l=K.toLowerCase(),o[l]=C[K](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return s.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.hasEvent=I,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;
c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a,b,c,d){var e=a(d),f="waypoint.reached",g=function(a,c){a.element.trigger(f,c),a.options.triggerOnce&&a.element[b]("destroy")},h=function(a,b){if(!b)return-1;for(var c=b.waypoints.length-1;c>=0&&b.waypoints[c].element[0]!==a[0];)c-=1;return c},i=[],j=function(b){a.extend(this,{element:a(b),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:a.proxy(function(){var b=this.element.scrollTop(),d=b>this.oldScroll,e=this,f=a.grep(this.waypoints,function(a){return d?a.offset>e.oldScroll&&a.offset<=b:a.offset<=e.oldScroll&&a.offset>b}),h=f.length;this.oldScroll&&b||a[c]("refresh"),this.oldScroll=b,h&&(d||f.reverse(),a.each(f,function(a,b){(b.options.continuous||a===h-1)&&g(b,[d?"down":"up"])}))},this)}),a(b).bind("scroll.waypoints",a.proxy(function(){this.didScroll||(this.didScroll=!0,d.setTimeout(a.proxy(function(){this.doScroll(),this.didScroll=!1},this),a[c].settings.scrollThrottle))},this)).bind("resize.waypoints",a.proxy(function(){this.didResize||(this.didResize=!0,d.setTimeout(a.proxy(function(){a[c]("refresh"),this.didResize=!1},this),a[c].settings.resizeThrottle))},this)),e.load(a.proxy(function(){this.doScroll()},this))},k=function(b){var c=null;return a.each(i,function(a,d){return d.element[0]===b?(c=d,!1):void 0}),c},l={init:function(d,e){return this.each(function(){var g,l=a.fn[b].defaults.context,m=a(this);e&&e.context&&(l=e.context),a.isWindow(l)||(l=m.closest(l)[0]),g=k(l),g||(g=new j(l),i.push(g));var n=h(m,g),o=0>n?a.fn[b].defaults:g.waypoints[n].options,p=a.extend({},o,e);p.offset="bottom-in-view"===p.offset?function(){var b=a.isWindow(l)?a[c]("viewportHeight"):a(l).height();return b-a(this).outerHeight()}:p.offset,0>n?g.waypoints.push({element:m,offset:null,options:p}):g.waypoints[n].options=p,d&&m.bind(f,d),e&&e.handler&&m.bind(f,e.handler)}),a[c]("refresh"),this},remove:function(){return this.each(function(b,c){var d=a(c);a.each(i,function(a,b){var c=h(d,b);c>=0&&(b.waypoints.splice(c,1),b.waypoints.length||(b.element.unbind("scroll.waypoints resize.waypoints"),i.splice(a,1)))})})},destroy:function(){return this.unbind(f)[b]("remove")}},m={refresh:function(){a.each(i,function(b,d){var e=a.isWindow(d.element[0]),f=e?0:d.element.offset().top,h=e?a[c]("viewportHeight"):d.element.height(),i=e?0:d.element.scrollTop();a.each(d.waypoints,function(a,b){if(b){var c=b.options.offset,e=b.offset;if("function"==typeof b.options.offset)c=b.options.offset.apply(b.element);else if("string"==typeof b.options.offset){var j=parseFloat(b.options.offset);c=b.options.offset.indexOf("%")?Math.ceil(h*(j/100)):j}b.offset=b.element.offset().top-f+i-c,b.options.onlyOnScroll||(null!==e&&d.oldScroll>e&&d.oldScroll<=b.offset?g(b,["up"]):null!==e&&d.oldScroll<e&&d.oldScroll>=b.offset?g(b,["down"]):!e&&d.element.scrollTop()>b.offset&&g(b,["down"]))}}),d.waypoints.sort(function(a,b){return a.offset-b.offset})})},viewportHeight:function(){return d.innerHeight?d.innerHeight:e.height()},aggregate:function(){var b=a();return a.each(i,function(c,d){a.each(d.waypoints,function(a,c){b=b.add(c.element)})}),b}};a.fn[b]=function(c){return l[c]?l[c].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof c&&c?"object"==typeof c?l.init.apply(this,[null,c]):void a.error("Method "+c+" does not exist on jQuery "+b):l.init.apply(this,arguments)},a.fn[b].defaults={continuous:!0,offset:0,triggerOnce:!1,context:d},a[c]=function(a){return m[a]?m[a].apply(this):m.aggregate()},a[c].settings={resizeThrottle:200,scrollThrottle:100},e.load(function(){a[c]("refresh")})}(jQuery,"waypoint","waypoints",window);