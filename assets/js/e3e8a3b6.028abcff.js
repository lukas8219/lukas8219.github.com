"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Order and It's Guarantees",tags:["orderingevents","sequencenumberordering","totalorderbroadcast","Causality","sequencenumber","monotonicsequence"],book:"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems - Martin Kleppman"},s=void 0,o={unversionedId:"learn-in-public/Engineering/Distributed Systems/Order",id:"learn-in-public/Engineering/Distributed Systems/Order",title:"Order and It's Guarantees",description:"events",source:"@site/docs/learn-in-public/1. Engineering/Distributed Systems/Order.md",sourceDirName:"learn-in-public/1. Engineering/Distributed Systems",slug:"/learn-in-public/Engineering/Distributed Systems/Order",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Order",draft:!1,tags:[{label:"orderingevents",permalink:"/docs/tags/orderingevents"},{label:"sequencenumberordering",permalink:"/docs/tags/sequencenumberordering"},{label:"totalorderbroadcast",permalink:"/docs/tags/totalorderbroadcast"},{label:"Causality",permalink:"/docs/tags/causality"},{label:"sequencenumber",permalink:"/docs/tags/sequencenumber"},{label:"monotonicsequence",permalink:"/docs/tags/monotonicsequence"}],version:"current",frontMatter:{title:"Order and It's Guarantees",tags:["orderingevents","sequencenumberordering","totalorderbroadcast","Causality","sequencenumber","monotonicsequence"],book:"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems - Martin Kleppman"},sidebar:"learn-in-public",previous:{title:"MapReduce",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/MapReduce"},next:{title:"Partitions",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Partitions"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#orderingevents #events"),(0,a.kt)("p",null,"Causality imposes an ordering of events and any system that obeys this order can be called #causaliyconsistent iyconsistent."),(0,a.kt)("p",null,"#Linearizability obeys a total order, which is, it respects the causality of events."),(0,a.kt)("p",null,"#Causality defines the partial order where some events can be ordered and others not."),(0,a.kt)("p",null,"#sequencenumberordering"),(0,a.kt)("p",null,"keeping track of all causal dependencies its a big overhead. We can use #sequencenumber or #timestamps . Timestamps can come from logical clocks, which increment at each operation.\nFor single-leader replications, the replication log can maintain the total order of events (writes) based on this sequence number. Thus, any follower that replicates it will be causally consistent."),(0,a.kt)("p",null,"#noncausalsequencenumbering"),(0,a.kt)("p",null,"Non causal sequence numbering is used in leaderless/multileader replication/partitioned applications but there are some used metods in practice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"number being generated by a range by node. ex: odd and even between two node."),(0,a.kt)("li",{parentName:"ul"},"attaching timestamp, which might be sufficiente for total ordering of events."),(0,a.kt)("li",{parentName:"ul"},"preallocation on a block of numbers")),(0,a.kt)("p",null,"All these three methods are inconsistent with causality."),(0,a.kt)("p",null,"#lamporttimestamp #lamport #timestamps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"its key composed by the N operations processed by the node and the node ID.")),(0,a.kt)("p",null,"If you have the same amount of operations, the one with the greater ID is the greater timestamp."),(0,a.kt)("p",null,"This idea by itself doesnt make it totally casually consistent; the key idea behing Lamport timestamps is:"),(0,a.kt)("p",null,'"Every node and client keeps track of the maximum counter value it has seen so far, and includes that maximum on every request. When a node receiver a req o resp with a maximum greater than its own counter value, it immediatelly increases its own to this maximum"'),(0,a.kt)("p",null,"Lamport Timestamps ARE NOT Version Vectors. They seem similar, but have different purposes: version vector can tell wether two operations are concurrent or whether one is causally dependent on the another operation."),(0,a.kt)("p",null,"Lamport Timestamps enforce TOTAL ORDERING."),(0,a.kt)("p",null,"Total Ordering of Events are not enought for ensuring uniqueness constraints. It its necessary to have #totalorderbroadcast #atomicbrodcast"),(0,a.kt)("p",null,"Total Order Broadcast, informally, describe the protocol of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reliable Delivery: no messages are lost. if delivered, they are all delivered to all nodes."),(0,a.kt)("li",{parentName:"ul"},"Totally Ordered Delivery: all nodes receive the message in the same order")),(0,a.kt)("p",null,"Examples of services that implement Total Order Broadcast. ZooKeeper and etcd."),(0,a.kt)("p",null,"Thus, total order broadcast is exactly the necessary for database replication. if every replica processes the same write in an ordered fashion, each replica will main its consistency. Princple know as #statemachinereplication #statemachine"),(0,a.kt)("p",null,"#fencingtokens Total order broadcast is useful for implemeting fencing tokens. Every req to acquire the lock is appended to the log, and sequentially numbered. The sequence itself can be uses as fencing token. ZooKeeper calls the sqeuence number zxid"),(0,a.kt)("p",null,"#distributedtransactions"))}d.isMDXComponent=!0}}]);