(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1794:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||j[d]||c;return r?n.a.createElement(m,b(b({ref:t},l),{},{components:r})):n.a.createElement(m,b({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},975:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(1794)),o=["components"],b={slug:"2020-04-27-taro-build-jd",title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png"},p={permalink:"/taro/blog/2020-04-27-taro-build-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-04-27-taro-build-jd.md",source:"@site/blog/2020-04-27-taro-build-jd.md",description:"\u8fd1\u4e24\u5e74\u6765\u5c0f\u7a0b\u5e8f\u9010\u6e10\u6210\u4e3a\u4e92\u8054\u7f51\u7684\u4e00\u4e2a\u884c\u4e1a\u98ce\u53e3\uff0c\u4e00\u76f4\u5907\u53d7\u4e1a\u754c\u5173\u6ce8\uff0c\u5404\u5927\u5382\u4e5f\u63a5\u8e35\u63a8\u51fa\u4e86\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u3002\u8fd1\u65e5\u4eac\u4e1c\u4e5f\u63a8\u51fa\u4e86\u5c0f\u7a0b\u5e8f\uff1a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3002Taro \u4f5c\u4e3a\u4e00\u6b3e\u4e13\u6ce8\u4e8e\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u7684\u6846\u67b6\uff0c\u7b2c\u4e00\u65f6\u95f4\u5bf9\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u4e86\u9002\u914d\u3002\u63a5\u4e0b\u6765\u5c31\u8ddf\u7740\u5c0f\u7f16\u4e00\u8d77\u4e86\u89e3\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5427\u3002",date:"2020-04-27T00:00:00.000Z",tags:[],title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",readingTime:.66,truncated:!0,prevItem:{title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",permalink:"/taro/blog/2020-05-26-taro-3-rc"},nextItem:{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",permalink:"/taro/blog/2020-04-27-taro-vs-jd"}},l=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[{value:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",id:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",children:[]},{value:"Taro",id:"taro",children:[]}]},{value:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",id:"\u4f7f\u7528-taro-\u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",children:[{value:"\u5165\u9a7b\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",id:"\u5165\u9a7b\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",children:[]},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[]}]},{value:"Taro \u5df2\u5b8c\u5168\u9002\u914d\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",id:"taro-\u5df2\u5b8c\u5168\u9002\u914d\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",children:[{value:"\u793a\u4f8b\u9879\u76ee\u8f6c\u6362\u6548\u679c\u56fe",id:"\u793a\u4f8b\u9879\u76ee\u8f6c\u6362\u6548\u679c\u56fe",children:[]}]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[]},{value:"\u671f\u5f85\u5927\u5bb6\u53c2\u4e0e\u5171\u5efa",id:"\u671f\u5f85\u5927\u5bb6\u53c2\u4e0e\u5171\u5efa",children:[]},{value:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",id:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",children:[]}],i={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,o);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://img20.360buyimg.com/ling/jfs/t1/117964/14/2118/145903/5e9eee0aE8897b3dd/bd435e6161779ad1.png",alt:null})),Object(c.b)("p",null,"\u8fd1\u4e24\u5e74\u6765\u5c0f\u7a0b\u5e8f\u9010\u6e10\u6210\u4e3a\u4e92\u8054\u7f51\u7684\u4e00\u4e2a\u884c\u4e1a\u98ce\u53e3\uff0c\u4e00\u76f4\u5907\u53d7\u4e1a\u754c\u5173\u6ce8\uff0c\u5404\u5927\u5382\u4e5f\u63a5\u8e35\u63a8\u51fa\u4e86\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u3002\u8fd1\u65e5\u4eac\u4e1c\u4e5f\u63a8\u51fa\u4e86\u5c0f\u7a0b\u5e8f\uff1a",Object(c.b)("a",{parentName:"p",href:"https://mp.jd.com/?entrance=taro"},Object(c.b)("strong",{parentName:"a"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f")),"\u3002Taro \u4f5c\u4e3a\u4e00\u6b3e\u4e13\u6ce8\u4e8e\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u7684\u6846\u67b6\uff0c\u7b2c\u4e00\u65f6\u95f4\u5bf9\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u4e86\u9002\u914d\u3002\u63a5\u4e0b\u6765\u5c31\u8ddf\u7740\u5c0f\u7f16\u4e00\u8d77\u4e86\u89e3\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5427\u3002"),Object(c.b)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(c.b)("h3",{id:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://mp.jd.com/?entrance=taro"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5e73\u53f0"),"\u662f\u4eac\u4e1c\u81ea\u7814\u6280\u672f\uff08\u80fd\u529b\uff09\u5f00\u653e\u5e73\u53f0\uff0c\u5e73\u53f0\u96c6\u6210\u4eac\u4e1c\u7279\u8272\u529f\u80fd\uff0c\u4e32\u8054\u5546\u5bb6\u548c\u7528\u6237\u3002\u4e3a\u7528\u6237\u63d0\u4f9b\u5ef6\u5c55\u670d\u52a1\uff0c\u7ed9\u5546\u5bb6\u5e26\u6765\u65b0\u673a\u9047\u3002\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u4e0d\u4ec5\u652f\u6301\u5b58\u91cf\u81ea\u8425\u3001POP\u5546\u5bb6\u81ea\u52a8\u5f00\u901a\uff0c\u8fd8\u652f\u6301\u65b0\u578b\u7684\u975e\u7535\u5546\u9886\u57df\u5546\u5bb6\u53c2\u4e0e\u5c0f\u7a0b\u5e8f\u751f\u6001\u3002  "),Object(c.b)("p",null,"\u52a0\u5165\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5f00\u653e\u5e73\u53f0\u7684\u5546\u5bb6\uff0c\u53ef\u4ee5\u5229\u7528\u4eac\u4e1c\u5e73\u53f0\u5b8c\u6574\u7684\u8425\u9500\u3001\u4ea4\u6613\u3001\u652f\u4ed8\u3001\u4f1a\u5458\u3001\u7269\u6d41\u7b49\u80fd\u529b\uff0c\u66f4\u52a0\u4fbf\u6377\u5730\u6784\u5efa\u8d77\u81ea\u5df1\u7684\u7279\u8272\u670d\u52a1\u573a\u666f\u3002\u52a9\u529b\u5546\u5bb6\u5b9e\u73b0\u751f\u6001\u573a\u666f\u4e0a\u7684\u201c\u8dc3\u8fc1\u201d\uff0c\u5feb\u901f\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u670d\u52a1\u4f53\u9a8c\u3002"),Object(c.b)("p",null,"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u53ea\u9700\u4e00\u6b21\u5f00\u53d1\u5373\u53ef\u8fd0\u884c\u5728\u4eac\u4e1c APP\u3001\u4eac\u4e1c\u91d1\u878d APP\u3001\u4eac\u9ea6 APP \u4e09\u7aef\u3002\u4eac\u4e1c APP\u3001\u4eac\u4e1c\u91d1\u878d APP \u4f1a\u5f00\u653e\u7279\u5b9a\u7684\u80fd\u529b\uff0c\u5bf9\u4f18\u8d28\u5c0f\u7a0b\u5e8f\u8fd8\u4f1a\u5f00\u653e\u591a\u4e2a\u9ad8\u6d41\u91cf\u5165\u53e3\uff0c\u5305\u542b\u626b\u7801\u3001\u641c\u7d22\u3001\u6d88\u606f\u7b49\u591a\u79cd\u65b9\u5f0f\u89e6\u8fbe\u3002\u800c\u4eac\u9ea6 APP \u5c0f\u7a0b\u5e8f\u4e3b\u8981\u7528\u4e8e\u5546\u5bb6\u5de5\u5177\u63d2\u4ef6\u7684\u5f00\u53d1\u5b9a\u5236\u3002"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://storage.jd.com/cjj-pub-images/jdapp_3apps.png",alt:"jdapp_3apps"})),Object(c.b)("h3",{id:"taro"},"Taro"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://taro.jd.com/"},"Taro")," \u662f\u51f9\u51f8\u5b9e\u9a8c\u5ba4\u63a8\u51fa\u7684\u4e00\u5957\u9075\u5faa React \u8bed\u6cd5\u89c4\u8303\u7684\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\uff0c\u4e5f\u662f\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u63a8\u8350\u7684\u5f00\u53d1\u6846\u67b6\u3002"),Object(c.b)("p",null,"\u4f7f\u7528 Taro \u5f00\u53d1\u4e0d\u4f46\u80fd\u66f4\u89c4\u8303\u3001\u66f4\u6709\u6548\u7387\u5730\u7f16\u7801\uff0c \u7545\u4eab React / Vue \u751f\u6001\u7684\u5404\u79cd\u5de5\u5177\u3002\u66f4\u91cd\u8981\u7684\u662f\u53ea\u9700\u7f16\u5199\u4e00\u4efd\u4ee3\u7801\uff0c\u5373\u53ef\u8fd0\u884c\u5728\u5404\u79cd\u5e73\u53f0\uff1a\u4eac\u4e1c/\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/\u5b57\u8282\u8df3\u52a8/QQ\u5c0f\u7a0b\u5e8f\u3001\u5feb\u5e94\u7528\u3001H5\u3001React-Native \u7b49\u3002"),Object(c.b)("p",null,"\u5982\u4eca Taro \u6b63\u88ab\u5e7f\u6cdb\u7528\u4e8e\u4eac\u4e1c\u5404\u5927\u4e1a\u52a1\uff0c\u4f8b\u5982\u4eac\u4e1c\u8d2d\u7269\uff08\u5fae\u4fe1\uff09\u3001\u4eac\u559c\uff08\u5fae\u4fe1\u3001H5\u3001RN\uff09\u3001\u4eac\u4e1c\u597d\u7269\u8857\uff08\u5fae\u4fe1\u3001\u767e\u5ea6\u3001\u5b57\u8282\u8df3\u52a8\uff09\u3001\u4eac\u4e1c\u5230\u5bb6\uff08\u5fae\u4fe1\u3001H5\uff09\u7b49\uff0c\u5728\u4e1a\u754c\u4e5f\u88ab\u5404\u5927\u578b\u4e1a\u52a1\u5e7f\u6cdb\u5e94\u7528\uff0c\u5982\uff1a58 \u540c\u57ce\u3001\u559c\u8336\u3001\u817e\u8baf\u5410\u4e2a\u69fd\u793e\u533a\u7b49\u7b49\u3002"),Object(c.b)("h2",{id:"\u4f7f\u7528-taro-\u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"},"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("h3",{id:"\u5165\u9a7b\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"},"\u5165\u9a7b\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"\u8fdb\u5165",Object(c.b)("a",{parentName:"p",href:"https://mp.jd.com/?entrance=taro"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5b98\u7f51"),"\uff0c\u63d0\u4ea4\u76f8\u5173\u4fe1\u606f\u540e\u5b8c\u6210\u5165\u9a7b\u3002"),Object(c.b)("h3",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),Object(c.b)("p",null,"1.\u5b89\u88c5 Taro \u7684 CLI \u5de5\u5177\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g @tarojs/cli\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5df2\u5b89\u88c5 Taro \u7684\u540c\u5b66\u8bf7\u6ce8\u610f\u66f4\u65b0 Taro \u7248\u672c\uff0cTaro \u81ea 1.3.20 \u540e\u652f\u6301\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3002")),Object(c.b)("p",null,"2.\u4f7f\u7528 CLI \u521b\u5efa\u9879\u76ee\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"taro init [projectName]\n")),Object(c.b)("p",null,"3.\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u4f7f\u7528 CLI \u7f16\u8bd1\u9879\u76ee\uff0c\u6839\u636e ",Object(c.b)("a",{parentName:"p",href:"https://docs.taro.zone/docs/README"},"Taro \u6587\u6863")," \u8fdb\u884c\u5f00\u53d1\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"taro build --type jd [--watch]\n")),Object(c.b)("p",null,"4.\u8c03\u8bd5"),Object(c.b)("p",null,"\u7533\u8bf7\u5165\u9a7b\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u6210\u529f\u540e\uff0c\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u4f1a\u7ed9\u5f00\u53d1\u8005\u53d1\u653e\u9080\u8bf7\u7801\uff0c\u540c\u65f6\u63d0\u4f9b\u5f00\u53d1\u8005\u5de5\u5177\u4e0b\u8f7d\uff0c\u4e0b\u8f7d\u540e\u53ef\u4f7f\u7528\u5f00\u53d1\u8005\u5de5\u5177\u8fdb\u884c\u8c03\u8bd5\u3002"),Object(c.b)("h2",{id:"taro-\u5df2\u5b8c\u5168\u9002\u914d\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"},"Taro \u5df2\u5b8c\u5168\u9002\u914d\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,"Taro \u5df2 100% \u5b8c\u6210\u4e86\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7684\u5de5\u4f5c\uff0c\u5168\u9762\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7684\u5404\u79cd\u7279\u6027\u3002"),Object(c.b)("p",null,"\u5f00\u53d1\u4e2d\u5982\u9047\u5230\u4efb\u4f55\u95ee\u9898\u6216\u56f0\u96be\uff0c\u6b22\u8fce\u5728 Github Issues\u3001Taro \u793e\u533a\u8fdb\u884c\u53cd\u9988\uff0c\u6216\u8054\u7cfb ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"mailto:taro@jd.com"},"taro@jd.com")),"\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u7ed9\u4e88\u7b54\u590d\u4e0e\u652f\u6301\u3002"),Object(c.b)("h3",{id:"\u793a\u4f8b\u9879\u76ee\u8f6c\u6362\u6548\u679c\u56fe"},"\u793a\u4f8b\u9879\u76ee\u8f6c\u6362\u6548\u679c\u56fe"),Object(c.b)("p",null,"\u5c0f\u7f16\u5c1d\u8bd5\u628a ",Object(c.b)("a",{parentName:"p",href:"https://github.com/NervJS/taro"},"Taro Github")," \u4e0a\u5b66\u4e60\u8d44\u6e90\u4e2d\u7684\u4f18\u79c0\u5f00\u6e90\u9879\u76ee\uff1a",Object(c.b)("a",{parentName:"p",href:"https://github.com/qit-team/taro-yanxuan"},"\u4eff\u4e25\u9009\u591a\u7aef\u9879\u76ee")," \u5206\u522b\u8f6c\u6362\u4e3a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef\u548c\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7aef\uff0c\u5bf9\u6bd4\u53ef\u89c1\u8f6c\u6362\u975e\u5e38\u5b8c\u7f8e\uff0c\u8868\u73b0\u6548\u679c\u57fa\u672c\u4e00\u81f4\u3002"),Object(c.b)("h5",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7aef"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://storage.jd.com/cjj-pub-images/jdapp_yanxuan_wx_demo.jpg",alt:"yanxuan_wx"})),Object(c.b)("h5",{id:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7aef"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7aef"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"http://storage.jd.com/cjj-pub-images/jdapp_yanxuan_jd_demo.jpg",alt:"yanxuan_jd"})),Object(c.b)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),Object(c.b)("p",null,"Taro \u56e2\u961f\u5bf9\u4e8e\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u662f\u5145\u6ee1\u671f\u5f85\u548c\u4fe1\u5fc3\u7684\u3002\u4e3a\u6b64\u6211\u4eec\u8ba8\u8bba\u5e76\u89c4\u5212\u4e86\u4e00\u7cfb\u5217\u5de5\u4f5c\uff0c\u7531\u5e95\u5c42\u6846\u67b6\u9002\u914d\uff0c\u5230\u8f85\u52a9\u4e1a\u52a1\u843d\u5730\u3001\u62d3\u5c55\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u751f\u6001\uff0c\u518d\u5230\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7684",Object(c.b)("a",{parentName:"p",href:"https://ling.jd.com/atom/cms/pc/06599/"},"\u53ef\u89c6\u5316\u81ea\u52a9\u642d\u5efa"),"\u7b49\uff0c\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u7269\u6599\u5e02\u573a\u7684\u90e8\u5206\u7269\u6599\u9002\u914d\u9a8c\u8bc1\u5e76\u6807\u8bb0\u652f\u6301\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u3001\u4f53\u9a8c\u53ef\u89c6\u5316\u81ea\u52a9\u642d\u5efa\u8bf7\u70b9\u51fb",Object(c.b)("a",{parentName:"p",href:"https://ling.jd.com/atom/cms/pc/06599/"},"\u8fd9\u4e2a\u94fe\u63a5"),"\u6309\u7167\u6307\u5f15\u7533\u8bf7\u4f53\u9a8c\u6743\u9650\u3002"),Object(c.b)("h2",{id:"\u671f\u5f85\u5927\u5bb6\u53c2\u4e0e\u5171\u5efa"},"\u671f\u5f85\u5927\u5bb6\u53c2\u4e0e\u5171\u5efa"),Object(c.b)("p",null,"\u6709\u4efb\u4f55\u610f\u89c1\u5efa\u8bae\u3001\u4e1a\u52a1\u652f\u6301\u3001\u5408\u4f5c\u8bc9\u6c42\u7684\uff0c\u5c3d\u8bf7\u53d1\u9001\u90ae\u4ef6\u5230\xa0",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",{parentName:"strong",href:"mailto:taro@jd.com"},"taro@jd.com")),"\uff0c\u6211\u4eec\u4f1a\u7b2c\u4e00\u65f6\u95f4\u56de\u590d\u3002"),Object(c.b)("p",null,"\u5fc3\u52a8\u4e0d\u5982\u884c\u52a8\uff0c\u73b0\u5728\u5c31\u5f00\u59cb\u4f7f\u7528 Taro \u5f00\u53d1\u4f60\u7684",Object(c.b)("a",{parentName:"p",href:"https://mp.jd.com/?entrance=taro"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\u5427\uff5e"),Object(c.b)("h2",{id:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://taro-club.jd.com/topic/1426/%E4%BA%AC%E4%B8%9C%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B9%B3%E5%8F%B0-%E4%BB%96%E6%9D%A5%E4%BA%86"},"\u300a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u5e73\u53f0\uff0c\u4ed6\u6765\u4e86\u300b")))}u.isMDXComponent=!0}}]);