(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1794:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return s}));var l=n(0),b=n.n(l);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,b=function(t,e){if(null==t)return{};var n,l,b={},c=Object.keys(t);for(l=0;l<c.length;l++)n=c[l],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)n=c[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var O=b.a.createContext({}),j=function(t){var e=b.a.useContext(O),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=j(t.components);return b.a.createElement(O.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},i=b.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,c=t.originalType,r=t.parentName,O=u(t,["components","mdxType","originalType","parentName"]),d=j(n),i=l,s=d["".concat(r,".").concat(i)]||d[i]||o[i]||c;return n?b.a.createElement(s,a(a({ref:e},O),{},{components:n})):b.a.createElement(s,a({ref:e},O))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=n.length,r=new Array(c);r[0]=i;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:l,r[1]=a;for(var O=2;O<c;O++)r[O]=n[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},674:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return O})),n.d(e,"default",(function(){return d}));var l=n(3),b=n(7),c=(n(0),n(1794)),r=["components"],a={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},u={unversionedId:"apis/canvas/canvasToTempFilePath",id:"apis/canvas/canvasToTempFilePath",isDocsHomePage:!1,title:"Taro.canvasToTempFilePath(option, component)",description:"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 draw() \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002",source:"@site/docs/apis/canvas/canvasToTempFilePath.md",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro/docs/next/apis/canvas/canvasToTempFilePath",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/canvasToTempFilePath.md",version:"current",sidebar_label:"canvasToTempFilePath",sidebar:"API",previous:{title:"Taro.createCanvasContext(canvasId, component)",permalink:"/taro/docs/next/apis/canvas/createCanvasContext"},next:{title:"Taro.canvasPutImageData(option, component)",permalink:"/taro/docs/next/apis/canvas/canvasPutImageData"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"fileType",id:"filetype",children:[]},{value:"CanvasProps",id:"canvasprops",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],j={rightToc:O};function d(t){var e=t.components,n=Object(b.a)(t,r);return Object(c.b)("wrapper",Object(l.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"draw()")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Bug & Tip\uff1a")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"tip"),": \u5728 ",Object(c.b)("inlineCode",{parentName:"li"},"draw")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: Record<string, any>) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"canvas"),Object(c.b)("td",null,Object(c.b)("code",null,"CanvasProps")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas"),' \u7ec4\u4ef6\u5b9e\u4f8b \uff08canvas type="2d" \u65f6\u4f7f\u7528\u8be5\u5c5e\u6027\uff09\u3002')),Object(c.b)("tr",null,Object(c.b)("td",null,"canvasId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6\u7684 canvas-id")),Object(c.b)("tr",null,Object(c.b)("td",null,"quality"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u7684\u8d28\u91cf\uff0c\u76ee\u524d\u4ec5\u5bf9 jpg \u6709\u6548\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0, 1]\uff0c\u4e0d\u5728\u8303\u56f4\u5185\u65f6\u5f53\u4f5c 1.0 \u5904\u7406\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"destHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"destWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"fileType"),Object(c.b)("td",null,Object(c.b)("code",null,'"jpg" | "png"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"png"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u76ee\u6807\u6587\u4ef6\u7684\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"x"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),Object(c.b)("tr",null,Object(c.b)("td",null,"y"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u751f\u6210\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"filetype"},"fileType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"jpg"),Object(c.b)("td",null,"jpg \u56fe\u7247")),Object(c.b)("tr",null,Object(c.b)("td",null,"png"),Object(c.b)("td",null,"png \u56fe\u7247")))),Object(c.b)("h3",{id:"canvasprops"},"CanvasProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),Object(c.b)("tr",null,Object(c.b)("td",null,"canvasId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null,"disableScroll"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchStart"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchMove"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchEnd"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTouchCancel"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),Object(c.b)("tr",null,Object(c.b)("td",null,"onLongTap"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"onError"),Object(c.b)("td",null,Object(c.b)("code",null,"CommonEventFunction<onErrorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = ","{errMsg: 'something wrong'}"," ")))),Object(c.b)("h4",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string"))))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Taro.canvasToTempFilePath"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);