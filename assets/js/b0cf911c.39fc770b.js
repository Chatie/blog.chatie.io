(self.webpackChunk=self.webpackChunk||[]).push([[3983],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(n),h=r,d=g["".concat(l,".").concat(h)]||g[h]||u[h]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5847:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var a=n(9603),r=n(120),o=(n(7378),n(5318)),i=["components"],p={slug:"/polyglot/openapi/",title:"Wechaty OpenAPI",sidebar_label:"OpenAPI"},l=void 0,s={unversionedId:"polyglot/openapi/overview",id:"polyglot/openapi/overview",isDocsHomePage:!1,title:"Wechaty OpenAPI",description:"Wechaty OpenAPI",source:"@site/docs/polyglot/openapi/overview.md",sourceDirName:"polyglot/openapi",slug:"/polyglot/openapi/",permalink:"/docs/polyglot/openapi/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/overview.md",version:"current",lastUpdatedBy:"Lu Yuchao",lastUpdatedAt:1626806244,formattedLastUpdatedAt:"7/20/2021",frontMatter:{slug:"/polyglot/openapi/",title:"Wechaty OpenAPI",sidebar_label:"OpenAPI"},sidebar:"docs",previous:{title:"Polyglot: Index",permalink:"/docs/polyglot/"},next:{title:"TypeScript",permalink:"/docs/polyglot/typescript/"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Learning Resources",id:"learning-resources",children:[{value:"<strong>Tools</strong>",id:"tools",children:[]},{value:"<strong>Video Resources</strong>",id:"video-resources",children:[]}]},{value:"Maintainers",id:"maintainers",children:[]}],u={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/openapi"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-OpenAPI-6a4",alt:"Wechaty OpenAPI"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/openapi"},"https://github.com/wechaty/openapi")),(0,o.kt)("li",{parentName:"ul"},"Getting Started Template Repo ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Template Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/openapi-wechaty-getting-started"},"https://github.com/wechaty/openapi-wechaty-getting-started")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/openapi-wechaty-getting-started.git\ncd openapi-wechaty-getting-started\nmake install\nmake bot\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("p",null,"Read blogs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi")," tag at ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#openapi"},"https://wechaty.js.org/tags.html#openapi")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,o.kt)("p",null,"To learn more about Open PI and Swagger you can find other learning resources and links below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OAI/OpenAPI-Specification"},"OpenAPI 3.0 Official GitHub Repository"))," \u2014 The OpenAPI Initiative")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://swagger.io/docs/specification/about/"},"Tutorial: Learning the New OpenAPI Specification"),":"),"\nYou can find documentation for OpenAPI 3.0 and Swagger 2.0 Specification on Swagger.io. The updated documentation includes a detailed look at the updated structure and new features in the 3.0 specification.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://swagger.io/blog/difference-between-swagger-and-openapi/"},"What Is the Difference Between Swagger and OpenAPI?"),":"),"\nOpenAPI is the official name of the specification. The development of the specification is fostered by the OpenAPI Initiative, which involves more the 30 organizations from different areas of the tech world \u2014 including Microsoft, Google, IBM, and CapitalOne. Smartbear Software, which is the company that leads the development of the Swagger tools, is also a member of the OpenAPI Initiative, helping lead the evolution of the specification."))),(0,o.kt)("h3",{id:"tools"},(0,o.kt)("strong",{parentName:"h3"},"Tools")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NYTimes/openapi2proto"},"openapi2proto")," - A tool for generating Protobuf v3 schemas and gRPC service definitions from OpenAPI specifications"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openapi.tools/"},"OpenAPI.Tools"))),(0,o.kt)("h3",{id:"video-resources"},(0,o.kt)("strong",{parentName:"h3"},"Video Resources")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://swagger.io/resources/webinars/getting-started-with-swagger/"},"Getting Started with Swagger: An Introduction to Swagger Tools"),":"),"\nThis training provides an introduction to API development with the OpenAPI Specification (formerly known as the Swagger Specification) and provides an overview of the different open-source, free, and commercial Swagger tools and how they can fit into your API development.")),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}g.isMDXComponent=!0}}]);