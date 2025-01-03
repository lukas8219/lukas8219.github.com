"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5855],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4992:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const i={},a=void 0,l={unversionedId:"learn-in-public/Engineering/AMQP/AMQP protocol - Model and Protocol",id:"learn-in-public/Engineering/AMQP/AMQP protocol - Model and Protocol",title:"AMQP protocol - Model and Protocol",description:"amqpmodel",source:"@site/docs/learn-in-public/1. Engineering/AMQP/AMQP protocol - Model and Protocol.md",sourceDirName:"learn-in-public/1. Engineering/AMQP",slug:"/learn-in-public/Engineering/AMQP/AMQP protocol - Model and Protocol",permalink:"/docs/learn-in-public/Engineering/AMQP/AMQP protocol - Model and Protocol",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",next:{title:"AMQP protocol - network layer",permalink:"/docs/learn-in-public/Engineering/AMQP/AMQP protocol - network layer"}},c={},s=[{value:"Error Handling",id:"error-handling",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#amqp #amqpmodel "),(0,o.kt)("p",null,'"We can dispense with #confirmations because we adopt an assertion model for all actions. Either they succeed, or we have an exception that closes the channel or connection."'),(0,o.kt)("p",null,'"There are no confirmation on AMQP. Silent is successful, failure is noisy. If you ever need any kind of failure handling, you should use #transactions" - AMQP 0.9.1 Specification PDF'),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"Any operational error, such as assertion errors, ie message queue not found, insufficient access rights) causes the #channel to be closed.\nAny structural error, such as invalid args for #bindings, ",(0,o.kt)("strong",{parentName:"p"},"bad sequence of methods")," results in #amqpconnection  #connection drop."))}d.isMDXComponent=!0}}]);