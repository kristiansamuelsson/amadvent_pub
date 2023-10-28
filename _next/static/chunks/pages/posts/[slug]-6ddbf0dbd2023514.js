(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=classNames.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(n=(function(){return classNames}).apply(t,[]))&&(e.exports=n)}()},592:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(3402)}])},2950:function(e,t,n){"use strict";var r=n(5893);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},1272:function(e,t,n){"use strict";n.d(t,{Z:function(){return layout}});var r=n(5893),o=n(9008),l=n.n(o),meta=()=>(0,r.jsxs)(l(),{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"Countdown to AM WINTER SUMMIT 2023. Based on next-js blog-example"})]}),layout=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(meta,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:t})})]})}},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",l="navigate",a="restore",i="server-patch",s="prefetch",c="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(8754),o=r._(n(7294)),l=n(4450),a=n(2227),i=n(4364),s=n(109),c=n(3607),u=n(1823),f=n(9031),d=n(920),p=n(30),h=n(7192),m=n(7498),g=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(g.has(l))return;g.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let n,r;let{href:i,as:g,children:x,prefetch:v=null,passHref:j,replace:_,shallow:b,scroll:y,locale:O,onClick:k,onMouseEnter:N,onTouchStart:C,legacyBehavior:E=!1,...P}=e;n=x,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let T=o.default.useContext(u.RouterContext),w=o.default.useContext(f.AppRouterContext),I=null!=T?T:w,M=!T,S=!1!==v,R=null===v?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:A,as:L}=o.default.useMemo(()=>{if(!T){let e=formatStringOrUrl(i);return{href:e,as:g?formatStringOrUrl(g):e}}let[e,t]=(0,l.resolveHref)(T,i,!0);return{href:e,as:g?(0,l.resolveHref)(T,g):t||e}},[T,i,g]),U=o.default.useRef(A),F=o.default.useRef(L);E&&(r=o.default.Children.only(n));let H=E?r&&"object"==typeof r&&r.ref:t,[K,D,Z]=(0,d.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(F.current!==L||U.current!==A)&&(Z(),F.current=L,U.current=A),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[L,H,A,Z,K]);o.default.useEffect(()=>{I&&D&&S&&prefetch(I,A,L,{locale:O},{kind:R},M)},[L,A,D,O,S,null==T?void 0:T.locale,I,M,R]);let B={ref:z,onClick(e){E||"function"!=typeof k||k(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,l,i,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:c,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};u?o.default.startTransition(navigate):navigate()}(e,I,A,L,_,b,y,O,M,S)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(S||!M)&&prefetch(I,A,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:R},M)},onTouchStart(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(S||!M)&&prefetch(I,A,L,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:R},M)}};if((0,s.isAbsoluteUrl)(L))B.href=L;else if(!E||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);B.href=t||(0,h.addBasePath)((0,c.addLocale)(L,e,null==T?void 0:T.defaultLocale))}return E?o.default.cloneElement(r,B):o.default.createElement("a",{...P,...B},n)}),v=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),l="function"==typeof IntersectionObserver,a=new Map,i=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,u,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,u,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3402:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return Post}});var r=n(5893),o=n(1163),l=n(2918),a=n.n(l),i=n(2950),s=n(5969),c=n.n(s),post_body=e=>{let{content:t}=e;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:c().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=n(1664),f=n.n(u),header=()=>(0,r.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[(0,r.jsx)(f(),{href:"/",className:"hover:underline",children:"BACK"}),"."]}),d=n(4184),p=n.n(d),h=n(5675),m=n.n(h),cover_image=e=>{let{title:t,src:n,slug:o}=e,l=(0,r.jsx)(m(),{src:n,alt:"Cover Image for ".concat(t),className:p()("shadow-sm w-full",{"hover:shadow-lg transition-shadow duration-200":o}),width:1300,height:630});return(0,r.jsx)("div",{className:"sm:mx-0",children:o?(0,r.jsx)(f(),{as:"/posts/".concat(o),href:"/posts/[slug]","aria-label":t,children:l}):l})},post_title=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})},post_header=e=>{let{title:t,coverImage:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(post_title,{children:t}),(0,r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,r.jsx)(cover_image,{title:t,src:n})})]})},g=n(1272),x=n(9008),v=n.n(x),j=!0;function Post(e){let{post:t}=e,n=(0,o.useRouter)(),l=t.title;return n.isFallback||(null==t?void 0:t.slug)?(0,r.jsx)(g.Z,{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(header,{}),n.isFallback?(0,r.jsx)(post_title,{children:"Loading…"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)(v(),{children:[(0,r.jsx)("title",{children:l}),(0,r.jsx)("meta",{property:"og:image",content:t.ogImage.url})]}),(0,r.jsx)(post_header,{title:t.title,coverImage:t.coverImage}),(0,r.jsx)(post_body,{content:t.content})]})})]})}):(0,r.jsx)(a(),{statusCode:404})}},5969:function(e){e.exports={markdown:"markdown-styles_markdown__HwUWZ"}},2918:function(e,t,n){e.exports=n(6908)},1664:function(e,t,n){e.exports=n(5170)},1163:function(e,t,n){e.exports=n(9974)}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=592)}),_N_E=e.O()}]);