webpackJsonp([23],{1093:function(t,e,n){"use strict";var i=n(1),o=n.n(i),a=n(0),r=(n.n(a),n(300)),s=n.n(r),l=function(t){var e=t.icon,n=t.text,i=t.to,a=t.href,r=t.method;return a?o()("a",{href:a,className:"column-link","data-method":r},void 0,o()("i",{className:"fa fa-fw fa-"+e+" column-link__icon"}),n):o()(s.a,{to:i,className:"column-link"},void 0,o()("i",{className:"fa fa-fw fa-"+e+" column-link__icon"}),n)};e.a=l},1094:function(t,e,n){"use strict";var i=n(1),o=n.n(i),a=n(0),r=(n.n(a),function(t){var e=t.text;return o()("div",{className:"column-subheading"},void 0,e)});e.a=r},167:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n(1),o=n.n(i),a=n(2),r=n.n(a),s=n(3),l=n.n(s),c=n(4),u=n.n(c),d=n(0),f=n.n(d),g=function(t){function e(){var n,i,o;r()(this,e);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=i=l()(this,t.call.apply(t,[this].concat(s))),i.handleClick=function(){i.props.onClick()},o=n,l()(i,o)}return u()(e,t),e.prototype.render=function(){var t=this.props,e=t.type,n=t.active,i=t.columnHeaderId,a="";return this.props.icon&&(a=o()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),o()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:i||null},void 0,a,e)},e}(f.a.PureComponent)},297:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var i=n(1),o=n.n(i),a=n(2),r=n.n(a),s=n(3),l=n.n(s),c=n(4),u=n.n(c),d=n(56),f=n.n(d),g=n(0),p=n.n(g),h=n(167),m=n(106),v=n(41),b=function(t){function e(){var n,i,o;r()(this,e);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=i=l()(this,t.call.apply(t,[this].concat(s))),i.handleHeaderClick=function(){var t=i.node.querySelector(".scrollable");t&&(i._interruptScrollAnimation=Object(m.b)(t))},i.handleScroll=f()(function(){void 0!==i._interruptScrollAnimation&&i._interruptScrollAnimation()},200),i.setRef=function(t){i.node=t},o=n,l()(i,o)}return u()(e,t),e.prototype.scrollTop=function(){var t=this.node.querySelector(".scrollable");t&&(this._interruptScrollAnimation=Object(m.b)(t))},e.prototype.render=function(){var t=this.props,e=t.heading,n=t.icon,i=t.children,a=t.active,r=t.hideHeadingOnMobile,s=e&&(!r||r&&!Object(v.b)(window.innerWidth)),l=s&&e.replace(/ /g,"-"),c=s&&o()(h.a,{icon:n,active:a,type:e,onClick:this.handleHeaderClick,columnHeaderId:l});return p.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},c,i)},e}(p.a.PureComponent)},300:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=n(0),u=i(c),d=n(5),f=i(d),g=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},p=function(t){function e(){var n,i,o;a(this,e);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=r(this,t.call.apply(t,[this].concat(l))),i.handleClick=function(t){if(i.props.onClick&&i.props.onClick(t),!t.defaultPrevented&&0===t.button&&!i.props.target&&!g(t)){t.preventDefault();var e=i.context.router.history,n=i.props,o=n.replace,a=n.to;o?e.replace(a):e.push(a)}},o=n,r(i,o)}return s(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=o(t,["replace","to"]),i=this.context.router.history.createHref("string"==typeof e?{pathname:e}:e);return u.default.createElement("a",l({},n,{onClick:this.handleClick,href:i}))},e}(u.default.Component);p.propTypes={onClick:f.default.func,target:f.default.string,replace:f.default.bool,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired},p.defaultProps={replace:!1},p.contextTypes={router:f.default.shape({history:f.default.shape({push:f.default.func.isRequired,replace:f.default.func.isRequired,createHref:f.default.func.isRequired}).isRequired}).isRequired},e.default=p},778:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return j});var i,o,a,r,s=n(1),l=n.n(s),c=n(2),u=n.n(c),d=n(3),f=n.n(d),g=n(4),p=n.n(g),h=n(0),m=(n.n(h),n(297)),v=n(1093),b=n(1094),_=n(7),y=n(12),M=n(5),k=n.n(M),w=n(21),C=n.n(w),O=n(16),x=n.n(O),S=Object(_.g)({heading:{id:"getting_started.heading",defaultMessage:"Getting started"},home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public_timeline:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},navigation_subheading:{id:"column_subheading.navigation",defaultMessage:"Navigation"},settings_subheading:{id:"column_subheading.settings",defaultMessage:"Settings"},community_timeline:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},follow_requests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},sign_out:{id:"navigation_bar.logout",defaultMessage:"Logout"},favourites:{id:"navigation_bar.favourites",defaultMessage:"Favourites"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},info:{id:"navigation_bar.info",defaultMessage:"Extended information"},pins:{id:"navigation_bar.pins",defaultMessage:"Pinned toots"}}),N=function(t){return{me:t.getIn(["accounts",t.getIn(["meta","me"])]),columns:t.getIn(["settings","columns"])}},j=(i=Object(y.connect)(N))(o=Object(_.h)((r=a=function(t){function e(){return u()(this,e),f()(this,t.apply(this,arguments))}return p()(e,t),e.prototype.render=function(){var t=this.props,e=t.intl,n=t.me,i=t.columns,o=t.multiColumn,a=[];return o&&(i.find(function(t){return"HOME"===t.get("id")})||a.push(l()(v.a,{icon:"home",text:e.formatMessage(S.home_timeline),to:"/timelines/home"},"0")),i.find(function(t){return"NOTIFICATIONS"===t.get("id")})||a.push(l()(v.a,{icon:"bell",text:e.formatMessage(S.notifications),to:"/notifications"},"1")),i.find(function(t){return"COMMUNITY"===t.get("id")})||a.push(l()(v.a,{icon:"users",text:e.formatMessage(S.community_timeline),to:"/timelines/public/local"},"2")),i.find(function(t){return"PUBLIC"===t.get("id")})||a.push(l()(v.a,{icon:"globe",text:e.formatMessage(S.public_timeline),to:"/timelines/public"},"3"))),a=a.concat([l()(v.a,{icon:"star",text:e.formatMessage(S.favourites),to:"/favourites"},"4"),l()(v.a,{icon:"thumb-tack",text:e.formatMessage(S.pins),to:"/pinned"},"5")]),n.get("locked")&&a.push(l()(v.a,{icon:"users",text:e.formatMessage(S.follow_requests),to:"/follow_requests"},"6")),a=a.concat([l()(v.a,{icon:"volume-off",text:e.formatMessage(S.mutes),to:"/mutes"},"7"),l()(v.a,{icon:"ban",text:e.formatMessage(S.blocks),to:"/blocks"},"8")]),l()(m.a,{icon:"asterisk",heading:e.formatMessage(S.heading),hideHeadingOnMobile:!0},void 0,l()("div",{className:"getting-started__wrapper"},void 0,l()(b.a,{text:e.formatMessage(S.navigation_subheading)}),a,l()(b.a,{text:e.formatMessage(S.settings_subheading)}),l()(v.a,{icon:"book",text:e.formatMessage(S.info),href:"/about/more"}),l()(v.a,{icon:"cog",text:e.formatMessage(S.preferences),href:"/settings/preferences"}),l()(v.a,{icon:"sign-out",text:e.formatMessage(S.sign_out),href:"/auth/sign_out",method:"delete"})),l()("div",{className:"getting-started__footer scrollable optionally-scrollable"},void 0,l()("div",{className:"static-content getting-started"},void 0,l()("p",{},void 0,l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.faq",defaultMessage:"FAQ"}))," • ",l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/User-guide.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.userguide",defaultMessage:"User Guide"}))," • ",l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.appsshort",defaultMessage:"Apps"}))),l()("table",{width:"100%",border:"0"},void 0,l()("tr",{},void 0,l()("td",{},void 0,"Counter.Social currently activley blocks access to our community from the following nations:")),l()("tr",{},void 0,l()("td",{},void 0,l()("table",{width:"100%",border:"0"},void 0,l()("tr",{},void 0,l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/russia.png",title:"Russia",alt:"Russia",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/china.png",title:"Russia",alt:"China",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/iran.png",title:"Iran",alt:"Iran",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/nk.png",title:"North Korea",alt:"North Korea",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/syria.png",title:"Syria",alt:"Syria",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/pakistan.png",title:"Pakistan",alt:"Pakistan",width:"33",height:"33"}))),l()("td",{},void 0,l()("div",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/flags/ukraine.png",title:"Ukraine",alt:"Ukraine",width:"33",height:"33"})))))))))))},e}(x.a),a.propTypes={intl:k.a.object.isRequired,me:C.a.map.isRequired,columns:C.a.list,multiColumn:k.a.bool},o=r))||o)||o}});
//# sourceMappingURL=getting_started-bb0e14837acf2c9d9359.js.map