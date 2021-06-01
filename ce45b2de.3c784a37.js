(window.webpackJsonp=window.webpackJsonp||[]).push([[1396],{1461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1773),a=n(1774),c=(n(0),n(1775)),o={title:"Taro.canIUse(String)",sidebar_label:"canIUse"},i={unversionedId:"apis/device/systeminfo/canIUse",id:"version-1.x/apis/device/systeminfo/canIUse",isDocsHomePage:!1,title:"Taro.canIUse(String)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.canIUse\u3002",source:"@site/versioned_docs/version-1.x/apis/device/systeminfo/canIUse.md",slug:"/apis/device/systeminfo/canIUse",permalink:"/taro/docs/1.x/apis/device/systeminfo/canIUse",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/systeminfo/canIUse.md",version:"1.x",sidebar_label:"canIUse",sidebar:"version-1.x/API",previous:{title:"Taro.vibrateShort(param)",permalink:"/taro/docs/1.x/apis/device/vibrate/vibrateShort"},next:{title:"Taro.getSystemInfo(OBJECT)",permalink:"/taro/docs/1.x/apis/device/systeminfo/getSystemInfo"}},s=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.canIUse")),"\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.canIUse('openBluetoothAdapter')\nTaro.canIUse('getSystemInfoSync.return.screenWidth')\nTaro.canIUse('getSystemInfo.success.screenWidth')\nTaro.canIUse('showToast.object.image')\nTaro.canIUse('onCompassChange.callback.direction')\nTaro.canIUse('request.object.method.GET')\nTaro.canIUse('live-player')\nTaro.canIUse('text.selectable')\nTaro.canIUse('button.open-type.contact')\n\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.canIUse"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}b.isMDXComponent=!0},1773:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1774:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1775:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,f=l["".concat(o,".").concat(d)]||l[d]||u[d]||c;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);