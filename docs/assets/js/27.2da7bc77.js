(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{402:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图形属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形属性"}},[t._v("#")]),t._v(" 图形属性")]),t._v(" "),a("p",[t._v("图形属性对应视觉编码中的视觉通道，是图形语法元素中非常重要和灵活的一部分，每种几何标记都拥有自己的图形属性。F2 中支持的图形属性有下面几种：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("position")]),t._v("：位置，二维坐标系内映射至 x 轴、y 轴；")]),t._v(" "),a("li",[a("strong",[t._v("color")]),t._v("：颜色，包含了色调、饱和度和亮度；")]),t._v(" "),a("li",[a("strong",[t._v("size")]),t._v("：大小，不同的几何标记对大小的定义有差异；")]),t._v(" "),a("li",[a("strong",[t._v("shape")]),t._v("：形状，几何标记的形状决定了某个具体图表类型的表现形式，例如点图，可以使用圆点、三角形、图片表示；线图可以有折线、曲线、点线等表现形式；")])]),t._v(" "),a("h2",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("p",[t._v("首先需要明确一点："),a("strong",[t._v("图形属性是属于每一个几何标记 geom（Geometry) 的")]),t._v("，所以我们先要声明几何标记，然后再在该几何标记对象上进行图形属性的映射，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("geomType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("attrType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中：")]),t._v(" "),a("ul",[a("li",[t._v("geomType，几何标记类型，具体支持的类型请阅读"),a("strong",[t._v("几何标记")]),t._v("章节；")]),t._v(" "),a("li",[t._v("attrType，图形属性类型，对应视觉通道；")]),t._v(" "),a("li",[t._v("fields，参与单个视觉通道映射的字段，可以是单个字段也可以是多个字段，多个字段使用 "),a("code",[t._v("*")]),t._v(" 分割")]),t._v(" "),a("li",[t._v("callback，回调函数，用于定义如何解析视觉通道，如不提供则只用 F2 默认提供的视觉通道解析方式。")])]),t._v(" "),a("p",[t._v("除了 "),a("code",[t._v("attr(fields[, callback])")]),t._v(" 的函数原型外，F2 为了用户使用的便利性，结合各个视觉通道的特点，还提供了更为便捷的使用方式，在本章后面会进行详细的介绍。")]),t._v(" "),a("p",[t._v("语法示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a*b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a*b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("F2 对于每个图形属性的参数 "),a("code",[t._v("fields")]),t._v(" 的解析规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("如果是单个单词，如 "),a("code",[t._v("color('a')")]),t._v(" 会判断该属性是否是输入数据源的字段属性，如果不是则会将其解析为一个常量；")]),t._v(" "),a("li",[t._v("如果是多个属性的映射，需要使用 "),a("code",[t._v("*")]),t._v(" 进行连接，F2 会依次对这些字段进行解析和映射，如 "),a("code",[t._v("position('cut*price')")]),t._v("；")])]),t._v(" "),a("h2",{attrs:{id:"position-位置属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-位置属性"}},[t._v("#")]),t._v(" position 位置属性")]),t._v(" "),a("p",[t._v("position 位置属性的映射，用于确定由数据中的哪几个字段来确定数据在平面坐标系的位置。通俗地解释，即确定 x 轴和 y 轴的数据字段。"),a("br"),t._v("\n以下面的语句为例，在 position 属性上，映射了两个属性： 'cut' 和 'price'，分别表示将 'cut' 数据值映射至 x 轴坐标点，'price' 数据值映射至 y 轴坐标点。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cut*price'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color"}},[t._v("#")]),t._v(" color")]),t._v(" "),a("p",[t._v("从可视化编码的角度对颜色进行分析，可以将颜色分为亮度、饱和度和色调三个视觉通道，其中前两个可以认为是用于编码定量和定序数据的视觉通道，而色调属于编码定性数据的视觉通道。而在 F2 中并不如此详细区分，统一使用 color 方法进行映射配置。")]),t._v(" "),a("p",[t._v("color 支持的映射语法如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("color('field')")]),t._v("，field 为数据中字段名，这时候 F2 会在内部调用默认的回调函数，读取默认提供的颜色进行数据值到颜色值的映射；")]),t._v(" "),a("li",[a("code",[t._v("color('field', colors)")]),t._v("，将数据值映射至指定的颜色值 colors（可以是字符串也可以是数组），此时用于通常映射分类数据；")]),t._v(" "),a("li",[a("code",[t._v("color('field', 'color1-color2-colorN')")]),t._v("，指定颜色的渐变路径，用于映射连续的数据；")]),t._v(" "),a("li",[a("code",[t._v("color('field', callback)")]),t._v("，使用回调函数进行颜色值的自定义；可以使用多个字段使用*号连接")]),t._v(" "),a("li",[a("code",[t._v("color('#ffffff')")]),t._v("， 直接指定颜色常量，不进行数据映射。")])]),t._v(" "),a("h3",{attrs:{id:"分类数据的颜色映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类数据的颜色映射"}},[t._v("#")]),t._v(" 分类数据的颜色映射")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("city")]),t._v(" 属性的数据值映射至制定的颜色来区分不同的城市。")]),t._v(" "),a("p",[a("code",[t._v(".color('city', [ '#40A9FF', '#FF7875', '#FFC069' ])")])]),t._v(" "),a("img",{attrs:{src:"/img/f2/tutorial/attribute1.png",width:"360"}}),t._v(" "),a("h3",{attrs:{id:"连续数据的颜色映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连续数据的颜色映射"}},[t._v("#")]),t._v(" 连续数据的颜色映射")]),t._v(" "),a("p",[t._v("对于连续的数据，我们可以为 color 指定颜色渐变的路径，以可视化数据在某一范围的变化趋势。")]),t._v(" "),a("p",[a("code",[t._v(".color('sales', '#BAE7FF-#1890FF-#0050B3')")]),a("br"),t._v(" "),a("img",{attrs:{src:"/img/f2/tutorial/attribute2.png",width:"360"}})]),t._v(" "),a("h3",{attrs:{id:"使用回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用回调函数"}},[t._v("#")]),t._v(" 使用回调函数")]),t._v(" "),a("p",[t._v("有时候颜色需要根据字段值进行特殊的指定，所以 F2 提供了回调函数来指定图形的颜色。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据单个字段计算颜色")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x*y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据多个字段计算颜色")]),t._v("\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x*y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level*value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#cdcdcd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"shape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shape"}},[t._v("#")]),t._v(" shape")]),t._v(" "),a("p",[t._v("不同的几何标记有不同的 shape（图形形状）。shape 这个视觉通道受其他几个视觉通道影响，比如：interval 几何标记的 shape 可以是填充的矩形 rect 也可是空心的边框矩形，这个就决定了是将 color 映射到填充色上还是映射到边框颜色上。shape 方法的使用方式比较简单，常用于映射分类数据：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("shape('field')")]),t._v("，将指定的字段映射到内置的 shapes 数组中；")]),t._v(" "),a("li",[a("code",[t._v("shape('field', shapes)")]),t._v("，用户自己提供 shapes 数据，来进行数据映射；")]),t._v(" "),a("li",[a("code",[t._v("shape('fields', callback)")]),t._v("，使用回调函数获取 shape，用于个性化的 shape 定制，可以根据单个或者多个字段确定；")]),t._v(" "),a("li",[a("code",[t._v("shape('circle')")]),t._v("，指定常量，将所有数据值映射到固定的 shape。")])]),t._v(" "),a("p",[t._v("另外 F2 提供了自定义 shape 的功能，用户可以自己绘制需要的 shape，详见"),a("RouterLink",{attrs:{to:"/nav/F2/api/shape.html"}},[t._v("自定义 shape")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"geom-和-shape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geom-和-shape"}},[t._v("#")]),t._v(" geom 和 shape")]),t._v(" "),a("p",[t._v("使用几何标记实现各种图表类型时，对于每一种几何标记来说，图形在绘制的时候有不同的形状（shape)，在"),a("RouterLink",{attrs:{to:"/nav/F2/tutorial/tag.html"}},[t._v("几何标记")]),t._v(" 章节已列出了目前 F2 提供的 geom 默认支持的 shape。")],1),t._v(" "),a("p",[a("code",[t._v(".shape('cat', [ 'circle', 'rect' ])")])]),t._v(" "),a("h3",{attrs:{id:"使用回调函数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用回调函数-2"}},[t._v("#")]),t._v(" 使用回调函数")]),t._v(" "),a("p",[t._v("shape 也可以通过字段值来计算，可以在 shape 方法中指定单个或者多个字段，通过回调函数返回指定的 shape。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x*y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'circle'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" size")]),t._v(" "),a("p",[t._v("对于不同的几何标记含义不完全一致：")]),t._v(" "),a("ul",[a("li",[t._v("对于 point 点来说，size 对应着点的半径；")]),t._v(" "),a("li",[t._v("对于 line 线来说，size 对应着线的粗细；")]),t._v(" "),a("li",[t._v("对于 interval 柱状图来说，size 对应着柱子的宽度。")])]),t._v(" "),a("p",[t._v("所以从可视化的角度分析，大小（size)是一个复杂的视觉通道。")]),t._v(" "),a("p",[t._v("在 F2 中，支持如下几种方式的映射语法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("size('field')")]),t._v("，指定映射到 size 的字段，使用内置的默认大小范围为 [1, 10]；")]),t._v(" "),a("li",[a("code",[t._v("size('field', [ ${min}, ${max} ])")]),t._v("，指定映射到 size 字段外，还提供了 size 的最大值和最小值范围；")]),t._v(" "),a("li",[a("code",[t._v("size('fields', callback)")]),t._v("，使用回调函数映射 size，用于个性化的 size 定制，可以使用多个字段进行映射；")]),t._v(" "),a("li",[a("code",[t._v("size(10)")]),t._v(" 直接指定像素大小。")])]),t._v(" "),a("p",[t._v("在气泡图中，常常使用 size 图形属性映射，用于编码更多维度的数据。如下例，使用气泡图来可视化每个国家人均国内生产总值同人均寿命之间的相关关系，同时将各个国家人口数据映射至气泡的大小。")]),t._v(" "),a("p",[a("code",[t._v(".size('Population', [ 4, 65 ])")])]),t._v(" "),a("img",{attrs:{src:"/img/f2/tutorial/attribute3.png",width:"360"}}),t._v(" "),a("h3",{attrs:{id:"回调函数的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调函数的使用"}},[t._v("#")]),t._v(" 回调函数的使用")]),t._v(" "),a("p",[t._v("size可以根据数据的字段值通过回调函数计算，可以指定多个字段")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x*y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nchart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x*y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'level*text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据文本长度返回长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"geom-支持的图形属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geom-支持的图形属性"}},[t._v("#")]),t._v(" Geom 支持的图形属性")]),t._v(" "),a("p",[t._v("前面提到过，每种几何标记支持的视觉通道有所差异，数据和视觉通道的映射关系也不完全相同。 下表列出了各个 geom 几何标记对各个图形属性的支持情况：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("几何标记")]),t._v(" "),a("th",[t._v("position")]),t._v(" "),a("th",[t._v("color")]),t._v(" "),a("th",[t._v("size")]),t._v(" "),a("th",[t._v("shape")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("point")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("path、line")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("area")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[a("code",[t._v("不支持")])]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("interval")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("polygon")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[a("code",[t._v("不支持")])]),t._v(" "),a("td",[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("schema")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")]),t._v(" "),a("td",[t._v("支持")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);