webpackJsonp([13,26],{149:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(2),i=n.n(a),o=n(1),s=n.n(o),r=n(3),l=n.n(r),c=n(4),d=n.n(c),u=n(0),p=n.n(u),h=function(e){function t(){var n,a,i;s()(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=a=l()(this,e.call.apply(e,[this].concat(r))),a.handleClick=function(){a.props.onClick()},i=n,l()(a,i)}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.active,a=e.columnHeaderId,o="";return this.props.icon&&(o=i()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),i()("div",{role:"heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:a||null},void 0,o,t)},t}(p.a.PureComponent)},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return x});var a,i,o,s,r,l=n(2),c=n.n(l),d=n(1),u=n.n(d),p=n(3),h=n.n(p),f=n(4),g=n.n(f),m=n(0),v=n.n(m),b=n(7),y=n.n(b),_=n(8),M=(n.n(_),n(18)),k=n(5),O=n(33),C=n(10),j=n.n(C),I=Object(k.f)({toggle_visible:{id:"media_gallery.toggle_visible",defaultMessage:"Toggle visibility"}}),w=(i=a=function(e){function t(){var n,a,i;u()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=h()(this,e.call.apply(e,[this].concat(s))),a.handleMouseEnter=function(e){a.hoverToPlay()&&e.target.play()},a.handleMouseLeave=function(e){a.hoverToPlay()&&(e.target.pause(),e.target.currentTime=0)},a.handleClick=function(e){var t=a.props,n=t.index,i=t.onClick;a.context.router&&0===e.button&&(e.preventDefault(),i(n)),e.stopPropagation()},i=n,h()(a,i)}return g()(t,e),t.prototype.hoverToPlay=function(){var e=this.props,t=e.attachment;return!e.autoPlayGif&&"gifv"===t.get("type")},t.prototype.render=function(){var e=this.props,t=e.attachment,n=e.index,a=e.size,i=e.standalone,o=50,s=100,r="auto",l="auto",d="auto",u="auto";1===a&&(o=100),(4===a||3===a&&n>0)&&(s=50),2===a?0===n?u="2px":l="2px":3===a?(0===n?u="2px":n>0&&(l="2px"),1===n?d="2px":n>1&&(r="2px")):4===a&&(0!==n&&2!==n||(u="2px"),1!==n&&3!==n||(l="2px"),n<2?d="2px":r="2px");var p="";if("image"===t.get("type")){var h=t.get("preview_url"),f=t.getIn(["meta","small","width"]),g=t.get("url"),m=t.getIn(["meta","original","width"]),v="number"==typeof m&&"number"==typeof f,b=v?g+" "+m+"w, "+h+" "+f+"w":null,y=v?"(min-width: 1025px) "+o/100*320+"px, "+o+"vw":null;p=c()("a",{className:"media-gallery__item-thumbnail",href:t.get("remote_url")||g,onClick:this.handleClick,target:"_blank"},void 0,c()("img",{src:h,srcSet:b,sizes:y,alt:t.get("description"),title:t.get("description")}))}else if("gifv"===t.get("type")){var _=!Object(O.a)()&&this.props.autoPlayGif;p=c()("div",{className:j()("media-gallery__gifv",{autoplay:_})},void 0,c()("video",{className:"media-gallery__item-gifv-thumbnail","aria-label":t.get("description"),role:"application",src:t.get("url"),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,autoPlay:_,loop:!0,muted:!0}),c()("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}return c()("div",{className:j()("media-gallery__item",{standalone:i}),style:{left:l,top:r,right:u,bottom:d,width:o+"%",height:s+"%"}},t.get("id"),p)},t}(v.a.PureComponent),a.contextTypes={router:y.a.object},a.defaultProps={autoPlayGif:!1,standalone:!1,index:0,size:1},i),x=Object(k.g)((r=s=function(e){function t(){var n,a,i;u()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=h()(this,e.call.apply(e,[this].concat(s))),a.state={visible:!a.props.sensitive},a.handleOpen=function(){a.setState({visible:!a.state.visible})},a.handleClick=function(e){a.props.onOpenMedia(a.props.media,e)},a.handleRef=function(e){e&&a.isStandaloneEligible()&&a.setState({width:e.offsetWidth})},i=n,h()(a,i)}return g()(t,e),t.prototype.componentWillReceiveProps=function(e){Object(_.is)(e.media,this.props.media)||this.setState({visible:!e.sensitive})},t.prototype.isStandaloneEligible=function(){var e=this.props,t=e.media;return e.standalone&&1===t.size&&t.getIn([0,"meta","small","aspect"])},t.prototype.render=function(){var e=this,t=this.props,n=t.media,a=t.intl,i=t.sensitive,o=t.height,s=this.state,r=s.width,l=s.visible,d=void 0,u={};if(this.isStandaloneEligible()?u.height=!l&&r?r/this.props.media.getIn([0,"meta","small","aspect"]):"":u.height=o,l){var p=n.take(4).size;d=this.isStandaloneEligible()?c()(w,{standalone:!0,onClick:this.handleClick,attachment:n.get(0),autoPlayGif:this.props.autoPlayGif}):n.take(4).map(function(t,n){return c()(w,{onClick:e.handleClick,attachment:t,autoPlayGif:e.props.autoPlayGif,index:n,size:p},t.get("id"))})}else{var h=void 0;h=i?c()(k.b,{id:"status.sensitive_warning",defaultMessage:"Sensitive content"}):c()(k.b,{id:"status.media_hidden",defaultMessage:"Media hidden"}),d=v.a.createElement("button",{className:"media-spoiler",onClick:this.handleOpen,style:u,ref:this.handleRef},c()("span",{className:"media-spoiler__warning"},void 0,h),c()("span",{className:"media-spoiler__trigger"},void 0,c()(k.b,{id:"status.sensitive_toggle",defaultMessage:"Click to view"})))}return c()("div",{className:"media-gallery",style:u},void 0,c()("div",{className:j()("spoiler-button",{"spoiler-button--visible":l})},void 0,c()(M.a,{title:a.formatMessage(I.toggle_visible),icon:l?"eye":"eye-slash",overlay:!0,onClick:this.handleOpen})),d)},t}(v.a.PureComponent),s.defaultProps={autoPlayGif:!1,standalone:!1},o=r))||o},263:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(2),i=n.n(a),o=n(1),s=n.n(o),r=n(3),l=n.n(r),c=n(4),d=n.n(c),u=n(43),p=n.n(u),h=n(0),f=n.n(h),g=n(149),m=n(91),v=n(33),b=function(e){function t(){var n,a,i;s()(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return n=a=l()(this,e.call.apply(e,[this].concat(r))),a.handleHeaderClick=function(){var e=a.node.querySelector(".scrollable");e&&(a._interruptScrollAnimation=Object(m.b)(e))},a.handleScroll=p()(function(){void 0!==a._interruptScrollAnimation&&a._interruptScrollAnimation()},200),a.setRef=function(e){a.node=e},i=n,l()(a,i)}return d()(t,e),t.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(m.b)(e))},t.prototype.render=function(){var e=this.props,t=e.heading,n=e.icon,a=e.children,o=e.active,s=e.hideHeadingOnMobile,r=t&&(!s||s&&!Object(v.b)(window.innerWidth)),l=r&&t.replace(/ /g,"-"),c=r&&i()(g.a,{icon:n,active:o,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return f.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},c,a)},t}(f.a.PureComponent)},265:function(e,t,n){"use strict";var a=n(2),i=n.n(a),o=n(0),s=(n.n(o),n(9)),r=n(152),l=n(69),c=n(15),d=n(44),u=n(20),p=n(56),h=n(150),f=n(31),g=n(5),m=Object(g.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},muteConfirm:{id:"confirmations.mute.confirm",defaultMessage:"Mute"}}),v=function(){var e=Object(l.e)();return function(t,n){return{status:e(t,n.id),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},b=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(c.O)(t,n))},onModalReblog:function(t){e(Object(d.q)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(d.t)(t)):n.shiftKey||!this.boostModal?this.onModalReblog(t):e(Object(f.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(d.r)(t):Object(d.m)(t))},onPin:function(t){e(t.get("pinned")?Object(d.s)(t):Object(d.p)(t))},onEmbed:function(t){e(Object(f.d)("EMBED",{url:t.get("url")}))},onDelete:function(t){e(this.deleteModal?Object(f.d)("CONFIRM",{message:n.formatMessage(m.deleteMessage),confirm:n.formatMessage(m.deleteConfirm),onConfirm:function(){return e(Object(p.e)(t.get("id")))}}):Object(p.e)(t.get("id")))},onMention:function(t,n){e(Object(c.M)(t,n))},onOpenMedia:function(t,n){e(Object(f.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(f.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(f.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(m.blockConfirm),onConfirm:function(){return e(Object(u.r)(t.get("id")))}}))},onReport:function(t){e(Object(h.i)(t.get("account"),t))},onMute:function(t){e(Object(f.d)("CONFIRM",{message:i()(g.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(m.muteConfirm),onConfirm:function(){return e(Object(u.B)(t.get("id")))}}))},onMuteConversation:function(t){e(t.get("muted")?Object(p.h)(t.get("id")):Object(p.g)(t.get("id")))}}};t.a=Object(g.g)(Object(s.connect)(v,b)(r.a))},320:function(e,t,n){"use strict";n.d(t,"a",function(){return M});var a,i,o=n(2),s=n.n(o),r=n(1),l=n.n(r),c=n(3),d=n.n(c),u=n(4),p=n.n(u),h=n(0),f=n.n(h),g=n(321),m=n.n(g),v=n(10),b=n.n(v),y=function(e){return e.split(".").map(function(e){return 0===e.indexOf("xn--")?m.a.decode(e.slice("xn--".length)):e}).join(".")},_=function(e){var t=document.createElement("a");return t.href=e,t.hostname},M=(i=a=function(e){function t(){var n,a,i;l()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=d()(this,e.call.apply(e,[this].concat(s))),a.state={width:0},a.setRef=function(e){e&&a.setState({width:e.offsetWidth})},i=n,d()(a,i)}return p()(t,e),t.prototype.renderLink=function(){var e=this.props,t=e.card,n=e.maxDescription,a="",i=t.get("provider_name");t.get("image")&&(a=s()("div",{className:"status-card__image"},void 0,s()("img",{src:t.get("image"),alt:t.get("title"),className:"status-card__image-image",width:t.get("width"),height:t.get("height")}))),i.length<1&&(i=y(_(t.get("url"))));var o=b()("status-card",{horizontal:t.get("width")>t.get("height")});return s()("a",{href:t.get("url"),className:o,target:"_blank",rel:"noopener"},void 0,a,s()("div",{className:"status-card__content"},void 0,s()("strong",{className:"status-card__title",title:t.get("title")},void 0,t.get("title")),s()("p",{className:"status-card__description"},void 0,(t.get("description")||"").substring(0,n)),s()("span",{className:"status-card__host"},void 0,i)))},t.prototype.renderPhoto=function(){var e=this.props.card;return s()("a",{href:e.get("url"),className:"status-card-photo",target:"_blank",rel:"noopener"},void 0,s()("img",{src:e.get("url"),alt:e.get("title"),width:e.get("width"),height:e.get("height")}))},t.prototype.renderVideo=function(){var e=this.props.card,t={__html:e.get("html")},n=this.state.width,a=e.get("width")/e.get("height"),i=e.get("width")>e.get("height")?n/a:n*a;return f.a.createElement("div",{ref:this.setRef,className:"status-card-video",dangerouslySetInnerHTML:t,style:{height:i}})},t.prototype.render=function(){var e=this.props.card;if(null===e)return null;switch(e.get("type")){case"link":return this.renderLink();case"photo":return this.renderPhoto();case"video":return this.renderVideo();case"rich":default:return null}},t}(f.a.PureComponent),a.defaultProps={maxDescription:50},i)},321:function(e,t,n){(function(e,a){var i;!function(o){function s(e){throw new RangeError(E[e])}function r(e,t){for(var n=e.length,a=[];n--;)a[n]=t(e[n]);return a}function l(e,t){var n=e.split("@"),a="";return n.length>1&&(a=n[0]+"@",e=n[1]),e=e.replace(P,"."),a+r(e.split("."),t).join(".")}function c(e){for(var t,n,a=[],i=0,o=e.length;i<o;)t=e.charCodeAt(i++),t>=55296&&t<=56319&&i<o?(n=e.charCodeAt(i++),56320==(64512&n)?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),i--)):a.push(t);return a}function d(e){return r(e,function(e){var t="";return e>65535&&(e-=65536,t+=A(e>>>10&1023|55296),e=56320|1023&e),t+=A(e)}).join("")}function u(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:M}function p(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function h(e,t,n){var a=0;for(e=n?S(e/j):e>>1,e+=S(e/t);e>D*O>>1;a+=M)e=S(e/D);return S(a+(D+1)*e/(e+C))}function f(e){var t,n,a,i,o,r,l,c,p,f,g=[],m=e.length,v=0,b=w,y=I;for(n=e.lastIndexOf(x),n<0&&(n=0),a=0;a<n;++a)e.charCodeAt(a)>=128&&s("not-basic"),g.push(e.charCodeAt(a));for(i=n>0?n+1:0;i<m;){for(o=v,r=1,l=M;i>=m&&s("invalid-input"),c=u(e.charCodeAt(i++)),(c>=M||c>S((_-v)/r))&&s("overflow"),v+=c*r,p=l<=y?k:l>=y+O?O:l-y,!(c<p);l+=M)f=M-p,r>S(_/f)&&s("overflow"),r*=f;t=g.length+1,y=h(v-o,t,0==o),S(v/t)>_-b&&s("overflow"),b+=S(v/t),v%=t,g.splice(v++,0,b)}return d(g)}function g(e){var t,n,a,i,o,r,l,d,u,f,g,m,v,b,y,C=[];for(e=c(e),m=e.length,t=w,n=0,o=I,r=0;r<m;++r)(g=e[r])<128&&C.push(A(g));for(a=i=C.length,i&&C.push(x);a<m;){for(l=_,r=0;r<m;++r)(g=e[r])>=t&&g<l&&(l=g);for(v=a+1,l-t>S((_-n)/v)&&s("overflow"),n+=(l-t)*v,t=l,r=0;r<m;++r)if(g=e[r],g<t&&++n>_&&s("overflow"),g==t){for(d=n,u=M;f=u<=o?k:u>=o+O?O:u-o,!(d<f);u+=M)y=d-f,b=M-f,C.push(A(p(f+y%b,0))),d=S(y/b);C.push(A(p(d,0))),o=h(n,v,a==i),n=0,++a}++n,++t}return C.join("")}function m(e){return l(e,function(e){return R.test(e)?f(e.slice(4).toLowerCase()):e})}function v(e){return l(e,function(e){return N.test(e)?"xn--"+g(e):e})}var b=("object"==typeof t&&t&&t.nodeType,"object"==typeof e&&e&&e.nodeType,"object"==typeof a&&a);var y,_=2147483647,M=36,k=1,O=26,C=38,j=700,I=72,w=128,x="-",R=/^xn--/,N=/[^\x20-\x7E]/,P=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=M-k,S=Math.floor,A=String.fromCharCode;y={version:"1.4.1",ucs2:{decode:c,encode:d},decode:f,encode:g,toASCII:v,toUnicode:m},void 0!==(i=function(){return y}.call(t,n,t,e))&&(e.exports=i)}()}).call(t,n(70)(e),n(45))},800:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return V});var a,i,o,s,r=n(2),l=n.n(r),c=n(1),d=n.n(c),u=n(3),p=n.n(u),h=n(4),f=n.n(h),g=n(0),m=n.n(g),v=n(9),b=n(7),y=n.n(b),_=n(12),M=n.n(_),k=n(56),O=n(822),C=n(933),j=n(936),I=n(263),w=n(44),x=n(15),R=n(150),N=n(69),P=n(151),E=(n.n(P),n(821)),D=n(265),S=n(31),A=n(5),H=n(11),F=n.n(H),T=n(161),z=(n.n(T),Object(A.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"}})),G=function(){var e=Object(N.e)();return function(t,n){return{status:e(t,n.params.statusId),ancestorsIds:t.getIn(["contexts","ancestors",n.params.statusId]),descendantsIds:t.getIn(["contexts","descendants",n.params.statusId]),me:t.getIn(["meta","me"]),boostModal:t.getIn(["meta","boost_modal"]),deleteModal:t.getIn(["meta","delete_modal"]),autoPlayGif:t.getIn(["meta","auto_play_gif"])}}},V=(a=Object(v.connect)(G),Object(A.g)(i=a((s=o=function(e){function t(){var n,a,i;d()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=p()(this,e.call.apply(e,[this].concat(s))),a.handleFavouriteClick=function(e){e.get("favourited")?a.props.dispatch(Object(w.r)(e)):a.props.dispatch(Object(w.m)(e))},a.handlePin=function(e){e.get("pinned")?a.props.dispatch(Object(w.s)(e)):a.props.dispatch(Object(w.p)(e))},a.handleReplyClick=function(e){a.props.dispatch(Object(x.O)(e,a.context.router.history))},a.handleModalReblog=function(e){a.props.dispatch(Object(w.q)(e))},a.handleReblogClick=function(e,t){e.get("reblogged")?a.props.dispatch(Object(w.t)(e)):t.shiftKey||!a.props.boostModal?a.handleModalReblog(e):a.props.dispatch(Object(S.d)("BOOST",{status:e,onReblog:a.handleModalReblog}))},a.handleDeleteClick=function(e){var t=a.props,n=t.dispatch,i=t.intl;n(a.props.deleteModal?Object(S.d)("CONFIRM",{message:i.formatMessage(z.deleteMessage),confirm:i.formatMessage(z.deleteConfirm),onConfirm:function(){return n(Object(k.e)(e.get("id")))}}):Object(k.e)(e.get("id")))},a.handleMentionClick=function(e,t){a.props.dispatch(Object(x.M)(e,t))},a.handleOpenMedia=function(e,t){a.props.dispatch(Object(S.d)("MEDIA",{media:e,index:t}))},a.handleOpenVideo=function(e,t){a.props.dispatch(Object(S.d)("VIDEO",{media:e,time:t}))},a.handleReport=function(e){a.props.dispatch(Object(R.i)(e.get("account"),e))},a.handleEmbed=function(e){a.props.dispatch(Object(S.d)("EMBED",{url:e.get("url")}))},a.handleHotkeyMoveUp=function(){a.handleMoveUp(a.props.status.get("id"))},a.handleHotkeyMoveDown=function(){a.handleMoveDown(a.props.status.get("id"))},a.handleHotkeyReply=function(e){e.preventDefault(),a.handleReplyClick(a.props.status)},a.handleHotkeyFavourite=function(){a.handleFavouriteClick(a.props.status)},a.handleHotkeyBoost=function(){a.handleReblogClick(a.props.status)},a.handleHotkeyMention=function(e){e.preventDefault(),a.handleMentionClick(a.props.status)},a.handleHotkeyOpenProfile=function(){a.context.router.history.push("/accounts/"+a.props.status.getIn(["account","id"]))},a.handleMoveUp=function(e){var t=a.props,n=t.status,i=t.ancestorsIds,o=t.descendantsIds;if(e===n.get("id"))a._selectChild(i.size-1);else{var s=i.indexOf(e);-1===s?(s=o.indexOf(e),a._selectChild(i.size+s)):a._selectChild(s-1)}},a.handleMoveDown=function(e){var t=a.props,n=t.status,i=t.ancestorsIds,o=t.descendantsIds;if(e===n.get("id"))a._selectChild(i.size+1);else{var s=i.indexOf(e);-1===s?(s=o.indexOf(e),a._selectChild(i.size+s+2)):a._selectChild(s+1)}},a.setRef=function(e){a.node=e},i=n,p()(a,i)}return f()(t,e),t.prototype.componentWillMount=function(){this.props.dispatch(Object(k.f)(this.props.params.statusId))},t.prototype.componentWillReceiveProps=function(e){e.params.statusId!==this.props.params.statusId&&e.params.statusId&&(this._scrolledIntoView=!1,this.props.dispatch(Object(k.f)(e.params.statusId)))},t.prototype._selectChild=function(e){var t=this.node.querySelectorAll(".focusable")[e];t&&t.focus()},t.prototype.renderChildren=function(e){var t=this;return e.map(function(e){return l()(D.a,{id:e,onMoveUp:t.handleMoveUp,onMoveDown:t.handleMoveDown},e)})},t.prototype.componentDidUpdate=function(){if(!this._scrolledIntoView){var e=this.props,t=e.status,n=e.ancestorsIds;if(t&&n&&n.size>0){this.node.querySelectorAll(".focusable")[n.size-1].scrollIntoView(!0),this._scrolledIntoView=!0}}},t.prototype.render=function(){var e=void 0,t=void 0,n=this.props,a=n.status,i=n.ancestorsIds,o=n.descendantsIds,s=n.me,r=n.autoPlayGif;if(null===a)return l()(I.a,{},void 0,l()(E.a,{}),l()(O.a,{}));i&&i.size>0&&(e=l()("div",{},void 0,this.renderChildren(i))),o&&o.size>0&&(t=l()("div",{},void 0,this.renderChildren(o)));var c={moveUp:this.handleHotkeyMoveUp,moveDown:this.handleHotkeyMoveDown,reply:this.handleHotkeyReply,favourite:this.handleHotkeyFavourite,boost:this.handleHotkeyBoost,mention:this.handleHotkeyMention,openProfile:this.handleHotkeyOpenProfile};return l()(I.a,{},void 0,l()(E.a,{}),l()(P.ScrollContainer,{scrollKey:"thread"},void 0,m.a.createElement("div",{className:"scrollable detailed-status__wrapper",ref:this.setRef},e,l()(T.HotKeys,{handlers:c},void 0,l()("div",{className:"focusable",tabIndex:"0"},void 0,l()(C.a,{status:a,autoPlayGif:r,me:s,onOpenVideo:this.handleOpenVideo,onOpenMedia:this.handleOpenMedia}),l()(j.a,{status:a,me:s,onReply:this.handleReplyClick,onFavourite:this.handleFavouriteClick,onReblog:this.handleReblogClick,onDelete:this.handleDeleteClick,onMention:this.handleMentionClick,onReport:this.handleReport,onPin:this.handlePin,onEmbed:this.handleEmbed}))),t)))},t}(F.a),o.contextTypes={router:y.a.object},o.propTypes={params:y.a.object.isRequired,dispatch:y.a.func.isRequired,status:M.a.map,ancestorsIds:M.a.list,descendantsIds:M.a.list,me:y.a.string,boostModal:y.a.bool,deleteModal:y.a.bool,autoPlayGif:y.a.bool,intl:y.a.object.isRequired},i=s))||i)||i)},821:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a,i,o=n(2),s=n.n(o),r=n(1),l=n.n(r),c=n(3),d=n.n(c),u=n(4),p=n.n(u),h=n(0),f=n.n(h),g=n(5),m=n(7),v=n.n(m),b=(i=a=function(e){function t(){var n,a,i;l()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=d()(this,e.call.apply(e,[this].concat(s))),a.handleClick=function(){window.history&&1===window.history.length?a.context.router.history.push("/"):a.context.router.history.goBack()},i=n,d()(a,i)}return p()(t,e),t.prototype.render=function(){return s()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,s()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),s()(g.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(f.a.PureComponent),a.contextTypes={router:v.a.object},i)},822:function(e,t,n){"use strict";var a=n(2),i=n.n(a),o=n(0),s=(n.n(o),n(5)),r=function(){return i()("div",{className:"missing-indicator"},void 0,i()("div",{},void 0,i()(s.b,{id:"missing_indicator.label",defaultMessage:"Not found"})))};t.a=r},933:function(e,t,n){"use strict";n.d(t,"a",function(){return R});var a,i,o=n(2),s=n.n(o),r=n(1),l=n.n(r),c=n(3),d=n.n(c),u=n(4),p=n.n(u),h=n(0),f=(n.n(h),n(7)),g=n.n(f),m=n(12),v=n.n(m),b=n(54),y=n(55),_=n(107),M=n(158),k=n(934),O=n(57),C=n(5),j=n(935),I=n(11),w=n.n(I),x=n(108),R=(i=a=function(e){function t(){var n,a,i;l()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=d()(this,e.call.apply(e,[this].concat(s))),a.handleAccountClick=function(e){0===e.button&&(e.preventDefault(),a.context.router.history.push("/accounts/"+a.props.status.getIn(["account","id"]))),e.stopPropagation()},a.handleOpenVideo=function(e){a.props.onOpenVideo(a.props.status.getIn(["media_attachments",0]),e)},i=n,d()(a,i)}return p()(t,e),t.prototype.render=function(){var e=this.props.status.get("reblog")?this.props.status.get("reblog"):this.props.status,t="",n="",a="",i="retweet";if(e.get("media_attachments").size>0)if(e.get("media_attachments").some(function(e){return"unknown"===e.get("type")}))t=s()(k.a,{media:e.get("media_attachments")});else if("video"===e.getIn(["media_attachments",0,"type"])){var o=e.getIn(["media_attachments",0]);t=s()(x.default,{preview:o.get("preview_url"),src:o.get("url"),width:300,height:150,onOpenVideo:this.handleOpenVideo,sensitive:e.get("sensitive")})}else t=s()(M.default,{standalone:!0,sensitive:e.get("sensitive"),media:e.get("media_attachments"),height:300,onOpenMedia:this.props.onOpenMedia,autoPlayGif:this.props.autoPlayGif});else 0===e.get("spoiler_text").length&&(t=s()(j.a,{statusId:e.get("id")}));return e.get("application")&&(n=s()("span",{},void 0," · ",s()("a",{className:"detailed-status__application",href:e.getIn(["application","website"]),target:"_blank",rel:"noopener"},void 0,e.getIn(["application","name"])))),"direct"===e.get("visibility")?i="envelope":"private"===e.get("visibility")&&(i="lock"),a="private"===e.get("visibility")?s()("i",{className:"fa fa-"+i}):s()(O.Link,{to:"/statuses/"+e.get("id")+"/reblogs",className:"detailed-status__link"},void 0,s()("i",{className:"fa fa-"+i}),s()("span",{className:"detailed-status__reblogs"},void 0,s()(C.c,{value:e.get("reblogs_count")}))),s()("div",{className:"detailed-status"},void 0,s()("a",{href:e.getIn(["account","url"]),onClick:this.handleAccountClick,className:"detailed-status__display-name"},void 0,s()("div",{className:"detailed-status__display-avatar"},void 0,s()(b.a,{account:e.get("account"),size:48})),s()(y.a,{account:e.get("account")})),s()(_.a,{status:e}),t,s()("div",{className:"detailed-status__meta"},void 0,s()("a",{className:"detailed-status__datetime",href:e.get("url"),target:"_blank",rel:"noopener"},void 0,s()(C.a,{value:new Date(e.get("created_at")),hour12:!1,year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})),n," · ",a," · ",s()(O.Link,{to:"/statuses/"+e.get("id")+"/favourites",className:"detailed-status__link"},void 0,s()("i",{className:"fa fa-star"}),s()("span",{className:"detailed-status__favorites"},void 0,s()(C.c,{value:e.get("favourites_count")})))))},t}(w.a),a.contextTypes={router:g.a.object},a.propTypes={status:v.a.map.isRequired,onOpenMedia:g.a.func.isRequired,onOpenVideo:g.a.func.isRequired,autoPlayGif:g.a.bool},i)},934:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a,i,o=n(2),s=n.n(o),r=n(1),l=n.n(r),c=n(3),d=n.n(c),u=n(4),p=n.n(u),h=n(0),f=(n.n(h),n(12)),g=n.n(f),m=n(11),v=n.n(m),b=function(e){return e.split("/").pop().split("#")[0].split("?")[0]},y=(i=a=function(e){function t(){return l()(this,t),d()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this.props.media;return s()("div",{className:"attachment-list"},void 0,s()("div",{className:"attachment-list__icon"},void 0,s()("i",{className:"fa fa-link"})),s()("ul",{className:"attachment-list__list"},void 0,e.map(function(e){return s()("li",{},e.get("id"),s()("a",{href:e.get("remote_url"),target:"_blank",rel:"noopener"},void 0,b(e.get("remote_url"))))})))},t}(v.a),a.propTypes={media:g.a.list.isRequired},i)},935:function(e,t,n){"use strict";var a=n(9),i=n(320),o=function(e,t){var n=t.statusId;return{card:e.getIn(["cards",n],null)}};t.a=Object(a.connect)(o)(i.a)},936:function(e,t,n){"use strict";n.d(t,"a",function(){return k});var a,i,o,s=n(2),r=n.n(s),l=n(1),c=n.n(l),d=n(3),u=n.n(d),p=n(4),h=n.n(p),f=n(0),g=n.n(f),m=n(7),v=n.n(m),b=n(18),y=n(288),_=n(5),M=Object(_.f)({delete:{id:"status.delete",defaultMessage:"Delete"},mention:{id:"status.mention",defaultMessage:"Mention @{name}"},reply:{id:"status.reply",defaultMessage:"Reply"},reblog:{id:"status.reblog",defaultMessage:"Boost"},cannot_reblog:{id:"status.cannot_reblog",defaultMessage:"This post cannot be boosted"},favourite:{id:"status.favourite",defaultMessage:"Favourite"},report:{id:"status.report",defaultMessage:"Report @{name}"},share:{id:"status.share",defaultMessage:"Share"},pin:{id:"status.pin",defaultMessage:"Pin on profile"},unpin:{id:"status.unpin",defaultMessage:"Unpin from profile"},embed:{id:"status.embed",defaultMessage:"Embed"}}),k=Object(_.g)((o=i=function(e){function t(){var n,a,i;c()(this,t);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return n=a=u()(this,e.call.apply(e,[this].concat(s))),a.handleReplyClick=function(){a.props.onReply(a.props.status)},a.handleReblogClick=function(e){a.props.onReblog(a.props.status,e)},a.handleFavouriteClick=function(){a.props.onFavourite(a.props.status)},a.handleDeleteClick=function(){a.props.onDelete(a.props.status)},a.handleMentionClick=function(){a.props.onMention(a.props.status.get("account"),a.context.router.history)},a.handleReport=function(){a.props.onReport(a.props.status)},a.handlePinClick=function(){a.props.onPin(a.props.status)},a.handleShare=function(){navigator.share({text:a.props.status.get("search_index"),url:a.props.status.get("url")})},a.handleEmbed=function(){a.props.onEmbed(a.props.status)},i=n,u()(a,i)}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.status,n=e.me,a=e.intl,i=["public","unlisted"].includes(t.get("visibility")),o=[];i&&o.push({text:a.formatMessage(M.embed),action:this.handleEmbed}),n===t.getIn(["account","id"])?(i&&o.push({text:a.formatMessage(t.get("pinned")?M.unpin:M.pin),action:this.handlePinClick}),o.push({text:a.formatMessage(M.delete),action:this.handleDeleteClick})):(o.push({text:a.formatMessage(M.mention,{name:t.getIn(["account","username"])}),action:this.handleMentionClick}),o.push(null),o.push({text:a.formatMessage(M.report,{name:t.getIn(["account","username"])}),action:this.handleReport}));var s="share"in navigator&&"public"===t.get("visibility")&&r()("div",{className:"detailed-status__button"},void 0,r()(b.a,{title:a.formatMessage(M.share),icon:"share-alt",onClick:this.handleShare})),l="retweet";"direct"===t.get("visibility")?l="envelope":"private"===t.get("visibility")&&(l="lock");var c="direct"===t.get("visibility")||"private"===t.get("visibility");return r()("div",{className:"detailed-status__action-bar"},void 0,r()("div",{className:"detailed-status__button"},void 0,r()(b.a,{title:a.formatMessage(M.reply),icon:null===t.get("in_reply_to_id",null)?"reply":"reply-all",onClick:this.handleReplyClick})),r()("div",{className:"detailed-status__button"},void 0,r()(b.a,{disabled:c,active:t.get("reblogged"),title:c?a.formatMessage(M.cannot_reblog):a.formatMessage(M.reblog),icon:l,onClick:this.handleReblogClick})),r()("div",{className:"detailed-status__button"},void 0,r()(b.a,{animate:!0,active:t.get("favourited"),title:a.formatMessage(M.favourite),icon:"star",onClick:this.handleFavouriteClick,activeStyle:{color:"#ca8f04"}})),s,r()("div",{className:"detailed-status__action-bar-dropdown"},void 0,r()(y.a,{size:18,icon:"ellipsis-h",items:o,direction:"left",ariaLabel:"More"})))},t}(g.a.PureComponent),i.contextTypes={router:v.a.object},a=o))||a}});
//# sourceMappingURL=status-e3b475f4d2f4205bf5e8.js.map