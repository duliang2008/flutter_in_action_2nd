(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{523:function(t,s,a){t.exports=a.p+"assets/img/3-17.a249df4c.png"},717:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_3-4-单选开关和复选框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-单选开关和复选框"}},[t._v("#")]),t._v(" 3.4 单选开关和复选框")]),t._v(" "),n("h2",{attrs:{id:"_3-4-1-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-简介"}},[t._v("#")]),t._v(" 3.4.1.简介")]),t._v(" "),n("p",[t._v("Material 组件库中提供了 Material 风格的单选开关"),n("code",[t._v("Switch")]),t._v("和复选框"),n("code",[t._v("Checkbox")]),t._v("，虽然它们都是继承自"),n("code",[t._v("StatefulWidget")]),t._v("，但它们本身不会保存当前选中状态，选中状态都是由父组件来管理的。当"),n("code",[t._v("Switch")]),t._v("或"),n("code",[t._v("Checkbox")]),t._v("被点击时，会触发它们的"),n("code",[t._v("onChanged")]),t._v("回调，我们可以在此回调中处理选中状态改变逻辑。下面看一个简单的例子：")]),t._v(" "),n("div",{staticClass:"language-dart line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchAndCheckBoxTestRoute")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  _SwitchAndCheckBoxTestRouteState "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_SwitchAndCheckBoxTestRouteState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" _SwitchAndCheckBoxTestRouteState "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchAndCheckBoxTestRoute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bool _switchSelected"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//维护单选开关状态")]),t._v("\n  bool _checkboxSelected"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//维护复选框状态")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata function"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildContext")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Column")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _switchSelected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前状态")]),t._v("\n          onChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重新构建页面  ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              _switchSelected"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Checkbox")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _checkboxSelected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          activeColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Colors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//选中时的颜色")]),t._v("\n          onChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              _checkboxSelected"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br")])]),n("p",[t._v("上面代码中，由于需要维护"),n("code",[t._v("Switch")]),t._v("和"),n("code",[t._v("Checkbox")]),t._v("的选中状态，所以"),n("code",[t._v("SwitchAndCheckBoxTestRoute")]),t._v("继承自"),n("code",[t._v("StatefulWidget")]),t._v(" 。在其"),n("code",[t._v("build")]),t._v("方法中分别构建了一个"),n("code",[t._v("Switch")]),t._v("和"),n("code",[t._v("Checkbox")]),t._v("，初始状态都为选中状态，当用户点击时，会将状态置反，然后回调用"),n("code",[t._v("setState()")]),t._v("通知 Flutter 框架重新构建UI，效果如图3-17所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(523),alt:"图3-17"}})]),t._v(" "),n("h2",{attrs:{id:"_3-4-2-属性及外观"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-属性及外观"}},[t._v("#")]),t._v(" 3.4.2 属性及外观")]),t._v(" "),n("p",[n("code",[t._v("Switch")]),t._v("和"),n("code",[t._v("Checkbox")]),t._v("属性比较简单，读者可以查看API文档，它们都有一个"),n("code",[t._v("activeColor")]),t._v("属性，用于设置激活态的颜色。至于大小，到目前为止，"),n("code",[t._v("Checkbox")]),t._v("的大小是固定的，无法自定义，而"),n("code",[t._v("Switch")]),t._v("只能定义宽度，高度也是固定的。值得一提的是"),n("code",[t._v("Checkbox")]),t._v("有一个属性"),n("code",[t._v("tristate")]),t._v(" ，表示是否为三态，其默认值为"),n("code",[t._v("false")]),t._v(" ，这时 Checkbox 有两种状态即“选中”和“不选中”，对应的 value 值为"),n("code",[t._v("true")]),t._v("和"),n("code",[t._v("false")]),t._v(" ；如果"),n("code",[t._v("tristate")]),t._v("值为"),n("code",[t._v("true")]),t._v("时，value 的值会增加一个状态"),n("code",[t._v("null")]),t._v("，读者可以自行测试。")]),t._v(" "),n("h2",{attrs:{id:"_3-4-3-注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-注意"}},[t._v("#")]),t._v(" 3.4.3 注意")]),t._v(" "),n("p",[t._v("通过"),n("code",[t._v("Switch")]),t._v("和"),n("code",[t._v("Checkbox")]),t._v("我们可以看到，虽然它们本身是与状态（是否选中）关联的，但它们却不是自己来维护状态，而是需要父组件来管理状态，然后当用户点击时，再通过事件通知给父组件，这样是合理的，因为"),n("code",[t._v("Switch")]),t._v("和"),n("code",[t._v("Checkbox")]),t._v("是否选中本就和用户数据关联，而这些用户数据也不可能是它们的私有状态。我们在自定义组件时也应该思考一下哪种状态的管理方式最为合理。")])])}),[],!1,null,null,null);s.default=e.exports}}]);