"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,g=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={tags:["chaos","chaosengineering","opensource"]},i=void 0,l={unversionedId:"learn-in-public/Engineering/OpenSource/Rabbit Chaos API Roadmap",id:"learn-in-public/Engineering/OpenSource/Rabbit Chaos API Roadmap",title:"Rabbit Chaos API Roadmap",description:"- Rewrite Protocol Fault experiment",source:"@site/docs/learn-in-public/1. Engineering/OpenSource/Rabbit Chaos API Roadmap.md",sourceDirName:"learn-in-public/1. Engineering/OpenSource",slug:"/learn-in-public/Engineering/OpenSource/Rabbit Chaos API Roadmap",permalink:"/docs/learn-in-public/Engineering/OpenSource/Rabbit Chaos API Roadmap",draft:!1,tags:[{label:"chaos",permalink:"/docs/tags/chaos"},{label:"chaosengineering",permalink:"/docs/tags/chaosengineering"},{label:"opensource",permalink:"/docs/tags/opensource"}],version:"current",frontMatter:{tags:["chaos","chaosengineering","opensource"]},sidebar:"learn-in-public",previous:{title:"Brotli",permalink:"/docs/learn-in-public/Engineering/OpenSource/Brotli"},next:{title:"Binary protocol",permalink:"/docs/learn-in-public/Engineering/Operating Systems/Binary protocol"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rewrite Protocol Fault experiment",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Write proper handling for missed protocol frame"))),(0,a.kt)("li",{parentName:"ul"},"Implement Message Store Chaos",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IO Bandwidth exceed - slow writes/reads"),(0,a.kt)("li",{parentName:"ul"},"IO Fault - Message write errors."))),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"vhost")," filtering"),(0,a.kt)("li",{parentName:"ul"},"Implement ongoing experiments feature.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Experiments that run for a certain time"),(0,a.kt)("li",{parentName:"ul"},"Have API to list ongoing experiments"))),(0,a.kt)("li",{parentName:"ul"},"Support experiments for cluster mode")),(0,a.kt)("p",null,"Message Store Notes:\nOne way to do so is overriding behavior of queue persistency. We would need to override behavior in both ",(0,a.kt)("inlineCode",{parentName:"p"},"msg_store")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"classic_queue_store_v2")," since the persistency mechanism changes due to message sizes.\nThis all seems very hacky and error-prone. Maybe the easiest way is to chaos-api to become a interface for ",(0,a.kt)("strong",{parentName:"p"},"eBPF")," in this case.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc/blob/master/tools/filetop.py"},"https://github.com/iovisor/bcc/blob/master/tools/filetop.py"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iovisor/bcc?tab=readme-ov-file"},"https://github.com/iovisor/bcc?tab=readme-ov-file"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oskardrums/ebpf"},"https://github.com/oskardrums/ebpf")),(0,a.kt)("p",null,"kernel function might have changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"kernel_write")))}m.isMDXComponent=!0}}]);