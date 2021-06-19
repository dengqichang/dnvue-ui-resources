(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{487:function(t,s,a){"use strict";a.r(s);var n=a(50),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"坐标系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[t._v("#")]),t._v(" 坐标系")]),t._v(" "),a("p",[t._v("坐标系是将两种位置标度结合在一起组成的 2 维定位系统，描述了数据是如何映射到图形所在的平面。\nF2 提供了直角坐标系和极坐标两种类型，目前所有的坐标系均是 2 维的。")]),t._v(" "),a("h2",{attrs:{id:"如何设置坐标系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置坐标系"}},[t._v("#")]),t._v(" 如何设置坐标系")]),t._v(" "),a("p",[t._v("F2 默认提供的坐标系类型为笛卡尔坐标系，当需要切换坐标系时，可以通过调用下面的语法声明需要使用的坐标系：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coordType'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明坐标系类型")]),t._v("\n\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coordType'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明坐标系类型的同时，声明配置项")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("坐标系类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("rect")]),t._v(" "),a("td",[t._v("直角坐标系，目前仅支持二维，由 x, y 两个互相垂直的坐标轴构成。")])]),t._v(" "),a("tr",[a("td",[t._v("polar")]),t._v(" "),a("td",[t._v("极坐标系，由角度和半径 2 个维度构成。")])])])]),t._v(" "),a("h2",{attrs:{id:"坐标系类型及配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坐标系类型及配置"}},[t._v("#")]),t._v(" 坐标系类型及配置")]),t._v(" "),a("p",[t._v("坐标系可以分为笛卡尔坐标系和非笛卡尔坐标系，非笛卡尔坐标系即极坐标，由角度和半径这两个维度来确定位置。"),a("br"),t._v("\n利用极坐标可生成饼图、玫瑰图和雷达图等，较适用于周期性数据的可视化场景，比如时间和方向数据。"),a("br"),t._v("\n坐标系类型的变换会改变几何标记的形状，比如在极坐标系中，矩形将变为圆环的一部分。"),a("br"),t._v("\n例如下图展示的柱状图、层叠柱状图，在不同坐标系下就能变换出各种类型：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("直角坐标系")]),t._v(" "),a("th",[t._v("极坐标（未转置）")]),t._v(" "),a("th",[t._v("极坐标（转置）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("层叠柱状图")]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates1.png",width:"80"}})]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates2.png",width:"80"}})]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates3.png",width:"80"}})])]),t._v(" "),a("tr",[a("td",[t._v("柱状图")]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates4.png",width:"80"}})]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates5.png",width:"80"}})]),t._v(" "),a("td",[a("img",{attrs:{src:"/img/f2/tutorial/coordinates6.png",width:"80"}})])])])]),t._v(" "),a("h3",{attrs:{id:"坐标系配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坐标系配置"}},[t._v("#")]),t._v(" 坐标系配置")]),t._v(" "),a("h4",{attrs:{id:"直角坐标系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直角坐标系"}},[t._v("#")]),t._v(" 直角坐标系")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明直角坐标系")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直角坐标系转置")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  transposed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 坐标系进行转置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"极坐标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#极坐标"}},[t._v("#")]),t._v(" 极坐标")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明极坐标")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'polar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 极坐标配置")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("coord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'polar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  startAngle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 起始弧度")]),t._v("\n  endAngle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束弧度")]),t._v("\n  innerRadius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于空心部分的半径设置")]),t._v("\n  radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实心圆的半径大小设置")]),t._v("\n  transposed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 极坐标转置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里需要说明的是，F2 极坐标默认的起始角度和结束角度如下图所示："),a("br"),t._v(" "),a("img",{attrs:{src:"/img/f2/tutorial/coordinates7.png",width:"214"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);