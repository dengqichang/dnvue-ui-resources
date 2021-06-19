(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{470:function(t,a,s){"use strict";s.r(a);var n=s(50),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"axis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axis"}},[t._v("#")]),t._v(" Axis")]),t._v(" "),s("p",[t._v("坐标轴配置。F2 的坐标轴的组成如下："),s("br"),t._v(" "),s("img",{attrs:{src:"/img/f2/api/Axis1.png",width:"600"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("术语")]),t._v(" "),s("th",[t._v("英文")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("坐标轴文本")]),t._v(" "),s("td",[t._v("label")])]),t._v(" "),s("tr",[s("td",[t._v("坐标轴线")]),t._v(" "),s("td",[t._v("line")])]),t._v(" "),s("tr",[s("td",[t._v("坐标轴刻度线")]),t._v(" "),s("td",[t._v("tickLine")])]),t._v(" "),s("tr",[s("td",[t._v("坐标轴网格线")]),t._v(" "),s("td",[t._v("grid")])])])]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"chart-axis-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chart-axis-false"}},[t._v("#")]),t._v(" chart.axis(false)")]),t._v(" "),s("p",[t._v("不渲染坐标轴。")]),t._v(" "),s("h3",{attrs:{id:"chart-axis-field-false"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chart-axis-field-false"}},[t._v("#")]),t._v(" chart.axis(field, false)")]),t._v(" "),s("p",[t._v("关闭 field 对应的坐标轴。")]),t._v(" "),s("blockquote",[s("p",[t._v("field: String")])]),t._v(" "),s("p",[t._v("代表坐标轴对应的数据字段名。")]),t._v(" "),s("h3",{attrs:{id:"chart-axis-field-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chart-axis-field-config"}},[t._v("#")]),t._v(" chart.axis(field, config)")]),t._v(" "),s("p",[t._v("为 field 对应的坐标轴进行配置。")]),t._v(" "),s("blockquote",[s("p",[t._v("field: String")])]),t._v(" "),s("p",[t._v("代表坐标轴对应的数据字段名。")]),t._v(" "),s("blockquote",[s("p",[t._v("config: Object")])]),t._v(" "),s("p",[t._v("坐标轴的配置信息，可对坐标轴的各个组成元素进行配置，config 是由以下参数组成的对象：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("使用说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("line")]),t._v(" "),s("td",[t._v("Object/null")]),t._v(" "),s("td",[t._v("坐标轴线的配置信息，设置 null 时不显示，支持所有的 canvas 属性，参考"),s("RouterLink",{attrs:{to:"/nav/F2/api/drawing.html"}},[t._v("绘图属性")]),t._v("，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。")],1)]),t._v(" "),s("tr",[s("td",[t._v("labelOffset")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("坐标轴文本距离轴线的距离")])]),t._v(" "),s("tr",[s("td",[t._v("grid")]),t._v(" "),s("td",[t._v("Object/Function/null")]),t._v(" "),s("td",[t._v("坐标轴网格线的配置项，设置 null 时不显示，支持所有的 canvas 属性，参考"),s("RouterLink",{attrs:{to:"/nav/F2/api/drawing.html"}},[t._v("绘图属性")]),t._v("，支持回调函数，另外在极坐标下，可以通过配置 type: 'arc' 将其绘制为圆弧；如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。")],1)]),t._v(" "),s("tr",[s("td",[t._v("tickLine")]),t._v(" "),s("td",[t._v("Object/null")]),t._v(" "),s("td",[t._v("坐标轴刻度线的样式配置，设置 null 不显示，支持所有的 canvas 属性，参考"),s("RouterLink",{attrs:{to:"/nav/F2/api/drawing.html"}},[t._v("绘图属性")]),t._v(" ，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。")],1)]),t._v(" "),s("tr",[s("td",[t._v("label")]),t._v(" "),s("td",[t._v("Object/Function/null")]),t._v(" "),s("td",[t._v("坐标轴文本配置，设置 null 不显示, 支持所有的 canvas 属性，参考"),s("RouterLink",{attrs:{to:"/nav/F2/api/drawing.html"}},[t._v("绘图属性")]),t._v("，支持回调函数，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。")],1)]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("坐标轴显示位置配置，x 轴默认位于底部 'bottom'，y 轴可设置 position 为 'left'、'right'")])])])]),t._v(" "),s("p",[s("strong",[t._v("注意：grid 和 label 为回调函数时，返回值必须是对象!")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("axis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'field'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  line"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stroke"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ccc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 展示在最上层")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置坐标轴线的样式，如果值为 null，则不显示坐标轴线，图形属性")]),t._v("\n  labelOffset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 坐标轴文本距离轴线的距离")]),t._v("\n  tickLine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lineWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stroke"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ccc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刻度线长度")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 坐标点对应的线，null 不显示，图形属性")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("grid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0％ 处的栅格线着重显示")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        stroke"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#efefef'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      stroke"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f7f7f7'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cfg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      textAlign"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlign "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlign "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cfg.text 支持文本格式化处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" DEMO")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("场景描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("图表")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("链接")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("label 文本换行")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"/img/f2/api/Axis2.png",width:"360"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("查看")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("label 文本旋转")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"/img/f2/api/Axis3.png",width:"360"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("查看")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("label 回调")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"/img/f2/api/Axis4.png",width:"360"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("查看")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("grid 样式配置")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"/img/f2/api/Axis5.png",width:"360"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("查看")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("grid 回调")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"/img/f2/api/Axis6.png",width:"360"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("查看")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);