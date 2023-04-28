"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={title:"Querying",hide_title:!0},r="Query API",l={unversionedId:"docs/Query",id:"docs/Query",title:"Querying",description:"Querying is how you find records that match certain conditions, for example:",source:"@site/docs/docs/Query.md",sourceDirName:"docs",slug:"/docs/Query",permalink:"/docs/Query",draft:!1,editUrl:"https://github.com/nozbe/WatermelonDB/edit/master/docs-website/docs/docs/Query.md",tags:[],version:"current",frontMatter:{title:"Querying",hide_title:!0},sidebar:"docs",previous:{title:"Connecting Components",permalink:"/docs/Components"},next:{title:"Writers, Readers, Batching",permalink:"/docs/Writers"}},s={},u=[{value:"Defining Queries",id:"defining-queries",level:2},{value:"@children",id:"children",level:3},{value:"Extended Query",id:"extended-query",level:3},{value:"Custom Queries",id:"custom-queries",level:3},{value:"Executing Queries",id:"executing-queries",level:2},{value:"Fetch",id:"fetch",level:4},{value:"Query conditions",id:"query-conditions",level:2},{value:"Empty query",id:"empty-query",level:4},{value:"Multiple conditions",id:"multiple-conditions",level:4},{value:"Conditions with other operators",id:"conditions-with-other-operators",level:3},{value:"LIKE / NOT LIKE",id:"like--not-like",level:3},{value:"AND/OR nesting",id:"andor-nesting",level:3},{value:"Conditions on related tables (&quot;JOIN queries&quot;)",id:"conditions-on-related-tables-join-queries",level:3},{value:"Multiple conditions on a related table",id:"multiple-conditions-on-a-related-table",level:4},{value:"Nesting <code>Q.on</code> within AND/OR",id:"nesting-qon-within-andor",level:4},{value:"Deep <code>Q.on</code>s",id:"deep-qons",level:4},{value:"Advanced Queries",id:"advanced-queries",level:2},{value:"Advanced observing",id:"advanced-observing",level:3},{value:"Count throttling",id:"count-throttling",level:4},{value:"Column comparisons",id:"column-comparisons",level:3},{value:"sortBy, take, skip",id:"sortby-take-skip",level:3},{value:"Fetch IDs",id:"fetch-ids",level:3},{value:"Security",id:"security",level:3},{value:"Unsafe SQL queries",id:"unsafe-sql-queries",level:3},{value:"Unsafe fetch raw",id:"unsafe-fetch-raw",level:3},{value:"Unsafe SQL/Loki expressions",id:"unsafe-sqlloki-expressions",level:3},{value:"Multi-table column comparisons and <code>Q.unsafeLokiTransform</code>",id:"multi-table-column-comparisons-and-qunsafelokitransform",level:3},{value:"<code>null</code> behavior",id:"null-behavior",level:3},{value:"Contributing improvements to Watermelon query language",id:"contributing-improvements-to-watermelon-query-language",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query-api"},"Query API"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Querying")," is how you find records that match certain conditions, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find all comments that belong to a certain post"),(0,i.kt)("li",{parentName:"ul"},"Find all ",(0,i.kt)("em",{parentName:"li"},"verified")," comments made by John"),(0,i.kt)("li",{parentName:"ul"},"Count all verified comments made by John or Lucy published under posts made in the last two weeks")),(0,i.kt)("p",null,"Because queries are executed on the database, and not in JavaScript, they're really fast. It's also how Watermelon can be fast even at large scales, because even with tens of thousands of records ",(0,i.kt)("em",{parentName:"p"},"total"),", you rarely need to load more than a few dozen records at app launch."),(0,i.kt)("h2",{id:"defining-queries"},"Defining Queries"),(0,i.kt)("h3",{id:"children"},"@children"),(0,i.kt)("p",null,"The simplest query is made using ",(0,i.kt)("inlineCode",{parentName:"p"},"@children"),". This defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," for all comments that belong to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Post"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Post extends Model {\n  // ...\n  @children('comments') comments\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Model"},"Defining Models")),(0,i.kt)("h3",{id:"extended-query"},"Extended Query"),(0,i.kt)("p",null,"To ",(0,i.kt)("strong",{parentName:"p"},"narrow down")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," (add ",(0,i.kt)("a",{parentName:"p",href:"#query-conditions"},"extra conditions")," to an existing Query), use ",(0,i.kt)("inlineCode",{parentName:"p"},".extend()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Q } from '@nozbe/watermelondb'\nimport { children, lazy } from '@nozbe/watermelondb/decorators'\n\nclass Post extends Model {\n  // ...\n  @children('comments') comments\n\n  @lazy verifiedComments = this.comments.extend(\n    Q.where('is_verified', true)\n  )\n\n  @lazy verifiedAwesomeComments = this.verifiedComments.extend(\n    Q.where('is_awesome', true)\n  )\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Use ",(0,i.kt)("inlineCode",{parentName:"p"},"@lazy")," when extending or defining new Queries for performance"),(0,i.kt)("h3",{id:"custom-queries"},"Custom Queries"),(0,i.kt)("p",null,"You can query any table like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Q } from '@nozbe/watermelondb'\n\nconst users = await database.get('users').query(\n  // conditions that a user must match:\n  Q.on('comments', 'post_id', somePostId)\n).fetch()\n")),(0,i.kt)("p",null,"This fetches all users that made a comment under a post with ",(0,i.kt)("inlineCode",{parentName:"p"},"id = somePostId"),"."),(0,i.kt)("p",null,"You can define custom queries on a Model like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Post extends Model {\n  // ...\n  @lazy commenters = this.collections.get('users').query(\n    Q.on('comments', 'post_id', this.id)\n  )\n}\n")),(0,i.kt)("h2",{id:"executing-queries"},"Executing Queries"),(0,i.kt)("p",null,"Most of the time, you execute Queries by connecting them to React Components like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"withObservables(['post'], ({ post }) => ({\n  post,\n  comments: post.comments,\n  verifiedCommentCount: post.verifiedComments.observeCount(),\n}))\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u27a1\ufe0f Learn more:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Components"},"Connecting to Components")),(0,i.kt)("h4",{id:"fetch"},"Fetch"),(0,i.kt)("p",null,"To simply get the current list or current count (without observing future changes), use ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCount"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const comments = await post.comments.fetch()\nconst verifiedCommentCount = await post.verifiedComments.fetchCount()\n\n// Shortcut syntax:\nconst comments = await post.comments\nconst verifiedCommentCount = await post.verifiedComments.count\n")),(0,i.kt)("h2",{id:"query-conditions"},"Query conditions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Q } from '@nozbe/watermelondb'\n// ...\ndatabase.get('comments').query(\n  Q.where('is_verified', true)\n)\n")),(0,i.kt)("p",null,"This will query ",(0,i.kt)("strong",{parentName:"p"},"all")," comments that are verified (all comments with one condition: the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_verified")," column of a comment must be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("p",null,"When making conditions, you refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/Schema"},(0,i.kt)("strong",{parentName:"a"},"column names"))," of a table (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"is_verified"),", not ",(0,i.kt)("inlineCode",{parentName:"p"},"isVerified"),"). This is because queries are executed directly on the underlying database."),(0,i.kt)("p",null,"The second argument is the value we want to query for. Note that the passed argument must be the same type as the column (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," is allowed only if the column is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"isOptional: true")," in the schema)."),(0,i.kt)("h4",{id:"empty-query"},"Empty query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const allComments = await database.get('comments').query().fetch()\n")),(0,i.kt)("p",null,"A Query with no conditions will find ",(0,i.kt)("strong",{parentName:"p"},"all")," records in the collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Don't do this unless necessary. It's generally more efficient to only query the exact records you need."),(0,i.kt)("h4",{id:"multiple-conditions"},"Multiple conditions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"database.get('comments').query(\n  Q.where('is_verified', true),\n  Q.where('is_awesome', true)\n)\n")),(0,i.kt)("p",null,"This queries all comments that are ",(0,i.kt)("strong",{parentName:"p"},"both")," verified ",(0,i.kt)("strong",{parentName:"p"},"and")," awesome."),(0,i.kt)("h3",{id:"conditions-with-other-operators"},"Conditions with other operators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Query"),(0,i.kt)("th",{parentName:"tr",align:null},"JavaScript equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('is_verified', true)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"is_verified === true")," (shortcut syntax)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('is_verified', Q.eq(true))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"is_verified === true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('archived_at', Q.notEq(null))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"archived_at !== null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('likes', Q.gt(0))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"likes > 0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('likes', Q.weakGt(0))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"likes > 0")," (slightly different semantics \u2014 ",(0,i.kt)("a",{parentName:"td",href:"#null-behavior"},'see "null behavior"')," for details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('likes', Q.gte(100))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"likes >= 100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('dislikes', Q.lt(100))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dislikes < 100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('dislikes', Q.lte(100))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dislikes <= 100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('likes', Q.between(10, 100))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"likes >= 10 && likes <= 100"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('status', Q.oneOf(['published', 'draft']))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['published', 'draft'].includes(status)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('status', Q.notIn(['archived', 'deleted']))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status !== 'archived' && status !== 'deleted'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('status', Q.like('%bl_sh%'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/.*bl.sh.*/i")," (See note below!)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('status', Q.notLike('%bl_sh%'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/^((!?.*bl.sh.*).)*$/i")," (Inverse regex match) (See note below!)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Q.where('status', Q.includes('promoted'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status.includes('promoted')"))))),(0,i.kt)("h3",{id:"like--not-like"},"LIKE / NOT LIKE"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.like"),' for search-related tasks. For example, to find all users whose username start with "jas" (case-insensitive) you can write'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'usersCollection.query(\n  Q.where("username", Q.like(`${Q.sanitizeLikeString("jas")}%`)\n)\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},'"jas"')," can be changed dynamically with user input."),(0,i.kt)("p",null,"Note that the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.like")," is not exact and can differ somewhat between implementations (SQLite vs LokiJS). For instance, while the comparison is case-insensitive, SQLite cannot by default compare non-ASCII characters case-insensitively (unless you install ICU extension). Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.like")," for user input search, but not for tasks that require a precise matching behavior."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," It's NOT SAFE to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.like")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.notLike")," with user input directly, because special characters like ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," are not escaped. Always sanitize user input like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Q.like(`%${Q.sanitizeLikeString(userInput)}%`)\nQ.notLike(`%${Q.sanitizeLikeString(userInput)}%`)\n")),(0,i.kt)("h3",{id:"andor-nesting"},"AND/OR nesting"),(0,i.kt)("p",null,"You can nest multiple conditions using ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.or"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"database.get('comments').query(\n  Q.where('archived_at', Q.notEq(null)),\n  Q.or(\n    Q.where('is_verified', true),\n    Q.and(\n      Q.where('likes', Q.gt(10)),\n      Q.where('dislikes', Q.lt(5))\n    )\n  )\n)\n")),(0,i.kt)("p",null,"This is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"archivedAt !== null && (isVerified || (likes > 10 && dislikes < 5))"),"."),(0,i.kt)("h3",{id:"conditions-on-related-tables-join-queries"},'Conditions on related tables ("JOIN queries")'),(0,i.kt)("p",null,"For example: query all comments under posts published by John:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Shortcut syntax:\ndatabase.get('comments').query(\n  Q.on('posts', 'author_id', john.id),\n)\n\n// Full syntax:\ndatabase.get('comments').query(\n  Q.on('posts', Q.where('author_id', Q.eq(john.id))),\n)\n")),(0,i.kt)("p",null,"Normally you set conditions on the table you're querying. Here we're querying ",(0,i.kt)("strong",{parentName:"p"},"comments"),", but we have a condition on the ",(0,i.kt)("strong",{parentName:"p"},"post")," the comment belongs to."),(0,i.kt)("p",null,"The first argument for ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on")," is the table name you're making a condition on. The other two arguments are same as for ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The two tables ",(0,i.kt)("a",{parentName:"p",href:"/docs/Model"},"must be associated")," before you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on"),"."),(0,i.kt)("h4",{id:"multiple-conditions-on-a-related-table"},"Multiple conditions on a related table"),(0,i.kt)("p",null,"For example: query all comments under posts that are written by John ",(0,i.kt)("em",{parentName:"p"},"and")," are either published or belong to ",(0,i.kt)("inlineCode",{parentName:"p"},"draftBlog")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"database.get('comments').query(\n  Q.on('posts', [\n    Q.where('author_id', john.id)\n    Q.or(\n      Q.where('published', true),\n      Q.where('blog_id', draftBlog.id),\n    )\n  ]),\n)\n")),(0,i.kt)("p",null,"Instead of an array of conditions, you can also pass ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.and"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.or"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on")," as the second argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on"),"."),(0,i.kt)("h4",{id:"nesting-qon-within-andor"},"Nesting ",(0,i.kt)("inlineCode",{parentName:"h4"},"Q.on")," within AND/OR"),(0,i.kt)("p",null,"If you want to place ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on")," nested within ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.or"),", you must explicitly define all tables you're joining on. (NOTE: The ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.experimentalJoinTables")," API is subject to change)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tasksCollection.query(\n  Q.experimentalJoinTables(['projects']),\n  Q.or(\n    Q.where('is_followed', true),\n    Q.on('projects', 'is_followed', true),\n  ),\n)\n")),(0,i.kt)("h4",{id:"deep-qons"},"Deep ",(0,i.kt)("inlineCode",{parentName:"h4"},"Q.on"),"s"),(0,i.kt)("p",null,"You can also nest ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on")," within ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.on"),", e.g. to make a condition on a grandparent. You must explicitly define the tables you're joining on. (NOTE: The ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.experimentalNestedJoin")," API is subject to change). Multiple levels of nesting are allowed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// this queries tasks that are inside projects that are inside teams where team.foo == 'bar'\ntasksCollection.query(\n  Q.experimentalNestedJoin('projects', 'teams'),\n  Q.on('projects', Q.on('teams', 'foo', 'bar')),\n)\n")),(0,i.kt)("h2",{id:"advanced-queries"},"Advanced Queries"),(0,i.kt)("h3",{id:"advanced-observing"},"Advanced observing"),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"query.observeWithColumns(['foo', 'bar'])")," to create an Observable that emits a value not only when the list of matching records changes (new records/deleted records), but also when any of the matched records changes its ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," column. ",(0,i.kt)("a",{parentName:"p",href:"/docs/Components"},"Use this for observing sorted lists")),(0,i.kt)("h4",{id:"count-throttling"},"Count throttling"),(0,i.kt)("p",null,"By default, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"query.observeCount()")," returns an Observable that is throttled to emit at most once every 250ms. You can disable throttling using ",(0,i.kt)("inlineCode",{parentName:"p"},"query.observeCount(false)"),"."),(0,i.kt)("h3",{id:"column-comparisons"},"Column comparisons"),(0,i.kt)("p",null,"This queries comments that have more likes than dislikes. Note that we're comparing ",(0,i.kt)("inlineCode",{parentName:"p"},"likes")," column to another column instead of a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"database.get('comments').query(\n  Q.where('likes', Q.gt(Q.column('dislikes')))\n)\n")),(0,i.kt)("h3",{id:"sortby-take-skip"},"sortBy, take, skip"),(0,i.kt)("p",null,"You can use these clauses to sort the query by one or more columns. Note that only simple ascending/descending criteria for columns are supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"database.get('comments').query(\n  // sorts by number of likes from the most likes to the fewest\n  Q.sortBy('likes', Q.desc),\n  // if two comments have the same number of likes, the one with fewest dislikes will be at the top\n  Q.sortBy('dislikes', Q.asc),\n  // limit number of comments to 100, skipping the first 50\n  Q.skip(50),\n  Q.take(100),\n)\n")),(0,i.kt)("p",null,"It isn't ",(0,i.kt)("em",{parentName:"p"},"necessarily")," better or more efficient to sort on query level instead of in JavaScript, ",(0,i.kt)("strong",{parentName:"p"},"however")," the most important use case for ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.sortBy")," is when used alongside ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.skip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.take")," to implement paging - to limit the number of records loaded from database to memory on very long lists"),(0,i.kt)("h3",{id:"fetch-ids"},"Fetch IDs"),(0,i.kt)("p",null,"If you only need IDs of records matching a query, you can optimize the query by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"await query.fetchIds()")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"await query.fetch()")),(0,i.kt)("h3",{id:"security"},"Security"),(0,i.kt)("p",null,"Remember that Queries are a sensitive subject, security-wise. Never trust user input and pass it directly into queries. In particular:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Never pass into queries values you don't know for sure are the right type (e.g. value passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"Q.eq()")," should be a string, number, boolean, or null -- but not an Object. If the value comes from JSON, you must validate it before passing it!)"),(0,i.kt)("li",{parentName:"ul"},"Never pass column names (without whitelisting) from user input"),(0,i.kt)("li",{parentName:"ul"},"Values passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"oneOf"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"notIn")," should be arrays of simple types - be careful they don't contain objects"),(0,i.kt)("li",{parentName:"ul"},"Do not use ",(0,i.kt)("inlineCode",{parentName:"li"},"Q.like")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"Q.notLike")," without ",(0,i.kt)("inlineCode",{parentName:"li"},"Q.sanitizeLikeString")),(0,i.kt)("li",{parentName:"ul"},"Do not use ",(0,i.kt)("inlineCode",{parentName:"li"},"unsafe raw queries")," without knowing what you're doing and sanitizing all user input")),(0,i.kt)("h3",{id:"unsafe-sql-queries"},"Unsafe SQL queries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const records = await database.get('comments').query(\n  Q.unsafeSqlQuery(`select * from comments where foo is not ? and _status is not 'deleted'`, ['bar'])\n).fetch()\n\nconst recordCount = await database.get('comments').query(\n  Q.unsafeSqlQuery(`select count(*) as count from comments where foo is not ? and _status is not 'deleted'`, ['bar'])\n).fetchCount()\n")),(0,i.kt)("p",null,"You can also observe unsafe raw SQL queries, however, if it contains ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," statements, you must explicitly specify all other tables using ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.experimentalJoinTables")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.experimentalNestedJoin"),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const records = await database.get('comments').query(\n  Q.experimentalJoinTables(['posts']),\n  Q.experimentalNestedJoin('posts', 'blogs'),\n  Q.unsafeSqlQuery(\n    'select comments.* from comments ' +\n      'left join posts on comments.post_id is posts.id ' +\n      'left join blogs on posts.blog_id is blogs.id' +\n      'where ...',\n  ),\n).observe()\n")),(0,i.kt)("p",null,"\u26a0\ufe0f Please note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not use this if you don't know what you're doing"),(0,i.kt)("li",{parentName:"ul"},"Do not pass user input directly to avoid SQL Injection - use ",(0,i.kt)("inlineCode",{parentName:"li"},"?")," placeholders and pass array of placeholder values"),(0,i.kt)("li",{parentName:"ul"},"You must filter out deleted record using ",(0,i.kt)("inlineCode",{parentName:"li"},"where _status is not 'deleted'")," clause"),(0,i.kt)("li",{parentName:"ul"},"If you're going to fetch count of the query, use ",(0,i.kt)("inlineCode",{parentName:"li"},"count(*) as count")," as the select result")),(0,i.kt)("h3",{id:"unsafe-fetch-raw"},"Unsafe fetch raw"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},".fetch()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".fetchIds()"),", there is also ",(0,i.kt)("inlineCode",{parentName:"p"},".unsafeFetchRaw()"),". Instead of returning an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," class instances, it returns an array of raw objects."),(0,i.kt)("p",null,"You can use it as an unsafe optimization, or alongside ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.unsafeSqlQuery"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Q.unsafeLokiTransform")," to create an advanced query that either skips fetching unnecessary columns or includes extra computed columns. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const rawData = await database.get('posts').query(\n  Q.unsafeSqlQuery(\n    'select posts.text1, count(tag_assignments.id) as tag_count, sum(tag_assignments.rank) as tag_rank from posts' +\n      ' left join tag_assignments on posts.id = tag_assignments.post_id' +\n      ' group by posts.id' +\n      ' order by posts.position desc',\n  )\n).unsafeFetchRaw()\n")),(0,i.kt)("p",null,"\u26a0\ufe0f You MUST NOT mutate returned objects. Doing so will corrupt the database."),(0,i.kt)("h3",{id:"unsafe-sqlloki-expressions"},"Unsafe SQL/Loki expressions"),(0,i.kt)("p",null,"You can also include smaller bits of SQL and Loki expressions so that you can still use as much of Watermelon query builder as possible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// SQL example:\npostsCollection.query(\n  Q.where('is_published', true),\n  Q.unsafeSqlExpr('tasks.num1 not between 1 and 5'),\n)\n\n// LokiJS example:\npostsCollection.query(\n  Q.where('is_published', true),\n  Q.unsafeLokiExpr({ text1: { $contains: 'hey' } })\n)\n")),(0,i.kt)("p",null,"For SQL, be sure to prefix column names with table name when joining with other tables."),(0,i.kt)("p",null,"\u26a0\ufe0f Please do not use this if you don't know what you're doing. Do not pass user input directly to avoid SQL injection."),(0,i.kt)("h3",{id:"multi-table-column-comparisons-and-qunsafelokitransform"},"Multi-table column comparisons and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Q.unsafeLokiTransform")),(0,i.kt)("p",null,"Example: we want to query comments posted more than 14 days after the post it belongs to was published."),(0,i.kt)("p",null,"There's sadly no built-in syntax for this, but can be worked around using unsafe expressions like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// SQL example:\ncommentsCollection.query(\n  Q.on('posts', 'published_at', Q.notEq(null)),\n  Q.unsafeSqlExpr(`comments.createad_at > posts.published_at + ${14 * 24 * 3600 * 1000}`)\n)\n\n// LokiJS example:\ncommentsCollection.query(\n  Q.on('posts', 'published_at', Q.notEq(null)),\n  Q.unsafeLokiTransform((rawRecords, loki) => {\n    return rawRecords.filter(rawRecord => {\n      const post = loki.getCollection('posts').by('id', rawRecord.post_id)\n      return post && rawRecord.created_at > post.published_at + 14 * 24 * 3600 * 1000\n    })\n  }),\n)\n")),(0,i.kt)("p",null,"For LokiJS, remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"rawRecord")," is an unsanitized, unsafe object and must not be mutated. ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.unsafeLokiTransform")," only works when using ",(0,i.kt)("inlineCode",{parentName:"p"},"LokiJSAdapter")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"useWebWorkers: false"),". There can only be one ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.unsafeLokiTransform")," clause per query."),(0,i.kt)("h3",{id:"null-behavior"},(0,i.kt)("inlineCode",{parentName:"h3"},"null")," behavior"),(0,i.kt)("p",null,"There are some gotchas you should be aware of. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.gt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gte"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lte"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"notIn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"like")," operators match the semantics of SQLite in terms of how they treat ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". Those are different from JavaScript."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rule of thumb:")," No null comparisons are allowed."),(0,i.kt)("p",null,"For example, if you query ",(0,i.kt)("inlineCode",{parentName:"p"},"comments")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where('likes', Q.lt(10))"),", a comment with 8 likes and 0 likes will be included, but a comment with ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," likes will not! In Watermelon queries, ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," is not less than any number. That's why you should avoid ",(0,i.kt)("a",{parentName:"p",href:"/docs/Schema"},"making table columns optional")," unless you actually need it."),(0,i.kt)("p",null,"Similarly, if you query with a column comparison, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where('likes', Q.gt(Q.column('dislikes')))"),", only comments where both ",(0,i.kt)("inlineCode",{parentName:"p"},"likes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dislikes")," are not null will be compared. A comment with 5 likes and ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," dislikes will NOT be included. 5 is not greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," here."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Q.oneOf")," operator"),": It is not allowed to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as an argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.oneOf"),". Instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.oneOf([null, 'published', 'draft'])")," you need to explicitly allow ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a value like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"postsCollection.query(\n  Q.or(\n    Q.where('status', Q.oneOf(['published', 'draft'])),\n    Q.where('status', null)\n  )\n)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Q.notIn")," operator"),": If you query, say, posts with ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where('status', Q.notIn(['published', 'draft']))"),", it will match posts with a status different than ",(0,i.kt)("inlineCode",{parentName:"p"},"published")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"draft"),", however, it will NOT match posts with ",(0,i.kt)("inlineCode",{parentName:"p"},"status == null"),". If you want to include such posts, query for that explicitly like with the example above."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Q.weakGt")," operator"),": This is weakly typed version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.gt"),"\xa0\u2014 one that allows null comparisons. So if you query ",(0,i.kt)("inlineCode",{parentName:"p"},"comments")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Q.where('likes', Q.weakGt(Q.column('dislikes')))"),", it WILL match comments with 5 likes and ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," dislikes. (For ",(0,i.kt)("inlineCode",{parentName:"p"},"weakGt"),", unlike standard operators, any number is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h2",{id:"contributing-improvements-to-watermelon-query-language"},"Contributing improvements to Watermelon query language"),(0,i.kt)("p",null,"Here are files that are relevant. This list may look daunting, but adding new matchers is actually quite simple and multiple first-time contributors made these improvements (including like, sort, take, skip). The implementation is just split into multiple files (and their test files), but when you look at them, it'll be easy to add matchers by analogy."),(0,i.kt)("p",null,"We recommend starting from writing tests first to check expected behavior, then implement the actual behavior."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/QueryDescription/test.js")," - Test clause builder (",(0,i.kt)("inlineCode",{parentName:"li"},"Q.myThing"),") output and test that it rejects bad/unsafe parameters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/QueryDescription/index.js")," - Add clause builder and type definition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/__tests__/databaseTests.js"),' - Add test ("join" if it requires conditions on related tables; "match" otherwise) that checks that the new clause matches expected records. From this, tests running against SQLite, LokiJS, and Matcher are generated. (If one of those is not supported, add ',(0,i.kt)("inlineCode",{parentName:"li"},"skip{Loki,Sql,Count,Matcher}: true")," to your test)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/adapters/sqlite/encodeQuery/test.js")," - Test that your query generates SQL you expect. (If your clause is Loki-only, test that error is thrown)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/adapters/sqlite/encodeQuery/index.js")," - Generate SQL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/adapters/lokijs/worker/encodeQuery/test.js")," - Test that your query generates the Loki query you expect (If your clause is SQLite-only, test that an error is thrown)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/adapters/lokijs/worker/encodeQuery/index.js")," - Generate Loki query"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/adapters/lokijs/worker/{performJoins/*.js,executeQuery.js}")," - May be relevant for some Loki queries, but most likely you don't need to look here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/observation/encodeMatcher/"),' - If your query can be checked against a record in JavaScript (e.g. you\'re adding new "by regex" matcher), implement this behavior here (',(0,i.kt)("inlineCode",{parentName:"li"},"index.js"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"operators.js"),'). This is used for efficient "simple observation". You don\'t need to write tests - ',(0,i.kt)("inlineCode",{parentName:"li"},"databaseTests")," are used automatically. If you can't or won't implement encodeMatcher for your query, add a check to ",(0,i.kt)("inlineCode",{parentName:"li"},"canEncode.js")," so that it returns ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),' for your query (Less efficient "reloading observation" will be used then). Add your query to ',(0,i.kt)("inlineCode",{parentName:"li"},"test.js"),'\'s "unencodable queries" then.')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"\u27a1\ufe0f Now that you've mastered Queries, ",(0,i.kt)("a",{parentName:"p",href:"/docs/Relation"},(0,i.kt)("strong",{parentName:"a"},"make more Relations"))))}p.isMDXComponent=!0}}]);