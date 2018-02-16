webpackJsonp([14],{167:function(e,t,o){"use strict";o.d(t,"a",function(){return p});var n=o(1),a=o.n(n),i=o(2),r=o.n(i),c=o(3),s=o.n(c),l=o(4),u=o.n(l),d=o(0),f=o.n(d),p=function(e){function t(){var o,n,a;r()(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return o=n=s()(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(){n.props.onClick()},a=o,s()(n,a)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,o=e.active,n=e.columnHeaderId,i="";return this.props.icon&&(i=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"heading",tabIndex:"0",className:"column-header "+(o?"active":""),onClick:this.handleClick,id:n||null},void 0,i,t)},t}(f.a.PureComponent)},295:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ScrollContext=t.ScrollContainer=void 0;var a=o(296),i=n(a),r=o(168),c=n(r);t.ScrollContainer=i.default,t.ScrollContext=c.default},296:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(0),s=n(c),l=o(57),u=n(l),d=o(28),f=(n(d),{scrollKey:s.default.PropTypes.string.isRequired,shouldUpdateScroll:s.default.PropTypes.func,children:s.default.PropTypes.element.isRequired}),p={scrollBehavior:s.default.PropTypes.object},m=function(e){function t(o,n){a(this,t);var r=i(this,e.call(this,o,n));return r.shouldUpdateScroll=function(e,t){var o=r.props.shouldUpdateScroll;return!o||o.call(r.context.scrollBehavior.scrollBehavior,e,t)},r.scrollKey=o.scrollKey,r}return r(t,e),t.prototype.componentDidMount=function(){this.context.scrollBehavior.registerElement(this.props.scrollKey,u.default.findDOMNode(this),this.shouldUpdateScroll)},t.prototype.componentWillReceiveProps=function(e){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillUnmount=function(){this.context.scrollBehavior.unregisterElement(this.scrollKey)},t.prototype.render=function(){return this.props.children},t}(s.default.Component);m.propTypes=f,m.contextTypes=p,t.default=m,e.exports=t.default},297:function(e,t,o){"use strict";o.d(t,"a",function(){return v});var n=o(1),a=o.n(n),i=o(2),r=o.n(i),c=o(3),s=o.n(c),l=o(4),u=o.n(l),d=o(56),f=o.n(d),p=o(0),m=o.n(p),h=o(167),g=o(106),b=o(41),v=function(e){function t(){var o,n,a;r()(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return o=n=s()(this,e.call.apply(e,[this].concat(c))),n.handleHeaderClick=function(){var e=n.node.querySelector(".scrollable");e&&(n._interruptScrollAnimation=Object(g.b)(e))},n.handleScroll=f()(function(){void 0!==n._interruptScrollAnimation&&n._interruptScrollAnimation()},200),n.setRef=function(e){n.node=e},a=o,s()(n,a)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(g.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,o=e.icon,n=e.children,i=e.active,r=e.hideHeadingOnMobile,c=t&&(!r||r&&!Object(b.b)(window.innerWidth)),s=c&&t.replace(/ /g,"-"),l=c&&a()(h.a,{icon:o,active:i,type:t,onClick:this.handleHeaderClick,columnHeaderId:s});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":s,className:"column",onScroll:this.handleScroll},l,n)},t}(m.a.PureComponent)},298:function(e,t,o){"use strict";o.d(t,"a",function(){return g});var n,a,i=o(1),r=o.n(i),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=o.n(p),h=o(7),g=(a=n=function(e){function t(){return s()(this,t),u()(this,e.apply(this,arguments))}return f()(t,e),t.prototype.render=function(){var e=this.props.visible;return r()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,r()(h.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(m.a.PureComponent),n.defaultProps={visible:!0},a)},308:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=o(0),u=n(l),d=o(5),f=n(d),p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var o,n,a;i(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return o=n=r(this,e.call.apply(e,[this].concat(s))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,o=n.props,a=o.replace,i=o.to;a?t.replace(i):t.push(i)}},a=o,r(n,a)}return c(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),o=a(e,["replace","to"]),n=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return u.default.createElement("a",s({},o,{onClick:this.handleClick,href:n}))},t}(u.default.Component);m.propTypes={onClick:f.default.func,target:f.default.string,replace:f.default.bool,to:f.default.oneOfType([f.default.string,f.default.object]).isRequired},m.defaultProps={replace:!1},m.contextTypes={router:f.default.shape({history:f.default.shape({push:f.default.func.isRequired,replace:f.default.func.isRequired,createHref:f.default.func.isRequired}).isRequired}).isRequired},t.default=m},782:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"default",function(){return B});var n,a,i,r,c=o(1),s=o.n(c),l=o(2),u=o.n(l),d=o(3),f=o.n(d),p=o(4),m=o.n(p),h=o(0),g=(o.n(h),o(12)),b=o(5),v=o.n(b),y=o(21),M=o.n(y),w=o(310),_=o(24),k=o(295),O=(o.n(k),o(795)),j=o(297),C=o(801),I=o(298),R=o(797),N=o(16),q=o.n(N),x=function(e,t){return{accountIds:e.getIn(["user_lists","followers",Number(t.params.accountId),"items"]),hasMore:!!e.getIn(["user_lists","followers",Number(t.params.accountId),"next"])}},B=(n=Object(g.connect)(x))((r=i=function(e){function t(){var o,n,a;u()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=n=f()(this,e.call.apply(e,[this].concat(r))),n.handleScroll=function(e){var t=e.target;t.scrollTop===t.scrollHeight-t.clientHeight&&n.props.hasMore&&n.props.dispatch(Object(_.t)(Number(n.props.params.accountId)))},n.handleLoadMore=function(e){e.preventDefault(),n.props.dispatch(Object(_.t)(Number(n.props.params.accountId)))},a=o,f()(n,a)}return m()(t,e),t.prototype.componentWillMount=function(){this.props.dispatch(Object(_.v)(Number(this.props.params.accountId))),this.props.dispatch(Object(_.x)(Number(this.props.params.accountId)))},t.prototype.componentWillReceiveProps=function(e){e.params.accountId!==this.props.params.accountId&&e.params.accountId&&(this.props.dispatch(Object(_.v)(Number(e.params.accountId))),this.props.dispatch(Object(_.x)(Number(e.params.accountId))))},t.prototype.render=function(){var e=this.props,t=e.accountIds,o=e.hasMore,n=null;return t?(o&&(n=s()(I.a,{onClick:this.handleLoadMore})),s()(j.a,{},void 0,s()(R.a,{}),s()(k.ScrollContainer,{scrollKey:"followers"},void 0,s()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,s()("div",{className:"followers"},void 0,s()(C.a,{accountId:this.props.params.accountId}),t.map(function(e){return s()(O.a,{id:e,withNote:!1},e)}),n))))):s()(j.a,{},void 0,s()(w.a,{}))},t}(q.a),i.propTypes={params:v.a.object.isRequired,dispatch:v.a.func.isRequired,accountIds:M.a.list,hasMore:v.a.bool},a=r))||a},795:function(e,t,o){"use strict";var n=o(1),a=o.n(n),i=o(0),r=(o.n(i),o(12)),c=o(7),s=o(87),l=o(796),u=o(24),d=o(40),f=Object(c.g)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),p=function(){var e=Object(s.c)();return function(t,o){return{account:e(t,o.id),me:t.getIn(["meta","me"]),unfollowModal:t.getIn(["meta","unfollow_modal"])}}},m=function(e,t){var o=t.intl;return{onFollow:function(t){e(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?this.unfollowModal?Object(d.d)("CONFIRM",{message:a()(c.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(f.unfollowConfirm),onConfirm:function(){return e(Object(u.E)(t.get("id")))}}):Object(u.E)(t.get("id")):Object(u.A)(t.get("id")))},onBlock:function(t){e(t.getIn(["relationship","blocking"])?Object(u.D)(t.get("id")):Object(u.r)(t.get("id")))},onMute:function(t){e(t.getIn(["relationship","muting"])?Object(u.F)(t.get("id")):Object(u.B)(t.get("id")))}}};t.a=Object(c.h)(Object(r.connect)(p,m)(l.a))},796:function(e,t,o){"use strict";o.d(t,"a",function(){return I});var n,a,i,r=o(1),c=o.n(r),s=o(2),l=o.n(s),u=o(3),d=o.n(u),f=o(4),p=o.n(f),m=o(0),h=(o.n(m),o(21)),g=o.n(h),b=o(5),v=o.n(b),y=o(71),M=o(73),w=o(309),_=o(25),k=o(7),O=o(16),j=o.n(O),C=Object(k.g)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"}}),I=Object(k.h)((i=a=function(e){function t(){var o,n,a;l()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=n=d()(this,e.call.apply(e,[this].concat(r))),n.handleFollow=function(){n.props.onFollow(n.props.account)},n.handleBlock=function(){n.props.onBlock(n.props.account)},n.handleMute=function(){n.props.onMute(n.props.account)},a=o,d()(n,a)}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me,n=e.intl,a=e.hidden;if(!t)return c()("div",{});if(a)return c()("div",{},void 0,t.get("display_name"),t.get("username"));var i=void 0;if(t.get("id")!==o&&null!==t.get("relationship",null)){var r=t.getIn(["relationship","following"]),s=t.getIn(["relationship","requested"]),l=t.getIn(["relationship","blocking"]),u=t.getIn(["relationship","muting"]);i=s?c()(_.a,{disabled:!0,icon:"hourglass",title:n.formatMessage(C.requested)}):l?c()(_.a,{active:!0,icon:"unlock-alt",title:n.formatMessage(C.unblock,{name:t.get("username")}),onClick:this.handleBlock}):u?c()(_.a,{active:!0,icon:"volume-up",title:n.formatMessage(C.unmute,{name:t.get("username")}),onClick:this.handleMute}):c()(_.a,{icon:r?"user-times":"user-plus",title:n.formatMessage(r?C.unfollow:C.follow),onClick:this.handleFollow,active:r})}return c()("div",{className:"account"},void 0,c()("div",{className:"account__wrapper"},void 0,c()(w.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),c()("div",{className:"account__avatar-wrapper"},void 0,c()(y.a,{account:t,size:36})),c()(M.a,{account:t})),c()("div",{className:"account__relationship"},void 0,i)))},t}(j.a),a.propTypes={account:g.a.map.isRequired,me:v.a.number.isRequired,onFollow:v.a.func.isRequired,onBlock:v.a.func.isRequired,onMute:v.a.func.isRequired,intl:v.a.object.isRequired,hidden:v.a.bool},n=i))||n},797:function(e,t,o){"use strict";o.d(t,"a",function(){return v});var n,a,i=o(1),r=o.n(i),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=o.n(p),h=o(7),g=o(5),b=o.n(g),v=(a=n=function(e){function t(){var o,n,a;s()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=n=u()(this,e.call.apply(e,[this].concat(r))),n.handleClick=function(){window.history&&1===window.history.length?n.context.router.history.push("/"):n.context.router.history.goBack()},a=o,u()(n,a)}return f()(t,e),t.prototype.render=function(){return r()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,r()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),r()(h.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(m.a.PureComponent),n.contextTypes={router:b.a.object},a)},799:function(e,t,o){"use strict";var n=o(1),a=o.n(n),i=o(0),r=(o.n(i),o(7)),c=function(){return a()("div",{className:"missing-indicator"},void 0,a()("div",{},void 0,a()(r.b,{id:"missing_indicator.label",defaultMessage:"Not found"})))};t.a=c},801:function(e,t,o){"use strict";var n=o(1),a=o.n(n),i=o(0),r=(o.n(i),o(12)),c=o(87),s=o(802),l=o(24),u=o(17),d=o(169),f=o(40),p=o(327),m=o(7),h=Object(m.g)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"},blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),g=function(){var e=Object(c.c)();return function(t,o){var n=o.accountId;return{account:e(t,Number(n)),me:t.getIn(["meta","me"]),unfollowModal:t.getIn(["meta","unfollow_modal"])}}},b=function(e,t){var o=t.intl;return{onFollow:function(t){e(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?this.unfollowModal?Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.unfollowConfirm),onConfirm:function(){return e(Object(l.E)(t.get("id")))}}):Object(l.E)(t.get("id")):Object(l.A)(t.get("id")))},onBlock:function(t){e(t.getIn(["relationship","blocking"])?Object(l.D)(t.get("id")):Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.blockConfirm),onConfirm:function(){return e(Object(l.r)(t.get("id")))}}))},onMention:function(t,o){e(Object(u.G)(t,o))},onReport:function(t){e(Object(d.i)(t))},onMute:function(t){e(t.getIn(["relationship","muting"])?Object(l.F)(t.get("id")):Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.muteConfirm),onConfirm:function(){return e(Object(l.B)(t.get("id")))}}))},onBlockDomain:function(t,n){e(Object(f.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:a()("strong",{},void 0,t)}}),confirm:o.formatMessage(h.blockDomainConfirm),onConfirm:function(){return e(Object(p.c)(t,n))}}))},onUnblockDomain:function(t,o){e(Object(p.d)(t,o))}}};t.a=Object(m.h)(Object(r.connect)(g,b)(s.a))},802:function(e,t,o){"use strict";o.d(t,"a",function(){return k});var n,a,i=o(1),r=o.n(i),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),f=o.n(d),p=o(0),m=(o.n(p),o(21)),h=o.n(m),g=o(5),b=o.n(g),v=o(803),y=o(804),M=o(799),w=o(16),_=o.n(w),k=(a=n=function(e){function t(){var o,n,a;s()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=n=u()(this,e.call.apply(e,[this].concat(r))),n.handleFollow=function(){n.props.onFollow(n.props.account)},n.handleBlock=function(){n.props.onBlock(n.props.account)},n.handleMention=function(){n.props.onMention(n.props.account,n.context.router.history)},n.handleReport=function(){n.props.onReport(n.props.account)},n.handleMute=function(){n.props.onMute(n.props.account)},n.handleBlockDomain=function(){var e=n.props.account.get("acct").split("@")[1];e&&n.props.onBlockDomain(e,n.props.account.get("id"))},n.handleUnblockDomain=function(){var e=n.props.account.get("acct").split("@")[1];e&&n.props.onUnblockDomain(e,n.props.account.get("id"))},a=o,u()(n,a)}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me;return null===t?r()(M.a,{}):r()("div",{className:"account-timeline__header"},void 0,r()(v.a,{account:t,me:o,onFollow:this.handleFollow}),r()(y.a,{account:t,me:o,onBlock:this.handleBlock,onMention:this.handleMention,onReport:this.handleReport,onMute:this.handleMute,onBlockDomain:this.handleBlockDomain,onUnblockDomain:this.handleUnblockDomain}))},t}(_.a),n.propTypes={account:h.a.map,me:b.a.number.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMention:b.a.func.isRequired,onReport:b.a.func.isRequired,onMute:b.a.func.isRequired,onBlockDomain:b.a.func.isRequired,onUnblockDomain:b.a.func.isRequired},n.contextTypes={router:b.a.object},a)},803:function(e,t,o){"use strict";o.d(t,"a",function(){return F});var n,a,i,r,c,s,l=o(1),u=o.n(l),d=o(2),f=o.n(d),p=o(3),m=o.n(p),h=o(4),g=o.n(h),b=o(0),v=(o.n(b),o(21)),y=o.n(v),M=o(5),w=o.n(M),_=o(7),k=o(25),O=o(60),j=o.n(O),C=o(42),I=o.n(C),R=o(12),N=o(16),q=o.n(N),x=Object(_.g)({unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},follow:{id:"account.follow",defaultMessage:"Follow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval. Click to cancel follow request"}}),B=function(){return function(e){return{autoPlayGif:e.getIn(["meta","auto_play_gif"])}}},S=(a=n=function(e){function t(){var o,n,a;f()(this,t);for(var i=arguments.length,r=Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=n=m()(this,e.call.apply(e,[this].concat(r))),n.state={isHovered:!1},n.handleMouseOver=function(){n.state.isHovered||n.setState({isHovered:!0})},n.handleMouseOut=function(){n.state.isHovered&&n.setState({isHovered:!1})},a=o,m()(n,a)}return g()(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.account,n=t.autoPlayGif,a=this.state.isHovered;return u()(j.a,{defaultStyle:{radius:90},style:{radius:I()(a?30:90,{stiffness:180,damping:12})}},void 0,function(t){var i=t.radius;return u()("a",{href:o.get("url"),className:"account__header__avatar",role:"presentation",target:"_blank",rel:"noopener",style:{borderRadius:i+"px",backgroundImage:"url("+(n||a?o.get("avatar"):o.get("avatar_static"))+")"},onMouseOver:e.handleMouseOver,onMouseOut:e.handleMouseOut,onFocus:e.handleMouseOver,onBlur:e.handleMouseOut},void 0,u()("span",{style:{display:"none"}},void 0,o.get("acct")))})},t}(q.a),n.propTypes={account:y.a.map.isRequired,autoPlayGif:w.a.bool.isRequired},a),F=(i=Object(R.connect)(B))(r=Object(_.h)((s=c=function(e){function t(){return f()(this,t),m()(this,e.apply(this,arguments))}return g()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me,n=e.intl;if(!t)return null;var a="",i="",r="";o!==t.get("id")&&t.getIn(["relationship","followed_by"])&&(a=u()("span",{className:"account--follows-info"},void 0,u()(_.b,{id:"account.follows_you",defaultMessage:"Follows you"}))),o!==t.get("id")&&(t.getIn(["relationship","requested"])?i=u()("div",{className:"account--action-button"},void 0,u()(k.a,{size:26,active:!0,icon:"hourglass",title:n.formatMessage(x.requested),onClick:this.props.onFollow})):t.getIn(["relationship","blocking"])||(i=u()("div",{className:"account--action-button"},void 0,u()(k.a,{size:26,icon:t.getIn(["relationship","following"])?"user-times":"user-plus",active:t.getIn(["relationship","following"]),title:n.formatMessage(t.getIn(["relationship","following"])?x.unfollow:x.follow),onClick:this.props.onFollow})))),t.get("locked")&&(r=u()("i",{className:"fa fa-lock"}));var c={__html:t.get("note_emojified")},s={__html:t.get("display_name_html")};return u()("div",{className:"account__header",style:{backgroundImage:"url("+t.get("header")+")"}},void 0,u()("div",{},void 0,u()(S,{account:t,autoPlayGif:this.props.autoPlayGif}),u()("span",{className:"account__header__display-name",dangerouslySetInnerHTML:s}),u()("span",{className:"account__header__username"},void 0,"@",t.get("acct")," ",r),u()("div",{className:"account__header__content",dangerouslySetInnerHTML:c}),a,i))},t}(q.a),c.propTypes={account:y.a.map,me:w.a.number.isRequired,onFollow:w.a.func.isRequired,intl:w.a.object.isRequired,autoPlayGif:w.a.bool.isRequired},r=s))||r)||r},804:function(e,t,o){"use strict";o.d(t,"a",function(){return y});var n,a=o(1),i=o.n(a),r=o(2),c=o.n(r),s=o(3),l=o.n(s),u=o(4),d=o.n(u),f=o(0),p=o.n(f),m=o(326),h=o(308),g=o.n(h),b=o(7),v=Object(b.g)({mention:{id:"account.mention",defaultMessage:"Mention @{name}"},edit_profile:{id:"account.edit_profile",defaultMessage:"Edit profile"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},follow:{id:"account.follow",defaultMessage:"Follow"},report:{id:"account.report",defaultMessage:"Report @{name}"},share:{id:"account.share",defaultMessage:"Share @{name}'s profile"},media:{id:"account.media",defaultMessage:"Media"},blockDomain:{id:"account.block_domain",defaultMessage:"Hide everything from {domain}"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),y=Object(b.h)(n=function(e){function t(){var o,n,a;c()(this,t);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return o=n=l()(this,e.call.apply(e,[this].concat(r))),n.handleShare=function(){navigator.share({url:n.props.account.get("url")})},a=o,l()(n,a)}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me,n=e.intl,a=[],r="";if(a.push({text:n.formatMessage(v.mention,{name:t.get("username")}),action:this.props.onMention}),"share"in navigator&&a.push({text:n.formatMessage(v.share,{name:t.get("username")}),action:this.handleShare}),a.push(null),a.push({text:n.formatMessage(v.media),to:"/accounts/"+t.get("id")+"/media"}),a.push(null),t.get("id")===o?a.push({text:n.formatMessage(v.edit_profile),href:"/settings/profile"}):(t.getIn(["relationship","muting"])?a.push({text:n.formatMessage(v.unmute,{name:t.get("username")}),action:this.props.onMute}):a.push({text:n.formatMessage(v.mute,{name:t.get("username")}),action:this.props.onMute}),t.getIn(["relationship","blocking"])?a.push({text:n.formatMessage(v.unblock,{name:t.get("username")}),action:this.props.onBlock}):a.push({text:n.formatMessage(v.block,{name:t.get("username")}),action:this.props.onBlock}),a.push({text:n.formatMessage(v.report,{name:t.get("username")}),action:this.props.onReport})),t.get("acct")!==t.get("username")){var c=t.get("acct").split("@")[1];r=i()("div",{className:"account__disclaimer"},void 0,i()(b.b,{id:"account.disclaimer_full",defaultMessage:"Information below may reflect the user's profile incompletely."})," ",i()("a",{target:"_blank",rel:"noopener",href:t.get("url")},void 0,i()(b.b,{id:"account.view_full_profile",defaultMessage:"View full profile"}))),a.push(null),t.getIn(["relationship","domain_blocking"])?a.push({text:n.formatMessage(v.unblockDomain,{domain:c}),action:this.props.onUnblockDomain}):a.push({text:n.formatMessage(v.blockDomain,{domain:c}),action:this.props.onBlockDomain})}return i()("div",{},void 0,r,i()("div",{className:"account__action-bar"},void 0,i()("div",{className:"account__action-bar-dropdown"},void 0,i()(m.a,{items:a,icon:"bars",size:24,direction:"right"})),i()("div",{className:"account__action-bar-links"},void 0,i()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")},void 0,i()("span",{},void 0,i()(b.b,{id:"account.posts",defaultMessage:"Posts"})),i()("strong",{},void 0,i()(b.c,{value:t.get("statuses_count")}))),i()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")+"/following"},void 0,i()("span",{},void 0,i()(b.b,{id:"account.follows",defaultMessage:"Follows"})),i()("strong",{},void 0,i()(b.c,{value:t.get("following_count")}))),i()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")+"/followers"},void 0,i()("span",{},void 0,i()(b.b,{id:"account.followers",defaultMessage:"Followers"})),i()("strong",{},void 0,i()(b.c,{value:t.get("followers_count")}))))))},t}(p.a.PureComponent))||n}});
//# sourceMappingURL=followers-ffd306c729c6827e2b42.js.map