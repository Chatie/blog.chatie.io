(self.webpackChunk=self.webpackChunk||[]).push([[9618],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?r.createElement(d,s(s({ref:t},p),{},{components:a})):r.createElement(d,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6538:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(9603),n=a(120),o=(a(7378),a(5318)),s=["components"],i={title:"How to install Wechaty",sidebar_label:"Install Wechaty"},l=void 0,c={unversionedId:"howto/install",id:"howto/install",isDocsHomePage:!1,title:"How to install Wechaty",description:"We have a Wechaty starter repository for beginners with the simplest setting. It will be just work out-of-the-box after you clone, run npm install in the terminal, followed by npm start.",source:"@site/docs/howto/install.md",sourceDirName:"howto",slug:"/howto/install",permalink:"/docs/howto/install",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/install.md",version:"current",lastUpdatedBy:"Lu Yuchao",lastUpdatedAt:1626806244,formattedLastUpdatedAt:"7/20/2021",frontMatter:{title:"How to install Wechaty",sidebar_label:"Install Wechaty"},sidebar:"docs",previous:{title:"How-to Guides: Overview",permalink:"/docs/howto/"},next:{title:"Create a bot",permalink:"/docs/howto/wechaty"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"The World&#39;s Shortest ChatBot Code: 6 lines of JavaScript",id:"the-worlds-shortest-chatbot-code-6-lines-of-javascript",children:[{value:"1. Npm",id:"1-npm",children:[]},{value:"2. Docker",id:"2-docker",children:[]}]},{value:"TEST",id:"test",children:[]},{value:"POWERED BY WECHATY",id:"powered-by-wechaty",children:[]}],h={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have a Wechaty ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter repository")," for beginners with the simplest setting. It will be ",(0,o.kt)("strong",{parentName:"p"},"just work")," out-of-the-box after you ",(0,o.kt)("inlineCode",{parentName:"p"},"clone"),", run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," in the terminal, followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Node.js v12"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sudo apt-get install build-essential && sudo snap install shellcheck"))),(0,o.kt)("h2",{id:"the-worlds-shortest-chatbot-code-6-lines-of-javascript"},"The World's Shortest ChatBot Code: 6 lines of JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst { Wechaty } = require('wechaty') // import { Wechaty } from 'wechaty'\n\nWechaty.instance() // Global Instance\n.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n.on('login',            user => console.log(`User ${user} logged in`))\n.on('message',       message => console.log(`Message: ${message}`))\n.start()\n")),(0,o.kt)("p",null,"Please save the above ",(0,o.kt)("em",{parentName:"p"},"The World's Shortest ChatBot Code: 6 lines of JavaScript")," example to a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"bot.js")," before you can use either NPM or Docker to run it."),(0,o.kt)("h3",{id:"1-npm"},"1. Npm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty?color=brightgreen&label=wechaty%40latest",alt:"NPM Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty?activeTab=versions"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty/next?color=yellow&label=wechaty%40next",alt:"npm (tag)"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/wechaty.svg?style=flat-square",alt:"Downloads"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://packagephobia.now.sh/result?p=wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://packagephobia.now.sh/badge?p=wechaty",alt:"install size"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npm init\nnpm install wechaty\n\n# create your first bot.js file, you can copy/paste from the above "The World\'s Shortest ChatBot Code: 6 lines of JavaScript"\n# then:\nnode bot.js\n')),(0,o.kt)("h3",{id:"2-docker"},"2. Docker"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/wechaty/wechaty/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000",alt:"Docker Pulls"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://microbadger.com/#/images/wechaty/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://images.microbadger.com/badges/image/wechaty/wechaty.svg",alt:"Docker Layers"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wechaty Starter Repository for Docker - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/docker-wechaty-getting-started"},"https://github.com/wechaty/docker-wechaty-getting-started"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Wechaty Docker supports both JavaScript and TypeScript. To use TypeScript just write in TypeScript and save with extension name ",(0,o.kt)("inlineCode",{parentName:"p"},".ts"),", no need to compile because we use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," to run it.")),(0,o.kt)("p",null,"2.1. Run JavaScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# for JavaScript\ndocker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty bot.js\n')),(0,o.kt)("p",null,"2.2. Run TypeScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# for TypeScript\ndocker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty bot.ts\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn more about Wechaty Docker at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty/wiki/Docker"},"Wiki:Docker"),".")),(0,o.kt)("h2",{id:"test"},"TEST"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/actions?query=workflow%3ANPM"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty/workflows/NPM/badge.svg",alt:"NPM"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/actions?query=workflow%3ADocker"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty/workflows/Docker/badge.svg",alt:"Docker"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/Wechaty/wechaty?branch=master"},(0,o.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/Wechaty/wechaty/badge.svg?branch=master",alt:"Coverage Status"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://snyk.io/test/github/Wechaty/wechaty"},(0,o.kt)("img",{parentName:"a",src:"https://snyk.io/test/github/Wechaty/wechaty/badge.svg",alt:"Known Vulnerabilities"}))),(0,o.kt)("p",null,"Wechaty is fully automatically tested by unit and integration tests, with Continious Integration & Continious Deliver(CI/CD) support powered by CI like Travis, Shippable and Appveyor."),(0,o.kt)("p",null,"To test Wechaty, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm test\n")),(0,o.kt)("p",null,"Get to know more about the tests from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty/wiki/Tests"},"Wiki:Tests")),(0,o.kt)("h2",{id:"powered-by-wechaty"},"POWERED BY WECHATY"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"}))))}u.isMDXComponent=!0}}]);