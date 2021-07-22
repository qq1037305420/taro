(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1794:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},846:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(1794)),c=["components"],i={title:"LivePusher",sidebar_label:"LivePusher"},p={unversionedId:"components/media/live-pusher",id:"version-1.x/components/media/live-pusher",isDocsHomePage:!1,title:"LivePusher",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236",source:"@site/versioned_docs/version-1.x/components/media/live-pusher.md",slug:"/components/media/live-pusher",permalink:"/taro/docs/1.x/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/media/live-pusher.md",version:"1.x",sidebar_label:"LivePusher"},u=[],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236"},"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"ReactNative"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"},"x"),Object(a.b)("td",{parentName:"tr",align:"center"},"x")))),Object(a.b)("p",null,"\u5c0f\u7a0b\u5e8f\u5168\u90e8\u652f\u6301\uff0c\u5c5e\u6027\u53c2\u8003",Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"},"live-pusher"),"\u3002\u5c5e\u6027\u503c\u8bf7\u6539\u5199\u4e3a\u9a7c\u5cf0\u5f0f\u547d\u540d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 LivePusher \u7ec4\u4ef6\nimport { LivePusher } from '@tarojs/components'\n\nclass App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n")))}s.isMDXComponent=!0}}]);