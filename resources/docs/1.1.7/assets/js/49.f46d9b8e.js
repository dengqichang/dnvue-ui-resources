(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{429:function(t,e,a){"use strict";a.r(e);var n=a(44),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"设计理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[t._v("#")]),t._v(" 设计理念")]),t._v(" "),a("h3",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("p",[a("strong",[t._v("1. App端内置了一个基于 weex 改进的原生渲染引擎，提供了原生渲染能力")])]),t._v(" "),a("ul",[a("li",[t._v("weex API ：仅支持App端，uni-app编译模式也可使用。使用前需先引入对应模块，参考："),a("a",{attrs:{href:"https://weex.apache.org/zh/docs/api/weex-variable.html#requiremodule",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex 模块引入"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("uni API ："),a("a",{attrs:{href:"https://uniapp.dcloud.io/api/README",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://uniapp.dcloud.io/api/README"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("plus API：仅支持App端。"),a("a",{attrs:{href:"http://www.html5plus.org/doc/h5p.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.html5plus.org/doc/h5p.html"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("2. 纯原生渲染模式")])]),t._v(" "),a("p",[t._v("启用纯原生渲染模式，可以减少App端的包体积、减少使用时的内存占用。因为webview渲染模式的相关模块将被移除。"),a("br"),t._v("\n在manifest.json源码视图的"),a("code",[t._v('"app-plus"')]),t._v("下配置"),a("code",[t._v('"renderer":"native"')]),t._v("，即代表App端启用纯原生渲染模式。"),a("br"),t._v("\n如果不指定该值，默认是不启动纯原生渲染的。")]),t._v(" "),a("p",[t._v("方式一：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manifest.json    ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...    ")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* App平台特有配置 */")]),t._v("    \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app-plus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renderer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"native"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//App端纯原生渲染模式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("方式二：")]),t._v(" "),a("p",[t._v("在manifest.json的"),a("code",[t._v("App常用其它设置")]),t._v("中勾选"),a("code",[t._v("纯nvue项目")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("3. nvue 里使用 "),a("a",{attrs:{href:"https://alibaba.github.io/bindingx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BindingX"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("uni-app是逻辑层和视图层分离的。此时会产生两层通信成本。比如拖动视图层的元素，如果在逻辑层不停接收事件，因为通信损耗会产生不顺滑的体验。"),a("br"),t._v("\nBindingX是weex提供的一种预描述交互语法。由原生解析BindingX规则，按此规则处理视图层的交互和动效。不再实时去js逻辑层运行和通信。"),a("br"),t._v("\nBindingX类似一种强化版的css，运行性能高。")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("小伙伴可在 "),a("code",[t._v(".dnvue/common/对应配置文件")]),t._v(" 中进行项目组件所需配置，"),a("br"),t._v("\n例如自定义图标，为空展示等...项目所需默认配置，一键配置全局生效，简便快捷的搭建项目基础统一配置")]),t._v(" "),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("ul",[a("li",[t._v("【uni_modules版本】 uni_modules版本一键更新升级，高效便捷")]),t._v(" "),a("li",[t._v("【兼容性】（ NVUE / VUE ）兼容安卓，iOS，微信小程序，H5，QQ小程序，百度小程序，支付宝小程序，头条小程序")]),t._v(" "),a("li",[t._v("【阿里字体图标库】360+ 阿里字体图标，图标统一风格，满足大部分场景需求")]),t._v(" "),a("li",[t._v("【精选组件】组件功能丰富，多端兼容（ NVUE / VUE ）")]),t._v(" "),a("li",[t._v("【全局挂载】支持nvue全局挂载，js自动注册全局挂载功能")]),t._v(" "),a("li",[t._v("【页面布局】众多的常用页面和布局，开箱即用")]),t._v(" "),a("li",[t._v("【配置驱动】以.dnvue 配置文件为中心的配置项目结构，配置方式帮助您全局管理与管理常用资源")]),t._v(" "),a("li",[t._v("【工具库】众多常用js小工具，让您开发过程中事半功倍")])]),t._v(" "),a("h3",{attrs:{id:"兼容平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容平台"}},[t._v("#")]),t._v(" 兼容平台")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("APP-NVUE")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("APP-VUE")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("字节跳动小程序")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);