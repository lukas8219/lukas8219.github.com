"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=i,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"learn-in-public/Engineering/Infrastructure/Disk IO Challenges",id:"learn-in-public/Engineering/Infrastructure/Disk IO Challenges",title:"Disk IO Challenges",description:"Study Roadmap for I/O in Linux",source:"@site/docs/learn-in-public/1. Engineering/Infrastructure/Disk IO Challenges.md",sourceDirName:"learn-in-public/1. Engineering/Infrastructure",slug:"/learn-in-public/Engineering/Infrastructure/Disk IO Challenges",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Disk IO Challenges",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"learn-in-public",previous:{title:"Chaos Engineering",permalink:"/docs/learn-in-public/Engineering/Infrastructure/Chaos Engineering"},next:{title:"How to handle relative urls with Nginx reverse proxy",permalink:"/docs/learn-in-public/Engineering/Infrastructure/How to handle relative urls with Nginx reverse proxy"}},s={},m=[{value:"Study Roadmap for I/O in Linux",id:"study-roadmap-for-io-in-linux",level:3},{value:"Exercise 1: Monitor Basic I/O Performance",id:"exercise-1-monitor-basic-io-performance",level:4},{value:"Exercise 2: Explore Disk Usage",id:"exercise-2-explore-disk-usage",level:4},{value:"Exercise 3: Measure Disk I/O with <code>fio</code>",id:"exercise-3-measure-disk-io-with-fio",level:4},{value:"Exercise 4: Monitor Real-time Disk Activity",id:"exercise-4-monitor-real-time-disk-activity",level:4},{value:"Exercise 5: Analyze Disk Latency with <code>blktrace</code>",id:"exercise-5-analyze-disk-latency-with-blktrace",level:4},{value:"Exercise 6: Investigate Filesystem Performance",id:"exercise-6-investigate-filesystem-performance",level:4},{value:"Exercise 7: Simulate High Load Conditions",id:"exercise-7-simulate-high-load-conditions",level:4},{value:"Exercise 8: Analyze Cache Effects",id:"exercise-8-analyze-cache-effects",level:4},{value:"Exercise 9: Network I/O Analysis (if applicable)",id:"exercise-9-network-io-analysis-if-applicable",level:4},{value:"Exercise 10: Long-term Monitoring and Reporting",id:"exercise-10-long-term-monitoring-and-reporting",level:4},{value:"Final Thoughts",id:"final-thoughts",level:3},{value:"Challenge 1: Test Different Filesystems",id:"challenge-1-test-different-filesystems",level:4},{value:"Challenge 2: Evaluate RAID Performance",id:"challenge-2-evaluate-raid-performance",level:4},{value:"Challenge 3: Analyze Disk Latency",id:"challenge-3-analyze-disk-latency",level:4},{value:"Challenge 4: Study Impact of Disk Scheduling Algorithms",id:"challenge-4-study-impact-of-disk-scheduling-algorithms",level:4},{value:"Challenge 5: Examine Asynchronous I/O",id:"challenge-5-examine-asynchronous-io",level:4},{value:"Challenge 6: Investigate Disk Fragmentation",id:"challenge-6-investigate-disk-fragmentation",level:4},{value:"Challenge 7: Monitor Disk I/O with High Concurrency",id:"challenge-7-monitor-disk-io-with-high-concurrency",level:4},{value:"Challenge 8: Explore Network Filesystem Performance",id:"challenge-8-explore-network-filesystem-performance",level:4},{value:"Challenge 9: Simulate Disk Failure Scenarios",id:"challenge-9-simulate-disk-failure-scenarios",level:4},{value:"Challenge 10: Implement Disk Caching Strategies",id:"challenge-10-implement-disk-caching-strategies",level:4},{value:"Final Thoughts",id:"final-thoughts-1",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"study-roadmap-for-io-in-linux"},"Study Roadmap for I/O in Linux"),(0,i.kt)("h4",{id:"exercise-1-monitor-basic-io-performance"},"Exercise 1: Monitor Basic I/O Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Get a baseline of your system's I/O performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"iostat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vmstat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"iostat -xz 1")," to monitor I/O statistics siz=in real-time."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"vmstat 1")," to observe memory, processes, and system I/O."),(0,i.kt)("li",{parentName:"ol"},"Record the results over a few minutes and analyze them.")))),(0,i.kt)("h4",{id:"exercise-2-explore-disk-usage"},"Exercise 2: Explore Disk Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Understand disk usage and file system performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"df"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"du")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"df -h")," to view disk space usage for mounted filesystems."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"du -sh /path/to/directory")," to see the size of specific directories."),(0,i.kt)("li",{parentName:"ol"},"Identify large files/directories that may affect I/O.")))),(0,i.kt)("h4",{id:"exercise-3-measure-disk-io-with-fio"},"Exercise 3: Measure Disk I/O with ",(0,i.kt)("inlineCode",{parentName:"h4"},"fio")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Generate and measure disk I/O under different workloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," if not already available."),(0,i.kt)("li",{parentName:"ol"},"Run a basic read and write test: ",(0,i.kt)("inlineCode",{parentName:"li"},"fio --name=write_test --ioengine=sync --rw=write --bs=4k --size=1G --numjobs=1 --runtime=30s --time_based")),(0,i.kt)("li",{parentName:"ol"},"Modify parameters (block size, number of jobs, read/write patterns) and compare results.")))),(0,i.kt)("h4",{id:"exercise-4-monitor-real-time-disk-activity"},"Exercise 4: Monitor Real-time Disk Activity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": See real-time disk usage and find I/O bottlenecks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"iotop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"iotop")," with superuser privileges to monitor disk activity by process."),(0,i.kt)("li",{parentName:"ol"},"Identify which processes are generating the most disk I/O."),(0,i.kt)("li",{parentName:"ol"},"Run different workloads (e.g., from Exercise 3) and observe changes in ",(0,i.kt)("inlineCode",{parentName:"li"},"iotop"),".")))),(0,i.kt)("h4",{id:"exercise-5-analyze-disk-latency-with-blktrace"},"Exercise 5: Analyze Disk Latency with ",(0,i.kt)("inlineCode",{parentName:"h4"},"blktrace")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Examine the I/O request queue and latencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"blktrace"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"blkparse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"blktrace -d /dev/sda")," to start tracing disk I/O events."),(0,i.kt)("li",{parentName:"ol"},"Perform a workload (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," tests)."),(0,i.kt)("li",{parentName:"ol"},"Stop ",(0,i.kt)("inlineCode",{parentName:"li"},"blktrace")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"blkparse")," to analyze the results.")))),(0,i.kt)("h4",{id:"exercise-6-investigate-filesystem-performance"},"Exercise 6: Investigate Filesystem Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Compare different filesystems' I/O performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"fio"),", different filesystems (ext4, xfs, btrfs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Create a test environment with different filesystems (you can use a virtual machine)."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," tests on each filesystem."),(0,i.kt)("li",{parentName:"ol"},"Compare performance metrics (throughput, latency).")))),(0,i.kt)("h4",{id:"exercise-7-simulate-high-load-conditions"},"Exercise 7: Simulate High Load Conditions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Understand how your system handles high I/O load."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"stress"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"stress")," to generate CPU and I/O load (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"stress --io 4 --timeout 30"),")."),(0,i.kt)("li",{parentName:"ol"},"Monitor the system's I/O performance using ",(0,i.kt)("inlineCode",{parentName:"li"},"iostat")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"iotop"),"."),(0,i.kt)("li",{parentName:"ol"},"Note how performance is impacted under load.")))),(0,i.kt)("h4",{id:"exercise-8-analyze-cache-effects"},"Exercise 8: Analyze Cache Effects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Study how caching affects disk I/O performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"hdparm"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"hdparm -Tt /dev/sda")," to measure cached vs. non-cached read performance."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," tests with different block sizes to observe how cache influences performance.")))),(0,i.kt)("h4",{id:"exercise-9-network-io-analysis-if-applicable"},"Exercise 9: Network I/O Analysis (if applicable)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Investigate how network I/O interacts with disk I/O."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"iftop"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tcpdump"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"iftop")," to monitor network bandwidth while transferring files using ",(0,i.kt)("inlineCode",{parentName:"li"},"dd"),"."),(0,i.kt)("li",{parentName:"ol"},"Perform network file transfers and measure how it affects disk performance."),(0,i.kt)("li",{parentName:"ol"},"Capture network packets with ",(0,i.kt)("inlineCode",{parentName:"li"},"tcpdump")," to analyze traffic during transfers.")))),(0,i.kt)("h4",{id:"exercise-10-long-term-monitoring-and-reporting"},"Exercise 10: Long-term Monitoring and Reporting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Set up a system to collect and analyze I/O statistics over time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tools"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"sar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sysstat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"sysstat")," and enable data collection."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"sar -d")," to collect disk activity data over time."),(0,i.kt)("li",{parentName:"ol"},"Analyze trends and patterns in I/O performance using collected data.")))),(0,i.kt)("h3",{id:"final-thoughts"},"Final Thoughts"),(0,i.kt)("p",null,"Make sure to document your findings for each exercise, including observations, metrics, and any surprising results. This structured approach will help you develop a deep understanding of I/O in Linux and its various components. Enjoy your studies!"),(0,i.kt)("h1",{id:"advanced-section"},"Advanced Section"),(0,i.kt)("h4",{id:"challenge-1-test-different-filesystems"},"Challenge 1: Test Different Filesystems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Compare performance characteristics of different filesystems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Set up multiple partitions with different filesystems (ext4, xfs, btrfs)."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," to benchmark read/write performance on each filesystem."),(0,i.kt)("li",{parentName:"ol"},"Analyze results for latency, throughput, and IOPS.")))),(0,i.kt)("h4",{id:"challenge-2-evaluate-raid-performance"},"Challenge 2: Evaluate RAID Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Study the performance impact of different RAID configurations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Set up a RAID array (0, 1, 5, or 10) using ",(0,i.kt)("inlineCode",{parentName:"li"},"mdadm"),"."),(0,i.kt)("li",{parentName:"ol"},"Run I/O benchmarks using ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dd")," on the RAID and a single disk."),(0,i.kt)("li",{parentName:"ol"},"Compare performance metrics and understand the trade-offs.")))),(0,i.kt)("h4",{id:"challenge-3-analyze-disk-latency"},"Challenge 3: Analyze Disk Latency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Measure and analyze latency under various load conditions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"blktrace")," to collect disk I/O data during heavy load tests."),(0,i.kt)("li",{parentName:"ol"},"Analyze the results with ",(0,i.kt)("inlineCode",{parentName:"li"},"blkparse")," to understand latency distributions."),(0,i.kt)("li",{parentName:"ol"},"Identify factors contributing to high latency.")))),(0,i.kt)("h4",{id:"challenge-4-study-impact-of-disk-scheduling-algorithms"},"Challenge 4: Study Impact of Disk Scheduling Algorithms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Compare the effects of different I/O schedulers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Change the I/O scheduler (e.g., cfq, deadline, noop) using ",(0,i.kt)("inlineCode",{parentName:"li"},"echo"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," to run benchmarks and observe performance variations."),(0,i.kt)("li",{parentName:"ol"},"Analyze the results to understand the strengths and weaknesses of each scheduler.")))),(0,i.kt)("h4",{id:"challenge-5-examine-asynchronous-io"},"Challenge 5: Examine Asynchronous I/O"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Understand the benefits of asynchronous versus synchronous I/O."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Write a program that uses both synchronous and asynchronous I/O."),(0,i.kt)("li",{parentName:"ol"},"Measure the time taken for operations in both scenarios."),(0,i.kt)("li",{parentName:"ol"},"Analyze the impact of I/O patterns on overall application performance.")))),(0,i.kt)("h4",{id:"challenge-6-investigate-disk-fragmentation"},"Challenge 6: Investigate Disk Fragmentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Measure the effects of fragmentation on disk performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Fill a filesystem with files of various sizes and types."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"filefrag")," to analyze fragmentation levels."),(0,i.kt)("li",{parentName:"ol"},"Run benchmarks before and after defragmentation (if applicable).")))),(0,i.kt)("h4",{id:"challenge-7-monitor-disk-io-with-high-concurrency"},"Challenge 7: Monitor Disk I/O with High Concurrency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Test the effects of high concurrency on disk I/O."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," to simulate multiple concurrent read/write operations."),(0,i.kt)("li",{parentName:"ol"},"Monitor disk activity using ",(0,i.kt)("inlineCode",{parentName:"li"},"iotop")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"iostat"),"."),(0,i.kt)("li",{parentName:"ol"},"Analyze how concurrency affects throughput and latency.")))),(0,i.kt)("h4",{id:"challenge-8-explore-network-filesystem-performance"},"Challenge 8: Explore Network Filesystem Performance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Compare the performance of local versus network filesystems (NFS, SMB)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Set up a network filesystem (e.g., NFS)."),(0,i.kt)("li",{parentName:"ol"},"Run benchmarks using ",(0,i.kt)("inlineCode",{parentName:"li"},"fio")," to compare local and network access times."),(0,i.kt)("li",{parentName:"ol"},"Analyze network overhead and how it affects performance.")))),(0,i.kt)("h4",{id:"challenge-9-simulate-disk-failure-scenarios"},"Challenge 9: Simulate Disk Failure Scenarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Understand how the system handles disk failures and recovery."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Set up a RAID array and simulate a disk failure (e.g., by detaching a disk)."),(0,i.kt)("li",{parentName:"ol"},"Observe how the system responds to the failure."),(0,i.kt)("li",{parentName:"ol"},"Measure performance during recovery processes and analyze the results.")))),(0,i.kt)("h4",{id:"challenge-10-implement-disk-caching-strategies"},"Challenge 10: Implement Disk Caching Strategies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Objective"),": Explore the impact of disk caching on performance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"hdparm")," to adjust read-ahead settings and cache settings."),(0,i.kt)("li",{parentName:"ol"},"Measure the performance impact using ",(0,i.kt)("inlineCode",{parentName:"li"},"fio"),"."),(0,i.kt)("li",{parentName:"ol"},"Analyze results to understand how caching improves or hinders performance.")))),(0,i.kt)("h3",{id:"final-thoughts-1"},"Final Thoughts"),(0,i.kt)("p",null,"These advanced challenges will provide a deeper understanding of both CPU and disk I/O performance in Linux, helping you explore the complexities of resource management and performance tuning. Document your findings, observations, and any optimizations you implement during these exercises. Enjoy your exploration!"))}u.isMDXComponent=!0}}]);