"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),b=a,d=c["".concat(u,".").concat(b)]||c[b]||m[b]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"learn-in-public/Engineering/blogpost/LumaTopics",id:"learn-in-public/Engineering/blogpost/LumaTopics",title:"LumaTopics",description:"DelayedJobs",source:"@site/docs/learn-in-public/1. Engineering/blogpost/LumaTopics.md",sourceDirName:"learn-in-public/1. Engineering/blogpost",slug:"/learn-in-public/Engineering/blogpost/LumaTopics",permalink:"/docs/learn-in-public/Engineering/blogpost/LumaTopics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",previous:{title:"RabbitMQ - Federation Plugin",permalink:"/docs/learn-in-public/Engineering/RabbitMQ/RabbitMQ - Federation Plugin"},next:{title:"Not Jr,  Not Sr - A Software Engineer",permalink:"/docs/learn-in-public/Engineering/blogpost/Not Jr,  Not Sr - A Software Engineer"}},u={},p=[],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DelayedJobs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast access",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Our throughput can be huge"))),(0,a.kt)("li",{parentName:"ul"},"Disk vs Memory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Some jobs may be postponed for months, some may be for milli seconds. Which storage is the best?"))),(0,a.kt)("li",{parentName:"ul"},"RPC vs lib bump",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The need to bump all services VS doing as RPC"))),(0,a.kt)("li",{parentName:"ul"},"Poor memory allocation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Entire objects into memory VS streaming/pulling"))),(0,a.kt)("li",{parentName:"ul"},"pre and post resource usage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sudden spikes of 40GB - constant 7-8GB"))),(0,a.kt)("li",{parentName:"ul"},"lack of h scalability",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"we cannot scale bc it could potentially process more than necessary"))),(0,a.kt)("li",{parentName:"ul"},"lack of reliability",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"process all jobs until there's no more left - up until the date range")))),(0,a.kt)("p",null,"WS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redis PubSub and the future"),(0,a.kt)("li",{parentName:"ul"},"Limitations"),(0,a.kt)("li",{parentName:"ul"},"Our modeling and serverFramework"),(0,a.kt)("li",{parentName:"ul"},"Observability",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"how did we solve the observability?"))),(0,a.kt)("li",{parentName:"ul"},"LumaPong"),(0,a.kt)("li",{parentName:"ul"},"prefetch"),(0,a.kt)("li",{parentName:"ul"},"Distributed DS and throtting access to Redis IO"),(0,a.kt)("li",{parentName:"ul"},"network specialized Redis vs Redis PubSub"),(0,a.kt)("li",{parentName:"ul"},"issue's we've tackled",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"customers were complaining our platform was not realtime and required page refreshes for data to appear.")))),(0,a.kt)("p",null,"PubSub refactor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simple instance - connection by module VS N instances - connection by factory"),(0,a.kt)("li",{parentName:"ul"},"Async vs Callback adaptar"),(0,a.kt)("li",{parentName:"ul"},"100% backwards compatibility - ",(0,a.kt)("inlineCode",{parentName:"li"},"new Queue")," adjustment to call Factory")))}m.isMDXComponent=!0}}]);