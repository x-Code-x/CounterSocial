webpackJsonp([23],{149:function(e,t,i){"use strict";i.d(t,"a",function(){return g});var n=i(2),a=i.n(n),o=i(1),s=i.n(o),r=i(3),l=i.n(r),c=i(4),u=i.n(c),d=i(0),f=i.n(d),g=function(e){function t(){var i,n,a;s()(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return i=n=l()(this,e.call.apply(e,[this].concat(r))),n.handleClick=function(){n.props.onClick()},a=i,l()(n,a)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,i=e.active,n=e.columnHeaderId,o="";return this.props.icon&&(o=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"heading",tabIndex:"0",className:"column-header "+(i?"active":""),onClick:this.handleClick,id:n||null},void 0,o,t)},t}(f.a.PureComponent)},264:function(e,t,i){"use strict";i.d(t,"a",function(){return b});var n=i(2),a=i.n(n),o=i(1),s=i.n(o),r=i(3),l=i.n(r),c=i(4),u=i.n(c),d=i(43),f=i.n(d),g=i(0),m=i.n(g),h=i(149),p=i(91),v=i(33),b=function(e){function t(){var i,n,a;s()(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return i=n=l()(this,e.call.apply(e,[this].concat(r))),n.handleHeaderClick=function(){var e=n.node.querySelector(".scrollable");e&&(n._interruptScrollAnimation=Object(p.b)(e))},n.handleScroll=f()(function(){void 0!==n._interruptScrollAnimation&&n._interruptScrollAnimation()},200),n.setRef=function(e){n.node=e},a=i,l()(n,a)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(p.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,i=e.icon,n=e.children,o=e.active,s=e.hideHeadingOnMobile,r=t&&(!s||s&&!Object(v.b)(window.innerWidth)),l=r&&t.replace(/ /g,"-"),c=r&&a()(h.a,{icon:i,active:o,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},c,n)},t}(m.a.PureComponent)},802:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"default",function(){return I});var n,a,o,s,r=i(2),l=i.n(r),c=i(1),u=i.n(c),d=i(3),f=i.n(d),g=i(4),m=i.n(g),h=i(0),p=(i.n(h),i(264)),v=i(938),b=i(939),_=i(5),M=i(9),k=i(7),y=i.n(k),w=i(12),x=i.n(w),C=i(11),N=i.n(C),S=Object(_.f)({heading:{id:"getting_started.heading",defaultMessage:"Getting started"},home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public_timeline:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},navigation_subheading:{id:"column_subheading.navigation",defaultMessage:"Navigation"},settings_subheading:{id:"column_subheading.settings",defaultMessage:"Settings"},community_timeline:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},follow_requests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},sign_out:{id:"navigation_bar.logout",defaultMessage:"Logout"},favourites:{id:"navigation_bar.favourites",defaultMessage:"Favourites"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},info:{id:"navigation_bar.info",defaultMessage:"Extended information"},pins:{id:"navigation_bar.pins",defaultMessage:"Pinned toots"}}),O=function(e){return{me:e.getIn(["accounts",e.getIn(["meta","me"])]),columns:e.getIn(["settings","columns"])}},I=(n=Object(M.connect)(O))(a=Object(_.g)((s=o=function(e){function t(){return u()(this,t),f()(this,e.apply(this,arguments))}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,i=e.me,n=e.columns,a=e.multiColumn,o=[];return a&&(n.find(function(e){return"HOME"===e.get("id")})||o.push(l()(v.a,{icon:"home",text:t.formatMessage(S.home_timeline),to:"/timelines/home"},"0")),n.find(function(e){return"NOTIFICATIONS"===e.get("id")})||o.push(l()(v.a,{icon:"bell",text:t.formatMessage(S.notifications),to:"/notifications"},"1")),n.find(function(e){return"COMMUNITY"===e.get("id")})||o.push(l()(v.a,{icon:"users",text:t.formatMessage(S.community_timeline),to:"/timelines/public/local"},"2")),n.find(function(e){return"PUBLIC"===e.get("id")})||o.push(l()(v.a,{icon:"globe",text:t.formatMessage(S.public_timeline),to:"/timelines/public"},"3"))),o=o.concat([l()(v.a,{icon:"star",text:t.formatMessage(S.favourites),to:"/favourites"},"4"),l()(v.a,{icon:"thumb-tack",text:t.formatMessage(S.pins),to:"/pinned"},"5")]),i.get("locked")&&o.push(l()(v.a,{icon:"users",text:t.formatMessage(S.follow_requests),to:"/follow_requests"},"6")),o=o.concat([l()(v.a,{icon:"volume-off",text:t.formatMessage(S.mutes),to:"/mutes"},"7"),l()(v.a,{icon:"ban",text:t.formatMessage(S.blocks),to:"/blocks"},"8")]),l()(p.a,{icon:"asterisk",heading:t.formatMessage(S.heading),hideHeadingOnMobile:!0},void 0,l()("div",{className:"getting-started__wrapper"},void 0,l()(b.a,{text:t.formatMessage(S.navigation_subheading)}),o,l()(b.a,{text:t.formatMessage(S.settings_subheading)}),l()(v.a,{icon:"globe",text:"Network Status",href:"https://dashboard.counter.social"}),l()(v.a,{icon:"book",text:t.formatMessage(S.info),href:"/about/more"}),l()(v.a,{icon:"cog",text:t.formatMessage(S.preferences),href:"/settings/preferences"})),l()("div",{className:"getting-started__footer scrollable optionally-scrollable"},void 0,l()("div",{className:"static-content getting-started"},void 0,l()("table",{width:"95%",border:"0",align:"center"},void 0,l()("tr",{},void 0,l()("td",{},void 0,l()("p",{},void 0,"Counter.Social stays online because of you, please help keep us online by donating Bitcoin to this address:"),l()("div",{align:"center"},void 0,l()("p",{},void 0,l()("img",{src:"https://counter.social/CustomStuff/btcqr.png",width:"85%"}))))))),l()("table",{width:"95%",border:"0",align:"center"},void 0,l()("tr",{},void 0,l()("td",{width:"98%"},void 0,l()("div",{align:"left"},void 0,l()("a",{href:"https://keybase.io/th3j35t3r",target:"_blank"},void 0,l()("img",{src:"https://counter.social/CustomStuff/jactual.png",width:"221",height:"19",border:"0"})))),l()("td",{width:"2%"},void 0,l()("div",{align:"right"},void 0,l()("a",{href:"https://console.counter.social",target:"_blank"},void 0,l()("img",{src:"https://counter.social/CustomStuff/pi.png",width:"24",height:"19",border:"0"}))))))))},t}(N.a),o.propTypes={intl:y.a.object.isRequired,me:x.a.map.isRequired,columns:x.a.list,multiColumn:y.a.bool},a=s))||a)||a},938:function(e,t,i){"use strict";var n=i(2),a=i.n(n),o=i(0),s=(i.n(o),i(57)),r=function(e){var t=e.icon,i=e.text,n=e.to,o=e.href,r=e.method;return o?a()("a",{href:o,className:"column-link","data-method":r},void 0,a()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),i):a()(s.Link,{to:n,className:"column-link"},void 0,a()("i",{className:"fa fa-fw fa-"+t+" column-link__icon"}),i)};t.a=r},939:function(e,t,i){"use strict";var n=i(2),a=i.n(n),o=i(0),s=(i.n(o),function(e){var t=e.text;return a()("div",{className:"column-subheading"},void 0,t)});t.a=s}});
//# sourceMappingURL=getting_started-90754ee035084c9b1a34.js.map