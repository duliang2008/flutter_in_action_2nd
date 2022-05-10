(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{720:function(t,e,d){"use strict";d.r(e);var _=d(62),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h1",{attrs:{id:"_4-1-布局类组件简介"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-布局类组件简介"}},[t._v("#")]),t._v(" 4.1 布局类组件简介")]),t._v(" "),d("p",[t._v("布局类组件都会包含一个或多个子组件，不同的布局类组件对子组件排列（layout）方式不同，如表4-1所示：")]),t._v(" "),d("table",[d("thead",[d("tr",[d("th",[t._v("Widget")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("用途")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("LeafRenderObjectWidget")]),t._v(" "),d("td",[t._v("非容器类组件基类")]),t._v(" "),d("td",[t._v("Widget树的叶子节点，用于没有子节点的widget，通常基础组件都属于这一类，如Image。")])]),t._v(" "),d("tr",[d("td",[t._v("SingleChildRenderObjectWidget")]),t._v(" "),d("td",[t._v("单子组件基类")]),t._v(" "),d("td",[t._v("包含一个子Widget，如：ConstrainedBox、DecoratedBox等")])]),t._v(" "),d("tr",[d("td",[t._v("MultiChildRenderObjectWidget")]),t._v(" "),d("td",[t._v("多子组件基类")]),t._v(" "),d("td",[t._v("包含多个子Widget，一般都有一个children参数，接受一个Widget数组。如Row、Column、Stack等")])])])]),t._v(" "),d("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t表4-1")]),t._v(" "),d("p",[t._v("布局类组件就是指直接或间接继承(包含)"),d("code",[t._v("SingleChildRenderObjectWidget")]),t._v(" 和"),d("code",[t._v("MultiChildRenderObjectWidget")]),t._v("的Widget，它们一般都会有一个"),d("code",[t._v("child")]),t._v("或"),d("code",[t._v("children")]),t._v("属性用于接收子 Widget。我们看一下继承关系 Widget > RenderObjectWidget > (Leaf/SingleChild/MultiChild)RenderObjectWidget 。")]),t._v(" "),d("p",[d("code",[t._v("RenderObjectWidget")]),t._v("类中定义了创建、更新"),d("code",[t._v("RenderObject")]),t._v("的方法，子类必须实现他们，关于"),d("code",[t._v("RenderObject")]),t._v("我们现在只需要知道它是最终布局、渲染UI界面的对象即可，也就是说，对于布局类组件来说，其布局算法都是通过对应的"),d("code",[t._v("RenderObject")]),t._v("对象来实现的，所以读者如果对接下来介绍的某个布局类组件的原理感兴趣，可以查看其对应的"),d("code",[t._v("RenderObject")]),t._v("的实现，比如"),d("code",[t._v("Stack")]),t._v("（层叠布局）对应的"),d("code",[t._v("RenderObject")]),t._v("对象就是"),d("code",[t._v("RenderStack")]),t._v("，而层叠布局的实现就在"),d("code",[t._v("RenderStack")]),t._v("中。")]),t._v(" "),d("p",[t._v("在本章中，为了让读者对布局类 Widget 有个快速的认识，所以我们并不会深入到"),d("code",[t._v("RenderObject")]),t._v("的细节中去。在学习本章时，读者的重点是掌握不同布局组件的布局特点，具体原理和细节等我们对 Flutter 整体入门后，感兴趣的话再去研究。")])])}),[],!1,null,null,null);e.default=v.exports}}]);