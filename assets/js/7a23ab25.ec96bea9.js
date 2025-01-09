"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={tags:["amqp","network","binaryprotocol","amqpprotocol","AMQPframe","packets","octets","octet"]},i=void 0,l={unversionedId:"learn-in-public/Engineering/AMQP/AMQP Protocol - Network Layer Protocol",id:"learn-in-public/Engineering/AMQP/AMQP Protocol - Network Layer Protocol",title:"AMQP Protocol - Network Layer Protocol",description:"AMQP is a binary protocol. Everything is organized into packet frames, and those frames carries informations about methods, classes and more.",source:"@site/docs/learn-in-public/1. Engineering/AMQP/AMQP Protocol - Network Layer Protocol.md",sourceDirName:"learn-in-public/1. Engineering/AMQP",slug:"/learn-in-public/Engineering/AMQP/AMQP Protocol - Network Layer Protocol",permalink:"/docs/learn-in-public/Engineering/AMQP/AMQP Protocol - Network Layer Protocol",draft:!1,tags:[{label:"amqp",permalink:"/docs/tags/amqp"},{label:"network",permalink:"/docs/tags/network"},{label:"binaryprotocol",permalink:"/docs/tags/binaryprotocol"},{label:"amqpprotocol",permalink:"/docs/tags/amqpprotocol"},{label:"AMQPframe",permalink:"/docs/tags/amq-pframe"},{label:"packets",permalink:"/docs/tags/packets"},{label:"octets",permalink:"/docs/tags/octets"},{label:"octet",permalink:"/docs/tags/octet"}],version:"current",frontMatter:{tags:["amqp","network","binaryprotocol","amqpprotocol","AMQPframe","packets","octets","octet"]},sidebar:"learn-in-public",previous:{title:"AMQP Protocol - Model and Protocol",permalink:"/docs/learn-in-public/Engineering/AMQP/AMQP Protocol - Model and Protocol"},next:{title:"The Organization Roadmap",permalink:"/docs/learn-in-public/Engineering/Business, Companies and Processes/The Organization Roadmap"}},s={},c=[{value:"AMQP DataTypes",id:"amqp-datatypes",level:2},{value:"AMQP Frames",id:"amqp-frames",level:2},{value:"Frame-End",id:"frame-end",level:3},{value:"AMQP Method Frames",id:"amqp-method-frames",level:2},{value:"Establishing a Connection",id:"establishing-a-connection",level:2},{value:"Receiving Frames and Packets",id:"receiving-frames-and-packets",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AMQP is a binary protocol. Everything is organized into packet frames, and those frames carries informations about methods, classes and more."),(0,o.kt)("p",null,"Each AMQP Frame consists of:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"0th Uint8: -> Type of packet",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"1: Method"),(0,o.kt)("li",{parentName:"ol"},"2: Header"),(0,o.kt)("li",{parentName:"ol"},"3: Body"),(0,o.kt)("li",{parentName:"ol"},"8: Heartbeat"))),(0,o.kt)("li",{parentName:"ol"},"1th Uint16 -> Channel ID - Usually a integer between 1 and 256"),(0,o.kt)("li",{parentName:"ol"},"3th Uint32 -> FrameSize: The byte length for the entire frame"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Framesize")," + 3th -> The Frame End: A Value to identify the frameEnd -> always 206")),(0,o.kt)("p",null,"To write a client library for AMQP all clients libraries start the connection while a persistent TCP connection. In this example, we are using NodeJS."),(0,o.kt)("p",null,"AMQP protocol is a binary implementation of RPC calls. The communication between client-server (client-broker) is made by formatting a TCP packet with some binary format - that encapsulates method calls - having the method name, channel/connection which it was invoked and the arguments of it."),(0,o.kt)("h2",{id:"amqp-datatypes"},"AMQP DataTypes"),(0,o.kt)("p",null,"The AMQP frames supports the following data types"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Integers -> 1 to 8 octets"),(0,o.kt)("li",{parentName:"ol"},"Bits -> Single octets : represents ON/OFF values. Boolean"),(0,o.kt)("li",{parentName:"ol"},"Short strings -> Single octet w/ string values ranging up until 255 octets",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"it does fulfill 2 spaces, since we need the length of it also."))),(0,o.kt)("li",{parentName:"ol"},"LongStrings -> holds binary data?"),(0,o.kt)("li",{parentName:"ol"},"Table -> key-value pairs where value is one of the DataTypes")),(0,o.kt)("h2",{id:"amqp-frames"},"AMQP Frames"),(0,o.kt)("p",null,"All frames consist of a headers - which is 7 octets, a body and a FrameEnd octet.\nSo each time we parse these frames, we need to read the headers - which will give us the packet size then ensure the last octet - FrameEnd - has value of 206."),(0,o.kt)("p",null,"When implementing the protocol and performance is a concern we should use ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-in-public/Engineering/Operating%20Systems/ReadAheadBuffering%20&%20Gathering%20Reads"},"ReadAheadBuffering & Gathering Reads")," to avoid constant calls to SO."),(0,o.kt)("p",null,"Each frame should also inform the PAYLOAD size, which is basically the Method payload."),(0,o.kt)("h3",{id:"frame-end"},"Frame-End"),(0,o.kt)("p",null,'The FrameEnd is used "to detect framing errors caused by incorrect client or server implementations." These would case connection being closed.'),(0,o.kt)("p",null,"The frame-end octet MUST always be the hexadecimal value %xCE"),(0,o.kt)("h2",{id:"amqp-method-frames"},"AMQP Method Frames"),(0,o.kt)("p",null,"To process a method frame, we should read, separately, the first two octet which will give us, in order, the classId and the methodId."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"octets",src:n(38548).Z,width:"1552",height:"412"})),(0,o.kt)("h2",{id:"establishing-a-connection"},"Establishing a Connection"),(0,o.kt)("p",null,'To establish a connection with AMQP, the client needs to connect via TCP Socket and emit a packet telling the AMQP service which AMQP version we are talking to.\nThis packet is called the Protocol Headers and should contain the following buffer\n"AMQP0{version}" as bytes'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const net = require('net');\n\n//This should start the entire RPC flow to connect to AMQP\nconst connection = net.connect(5672, 'localhost', () => {\n    const packet = Buffer.from(`AMQP${String.fromCharCode(0,0,9,1)}`);\n    connection.write(packet);\n})\n")),(0,o.kt)("h3",{id:"receiving-frames-and-packets"},"Receiving Frames and Packets"),(0,o.kt)("p",null,"As soon as the AMQP broker receives the above packets, it will start communicating while establishing connections, the way we handle it is a little bit different than usual packets, since AMQP uses Channels, the connection channel Id Is always 0."),(0,o.kt)("p",null,"Following the above guidelines, we can start reading the received frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"connection.on('data', (buffer) => {\n        const view = new DataView(data.buffer);\n        const type = view.getUint8(0); //0th is the packet type\n        const channelId = view.getUint16(1); //1th is the ChannelID - 1 to 256\n        const frameSize = view.getUint32(3); //3th is the FrameSize\n        const frameEnd = view.getUint8(7 + frameSize) //7th+FrameSize=FrameEnd\n\n        if(frameEnd !== 206){\n            //FrameEnd values should always be 206\n            throw new Error('Frame end invalid');\n        }\n\n        if(type === 1){ //If type is Method\n            const classId = view.getUint16(7);\n            const methodId = view.getUint16(7 + 2);\n            //If classId is 10(Connection) and methodId is 10(Start)\n            //it means we received a Connection#Start RPC\n            if(classId === 10 && methodId === 10){\n                console.log(`We are ready to reply with Connection#StartOk`);\n            }\n        }\n})\n")))}d.isMDXComponent=!0},38548:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/octets-6c62e58771c8f04e44ef3c55405ae834.webp"}}]);