(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{525:function(t,a,s){"use strict";s.r(a);var n=s(50),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"loading-上拉加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-上拉加载"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"#api"}},[t._v("Loading 上拉加载")])]),t._v(" "),s("p",[t._v("一般用于上拉加载新数据场景使用")]),t._v(" "),s("h3",{attrs:{id:"list-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-数据结构"}},[t._v("#")]),t._v(" list 数据结构")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'加载中...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'已加载全部信息'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"全局配置-不配置则默认使用dnvue内置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置-不配置则默认使用dnvue内置"}},[t._v("#")]),t._v(" 全局配置（不配置则默认使用DNVUE内置）")]),t._v(" "),s("p",[t._v("开发者可全局自定义上拉加载数据，在 "),s("code",[t._v(".dnvue/common/global.js")]),t._v(" 中配置，不配置则使用框架默认。")]),t._v(" "),s("h4",{attrs:{id:"默认配置规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认配置规范"}},[t._v("#")]),t._v(" 默认配置规范 "),s("Badge",{attrs:{type:"warning",text:"按需配置"}})],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guide/gif.html"}},[t._v("制作GIF动图 GO")])],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//n-loading组件")]),t._v("\n\tloading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlist"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'加载中...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'已加载全部信息'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tloadingGif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx.gif'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加载中GIF动图，不进行配置则使用DNVUE默认加载GIF动图")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("status")]),t._v(" 参数来控制显示不同状态下的上拉加载")]),t._v(" "),s("ul",[s("li",[t._v("0 : 空值（准备上拉加载）")]),t._v(" "),s("li",[t._v("1 : 加载中...")]),t._v(" "),s("li",[t._v("2 : 已加载全部信息")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("n-loading")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("n-loading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"自定义上拉加载数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义上拉加载数据"}},[t._v("#")]),t._v(" 自定义上拉加载数据")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("list")]),t._v(" 参数自定义当前上拉加载数")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("n-loading")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("上拉加载更多"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("疯狂加载中..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("没有更多信息了"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("n-loading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"attribute-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attribute-参数"}},[t._v("#")]),t._v(" Attribute 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("上拉加载状态")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("0、1、2")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("list")]),t._v(" "),s("td",[s("a",{attrs:{href:"#list-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"}},[t._v("上拉加载数据")])]),t._v(" "),s("td",[t._v("String, Number")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("loading-gif")]),t._v(" "),s("td",[t._v("加载中GIF图")]),t._v(" "),s("td",[t._v("String, Number")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("height "),s("Badge",{attrs:{text:"1.1.1"}})],1),t._v(" "),s("td",[t._v("组件高度")]),t._v(" "),s("td",[t._v("String, Number")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("88")])])])]),t._v(" "),s("h3",{attrs:{id:"status-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-值"}},[t._v("#")]),t._v(" status 值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("模式")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("空值（准备上拉加载）")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("加载中...")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("已加载全部信息")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);