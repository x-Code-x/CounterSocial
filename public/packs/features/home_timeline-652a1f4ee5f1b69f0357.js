webpackJsonp([8],{156:function(e,t,n){"use strict";var o=n(43),i=n.n(o),r=n(9),s=n(274),a=n(16),c=n(8),l=(n.n(c),n(96)),u=(n.n(l),function(){return Object(l.createSelector)([function(e,t){var n=t.type;return e.getIn(["settings",n],Object(c.Map)())},function(e,t){var n=t.type;return e.getIn(["timelines",n,"items"],Object(c.List)())},function(e){return e.get("statuses")},function(e){return e.getIn(["meta","me"])}],function(e,t,n,o){var i=e.getIn(["regex","body"],"").trim(),r=null;try{r=i&&new RegExp(i,"i")}catch(e){}return t.filter(function(t){var i=n.get(t),s=!0;if(!1===e.getIn(["shows","reblog"])&&(s=s&&null===i.get("reblog")),!1===e.getIn(["shows","reply"])&&(s=s&&(null===i.get("in_reply_to_id")||i.get("in_reply_to_account_id")===o)),s&&r&&i.get("account")!==o){var a=i.get("reblog")?n.getIn([i.get("reblog"),"search_index"]):i.get("search_index");s=!r.test(a)}return s})})}),d=function(){var e=u();return function(t,n){var o=n.timelineId;return{statusIds:e(t,{type:o}),isLoading:t.getIn(["timelines",o,"isLoading"],!0),hasMore:!!t.getIn(["timelines",o,"next"])}}},h=function(e,t){var n=t.timelineId,o=t.loadMore;return{onScrollToBottom:i()(function(){e(Object(a.B)(n,!1)),o()},300,{leading:!0}),onScrollToTop:i()(function(){e(Object(a.B)(n,!0))},100),onScroll:i()(function(){e(Object(a.B)(n,!1))},100)}};t.a=Object(r.connect)(d,h)(s.a)},265:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=n.n(f),g=n(5),v=(i=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props.visible;return s()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(p.a.PureComponent),o.defaultProps={visible:!0},i)},266:function(e,t,n){"use strict";var o=n(2),i=n.n(o),r=n(0),s=(n.n(r),n(9)),a=n(152),c=n(69),l=n(15),u=n(44),d=n(20),h=n(55),f=n(150),p=n(31),g=n(5),v=Object(g.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),m=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},b=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.O)(t,n))},onModalReblog:function(t){e(Object(u.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.t)(t)):n.shiftKey||!this.boostModal?this.onModalReblog(t):e(Object(p.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.r)(t):Object(u.m)(t))},onPin:function(t){e(t.get("pinned")?Object(u.s)(t):Object(u.p)(t))},onEmbed:function(t){e(Object(p.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(this.deleteModal?Object(p.d)("CONFIRM",{message:n.formatMessage(v.deleteMessage),confirm:n.formatMessage(v.deleteConfirm),onConfirm:function(){return e(Object(h.e)(t.get("id")))}}):Object(h.e)(t.get("id")))},onMention:function(t,n){e(Object(l.M)(t,n))},onOpenMedia:function(t,n){e(Object(p.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(p.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(p.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.blockConfirm),onConfirm:function(){return e(Object(d.r)(t.get("id")))}}))},onReport:function(t){e(Object(f.i)(t.get("account"),t))},onMute:function(t){e(Object(p.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(v.muteConfirm),onConfirm:function(){return e(Object(d.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(h.h)(t.get("id")):Object(h.g)(t.get("id")))}}};t.a=Object(g.g)(Object(s.connect)(m,b)(a.a))},267:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(94),p=n.n(f),g=n(0),v=n.n(g),m=n(151),b=(n.n(m),n(7)),y=n.n(b),M=n(268),k=n(265),O=n(273),C=n(8),_=(n.n(C),n(10)),j=n.n(_),I=n(157),S=(i=o=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={lastMouseMove:null},o.intersectionObserverWrapper=new O.a,o.handleScroll=p()(function(){if(o.node){var e=o.node,t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight,r=n-t-i;o._oldScrollPosition=n-t,400>r&&o.props.onScrollToBottom&&!o.props.isLoading?o.props.onScrollToBottom():t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.handleMouseMove=p()(function(){o._lastMouseMove=new Date},300),o.handleMouseLeave=function(){o._lastMouseMove=null},o.onFullScreenChange=function(){o.setState({fullscreen:Object(I.d)()})},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onScrollToBottom()},i=n,u()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(I.a)(this.onFullScreenChange),this.handleScroll()},t.prototype.componentDidUpdate=function(e){if(v.a.Children.count(e.children)>0&&v.a.Children.count(e.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this._oldScrollPosition&&this.node.scrollTop>0){var t=this.node.scrollHeight-this._oldScrollPosition;this.node.scrollTop!==t&&(this.node.scrollTop=t)}else this._oldScrollPosition=this.node.scrollHeight-this.node.scrollTop},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(I.b)(this.onFullScreenChange)},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof C.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype._recentlyMoved=function(){return null!==this._lastMouseMove&&new Date-this._lastMouseMove<600},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,r=t.shouldUpdateScroll,a=t.isLoading,c=t.hasMore,l=t.prepend,u=t.emptyMessage,d=this.state.fullscreen,h=v.a.Children.count(n),f=c&&h>0?s()(k.a,{visible:!a,onClick:this.handleLoadMore}):null,p=null;return p=a||h>0||!u?v.a.createElement("div",{className:j()("scrollable",{fullscreen:d}),ref:this.setRef,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave},s()("div",{role:"feed",className:"item-list"},void 0,l,v.a.Children.map(this.props.children,function(t,n){return s()(M.a,{id:t.key,index:n,listLength:h,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),f)):v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?s()(m.ScrollContainer,{scrollKey:o,shouldUpdateScroll:r},void 0,p):p},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},268:function(e,t,n){"use strict";var o=n(9),i=n(269),r=n(95),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},a=function(e){return{onHeightChange:function(t,n,o){e(Object(r.d)(t,n,o))}}};t.a=Object(o.connect)(s,a)(i.a)},269:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(1),i=n.n(o),r=n(3),s=n.n(r),a=n(4),c=n.n(a),l=n(0),u=n.n(l),d=n(270),h=n(272),f=n(8),p=(n.n(f),["id","index","listLength"]),g=["id","index","listLength","cachedHeight"],v=function(e){function t(){var n,o,r;i()(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=o=s()(this,e.call.apply(e,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(e){o.entry=e,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(e){return e.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var e=o.props,t=e.onHeightChange,n=e.saveHeightKey,i=e.id;o.height=Object(h.a)(o.entry).height,t&&n&&t(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,s()(o,r)}return c()(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(t.isIntersecting||!t.isHidden&&!e.cachedHeight)||!(o?g:p).every(function(t){return Object(f.is)(e[t],n.props[t])})},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,r=e.cachedHeight,s=this.state,a=s.isIntersecting,c=s.isHidden;return a||!c&&!r?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||r)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!0}))},t}(u.a.Component)},270:function(e,t,n){"use strict";function o(e){for(;a.length&&e.timeRemaining()>0;)a.shift()();a.length?requestIdleCallback(o):c=!1}function i(e){a.push(e),c||(c=!0,requestIdleCallback(o))}var r=n(271),s=n.n(r),a=new s.a,c=!1;t.a=i},271:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},272:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},273:function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=r},274:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var o,i,r=n(27),s=n.n(r),a=n(2),c=n.n(a),l=n(28),u=n.n(l),d=n(1),h=n.n(d),f=n(3),p=n.n(f),g=n(4),v=n.n(g),m=n(0),b=n.n(m),y=n(12),M=n.n(y),k=n(7),O=n.n(k),C=n(266),_=n(11),j=n.n(_),I=n(267),S=(i=o=function(e){function t(){var n,o,i;h()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=p()(this,e.call.apply(e,[this].concat(s))),o.handleMoveUp=function(e){var t=o.props.statusIds.indexOf(e)-1;o._selectChild(t)},o.handleMoveDown=function(e){var t=o.props.statusIds.indexOf(e)+1;o._selectChild(t)},o.setRef=function(e){o.node=e},i=n,p()(o,i)}return v()(t,e),t.prototype._selectChild=function(e){var t=this.node.node.querySelector("article:nth-of-type("+(e+1)+") .focusable");t&&t.focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.statusIds,o=u()(t,["statusIds"]),i=o.isLoading,r=i||n.size>0?n.map(function(t){return c()(C.a,{id:t,onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t)}):null;return b.a.createElement(I.a,s()({},o,{ref:this.setRef}),r)},t}(j.a),o.propTypes={scrollKey:O.a.string.isRequired,statusIds:M.a.list.isRequired,onScrollToBottom:O.a.func,onScrollToTop:O.a.func,onScroll:O.a.func,trackScroll:O.a.bool,shouldUpdateScroll:O.a.func,isLoading:O.a.bool,hasMore:O.a.bool,prepend:O.a.node,emptyMessage:O.a.node},o.defaultProps={trackScroll:!0},i)},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return I});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),f=n(0),p=n.n(f),g=n(9),v=n(16),m=n(156),b=n(98),y=n(97),M=n(278),k=n(5),O=n(930),C=n(57),_=Object(k.f)({title:{id:"column.home",defaultMessage:"Home"}}),j=function(e){return{hasUnread:e.getIn(["timelines","home","unread"])>0}},I=(o=Object(g.connect)(j))(i=Object(k.g)(i=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(M.f)(t):Object(M.d)("HOME",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(M.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleLoadMore=function(){o.props.dispatch(Object(v.t)())},i=n,u()(o,i)}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,n=e.hasUnread,o=e.columnId,i=e.multiColumn,r=!!o;return p.a.createElement(b.a,{ref:this.setRef},s()(y.a,{icon:"home",active:n,title:t.formatMessage(_.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:r,multiColumn:i},void 0,s()(O.a,{})),s()(m.a,{trackScroll:!r,scrollKey:"home_timeline-"+o,loadMore:this.handleLoadMore,timelineId:"home",emptyMessage:s()(k.b,{id:"empty_column.home",defaultMessage:"Your home timeline is empty! Visit {public} or use search to get started and meet other users.",values:{public:s()(C.Link,{to:"/timelines/public"},void 0,s()(k.b,{id:"empty_column.home.public_timeline",defaultMessage:"the public timeline"}))}})}))},t}(p.a.PureComponent))||i)||i},833:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),d=o(u),h=n(10),f=o(h),p=n(7),g=o(p),v=n(834),m=o(v),b=n(835),y=o(b),M=n(836),k=function(e){function t(e){r(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,M.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,M.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,M.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,i(t,["className","icons"])),r=(0,f.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return d.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},d.default.createElement("div",{className:"react-toggle-track"},d.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),d.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),d.default.createElement("div",{className:"react-toggle-thumb"}),d.default.createElement("input",c({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(u.PureComponent);t.default=k,k.displayName="Toggle",k.defaultProps={icons:{checked:d.default.createElement(m.default,null),unchecked:d.default.createElement(y.default,null)}},k.propTypes={checked:g.default.bool,disabled:g.default.bool,defaultChecked:g.default.bool,onChange:g.default.func,onFocus:g.default.func,onBlur:g.default.func,className:g.default.string,name:g.default.string,value:g.default.string,id:g.default.string,"aria-labelledby":g.default.string,"aria-label":g.default.string,icons:g.default.oneOfType([g.default.bool,g.default.shape({checked:g.default.node,unchecked:g.default.node})])}},834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},836:function(e,t,n){"use strict";function o(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=o},837:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(2),i=n.n(o),r=n(1),s=n.n(r),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=function(e){function t(){var n,o,i;s()(this,t);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.handleChange=function(e){o.props.onChange(o.props.settingKey,e.target.value)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.settingKey,o=e.label;return i()("label",{},void 0,i()("span",{style:{display:"none"}},void 0,o),i()("input",{className:"setting-text",value:t.getIn(n),onChange:this.handleChange,placeholder:o}))},t}(h.a.PureComponent)},844:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(2),i=n.n(o),r=n(1),s=n.n(r),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),f=n(833),p=n.n(f),g=function(e){function t(){var n,o,i;s()(this,t);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.onChange=function(e){var t=e.target;o.props.onChange(o.props.settingKey,t.checked)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.settings,o=e.settingKey,r=e.label,s=e.meta,a=["setting-toggle",t].concat(o).filter(Boolean).join("-");return i()("div",{className:"setting-toggle"},void 0,i()(p.a,{id:a,checked:n.getIn(o),onChange:this.onChange,onKeyDown:this.onKeyDown}),i()("label",{htmlFor:a,className:"setting-toggle__label"},void 0,r),s&&i()("span",{className:"setting-meta__label"},void 0,s))},t}(h.a.PureComponent)},930:function(e,t,n){"use strict";var o=n(9),i=n(931),r=n(58),s=function(e){return{settings:e.getIn(["settings","home"])}},a=function(e){return{onChange:function(t,n){e(Object(r.c)(["home"].concat(t),n))},onSave:function(){e(Object(r.d)())}}};t.a=Object(o.connect)(s,a)(i.a)},931:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,i=n(2),r=n.n(i),s=n(1),a=n.n(s),c=n(3),l=n.n(c),u=n(4),d=n.n(u),h=n(0),f=n.n(h),p=n(5),g=n(844),v=n(837),m=Object(p.f)({filter_regex:{id:"home.column_settings.filter_regex",defaultMessage:"Filter out by regular expressions"},settings:{id:"home.settings",defaultMessage:"Column settings"}}),b=Object(p.g)(o=function(e){function t(){return a()(this,t),l()(this,e.apply(this,arguments))}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange,o=e.intl;return r()("div",{},void 0,r()("span",{className:"column-settings__section"},void 0,r()(p.b,{id:"home.column_settings.basic",defaultMessage:"Basic"})),r()("div",{className:"column-settings__row"},void 0,r()(g.a,{prefix:"home_timeline",settings:t,settingKey:["shows","reblog"],onChange:n,label:r()(p.b,{id:"home.column_settings.show_reblogs",defaultMessage:"Show boosts"})})),r()("div",{className:"column-settings__row"},void 0,r()(g.a,{prefix:"home_timeline",settings:t,settingKey:["shows","reply"],onChange:n,label:r()(p.b,{id:"home.column_settings.show_replies",defaultMessage:"Show replies"})})),r()("span",{className:"column-settings__section"},void 0,r()(p.b,{id:"home.column_settings.advanced",defaultMessage:"Advanced"})),r()("div",{className:"column-settings__row"},void 0,r()(v.a,{prefix:"home_timeline",settings:t,settingKey:["regex","body"],onChange:n,label:o.formatMessage(m.filter_regex)})))},t}(f.a.PureComponent))||o}});
//# sourceMappingURL=home_timeline-652a1f4ee5f1b69f0357.js.map