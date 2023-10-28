(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var r=classNames.apply(null,n);r&&e.push(r)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)s.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(n=(function(){return classNames}).apply(t,[]))&&(e.exports=n)}()},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(3402)}])},2950:function(e,t,n){"use strict";var s=n(5893);t.Z=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"container mx-auto px-5",children:t})}},1272:function(e,t,n){"use strict";n.d(t,{Z:function(){return layout}});var s=n(5893),i=n(9008),r=n.n(i),meta=()=>(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"Countdown to AM WINTER SUMMIT 2023. Based on next-js blog-example"})]}),layout=e=>{let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(meta,{}),(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:t})})]})}},3402:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return Post}});var s=n(5893),i=n(1163),r=n(2918),a=n.n(r),o=n(2950),l=n(5969),c=n.n(l),post_body=e=>{let{content:t}=e;return(0,s.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,s.jsx)("div",{className:c().markdown,dangerouslySetInnerHTML:{__html:t}})})},m=n(1664),x=n.n(m),header=()=>(0,s.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,s.jsx)(x(),{href:"/",className:"hover:underline",children:"BACK"}),"."]}),d=n(4184),u=n.n(d),h=n(5675),f=n.n(h),cover_image=e=>{let{title:t,src:n,slug:i}=e,r=(0,s.jsx)(f(),{src:"amadvent_pub/".concat(n),alt:t,className:u()("shadow-sm w-full",{"hover:shadow-lg transition-shadow duration-200":i}),width:1300,height:630});return(0,s.jsx)("div",{className:"sm:mx-0",children:i?(0,s.jsx)(x(),{as:"/posts/".concat(i),href:"/posts/[slug]","aria-label":t,children:r}):r})},post_title=e=>{let{children:t}=e;return(0,s.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})},post_header=e=>{let{title:t,coverImage:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(post_title,{children:t}),(0,s.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,s.jsx)(cover_image,{title:t,src:n})})]})},p=n(1272),g=n(9008),j=n.n(g),v=!0;function Post(e){let{post:t}=e,n=(0,i.useRouter)(),r=t.title;return n.isFallback||(null==t?void 0:t.slug)?(0,s.jsx)(p.Z,{children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(header,{}),n.isFallback?(0,s.jsx)(post_title,{children:"Loading…"}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("article",{className:"mb-32",children:[(0,s.jsxs)(j(),{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,s.jsx)(post_header,{title:t.title,coverImage:t.coverImage}),(0,s.jsx)(post_body,{content:t.content})]})})]})}):(0,s.jsx)(a(),{statusCode:404})}},5969:function(e){e.exports={markdown:"markdown-styles_markdown__HwUWZ"}},2918:function(e,t,n){e.exports=n(6908)},1163:function(e,t,n){e.exports=n(9974)}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);