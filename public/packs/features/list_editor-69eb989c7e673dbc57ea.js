webpackJsonp([29],{802:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return x});var a,i,o,r,c=t(2),s=t.n(c),u=t(1),d=t.n(u),l=t(3),p=t.n(l),f=t(4),v=t.n(f),h=t(0),m=(t.n(h),t(5)),b=t.n(m),g=t(13),_=t.n(g),y=t(9),I=t(12),j=t.n(I),R=t(7),C=t(61),O=t(933),N=t(934),q=t(26),M=t(27),k=t.n(M),w=function(e){return{title:e.getIn(["listEditor","title"]),accountIds:e.getIn(["listEditor","accounts","items"]),searchAccountIds:e.getIn(["listEditor","suggestions","items"])}},A=function(e){return{onInitialize:function(n){return e(Object(C.F)(n))},onClear:function(){return e(Object(C.y)())},onReset:function(){return e(Object(C.E)())}}},x=(a=Object(y.connect)(w,A))(i=Object(R.g)((r=o=function(e){function n(){return d()(this,n),p()(this,e.apply(this,arguments))}return v()(n,e),n.prototype.componentDidMount=function(){var e=this.props;(0,e.onInitialize)(e.listId)},n.prototype.componentWillUnmount=function(){(0,this.props.onReset)()},n.prototype.render=function(){var e=this.props,n=e.title,t=e.accountIds,a=e.searchAccountIds,i=e.onClear,o=a.size>0;return s()("div",{className:"modal-root__modal list-editor"},void 0,s()("h4",{},void 0,n),s()(N.a,{}),s()("div",{className:"drawer__pager"},void 0,s()("div",{className:"drawer__inner list-editor__accounts"},void 0,t.map(function(e){return s()(O.a,{accountId:e,added:!0},e)})),o&&s()("div",{role:"button",tabIndex:"-1",className:"drawer__backdrop",onClick:i}),s()(q.a,{defaultStyle:{x:-100},style:{x:k()(o?0:-100,{stiffness:210,damping:20})}},void 0,function(e){var n=e.x;return s()("div",{className:"drawer__inner backdrop",style:{transform:0===n?null:"translateX("+n+"%)",visibility:-100===n?"hidden":"visible"}},void 0,a.map(function(e){return s()(O.a,{accountId:e},e)}))})))},n}(j.a),o.propTypes={listId:b.a.string.isRequired,onClose:b.a.func.isRequired,intl:b.a.object.isRequired,onInitialize:b.a.func.isRequired,onClear:b.a.func.isRequired,onReset:b.a.func.isRequired,title:b.a.string.isRequired,accountIds:_.a.list.isRequired,searchAccountIds:_.a.list.isRequired},i=r))||i)||i},933:function(e,n,t){"use strict";t.d(n,"a",function(){return x});var a,i,o,r,c=t(2),s=t.n(c),u=t(1),d=t.n(u),l=t(3),p=t.n(l),f=t(4),v=t.n(f),h=t(0),m=(t.n(h),t(5)),b=t.n(m),g=t(9),_=t(72),y=t(12),I=t.n(y),j=t(13),R=t.n(j),C=t(57),O=t(56),N=t(19),q=t(7),M=t(61),k=Object(q.f)({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),w=function(){var e=Object(_.c)();return function(n,t){var a=t.accountId,i=t.added;return{account:e(n,a),added:void 0===i?n.getIn(["listEditor","accounts","items"]).includes(a):i}}},A=function(e,n){var t=n.accountId;return{onRemove:function(){return e(Object(M.D)(t))},onAdd:function(){return e(Object(M.v)(t))}}},x=(a=Object(g.connect)(w,A))(i=Object(q.g)((r=o=function(e){function n(){return d()(this,n),p()(this,e.apply(this,arguments))}return v()(n,e),n.prototype.render=function(){var e=this.props,n=e.account,t=e.intl,a=e.onRemove,i=e.onAdd,o=e.added,r=void 0;return r=o?s()(N.a,{icon:"times",title:t.formatMessage(k.remove),onClick:a}):s()(N.a,{icon:"plus",title:t.formatMessage(k.add),onClick:i}),s()("div",{className:"account"},void 0,s()("div",{className:"account__wrapper"},void 0,s()("div",{className:"account__display-name"},void 0,s()("div",{className:"account__avatar-wrapper"},void 0,s()(C.a,{account:n,size:36})),s()(O.a,{account:n})),s()("div",{className:"account__relationship"},void 0,r)))},n}(I.a),o.propTypes={account:R.a.map.isRequired,intl:b.a.object.isRequired,onRemove:b.a.func.isRequired,onAdd:b.a.func.isRequired,added:b.a.bool},o.defaultProps={added:!1},i=r))||i)||i},934:function(e,n,t){"use strict";t.d(n,"a",function(){return R});var a,i,o=t(2),r=t.n(o),c=t(1),s=t.n(c),u=t(3),d=t.n(u),l=t(4),p=t.n(l),f=t(0),v=t.n(f),h=t(9),m=t(7),b=t(61),g=t(10),_=t.n(g),y=Object(m.f)({search:{id:"lists.search",defaultMessage:"Search among people you follow"}}),I=function(e){return{value:e.getIn(["listEditor","suggestions","value"])}},j=function(e){return{onSubmit:function(n){return e(Object(b.B)(n))},onClear:function(){return e(Object(b.y)())},onChange:function(n){return e(Object(b.x)(n))}}},R=(a=Object(h.connect)(I,j))(i=Object(m.g)(i=function(e){function n(){var t,a,i;s()(this,n);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return t=a=d()(this,e.call.apply(e,[this].concat(r))),a.handleChange=function(e){a.props.onChange(e.target.value)},a.handleKeyUp=function(e){13===e.keyCode&&a.props.onSubmit(a.props.value)},a.handleClear=function(){a.props.onClear()},i=t,d()(a,i)}return p()(n,e),n.prototype.render=function(){var e=this.props,n=e.value,t=e.intl,a=n.length>0;return r()("div",{className:"list-editor__search search"},void 0,r()("label",{},void 0,r()("span",{style:{display:"none"}},void 0,t.formatMessage(y.search)),r()("input",{className:"search__input",type:"text",value:n,onChange:this.handleChange,onKeyUp:this.handleKeyUp,placeholder:t.formatMessage(y.search)})),r()("div",{role:"button",tabIndex:"0",className:"search__icon",onClick:this.handleClear},void 0,r()("i",{className:_()("fa fa-search",{active:!a})}),r()("i",{"aria-label":t.formatMessage(y.search),className:_()("fa fa-times-circle",{active:a})})))},n}(v.a.PureComponent))||i)||i}});
//# sourceMappingURL=list_editor-69eb989c7e673dbc57ea.js.map