(self.webpackChunk=self.webpackChunk||[]).push([[8427],{5318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,c=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=s(a),h=r,m=g["".concat(i,".").concat(h)]||g[h]||p[h]||c;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=a.length,o=new Array(c);o[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},517:function(t,e,a){"use strict";var n=a(7378);e.Z=function(t){var e=t.children,a=t.hidden,r=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},e)}},4535:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});var n=a(7378),r=a(4956);var c=function(){var t=(0,n.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=a(8944),l="tabItem_c0e5",i="tabItemActive_28AG";var s=37,u=39;var p=function(t){var e=t.lazy,a=t.block,r=t.defaultValue,p=t.values,g=t.groupId,h=t.className,m=c(),d=m.tabGroupChoices,y=m.setTabGroupChoices,b=(0,n.useState)(r),f=b[0],k=b[1],w=n.Children.toArray(t.children),v=[];if(null!=g){var N=d[g];null!=N&&N!==f&&p.some((function(t){return t.value===N}))&&k(N)}var T=function(t){var e=t.currentTarget,a=v.indexOf(e),n=p[a].value;k(n),null!=g&&(y(g,n),setTimeout((function(){var t,a,n,r,c,o,l,s;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,c=t.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&c<=s&&r<=l&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},O=function(t){var e,a;switch(t.keyCode){case u:var n=v.indexOf(t.target)+1;a=v[n]||v[0];break;case s:var r=v.indexOf(t.target)-1;a=v[r]||v[v.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},p.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":f===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:O,onFocus:T,onClick:T},a)}))),e?(0,n.cloneElement)(w.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},4956:function(t,e,a){"use strict";var n=(0,a(7378).createContext)(void 0);e.Z=n},2872:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return g},default:function(){return m}});var n=a(9603),r=a(120),c=(a(7378),a(5318)),o=a(4535),l=a(517),i=["components"],s={},u=void 0,p={unversionedId:"polyglot/transclusions/getting-started-templates",id:"polyglot/transclusions/getting-started-templates",isDocsHomePage:!1,title:"getting-started-templates",description:"<Tabs",source:"@site/docs/polyglot/transclusions/getting-started-templates.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/getting-started-templates",permalink:"/docs/polyglot/transclusions/getting-started-templates",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/getting-started-templates.mdx",version:"current",lastUpdatedBy:"Lu Yuchao",lastUpdatedAt:1626806244,formattedLastUpdatedAt:"7/20/2021",frontMatter:{}},g=[{value:"Install &amp; Start",id:"install--start",children:[]}],h={toc:g};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,c.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,c.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,c.kt)(l.Z,{value:"openapi",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"# git clone git@github.com:wechaty/openapi-wechaty-getting-started.git\n# cd openapi-wechaty-getting-started\n# To be added\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("del",{parentName:"p"},"GitHub: ",(0,c.kt)("a",{parentName:"del",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started"))))),(0,c.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/python-wechaty-getting-started.git\ncd python-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty-getting-started"},"https://github.com/wechaty/python-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/go-wechaty-getting-started.git\ncd go-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty-getting-started"},"https://github.com/wechaty/go-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/java-wechaty-getting-started.git\ncd java-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/java-wechaty-getting-started"},"https://github.com/wechaty/java-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/php-wechaty-getting-started.git\ncd php-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/php-wechaty-getting-started"},"https://github.com/wechaty/php-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/scala-wechaty-getting-started.git\ncd scala-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/scala-wechaty-getting-started"},"https://github.com/wechaty/scala-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/csharp-wechaty-getting-started.git\ncd csharp-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/csharp-wechaty-getting-started"},"https://github.com/wechaty/csharp-wechaty-getting-started")))),(0,c.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/rust-wechaty-getting-started.git\ncd rust-wechaty-getting-started\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"GitHub: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/wechaty/rust-wechaty-getting-started"},"https://github.com/wechaty/rust-wechaty-getting-started"))))),(0,c.kt)("h3",{id:"install--start"},"Install & Start"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"make install\nmake bot\n")))}m.isMDXComponent=!0},8944:function(t,e,a){"use strict";function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}a.d(e,{Z:function(){return r}})}}]);