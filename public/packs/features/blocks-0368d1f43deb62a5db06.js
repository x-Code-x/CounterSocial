webpackJsonp([22],{152:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),l=e.n(r),u=e(4),s=e.n(u),d=e(0),f=e.n(d),p=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(r))),o.handleClick=function(){o.props.onClick()},i=e,l()(o,i)}return s()(t,n),t.prototype.render=function(){var n=this.props,t=n.type,e=n.active,o=n.columnHeaderId,a="";return this.props.icon&&(a=i()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),i()("div",{role:"heading",tabIndex:"0",className:"column-header "+(e?"active":""),onClick:this.handleClick,id:o||null},void 0,a,t)},t}(f.a.PureComponent)},266:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),l=e.n(r),u=e(4),s=e.n(u),d=e(42),f=e.n(d),p=e(0),h=e.n(p),m=e(152),g=e(91),v=e(32),b=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(r))),o.handleHeaderClick=function(){var n=o.node.querySelector(".scrollable");n&&(o._interruptScrollAnimation=Object(g.b)(n))},o.handleScroll=f()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(n){o.node=n},i=e,l()(o,i)}return s()(t,n),t.prototype.scrollTop=function(){var n=this.node.querySelector(".scrollable");n&&(this._interruptScrollAnimation=Object(g.b)(n))},t.prototype.render=function(){var n=this.props,t=n.heading,e=n.icon,o=n.children,a=n.active,c=n.hideHeadingOnMobile,r=t&&(!c||c&&!Object(v.b)(window.innerWidth)),l=r&&t.replace(/ /g,"-"),u=r&&i()(m.a,{icon:e,active:a,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return h.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},u,o)},t}(h.a.PureComponent)},278:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o,i,a=e(2),c=e.n(a),r=e(1),l=e.n(r),u=e(3),s=e.n(u),d=e(4),f=e.n(d),p=e(0),h=e.n(p),m=e(7),g=e(5),v=e.n(g),b=(i=o=function(n){function t(){var e,o,i;l()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=s()(this,n.call.apply(n,[this].concat(c))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},i=e,s()(o,i)}return f()(t,n),t.prototype.render=function(){return c()("div",{className:"column-back-button--slim"},void 0,c()("div",{role:"button",tabIndex:"0",onClick:this.handleClick,className:"column-back-button column-back-button--slim-button"},void 0,c()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),c()(m.b,{id:"column_back_button.label",defaultMessage:"Back"})))},t}(h.a.PureComponent),o.contextTypes={router:v.a.object},i)},796:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"default",function(){return S});var o,i,a,c,r=e(2),l=e.n(r),u=e(1),s=e.n(u),d=e(3),f=e.n(d),p=e(4),h=e.n(p),m=e(0),g=(e.n(m),e(9)),v=e(13),b=e.n(v),k=e(5),y=e.n(k),M=e(279),w=e(154),_=e(266),j=e(278),O=e(805),C=e(105),N=e(7),I=e(12),q=e.n(I),A=Object(N.f)({heading:{id:"column.blocks",defaultMessage:"Blocked users"}}),R=function(n){return{accountIds:n.getIn(["user_lists","blocks","items"])}},S=(o=Object(g.connect)(R))(i=Object(N.g)((c=a=function(n){function t(){var e,o,i;s()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=f()(this,n.call.apply(n,[this].concat(c))),o.handleScroll=function(n){var t=n.target;t.scrollTop===t.scrollHeight-t.clientHeight&&o.props.dispatch(Object(C.c)())},i=e,f()(o,i)}return h()(t,n),t.prototype.componentWillMount=function(){this.props.dispatch(Object(C.d)())},t.prototype.render=function(){var n=this.props,t=n.intl,e=n.accountIds;return e?l()(_.a,{icon:"ban",heading:t.formatMessage(A.heading)},void 0,l()(j.a,{}),l()(w.a,{scrollKey:"blocks"},void 0,l()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,e.map(function(n){return l()(O.a,{id:n},n)})))):l()(_.a,{},void 0,l()(M.a,{}))},t}(q.a),a.propTypes={params:y.a.object.isRequired,dispatch:y.a.func.isRequired,accountIds:b.a.list,intl:y.a.object.isRequired},i=c))||i)||i},805:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(0),c=(e.n(a),e(9)),r=e(7),l=e(72),u=e(806),s=e(22),d=e(29),f=e(55),p=e(14),h=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),m=function(){var n=Object(l.c)();return function(t,e){return{account:n(t,e.id)}}},g=function(n,t){var e=t.intl;return{onFollow:function(t){n(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?p.g?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:e.formatMessage(h.unfollowConfirm),onConfirm:function(){return n(Object(s.E)(t.get("id")))}}):Object(s.E)(t.get("id")):Object(s.A)(t.get("id")))},onBlock:function(t){n(t.getIn(["relationship","blocking"])?Object(s.D)(t.get("id")):Object(s.r)(t.get("id")))},onMute:function(t){n(t.getIn(["relationship","muting"])?Object(s.F)(t.get("id")):Object(f.g)(t))},onMuteNotifications:function(t,e){n(Object(s.B)(t.get("id"),e))}}};t.a=Object(r.g)(Object(c.connect)(m,g)(u.a))},806:function(n,t,e){"use strict";e.d(t,"a",function(){return I});var o,i,a,c=e(2),r=e.n(c),l=e(1),u=e.n(l),s=e(3),d=e.n(s),f=e(4),p=e.n(f),h=e(0),m=(e.n(h),e(13)),g=e.n(m),v=e(5),b=e.n(v),k=e(57),y=e(56),M=e(277),w=e(19),_=e(7),j=e(12),O=e.n(j),C=e(14),N=Object(_.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),I=Object(_.g)((a=i=function(n){function t(){var e,o,i;u()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=d()(this,n.call.apply(n,[this].concat(c))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=e,d()(o,i)}return p()(t,n),t.prototype.render=function(){var n=this.props,t=n.account,e=n.intl,o=n.hidden;if(!t)return r()("div",{});if(o)return r()("div",{},void 0,t.get("display_name"),t.get("username"));var i=void 0;if(t.get("id")!==C.e&&null!==t.get("relationship",null)){var a=t.getIn(["relationship","following"]),c=t.getIn(["relationship","requested"]),l=t.getIn(["relationship","blocking"]),u=t.getIn(["relationship","muting"]);if(c)i=r()(w.a,{disabled:!0,icon:"hourglass",title:e.formatMessage(N.requested)});else if(l)i=r()(w.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(N.unblock,{name:t.get("username")}),onClick:this.handleBlock});else if(u){var s=void 0;s=t.getIn(["relationship","muting_notifications"])?r()(w.a,{active:!0,icon:"bell",title:e.formatMessage(N.unmute_notifications,{name:t.get("username")}),onClick:this.handleUnmuteNotifications}):r()(w.a,{active:!0,icon:"bell-slash",title:e.formatMessage(N.mute_notifications,{name:t.get("username")}),onClick:this.handleMuteNotifications}),i=r()(h.Fragment,{},void 0,r()(w.a,{active:!0,icon:"volume-up",title:e.formatMessage(N.unmute,{name:t.get("username")}),onClick:this.handleMute}),s)}else t.get("moved")||(i=r()(w.a,{icon:a?"user-times":"user-plus",title:e.formatMessage(a?N.unfollow:N.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(M.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(k.a,{account:t,size:36})),r()(y.a,{account:t})),r()("div",{className:"account__relationship"},void 0,i)))},t}(O.a),i.propTypes={account:g.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=a))||o}});
//# sourceMappingURL=blocks-0368d1f43deb62a5db06.js.map