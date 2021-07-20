(self.webpackChunk=self.webpackChunk||[]).push([[9760],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4697:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(9603),o=n(120),i=(n(7378),n(5318)),r=["components"],s={title:"Contact Bot"},c=void 0,l={unversionedId:"examples/basic/contact-bot",id:"examples/basic/contact-bot",isDocsHomePage:!1,title:"Contact Bot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/contact-bot.md",sourceDirName:"examples/basic",slug:"/examples/basic/contact-bot",permalink:"/docs/examples/basic/contact-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/basic/contact-bot.md",version:"current",lastUpdatedBy:"Lu Yuchao",lastUpdatedAt:1626806244,formattedLastUpdatedAt:"7/20/2021",frontMatter:{title:"Contact Bot"},sidebar:"docs",previous:{title:"Ding Dong Bot",permalink:"/docs/examples/basic/ding-dong-bot"},next:{title:"Deno in Tutorial Bot",permalink:"/docs/examples/advanced/demo-in-tutorial"}},p=[{value:"Try out the bot",id:"try-out-the-bot",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"1. Clone the repository",id:"1-clone-the-repository",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the bot",id:"3-run-the-bot",children:[]}]},{value:"Building the bot",id:"building-the-bot",children:[{value:"1. Initialize project",id:"1-initialize-project",children:[]},{value:"2. Add dependencies",id:"2-add-dependencies",children:[]},{value:"3. Install dependencies",id:"3-install-dependencies",children:[]},{value:"4. Writing code for bot",id:"4-writing-code-for-bot",children:[]},{value:"5. Defining scripts",id:"5-defining-scripts",children:[]}]},{value:"Running the bot",id:"running-the-bot",children:[{value:"Linux/macOS",id:"linuxmacos-1",children:[]},{value:"Windows",id:"windows-1",children:[]}]},{value:"References",id:"references",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,i.kt)("p",null,"Wechaty ",(0,i.kt)("strong",{parentName:"p"},"Contact bot")," is a bot which can list all contacts by Wechat ID & Name."),(0,i.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"},(0,i.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-contact-bot"}))),(0,i.kt)("p",null,"You can try out the Wechaty Contact bot using this interactive CodeSandbox."),(0,i.kt)("p",null,"Just scan the generated QR code with WeChat app, and you are ready to play with the bot!"),(0,i.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark",title:"wechaty-contact-bot",sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v12+"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"You should have ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,i.kt)("p",null,"You can head over to the ",(0,i.kt)("a",{parentName:"p",href:"#building-the-bot"},"Building the bot")," section to learn how to build the bot on your own."),(0,i.kt)("p",null,"Otherwise, if you just want to try out the bot on your local system, follow the steps below:"),(0,i.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,i.kt)("p",null,"Use the following commands to clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Soumi7/wechaty-contact-bot"},"GitHub repository")," and navigate to the directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Soumi7/wechaty-contact-bot\ncd wechaty-contact-bot\n")),(0,i.kt)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,i.kt)("p",null,"You can install the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," packages required for running the bot, using this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,i.kt)("h3",{id:"3-run-the-bot"},"3. Run the bot"),(0,i.kt)("p",null,"First, you have to ",(0,i.kt)("inlineCode",{parentName:"p"},"export/set")," the environment variables, and then you can run the bot:"),(0,i.kt)("h4",{id:"linuxmacos"},"Linux/macOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")),(0,i.kt)("h4",{id:"windows"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There are various ",(0,i.kt)("strong",{parentName:"p"},"Wechaty puppets")," available, you can know more about them ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"),".")),(0,i.kt)("p",null,"It will generate a QR code, scan it using ",(0,i.kt)("strong",{parentName:"p"},"WeChat")," or ",(0,i.kt)("strong",{parentName:"p"},"WhatsApp")," (according to the puppet you have used), and you are ready to play with the bot."),(0,i.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,i.kt)("p",null,"Let's get started with building the Wechaty Contact bot using Wechaty."),(0,i.kt)("h3",{id:"1-initialize-project"},"1. Initialize project"),(0,i.kt)("p",null,"Create a new folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"contact-bot")," and move into that directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir contact-bot\ncd contact-bot\n")),(0,i.kt)("p",null,"Use the following command to initialize an npm project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,i.kt)("p",null,"This will generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file containing these:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "contact-bot",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,i.kt)("h3",{id:"2-add-dependencies"},"2. Add dependencies"),(0,i.kt)("p",null,"For building the bot mainly you will require the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"wechaty"),": Official Wechaty package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"qrcode-terminal"),": Displays the QR code"),(0,i.kt)("li",{parentName:"ul"},"[dotenv]"),(0,i.kt)("li",{parentName:"ul"},"[puppeteer]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    "dotenv": "^8.2.0",\n    "puppeteer": "^9.0.0",\n    "qrcode-terminal": "^0.12.0",\n    "wechaty": "^0.60.5"\n  }\n')),(0,i.kt)("p",null,"You will also need to add dependencies for using any ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,i.kt)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, Whatsapp, and Gitter):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"devDependencies": {\n    "@chatie/eslint-config": "^0.12.3",\n    "@chatie/tsconfig": "^0.14.1",\n    "check-node-version": "^4.1.0",\n    "connect": "^3.7.0",\n    "cross-env": "^7.0.3",\n    "is-pr": "^2.0.0",\n    "marked": "^2.0.0",\n    "nodemon": "^2.0.7",\n    "ts-node": "^9.1.1",\n    "typescript": "^4.2.4",\n    "wechaty-puppet-mock": "^0.28.2",\n    "wechaty-puppet-wechat": "^0.28",\n    "wechaty-puppet-wechat4u": "^0.18",\n    "wechaty-puppet-whatsapp": "0.2.3"\n  }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can add only the puppets that you need for using the bot.")),(0,i.kt)("p",null,"At this point the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file will look like this (a few more required dependencies are added):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "wechaty-contact-bot",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "lint": "eslint \\"src/*.ts\\"",\n    "start": "node src/contact-bot.js",\n    "start:wechat:web": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-wechat npm start",\n    "start:wechat:padlocal": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-padlocal npm start",\n    "start:puppet:service": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-service npm start",\n    "start:whatsapp:web": "cross-env WECHATY_LOG=verbose  WECHATY_PUPPET=wechaty-puppet-whatsapp npm start",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "dotenv": "^8.2.0",\n    "puppeteer": "^9.0.0",\n    "qrcode-terminal": "^0.12.0",\n    "wechaty": "^0.60.5"\n  },\n  "devDependencies": {\n    "@chatie/eslint-config": "^0.12.3",\n    "@chatie/tsconfig": "^0.14.1",\n    "check-node-version": "^4.1.0",\n    "connect": "^3.7.0",\n    "cross-env": "^7.0.3",\n    "is-pr": "^2.0.0",\n    "marked": "^2.0.0",\n    "nodemon": "^2.0.7",\n    "ts-node": "^9.1.1",\n    "typescript": "^4.2.4",\n    "wechaty-puppet-mock": "^0.28.2",\n    "wechaty-puppet-wechat": "^0.28",\n    "wechaty-puppet-wechat4u": "^0.18",\n    "wechaty-puppet-whatsapp": "0.2.3"\n  }\n}\n')),(0,i.kt)("h3",{id:"3-install-dependencies"},"3. Install dependencies"),(0,i.kt)("p",null,"Before proceeding further, you should install the dependencies that we just specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. Run the following command from the root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,i.kt)("p",null,"This will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory containing all the installed dependencies, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file."),(0,i.kt)("p",null,"Now, you are ready to start writing the main code for building the bot."),(0,i.kt)("h3",{id:"4-writing-code-for-bot"},"4. Writing code for bot"),(0,i.kt)("p",null,"Start by creating a new folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", and add a file ",(0,i.kt)("inlineCode",{parentName:"p"},"contact-bot.js"),". We will be writing the code here."),(0,i.kt)("p",null,"Specify some functions that we will require for handling different events returned by the Wechaty bot."),(0,i.kt)("h4",{id:"onscan"},"onScan"),(0,i.kt)("p",null,"This function will be used for generating the ",(0,i.kt)("strong",{parentName:"p"},"QR code")," for the puppet specified, and display it on the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function onScan (qrcode, status) {\n  qrTerm.generate(qrcode, { small: true })  // show qrcode on console\n}\n")),(0,i.kt)("h4",{id:"onlogin"},"onLogin"),(0,i.kt)("p",null,"This will print a log message when an user logs in to the bot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function onLogin (user) {\n  console.log(`${user} login`)\n  main()\n}\n")),(0,i.kt)("h4",{id:"onlogout"},"onLogout"),(0,i.kt)("p",null,"This will print a log message when an user logs out of the bot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function onLogout (user) {\n  console.log(`${user} logout`)\n}\n")),(0,i.kt)("h4",{id:"onerror"},"onError"),(0,i.kt)("p",null,"This is for printing an error message to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function onError (e) {\n  console.error(e)\n}\n")),(0,i.kt)("p",null,"Now, initialize the Wechaty bot by providing a name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const bot = new Wechaty()\n")),(0,i.kt)("p",null,"Assign proper function to call when an event is triggered by the bot:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"bot.on('scan',    onScan)\nbot.on('login',   onLogin)\nbot.on('logout',  onLogout)\nbot.on('error',   onError)\n")),(0,i.kt)("p",null,"Use the following to start the bot:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"bot.start()\n.catch(console.error)\n")),(0,i.kt)("p",null,"Add the main function to print the official and personal contacts list to the terminal.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function main() {\n  const contactList = await bot.Contact.findAll()\n\n  log.info('Bot', '#######################')\n  log.info('Bot', 'Contact number: %d\\n', contactList.length)\n\n  /**\n   * official contacts list\n   */\n  for (let i = 0; i < contactList.length; i++) {\n    const contact = contactList[i]\n    if (contact.type() === Contact.Type.Official) {\n      log.info('Bot', `official ${i}: ${contact}`)\n    }\n  }\n\n  /**\n   *  personal contact list\n   */\n\n  for (let i = 0; i < contactList.length; i++) {\n    const contact = contactList[i]\n    if (contact.type() === Contact.Type.Personal) {\n      log.info('Bot', `personal ${i}: ${contact.name()} : ${contact.id}`)\n    }\n  }\n\n  const MAX = 17\n  for (let i = 0; i < contactList.length; i++ ) {\n    const contact = contactList[i]\n\n    /**\n     * Save avatar to file like: \"1-name.jpg\"\n     */\n    const file = await contact.avatar()\n    const name = file.name\n    await file.toFile(name, true)\n\n    log.info('Bot', 'Contact: \"%s\" with avatar file: \"%s\"',\n                    contact.name(),\n                    name,\n            )\n\n    if (i > MAX) {\n      log.info('Bot', 'Contacts too many, I only show you the first %d ... ', MAX)\n      break\n    }\n  }\n\n  const SLEEP = 7\n  log.info('Bot', 'I will re-dump contact weixin id & names after %d second... ', SLEEP)\n  setTimeout(main, SLEEP * 1000)\n\n}\n")),(0,i.kt)("h3",{id:"5-defining-scripts"},"5. Defining scripts"),(0,i.kt)("p",null,"You have to define the script for running the bot. Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "lint": "eslint \\"src/*.ts\\"",\n    "start": "node src/contact-bot.js",\n    "start:wechat:web": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-wechat npm start",\n    "start:wechat:padlocal": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-padlocal npm start",\n    "start:puppet:service": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-service npm start",\n    "start:whatsapp:web": "cross-env WECHATY_LOG=verbose  WECHATY_PUPPET=wechaty-puppet-whatsapp npm start",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n')),(0,i.kt)("p",null,"Here, we have specified the script in way so that the type of puppet can be passed as an environment variable."),(0,i.kt)("h2",{id:"running-the-bot"},"Running the bot"),(0,i.kt)("p",null,"In order to run the bot, first you have to ",(0,i.kt)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use and then run the bot:"),(0,i.kt)("h3",{id:"linuxmacos-1"},"Linux/macOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")),(0,i.kt)("h3",{id:"windows-1"},"Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n# If you want to use WhatsApp\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")),(0,i.kt)("p",null,"This will start the bot and generate a QR code."),(0,i.kt)("p",null,"Scan it using your ",(0,i.kt)("strong",{parentName:"p"},"WeChat/WhatsApp")," as per the puppet you have selected, and you are ready to play with the bot!"),(0,i.kt)("p",null,"You can try building this bot without setting up any dev environment on your local system, just head over to this interactive ",(0,i.kt)("strong",{parentName:"p"},"CodeSandbox")," by clicking the button below (a preview of the starter project is given below):"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"},(0,i.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-contact-bot"}))),(0,i.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark",title:"wechaty-contact-bot",sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}u.isMDXComponent=!0}}]);