(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(181),s=a(176),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}))},t}(o.a.Component);t.default=c,void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlogIndex",filename:"src/pages/index.js"}}),void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlogIndex",filename:"src/pages/index.js"}});var u="2785444898";void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pageQuery",filename:"src/pages/index.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pageQuery",filename:"src/pages/index.js"}})},165:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},166:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(42),s=a.n(l);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return l.navigate});a(165);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(4),s=a.n(l),c=a(60),u=a(2),f=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(c.a,r()({location:t,pageResources:a},a.json)):null};f.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=f},171:function(e,t,a){"use strict";a.r(t),a.d(t,"blue",function(){return n}),a.d(t,"primary",function(){return r}),a.d(t,"lightgray",function(){return i});var n="#3742fa";void 0!==n&&n&&n===Object(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}}),void 0!==n&&n&&n===Object(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}});var r="#3742fa";void 0!==r&&r&&r===Object(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"primary",filename:"src/utils/colors.js"}}),void 0!==r&&r&&r===Object(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"primary",filename:"src/utils/colors.js"}});var i="#F5F6F7";void 0!==i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightgray",filename:"src/utils/colors.js"}}),void 0!==i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightgray",filename:"src/utils/colors.js"}})},173:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(186),r=a.n(n),i=a(187),o=a.n(i),l=a(171);o.a.headerFontFamily=["Source Sans Pro"],o.a.bodyFontFamily=["Source Sans Pro"],o.a.overrideThemeStyles=function(){return{a:{color:l.primary,background:"none",textShadow:"none"},blockquote:{borderLeftColor:l.primary}}};var s=new r.a(o.a);void 0!==s&&s&&s===Object(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"typography",filename:"src/utils/typography.js"}}),void 0!==s&&s&&s===Object(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"typography",filename:"src/utils/typography.js"}});var c=s.rhythm;void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"rhythm",filename:"src/utils/typography.js"}}),void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"rhythm",filename:"src/utils/typography.js"}});var u=s.scale;void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scale",filename:"src/utils/typography.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scale",filename:"src/utils/typography.js"}})},176:function(e,t,a){"use strict";var n=a(177),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(174),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u,u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}}),u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}})},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Coolest Library",description:"Gatsby starter with Docz and a blog for your documentation",author:"Pedro Nauck"}}}}},181:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(166),s=a(182),c=a(167),u=a(171),f={colors:u,breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"},buttons:{primary:{color:"#fff",backgroundColor:u.primary,fontWeight:"600"}}};"undefined"!=typeof buttons&&buttons&&buttons===Object(buttons)&&Object.defineProperty(buttons,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttons",filename:"src/utils/theme.js"}}),"undefined"!=typeof shadows&&shadows&&shadows===Object(shadows)&&Object.defineProperty(shadows,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shadows",filename:"src/utils/theme.js"}}),"undefined"!=typeof fonts&&fonts&&fonts===Object(fonts)&&Object.defineProperty(fonts,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fonts",filename:"src/utils/theme.js"}}),"undefined"!=typeof space&&space&&space===Object(space)&&Object.defineProperty(space,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"space",filename:"src/utils/theme.js"}}),"undefined"!=typeof fontSizes&&fontSizes&&fontSizes===Object(fontSizes)&&Object.defineProperty(fontSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontSizes",filename:"src/utils/theme.js"}}),"undefined"!=typeof breakpoints&&breakpoints&&breakpoints===Object(breakpoints)&&Object.defineProperty(breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"breakpoints",filename:"src/utils/theme.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colors",filename:"src/utils/theme.js"}}),"undefined"!=typeof buttons&&buttons&&buttons===Object(buttons)&&Object.defineProperty(buttons,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttons",filename:"src/utils/theme.js"}}),"undefined"!=typeof shadows&&shadows&&shadows===Object(shadows)&&Object.defineProperty(shadows,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shadows",filename:"src/utils/theme.js"}}),"undefined"!=typeof fonts&&fonts&&fonts===Object(fonts)&&Object.defineProperty(fonts,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fonts",filename:"src/utils/theme.js"}}),"undefined"!=typeof space&&space&&space===Object(space)&&Object.defineProperty(space,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"space",filename:"src/utils/theme.js"}}),"undefined"!=typeof fontSizes&&fontSizes&&fontSizes===Object(fontSizes)&&Object.defineProperty(fontSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontSizes",filename:"src/utils/theme.js"}}),"undefined"!=typeof breakpoints&&breakpoints&&breakpoints===Object(breakpoints)&&Object.defineProperty(breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"breakpoints",filename:"src/utils/theme.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colors",filename:"src/utils/theme.js"}});var m=a(173),b=Object(c.default)(s.Box).withConfig({displayName:"layout__Header",componentId:"brmav5-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background:",";"],function(e){return e.theme.colors.lightgray}),d=Object(c.default)(s.Box).withConfig({displayName:"layout__Container",componentId:"brmav5-1"})(["max-width:720px;margin:0 auto;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.ThemeProvider,{theme:f},o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{py:5,mb:5},o.a.createElement(s.Heading,{fontSize:[6,7]},"Sevi Documentation"),o.a.createElement(s.Heading,{fontWeight:400},"The sevi how!"),o.a.createElement(s.Box,{display:"flex",mt:4},o.a.createElement(s.Button,{ml:2,variant:"primary",onClick:function(){return Object(l.c)("/docs")}},"Getting Started"))),o.a.createElement(d,null,o.a.createElement("main",null,e),o.a.createElement("hr",{style:{marginTop:Object(m.a)(1),marginBottom:Object(m.a)(1)}}))))},t}(o.a.Component);t.a=p;void 0!==p&&p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}}),void 0!==p&&p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}})}}]);
//# sourceMappingURL=component---src-pages-index-js-929d9332b4ce01d91cc6.js.map