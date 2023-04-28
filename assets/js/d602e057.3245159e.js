"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},s="Model",i={unversionedId:"docs/Model",id:"docs/Model",title:"Model",description:"A Model class represents a type of thing in your app. For example, Post, Comment, User.",source:"@site/docs/docs/Model.md",sourceDirName:"docs",slug:"/docs/Model",permalink:"/docs/Model",draft:!1,editUrl:"https://github.com/nozbe/WatermelonDB/edit/master/docs-website/docs/docs/Model.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Schema",permalink:"/docs/Schema"},next:{title:"Migrations",permalink:"/docs/Advanced/Migrations"}},l={},d=[{value:"Create a Model",id:"create-a-model",level:2},{value:"Associations",id:"associations",level:3},{value:"Add fields",id:"add-fields",level:2},{value:"Date fields",id:"date-fields",level:3},{value:"Derived fields",id:"derived-fields",level:3},{value:"To-one relation fields",id:"to-one-relation-fields",level:3},{value:"Children (to-many relation fields)",id:"children-to-many-relation-fields",level:3},{value:"Custom Queries",id:"custom-queries",level:3},{value:"Writer methods",id:"writer-methods",level:3},{value:"Advanced fields",id:"advanced-fields",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"model"},"Model"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Model")," class represents a type of thing in your app. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,o.kt)("p",null,"Before defining a Model, make sure you ",(0,o.kt)("a",{parentName:"p",href:"/docs/Schema"},"defined its schema"),"."),(0,o.kt)("h2",{id:"create-a-model"},"Create a Model"),(0,o.kt)("p",null,"Let's define the ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// model/Post.js\nimport { Model } from '@nozbe/watermelondb'\n\nexport default class Post extends Model {\n  static table = 'posts'\n}\n")),(0,o.kt)("p",null,"Specify the table name for this Model \u2014 the same you defined ",(0,o.kt)("a",{parentName:"p",href:"/docs/Schema"},"in the schema"),"."),(0,o.kt)("p",null,"Now add the new Model to ",(0,o.kt)("inlineCode",{parentName:"p"},"Database"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nimport Post from 'model/Post'\n\nconst database = new Database({\n  // ...\n  modelClasses: [Post],\n})\n")),(0,o.kt)("h3",{id:"associations"},"Associations"),(0,o.kt)("p",null,"Many models relate to one another. A ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," has many ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment"),"s. And every ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment")," belongs to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),". (Every relation is double-sided). Define those associations like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Post extends Model {\n  static table = 'posts'\n  static associations = {\n    comments: { type: 'has_many', foreignKey: 'post_id' },\n  }\n}\n\nclass Comment extends Model {\n  static table = 'comments'\n  static associations = {\n    posts: { type: 'belongs_to', key: 'post_id' },\n  }\n}\n")),(0,o.kt)("p",null,'On the "child" side (',(0,o.kt)("inlineCode",{parentName:"p"},"comments"),") you define a ",(0,o.kt)("inlineCode",{parentName:"p"},"belongs_to")," association, and pass a column name (key) that points to the parent (",(0,o.kt)("inlineCode",{parentName:"p"},"post_id")," is the ID of the post the comment belongs to)."),(0,o.kt)("p",null,'On the "parent" side (',(0,o.kt)("inlineCode",{parentName:"p"},"posts"),") you define an equivalent ",(0,o.kt)("inlineCode",{parentName:"p"},"has_many")," association and pass the same column name (\u26a0\ufe0f note that the name here is ",(0,o.kt)("inlineCode",{parentName:"p"},"foreignKey"),")."),(0,o.kt)("h2",{id:"add-fields"},"Add fields"),(0,o.kt)("p",null,"Next, define the Model's ",(0,o.kt)("em",{parentName:"p"},"fields")," (properties). Those correspond to ",(0,o.kt)("a",{parentName:"p",href:"/docs/Schema"},"table columns")," defined earlier in the schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { field, text } from '@nozbe/watermelondb/decorators'\n\nclass Post extends Model {\n  static table = 'posts'\n  static associations = {\n    comments: { type: 'has_many', foreignKey: 'post_id' },\n  }\n\n  @text('title') title\n  @text('body') body\n  @field('is_pinned') isPinned\n}\n")),(0,o.kt)("p",null,"Fields are defined using ES6 decorators. Pass ",(0,o.kt)("strong",{parentName:"p"},"column name")," you defined in Schema as the argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"@field"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Field types"),". Fields are guaranteed to be the same type (string/number/boolean) as the column type defined in Schema. If column is marked ",(0,o.kt)("inlineCode",{parentName:"p"},"isOptional: true"),", fields may also be null."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User text fields"),". For fields that contain arbitrary text specified by the user (e.g. names, titles, comment bodies), use ",(0,o.kt)("inlineCode",{parentName:"p"},"@text")," - a simple extension of ",(0,o.kt)("inlineCode",{parentName:"p"},"@field")," that also trims whitespace."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Why do I have to type the field/column name twice? The database convention is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case")," for names, and the JavaScript convention is to use camelCase. So for any multi-word name, the two differ. Also, for resiliency, we believe it's better to be explicit, because over time, you might want to refactor how you name your JavaScript field names, but column names must stay the same for backward compatibility."),(0,o.kt)("h3",{id:"date-fields"},"Date fields"),(0,o.kt)("p",null,"For date fields, use ",(0,o.kt)("inlineCode",{parentName:"p"},"@date")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"@field"),". This will return a JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," object (instead of Unix timestamp integer)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { date } from '@nozbe/watermelondb/decorators'\n\nclass Post extends Model {\n  // ...\n  @date('last_event_at') lastEventAt\n}\n")),(0,o.kt)("h3",{id:"derived-fields"},"Derived fields"),(0,o.kt)("p",null,"Use ES6 getters to define model properties that can be calculated based on database fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { field, text } from '@nozbe/watermelondb/decorators'\n\nclass Post extends Model {\n  static table = 'posts'\n\n  @date('archived_at') archivedAt\n\n  get isRecentlyArchived() {\n    // in the last 7 days\n    return this.archivedAt &&\n      this.archivedAt.getTime() > Date.now() - 7 * 24 * 3600 * 1000\n  }\n}\n")),(0,o.kt)("h3",{id:"to-one-relation-fields"},"To-one relation fields"),(0,o.kt)("p",null,"To point to a related record, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment")," belongs to, or author (",(0,o.kt)("inlineCode",{parentName:"p"},"User"),") of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"@relation")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@immutableRelation"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { relation, immutableRelation } from '@nozbe/watermelondb/decorators'\n\nclass Comment extends Model {\n  // ...\n  @relation('posts', 'post_id') post\n  @immutableRelation('users', 'author_id') author\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/Relation"},"Relation API")),(0,o.kt)("h3",{id:"children-to-many-relation-fields"},"Children (to-many relation fields)"),(0,o.kt)("p",null,"To point to a list of records that belong to this Model, e.g. all ",(0,o.kt)("inlineCode",{parentName:"p"},"Comment"),"s that belong to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Post"),", you can define a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"@children"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { children } from '@nozbe/watermelondb/decorators'\n\nclass Post extends Model {\n  static table = 'posts'\n  static associations = {\n    comments: { type: 'has_many', foreignKey: 'post_id' },\n  }\n\n  @children('comments') comments\n}\n")),(0,o.kt)("p",null,"Pass the ",(0,o.kt)("em",{parentName:"p"},"table name")," of the related records as an argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"@children"),". The resulting property will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," you can fetch, observe, or count."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You must define a ",(0,o.kt)("inlineCode",{parentName:"p"},"has_many")," association in ",(0,o.kt)("inlineCode",{parentName:"p"},"static associations")," for this to work"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/Query"},"Queries")),(0,o.kt)("h3",{id:"custom-queries"},"Custom Queries"),(0,o.kt)("p",null,"In addition to ",(0,o.kt)("inlineCode",{parentName:"p"},"@children"),", you can define custom Queries or extend existing ones, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { children } from '@nozbe/watermelondb/decorators'\nimport { Q } from '@nozbe/watermelondb'\n\nclass Post extends Model {\n  static table = 'posts'\n  static associations = {\n    comments: { type: 'has_many', foreignKey: 'post_id' },\n  }\n\n  @children('comments') comments\n  @lazy verifiedComments = this.comments.extend(\n    Q.where('is_verified', true)\n  )\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/Query"},"Queries")),(0,o.kt)("h3",{id:"writer-methods"},"Writer methods"),(0,o.kt)("p",null,"Define ",(0,o.kt)("strong",{parentName:"p"},"writers")," to simplify creating and updating records, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { writer } from '@nozbe/watermelondb/decorators'\n\nclass Comment extends Model {\n  static table = 'comments'\n\n  @field('is_spam') isSpam\n\n  @writer async markAsSpam() {\n    await this.update(comment => {\n      comment.isSpam = true\n    })\n  }\n}\n")),(0,o.kt)("p",null,"Methods must be marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"@writer")," to be able to modify the database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/Writers"},"Writers")),(0,o.kt)("h2",{id:"advanced-fields"},"Advanced fields"),(0,o.kt)("p",null,"You can also use these decorators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@json")," for complex serialized data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@readonly")," to make the field read-only"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@nochange")," to disallow changes to the field ",(0,o.kt)("em",{parentName:"li"},"after the first creation"))),(0,o.kt)("p",null,"And you can make observable compound properties using RxJS..."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/Advanced/AdvancedFields"},"Advanced fields")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\u27a1\ufe0f After you define some Models, learn the ",(0,o.kt)("a",{parentName:"p",href:"/docs/CRUD"},(0,o.kt)("strong",{parentName:"a"},"Create / Read / Update / Delete API"))))}m.isMDXComponent=!0}}]);