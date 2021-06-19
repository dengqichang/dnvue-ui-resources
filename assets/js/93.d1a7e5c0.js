(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{548:function(t,s,a){"use strict";a.r(s);var n=a(50),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pages-json模块化及热重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-json模块化及热重载"}},[t._v("#")]),t._v(" pages.json模块化及热重载")]),t._v(" "),a("p",[t._v("解决uni-app的pages.json无法模块化的问题，并且解决模块热重载和缓存的问题")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("该pages.json模块化及热重载方案来源于uni-app插件市场优秀的开源作品"),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=1602",target:"_blank",rel:"noopener noreferrer"}},[t._v("pages.json模块化及热重载"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://dnvue.dengqichang.cn/file/js/pages.json%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%8A%E7%83%AD%E9%87%8D%E8%BD%BD.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("pages.json模块化及热重载.zip"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("pages模块化及热重载.zip文件解压后：")]),t._v(" "),a("ol",[a("li",[t._v("将 "),a("code",[t._v("pages_config")]),t._v(" 目录放置 "),a("code",[t._v("根目录(项目名)/")]),t._v(" 路径下（与pages目录平级）。")]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v("pages.js")]),t._v(" 文件放置 "),a("code",[t._v("根目录(项目名)/")]),t._v(" 路径下（与pages.json平级）。")]),t._v(" "),a("li",[t._v("移除 "),a("code",[t._v("pages.json")]),t._v(" 中pages节点，其他配置项均可保留。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("┌─根目录\n├───pages \n├───pages_config           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一步：放置pages_config")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ├─page_modules       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//普通页面配置目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  ├─modules         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模块化js文件集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├─index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index.js模块，注意：添加或者移除内容均需要重新编译项目方可生效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └─xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//xxx.js模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  └─config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js       \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     └─subpackage_modules "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包加载配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        ├─modules         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模块化js文件集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├─index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index.js模块，注意：添加或者移除内容均需要重新编译项目方可生效")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   └─xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//xxx.js模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        └─config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js       \n├───"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" \n├───uni_modules\n├───App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├───main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n├───manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json \n├───pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二步：放置pages.js文件")]),t._v("\n├───pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第三步：移除pages配置节点")]),t._v("\n└───uni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scss\n")])])]),a("h3",{attrs:{id:"pages-json配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages-json配置"}},[t._v("#")]),t._v(" pages.json配置")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("在pages.json文件中将pages节点移除，其他配置项均可保留。")])]),t._v(" "),a("p",[t._v("pages.json示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//其他配置均可在pages.json中配置")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globalStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTextStyle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uni-app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarBackgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F8F8F8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F8F8F8"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"index-js示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-js示例"}},[t._v("#")]),t._v(" index.js示例")]),t._v(" "),a("p",[t._v("模块化后的js文件格式示例，与原pages.json文件内"),a("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("pages节点配置"),a("OutboundLink")],1),t._v("均一致。")]),t._v(" "),a("p",[a("strong",[t._v("注意：添加或者移除内容均需要重新编译项目方可生效")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"设置首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置首页"}},[t._v("#")]),t._v(" 设置首页")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("pages.js")]),t._v(" 文件源码第 "),a("code",[t._v("38")]),t._v(" 行设置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeDuplicationAndSetIndexPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("basePages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hotRequire")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./.dnvue/pages/config.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置首页路径")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages/index/index'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"分包加载配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分包加载配置"}},[t._v("#")]),t._v(" 分包加载配置")]),t._v(" "),a("p",[t._v("JS示例，参考"),a("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=subpackages",target:"_blank",rel:"noopener noreferrer"}},[t._v("uni-app 官方文档 subPackages 分包加载配置"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/API"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"授权登录"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"条件编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件编译"}},[t._v("#")]),t._v(" 条件编译")]),t._v(" "),a("p",[t._v("不支持条件编译，需要自己通过process.env.VUE_APP_PLATFORM来判断（不建议使用process.env.UNI_PLATFORM，因为在webpack客户端包里无法读取此环境变量，\n除非设置DefinePlugin），自定义环境的需要自己添加env变量来判断")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #ifdef H5 || APP-PLUS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_PLATFORM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'APP-PLUS'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_PLATFORM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/about/about"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"关于"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #endif")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);