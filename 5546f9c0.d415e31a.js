(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{1794:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),g=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=g(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=g(n),d=r,s=u["".concat(o,".").concat(d)]||u[d]||p[d]||l;return n?a.a.createElement(s,b(b({ref:t},i),{},{components:n})):a.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},640:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(1794)),o=["components"],b={title:"Taro.getLogManager(res)",sidebar_label:"getLogManager"},c={unversionedId:"apis/base/debug/getLogManager",id:"version-2.x/apis/base/debug/getLogManager",isDocsHomePage:!1,title:"Taro.getLogManager(res)",description:"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.x/apis/base/debug/getLogManager.md",slug:"/apis/base/debug/getLogManager",permalink:"/taro/docs/2.x/apis/base/debug/getLogManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/debug/getLogManager.md",version:"2.x",sidebar_label:"getLogManager",sidebar:"version-2.x/API",previous:{title:"Taro.getRealtimeLogManager()",permalink:"/taro/docs/2.x/apis/base/debug/getRealtimeLogManager"},next:{title:"LogManager",permalink:"/taro/docs/2.x/apis/base/debug/LogManager"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"level",id:"level",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],g={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(l.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u83b7\u53d6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(res?: Option) => LogManager\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"level"),Object(l.b)("td",null,Object(l.b)("code",null,"0 | 1")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426")))),Object(l.b)("h3",{id:"level"},"level"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"0"),Object(l.b)("td",null,"\u8868\u793a\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")),Object(l.b)("tr",null,Object(l.b)("td",null,"1"),Object(l.b)("td",null,"\u8868\u793a\u4e0d\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"const logger = Taro.getLogManager({level: 1})\n\nlogger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.getLogManager"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);