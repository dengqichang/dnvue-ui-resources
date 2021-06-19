(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{542:function(t,a,e){"use strict";e.r(a);var s=e(50),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("标注出nvue开发时需要注意的地方，避免踩坑")]),t._v(" "),e("h4",{attrs:{id:"nvue开发与vue开发的常见区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nvue开发与vue开发的常见区别"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://uniapp.dcloud.io/use-weex?id=nvue%e5%bc%80%e5%8f%91%e4%b8%8evue%e5%bc%80%e5%8f%91%e7%9a%84%e5%b8%b8%e8%a7%81%e5%8c%ba%e5%88%ab",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvue开发与vue开发的常见区别"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("code",[t._v("nvue")]),t._v(" 页面控制显隐只可以使用"),e("code",[t._v("v-if")]),t._v("不可以使用"),e("code",[t._v("v-show")])]),t._v(" "),e("li",[e("code",[t._v("nvue")]),t._v(" 页面只能使用 "),e("code",[t._v("flex")]),t._v(" 布局，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 "),e("code",[t._v("flex")]),t._v(" 布局设计好界面。")]),t._v(" "),e("li",[t._v("原生开发没有页面滚动的概念，页面内容高过屏幕高度并不会自动滚动，只有部分组件可滚动（list、waterfall、scroll-view/scroller），要滚得内容需要套在可滚动组件下。这不符合前端开发的习惯，所以在 nvue 编译为 uni-app模式时，给页面外层自动套了一个 scroller，页面内容过高会自动滚动。（组件不会套，页面有recycle-list时也不会套）。后续会提供配置，可以设置不自动套。")]),t._v(" "),e("li",[t._v("文字内容，必须、只能在"),e("code",[t._v("<text>")]),t._v("组件下。不能在"),e("code",[t._v("<div>")]),t._v("、"),e("code",[t._v("<view>")]),t._v("的text区域里直接写文字。否则即使渲染了，也无法绑定js里的变量。")]),t._v(" "),e("li",[t._v("只有"),e("code",[t._v("text")]),t._v("标签可以设置字体大小，字体颜色。")]),t._v(" "),e("li",[t._v("布局不能使用百分比、没有媒体查询。")]),t._v(" "),e("li",[e("code",[t._v("nvue")]),t._v(" 切换横竖屏时可能导致样式出现问题，建议有 "),e("code",[t._v("nvue")]),t._v(" 的页面锁定手机方向。")]),t._v(" "),e("li",[t._v("支持的css有限，不过并不影响布局出你需要的界面，flex还是非常强大的。")]),t._v(" "),e("li",[t._v("不支持背景图。但可以使用 "),e("code",[t._v("image")]),t._v(" 组件和层级来实现类似web中的背景效果。因为原生开发本身也没有web这种背景图概念")]),t._v(" "),e("li",[t._v("css选择器支持的比较少，只能使用 class 选择器。详见weex的样式文档")]),t._v(" "),e("li",[t._v("class 进行绑定时只支持数组语法。")]),t._v(" "),e("li",[e("code",[t._v("nvue")]),t._v(" 页面没有bounce回弹效果，只有几个列表组件有bounce效果，包括 list、recycle-list、waterfall。")]),t._v(" "),e("li",[t._v("Android端在一个页面内使用大量圆角边框会造成性能问题，尤其是多个角的样式还不一样的话更耗费性能。应避免这类使用。")]),t._v(" "),e("li",[e("code",[t._v("nvue")]),t._v(" 的各组件在安卓端默认是透明的，如果不设置background-color，可能会导致出现重影的问题。")]),t._v(" "),e("li",[t._v("在 App.vue 中定义的全局js变量不会在 "),e("code",[t._v("nvue")]),t._v(" 页面生效。"),e("code",[t._v("globalData")]),t._v("和"),e("code",[t._v("vuex")]),t._v("是生效的。")]),t._v(" "),e("li",[t._v("App.vue 中定义的全局css，对nvue和vue页面同时生效。如果全局css中有些css在nvue下不支持，编译时控制台会报警，建议把这些不支持的css包裹在条件编译里，"),e("code",[t._v("APP-PLUS-NVUE")])]),t._v(" "),e("li",[t._v("不能在 style 中引入字体文件，nvue 中字体图标的使用参考："),e("a",{attrs:{href:"https://weex.apache.org/zh/docs/modules/dom.html#addrule",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex 加载自定义字体"),e("OutboundLink")],1),t._v("。如果是本地字体，可以用plus.io的API转换路径。")]),t._v(" "),e("li",[t._v("目前不支持在 nvue 页面使用 typescript/ts。")]),t._v(" "),e("li",[t._v("nvue 页面的布局排列方向默认为竖排（"),e("code",[t._v("column")]),t._v("），如需改变布局方向，可以在 "),e("code",[t._v("manifest.json")]),t._v(" -> "),e("code",[t._v("app-plus")]),t._v(" -> "),e("code",[t._v("nvue")]),t._v(" -> "),e("code",[t._v("flex-direction")]),t._v(" 节点下修改，仅在 "),e("code",[t._v("uni-app")]),t._v(" 模式下生效。"),e("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/manifest?id=nvue",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("nvue页面编译为H5、小程序时，会做一件css默认值对齐的工作。因为weex渲染引擎只支持flex，并且默认flex方向是垂直。而H5和小程序端，使用web渲染，默认不是flex，并且设置display:flex后，它的flex方向默认是水平而不是垂直的。所以nvue编译为H5、小程序时，会自动把页面默认布局设为flex、方向为垂直。当然开发者手动设置后会覆盖默认设置。")])]),t._v(" "),e("h4",{attrs:{id:"android平台阴影-box-shadow-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android平台阴影-box-shadow-问题"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://uniapp.dcloud.io/use-weex?id=android%e5%b9%b3%e5%8f%b0%e9%98%b4%e5%bd%b1box-shadow%e9%97%ae%e9%a2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android平台阴影(box-shadow)问题"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Android平台weex对阴影样式("),e("code",[t._v("box-shadow")]),t._v(")支持不完善，如设置圆角边框时阴影样式显示不正常、设置动画时在"),e("code",[t._v("Android7")]),t._v("上显示不正常、在"),e("code",[t._v("Android10")]),t._v("上出现闪烁现象等。为解决这些问题，从HBuilderX 2.4.7起，新增"),e("code",[t._v("elevation")]),t._v("属性（组件的属性，不是css样式）设置组件的层级，"),e("code",[t._v("Number")]),t._v("类型，层级值越大阴影越明显，阴影效果也与组件位置有关，越靠近页面底部阴影效果越明显")]),t._v(" "),e("p",[e("strong",[t._v("用法")])]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("elevation")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h4",{attrs:{id:"ios平台下拉组件refresh组件注意问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios平台下拉组件refresh组件注意问题"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://uniapp.dcloud.io/use-weex?id=ios%e5%b9%b3%e5%8f%b0%e4%b8%8b%e6%8b%89%e7%bb%84%e4%bb%b6refresh%e7%bb%84%e4%bb%b6%e6%b3%a8%e6%84%8f%e9%97%ae%e9%a2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS平台下拉组件refresh组件注意问题"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("iOS平台默认情况下滚动容器组件（如list、waterfall组件）内容不足时，由于没有撑满容器的可视区域会导致无法上下滚动，此时无法操作下拉刷新功能，无法触发refresh组件的@refresh、@pullingdown事件。 此时可在容器组件中配置alwaysScrollableVertical属性值为true来设置支持上下滚动，支持下拉刷新操作。")]),t._v(" "),e("p",[e("strong",[t._v("用法")])]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("list")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll-v list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enableBackToTop")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scroll-y")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alwaysScrollableVertical")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("refresh")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("refresh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@refresh")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onrefresh()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@pullingdown")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onpullingdown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    //refresh content\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("refresh")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(newsitem,index) in list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("newsitem.id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    //cell content\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Android平台不存在此问题")])])])}),[],!1,null,null,null);a.default=n.exports}}]);