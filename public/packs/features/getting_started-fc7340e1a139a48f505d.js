webpackJsonp([23],{1092:function(e,t,n){"use strict";var o=n(1),i=n.n(o),a=n(0),r=(n.n(a),n(299)),s=n.n(r),u=function(e){var t=e.icon,n=e.text,o=e.to,a=e.href,r=e.method;return a?i()("a",{href:a,className:"column-link","data-method":r},void 0,i()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),n):i()(s.a,{to:o,className:"column-link"},void 0,i()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),n)};t.a=u},1093:function(e,t,n){"use strict";var o=n(1),i=n.n(o),a=n(0),r=(n.n(a),function(e){var t=e.text;return i()("div",{className:"column-subheading"},void 0,t)});t.a=r},167:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),i=n.n(o),a=n(2),r=n.n(a),s=n(3),u=n.n(s),l=n(4),c=n.n(l),d=n(0),f=n.n(d),p=function(e){function t(){var n,o,i;r()(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handleClick=function(){o.props.onClick()},i=n,u()(o,i)}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.active,o=e.columnHeaderId,a="";return this.props.icon&&(a=i()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),i()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:o||null},void 0,a,t)},t}(f.a.PureComponent)},296:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(1),i=n.n(o),a=n(2),r=n.n(a),s=n(3),u=n.n(s),l=n(4),c=n.n(l),d=n(56),f=n.n(d),p=n(0),g=n.n(p),m=n(167),h=n(106),b=n(41),v=function(e){function t(){var n,o,i;r()(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handleHeaderClick=function(){var e=o.node.querySelector(".scrollable");e&&(o._interruptScrollAnimation=Object(h.b)(e))},o.handleScroll=f()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(e){o.node=e},i=n,u()(o,i)}return c()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(h.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,n=e.icon,o=e.children,a=e.active,r=e.hideHeadingOnMobile,s=t&&(!r||r&&!Object(b.b)(window.innerWidth)),u=s&&t.replace(/ /g,"-"),l=s&&i()(m.a,{icon:n,active:a,type:t,onClick:this.handleHeaderClick,columnHeaderId:u});return g.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":u,className:"column",onScroll:this.handleScroll},l,o)},t}(g.a.PureComponent)},299:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),c=o(l),d=n(5),f=o(d),p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},g=function(e){function t(){var n,o,i;a(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=o=r(this,e.call.apply(e,[this].concat(u))),o.handleClick=function(e){if(o.props.onClick&&o.props.onClick(e),!e.defaultPrevented&&0===e.button&&!o.props.target&&!p(e)){e.preventDefault();var t=o.context.router.history,n=o.props,i=n.replace,a=n.to;i?t.replace(a):t.push(a)}},i=n,r(o,i)}return s(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=i(e,["replace","to"]),o=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return c.default.createElement("a",u({},n,{onClick:this.handleClick,href:o}))},t}(c.default.Component);g.propTypes={onClick:f.default.func,target:f.default.string,replace:f.default.bool,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired},g.defaultProps={replace:!1},g.contextTypes={router:f.default.shape({history:f.default.shape({push:f.default.func.isRequired,replace:f.default.func.isRequired,createHref:f.default.func.isRequired}).isRequired}).isRequired},t.default=g},777:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return N});var o,i,a,r,s=n(1),u=n.n(s),l=n(2),c=n.n(l),d=n(3),f=n.n(d),p=n(4),g=n.n(p),m=n(0),h=(n.n(m),n(296)),b=n(1092),v=n(1093),_=n(7),y=n(12),M=n(5),k=n.n(M),O=n(21),x=n.n(O),C=n(16),w=n.n(C),j=Object(_.g)({heading:{id:"getting_started.heading",defaultMessage:"Getting started"},home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public_timeline:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},navigation_subheading:{id:"column_subheading.navigation",defaultMessage:"Navigation"},settings_subheading:{id:"column_subheading.settings",defaultMessage:"Settings"},community_timeline:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},follow_requests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},sign_out:{id:"navigation_bar.logout",defaultMessage:"Logout"},favourites:{id:"navigation_bar.favourites",defaultMessage:"Favourites"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},info:{id:"navigation_bar.info",defaultMessage:"Extended information"},pins:{id:"navigation_bar.pins",defaultMessage:"Pinned toots"}}),q=function(e){return{me:e.getIn(["accounts",e.getIn(["meta","me"])]),columns:e.getIn(["settings","columns"])}},N=(o=Object(y.connect)(q))(i=Object(_.h)((r=a=function(e){function t(){return c()(this,t),f()(this,e.apply(this,arguments))}return g()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,n=e.me,o=e.columns,i=e.multiColumn,a=[];return i&&(o.find(function(e){return"HOME"===e.get("id")})||a.push(u()(b.a,{icon:"home",text:t.formatMessage(j.home_timeline),to:"/timelines/home"},"0")),o.find(function(e){return"NOTIFICATIONS"===e.get("id")})||a.push(u()(b.a,{icon:"bell",text:t.formatMessage(j.notifications),to:"/notifications"},"1")),o.find(function(e){return"COMMUNITY"===e.get("id")})||a.push(u()(b.a,{icon:"users",text:t.formatMessage(j.community_timeline),to:"/timelines/public/local"},"2")),o.find(function(e){return"PUBLIC"===e.get("id")})||a.push(u()(b.a,{icon:"globe",text:t.formatMessage(j.public_timeline),to:"/timelines/public"},"3"))),a=a.concat([u()(b.a,{icon:"star",text:t.formatMessage(j.favourites),to:"/favourites"},"4"),u()(b.a,{icon:"thumb-tack",text:t.formatMessage(j.pins),to:"/pinned"},"5")]),n.get("locked")&&a.push(u()(b.a,{icon:"users",text:t.formatMessage(j.follow_requests),to:"/follow_requests"},"6")),a=a.concat([u()(b.a,{icon:"volume-off",text:t.formatMessage(j.mutes),to:"/mutes"},"7"),u()(b.a,{icon:"ban",text:t.formatMessage(j.blocks),to:"/blocks"},"8")]),u()(h.a,{icon:"asterisk",heading:t.formatMessage(j.heading),hideHeadingOnMobile:!0},void 0,u()("div",{className:"getting-started__wrapper"},void 0,u()(v.a,{text:t.formatMessage(j.navigation_subheading)}),a,u()(v.a,{text:t.formatMessage(j.settings_subheading)}),u()(b.a,{icon:"book",text:t.formatMessage(j.info),href:"/about/more"}),u()(b.a,{icon:"cog",text:t.formatMessage(j.preferences),href:"/settings/preferences"}),u()(b.a,{icon:"sign-out",text:t.formatMessage(j.sign_out),href:"/auth/sign_out",method:"delete"})),u()("div",{className:"getting-started__footer scrollable optionally-scrollable"},void 0,u()("div",{className:"static-content getting-started"},void 0,u()("p",{},void 0,u()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md",rel:"noopener",target:"_blank"},void 0,u()(_.b,{id:"getting_started.faq",defaultMessage:"FAQ"}))," • ",u()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/User-guide.md",rel:"noopener",target:"_blank"},void 0,u()(_.b,{id:"getting_started.userguide",defaultMessage:"User Guide"}))," • ",u()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md",rel:"noopener",target:"_blank"},void 0,u()(_.b,{id:"getting_started.appsshort",defaultMessage:"Apps"}))),u()("p",{},void 0,u()(_.b,{id:"getting_started.open_source_notice",defaultMessage:"Counter.Social is based on open standards. You can contribute or report issues on GitHub at {github}.",values:{github:u()("a",{href:"https://github.com/tootsuite/mastodon",rel:"noopener",target:"_blank"},void 0,"tootsuite/mastodon")}})),".")))},t}(w.a),a.propTypes={intl:k.a.object.isRequired,me:x.a.map.isRequired,columns:x.a.list,multiColumn:k.a.bool},i=r))||i)||i}});
//# sourceMappingURL=getting_started-fc7340e1a139a48f505d.js.map