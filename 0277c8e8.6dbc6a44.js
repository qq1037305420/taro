(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1794:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var l=n(0),c=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(n),O=l,p=d["".concat(b,".").concat(O)]||d[O]||s[O]||r;return n?c.a.createElement(p,a(a({ref:t},u),{},{components:n})):c.a.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=O;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,b[1]=a;for(var u=2;u<r;u++)b[u]=n[u];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},1795:function(e,t,n){"use strict";function l(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(c&&(c+=" "),c+=t);return c}},1796:function(e,t,n){"use strict";var l=n(0),c=n(1797);t.a=function(){var e=Object(l.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1797:function(e,t,n){"use strict";var l=n(0),c=Object(l.createContext)(void 0);t.a=c},1798:function(e,t,n){"use strict";var l=n(0),c=n.n(l),r=n(1796),b=n(1795),a=n(53),o=n.n(a),u=37,i=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,d=e.defaultValue,s=e.values,O=e.groupId,p=e.className,j=Object(r.a)(),m=j.tabGroupChoices,h=j.setTabGroupChoices,f=Object(l.useState)(d),g=f[0],y=f[1];if(null!=O){var v=m[O];null!=v&&v!==g&&s.some((function(e){return e.value===v}))&&y(v)}var x=function(e){y(e),null!=O&&h(O,e)},N=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},p)},s.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case i:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(l.cloneElement)(a.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1799:function(e,t,n){"use strict";var l=n(0),c=n.n(l);t.a=function(e){var t=e.children,n=e.hidden,l=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return O}));var l=n(3),c=n(7),r=(n(0),n(1794)),b=n(1798),a=n(1799),o=["components"],u={title:"RichText",sidebar_label:"RichText"},i={unversionedId:"components/base/rich-text",id:"components/base/rich-text",isDocsHomePage:!1,title:"RichText",description:"\u5bcc\u6587\u672c",source:"@site/docs/components/base/rich-text.md",slug:"/components/base/rich-text",permalink:"/taro/docs/next/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/base/rich-text.md",version:"current",sidebar_label:"RichText",sidebar:"components",previous:{title:"Progress",permalink:"/taro/docs/next/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/next/components/forms/button"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RichTextProps",id:"richtextprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]},{value:"Text",id:"text",children:[]},{value:"HTMLElement",id:"htmlelement",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b-1",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:d};function O(e){var t=e.components,n=Object(c.a)(e,o);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5bcc\u6587\u672c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<RichTextProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n"))),Object(r.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view class=\"components-page\">\n    <rich-text :nodes=\"nodes\"></rich-text>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n  data() {\n    return {\n      nodes: [{\n        name: 'div',\n        attrs: {\n          class: 'div_class',\n          style: 'line-height: 60px; color: red;'\n        },\n        children: [{\n          type: 'text',\n          text: 'Hello World!'\n        }]\n      }]\n    }\n  },\n  onReady () {\n    console.log('onReady')\n  }\n}\n<\/script>\n")))),Object(r.b)("h2",{id:"richtextprops"},"RichTextProps"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"nodes"),Object(r.b)("td",null,Object(r.b)("code",null,"Nodes")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8282\u70b9\u5217\u8868/ HTML String")),Object(r.b)("tr",null,Object(r.b)("td",null,"space"),Object(r.b)("td",null,Object(r.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"RichTextProps.space"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("h3",{id:"tspace"},"TSpace"),Object(r.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"ensp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"emsp"),Object(r.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"nbsp"),Object(r.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(r.b)("h3",{id:"text"},"Text"),Object(r.b)("p",null,"\u6587\u672c\u8282\u70b9"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",null,"\u8bf4\u660e"),Object(r.b)("th",null,"\u5907\u6ce8"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"type"),Object(r.b)("td",null,Object(r.b)("code",null,'"text"')),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",null,"\u6587\u672c\u7c7b\u578b"),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,"text"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'""')),Object(r.b)("td",null,"\u6587\u672c\u5b57\u7b26\u4e32"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301 entities"))))),Object(r.b)("h3",{id:"htmlelement"},"HTMLElement"),Object(r.b)("p",null,"\u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a\u5143\u7d20\u8282\u70b9\n\u5168\u5c40\u652f\u6301class\u548cstyle\u5c5e\u6027\uff0c\u4e0d\u652f\u6301 id \u5c5e\u6027\u3002"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"),Object(r.b)("th",null,"\u5907\u6ce8"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"type"),Object(r.b)("td",null,Object(r.b)("code",null,'"node"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"HTML \u7c7b\u578b"),Object(r.b)("td",null)),Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u6807\u7b7e\u540d"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684 HTML \u8282\u70b9"))),Object(r.b)("tr",null,Object(r.b)("td",null,"attrs"),Object(r.b)("td",null,Object(r.b)("code",null,"Object")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5c5e\u6027"),Object(r.b)("td",null,Object(r.b)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684\u5c5e\u6027\uff0c\u9075\u5faa Pascal \u547d\u540d\u6cd5"))),Object(r.b)("tr",null,Object(r.b)("td",null,"children"),Object(r.b)("td",null,Object(r.b)("code",null,"Nodes")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5b50\u8282\u70b9\u5217\u8868"),Object(r.b)("td",null,Object(r.b)("code",null,"\u7ed3\u6784\u548c nodes \u4e00\u81f4"))))),Object(r.b)("h2",{id:"nodes"},"Nodes"),Object(r.b)("p",null,"\u8282\u70b9\u7c7b\u578b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u73b0\u652f\u6301\u4e24\u79cd\u8282\u70b9\uff0c\u901a\u8fc7type\u6765\u533a\u5206\uff0c\u5206\u522b\u662f\u5143\u7d20\u8282\u70b9\u548c\u6587\u672c\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5728\u5bcc\u6587\u672c\u533a\u57df\u91cc\u663e\u793a\u7684HTML\u8282\u70b9 \u5143\u7d20\u8282\u70b9\uff1atype = node*")),Object(r.b)("h3",{id:"\u7c7b\u578b-1"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(Text | HTMLElement)[] | string\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"RichText"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);