(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{494:function(t,e,n){"use strict";n.r(e);var a=n(50),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"基础概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),n("p",[t._v("下面介绍 "),n("code",[t._v("BindingX")]),t._v(" 中涉及到的一些核心概念，它们分别是 表达式 、 事件类型 、 属性变换 。要想使用 "),n("code",[t._v("BindingX")]),t._v(" 必须先理解这些概念。")]),t._v(" "),n("h3",{attrs:{id:"表达式-expression"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表达式-expression"}},[t._v("#")]),t._v(" 表达式(Expression)")]),t._v(" "),n("p",[t._v("表达式，是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合。譬如, "),n("code",[t._v("x\\*3+10")]),t._v(" 就是一个表达式，当x被赋值时，整个表达式就会有一个明确的结果。通过表达式，我们就可以描述一个具体的交互行为，比如我们希望x从0变化到100时，透明度能从1变化到0.5，那么表达式可以描述为: "),n("code",[t._v("f(alpha) = 1-(x/100)*0.5")]),t._v("。\n在 "),n("code",[t._v("BindingX")]),t._v(" 中，我们实现了一个轻量的表达式解析引擎用于执行表达式，除了基本的四则运算外，还支持三元运算符、数学函数等高级语法，能够满足绝大部分的场景。要查看 "),n("code",[t._v("BindingX")]),t._v(" 中支持的表达式语法，请参考文档: 《支持的表达式语法》。")]),t._v(" "),n("h3",{attrs:{id:"事件类型-event-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件类型-event-type"}},[t._v("#")]),t._v(" 事件类型(Event Type)")]),t._v(" "),n("p",[t._v("现在你已经知道了 "),n("code",[t._v("BindingX")]),t._v(" 是通过表达式来描述交互行为的，那么表达式中的变量究竟是什么呢？\n答案是”不同的事件类型拥有不同的表达式变量”！那什么是事件类型呢？在 "),n("code",[t._v("BindingX")]),t._v(" 中，事件是指能够驱动表达式数值变化的数据产生者，比如”用户的手势”、”列表的滚动” 甚至是”陀螺仪感知到的方向变化”，每一种这样的事件都对应着唯一的事件类型，比如”手势”对应的事件类型就是 pan ，要查看 "),n("code",[t._v("BindingX")]),t._v(" 支持的所有事件类型，请参考文档: 《支持的事件类型》。\n另外还需要说明的是，每一种事件类型都对应着不同的表达式变量。比如，当事件类型为 pan 时，表达式变量就是x和y，分别代表手势过程中横向和纵向的偏移量。同样地，要查看每一种事件类型对应的表达式变量，请参考文档: 《支持的事件类型》。")]),t._v(" "),n("h3",{attrs:{id:"属性变换-transformation-properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性变换-transformation-properties"}},[t._v("#")]),t._v(" 属性变换(Transformation Properties)")]),t._v(" "),n("p",[t._v("表达式的执行结果最终会驱动UI变化，比如透明度、位移、背景色等， 属性变换 就是用来描述这些属性的。在 "),n("code",[t._v("BindingX")]),t._v(" 中，支持常用的transform属性变换，如translation、scale ，另外还包括透明度、宽高等属性。要查看所有支持的属性变换，请参考文档：《支持的属性》。")])])}),[],!1,null,null,null);e.default=r.exports}}]);