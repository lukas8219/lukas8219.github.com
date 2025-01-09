"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={book:"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems - Martin Kleppman"},o=void 0,l={unversionedId:"learn-in-public/Engineering/Distributed Systems/Transactions - Isolation Levels",id:"learn-in-public/Engineering/Distributed Systems/Transactions - Isolation Levels",title:"Transactions - Isolation Levels",description:"weak #isolation",source:"@site/docs/learn-in-public/1. Engineering/Distributed Systems/Transactions - Isolation Levels.md",sourceDirName:"learn-in-public/1. Engineering/Distributed Systems",slug:"/learn-in-public/Engineering/Distributed Systems/Transactions - Isolation Levels",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Transactions - Isolation Levels",draft:!1,tags:[],version:"current",frontMatter:{book:"Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems - Martin Kleppman"},sidebar:"learn-in-public",previous:{title:"Partitions",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Partitions"},next:{title:"Version Vectors",permalink:"/docs/learn-in-public/Engineering/Distributed Systems/Version Vectors"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"#WeakIsolationLevels #weak #isolation"),(0,i.kt)("p",null,"Types of Transactions levels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read uncommited"),(0,i.kt)("li",{parentName:"ul"},"read commited"),(0,i.kt)("li",{parentName:"ul"},"snapshot isolation"),(0,i.kt)("li",{parentName:"ul"},"repeatable reads")),(0,i.kt)("p",null,"#readcommited"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read commited means there are no dirty reads or writes."),(0,i.kt)("li",{parentName:"ul"},"its the most basic leve of transaction isolation")),(0,i.kt)("p",null,"By #dirtyreads or #dirtywrites, it means we are never reading altered data which were not commited.(By aborted or rolled-back transactions)"),(0,i.kt)("p",null,"The mechanisms by which we prevent dirty reads or writes, its by requiring the LOCK on the ROW for the current transaction, for a brief moment."),(0,i.kt)("p",null,"The cons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"acquiring locks may cause some real performance issues on long-running write operations. Since,we cannot release the lock until the write opeartion has finished.")),(0,i.kt)("p",null,"To prevent this method of #dirtyreads most DB store the old commited value and the value from the current transaction holding the lock. Other transactions read the old commited value."),(0,i.kt)("p",null,"On #readcommited type of #isolation, there's something called #readskew which refers to an acceptable inconsistency, on the client side caused a timing issue. Reads in between of writes."),(0,i.kt)("p",null,"#snapshotisolation #mvcc #multiversionconcurrencycontrol"),(0,i.kt)("p",null,'"',(0,i.kt)("em",{parentName:"p"},"readers never block writers, and writers never block readers"),'"'),(0,i.kt)("p",null,"snapshot isolations are used in case, you cannot have #readskews nor any inconsistencies on data, such as whole DB backups, and analytics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creates a consistent snapshot of the whole database, with only data older than the current transaction. Thus, it doesnt require any read-lock. Only the write-locks.")),(0,i.kt)("p",null,"This approach requires the ability to read the database on any timeline and  actually writes new rows into the table with created",(0,i.kt)("em",{parentName:"p"},"by and deleted_by columns. This columns refers to the transactionId(_txId"),"). A garbage collections is then triggered."),(0,i.kt)("p",null,"#mvcc can be used for both #readcommited and #snapshotisolation the difference is that on read commited it uses a separate snapshot for each query, not the entire db."),(0,i.kt)("p",null,"#indexes on #mvcc #confusing"),(0,i.kt)("p",null,"DB that use the B-tree style indexes use the #append-only or #copy-on-write variants. The append-only create new tree roots on each write, so that everything is consistent. and copy-on-write, the parents(all up to the root) are all copied."),(0,i.kt)("p",null,"#repeatablereads"),(0,i.kt)("p",null,"Actually its the same as #snapshotisolation. only there is a naming confusion.\nOracle calls it serializable and Postgres and mySQL call it repeatable reads."),(0,i.kt)("p",null,"\"nobody really knows what a 'Repeatable Read' means\""),(0,i.kt)("p",null,"#preventing #lost #updates"),(0,i.kt)("p",null,"This kind of problem arises when we read a value from the db, modifies and write it back on different operations. (#read-modify-write cycle)"),(0,i.kt)("p",null,"#atomicwriteoperations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE counters SET value = value + 1 WHERE key = 'foo';\n")),(0,i.kt)("p",null,"This is a concurrency-safe operation."),(0,i.kt)("p",null,"For #MongoDB use the $inc."),(0,i.kt)("p",null,"We can use the #cursorstability or forcing all atomic operations to be execute on a single thread"),(0,i.kt)("p",null,"To acquire a lock, until the update, look for the keyword SELECT \u2026 FROM \u2026 WHERE ...  'FOR UPDATE'."),(0,i.kt)("p",null,"#compare-and-set"),(0,i.kt)("p",null,"Only allow an change in the value, if the last read value has not changed. If so, retry the cycle."),(0,i.kt)("p",null,"On replicas or partitions, how do we prevent lost updates, since neither locks or compare and set cannot be used?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"specific data structures for conflict resolution"),(0,i.kt)("li",{parentName:"ul"},"several conflicting version of the same document/value - #siblings")),(0,i.kt)("p",null,"#writeskews"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reads on same object, apply logic and update both writes. Example of the on-call doctors. Which the query depends upon flags."),(0,i.kt)("li",{parentName:"ul"},"To solve, you can use an explicit lock with FOR UPDATE or triggers and materialized views")),(0,i.kt)("p",null,"patterns for write skews."),(0,i.kt)("p",null,"Application logic on SELECT result to determine if, there is some update or insert, that will alter this SELECT result thus the application logic."),(0,i.kt)("p",null,"Phantoms are phenomens that occurs when we ADDING new items, not UPDATING. And follow the same logic as above."),(0,i.kt)("p",null,"#materializingconflicts is the approach of creating some table so we can acquire a lock, before some insert. As of, booking and booking periods. Availabilities its an example."),(0,i.kt)("p",null,"#serializable"),(0,i.kt)("p",null,"this Serializable comes from 'in-series'."),(0,i.kt)("p",null,"Types of Serializable Isolation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#serialexecution - not scalable"),(0,i.kt)("li",{parentName:"ul"},"#twophaselocking #2pl - not performant"),(0,i.kt)("li",{parentName:"ul"},"#serializablesnapshopisolation #ssi")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"the next considerations are only for single-node databases")),(0,i.kt)("p",null,"#serialexecution consists on a single-thread loop executing all transactions in serial. On at a time. Only made feasabile by 2007 because of how much resources got cheaper and how #OLTP transactions are usually short and not demading."),(0,i.kt)("p",null,"The even better but infamous approach is to use stored procedures, which come with a lot of unwanted cons, such as lack of testability, difficulty to debug, version controlling and performance sensitiviness."),(0,i.kt)("p",null,"As of now, the vendors are actually using programming languages for its procedures, such as Redis with Lua.\nSerial execution does not fit well with partitions, since it require a lock on another replica/partition."),(0,i.kt)("p",null,"Serial execution can be used for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"datasets that fit into memory"),(0,i.kt)("li",{parentName:"ul"},"small and fast transactions"),(0,i.kt)("li",{parentName:"ul"},"not many writes (??)")),(0,i.kt)("p",null,"#twophaselocking #2pl"),(0,i.kt)("p",null,"For almost 30 year it was the gold standard for serializability on dbs."),(0,i.kt)("p",null,"Several transactions are allowed to the read the same data, as long as nobody is writing to it. As soon as there is any write, the access is exclusive, thus blocking any other transaction read or write."),(0,i.kt)("p",null,"It's mantra is pretty different from snapshop isolation. \"",(0,i.kt)("em",{parentName:"p"},"writes block writers and readers"),'"'),(0,i.kt)("p",null,"For 2PL we have two types of locking, the SHARED MODE or EXCLUSIVE MODE."),(0,i.kt)("p",null,"Performance of 2PL is significantly worse than Weak Isolation type caused by reduced concurrency and overhead of dealing with locks."),(0,i.kt)("p",null,"2PL supports #predicatelocks which prevents the #writeskews or any kind of #phantoms and #raceconditions"),(0,i.kt)("p",null,"#serializablesnapshotisolation #ssi\nCreated at 2008, SSI is very promising and seems to deliver good serializability with small performance penalty."),(0,i.kt)("p",null,"#pessimisticlock #optimisticlock #serialexecution #2pl #mutex"),(0,i.kt)("p",null,"#2PL and serial execution are a pessimistic lock concurrency control mechanism, since it assumes that if anything can go wrong, its better to wait for a safe opportunity. just as MutEx are used on multi threaded data structures."),(0,i.kt)("p",null,"serializable Snapshot isolaton #ssi fits into the optimistic locking mechanis, which only hopes for the best LOL. And if there are any errors as outcome, it decides to abort or retry. If not, it is allowed to commit."),(0,i.kt)("p",null,"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2PL is not performant"),(0,i.kt)("li",{parentName:"ul"},"serial execution is not scalable"),(0,i.kt)("li",{parentName:"ul"},"weak isolation levels have a good performance, but are error prone to race conditions"),(0,i.kt)("li",{parentName:"ul"},"SSI is stay in the middle, between serializable isolation and weak isolations.")))}d.isMDXComponent=!0}}]);