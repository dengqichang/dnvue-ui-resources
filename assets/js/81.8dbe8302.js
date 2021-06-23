(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{538:function(t,s,a){"use strict";a.r(s);var e=a(50),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("由于DNVUE使用uni_modules模式，让您无需引入组件即可直接使用，但是此功能需要Hbuilder X 3.1.0及以上版本才支持。"),a("br"),t._v("\nuni_modules打包的时候是按需引入的，您可以放心引入DNVUE的整个组件库，发布打包时会自动剔除您没有使用的组件")])]),t._v(" "),a("h3",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("p",[t._v("请确保您下载的"),a("a",{attrs:{href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hbuilder X"),a("OutboundLink")],1),t._v("为"),a("code",[t._v("APP开发版")]),t._v("，而非"),a("code",[t._v("标准版")])]),t._v(" "),a("h3",{attrs:{id:"插件市场地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件市场地址"}},[t._v("#")]),t._v(" 插件市场地址")]),t._v(" "),a("p",[t._v("插件市场地址："),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=4303",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNVUE UI"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("在uni-app插件市场的"),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=4303",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNVUE UI 多平台快速开发通用组件库"),a("OutboundLink")],1),t._v("中选择 "),a("code",[t._v("使用Hbuilder X导入插件")]),t._v(" 导入到项目中")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("┌─根目录")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("项目名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n├───pages \n├───"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" \n├───uni_modules\n├───App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二步：引入index.css")]),t._v("\n├───main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一步：全局挂载框架配置")]),t._v("\n├───manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json \n├───pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json  \n└───uni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scss\n")])])]),a("h4",{attrs:{id:"第一步-main-js-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-main-js-配置"}},[t._v("#")]),t._v(" 第一步：main.js 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局挂载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/uni_modules/dnvue-ui/config.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config\n")])])]),a("h4",{attrs:{id:"第二步-app-vue-中引入-index-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-app-vue-中引入-index-css"}},[t._v("#")]),t._v(" 第二步：App.vue 中引入 index.css")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("<style>\n\t"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/uni_modules/dnvue-ui/css/index.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n</style>\n")])])]),a("p",[a("strong",[t._v("配置完成，使用愉快~^o^~")])]),t._v(" "),a("p",[t._v("如果 DNVUE UI 能够帮助到您，请给个"),a("a",{attrs:{href:"https://gitee.com/dqc/dnvue-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("star"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=4303",target:"_blank",rel:"noopener noreferrer"}},[t._v("五星好评"),a("OutboundLink")],1),t._v("支持鼓励一下作者吧，感谢支持与鼓励。")]),t._v(" "),a("h3",{attrs:{id:"版本升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[t._v("#")]),t._v(" 版本升级")]),t._v(" "),a("p",[t._v("在项目 "),a("code",[t._v("uni_modules")]),t._v(" 目录下的 "),a("code",[t._v("dnvue-ui")]),t._v(" 目录，鼠标右键选择 "),a("code",[t._v("从插件市场更新")]),t._v(" 即可")]),t._v(" "),a("p",[t._v("升级前建议开发者先查看"),a("RouterLink",{attrs:{to:"/nav/components/start/log.html"}},[t._v("更新日志")]),t._v("与"),a("RouterLink",{attrs:{to:"/nav/components/start/upgrade.html"}},[t._v("升级指南")]),t._v("的版本更新内容，以便开发者了解最新版本动态。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);