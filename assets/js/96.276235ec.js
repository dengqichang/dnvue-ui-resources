(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{631:function(t,s,n){"use strict";n.r(s);var a=n(60),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"表单验证-数据验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单验证-数据验证"}},[t._v("#")]),t._v(" 表单验证/数据验证")]),t._v(" "),n("p",[t._v("表单验证/数据验证。使用简单/灵活，让你的验证如鱼得水")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),n("p",[t._v("该表单验证/数据验证来源于uni-app插件市场优秀的开源作品"),n("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=2138",target:"_blank",rel:"noopener noreferrer"}},[t._v("表单验证/数据验证"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模拟表单数据")]),t._v("\n\t\t\t\tdata"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tnumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'99'")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据验证")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rule "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字段名，对应[模拟表单数据]中的 name ")]),t._v("\n\t\t\t\tname"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于出现错误信息替换英文字段名（不设置此参数则默认使用英文name字段名）")]),t._v("\n\t\t\t\tnameChn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数字'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t\t\t\t * 验证规则（详细规则请在下方【验证规则】中查看）\n\t\t\t\t * 格式：['require', 'min:3', ['min', 3]]\n\t\t\t\t * 别名格式： ['>', 10] 等同于 ['gt', 10]\n\t\t\t\t */")]),t._v("\n\t\t\t\trules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'require'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t\t\t\t * 自定义错误信息（如不设置此参数则使用默认信息）\n\t\t\t\t * 格式：{验证规则的名称(支持别名): '自定错误信息的文本'}\n\t\t\t\t */")]),t._v("\n\t\t\t\terrorMsg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\trequire"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前数字不能为空'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不能为空")]),t._v("\n\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前值必须大于100'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//别名")]),t._v("\n\t\t\t\t\tmax"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数字不能大于三位数'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最小长度")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否通过验证，验证通过返回 true ,验证不通过返回 false")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回错误信息的第一条，验证通过则返回 null")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getErrorFirst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回错误信息的结果集")]),t._v("\n\t\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"验证规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证规则"}},[t._v("#")]),t._v(" 验证规则")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("规则名称")]),t._v(" "),n("th",[t._v("别名")]),t._v(" "),n("th",[t._v("用法")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("require")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['require']")]),t._v(" "),n("td",[t._v("必填项（如不设置此项，则数据不为空时才进行其他规则验证）")])]),t._v(" "),n("tr",[n("td",[t._v("number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['number']")]),t._v(" "),n("td",[t._v("是否为数值")])]),t._v(" "),n("tr",[n("td",[t._v("chn")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['chn']")]),t._v(" "),n("td",[t._v("是否为汉字")])]),t._v(" "),n("tr",[n("td",[t._v("chnNum")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['chnNum']")]),t._v(" "),n("td",[t._v("是否为汉字和数值")])]),t._v(" "),n("tr",[n("td",[t._v("chnOrNum")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['chnOrNum']")]),t._v(" "),n("td",[t._v("是否为汉字或数值")])]),t._v(" "),n("tr",[n("td",[t._v("alphaLine")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['alphaLine']")]),t._v(" "),n("td",[t._v("只能包含英文和下划线，首尾不能是下划线、且不能只是下划线")])]),t._v(" "),n("tr",[n("td",[t._v("mobile")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['mobile']")]),t._v(" "),n("td",[t._v("手机号码格式验证")])]),t._v(" "),n("tr",[n("td",[t._v("alphaNum")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['alphaNum']")]),t._v(" "),n("td",[t._v("只能是字母的数字")])]),t._v(" "),n("tr",[n("td",[t._v("email")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['email']")]),t._v(" "),n("td",[t._v("电子邮箱格式验证")])]),t._v(" "),n("tr",[n("td",[t._v("zipCode")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['zipCode']")]),t._v(" "),n("td",[t._v("邮政编码格式验证")])]),t._v(" "),n("tr",[n("td",[t._v("min")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['min:5'] 或 ['min', 5]")]),t._v(" "),n("td",[t._v("长度不能小于某值")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['max:5'] 或 ['max', 5]")]),t._v(" "),n("td",[t._v("长度不能大于某值")])]),t._v(" "),n("tr",[n("td",[t._v("length")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['length:1,10'] 或 ['length', '1,10']")]),t._v(" "),n("td",[t._v("在某长度范围内")])]),t._v(" "),n("tr",[n("td",[t._v("notbetween")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['notbetween:1,10'] 或 ['length', '1,10']")]),t._v(" "),n("td",[t._v("不再某长度范围内")])]),t._v(" "),n("tr",[n("td",[t._v("in")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['in:1,2,3,5,6,8'] 或 ['in', '1,2,3,6,5,89,9']")]),t._v(" "),n("td",[t._v("在指定的字符内")])]),t._v(" "),n("tr",[n("td",[t._v("notIn")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['notIn:1,2,3,5,6,8'] 或 ['notIn', '1,2,3,6,5,89,9']")]),t._v(" "),n("td",[t._v("不在指定的字符内")])]),t._v(" "),n("tr",[n("td",[t._v("different")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['different:formName'] 或 ['different', 'formName']")]),t._v(" "),n("td",[t._v("对比两个字段的值是否相同")])]),t._v(" "),n("tr",[n("td",[t._v("gt")]),t._v(" "),n("td",[t._v(">")]),t._v(" "),n("td",[t._v("['gt:100'] 或 ['gt', 100]")]),t._v(" "),n("td",[t._v("必须大于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("egt")]),t._v(" "),n("td",[t._v(">=")]),t._v(" "),n("td",[t._v("['egt:100'] 或 ['egt', 100]")]),t._v(" "),n("td",[t._v("必须大于等于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("elt")]),t._v(" "),n("td",[t._v("<=")]),t._v(" "),n("td",[t._v("['elt:100'] 或 ['elt', 100]")]),t._v(" "),n("td",[t._v("必须小于或等于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("lt")]),t._v(" "),n("td",[t._v("<")]),t._v(" "),n("td",[t._v("['lt:100'] 或 ['lt', 100]")]),t._v(" "),n("td",[t._v("必须小于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("eq")]),t._v(" "),n("td",[t._v("= 或 same")]),t._v(" "),n("td",[t._v("['eq:100'] 或 ['eq', 100]")]),t._v(" "),n("td",[t._v("必须等于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("notEq")]),t._v(" "),n("td",[t._v("<> 或 !=")]),t._v(" "),n("td",[t._v("['notEq:100'] 或 ['notEq', 100]")]),t._v(" "),n("td",[t._v("不等于某个数值")])]),t._v(" "),n("tr",[n("td",[t._v("regex")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("['regex', /(^[1-9]\\d*$)/]")]),t._v(" "),n("td",[t._v("支持使用正则验证")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);