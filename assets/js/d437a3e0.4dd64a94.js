"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4521],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(3905));const r={},i="Schema",l={unversionedId:"docs/Schema",id:"docs/Schema",title:"Schema",description:"When using WatermelonDB, you're dealing with Models and Collections. However, underneath Watermelon sits an underlying database (SQLite or LokiJS) which speaks a different language: tables and columns. Together, those are called a database schema and we must define it first.",source:"@site/docs/docs/Schema.md",sourceDirName:"docs",slug:"/docs/Schema",permalink:"/docs/Schema",draft:!1,editUrl:"https://github.com/nozbe/WatermelonDB/edit/master/docs-website/docs/docs/Schema.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/Setup"},next:{title:"Model",permalink:"/docs/Model"}},s={},d=[{value:"Defining a Schema",id:"defining-a-schema",level:2},{value:"Column types",id:"column-types",level:3},{value:"Naming conventions",id:"naming-conventions",level:3},{value:"Special columns",id:"special-columns",level:3},{value:"Modifying Schema",id:"modifying-schema",level:3},{value:"Indexing",id:"indexing",level:3},{value:"Advanced",id:"advanced",level:2},{value:"Unsafe SQL schema",id:"unsafe-sql-schema",level:3},{value:"Next steps",id:"next-steps",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema"},"Schema"),(0,o.kt)("p",null,"When using WatermelonDB, you're dealing with ",(0,o.kt)("strong",{parentName:"p"},"Models")," and ",(0,o.kt)("strong",{parentName:"p"},"Collections"),". However, underneath Watermelon sits an ",(0,o.kt)("strong",{parentName:"p"},"underlying database")," (SQLite or LokiJS) which speaks a different language: ",(0,o.kt)("strong",{parentName:"p"},"tables and columns"),". Together, those are called a ",(0,o.kt)("strong",{parentName:"p"},"database schema")," and we must define it first."),(0,o.kt)("h2",{id:"defining-a-schema"},"Defining a Schema"),(0,o.kt)("p",null,"Say you want Models ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment")," in your app. For each of those Models, you define a table. And for every field of a Model (e.g. name of the blog post, author of the comment) you define a column. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// model/schema.js\nimport { appSchema, tableSchema } from '@nozbe/watermelondb'\n\nexport const mySchema = appSchema({\n  version: 1,\n  tables: [\n    tableSchema({\n      name: 'posts',\n      columns: [\n        { name: 'title', type: 'string' },\n        { name: 'subtitle', type: 'string', isOptional: true },\n        { name: 'body', type: 'string' },\n        { name: 'is_pinned', type: 'boolean' },\n      ]\n    }),\n    tableSchema({\n      name: 'comments',\n      columns: [\n        { name: 'body', type: 'string' },\n        { name: 'post_id', type: 'string', isIndexed: true },\n      ]\n    }),\n  ]\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," It is database convention to use plural and snake_case names for table names. Column names are also snake_case. So ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," become ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createdAt")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at"),"."),(0,o.kt)("h3",{id:"column-types"},"Column types"),(0,o.kt)("p",null,"Columns have one of three types: ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,o.kt)("p",null,"Fields of those types will default to ",(0,o.kt)("inlineCode",{parentName:"p"},"''"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," respectively, if you create a record with a missing field."),(0,o.kt)("p",null,"To allow fields to be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", mark the column as ",(0,o.kt)("inlineCode",{parentName:"p"},"isOptional: true"),"."),(0,o.kt)("h3",{id:"naming-conventions"},"Naming conventions"),(0,o.kt)("p",null,"To add a relation to a table (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," where a ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment")," was published, or author of a comment), add a string column ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ name: 'post_id', type: 'string' },\n{ name: 'author_id', type: 'string' },\n")),(0,o.kt)("p",null,"Boolean columns should have names starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"is_"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ name: 'is_pinned', type: 'boolean' }\n")),(0,o.kt)("p",null,"Date fields should be ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," (dates are stored as Unix timestamps) and have names ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"_at"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ name: 'last_seen_at', type: 'number', isOptional: true }\n")),(0,o.kt)("h3",{id:"special-columns"},"Special columns"),(0,o.kt)("p",null,"All tables ",(0,o.kt)("em",{parentName:"p"},"automatically")," have a string column ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," (of ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type) to uniquely identify records -- therefore you cannot declare a column named ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," yourself. (There are also special ",(0,o.kt)("inlineCode",{parentName:"p"},"_status")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"_changed")," columns used for ",(0,o.kt)("a",{parentName:"p",href:"/docs/Sync/Intro"},"synchronization")," - you shouldn't touch them yourself)."),(0,o.kt)("p",null,"You can add special ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," columns to enable ",(0,o.kt)("a",{parentName:"p",href:"/docs/Advanced/CreateUpdateTracking"},"automatic create/update tracking"),"."),(0,o.kt)("h3",{id:"modifying-schema"},"Modifying Schema"),(0,o.kt)("p",null,"Watermelon cannot automatically detect Schema changes. Therefore, whenever you change the Schema, you must increment its version number (",(0,o.kt)("inlineCode",{parentName:"p"},"version:")," field)."),(0,o.kt)("p",null,"During early development, this is all you need to do - on app reload, this will cause the database to be cleared completely."),(0,o.kt)("p",null,"To seamlessly update the schema (without deleting user data), use ",(0,o.kt)("a",{parentName:"p",href:"/docs/Advanced/Migrations"},"Migrations"),"."),(0,o.kt)("p",null,"\u26a0\ufe0f Always use Migrations if you already shipped your app."),(0,o.kt)("h3",{id:"indexing"},"Indexing"),(0,o.kt)("p",null,"To enable database indexing, add ",(0,o.kt)("inlineCode",{parentName:"p"},"isIndexed: true")," to a column."),(0,o.kt)("p",null,"Indexing makes querying by a column faster, at the expense of create/update speed and database size."),(0,o.kt)("p",null,"For example, if you often query all comments belonging to a post (that is, query comments by its ",(0,o.kt)("inlineCode",{parentName:"p"},"post_id")," column), you should mark the ",(0,o.kt)("inlineCode",{parentName:"p"},"post_id")," column as indexed."),(0,o.kt)("p",null,"However, if you rarely query all comments by its author, indexing ",(0,o.kt)("inlineCode",{parentName:"p"},"author_id")," is probably not worth it."),(0,o.kt)("p",null,"In general, most ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," fields are indexed. Occasionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),' fields are worth indexing (but it\'s a "low quality index"). However, you should almost never index date (',(0,o.kt)("inlineCode",{parentName:"p"},"_at"),") columns or ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," columns. You definitely do not want to index long-form user text."),(0,o.kt)("p",null,'\u26a0\ufe0f Do not mark all columns as indexed to "make Watermelon faster". Indexing has a real performance cost and should be used only when appropriate.'),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("h3",{id:"unsafe-sql-schema"},"Unsafe SQL schema"),(0,o.kt)("p",null,"If you want to modify the SQL used to set up the SQLite database, you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeSql")," parameter\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"tableSchema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"appSchema"),". This parameter is a function that receives SQL generated by Watermelon,\nand you can return whatever you want - so you can append, prepend, replace parts of SQL, or return\nyour own SQL altogether. When passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"tableSchema"),", it receives SQL generated for just that table,\nand when to ",(0,o.kt)("inlineCode",{parentName:"p"},"appSchema")," - the entire schema SQL."),(0,o.kt)("p",null,"\u26a0\ufe0f  Note that SQL generated by WatermelonDB is not considered to be a stable API, so be careful about your transforms as they can break at any time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"appSchema({\n  ...\n  tables: [\n    tableSchema({\n      name: 'tasks',\n      columns: [...],\n      unsafeSql: sql => sql.replace(/create table [^)]+\\)/, '$& without rowid'),\n    }),\n  ],\n  unsafeSql: (sql, kind) => {\n    // Note that this function is called not just when first setting up the database\n    // Additionally, when running very large batches, all database indices may be dropped and later\n    // recreated as an optimization. More kinds may be added in the future.\n    switch (kind) {\n      case 'setup':\n        return `create blabla;${sql}`\n      case 'create_indices':\n      case 'drop_indices':\n        return sql\n      default:\n        throw new Error('unexpected unsafeSql kind')\n    }\n  },\n})\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\u27a1\ufe0f After you define your schema, go ahead and ",(0,o.kt)("a",{parentName:"p",href:"/docs/Model"},(0,o.kt)("strong",{parentName:"a"},"define your Models"))))}m.isMDXComponent=!0}}]);