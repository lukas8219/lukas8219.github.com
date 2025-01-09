"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4710],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?t.createElement(f,a(a({ref:n},s),{},{components:r})):t.createElement(f,a({ref:n},s))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3793:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(87462),i=(r(67294),r(3905));const o={tags:["profiler","profiling","cpuprofiling","nodejs","node","javascript","systemengineering"]},a=void 0,l={unversionedId:"learn-in-public/Engineering/NodeJS/NodeJS Profiling",id:"learn-in-public/Engineering/NodeJS/NodeJS Profiling",title:"NodeJS Profiling",description:"You can enable NodeJS profiling by-demand just by sending kill -USR1 to the node process.",source:"@site/docs/learn-in-public/1. Engineering/NodeJS/NodeJS Profiling.md",sourceDirName:"learn-in-public/1. Engineering/NodeJS",slug:"/learn-in-public/Engineering/NodeJS/NodeJS Profiling",permalink:"/docs/learn-in-public/Engineering/NodeJS/NodeJS Profiling",draft:!1,tags:[{label:"profiler",permalink:"/docs/tags/profiler"},{label:"profiling",permalink:"/docs/tags/profiling"},{label:"cpuprofiling",permalink:"/docs/tags/cpuprofiling"},{label:"nodejs",permalink:"/docs/tags/nodejs"},{label:"node",permalink:"/docs/tags/node"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"systemengineering",permalink:"/docs/tags/systemengineering"}],version:"current",frontMatter:{tags:["profiler","profiling","cpuprofiling","nodejs","node","javascript","systemengineering"]},sidebar:"learn-in-public",previous:{title:"JavaScript Garbage Collection",permalink:"/docs/learn-in-public/Engineering/NodeJS/JavaScript Garbage Collection"},next:{title:"Cancellable Function",permalink:"/docs/learn-in-public/Engineering/NodeJS/leetcode/Cancellable Function"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can enable NodeJS profiling by-demand just by sending ",(0,i.kt)("inlineCode",{parentName:"p"},"kill -USR1")," to the node process."),(0,i.kt)("p",null,"Via Chrome Canary, you can attach to the node process and run profiler to debug applications"),(0,i.kt)("p",null,"How can I disable it?"))}d.isMDXComponent=!0}}]);