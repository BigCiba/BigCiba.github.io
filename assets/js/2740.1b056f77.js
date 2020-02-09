(window.webpackJsonp=window.webpackJsonp||[]).push([[2740],{2945:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"createillusions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createillusions"}},[t._v("#")]),t._v(" CreateIllusions")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[t._v("table "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIllusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hOwner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hHeroToCopy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hModiiferKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nNumIllusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nPadding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bScramblePosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bFindClearSpace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h1",{attrs:{id:"class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[t._v("#")]),t._v(" Class")]),t._v(" "),s("p",[t._v("✔️ "),s("code",[t._v("Server: Global")]),s("br"),t._v("\n❌ "),s("code",[t._v("Client: undefined")])]),t._v(" "),s("h1",{attrs:{id:"function-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-description"}},[t._v("#")]),t._v(" Function Description")]),t._v(" "),s("p",[t._v("使用传入的数据创建属于传入单位的英雄幻象。 ( hOwner, hHeroToCopy, hModiiferKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace ) 可选参数：outgoing_damage, incoming_damage, bounty_base, bounty_growth, outgoing_damage_structure, outgoing_damage_roshan")]),t._v(" "),s("h1",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("handle")]),t._v(" "),s("td",[t._v("hOwner")]),t._v(" "),s("td",[t._v("拥有者")])]),t._v(" "),s("tr",[s("td",[t._v("handle")]),t._v(" "),s("td",[t._v("hHeroToCopy")]),t._v(" "),s("td",[t._v("复制的英雄")])]),t._v(" "),s("tr",[s("td",[t._v("handle")]),t._v(" "),s("td",[t._v("hModiiferKeys")]),t._v(" "),s("td",[t._v("修改器参数")])]),t._v(" "),s("tr",[s("td",[t._v("int")]),t._v(" "),s("td",[t._v("nNumIllusions")]),t._v(" "),s("td",[t._v("幻象数量")])]),t._v(" "),s("tr",[s("td",[t._v("int")]),t._v(" "),s("td",[t._v("nPadding")]),t._v(" "),s("td",[t._v("nPadding")])]),t._v(" "),s("tr",[s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("bScramblePosition")]),t._v(" "),s("td",[t._v("bScramblePosition")])]),t._v(" "),s("tr",[s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("bFindClearSpace")]),t._v(" "),s("td",[t._v("是否寻找空位")])])])]),t._v(" "),s("h1",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建2个玩家1的英雄幻象")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" hPlayerHero "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PlayerResource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAssignedHero")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" illusions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIllusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hPlayerHero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hPlayerHero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\toutgoing_damage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 造成50%的伤害")]),t._v("\n\tincoming_damage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 受到300%的伤害")]),t._v("\n\tbounty_base "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 击杀获得15金钱")]),t._v("\n\toutgoing_damage_structure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对建筑造成10%伤害")]),t._v("\n\toutgoing_damage_roshan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 对肉山造成60%伤害")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nNumIllusions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nPadding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bScramblePosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bFindClearSpace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);