webpackJsonp([8],{1079:function(e,t,n){"use strict";var o=n(12),r=n(1080),i=n(112),s=function(e){return{settings:e.getIn(["settings","home"])}},a=function(e){return{onChange:function(t,n){e(Object(i.b)(["home"].concat(t),n))},onSave:function(){e(Object(i.c)())}}};t.a=Object(o.connect)(s,a)(r.a)},1080:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,r=n(1),i=n.n(r),s=n(2),a=n.n(s),c=n(3),l=n.n(c),u=n(4),d=n.n(u),h=n(0),f=n.n(h),p=n(7),g=n(841),v=n(814),m=Object(p.g)({filter_regex:{id:"home.column_settings.filter_regex",defaultMessage:"Filter out by regular expressions"},settings:{id:"home.settings",defaultMessage:"Column settings"}}),b=Object(p.h)(o=function(e){function t(){return a()(this,t),l()(this,e.apply(this,arguments))}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange,o=e.intl;return i()("div",{},void 0,i()("span",{className:"column-settings__section"},void 0,i()(p.b,{id:"home.column_settings.basic",defaultMessage:"Basic"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"home_timeline",settings:t,settingKey:["shows","reblog"],onChange:n,label:i()(p.b,{id:"home.column_settings.show_reblogs",defaultMessage:"Show boosts"})})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"home_timeline",settings:t,settingKey:["shows","reply"],onChange:n,label:i()(p.b,{id:"home.column_settings.show_replies",defaultMessage:"Show replies"})})),i()("span",{className:"column-settings__section"},void 0,i()(p.b,{id:"home.column_settings.advanced",defaultMessage:"Advanced"})),i()("div",{className:"column-settings__row"},void 0,i()(v.a,{prefix:"home_timeline",settings:t,settingKey:["regex","body"],onChange:n,label:o.formatMessage(m.filter_regex)})))},t}(f.a.PureComponent))||o},295:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ScrollContext=t.ScrollContainer=void 0;var r=n(296),i=o(r),s=n(168),a=o(s);t.ScrollContainer=i.default,t.ScrollContext=a.default},296:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(0),c=o(a),l=n(57),u=o(l),d=n(28),h=(o(d),{scrollKey:c.default.PropTypes.string.isRequired,shouldUpdateScroll:c.default.PropTypes.func,children:c.default.PropTypes.element.isRequired}),f={scrollBehavior:c.default.PropTypes.object},p=function(e){function t(n,o){r(this,t);var s=i(this,e.call(this,n,o));return s.shouldUpdateScroll=function(e,t){var n=s.props.shouldUpdateScroll;return!n||n.call(s.context.scrollBehavior.scrollBehavior,e,t)},s.scrollKey=n.scrollKey,s}return s(t,e),t.prototype.componentDidMount=function(){this.context.scrollBehavior.registerElement(this.props.scrollKey,u.default.findDOMNode(this),this.shouldUpdateScroll)},t.prototype.componentWillReceiveProps=function(e){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillUnmount=function(){this.context.scrollBehavior.unregisterElement(this.scrollKey)},t.prototype.render=function(){return this.props.children},t}(c.default.Component);p.propTypes=h,p.contextTypes=f,t.default=p,e.exports=t.default},298:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o,r,i=n(1),s=n.n(i),a=n(2),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=n.n(f),g=n(7),v=(r=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props.visible;return s()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(p.a.PureComponent),o.defaultProps={visible:!0},r)},299:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(0),s=(n.n(i),n(12)),a=n(171),c=n(87),l=n(17),u=n(58),d=n(24),h=n(72),f=n(169),p=n(40),g=n(7),v=Object(g.g)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),m=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},b=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.H)(t,n))},onModalReblog:function(t){e(Object(u.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.t)(t)):n.shiftKey||!this.boostModal?this.onModalReblog(t):e(Object(p.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.r)(t):Object(u.m)(t))},onPin:function(t){e(t.get("pinned")?Object(u.s)(t):Object(u.p)(t))},onEmbed:function(t){e(Object(p.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(this.deleteModal?Object(p.d)("CONFIRM",{message:n.formatMessage(v.deleteMessage),confirm:n.formatMessage(v.deleteConfirm),onConfirm:function(){return e(Object(h.e)(t.get("id")))}}):Object(h.e)(t.get("id")))},onMention:function(t,n){e(Object(l.G)(t,n))},onOpenMedia:function(t,n){e(Object(p.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(p.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(p.d)("CONFIRM",{message:r()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:r()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.blockConfirm),onConfirm:function(){return e(Object(d.r)(t.get("id")))}}))},onReport:function(t){e(Object(f.i)(t.get("account"),t))},onMute:function(t){e(Object(p.d)("CONFIRM",{message:r()(g.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:r()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.muteConfirm),onConfirm:function(){return e(Object(d.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(h.h)(t.get("id")):Object(h.g)(t.get("id")))}}};t.a=Object(g.h)(Object(s.connect)(m,b)(a.a))},300:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var o,r,i=n(1),s=n.n(i),a=n(2),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(172),p=n.n(f),g=n(0),v=n.n(g),m=n(295),b=(n.n(m),n(5)),y=n.n(b),O=n(301),M=n(298),k=n(306),_=n(9),C=(n.n(_),r=o=function(e){function t(){var n,o,r;c()(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new k.a,o.handleScroll=p()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight,i=n-t-r;o._oldScrollPosition=n-t,400>i&&o.props.onScrollToBottom&&!o.props.isLoading?o.props.onScrollToBottom():t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=p()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onScrollToBottom()},o.handleKeyDown=function(e){if(["PageDown","PageUp"].includes(e.key)||e.ctrlKey&&["End","Home"].includes(e.key)){var t=function(){switch(e.key){case"PageDown":return"ARTICLE"===e.target.nodeName&&e.target.nextElementSibling;case"PageUp":return"ARTICLE"===e.target.nodeName&&e.target.previousElementSibling;case"End":return o.node.querySelector('[role="feed"] > article:last-of-type');case"Home":return o.node.querySelector('[role="feed"] > article:first-of-type');default:return null}}();t&&(e.preventDefault(),t.focus(),t.scrollIntoView())}},r=n,u()(o,r)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(v.a.Children.count(e.children)>0&&v.a.Children.count(e.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver()},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof _.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,r=t.trackScroll,i=t.shouldUpdateScroll,a=t.isLoading,c=t.hasMore,l=t.prepend,u=t.emptyMessage,d=v.a.Children.count(n),h=c&&d>0?s()(M.a,{visible:!a,onClick:this.handleLoadMore}):null,f=null;return f=a||d>0||!u?v.a.createElement("div",{className:"scrollable",ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},s()("div",{role:"feed",className:"item-list",onKeyDown:this.handleKeyDown},void 0,l,v.a.Children.map(this.props.children,function(t,n){return s()(O.a,{id:t.key,index:n,listLength:d,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:r?e.context.router.route.location.key+":"+o:null},t.key,t)}),h)):v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),r?s()(m.ScrollContainer,{scrollKey:o,shouldUpdateScroll:i},void 0,f):f},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},r)},301:function(e,t,n){"use strict";var o=n(12),r=n(302),i=n(109),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},a=function(e){return{onHeightChange:function(t,n,o){e(Object(i.d)(t,n,o))}}};t.a=Object(o.connect)(s,a)(r.a)},302:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o,r,i=n(2),s=n.n(i),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(5),p=n.n(f),g=n(16),v=n.n(g),m=n(303),b=n(305),y=(r=o=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.state={isHidden:!1},o.handleIntersection=function(e){var t=o.props,n=t.onHeightChange,r=t.saveHeightKey,i=t.id;o.node&&0!==o.node.children.length&&(o.height=Object(b.a)(e).height,n&&r&&n(r,i,o.height)),o.setState(function(t){return t.isIntersecting&&!e.isIntersecting&&Object(m.a)(o.hideIfNotIntersecting),{isIntersecting:e.isIntersecting,isHidden:!1}})},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,c()(o,r)}return u()(t,e),t.prototype.shouldComponentUpdate=function(t,n){return!n.isIntersecting&&n.isHidden?this.state.isIntersecting||!this.state.isHidden||t.listLength!==this.props.listLength:!(!n.isIntersecting||this.state.isIntersecting)||e.prototype.shouldComponentUpdate.call(this,t,n)},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,r=e.listLength,i=e.cachedHeight,s=this.state,a=s.isIntersecting,c=s.isHidden;return a||!c&&!i?h.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":r,"data-id":n,tabIndex:"0"},t&&h.a.cloneElement(t,{hidden:!1})):h.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":r,style:{height:(this.height||i)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&h.a.cloneElement(t,{hidden:!0}))},t}(v.a),o.propTypes={intersectionObserverWrapper:p.a.object.isRequired,id:p.a.oneOfType([p.a.string,p.a.number]),index:p.a.oneOfType([p.a.string,p.a.number]),listLength:p.a.oneOfType([p.a.string,p.a.number]),saveHeightKey:p.a.string,cachedHeight:p.a.number,onHeightChange:p.a.func,children:p.a.node},r)},303:function(e,t,n){"use strict";function o(e){for(;a.length&&e.timeRemaining()>0;)a.shift()();a.length?requestIdleCallback(o):c=!1}function r(e){a.push(e),c||(c=!0,requestIdleCallback(o))}var i=n(304),s=n.n(i),a=new s.a,c=!1;t.a=r},304:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,r=this.first;r&&!(--t<0);r=r.next)++o>e&&n.push(r.item);return n},e.exports=o},305:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof r){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;r=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return r?e.target.getBoundingClientRect():e.boundingClientRect}var r=void 0;t.a=o},306:function(e,t,n){"use strict";var o=n(2),r=n.n(o),i=function(){function e(){r()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],r=e[2];t.observe(n,o,r)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=i},307:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var o,r,i=n(1),s=n.n(i),a=n(36),c=n.n(a),l=n(2),u=n.n(l),d=n(3),h=n.n(d),f=n(4),p=n.n(f),g=n(0),v=n.n(g),m=n(21),b=n.n(m),y=n(5),O=n.n(y),M=n(299),k=n(16),_=n.n(k),C=n(300),j=(r=o=function(e){function t(){return u()(this,t),h()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.statusIds,n=c()(e,["statusIds"]),o=n.isLoading,r=o||t.size>0?t.map(function(e){return s()(M.a,{id:e},e)}):null;return v.a.createElement(C.a,n,r)},t}(_.a),o.propTypes={scrollKey:O.a.string.isRequired,statusIds:b.a.list.isRequired,onScrollToBottom:O.a.func,onScrollToTop:O.a.func,onScroll:O.a.func,trackScroll:O.a.bool,shouldUpdateScroll:O.a.func,isLoading:O.a.bool,hasMore:O.a.bool,prepend:O.a.node,emptyMessage:O.a.node},o.defaultProps={trackScroll:!0},r)},308:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),u=o(l),d=n(5),h=o(d),f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},p=function(e){function t(){var n,o,r;i(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=o=s(this,e.call.apply(e,[this].concat(c))),o.handleClick=function(e){if(o.props.onClick&&o.props.onClick(e),!e.defaultPrevented&&0===e.button&&!o.props.target&&!f(e)){e.preventDefault();var t=o.context.router.history,n=o.props,r=n.replace,i=n.to;r?t.replace(i):t.push(i)}},r=n,s(o,r)}return a(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=r(e,["replace","to"]),o=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return u.default.createElement("a",c({},n,{onClick:this.handleClick,href:o}))},t}(u.default.Component);p.propTypes={onClick:h.default.func,target:h.default.string,replace:h.default.bool,to:h.default.oneOfType([h.default.string,h.default.object]).isRequired},p.defaultProps={replace:!1},p.contextTypes={router:h.default.shape({history:h.default.shape({push:h.default.func.isRequired,replace:h.default.func.isRequired,createHref:h.default.func.isRequired}).isRequired}).isRequired},t.default=p},311:function(e,t,n){"use strict";var o=n(56),r=n.n(o),i=n(12),s=n(307),a=n(20),c=n(9),l=(n.n(c),n(111)),u=(n.n(l),function(){return Object(l.createSelector)([function(e,t){var n=t.type;return e.getIn(["settings",n],Object(c.Map)())},function(e,t){var n=t.type;return e.getIn(["timelines",n,"items"],Object(c.List)())},function(e){return e.get("statuses")},function(e){return e.getIn(["meta","me"])}],function(e,t,n,o){var r=e.getIn(["regex","body"],"").trim(),i=null;try{i=r&&new RegExp(r,"i")}catch(e){}return t.filter(function(t){var r=n.get(t),s=!0;if(!1===e.getIn(["shows","reblog"])&&(s=s&&null===r.get("reblog")),!1===e.getIn(["shows","reply"])&&(s=s&&(null===r.get("in_reply_to_id")||r.get("in_reply_to_account_id")===o)),s&&i&&r.get("account")!==o){var a=r.get("reblog")?n.getIn([r.get("reblog"),"search_index"]):r.get("search_index");s=!i.test(a)}return s})})}),d=function(){var e=u();return function(t,n){var o=n.timelineId;return{statusIds:e(t,{type:o}),isLoading:t.getIn(["timelines",o,"isLoading"],!0),hasMore:!!t.getIn(["timelines",o,"next"])}}},h=function(e,t){var n=t.timelineId,o=t.loadMore;return{onScrollToBottom:r()(function(){e(Object(a.A)(n,!1)),o()},300,{leading:!0}),onScrollToTop:r()(function(){e(Object(a.A)(n,!0))},100),onScroll:r()(function(){e(Object(a.A)(n,!1))},100)}};t.a=Object(i.connect)(d,h)(s.a)},773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return S});var o,r,i=n(1),s=n.n(i),a=n(2),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=n.n(f),g=n(12),v=n(20),m=n(311),b=n(177),y=n(176),O=n(313),M=n(7),k=n(1079),_=n(308),C=n.n(_),j=Object(M.g)({title:{id:"column.home",defaultMessage:"Home"}}),w=function(e){return{hasUnread:e.getIn(["timelines","home","unread"])>0,hasFollows:e.getIn(["accounts_counters",e.getIn(["meta","me"]),"following_count"])>0}},S=(o=Object(g.connect)(w))(r=Object(M.h)(r=function(e){function t(){var n,o,r;c()(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(O.f)(t):Object(O.d)("HOME",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(O.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleLoadMore=function(){o.props.dispatch(Object(v.s)())},r=n,u()(o,r)}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,n=e.hasUnread,o=e.hasFollows,r=e.columnId,i=e.multiColumn,a=!!r,c=void 0;return c=o?s()(M.b,{id:"empty_column.home.inactivity",defaultMessage:"Your home feed is empty. If you have been inactive for a while, it will be regenerated for you soon."}):s()(M.b,{id:"empty_column.home",defaultMessage:"You aren't following anyone yet. Visit {public} or use search to get started and meet other users.",values:{public:s()(C.a,{to:"/timelines/public"},void 0,s()(M.b,{id:"empty_column.home.public_timeline",defaultMessage:"the public timeline"}))}}),p.a.createElement(b.a,{ref:this.setRef},s()(y.a,{icon:"home",active:n,title:t.formatMessage(j.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:a,multiColumn:i},void 0,s()(k.a,{})),s()(m.a,{trackScroll:!a,scrollKey:"home_timeline-"+r,loadMore:this.handleLoadMore,timelineId:"home",emptyMessage:c}))},t}(p.a.PureComponent))||r)||r},810:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),d=o(u),h=n(35),f=o(h),p=n(5),g=o(p),v=n(811),m=o(v),b=n(812),y=o(b),O=n(813),M=function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})}},{key:"handleTouchStart",value:function(e){this.startX=(0,O.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,O.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,O.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,r(t,["className","icons"])),i=(0,f.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return d.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},d.default.createElement("div",{className:"react-toggle-track"},d.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),d.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),d.default.createElement("div",{className:"react-toggle-thumb"}),d.default.createElement("input",c({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(u.PureComponent);t.default=M,M.displayName="Toggle",M.defaultProps={icons:{checked:d.default.createElement(m.default,null),unchecked:d.default.createElement(y.default,null)}},M.propTypes={checked:g.default.bool,disabled:g.default.bool,defaultChecked:g.default.bool,onChange:g.default.func,onFocus:g.default.func,onBlur:g.default.func,className:g.default.string,name:g.default.string,value:g.default.string,id:g.default.string,"aria-labelledby":g.default.string,"aria-label":g.default.string,icons:g.default.oneOfType([g.default.bool,g.default.shape({checked:g.default.node,unchecked:g.default.node})])}},811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},812:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},813:function(e,t,n){"use strict";function o(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=o},814:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(1),r=n.n(o),i=n(2),s=n.n(i),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.handleChange=function(e){o.props.onChange(o.props.settingKey,e.target.value)},r=n,c()(o,r)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.settingKey,o=e.label;return r()("label",{},void 0,r()("span",{style:{display:"none"}},void 0,o),r()("input",{className:"setting-text",value:t.getIn(n),onChange:this.handleChange,placeholder:o}))},t}(h.a.PureComponent)},841:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(1),r=n.n(o),i=n(2),s=n.n(i),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(810),p=n.n(f),g=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,a=Array(i),l=0;l<i;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.onChange=function(e){var t=e.target;o.props.onChange(o.props.settingKey,t.checked)},r=n,c()(o,r)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.settings,o=e.settingKey,i=e.label,s=e.meta,a=["setting-toggle",t].concat(o).filter(Boolean).join("-");return r()("div",{className:"setting-toggle"},void 0,r()(p.a,{id:a,checked:n.getIn(o),onChange:this.onChange,onKeyDown:this.onKeyDown}),r()("label",{htmlFor:a,className:"setting-toggle__label"},void 0,i),s&&r()("span",{className:"setting-meta__label"},void 0,s))},t}(h.a.PureComponent)}});
//# sourceMappingURL=home_timeline-6c588cff542ff8aafb77.js.map