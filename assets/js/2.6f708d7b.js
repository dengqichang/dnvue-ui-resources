(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{464:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"i",(function(){return h})),n.d(e,"h",(function(){return d}));n(61),n(89),n(465),n(466),n(240),n(88),n(138),n(139),n(39),n(140),n(239);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&a(t.path)===a(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=a(e),r=0;r<t.length;r++)if(a(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},465:function(t,e,n){"use strict";var i=n(245),r=n(12),s=n(27),o=n(32),a=n(246),u=n(247);i("match",(function(t,e,n){return[function(e){var n=o(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,this,t);if(i.done)return i.value;var o=r(this),c=String(t);if(!o.global)return u(o,c);var l=o.unicode;o.lastIndex=0;for(var f,p=[],h=0;null!==(f=u(o,c));){var d=String(f[0]);p[h]=d,""===d&&(o.lastIndex=a(c,s(o.lastIndex),l)),h++}return 0===h?null:p}]}))},466:function(t,e,n){"use strict";var i=n(245),r=n(242),s=n(12),o=n(32),a=n(500),u=n(246),c=n(27),l=n(247),f=n(91),p=n(244),h=n(2),d=p.UNSUPPORTED_Y,g=[].push,v=Math.min;i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var a,u,c,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=new RegExp(t.source,p+"g");(a=f.call(d,i))&&!((u=d.lastIndex)>h&&(l.push(i.slice(h,a.index)),a.length>1&&a.index<i.length&&g.apply(l,a.slice(1)),c=a[0].length,h=u,l.length>=s));)d.lastIndex===a.index&&d.lastIndex++;return h===i.length?!c&&d.test("")||l.push(""):l.push(i.slice(h)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,this,t,r,i!==e);if(o.done)return o.value;var f=s(this),p=String(t),h=a(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"g":"y"),k=new h(d?"^(?:"+f.source+")":f,m),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===p.length)return null===l(k,p)?[p]:[];for(var b=0,_=0,y=[];_<p.length;){k.lastIndex=d?0:_;var L,w=l(k,d?p.slice(_):p);if(null===w||(L=v(c(k.lastIndex+(d?_:0)),p.length))===b)_=u(p,_,g);else{if(y.push(p.slice(b,_)),y.length===x)return y;for(var C=1;C<=w.length-1;C++)if(y.push(w[C]),y.length===x)return y;_=b=L}}return y.push(p.slice(b)),y}]}),!!h((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),d)},467:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},470:function(t,e,n){"use strict";n(497),n(137),n(141);var i=n(464),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.e)(this.link)||Object(i.f)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.d)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.d)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(60),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},472:function(t,e,n){var i=n(32),r="["+n(467)+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),a=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},473:function(t,e,n){"use strict";var i=n(1),r=n(472).trim;i({target:"String",proto:!0,forced:n(505)("trim")},{trim:function(){return r(this)}})},474:function(t,e,n){var i=n(13),r=n(6),s=n(248),o=n(506),a=n(15),u=n(10).f,c=n(90).f,l=n(242),f=n(243),p=n(244),h=n(40),d=n(2),g=n(9),v=n(43).enforce,m=n(507),k=n(3),x=n(249),b=n(250),_=k("match"),y=r.RegExp,L=y.prototype,w=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,C=/a/g,$=/a/g,O=new y(C)!==C,I=p.UNSUPPORTED_Y,S=i&&(!O||I||x||b||d((function(){return $[_]=!1,y(C)!=C||y($)==$||"/a/i"!=y(C,"i")})));if(s("RegExp",S)){for(var E=function(t,e){var n,i,r,s,u,c,p=this instanceof E,h=l(t),d=void 0===e,m=[],k=t;if(!p&&h&&d&&t.constructor===E)return t;if((h||t instanceof E)&&(t=t.source,d&&(e="flags"in k?k.flags:f.call(k))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),k=t,x&&"dotAll"in C&&(i=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,I&&"sticky"in C&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),b&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],o={},a=!1,u=!1,c=0,l="";i<=n;i++){if("\\"===(e=t.charAt(i)))e+=t.charAt(++i);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:w.test(t.slice(i+1))&&(i+=2,u=!0),r+=e,c++;continue;case">"===e&&u:if(""===l||g(o,l))throw new SyntaxError("Invalid capture group name");o[l]=!0,s.push([l,c]),u=!1,l="";continue}u?l+=e:r+=e}return[r,s]}(t))[0],m=s[1]),u=o(y(t,e),p?this:L,E),(i||r||m.length)&&(c=v(u),i&&(c.dotAll=!0,c.raw=E(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=t.charAt(i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++i);return r}(t),n)),r&&(c.sticky=!0),m.length&&(c.groups=m)),t!==k)try{a(u,"source",""===k?"(?:)":k)}catch(t){}return u},j=function(t){t in E||u(E,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},R=c(y),A=0;R.length>A;)j(R[A++]);L.constructor=E,E.prototype=L,h(r,"RegExp",E)}m("RegExp")},475:function(t,e,n){"use strict";var i=n(40),r=n(12),s=n(2),o=n(243),a=RegExp.prototype,u=a.toString,c=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&i(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?o.call(t):n)}),{unsafe:!0})},476:function(t,e,n){},477:function(t,e,n){},478:function(t,e,n){},479:function(t,e,n){},480:function(t,e,n){},482:function(t,e){t.exports=function(t){return null==t}},483:function(t,e,n){},484:function(t,e,n){},494:function(t,e,n){"use strict";var i=n(58),r=(n(141),n(88),n(61),n(89),n(137),n(253),n(465),n(474),n(475),n(470)),s=n(496),o=n(255),a=n.n(o),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return a()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},c=(n(512),n(60)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(464),p={name:"NavLinks",components:{NavLink:r.a,DropdownLink:l},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var o,a=e[i],u=s[i]&&s[i].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===o}))||(o=i)),{text:u,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.h)(t),{items:(t.items||[]).map(f.h)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},h=(n(513),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=h.exports},495:function(t,e,n){"use strict";n.r(e);n(137);var i=n(533),r=n(535),s=n(464);function o(t,e){if("group"===e.type){var n=e.path&&Object(s.c)(t,e.path),i=e.children.some((function(e){return"group"===e.type?o(t,e):"page"===e.type&&Object(s.c)(t,e.path)}));return n||i}return!1}var a={name:"SidebarLinks",components:{SidebarGroup:i.a,SidebarLink:r.a},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(o(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.c)(this.$route,t.regularPath)}}},u=n(60),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},496:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(511),n(60)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},497:function(t,e,n){"use strict";var i=n(1),r=n(498);i({target:"String",proto:!0,forced:n(499)("link")},{link:function(t){return r(this,"a","href",t)}})},498:function(t,e,n){var i=n(32),r=/"/g;t.exports=function(t,e,n,s){var o=String(i(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),a+">"+o+"</"+e+">"}},499:function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},500:function(t,e,n){var i=n(12),r=n(62),s=n(3)("species");t.exports=function(t,e){var n,o=i(t).constructor;return void 0===o||null==(n=i(o)[s])?e:r(n)}},502:function(t,e,n){var i=n(1),r=n(503);i({global:!0,forced:parseInt!=r},{parseInt:r})},503:function(t,e,n){var i=n(6),r=n(472).trim,s=n(467),o=i.parseInt,a=/^[+-]?0[Xx]/,u=8!==o(s+"08")||22!==o(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return o(n,e>>>0||(a.test(n)?16:10))}:o},504:function(t,e,n){"use strict";e.a={}},505:function(t,e,n){var i=n(2),r=n(467);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},506:function(t,e,n){var i=n(7),r=n(142);t.exports=function(t,e,n){var s,o;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(o=s.prototype)&&o!==n.prototype&&r(t,o),t}},507:function(t,e,n){"use strict";var i=n(42),r=n(10),s=n(3),o=n(13),a=s("species");t.exports=function(t){var e=i(t),n=r.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},508:function(t,e,n){"use strict";var i,r=n(1),s=n(44).f,o=n(27),a=n(144),u=n(32),c=n(145),l=n(41),f="".endsWith,p=Math.min,h=c("endsWith");r({target:"String",proto:!0,forced:!!(l||h||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!h},{endsWith:function(t){var e=String(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,i=o(e.length),r=void 0===n?i:p(o(n),i),s=String(t);return f?f.call(e,s,r):e.slice(r-s.length,r)===s}})},509:function(t,e,n){"use strict";n(476)},510:function(t,e,n){"use strict";n(477)},511:function(t,e,n){"use strict";n(478)},512:function(t,e,n){"use strict";n(479)},513:function(t,e,n){"use strict";n(480)},516:function(t,e,n){"use strict";n(483)},517:function(t,e,n){var i=n(46),r=n(20),s=n(33);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},518:function(t,e,n){"use strict";n(484)},522:function(t,e,n){"use strict";var i=n(1),r=n(45).find,s=n(143),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},530:function(t,e,n){"use strict";n(473),n(239),n(140),n(39),n(61),n(465),n(251),n(252),n(240),n(89),n(474),n(475),n(88),n(466),n(508),n(137);var i=n(254),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),o(t,i)},o=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],o=0;o<e.length&&!(r.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(s(t,a))r.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(r.length>=n);u++){var c=a.headers[u];c.title&&s(t,a,c.title)&&r.push(Object.assign({},a,{path:a.path+"#"+c.slug,header:c}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(509),n(60)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},531:function(t,e,n){"use strict";n(61),n(89);var i=n(482),r=n.n(i),s=n(464),o={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,o=e.docsBranch,a=void 0===o?"master":o,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(s.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r:(s.g.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r}}},a=(n(516),n(60)),u=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=u.exports},532:function(t,e,n){"use strict";var i=n(464),r=n(517),s=n.n(r),o=n(482),a=n.n(o),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return l(c.PREV,this)},next:function(){return l(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function l(t,e){var n=e.$themeConfig,r=e.$page,o=e.$route,u=e.$site,c=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,p=t.getPageLinkConfig,h=f(n),d=p(r),g=a()(d)?h:d;return!1===g?void 0:s()(g)?Object(i.i)(u.pages,g,o.path):l(r,c)}function f(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var p=u,h=(n(518),n(60)),d=Object(h.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=d.exports},534:function(t,e,n){"use strict";n(510);var i=n(60),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=r.exports}}]);