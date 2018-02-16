webpackJsonp([13],{167:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),r=n.n(o),i=n(2),s=n.n(i),c=n(3),a=n.n(c),l=n(4),u=n.n(l),d=n(0),h=n.n(d),p=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=o=a()(this,e.call.apply(e,[this].concat(c))),o.handleClick=function(){o.props.onClick()},r=n,a()(o,r)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.active,o=e.columnHeaderId,i="";return this.props.icon&&(i=r()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),r()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:o||null},void 0,i,t)},t}(h.a.PureComponent)},295:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ScrollContext=t.ScrollContainer=void 0;var r=n(296),i=o(r),s=n(169),c=o(s);t.ScrollContainer=i.default,t.ScrollContext=c.default},296:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(0),a=o(c),l=n(57),u=o(l),d=n(28),h=(o(d),{scrollKey:a.default.PropTypes.string.isRequired,shouldUpdateScroll:a.default.PropTypes.func,children:a.default.PropTypes.element.isRequired}),p={scrollBehavior:a.default.PropTypes.object},f=function(e){function t(n,o){r(this,t);var s=i(this,e.call(this,n,o));return s.shouldUpdateScroll=function(e,t){var n=s.props.shouldUpdateScroll;return!n||n.call(s.context.scrollBehavior.scrollBehavior,e,t)},s.scrollKey=n.scrollKey,s}return s(t,e),t.prototype.componentDidMount=function(){this.context.scrollBehavior.registerElement(this.props.scrollKey,u.default.findDOMNode(this),this.shouldUpdateScroll)},t.prototype.componentWillReceiveProps=function(e){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillUnmount=function(){this.context.scrollBehavior.unregisterElement(this.scrollKey)},t.prototype.render=function(){return this.props.children},t}(a.default.Component);f.propTypes=h,f.contextTypes=p,t.default=f,e.exports=t.default},297:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n(1),r=n.n(o),i=n(2),s=n.n(i),c=n(3),a=n.n(c),l=n(4),u=n.n(l),d=n(56),h=n.n(d),p=n(0),f=n.n(p),g=n(167),m=n(106),v=n(41),b=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=o=a()(this,e.call.apply(e,[this].concat(c))),o.handleHeaderClick=function(){var e=o.node.querySelector(".scrollable");e&&(o._interruptScrollAnimation=Object(m.b)(e))},o.handleScroll=h()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(e){o.node=e},r=n,a()(o,r)}return u()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(m.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,n=e.icon,o=e.children,i=e.active,s=e.hideHeadingOnMobile,c=t&&(!s||s&&!Object(v.b)(window.innerWidth)),a=c&&t.replace(/ /g,"-"),l=c&&r()(g.a,{icon:n,active:i,type:t,onClick:this.handleHeaderClick,columnHeaderId:a});return f.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":a,className:"column",onScroll:this.handleScroll},l,o)},t}(f.a.PureComponent)},298:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o,r,i=n(1),s=n.n(i),c=n(2),a=n.n(c),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),g=n(7),m=(r=o=function(e){function t(){return a()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props.visible;return s()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(f.a.PureComponent),o.defaultProps={visible:!0},r)},299:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=n(0),s=(n.n(i),n(12)),c=n(170),a=n(87),l=n(17),u=n(58),d=n(25),h=n(73),p=n(168),f=n(39),g=n(7),m=Object(g.g)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),v=function(){var e=Object(a.e)();return function(t,n){return{status:e(t,n.id),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},b=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.J)(t,n))},onModalReblog:function(t){e(Object(u.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.t)(t)):n.shiftKey||!this.boostModal?this.onModalReblog(t):e(Object(f.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.r)(t):Object(u.m)(t))},onPin:function(t){e(t.get("pinned")?Object(u.s)(t):Object(u.p)(t))},onEmbed:function(t){e(Object(f.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(this.deleteModal?Object(f.d)("CONFIRM",{message:n.formatMessage(m.deleteMessage),confirm:n.formatMessage(m.deleteConfirm),onConfirm:function(){return e(Object(h.e)(t.get("id")))}}):Object(h.e)(t.get("id")))},onMention:function(t,n){e(Object(l.H)(t,n))},onOpenMedia:function(t,n){e(Object(f.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(f.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(f.d)("CONFIRM",{message:r()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:r()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(m.blockConfirm),onConfirm:function(){return e(Object(d.r)(t.get("id")))}}))},onReport:function(t){e(Object(p.i)(t.get("account"),t))},onMute:function(t){e(Object(f.d)("CONFIRM",{message:r()(g.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:r()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(m.muteConfirm),onConfirm:function(){return e(Object(d.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(h.h)(t.get("id")):Object(h.g)(t.get("id")))}}};t.a=Object(g.h)(Object(s.connect)(v,b)(c.a))},300:function(e,t,n){"use strict";n.d(t,"a",function(){return I});var o,r,i=n(1),s=n.n(i),c=n(2),a=n.n(c),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(172),f=n.n(p),g=n(0),m=n.n(g),v=n(295),b=(n.n(v),n(5)),y=n.n(b),M=n(301),O=n(298),C=n(306),S=n(9),I=(n.n(S),r=o=function(e){function t(){var n,o,r;a()(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new C.a,o.handleScroll=f()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight,i=n-t-r;o._oldScrollPosition=n-t,400>i&&o.props.onScrollToBottom&&!o.props.isLoading?o.props.onScrollToBottom():t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=f()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onScrollToBottom()},o.handleKeyDown=function(e){if(["PageDown","PageUp"].includes(e.key)||e.ctrlKey&&["End","Home"].includes(e.key)){var t=function(){switch(e.key){case"PageDown":return"ARTICLE"===e.target.nodeName&&e.target.nextElementSibling;case"PageUp":return"ARTICLE"===e.target.nodeName&&e.target.previousElementSibling;case"End":return o.node.querySelector('[role="feed"] > article:last-of-type');case"Home":return o.node.querySelector('[role="feed"] > article:first-of-type');default:return null}}();t&&(e.preventDefault(),t.focus(),t.scrollIntoView())}},r=n,u()(o,r)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(m.a.Children.count(e.children)>0&&m.a.Children.count(e.children)<m.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver()},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof S.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,r=t.trackScroll,i=t.shouldUpdateScroll,c=t.isLoading,a=t.hasMore,l=t.prepend,u=t.emptyMessage,d=m.a.Children.count(n),h=a&&d>0?s()(O.a,{visible:!c,onClick:this.handleLoadMore}):null,p=null;return p=c||d>0||!u?m.a.createElement("div",{className:"scrollable",ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},s()("div",{role:"feed",className:"item-list",onKeyDown:this.handleKeyDown},void 0,l,m.a.Children.map(this.props.children,function(t,n){return s()(M.a,{id:t.key,index:n,listLength:d,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:r?e.context.router.route.location.key+":"+o:null},t.key,t)}),h)):m.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),r?s()(v.ScrollContainer,{scrollKey:o,shouldUpdateScroll:i},void 0,p):p},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},r)},301:function(e,t,n){"use strict";var o=n(12),r=n(302),i=n(109),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},c=function(e){return{onHeightChange:function(t,n,o){e(Object(i.d)(t,n,o))}}};t.a=Object(o.connect)(s,c)(r.a)},302:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o,r,i=n(2),s=n.n(i),c=n(3),a=n.n(c),l=n(4),u=n.n(l),d=n(0),h=n.n(d),p=n(5),f=n.n(p),g=n(16),m=n.n(g),v=n(303),b=n(305),y=(r=o=function(e){function t(){var n,o,r;s()(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=o=a()(this,e.call.apply(e,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(e){var t=o.props,n=t.onHeightChange,r=t.saveHeightKey,i=t.id;o.node&&0!==o.node.children.length&&(o.height=Object(b.a)(e).height,n&&r&&n(r,i,o.height)),o.setState(function(t){return t.isIntersecting&&!e.isIntersecting&&Object(v.a)(o.hideIfNotIntersecting),{isIntersecting:e.isIntersecting,isHidden:!1}})},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,a()(o,r)}return u()(t,e),t.prototype.shouldComponentUpdate=function(t,n){return!n.isIntersecting&&n.isHidden?this.state.isIntersecting||!this.state.isHidden||t.listLength!==this.props.listLength:!(!n.isIntersecting||this.state.isIntersecting)||e.prototype.shouldComponentUpdate.call(this,t,n)},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,r=e.listLength,i=e.cachedHeight,s=this.state,c=s.isIntersecting,a=s.isHidden;return c||!a&&!i?h.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":r,"data-id":n,tabIndex:"0"},t&&h.a.cloneElement(t,{hidden:!1})):h.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":r,style:{height:(this.height||i)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&h.a.cloneElement(t,{hidden:!0}))},t}(m.a),o.propTypes={intersectionObserverWrapper:f.a.object.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),index:f.a.oneOfType([f.a.string,f.a.number]),listLength:f.a.oneOfType([f.a.string,f.a.number]),saveHeightKey:f.a.string,cachedHeight:f.a.number,onHeightChange:f.a.func,children:f.a.node},r)},303:function(e,t,n){"use strict";function o(e){for(;c.length&&e.timeRemaining()>0;)c.shift()();c.length?requestIdleCallback(o):a=!1}function r(e){c.push(e),a||(a=!0,requestIdleCallback(o))}var i=n(304),s=n.n(i),c=new s.a,a=!1;t.a=r},304:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,r=this.first;r&&!(--t<0);r=r.next)++o>e&&n.push(r.item);return n},e.exports=o},305:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof r){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;r=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return r?e.target.getBoundingClientRect():e.boundingClientRect}var r=void 0;t.a=o},306:function(e,t,n){"use strict";var o=n(2),r=n.n(o),i=function(){function e(){r()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],r=e[2];t.observe(n,o,r)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=i},308:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var o,r,i=n(1),s=n.n(i),c=n(36),a=n.n(c),l=n(2),u=n.n(l),d=n(3),h=n.n(d),p=n(4),f=n.n(p),g=n(0),m=n.n(g),v=n(21),b=n.n(v),y=n(5),M=n.n(y),O=n(299),C=n(16),S=n.n(C),I=n(300),j=(r=o=function(e){function t(){return u()(this,t),h()(this,e.apply(this,arguments))}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.statusIds,n=a()(e,["statusIds"]),o=n.isLoading,r=o||t.size>0?t.map(function(e){return s()(O.a,{id:e},e)}):null;return m.a.createElement(I.a,n,r)},t}(S.a),o.propTypes={scrollKey:M.a.string.isRequired,statusIds:b.a.list.isRequired,onScrollToBottom:M.a.func,onScrollToTop:M.a.func,onScroll:M.a.func,trackScroll:M.a.bool,shouldUpdateScroll:M.a.func,isLoading:M.a.bool,hasMore:M.a.bool,prepend:M.a.node,emptyMessage:M.a.node},o.defaultProps={trackScroll:!0},r)},788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return H});var o,r,i,s,c=n(1),a=n.n(c),l=n(2),u=n.n(l),d=n(3),h=n.n(d),p=n(4),f=n.n(p),g=n(0),m=n.n(g),v=n(12),b=n(5),y=n.n(b),M=n(21),O=n.n(M),C=n(90),S=n(297),I=n(177),j=n(313),k=n(308),T=n(7),R=n(16),_=n.n(R),w=Object(T.g)({heading:{id:"column.favourites",defaultMessage:"Favourites"}}),E=function(e){return{statusIds:e.getIn(["status_lists","favourites","items"]),hasMore:!!e.getIn(["status_lists","favourites","next"])}},H=(o=Object(v.connect)(E))(r=Object(T.h)((s=i=function(e){function t(){var n,o,r;u()(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=o=h()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(j.f)(t):Object(j.d)("FAVOURITES",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(j.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleScrollToBottom=function(){o.props.dispatch(Object(C.c)())},r=n,h()(o,r)}return f()(t,e),t.prototype.componentWillMount=function(){this.props.dispatch(Object(C.d)())},t.prototype.render=function(){var e=this.props,t=e.intl,n=e.statusIds,o=e.columnId,r=e.multiColumn,i=e.hasMore,s=!!o;return m.a.createElement(S.a,{ref:this.setRef},a()(I.a,{icon:"star",title:t.formatMessage(w.heading),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:s,multiColumn:r,showBackButton:!0}),a()(k.a,{trackScroll:!s,statusIds:n,scrollKey:"favourited_statuses-"+o,hasMore:i,onScrollToBottom:this.handleScrollToBottom}))},t}(_.a),i.propTypes={dispatch:y.a.func.isRequired,statusIds:O.a.list.isRequired,intl:y.a.object.isRequired,columnId:y.a.string,multiColumn:y.a.bool,hasMore:y.a.bool},r=s))||r)||r}});
//# sourceMappingURL=favourited_statuses-476800e84e4c5b397927.js.map