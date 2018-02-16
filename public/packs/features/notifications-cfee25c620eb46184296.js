webpackJsonp([8],{1080:function(e,t,n){"use strict";var o=n(12),i=n(87),s=n(1081),a=function(){var e=Object(i.d)();return function(t,n){return{notification:e(t,n.notification,n.accountId)}}};t.a=Object(o.connect)(a)(s.a)},1081:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var o,i,s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(0),p=(n.n(h),n(5)),g=n.n(p),v=n(21),m=n.n(v),b=n(299),y=n(795),M=n(7),C=n(309),k=n(16),_=n.n(k),O=(i=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return f()(t,e),t.prototype.renderFollow=function(e,t){return a()("div",{className:"notification notification-follow"},void 0,a()("div",{className:"notification__message"},void 0,a()("div",{className:"notification__favourite-icon-wrapper"},void 0,a()("i",{className:"fa fa-fw fa-user-plus"})),a()(M.b,{id:"notification.follow",defaultMessage:"{name} followed you",values:{name:t}})),a()(y.a,{id:e.get("id"),withNote:!1,hidden:this.props.hidden}))},t.prototype.renderMention=function(e){return a()(b.a,{id:e.get("status"),withDismiss:!0,hidden:this.props.hidden})},t.prototype.renderFavourite=function(e,t){return a()("div",{className:"notification notification-favourite"},void 0,a()("div",{className:"notification__message"},void 0,a()("div",{className:"notification__favourite-icon-wrapper"},void 0,a()("i",{className:"fa fa-fw fa-star star-icon"})),a()(M.b,{id:"notification.favourite",defaultMessage:"{name} favourited your status",values:{name:t}})),a()(b.a,{id:e.get("status"),account:e.get("account"),muted:!0,withDismiss:!0,hidden:!!this.props.hidden}))},t.prototype.renderReblog=function(e,t){return a()("div",{className:"notification notification-reblog"},void 0,a()("div",{className:"notification__message"},void 0,a()("div",{className:"notification__favourite-icon-wrapper"},void 0,a()("i",{className:"fa fa-fw fa-retweet"})),a()(M.b,{id:"notification.reblog",defaultMessage:"{name} boosted your status",values:{name:t}})),a()(b.a,{id:e.get("status"),account:e.get("account"),muted:!0,withDismiss:!0,hidden:this.props.hidden}))},t.prototype.render=function(){var e=this.props.notification,t=e.get("account"),n={__html:t.get("display_name_html")},o=a()(C.a,{className:"notification__display-name",href:t.get("url"),title:t.get("acct"),to:"/accounts/"+t.get("id"),dangerouslySetInnerHTML:n});switch(e.get("type")){case"follow":return this.renderFollow(t,o);case"mention":return this.renderMention(e);case"favourite":return this.renderFavourite(e,o);case"reblog":return this.renderReblog(e,o)}return null},t}(_.a),o.propTypes={notification:m.a.map.isRequired,hidden:g.a.bool},i)},1082:function(e,t,n){"use strict";var o=n(12),i=n(7),s=n(1083),a=n(112),r=n(61),c=n(185),l=n(39),u=Object(i.g)({clearMessage:{id:"notifications.clear_confirmation",defaultMessage:"Are you sure you want to permanently clear all your notifications?"},clearConfirm:{id:"notifications.clear",defaultMessage:"Clear notifications"}}),d=function(e){return{settings:e.getIn(["settings","notifications"]),pushSettings:e.get("push_notifications")}},f=function(e,t){var n=t.intl;return{onChange:function(t,n){e("push"===t[0]?Object(c.e)(t.slice(1),n):Object(a.b)(["notifications"].concat(t),n))},onSave:function(){e(Object(a.c)()),e(Object(c.g)())},onClear:function(){e(Object(l.d)("CONFIRM",{message:n.formatMessage(u.clearMessage),confirm:n.formatMessage(u.clearConfirm),onConfirm:function(){return e(Object(r.j)())}}))}}};t.a=Object(i.h)(Object(o.connect)(d,f)(s.a))},1083:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(1),i=n.n(o),s=n(2),a=n.n(s),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(7),p=n(1084),g=n(843),v=function(e){function t(){var n,o,i;a()(this,t);for(var s=arguments.length,r=Array(s),l=0;l<s;l++)r[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(r))),o.onPushChange=function(e,t){o.props.onChange(["push"].concat(e),t)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.pushSettings,o=e.onChange,s=e.onClear,a=i()(h.b,{id:"notifications.column_settings.alert",defaultMessage:"Desktop notifications"}),r=i()(h.b,{id:"notifications.column_settings.show",defaultMessage:"Show in column"}),c=i()(h.b,{id:"notifications.column_settings.sound",defaultMessage:"Play sound"}),l=n.get("browserSupport")&&n.get("isSubscribed"),u=l&&i()(h.b,{id:"notifications.column_settings.push",defaultMessage:"Push notifications"}),d=l&&i()(h.b,{id:"notifications.column_settings.push_meta",defaultMessage:"This device"});return i()("div",{},void 0,i()("div",{className:"column-settings__row"},void 0,i()(p.a,{onClick:s})),i()("div",{role:"group","aria-labelledby":"notifications-follow"},void 0,i()("span",{id:"notifications-follow",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.follow",defaultMessage:"New followers:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingKey:["alerts","follow"],onChange:o,label:a}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingKey:["alerts","follow"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["shows","follow"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["sounds","follow"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-favourite"},void 0,i()("span",{id:"notifications-favourite",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.favourite",defaultMessage:"Favourites:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingKey:["alerts","favourite"],onChange:o,label:a}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingKey:["alerts","favourite"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["shows","favourite"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["sounds","favourite"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-mention"},void 0,i()("span",{id:"notifications-mention",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.mention",defaultMessage:"Mentions:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingKey:["alerts","mention"],onChange:o,label:a}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingKey:["alerts","mention"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["shows","mention"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["sounds","mention"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-reblog"},void 0,i()("span",{id:"notifications-reblog",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.reblog",defaultMessage:"Boosts:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:t,settingKey:["alerts","reblog"],onChange:o,label:a}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingKey:["alerts","reblog"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["shows","reblog"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:t,settingKey:["sounds","reblog"],onChange:o,label:c}))))},t}(f.a.PureComponent)},1084:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),i=n.n(o),s=n(2),a=n.n(s),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(7),p=function(e){function t(){return a()(this,t),c()(this,e.apply(this,arguments))}return u()(t,e),t.prototype.render=function(){return i()("button",{className:"text-btn column-header__setting-btn",tabIndex:"0",onClick:this.props.onClick},void 0,i()("i",{className:"fa fa-eraser"})," ",i()(h.b,{id:"notifications.clear",defaultMessage:"Clear notifications"}))},t}(f.a.Component)},295:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ScrollContext=t.ScrollContainer=void 0;var i=n(296),s=o(i),a=n(169),r=o(a);t.ScrollContainer=s.default,t.ScrollContext=r.default},296:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=n(0),c=o(r),l=n(57),u=o(l),d=n(28),f=(o(d),{scrollKey:c.default.PropTypes.string.isRequired,shouldUpdateScroll:c.default.PropTypes.func,children:c.default.PropTypes.element.isRequired}),h={scrollBehavior:c.default.PropTypes.object},p=function(e){function t(n,o){i(this,t);var a=s(this,e.call(this,n,o));return a.shouldUpdateScroll=function(e,t){var n=a.props.shouldUpdateScroll;return!n||n.call(a.context.scrollBehavior.scrollBehavior,e,t)},a.scrollKey=n.scrollKey,a}return a(t,e),t.prototype.componentDidMount=function(){this.context.scrollBehavior.registerElement(this.props.scrollKey,u.default.findDOMNode(this),this.shouldUpdateScroll)},t.prototype.componentWillReceiveProps=function(e){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillUnmount=function(){this.context.scrollBehavior.unregisterElement(this.scrollKey)},t.prototype.render=function(){return this.props.children},t}(c.default.Component);p.propTypes=f,p.contextTypes=h,t.default=p,e.exports=t.default},298:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o,i,s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(0),p=n.n(h),g=n(7),v=(i=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return f()(t,e),t.prototype.render=function(){var e=this.props.visible;return a()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,a()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(p.a.PureComponent),o.defaultProps={visible:!0},i)},299:function(e,t,n){"use strict";var o=n(1),i=n.n(o),s=n(0),a=(n.n(s),n(12)),r=n(170),c=n(87),l=n(17),u=n(58),d=n(25),f=n(73),h=n(168),p=n(39),g=n(7),v=Object(g.g)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),m=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},b=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.J)(t,n))},onModalReblog:function(t){e(Object(u.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.t)(t)):n.shiftKey||!this.boostModal?this.onModalReblog(t):e(Object(p.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.r)(t):Object(u.m)(t))},onPin:function(t){e(t.get("pinned")?Object(u.s)(t):Object(u.p)(t))},onEmbed:function(t){e(Object(p.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(this.deleteModal?Object(p.d)("CONFIRM",{message:n.formatMessage(v.deleteMessage),confirm:n.formatMessage(v.deleteConfirm),onConfirm:function(){return e(Object(f.e)(t.get("id")))}}):Object(f.e)(t.get("id")))},onMention:function(t,n){e(Object(l.H)(t,n))},onOpenMedia:function(t,n){e(Object(p.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(p.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(p.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.blockConfirm),onConfirm:function(){return e(Object(d.r)(t.get("id")))}}))},onReport:function(t){e(Object(h.i)(t.get("account"),t))},onMute:function(t){e(Object(p.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.muteConfirm),onConfirm:function(){return e(Object(d.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(f.h)(t.get("id")):Object(f.g)(t.get("id")))}}};t.a=Object(g.h)(Object(a.connect)(m,b)(r.a))},300:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var o,i,s=n(1),a=n.n(s),r=n(2),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(172),p=n.n(h),g=n(0),v=n.n(g),m=n(295),b=(n.n(m),n(5)),y=n.n(b),M=n(301),C=n(298),k=n(306),_=n(9),O=(n.n(_),i=o=function(e){function t(){var n,o,i;c()(this,t);for(var s=arguments.length,a=Array(s),r=0;r<s;r++)a[r]=arguments[r];return n=o=u()(this,e.call.apply(e,[this].concat(a))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new k.a,o.handleScroll=p()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight,s=n-t-i;o._oldScrollPosition=n-t,400>s&&o.props.onScrollToBottom&&!o.props.isLoading?o.props.onScrollToBottom():t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=p()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onScrollToBottom()},o.handleKeyDown=function(e){if(["PageDown","PageUp"].includes(e.key)||e.ctrlKey&&["End","Home"].includes(e.key)){var t=function(){switch(e.key){case"PageDown":return"ARTICLE"===e.target.nodeName&&e.target.nextElementSibling;case"PageUp":return"ARTICLE"===e.target.nodeName&&e.target.previousElementSibling;case"End":return o.node.querySelector('[role="feed"] > article:last-of-type');case"Home":return o.node.querySelector('[role="feed"] > article:first-of-type');default:return null}}();t&&(e.preventDefault(),t.focus(),t.scrollIntoView())}},i=n,u()(o,i)}return f()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(v.a.Children.count(e.children)>0&&v.a.Children.count(e.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver()},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof _.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,s=t.shouldUpdateScroll,r=t.isLoading,c=t.hasMore,l=t.prepend,u=t.emptyMessage,d=v.a.Children.count(n),f=c&&d>0?a()(C.a,{visible:!r,onClick:this.handleLoadMore}):null,h=null;return h=r||d>0||!u?v.a.createElement("div",{className:"scrollable",ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},a()("div",{role:"feed",className:"item-list",onKeyDown:this.handleKeyDown},void 0,l,v.a.Children.map(this.props.children,function(t,n){return a()(M.a,{id:t.key,index:n,listLength:d,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),f)):v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?a()(m.ScrollContainer,{scrollKey:o,shouldUpdateScroll:s},void 0,h):h},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},301:function(e,t,n){"use strict";var o=n(12),i=n(302),s=n(109),a=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},r=function(e){return{onHeightChange:function(t,n,o){e(Object(s.d)(t,n,o))}}};t.a=Object(o.connect)(a,r)(i.a)},302:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o,i,s=n(2),a=n.n(s),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(5),p=n.n(h),g=n(16),v=n.n(g),m=n(303),b=n(305),y=(i=o=function(e){function t(){var n,o,i;a()(this,t);for(var s=arguments.length,r=Array(s),l=0;l<s;l++)r[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(r))),o.state={isHidden:!1},o.handleIntersection=function(e){var t=o.props,n=t.onHeightChange,i=t.saveHeightKey,s=t.id;o.node&&0!==o.node.children.length&&(o.height=Object(b.a)(e).height,n&&i&&n(i,s,o.height)),o.setState(function(t){return t.isIntersecting&&!e.isIntersecting&&Object(m.a)(o.hideIfNotIntersecting),{isIntersecting:e.isIntersecting,isHidden:!1}})},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},i=n,c()(o,i)}return u()(t,e),t.prototype.shouldComponentUpdate=function(t,n){return!n.isIntersecting&&n.isHidden?this.state.isIntersecting||!this.state.isHidden||t.listLength!==this.props.listLength:!(!n.isIntersecting||this.state.isIntersecting)||e.prototype.shouldComponentUpdate.call(this,t,n)},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,s=e.cachedHeight,a=this.state,r=a.isIntersecting,c=a.isHidden;return r||!c&&!s?f.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&f.a.cloneElement(t,{hidden:!1})):f.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||s)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&f.a.cloneElement(t,{hidden:!0}))},t}(v.a),o.propTypes={intersectionObserverWrapper:p.a.object.isRequired,id:p.a.oneOfType([p.a.string,p.a.number]),index:p.a.oneOfType([p.a.string,p.a.number]),listLength:p.a.oneOfType([p.a.string,p.a.number]),saveHeightKey:p.a.string,cachedHeight:p.a.number,onHeightChange:p.a.func,children:p.a.node},i)},303:function(e,t,n){"use strict";function o(e){for(;r.length&&e.timeRemaining()>0;)r.shift()();r.length?requestIdleCallback(o):c=!1}function i(e){r.push(e),c||(c=!0,requestIdleCallback(o))}var s=n(304),a=n.n(s),r=new a.a,c=!1;t.a=i},304:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},305:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},306:function(e,t,n){"use strict";var o=n(2),i=n.n(o),s=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=s},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return P});var o,i,s,a,r=n(1),c=n.n(r),l=n(2),u=n.n(l),d=n(3),f=n.n(d),h=n(4),p=n.n(h),g=n(56),v=n.n(g),m=n(0),b=n.n(m),y=n(12),M=n(178),C=n(177),k=n(61),_=n(313),O=n(1080),w=n(7),j=n(1082),S=n(111),I=(n.n(S),n(9)),T=(n.n(I),n(300)),N=Object(w.g)({title:{id:"column.notifications",defaultMessage:"Notifications"}}),x=Object(S.createSelector)([function(e){return Object(I.List)(e.getIn(["settings","notifications","shows"]).filter(function(e){return!e}).keys())},function(e){return e.getIn(["notifications","items"])}],function(e,t){return t.filterNot(function(t){return e.includes(t.get("type"))})}),E=function(e){return{notifications:x(e),isLoading:e.getIn(["notifications","isLoading"],!0),isUnread:e.getIn(["notifications","unread"])>0,hasMore:!!e.getIn(["notifications","next"])}},P=(o=Object(y.connect)(E))(i=Object(w.h)((a=s=function(e){function t(){var n,o,i;u()(this,t);for(var s=arguments.length,a=Array(s),r=0;r<s;r++)a[r]=arguments[r];return n=o=f()(this,e.call.apply(e,[this].concat(a))),o.handleScrollToBottom=v()(function(){o.props.dispatch(Object(k.m)(!1)),o.props.dispatch(Object(k.k)())},300,{leading:!0}),o.handleScrollToTop=v()(function(){o.props.dispatch(Object(k.m)(!0))},100),o.handleScroll=v()(function(){o.props.dispatch(Object(k.m)(!1))},100),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(_.f)(t):Object(_.d)("NOTIFICATIONS",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(_.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setColumnRef=function(e){o.column=e},i=n,f()(o,i)}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,n=e.notifications,o=e.shouldUpdateScroll,i=e.isLoading,s=e.isUnread,a=e.columnId,r=e.multiColumn,l=e.hasMore,u=!!a,d=c()(w.b,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. Interact with others to start the conversation."}),f=null;f=i&&this.scrollableContent?this.scrollableContent:n.size>0||l?n.map(function(e){return c()(O.a,{notification:e,accountId:e.get("account")},e.get("id"))}):null,this.scrollableContent=f;var h=c()(T.a,{scrollKey:"notifications-"+a,trackScroll:!u,isLoading:i,hasMore:l,emptyMessage:d,onScrollToBottom:this.handleScrollToBottom,onScrollToTop:this.handleScrollToTop,onScroll:this.handleScroll,shouldUpdateScroll:o},void 0,f);return b.a.createElement(M.a,{ref:this.setColumnRef},c()(C.a,{icon:"bell",active:s,title:t.formatMessage(N.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:u,multiColumn:r},void 0,c()(j.a,{})),h)},t}(b.a.PureComponent),s.defaultProps={trackScroll:!0},i=a))||i)||i},795:function(e,t,n){"use strict";var o=n(1),i=n.n(o),s=n(0),a=(n.n(s),n(12)),r=n(7),c=n(87),l=n(796),u=n(25),d=n(39),f=Object(r.g)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),h=function(){var e=Object(c.c)();return function(t,n){return{account:e(t,n.id),me:t.getIn(["meta","me"]),unfollowModal:t.getIn(["meta","unfollow_modal"])}}},p=function(e,t){var n=t.intl;return{onFollow:function(t){e(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?this.unfollowModal?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(f.unfollowConfirm),onConfirm:function(){return e(Object(u.E)(t.get("id")))}}):Object(u.E)(t.get("id")):Object(u.A)(t.get("id")))},onBlock:function(t){e(t.getIn(["relationship","blocking"])?Object(u.D)(t.get("id")):Object(u.r)(t.get("id")))},onMute:function(t){e(t.getIn(["relationship","muting"])?Object(u.F)(t.get("id")):Object(u.B)(t.get("id")))}}};t.a=Object(r.h)(Object(a.connect)(h,p)(l.a))},796:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var o,i,s,a=n(1),r=n.n(a),c=n(2),l=n.n(c),u=n(3),d=n.n(u),f=n(4),h=n.n(f),p=n(0),g=(n.n(p),n(21)),v=n.n(g),m=n(5),b=n.n(m),y=n(71),M=n(72),C=n(309),k=n(24),_=n(7),O=n(16),w=n.n(O),j=Object(_.g)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"}}),S=Object(_.h)((s=i=function(e){function t(){var n,o,i;l()(this,t);for(var s=arguments.length,a=Array(s),r=0;r<s;r++)a[r]=arguments[r];return n=o=d()(this,e.call.apply(e,[this].concat(a))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},i=n,d()(o,i)}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.account,n=e.me,o=e.intl,i=e.hidden;if(!t)return r()("div",{});if(i)return r()("div",{},void 0,t.get("display_name"),t.get("username"));var s=void 0;if(t.get("id")!==n&&null!==t.get("relationship",null)){var a=t.getIn(["relationship","following"]),c=t.getIn(["relationship","requested"]),l=t.getIn(["relationship","blocking"]),u=t.getIn(["relationship","muting"]);s=c?r()(k.a,{disabled:!0,icon:"hourglass",title:o.formatMessage(j.requested)}):l?r()(k.a,{active:!0,icon:"unlock-alt",title:o.formatMessage(j.unblock,{name:t.get("username")}),onClick:this.handleBlock}):u?r()(k.a,{active:!0,icon:"volume-up",title:o.formatMessage(j.unmute,{name:t.get("username")}),onClick:this.handleMute}):r()(k.a,{icon:a?"user-times":"user-plus",title:o.formatMessage(a?j.unfollow:j.follow),onClick:this.handleFollow,active:a})}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(C.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(y.a,{account:t,size:36})),r()(M.a,{account:t})),r()("div",{className:"account__relationship"},void 0,s)))},t}(w.a),i.propTypes={account:v.a.map.isRequired,me:b.a.number.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=s))||o},810:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),d=o(u),f=n(35),h=o(f),p=n(5),g=o(p),v=n(811),m=o(v),b=n(812),y=o(b),M=n(813),C=function(e){function t(e){s(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return r(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})}},{key:"handleTouchStart",value:function(e){this.startX=(0,M.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,M.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,M.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,i(t,["className","icons"])),s=(0,h.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return d.default.createElement("div",{className:s,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},d.default.createElement("div",{className:"react-toggle-track"},d.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),d.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),d.default.createElement("div",{className:"react-toggle-thumb"}),d.default.createElement("input",c({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(u.PureComponent);t.default=C,C.displayName="Toggle",C.defaultProps={icons:{checked:d.default.createElement(m.default,null),unchecked:d.default.createElement(y.default,null)}},C.propTypes={checked:g.default.bool,disabled:g.default.bool,defaultChecked:g.default.bool,onChange:g.default.func,onFocus:g.default.func,onBlur:g.default.func,className:g.default.string,name:g.default.string,value:g.default.string,id:g.default.string,"aria-labelledby":g.default.string,"aria-label":g.default.string,icons:g.default.oneOfType([g.default.bool,g.default.shape({checked:g.default.node,unchecked:g.default.node})])}},811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},812:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},813:function(e,t,n){"use strict";function o(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=o},843:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(1),i=n.n(o),s=n(2),a=n.n(s),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(810),p=n.n(h),g=function(e){function t(){var n,o,i;a()(this,t);for(var s=arguments.length,r=Array(s),l=0;l<s;l++)r[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(r))),o.onChange=function(e){var t=e.target;o.props.onChange(o.props.settingKey,t.checked)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.settings,o=e.settingKey,s=e.label,a=e.meta,r=["setting-toggle",t].concat(o).filter(Boolean).join("-");return i()("div",{className:"setting-toggle"},void 0,i()(p.a,{id:r,checked:n.getIn(o),onChange:this.onChange,onKeyDown:this.onKeyDown}),i()("label",{htmlFor:r,className:"setting-toggle__label"},void 0,s),a&&i()("span",{className:"setting-meta__label"},void 0,a))},t}(f.a.PureComponent)}});
//# sourceMappingURL=notifications-cfee25c620eb46184296.js.map