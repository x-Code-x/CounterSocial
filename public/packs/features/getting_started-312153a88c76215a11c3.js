webpackJsonp([23],{149:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var i=n(2),o=n.n(i),a=n(1),s=n.n(a),r=n(3),l=n.n(r),c=n(4),u=n.n(c),d=n(0),f=n.n(d),g=function(e){function t(){var n,i,o;s()(this,t);for(var a=arguments.length,r=Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=i=l()(this,e.call.apply(e,[this].concat(r))),i.handleClick=function(){i.props.onClick()},o=n,l()(i,o)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.active,i=e.columnHeaderId,a="";return this.props.icon&&(a=o()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),o()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:i||null},void 0,a,t)},t}(f.a.PureComponent)},264:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var i=n(2),o=n.n(i),a=n(1),s=n.n(a),r=n(3),l=n.n(r),c=n(4),u=n.n(c),d=n(43),f=n.n(d),g=n(0),m=n.n(g),p=n(149),h=n(91),b=n(33),v=function(e){function t(){var n,i,o;s()(this,t);for(var a=arguments.length,r=Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=i=l()(this,e.call.apply(e,[this].concat(r))),i.handleHeaderClick=function(){var e=i.node.querySelector(".scrollable");e&&(i._interruptScrollAnimation=Object(h.b)(e))},i.handleScroll=f()(function(){void 0!==i._interruptScrollAnimation&&i._interruptScrollAnimation()},200),i.setRef=function(e){i.node=e},o=n,l()(i,o)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(h.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,n=e.icon,i=e.children,a=e.active,s=e.hideHeadingOnMobile,r=t&&(!s||s&&!Object(b.b)(window.innerWidth)),l=r&&t.replace(/ /g,"-"),c=r&&o()(p.a,{icon:n,active:a,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},c,i)},t}(m.a.PureComponent)},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return q});var i,o,a,s,r=n(2),l=n.n(r),c=n(1),u=n.n(c),d=n(3),f=n.n(d),g=n(4),m=n.n(g),p=n(0),h=(n.n(p),n(264)),b=n(938),v=n(939),_=n(5),M=n(9),k=n(7),y=n.n(k),x=n(12),N=n.n(x),C=n(11),w=n.n(C),S=Object(_.f)({notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public_timeline:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},navigation_subheading:{id:"column_subheading.navigation",defaultMessage:"Navigation"},settings_subheading:{id:"column_subheading.settings",defaultMessage:"Settings"},community_timeline:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},follow_requests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},sign_out:{id:"navigation_bar.logout",defaultMessage:"Logout"},favourites:{id:"navigation_bar.favourites",defaultMessage:"Favourites"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},info:{id:"navigation_bar.info",defaultMessage:"Extended information"},pins:{id:"navigation_bar.pins",defaultMessage:"Pinned toots"}}),O=function(e){return{me:e.getIn(["accounts",e.getIn(["meta","me"])]),columns:e.getIn(["settings","columns"])}},q=(i=Object(M.connect)(O))(o=Object(_.g)((s=a=function(e){function t(){return u()(this,t),f()(this,e.apply(this,arguments))}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,n=e.me,i=e.columns,o=e.multiColumn,a=[];return o&&(i.find(function(e){return"HOME"===e.get("id")})||a.push(l()(b.a,{icon:"home",text:t.formatMessage(S.home_timeline),to:"/timelines/home"},"0")),i.find(function(e){return"NOTIFICATIONS"===e.get("id")})||a.push(l()(b.a,{icon:"bell",text:t.formatMessage(S.notifications),to:"/notifications"},"1")),i.find(function(e){return"COMMUNITY"===e.get("id")})||a.push(l()(b.a,{icon:"users",text:t.formatMessage(S.community_timeline),to:"/timelines/public/local"},"2")),i.find(function(e){return"PUBLIC"===e.get("id")})||a.push(l()(b.a,{icon:"globe",text:t.formatMessage(S.public_timeline),to:"/timelines/public"},"3"))),a=a.concat([l()(b.a,{icon:"star",text:t.formatMessage(S.favourites),to:"/favourites"},"4"),l()(b.a,{icon:"thumb-tack",text:t.formatMessage(S.pins),to:"/pinned"},"5")]),n.get("locked")&&a.push(l()(b.a,{icon:"users",text:t.formatMessage(S.follow_requests),to:"/follow_requests"},"6")),a=a.concat([l()(b.a,{icon:"volume-off",text:t.formatMessage(S.mutes),to:"/mutes"},"7"),l()(b.a,{icon:"ban",text:t.formatMessage(S.blocks),to:"/blocks"},"8")]),l()(h.a,{icon:"asterisk",heading:t.formatMessage(S.heading),hideHeadingOnMobile:!0},void 0,l()("div",{className:"getting-started__wrapper"},void 0,l()(v.a,{text:t.formatMessage(S.navigation_subheading)}),a,l()(v.a,{text:t.formatMessage(S.settings_subheading)}),l()(b.a,{icon:"globe",text:"Network Status",href:"https://dashboard.counter.social"}),l()(b.a,{icon:"book",text:t.formatMessage(S.info),href:"/about/more"}),l()(b.a,{icon:"cog",text:t.formatMessage(S.preferences),href:"/settings/preferences"})),l()("div",{className:"getting-started__footer scrollable optionally-scrollable"},void 0,l()("div",{className:"static-content getting-started"},void 0,l()("p",{},void 0,l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.faq",defaultMessage:"FAQ"}))," • ",l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/User-guide.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.userguide",defaultMessage:"User Guide"}))," • ",l()("a",{href:"https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md",rel:"noopener",target:"_blank"},void 0,l()(_.b,{id:"getting_started.appsshort",defaultMessage:"Apps"}))),l()("table",{width:"95%",border:"0",height:"100%"},void 0,l()("tr",{},void 0,l()("td",{},void 0,l()("p",{},void 0,"Counter.Social stays online because of you guys, please help keep us online by donating Bitcoin to this address:"),l()("p",{}),l()("p",{align:"center"},void 0,l()("img",{src:"https://counter.social/CustomStuff/btcqr.png",width:"95%"})," "))))),"."))},t}(w.a),a.propTypes={intl:y.a.object.isRequired,me:N.a.map.isRequired,columns:N.a.list,multiColumn:y.a.bool},o=s))||o)||o},938:function(e,t,n){"use strict";var i=n(2),o=n.n(i),a=n(0),s=(n.n(a),n(57)),r=function(e){var t=e.icon,n=e.text,i=e.to,a=e.href,r=e.method;return a?o()("a",{href:a,className:"column-link","data-method":r},void 0,o()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),n):o()(s.Link,{to:i,className:"column-link"},void 0,o()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),n)};t.a=r},939:function(e,t,n){"use strict";var i=n(2),o=n.n(i),a=n(0),s=(n.n(a),function(e){var t=e.text;return o()("div",{className:"column-subheading"},void 0,t)});t.a=s}});
//# sourceMappingURL=getting_started-312153a88c76215a11c3.js.map