webpackJsonp([16],{1093:function(e,t,o){"use strict";o.d(t,"a",function(){return y});var n,a,r=o(1),i=o.n(r),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),p=o.n(d),f=o(0),m=(o.n(f),o(21)),h=o.n(m),g=o(16),v=o.n(g),b=o(309),y=(a=n=function(e){function t(){return s()(this,t),u()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this.props.media,t=e.get("status"),o=void 0,n=void 0;return"gifv"===e.get("type")&&(o=i()("span",{className:"media-gallery__gifv__label"},void 0,"GIF")),t.get("sensitive")||(n={backgroundImage:"url("+e.get("preview_url")+")"}),i()("div",{className:"account-gallery__item"},void 0,i()(b.a,{to:"/statuses/"+t.get("id"),href:t.get("url"),style:n},void 0,o))},t}(v.a),n.propTypes={media:h.a.map.isRequired},a)},167:function(e,t,o){"use strict";o.d(t,"a",function(){return f});var n=o(1),a=o.n(n),r=o(2),i=o.n(r),c=o(3),s=o.n(c),l=o(4),u=o.n(l),d=o(0),p=o.n(d),f=function(e){function t(){var o,n,a;i()(this,t);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return o=n=s()(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(){n.props.onClick()},a=o,s()(n,a)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,o=e.active,n=e.columnHeaderId,r="";return this.props.icon&&(r=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"heading",tabIndex:"0",className:"column-header "+(o?"active":""),onClick:this.handleClick,id:n||null},void 0,r,t)},t}(p.a.PureComponent)},295:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ScrollContext=t.ScrollContainer=void 0;var a=o(296),r=n(a),i=o(169),c=n(i);t.ScrollContainer=r.default,t.ScrollContext=c.default},296:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(0),s=n(c),l=o(57),u=n(l),d=o(28),p=(n(d),{scrollKey:s.default.PropTypes.string.isRequired,shouldUpdateScroll:s.default.PropTypes.func,children:s.default.PropTypes.element.isRequired}),f={scrollBehavior:s.default.PropTypes.object},m=function(e){function t(o,n){a(this,t);var i=r(this,e.call(this,o,n));return i.shouldUpdateScroll=function(e,t){var o=i.props.shouldUpdateScroll;return!o||o.call(i.context.scrollBehavior.scrollBehavior,e,t)},i.scrollKey=o.scrollKey,i}return i(t,e),t.prototype.componentDidMount=function(){this.context.scrollBehavior.registerElement(this.props.scrollKey,u.default.findDOMNode(this),this.shouldUpdateScroll)},t.prototype.componentWillReceiveProps=function(e){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillUnmount=function(){this.context.scrollBehavior.unregisterElement(this.scrollKey)},t.prototype.render=function(){return this.props.children},t}(s.default.Component);m.propTypes=p,m.contextTypes=f,t.default=m,e.exports=t.default},297:function(e,t,o){"use strict";o.d(t,"a",function(){return b});var n=o(1),a=o.n(n),r=o(2),i=o.n(r),c=o(3),s=o.n(c),l=o(4),u=o.n(l),d=o(56),p=o.n(d),f=o(0),m=o.n(f),h=o(167),g=o(106),v=o(41),b=function(e){function t(){var o,n,a;i()(this,t);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return o=n=s()(this,e.call.apply(e,[this].concat(c))),n.handleHeaderClick=function(){var e=n.node.querySelector(".scrollable");e&&(n._interruptScrollAnimation=Object(g.b)(e))},n.handleScroll=p()(function(){void 0!==n._interruptScrollAnimation&&n._interruptScrollAnimation()},200),n.setRef=function(e){n.node=e},a=o,s()(n,a)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(g.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,o=e.icon,n=e.children,r=e.active,i=e.hideHeadingOnMobile,c=t&&(!i||i&&!Object(v.b)(window.innerWidth)),s=c&&t.replace(/ /g,"-"),l=c&&a()(h.a,{icon:o,active:r,type:t,onClick:this.handleHeaderClick,columnHeaderId:s});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":s,className:"column",onScroll:this.handleScroll},l,n)},t}(m.a.PureComponent)},298:function(e,t,o){"use strict";o.d(t,"a",function(){return g});var n,a,r=o(1),i=o.n(r),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),p=o.n(d),f=o(0),m=o.n(f),h=o(7),g=(a=n=function(e){function t(){return s()(this,t),u()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this.props.visible;return i()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,i()(h.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(m.a.PureComponent),n.defaultProps={visible:!0},a)},307:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=o(0),u=n(l),d=o(5),p=n(d),f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var o,n,a;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return o=n=i(this,e.call.apply(e,[this].concat(s))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,o=n.props,a=o.replace,r=o.to;a?t.replace(r):t.push(r)}},a=o,i(n,a)}return c(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),o=a(e,["replace","to"]),n=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return u.default.createElement("a",s({},o,{onClick:this.handleClick,href:n}))},t}(u.default.Component);m.propTypes={onClick:p.default.func,target:p.default.string,replace:p.default.bool,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired},m.defaultProps={replace:!1},m.contextTypes={router:p.default.shape({history:p.default.shape({push:p.default.func.isRequired,replace:p.default.func.isRequired,createHref:p.default.func.isRequired}).isRequired}).isRequired},t.default=m},781:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"default",function(){return D});var n,a,r,i,c=o(1),s=o.n(c),l=o(2),u=o.n(l),d=o(3),p=o.n(d),f=o(4),m=o.n(f),h=o(0),g=(o.n(h),o(12)),v=o(21),b=o.n(v),y=o(5),_=o.n(y),M=o(25),k=o(20),w=o(310),O=o(297),j=o(797),C=o(16),I=o.n(C),R=o(87),N=o(1093),q=o(801),S=o(7),x=o(295),P=(o.n(x),o(298)),B=function(e,t){return{medias:Object(R.a)(e,Number(t.params.accountId)),isLoading:e.getIn(["timelines","account:"+Number(t.params.accountId)+":media","isLoading"]),hasMore:!!e.getIn(["timelines","account:"+Number(t.params.accountId)+":media","next"]),autoPlayGif:e.getIn(["meta","auto_play_gif"])}},D=(n=Object(g.connect)(B))((i=r=function(e){function t(){var o,n,a;u()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=n=p()(this,e.call.apply(e,[this].concat(i))),n.handleScrollToBottom=function(){n.props.hasMore&&n.props.dispatch(Object(k.o)(Number(n.props.params.accountId)))},n.handleScroll=function(e){var t=e.target,o=t.scrollTop;150>t.scrollHeight-o-t.clientHeight&&!n.props.isLoading&&n.handleScrollToBottom()},n.handleLoadMore=function(e){e.preventDefault(),n.handleScrollToBottom()},a=o,p()(n,a)}return m()(t,e),t.prototype.componentDidMount=function(){this.props.dispatch(Object(M.v)(Number(this.props.params.accountId))),this.props.dispatch(Object(k.u)(Number(this.props.params.accountId)))},t.prototype.componentWillReceiveProps=function(e){e.params.accountId!==this.props.params.accountId&&e.params.accountId&&(this.props.dispatch(Object(M.v)(Number(e.params.accountId))),this.props.dispatch(Object(k.u)(Number(this.props.params.accountId))))},t.prototype.render=function(){var e=this.props,t=e.medias,o=e.autoPlayGif,n=e.isLoading,a=e.hasMore,r=null;return!t&&n?s()(O.a,{},void 0,s()(w.a,{})):(!n&&t.size>0&&a&&(r=s()(P.a,{onClick:this.handleLoadMore})),s()(O.a,{},void 0,s()(j.a,{}),s()(x.ScrollContainer,{scrollKey:"account_gallery"},void 0,s()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,s()(q.a,{accountId:this.props.params.accountId}),s()("div",{className:"account-section-headline"},void 0,s()(S.b,{id:"account.media",defaultMessage:"Media"})),s()("div",{className:"account-gallery__container"},void 0,t.map(function(e){return s()(N.a,{media:e,autoPlayGif:o},e.get("id"))}),r)))))},t}(I.a),r.propTypes={params:_.a.object.isRequired,dispatch:_.a.func.isRequired,medias:b.a.list.isRequired,isLoading:_.a.bool,hasMore:_.a.bool,autoPlayGif:_.a.bool},a=i))||a},797:function(e,t,o){"use strict";o.d(t,"a",function(){return b});var n,a,r=o(1),i=o.n(r),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),p=o.n(d),f=o(0),m=o.n(f),h=o(7),g=o(5),v=o.n(g),b=(a=n=function(e){function t(){var o,n,a;s()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=n=u()(this,e.call.apply(e,[this].concat(i))),n.handleClick=function(){window.history&&1===window.history.length?n.context.router.history.push("/"):n.context.router.history.goBack()},a=o,u()(n,a)}return p()(t,e),t.prototype.render=function(){return i()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,i()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),i()(h.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(m.a.PureComponent),n.contextTypes={router:v.a.object},a)},799:function(e,t,o){"use strict";var n=o(1),a=o.n(n),r=o(0),i=(o.n(r),o(7)),c=function(){return a()("div",{className:"missing-indicator"},void 0,a()("div",{},void 0,a()(i.b,{id:"missing_indicator.label",defaultMessage:"Not found"})))};t.a=c},801:function(e,t,o){"use strict";var n=o(1),a=o.n(n),r=o(0),i=(o.n(r),o(12)),c=o(87),s=o(802),l=o(25),u=o(17),d=o(168),p=o(39),f=o(327),m=o(7),h=Object(m.g)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"},blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),g=function(){var e=Object(c.c)();return function(t,o){var n=o.accountId;return{account:e(t,Number(n)),me:t.getIn(["meta","me"]),unfollowModal:t.getIn(["meta","unfollow_modal"])}}},v=function(e,t){var o=t.intl;return{onFollow:function(t){e(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?this.unfollowModal?Object(p.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.unfollowConfirm),onConfirm:function(){return e(Object(l.E)(t.get("id")))}}):Object(l.E)(t.get("id")):Object(l.A)(t.get("id")))},onBlock:function(t){e(t.getIn(["relationship","blocking"])?Object(l.D)(t.get("id")):Object(p.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.blockConfirm),onConfirm:function(){return e(Object(l.r)(t.get("id")))}}))},onMention:function(t,o){e(Object(u.H)(t,o))},onReport:function(t){e(Object(d.i)(t))},onMute:function(t){e(t.getIn(["relationship","muting"])?Object(l.F)(t.get("id")):Object(p.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:a()("strong",{},void 0,"@",t.get("acct"))}}),confirm:o.formatMessage(h.muteConfirm),onConfirm:function(){return e(Object(l.B)(t.get("id")))}}))},onBlockDomain:function(t,n){e(Object(p.d)("CONFIRM",{message:a()(m.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:a()("strong",{},void 0,t)}}),confirm:o.formatMessage(h.blockDomainConfirm),onConfirm:function(){return e(Object(f.c)(t,n))}}))},onUnblockDomain:function(t,o){e(Object(f.d)(t,o))}}};t.a=Object(m.h)(Object(i.connect)(g,v)(s.a))},802:function(e,t,o){"use strict";o.d(t,"a",function(){return w});var n,a,r=o(1),i=o.n(r),c=o(2),s=o.n(c),l=o(3),u=o.n(l),d=o(4),p=o.n(d),f=o(0),m=(o.n(f),o(21)),h=o.n(m),g=o(5),v=o.n(g),b=o(803),y=o(804),_=o(799),M=o(16),k=o.n(M),w=(a=n=function(e){function t(){var o,n,a;s()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=n=u()(this,e.call.apply(e,[this].concat(i))),n.handleFollow=function(){n.props.onFollow(n.props.account)},n.handleBlock=function(){n.props.onBlock(n.props.account)},n.handleMention=function(){n.props.onMention(n.props.account,n.context.router.history)},n.handleReport=function(){n.props.onReport(n.props.account)},n.handleMute=function(){n.props.onMute(n.props.account)},n.handleBlockDomain=function(){var e=n.props.account.get("acct").split("@")[1];e&&n.props.onBlockDomain(e,n.props.account.get("id"))},n.handleUnblockDomain=function(){var e=n.props.account.get("acct").split("@")[1];e&&n.props.onUnblockDomain(e,n.props.account.get("id"))},a=o,u()(n,a)}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me;return null===t?i()(_.a,{}):i()("div",{className:"account-timeline__header"},void 0,i()(b.a,{account:t,me:o,onFollow:this.handleFollow}),i()(y.a,{account:t,me:o,onBlock:this.handleBlock,onMention:this.handleMention,onReport:this.handleReport,onMute:this.handleMute,onBlockDomain:this.handleBlockDomain,onUnblockDomain:this.handleUnblockDomain}))},t}(k.a),n.propTypes={account:h.a.map,me:v.a.number.isRequired,onFollow:v.a.func.isRequired,onBlock:v.a.func.isRequired,onMention:v.a.func.isRequired,onReport:v.a.func.isRequired,onMute:v.a.func.isRequired,onBlockDomain:v.a.func.isRequired,onUnblockDomain:v.a.func.isRequired},n.contextTypes={router:v.a.object},a)},803:function(e,t,o){"use strict";o.d(t,"a",function(){return B});var n,a,r,i,c,s,l=o(1),u=o.n(l),d=o(2),p=o.n(d),f=o(3),m=o.n(f),h=o(4),g=o.n(h),v=o(0),b=(o.n(v),o(21)),y=o.n(b),_=o(5),M=o.n(_),k=o(7),w=o(24),O=o(59),j=o.n(O),C=o(42),I=o.n(C),R=o(12),N=o(16),q=o.n(N),S=Object(k.g)({unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},follow:{id:"account.follow",defaultMessage:"Follow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval. Click to cancel follow request"}}),x=function(){return function(e){return{autoPlayGif:e.getIn(["meta","auto_play_gif"])}}},P=(a=n=function(e){function t(){var o,n,a;p()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=n=m()(this,e.call.apply(e,[this].concat(i))),n.state={isHovered:!1},n.handleMouseOver=function(){n.state.isHovered||n.setState({isHovered:!0})},n.handleMouseOut=function(){n.state.isHovered&&n.setState({isHovered:!1})},a=o,m()(n,a)}return g()(t,e),t.prototype.render=function(){var e=this,t=this.props,o=t.account,n=t.autoPlayGif,a=this.state.isHovered;return u()(j.a,{defaultStyle:{radius:90},style:{radius:I()(a?30:90,{stiffness:180,damping:12})}},void 0,function(t){var r=t.radius;return u()("a",{href:o.get("url"),className:"account__header__avatar",role:"presentation",target:"_blank",rel:"noopener",style:{borderRadius:r+"px",backgroundImage:"url("+(n||a?o.get("avatar"):o.get("avatar_static"))+")"},onMouseOver:e.handleMouseOver,onMouseOut:e.handleMouseOut,onFocus:e.handleMouseOver,onBlur:e.handleMouseOut},void 0,u()("span",{style:{display:"none"}},void 0,o.get("acct")))})},t}(q.a),n.propTypes={account:y.a.map.isRequired,autoPlayGif:M.a.bool.isRequired},a),B=(r=Object(R.connect)(x))(i=Object(k.h)((s=c=function(e){function t(){return p()(this,t),m()(this,e.apply(this,arguments))}return g()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me,n=e.intl;if(!t)return null;var a="",r="",i="";o!==t.get("id")&&t.getIn(["relationship","followed_by"])&&(a=u()("span",{className:"account--follows-info"},void 0,u()(k.b,{id:"account.follows_you",defaultMessage:"Follows you"}))),o!==t.get("id")&&(t.getIn(["relationship","requested"])?r=u()("div",{className:"account--action-button"},void 0,u()(w.a,{size:26,active:!0,icon:"hourglass",title:n.formatMessage(S.requested),onClick:this.props.onFollow})):t.getIn(["relationship","blocking"])||(r=u()("div",{className:"account--action-button"},void 0,u()(w.a,{size:26,icon:t.getIn(["relationship","following"])?"user-times":"user-plus",active:t.getIn(["relationship","following"]),title:n.formatMessage(t.getIn(["relationship","following"])?S.unfollow:S.follow),onClick:this.props.onFollow})))),t.get("locked")&&(i=u()("i",{className:"fa fa-lock"}));var c={__html:t.get("note_emojified")},s={__html:t.get("display_name_html")};return u()("div",{className:"account__header",style:{backgroundImage:"url("+t.get("header")+")"}},void 0,u()("div",{},void 0,u()(P,{account:t,autoPlayGif:this.props.autoPlayGif}),u()("span",{className:"account__header__display-name",dangerouslySetInnerHTML:s}),u()("span",{className:"account__header__username"},void 0,"@",t.get("acct")," ",i),u()("div",{className:"account__header__content",dangerouslySetInnerHTML:c}),a,r))},t}(q.a),c.propTypes={account:y.a.map,me:M.a.number.isRequired,onFollow:M.a.func.isRequired,intl:M.a.object.isRequired,autoPlayGif:M.a.bool.isRequired},i=s))||i)||i},804:function(e,t,o){"use strict";o.d(t,"a",function(){return y});var n,a=o(1),r=o.n(a),i=o(2),c=o.n(i),s=o(3),l=o.n(s),u=o(4),d=o.n(u),p=o(0),f=o.n(p),m=o(326),h=o(307),g=o.n(h),v=o(7),b=Object(v.g)({mention:{id:"account.mention",defaultMessage:"Mention @{name}"},edit_profile:{id:"account.edit_profile",defaultMessage:"Edit profile"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},follow:{id:"account.follow",defaultMessage:"Follow"},report:{id:"account.report",defaultMessage:"Report @{name}"},share:{id:"account.share",defaultMessage:"Share @{name}'s profile"},media:{id:"account.media",defaultMessage:"Media"},blockDomain:{id:"account.block_domain",defaultMessage:"Hide everything from {domain}"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),y=Object(v.h)(n=function(e){function t(){var o,n,a;c()(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=n=l()(this,e.call.apply(e,[this].concat(i))),n.handleShare=function(){navigator.share({url:n.props.account.get("url")})},a=o,l()(n,a)}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,o=e.me,n=e.intl,a=[],i="";if(a.push({text:n.formatMessage(b.mention,{name:t.get("username")}),action:this.props.onMention}),"share"in navigator&&a.push({text:n.formatMessage(b.share,{name:t.get("username")}),action:this.handleShare}),a.push(null),a.push({text:n.formatMessage(b.media),to:"/accounts/"+t.get("id")+"/media"}),a.push(null),t.get("id")===o?a.push({text:n.formatMessage(b.edit_profile),href:"/settings/profile"}):(t.getIn(["relationship","muting"])?a.push({text:n.formatMessage(b.unmute,{name:t.get("username")}),action:this.props.onMute}):a.push({text:n.formatMessage(b.mute,{name:t.get("username")}),action:this.props.onMute}),t.getIn(["relationship","blocking"])?a.push({text:n.formatMessage(b.unblock,{name:t.get("username")}),action:this.props.onBlock}):a.push({text:n.formatMessage(b.block,{name:t.get("username")}),action:this.props.onBlock}),a.push({text:n.formatMessage(b.report,{name:t.get("username")}),action:this.props.onReport})),t.get("acct")!==t.get("username")){var c=t.get("acct").split("@")[1];i=r()("div",{className:"account__disclaimer"},void 0,r()(v.b,{id:"account.disclaimer_full",defaultMessage:"Information below may reflect the user's profile incompletely."})," ",r()("a",{target:"_blank",rel:"noopener",href:t.get("url")},void 0,r()(v.b,{id:"account.view_full_profile",defaultMessage:"View full profile"}))),a.push(null),t.getIn(["relationship","domain_blocking"])?a.push({text:n.formatMessage(b.unblockDomain,{domain:c}),action:this.props.onUnblockDomain}):a.push({text:n.formatMessage(b.blockDomain,{domain:c}),action:this.props.onBlockDomain})}return r()("div",{},void 0,i,r()("div",{className:"account__action-bar"},void 0,r()("div",{className:"account__action-bar-dropdown"},void 0,r()(m.a,{items:a,icon:"bars",size:24,direction:"right"})),r()("div",{className:"account__action-bar-links"},void 0,r()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")},void 0,r()("span",{},void 0,r()(v.b,{id:"account.posts",defaultMessage:"Posts"})),r()("strong",{},void 0,r()(v.c,{value:t.get("statuses_count")}))),r()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")+"/following"},void 0,r()("span",{},void 0,r()(v.b,{id:"account.follows",defaultMessage:"Follows"})),r()("strong",{},void 0,r()(v.c,{value:t.get("following_count")}))),r()(g.a,{className:"account__action-bar__tab",to:"/accounts/"+t.get("id")+"/followers"},void 0,r()("span",{},void 0,r()(v.b,{id:"account.followers",defaultMessage:"Followers"})),r()("strong",{},void 0,r()(v.c,{value:t.get("followers_count")}))))))},t}(f.a.PureComponent))||n}});
//# sourceMappingURL=account_gallery-ff34549fcfe74940cd0d.js.map