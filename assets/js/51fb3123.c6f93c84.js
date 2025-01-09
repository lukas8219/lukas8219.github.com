"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9993],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=i,d=p["".concat(s,".").concat(b)]||p[b]||f[b]||o;return n?t.createElement(d,a(a({ref:r},u),{},{components:n})):t.createElement(d,a({ref:r},u))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},44509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(87462),i=(n(67294),n(3905));const o={tags:["kubernetes","crd","customresourcedefinition","podlifecycle","lifecycle"]},a=void 0,c={unversionedId:"learn-in-public/Engineering/Infrastructure/Kubernetes/Finalizers",id:"learn-in-public/Engineering/Infrastructure/Kubernetes/Finalizers",title:"Finalizers",description:"Finalizers are definitions for how to gargabe some resource within kubernetes",source:"@site/docs/learn-in-public/1. Engineering/Infrastructure/Kubernetes/Finalizers.md",sourceDirName:"learn-in-public/1. Engineering/Infrastructure/Kubernetes",slug:"/learn-in-public/Engineering/Infrastructure/Kubernetes/Finalizers",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes/Finalizers",draft:!1,tags:[{label:"kubernetes",permalink:"/docs/tags/kubernetes"},{label:"crd",permalink:"/docs/tags/crd"},{label:"customresourcedefinition",permalink:"/docs/tags/customresourcedefinition"},{label:"podlifecycle",permalink:"/docs/tags/podlifecycle"},{label:"lifecycle",permalink:"/docs/tags/lifecycle"}],version:"current",frontMatter:{tags:["kubernetes","crd","customresourcedefinition","podlifecycle","lifecycle"]},sidebar:"learn-in-public",previous:{title:"Differences between NodePort, ClusterIP and LoadBalancer",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes/Differences between NodePort, ClusterIP and LoadBalancer"},next:{title:"How to Access a Service in Another Namespace",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Kubernetes/How to Access a Service in Another Namespace"}},s={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...n}=e;return(0,i.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Finalizers are definitions for how to gargabe some resource within kubernetes\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/")),(0,i.kt)("p",null,"This could be related to some PVC/PV being in terminating state since PODs are still using them. This is caused by ",(0,i.kt)("inlineCode",{parentName:"p"},"pv-protection")," finalizer that won't let PV be deleted if someone is using it"))}f.isMDXComponent=!0}}]);