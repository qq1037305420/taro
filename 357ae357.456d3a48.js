(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1794:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(1794)),c=["components"],i={title:"RenderingContext",sidebar_label:"RenderingContext"},p={unversionedId:"apis/canvas/RenderingContext",id:"apis/canvas/RenderingContext",isDocsHomePage:!1,title:"RenderingContext",description:"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002",source:"@site/docs/apis/canvas/RenderingContext.md",slug:"/apis/canvas/RenderingContext",permalink:"/taro/docs/next/apis/canvas/RenderingContext",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/RenderingContext.md",version:"current",sidebar_label:"RenderingContext",sidebar:"API",previous:{title:"OffscreenCanvas",permalink:"/taro/docs/next/apis/canvas/OffscreenCanvas"},next:{title:"Taro.saveFile(option)",permalink:"/taro/docs/next/apis/files/saveFile"}},l=[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('2d') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 CanvasRenderingContext2D \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",Object(o.b)("a",{parentName:"li",href:"https://www.w3.org/TR/2dcontext/"},"HTML Canvas 2D Context")," \u5b9a\u4e49\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"),Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('webgl') \u6216 OffscreenCanvas.getContext('webgl') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 WebGLRenderingContext \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",Object(o.b)("a",{parentName:"li",href:"https://www.khronos.org/registry/webgl/specs/latest/1.0/"},"WebGL 1.0")," \u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u5e38\u91cf\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"RenderingContext"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);