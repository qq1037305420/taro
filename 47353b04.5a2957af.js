(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{1794:function(e,r,t){"use strict";t.d(r,"a",(function(){return v})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},v=function(e){var r=l(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=l(t),d=n,b=v["".concat(a,".").concat(d)]||v[d]||u[d]||c;return t?i.a.createElement(b,o(o({ref:r},p),{},{components:t})):i.a.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<c;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},553:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return v}));var n=t(3),i=t(7),c=(t(0),t(1794)),a=["components"],o={title:"Taro.getBLEDeviceServices(OBJECT)",sidebar_label:"getBLEDeviceServices"},s={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"version-1.x/apis/device/ble/getBLEDeviceServices",isDocsHomePage:!1,title:"Taro.getBLEDeviceServices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getBLEDeviceServices\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",version:"1.x",sidebar_label:"getBLEDeviceServices",sidebar:"version-1.x/API",previous:{title:"Taro.getBLEDeviceCharacteristics(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"Taro.notifyBLECharacteristicValueChange(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/notifyBLECharacteristicValueChange"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],l={rightToc:p};function v(e){var r=e.components,t=Object(i.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBLEDeviceServices.html"},Object(c.b)("inlineCode",{parentName:"a"},"wx.getBLEDeviceServices")),"\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.getBLEDeviceServices(params).then(...)\n")))}v.isMDXComponent=!0}}]);