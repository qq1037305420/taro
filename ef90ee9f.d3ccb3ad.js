(window.webpackJsonp=window.webpackJsonp||[]).push([[1598],{1663:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1773),a=n(1774),c=(n(0),n(1775)),o=n(1779),i=n(1780),b={title:"CoverImage",sidebar_label:"CoverImage"},l={unversionedId:"components/viewContainer/cover-image",id:"version-3.x/components/viewContainer/cover-image",isDocsHomePage:!1,title:"CoverImage",description:"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/cover-image.md",slug:"/components/viewContainer/cover-image",permalink:"/taro/docs/components/viewContainer/cover-image",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/cover-image.md",version:"3.x",sidebar_label:"CoverImage",sidebar:"version-3.x/components",previous:{title:"CoverView",permalink:"/taro/docs/components/viewContainer/cover-view"},next:{title:"matchMedia",permalink:"/taro/docs/components/viewContainer/match-media"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CoverImageProps",id:"coverimageprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<CoverImageProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(o.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"// js\nclass App extends Components {\n  render () {\n    return (\n      <View className='container'>\n      <Video id='myVideo' src='src'>\n        <CoverView className='controls'>\n          <CoverView className='play' onClick='play'>\n            <CoverImage className='img' src='src' />\n          </CoverView>\n        </CoverView>\n      </Video>\n    )\n  }\n}\n// css\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n"))),Object(c.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>\n    </video>\n    <cover-view class='controls'>\n      <cover-view class='play' @tap='play'>\n        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />\n      </cover-view>\n    </cover-view>\n  </view>\n</template>\n\n<style>\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n</style>\n\n")))),Object(c.b)("h2",{id:"coverimageprops"},"CoverImageProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u56fe\u6807\u8def\u5f84\uff0c\u652f\u6301\u4e34\u65f6\u8def\u5f84\u3001\u7f51\u7edc\u5730\u5740\u3001\u4e91\u6587\u4ef6ID\u3002\u6682\u4e0d\u652f\u6301base64\u683c\u5f0f\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"onLoad"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u52a0\u8f7d\u6210\u529f\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onError"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u89e6\u53d1")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.src"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onLoad"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onError"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImage"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},1773:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1774:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1775:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1776:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1777:function(e,t,n){"use strict";var r=n(0),a=n(1778);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1778:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1779:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1777),o=n(1776),i=n(51),b=n.n(i),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,O=Object(c.a)(),j=O.tabGroupChoices,v=O.setTabGroupChoices,f=Object(r.useState)(u),g=f[0],y=f[1];if(null!=m){var h=j[m];null!=h&&h!==g&&p.some((function(e){return e.value===h}))&&y(h)}var C=function(e){y(e),null!=m&&v(m,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",b.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},n)}))),t?Object(r.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1780:function(e,t,n){"use strict";var r=n(1773),a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);