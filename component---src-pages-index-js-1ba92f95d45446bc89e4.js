(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(170),s=n(584),c=n(582),u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentWillMount=function(){Object(l.c)("/docs")},n.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}))},t}(o.a.Component);t.default=u,void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlogIndex",filename:"src/pages/index.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlogIndex",filename:"src/pages/index.js"}});var f="2785444898";void 0!==f&&f&&f===Object(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pageQuery",filename:"src/pages/index.js"}}),void 0!==f&&f&&f===Object(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"pageQuery",filename:"src/pages/index.js"}})},169:function(e,t,n){var a;e.exports=(a=n(171))&&a.default||a},170:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(42),s=n.n(l);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return l.navigate});n(169);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},171:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(4),s=n.n(l),c=n(60),u=n(2),f=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(c.a,r()({location:t,pageResources:n},n.json)):null};f.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=f},180:function(e,t,n){"use strict";n.r(t),n.d(t,"blue",function(){return a}),n.d(t,"primary",function(){return r}),n.d(t,"lightgray",function(){return i});var a="#3742fa";void 0!==a&&a&&a===Object(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}}),void 0!==a&&a&&a===Object(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/utils/colors.js"}});var r="#3742fa";void 0!==r&&r&&r===Object(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"primary",filename:"src/utils/colors.js"}}),void 0!==r&&r&&r===Object(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"primary",filename:"src/utils/colors.js"}});var i="#F5F6F7";void 0!==i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightgray",filename:"src/utils/colors.js"}}),void 0!==i&&i&&i===Object(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lightgray",filename:"src/utils/colors.js"}})},580:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(589),r=n.n(a),i=n(590),o=n.n(i),l=n(180);o.a.headerFontFamily=["Source Sans Pro"],o.a.bodyFontFamily=["Source Sans Pro"],o.a.overrideThemeStyles=function(){return{a:{color:l.primary,background:"none",textShadow:"none"},blockquote:{borderLeftColor:l.primary}}};var s=new r.a(o.a);void 0!==s&&s&&s===Object(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"typography",filename:"src/utils/typography.js"}}),void 0!==s&&s&&s===Object(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"typography",filename:"src/utils/typography.js"}});var c=s.rhythm;void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"rhythm",filename:"src/utils/typography.js"}}),void 0!==c&&c&&c===Object(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"rhythm",filename:"src/utils/typography.js"}});var u=s.scale;void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scale",filename:"src/utils/typography.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scale",filename:"src/utils/typography.js"}})},582:function(e,t,n){"use strict";var a=n(583),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(177),c=n.n(s);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title,s=a.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u,u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}}),u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SEO",filename:"src/components/seo.js"}})},583:function(e){e.exports={data:{site:{siteMetadata:{title:"Coolest Library",description:"Sevi Documentation page",author:"Bartel Verkruijssen"}}}}},584:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(170),s=n(585),c=n(176),u=n(180),f={colors:u,breakpoints:["40em","52em","64em"],fontSizes:[12,14,16,20,24,32,48,64],space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Menlo, monospace"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"},buttons:{primary:{color:"#fff",backgroundColor:u.primary,fontWeight:"600"}}};"undefined"!=typeof buttons&&buttons&&buttons===Object(buttons)&&Object.defineProperty(buttons,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttons",filename:"src/utils/theme.js"}}),"undefined"!=typeof shadows&&shadows&&shadows===Object(shadows)&&Object.defineProperty(shadows,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shadows",filename:"src/utils/theme.js"}}),"undefined"!=typeof fonts&&fonts&&fonts===Object(fonts)&&Object.defineProperty(fonts,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fonts",filename:"src/utils/theme.js"}}),"undefined"!=typeof space&&space&&space===Object(space)&&Object.defineProperty(space,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"space",filename:"src/utils/theme.js"}}),"undefined"!=typeof fontSizes&&fontSizes&&fontSizes===Object(fontSizes)&&Object.defineProperty(fontSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontSizes",filename:"src/utils/theme.js"}}),"undefined"!=typeof breakpoints&&breakpoints&&breakpoints===Object(breakpoints)&&Object.defineProperty(breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"breakpoints",filename:"src/utils/theme.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colors",filename:"src/utils/theme.js"}}),"undefined"!=typeof buttons&&buttons&&buttons===Object(buttons)&&Object.defineProperty(buttons,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttons",filename:"src/utils/theme.js"}}),"undefined"!=typeof shadows&&shadows&&shadows===Object(shadows)&&Object.defineProperty(shadows,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shadows",filename:"src/utils/theme.js"}}),"undefined"!=typeof fonts&&fonts&&fonts===Object(fonts)&&Object.defineProperty(fonts,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fonts",filename:"src/utils/theme.js"}}),"undefined"!=typeof space&&space&&space===Object(space)&&Object.defineProperty(space,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"space",filename:"src/utils/theme.js"}}),"undefined"!=typeof fontSizes&&fontSizes&&fontSizes===Object(fontSizes)&&Object.defineProperty(fontSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontSizes",filename:"src/utils/theme.js"}}),"undefined"!=typeof breakpoints&&breakpoints&&breakpoints===Object(breakpoints)&&Object.defineProperty(breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"breakpoints",filename:"src/utils/theme.js"}}),void 0!==u&&u&&u===Object(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colors",filename:"src/utils/theme.js"}});var m=n(580),b=Object(c.default)(s.Box).withConfig({displayName:"layout__Header",componentId:"l0ich9-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background:",";"],function(e){return e.theme.colors.lightgray}),d=Object(c.default)(s.Box).withConfig({displayName:"layout__Container",componentId:"l0ich9-1"})(["max-width:720px;margin:0 auto;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.ThemeProvider,{theme:f},o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{py:5,mb:5},o.a.createElement(s.Heading,{fontSize:[6,7]},"Sevi Documentation"),o.a.createElement(s.Heading,{fontWeight:400},"The sevi how!"),o.a.createElement(s.Box,{display:"flex",mt:4},o.a.createElement(s.Button,{ml:2,variant:"primary",onClick:function(){return Object(l.c)("/docs")}},"Getting Started"))),o.a.createElement(d,null,o.a.createElement("main",null,e),o.a.createElement("hr",{style:{marginTop:Object(m.a)(1),marginBottom:Object(m.a)(1)}}))))},t}(o.a.Component);t.a=p;void 0!==p&&p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}}),void 0!==p&&p&&p===Object(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Layout",filename:"src/components/layout.js"}})}}]);
//# sourceMappingURL=component---src-pages-index-js-1ba92f95d45446bc89e4.js.map