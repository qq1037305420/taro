(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1794:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,O=d["".concat(a,".").concat(s)]||d[s]||p[s]||l;return n?c.a.createElement(O,o(o({ref:t},i),{},{components:n})):c.a.createElement(O,o({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var i=2;i<l;i++)a[i]=n[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},471:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),c=n(7),l=(n(0),n(1794)),a=["components"],o={title:"Taro.onLocalServiceFound(callback)",sidebar_label:"onLocalServiceFound"},b={unversionedId:"apis/network/mdns/onLocalServiceFound",id:"version-2.x/apis/network/mdns/onLocalServiceFound",isDocsHomePage:!1,title:"Taro.onLocalServiceFound(callback)",description:"\u76d1\u542c mDNS \u670d\u52a1\u53d1\u73b0\u7684\u4e8b\u4ef6",source:"@site/versioned_docs/version-2.x/apis/network/mdns/onLocalServiceFound.md",slug:"/apis/network/mdns/onLocalServiceFound",permalink:"/taro/docs/2.x/apis/network/mdns/onLocalServiceFound",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/mdns/onLocalServiceFound.md",version:"2.x",sidebar_label:"onLocalServiceFound",sidebar:"version-2.x/API",previous:{title:"Taro.onLocalServiceLost(callback)",permalink:"/taro/docs/2.x/apis/network/mdns/onLocalServiceLost"},next:{title:"Taro.onLocalServiceDiscoveryStop(callback)",permalink:"/taro/docs/2.x/apis/network/mdns/onLocalServiceDiscoveryStop"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function d(e){var t=e.components,n=Object(c.a)(e,a);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u76d1\u542c mDNS \u670d\u52a1\u53d1\u73b0\u7684\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"mDNS \u670d\u52a1\u53d1\u73b0\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"ip"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u670d\u52a1\u7684 ip \u5730\u5740")),Object(l.b)("tr",null,Object(l.b)("td",null,"port"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u670d\u52a1\u7684\u7aef\u53e3")),Object(l.b)("tr",null,Object(l.b)("td",null,"serviceName"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u670d\u52a1\u7684\u540d\u79f0")),Object(l.b)("tr",null,Object(l.b)("td",null,"serviceType"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u670d\u52a1\u7684\u7c7b\u578b")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.onLocalServiceFound"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);