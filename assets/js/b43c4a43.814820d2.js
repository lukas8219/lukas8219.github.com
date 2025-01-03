"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,b=g["".concat(l,".").concat(u)]||g[u]||m[u]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[g]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",id:"learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",title:"JavaScript Garbage Collection",description:"jsgarbagecollection #memorymanagement #js #javascript",source:"@site/docs/learn-in-public/1. Engineering/NodeJS/JavaScript Garbage Collection.md",sourceDirName:"learn-in-public/1. Engineering/NodeJS",slug:"/learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",permalink:"/docs/learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",previous:{title:"Buffer",permalink:"/docs/learn-in-public/Engineering/NodeJS/Buffer"},next:{title:"NodeJS Profiling",permalink:"/docs/learn-in-public/Engineering/NodeJS/NodeJS Profiling"}},l={},p=[],s={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#garbagecollection #jsgarbagecollection #memorymanagement #js #javascript"),(0,a.kt)("p",null,"resources\n",(0,a.kt)("a",{parentName:"p",href:"https://mrale.ph/"},"https://mrale.ph/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection"},"https://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/"},"https://v8.dev/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a%5Chttps://nodejs.org/api/cli.html#--max-semi-space-sizesize-in-megabytes"},"https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a\\https://nodejs.org/api/cli.html#--max-semi-space-sizesize-in-megabytes"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/"},"https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/")))}m.isMDXComponent=!0}}]);