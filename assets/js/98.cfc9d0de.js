(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{632:function(s,t,a){"use strict";a.r(t);var n=a(60),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"js全局注册挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js全局注册挂载"}},[s._v("#")]),s._v(" JS全局注册挂载")]),s._v(" "),a("p",[s._v("框架提供JS全局注册挂载功能，极大的便利和统一的规范项目所需。")]),s._v(" "),a("h3",{attrs:{id:"差异分析说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#差异分析说明"}},[s._v("#")]),s._v(" 差异分析说明")]),s._v(" "),a("p",[s._v("如开发者需引入外部JS全局注册挂载时，在 vue 页面可在 main.js 中挂载注册使用，然 nvue 页面则必须在当前页面内引入js才可使用。"),a("br"),s._v("\nnvue页面与vue页面在全局注册挂载中的差异极为明显，这也是导致nvue页面与vue页面无法做到相互融合、相互兼容且便利。"),a("br"),s._v("\n那么如果在全局注册挂载使用方面解决统一使用方式，也就解决一大半nvue与vue互通等问题，在逻辑层面就几乎一样。"),a("br"),s._v("\n在这些差异的背景下，DNVUE 解决了nvue / vue 统一全局注册挂载的问题，同时还可全局自动注册挂载，极大便利开发者使用。")]),s._v(" "),a("h3",{attrs:{id:"全局挂载方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局挂载方式"}},[s._v("#")]),s._v(" 全局挂载方式")]),s._v(" "),a("p",[s._v("在根项目的 "),a("code",[s._v(".hbuilderx")]),s._v(" 目录下新建 "),a("code",[s._v("common")]),s._v(" 目录。将需要全局注册挂载使用的 "),a("code",[s._v("js")]),s._v(" 文件放入 "),a("code",[s._v("common")]),s._v(" 目录下即可。"),a("br"),s._v(" "),a("code",[s._v("common")]),s._v(" 目录下的所有js文件将全部自动扫描全局注册挂载。"),a("br"),s._v(" "),a("strong",[s._v("注意：如果出现common目录下新添加的js文件未全局注册挂载情况，重新编译项目即可")])]),s._v(" "),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),a("p",[s._v("例如：将 "),a("code",[s._v("test.js")]),s._v(" 文件放置"),a("code",[s._v(".hbuilderx/common/")]),s._v("文件夹目录下。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("┌─根目录")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("项目名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n├───"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hbuilderx\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     └─common\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       └─test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//放入test.js文件")]),s._v("\n├───pages \n├───"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" \n├───uni_modules\n├───App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n├───main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n├───manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json \n├───pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json  \n└───uni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("scss\n")])])]),a("h3",{attrs:{id:"调用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用方式"}},[s._v("#")]),s._v(" 调用方式")]),s._v(" "),a("p",[s._v("页面中通过 "),a("code",[s._v("this.$store.test.xxx")]),s._v(" 形式调用，调用格式："),a("strong",[s._v("this.$store."),a("code",[s._v("JS文件名")]),s._v("."),a("code",[s._v("函数名")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//this.$store.JS文件名.函数名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);