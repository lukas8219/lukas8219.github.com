"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8947],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"Redis is more than a Cache - Data Reference",authors:"lukas8219",tags:["delayed-jobs","redis","pubsub","distributed-systems","semaphores","async-generators","nodejs"]},o=void 0,s={permalink:"/blog/2024/03/15/redis-is-more-than-cache-data-reference",source:"@site/blog/2024-03-15/redis-is-more-than-cache-data-reference.md",title:"Redis is more than a Cache - Data Reference",description:"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.",date:"2024-03-15T00:00:00.000Z",formattedDate:"March 15, 2024",tags:[{label:"delayed-jobs",permalink:"/blog/tags/delayed-jobs"},{label:"redis",permalink:"/blog/tags/redis"},{label:"pubsub",permalink:"/blog/tags/pubsub"},{label:"distributed-systems",permalink:"/blog/tags/distributed-systems"},{label:"semaphores",permalink:"/blog/tags/semaphores"},{label:"async-generators",permalink:"/blog/tags/async-generators"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"Lucas Weis Polesello",title:"SRE | Senior Software Engineer @ LumaHealth",url:"https://github.com/lukas8219",email:"lucas.polesello@lwpsoftwares.com | lucas.c4d@gmail.com",socials:{x:"https://x.com/luucaspole"},imageURL:"https://github.com/lukas8219.png",key:"lukas8219"}],frontMatter:{title:"Redis is more than a Cache - Data Reference",authors:"lukas8219",tags:["delayed-jobs","redis","pubsub","distributed-systems","semaphores","async-generators","nodejs"]},nextItem:{title:"Redis is more than a Cache - Delaying Jobs",permalink:"/blog/2024/03/15/redis-is-more-than-cache-job-delay"}},l={authorsImageUrls:[void 0]},u=[{value:"What about the future?",id:"what-about-the-future",level:3},{value:"Current Design",id:"current-design",level:3},{value:"New Design",id:"new-design",level:3},{value:"Example",id:"example",level:4},{value:"What to expect from this Design",id:"what-to-expect-from-this-design",level:3},{value:"Concerns",id:"concerns",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some weeks ago, we had a incident that was caused mainly due to how we delay job execution.\nOne queue had abnormal behavior during the weekends, which our monitoring systems caught, but we were expecting system to be self-healing and be able to kick through this small hiccup.\nTuesday we noticed something was off with our integration systems - where a code that was running for more than a year stopped working at the same time we rolled it for a new big customer."),(0,i.kt)("p",null,"I got involved early in the incident due to how often I touch that component of the backend and we initiated investigation so we could get back to the customer as fast as possible with some good news."),(0,i.kt)("p",null,"After some hours of investigation we ended up concluding that our long polling mechanism had a hot-loop on a certain queue - which in turn was always retrying delays. The first time this edge case was triggered happened during the weekends where we saw the previous abnormal behavior.\nDue to always re-delaying jobs,  the amount of postponed jobs to this queue would never actually drain and thus this component  would eternally get stuck while trying to drain postponed jobs - delaying all the other queues from the platform."),(0,i.kt)("p",null,"In a quick ",(0,i.kt)("inlineCode",{parentName:"p"},"1/2")," hour solution we shipped code to stop retrying jobs after more than N retries and unblocking the hot loop."),(0,i.kt)("h3",{id:"what-about-the-future"},"What about the future?"),(0,i.kt)("p",null,"All that to say ",(0,i.kt)("em",{parentName:"p"},"what"),"? What is has to do with Redis? "),(0,i.kt)("p",null,"As described the previous post from this series - the job delaying mechanism lives within Redis where we use a Sorted Set to pull the next job. We fanout to a certain amount in parallel - but we only restart this processing after all possible queue targets were drained up until some upper bound timestamp (being the ",(0,i.kt)("inlineCode",{parentName:"p"},"score")," in a SortedSet). "),(0,i.kt)("p",null,"With this fragility in mind and the upcoming code-freeze of December - I suggested to rewrite this design completely."),(0,i.kt)("h3",{id:"current-design"},"Current Design"),(0,i.kt)("p",null,"Whenever a service requests an postpone - which can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"intentionally")," - calling the method to postpone it OR ",(0,i.kt)("inlineCode",{parentName:"p"},"unintentionally")," - due to some ",(0,i.kt)("em",{parentName:"p"},"IO failure, protocol error or some ephemeral channel churn")," - the job flows through this ",(0,i.kt)("inlineCode",{parentName:"p"},"DelayedJobsStorage")," design."),(0,i.kt)("p",null,"The current ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," design is a simple Sorted Set from Redis where timestamps are the score and key being the job serialized into string."),(0,i.kt)("p",null,"On the infrastructure side, we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"cache.r7g.12xlarge ElastiCache")," (~300GB \ud83d\udea8) instance to sustain our load SPIKES - like some instabilities or big customers data. "),(0,i.kt)("p",null,"In the other end, there's a separate backend component ",(0,i.kt)("inlineCode",{parentName:"p"},"Scheduler")," that is responsible for triggering individual jobs at certain interval. This component triggers a service that runs a long-polling logic until the current timestamp."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delayed-jobs-old-design",src:a(86866).Z+"#light",width:"1055",height:"775"}),"\n",(0,i.kt)("img",{alt:"delayed-jobs-old-design",src:a(33652).Z+"#dark",width:"1055",height:"775"})),(0,i.kt)("h3",{id:"new-design"},"New Design"),(0,i.kt)("p",null,"I've created some abstractions to make it easier to implement new storage backends like ",(0,i.kt)("inlineCode",{parentName:"p"},"S3"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"VFS")," and ",(0,i.kt)("em",{parentName:"p"},"many more"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"Redis")," is now running as a mainly as reference-to-data component and only stores entire jobs if they are within the next ~2 seconds or some failure happens."),(0,i.kt)("p",null,"The storage rationale happens with a couple considerations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How long are we planning to postpone?"),(0,i.kt)("li",{parentName:"ul"},"How big (byte size) is this job?"),(0,i.kt)("li",{parentName:"ul"},"Is this storage backend rolled out for certain queue OR tenant _id?"),(0,i.kt)("li",{parentName:"ul"},"Is this storage available? If not, fall back to Redis")),(0,i.kt)("p",null,"We also changed the core logic behind the backend service that re-enqueues delayed jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Removed the coupling with Scheduler"),":")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Instead of waiting for some schedule job trigger the backend service, it triggers itself given a certain interval."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Circuit Breaking"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Jobs keeps being re-enqueued up to a certain timeout. Preventing one cycle of starving resources OR locking entire service in some hot-loop."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Concurrent Processing with Semaphores"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We would always have up to N concurrent processing target queues - decoupled from other executions."),(0,i.kt)("li",{parentName:"ul"},"Speeds up draining time."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Better visibility"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We implemented proper monitoring such as latencies for each re-enqueue, amount of re-enqueues and failure/successful re-enqueues."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"*Horizontally Scale by Controlling the ZPOPMIN:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pop the least score up to an upper-bound timestamp."),(0,i.kt)("li",{parentName:"ul"},"This enables us to have multiple instances running which we were unable in the past due to the Singleton Design we had.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"new-design",src:a(20288).Z+"#light",width:"3636",height:"1894"}),"\n",(0,i.kt)("img",{alt:"new-design",src:a(6169).Z+"#dark",width:"3636",height:"1894"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"redis-is-more-than-cache-data-reference-new-design-read_",src:a(56307).Z+"#light",width:"3621",height:"2217"}),"\n",(0,i.kt)("img",{alt:"redis-is-more-than-cache-data-reference-new-design-read_",src:a(89341).Z+"#dark",width:"3621",height:"2217"})),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Lets use for example - storing a job for 10minutes that has a medium size due to the context it needs to carry. We would store the job data into S3 then insert a key into Redis formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"s3::some-queue::384192393192::<some-generated-uui>"),"\nWhen trying to re-enqueue the job - the abstraction easily understands the protocol as being ",(0,i.kt)("inlineCode",{parentName:"p"},"s3"),".  This abstraction then uses the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," which knows where to fetch a certain job by this ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid"),"."),(0,i.kt)("h3",{id:"what-to-expect-from-this-design"},"What to expect from this Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Infrastructure downsizing:")," From ",(0,i.kt)("inlineCode",{parentName:"li"},"300GB")," to ",(0,i.kt)("inlineCode",{parentName:"li"},">10GB"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Currently we have ",(0,i.kt)("inlineCode",{parentName:"li"},"4million")," of keys stored consuming up to ",(0,i.kt)("inlineCode",{parentName:"li"},"200GB")," of RAM"),(0,i.kt)("li",{parentName:"ul"},"In the new design this would be ",(0,i.kt)("inlineCode",{parentName:"li"},"~64mb")," - if we calculate ",(0,i.kt)("inlineCode",{parentName:"li"},"uuid")," being 128bits and omit the other small appended data."),(0,i.kt)("li",{parentName:"ul"},"Roughly we are expecting to downsize to ",(0,i.kt)("inlineCode",{parentName:"li"},"10GB")," - since brief postpones can still occurs and overload it. ",(0,i.kt)("em",{parentName:"li"},"Experimentation")," will lead us to decide the proper size."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Independency:")," ",(0,i.kt)("em",{parentName:"li"},"Decouple backend components preventing service A stopping service B of working properly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Speed:")," ",(0,i.kt)("em",{parentName:"li"},"N replicas will consume queues much faster in some abnormal load")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Horizontal Scalability/Reliability:")," Multiple Consuming replicas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tail-Latency Aware:")," Latency-Sensitive components will be decoupled such as WebSocket notifications, Chat Messages and all real time communication - heavily used in the platform")),(0,i.kt)("h3",{id:"concerns"},"Concerns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RPS - How many jobs are being delayed per sec and their latencies? p75, p90, p99"),(0,i.kt)("li",{parentName:"ul"},"S3 speed for large objects -> Will it impact our re-enqueueing speed?"),(0,i.kt)("li",{parentName:"ul"},"Proper Redis sizing -> How far can we push lower?"),(0,i.kt)("li",{parentName:"ul"},"Redis is still a single point of failure -> What if Redis just ",(0,i.kt)("strong",{parentName:"li"},"dies"),"?")))}c.isMDXComponent=!0},33652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delayed-jobs-old-design.excalidraw.dark-fec9955391ae7cb739396fc9ad580aac.svg"},86866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delayed-jobs-old-design.excalidraw.light-0d36dae811866c62916cf305a7786f14.svg"},6169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-design.excalidraw.dark-899ce2c32ce6e28afa220b258a31ea7a.svg"},20288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-design.excalidraw.light-48d7ce8ca90f97614b1231fc2a44f0a6.svg"},89341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis-is-more-than-cache-data-reference-new-design-read_.excalidraw.dark-e0b193bbf14e87d6a51f3c503c9494b5.svg"},56307:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis-is-more-than-cache-data-reference-new-design-read_.excalidraw.light-092399f802a23ff3fc8fd2b5e88a28e6.svg"}}]);