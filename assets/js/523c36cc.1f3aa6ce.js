"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),s=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(g.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,m=d["".concat(g,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},i="Logging",l={unversionedId:"docs/Advanced/Logging",id:"docs/Advanced/Logging",title:"Logging",description:"By default, Watermelon ships with basic logging enabled that may be useful for debugging. When the application is started, basic information",source:"@site/docs/docs/Advanced/Logging.md",sourceDirName:"docs/Advanced",slug:"/docs/Advanced/Logging",permalink:"/docs/Advanced/Logging",draft:!1,editUrl:"https://github.com/nozbe/WatermelonDB/edit/master/docs-website/docs/docs/Advanced/Logging.md",tags:[],version:"current",frontMatter:{}},g={},s=[{value:"Disabling logging",id:"disabling-logging",level:2},{value:"Overriding logging behavior",id:"overriding-logging-behavior",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("p",null,"By default, Watermelon ships with basic logging enabled that may be useful for debugging. When the application is started, basic information\nabout the location and setup of the database will be logged. As each query is executed, timing information will be logged."),(0,o.kt)("h2",{id:"disabling-logging"},"Disabling logging"),(0,o.kt)("p",null,"Disabling all logging is simple. Before your app starts, typically in your ",(0,o.kt)("inlineCode",{parentName:"p"},"database.js")," file, import the logger and silence it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import logger from '@nozbe/watermelondb/utils/common/logger';\nlogger.silence();\n")),(0,o.kt)("h2",{id:"overriding-logging-behavior"},"Overriding logging behavior"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": This class is not yet formally documented and its specifications may change. This method is for advanced users only, with\nsome tolerance for potential breaking changes in the future.")),(0,o.kt)("p",null,"The logger is a singleton instance of the Logger class, which exposes three methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"log()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"error()"),". Advanced users\nmay monkey-patch the logger methods to change their behavior, such as to route messages to an alternate logger: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Cabin from 'cabin';\nimport logger from '@nozbe/watermelondb/utils/common/logger';\n\nconst cabin = new Cabin();\nlogger.log = (...messages) => cabin.info(...messages);\nlogger.warn = (...messages) => cabin.error(...messages);\nlogger.error = (...messages) => cabin.error(...messages);\n")))}d.isMDXComponent=!0}}]);