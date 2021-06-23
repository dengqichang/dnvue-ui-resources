(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{490:function(t,v,_){"use strict";_.r(v);var a=_(50),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"几何标记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几何标记"}},[t._v("#")]),t._v(" 几何标记")]),t._v(" "),_("p",[t._v("几何标记即我们所说的点、线、面这些几何图形。F2 中并没有特定的图表类型（柱状图、散点图、折线图等）的概念，但是通过图形语法用户可以单独绘制某一种类型的图表，如饼图，也可以绘制混合图表，比如折线图和柱状图的组合。"),_("br"),t._v("\nF2 生成的图表的类型，都是由几何标记决定的。可以通过下图直观得理解什么是几何标记："),_("br"),t._v(" "),_("img",{attrs:{src:"/img/f2/tutorial/tag1.png",width:"800"}})]),t._v(" "),_("h2",{attrs:{id:"如何声明几何标记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何声明几何标记"}},[t._v("#")]),t._v(" 如何声明几何标记")]),t._v(" "),_("p",[t._v("创建好 chart 对象之后，就可以通过如下方式选择几何标记的类型：")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" geom "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chart"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里使用了 point 类型的 geom，该方法会返回 geom 对象")]),t._v("\n")])])]),_("h2",{attrs:{id:"几何标记类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几何标记类型"}},[t._v("#")]),t._v(" 几何标记类型")]),t._v(" "),_("p",[t._v("目前 F2 支持的几何标记的类型如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("point")]),t._v(" "),_("td",[t._v("点，用于绘制点图、气泡图。")])]),t._v(" "),_("tr",[_("td",[t._v("path")]),t._v(" "),_("td",[t._v("路径，无序的点连接而成的一条线，常用于路径图的绘制。")])]),t._v(" "),_("tr",[_("td",[t._v("line")]),t._v(" "),_("td",[t._v("线，点按照 x 轴连接成一条线，构成线图。")])]),t._v(" "),_("tr",[_("td",[t._v("area")]),t._v(" "),_("td",[t._v("填充线图跟坐标系之间构成区域图，也可以指定上下范围。")])]),t._v(" "),_("tr",[_("td",[t._v("interval")]),t._v(" "),_("td",[t._v("使用矩形或者弧形，用面积来表示大小关系的图形，一般构成柱状图、饼图等图表。")])]),t._v(" "),_("tr",[_("td",[t._v("polygon")]),t._v(" "),_("td",[t._v("多边形，可以用于构建色块图、地图等图表类型。")])]),t._v(" "),_("tr",[_("td",[t._v("schema")]),t._v(" "),_("td",[t._v("自定义图形，用于构建箱型图（或者称箱须图）、蜡烛图（或者称 K 线图、股票图）等图表。")])])])]),t._v(" "),_("h2",{attrs:{id:"几何标记和图表类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几何标记和图表类型"}},[t._v("#")]),t._v(" 几何标记和图表类型")]),t._v(" "),_("p",[t._v("虽然 F2 没有特定的图表类型概念，"),_("strong",[t._v("但是仍支持所有传统图表类型的绘制")]),t._v("。"),_("br"),t._v("\n下表展示了 F2 中的 geom 几何标记类型和传统图表的对应关系，更多的图表详见demos。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("geom 类型")]),t._v(" "),_("th",[t._v("图表类型")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("point")]),t._v(" "),_("td",[t._v("点图、气泡图、散点图")]),t._v(" "),_("td",[t._v("点的形状有很多，同时点也可以在不同坐标系下显示，所以还可以扩展出非常多的图表类型。")])]),t._v(" "),_("tr",[_("td",[t._v("path")]),t._v(" "),_("td",[t._v("路径图")]),t._v(" "),_("td",[t._v("路径图是无序的线图。")])]),t._v(" "),_("tr",[_("td",[t._v("line")]),t._v(" "),_("td",[t._v("折线图、曲线图")]),t._v(" "),_("td",[t._v("在极坐标系下可以转换成雷达图。")])]),t._v(" "),_("tr",[_("td",[t._v("area")]),t._v(" "),_("td",[t._v("区域图（面积图）、层叠区域图、百分比层叠区域图、区间区域图")]),t._v(" "),_("td",[t._v("极坐标系下可用于绘制雷达区域图。")])]),t._v(" "),_("tr",[_("td",[t._v("interval")]),t._v(" "),_("td",[t._v("柱状图、分组柱状图、瀑布图、层叠柱状图、百分比层叠柱状图、"),_("br"),t._v("直方图、南丁格尔玫瑰图、饼图、条形环图（玉缺图）、漏斗图等")]),t._v(" "),_("td",[t._v("通过坐标系的转置、变化，可以生成各种常见的图表类型；所有的图表都可以进行层叠、分组。")])]),t._v(" "),_("tr",[_("td",[t._v("polygon")]),t._v(" "),_("td",[t._v("色块图、地图")]),t._v(" "),_("td",[t._v("多个点可以构成多边形。")])]),t._v(" "),_("tr",[_("td",[t._v("schema")]),t._v(" "),_("td",[t._v("k 线图")]),t._v(" "),_("td",[t._v("自定义的图表类型。")])])])]),t._v(" "),_("h2",{attrs:{id:"几何标记和图形形状-shape"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#几何标记和图形形状-shape"}},[t._v("#")]),t._v(" 几何标记和图形形状（shape）")]),t._v(" "),_("p",[t._v("使用几何标记实现各种图表类型时，对于每一种几何标记来说，在绘制的时候还可以变换出不同的形状，视觉通道跟图形属性的映射方式不一样也会生成不同的图形：")]),t._v(" "),_("ul",[_("li",[t._v("点图，可以使用圆点、三角形、正方形、十字符号甚至图片表示点")]),t._v(" "),_("li",[t._v("线图，可以有折线、曲线、点线等")]),t._v(" "),_("li",[t._v("多边形，可以是实心的多边形，也可以是空心的仅有边框的多边形"),_("br"),t._v(" "),_("img",{attrs:{src:"/img/f2/tutorial/tag2.png",width:"600"}})])]),t._v(" "),_("p",[t._v("下面提供了 F2 中各个 geom 内置提供的 shape 类型，在后续图形属性章节，会详细介绍 shape 的使用方法。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("geom 类型")]),t._v(" "),_("th",[t._v("shape 类型")]),t._v(" "),_("th",[t._v("解释")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("point")]),t._v(" "),_("td",[t._v("'circle', 'hollowCircle', 'rect'")]),t._v(" "),_("td",[t._v("默认为 'circle'")])]),t._v(" "),_("tr",[_("td",[t._v("line")]),t._v(" "),_("td",[t._v("'line', 'smooth', 'dash'")]),t._v(" "),_("td",[t._v("dash：虚线，smooth： 平滑线")])]),t._v(" "),_("tr",[_("td",[t._v("area")]),t._v(" "),_("td",[t._v("'area', 'smooth'")]),t._v(" "),_("td",[t._v("填充内容的区域图")])]),t._v(" "),_("tr",[_("td",[t._v("interval")]),t._v(" "),_("td",[t._v("'rect'")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("polygon")]),t._v(" "),_("td",[t._v("'polygon'")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("schema'candle'")]),t._v(" "),_("td",[t._v("'candle'")]),t._v(" "),_("td",[t._v("目前仅 K 线图")])])])]),t._v(" "),_("p",[t._v("如果上面各种几何标记的图形形状没法满足您的需求的话，您还可以使用"),_("RouterLink",{attrs:{to:"/nav/F2/api/shape.html"}},[t._v("自定义 shape")]),t._v("功能定制更个性化的 Shape。")],1)])}),[],!1,null,null,null);v.default=r.exports}}]);