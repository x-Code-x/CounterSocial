/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.5.1
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2016 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
(function(){var e,t,a,n,i,r={}.hasOwnProperty,o=function(e,t){function a(){this.constructor=e}for(var n in t)r.call(t,n)&&(e[n]=t[n]);return a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype,e};n=function(){function e(){this.options_index=0,this.parsed=[]}return e.prototype.add_node=function(e){return"OPTGROUP"===e.nodeName.toUpperCase()?this.add_group(e):this.add_option(e)},e.prototype.add_group=function(e){var t,a,n,i,r,o;for(t=this.parsed.length,this.parsed.push({array_index:t,group:!0,label:this.escapeExpression(e.label),title:e.title?e.title:void 0,children:0,disabled:e.disabled,classes:e.className}),r=e.childNodes,o=[],n=0,i=r.length;n<i;n++)a=r[n],o.push(this.add_option(a,t,e.disabled));return o},e.prototype.add_option=function(e,t,a){if("OPTION"===e.nodeName.toUpperCase())return""!==e.text?(null!=t&&(this.parsed[t].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:e.value,text:e.text,html:e.innerHTML,title:e.title?e.title:void 0,selected:e.selected,disabled:a===!0?a:e.disabled,group_array_index:t,group_label:null!=t?this.parsed[t].label:null,classes:e.className,style:e.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},e.prototype.escapeExpression=function(e){var t,a;return null==e||e===!1?"":/[\&\<\>\"\'\`]/.test(e)?(t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},a=/&(?!\w+;)|[\<\>\"\'\`]/g,e.replace(a,function(e){return t[e]||"&amp;"})):e},e}(),n.select_to_array=function(e){var t,a,i,r,o;for(a=new n,o=e.childNodes,i=0,r=o.length;i<r;i++)t=o[i],a.add_node(t);return a.parsed},t=function(){function e(t,a){this.form_field=t,this.document=t.ownerDocument,this.options=null!=a?a:{},e.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return e.prototype.set_default_values=function(){var e=this;return this.click_test_action=function(t){return e.test_active_click(t)},this.activate_action=function(t){return e.activate_field(t)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY},e.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||e.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||e.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||e.default_no_result_text},e.prototype.choice_label=function(e){return this.include_group_label_in_selected&&null!=e.group_label?"<b class='group-name'>"+e.group_label+"</b>"+e.html:e.html},e.prototype.mouse_enter=function(){return this.mouse_on_container=!0},e.prototype.mouse_leave=function(){return this.mouse_on_container=!1},e.prototype.input_focus=function(){var e=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return e.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},e.prototype.input_blur=function(){var e=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return e.blur_test()},100)},e.prototype.results_option_build=function(e){var t,a,n,i,r,o,s;for(t="",i=0,s=this.results_data,r=0,o=s.length;r<o&&(a=s[r],n="",n=a.group?this.result_add_group(a):this.result_add_option(a),""!==n&&(i++,t+=n),(null!=e?e.first:void 0)&&(a.selected&&this.is_multiple?this.choice_build(a):a.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(a))),!(i>=this.max_shown_results));r++);return t},e.prototype.result_add_option=function(e){var t,a;return e.search_match&&this.include_option_in_results(e)?(t=[],e.disabled||e.selected&&this.is_multiple||t.push("active-result"),!e.disabled||e.selected&&this.is_multiple||t.push("disabled-result"),e.selected&&t.push("result-selected"),null!=e.group_array_index&&t.push("group-option"),""!==e.classes&&t.push(e.classes),a=this.document.createElement("li"),a.className=t.join(" "),a.style.cssText=e.style,a.setAttribute("data-option-array-index",e.array_index),a.innerHTML=e.search_text,e.title&&(a.title=e.title),this.outerHTML(a)):""},e.prototype.result_add_group=function(e){var t,a;return(e.search_match||e.group_match)&&e.active_options>0?(t=[],t.push("group-result"),e.classes&&t.push(e.classes),a=this.document.createElement("li"),a.className=t.join(" "),a.innerHTML=e.search_text,e.title&&(a.title=e.title),this.outerHTML(a)):""},e.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},e.prototype.reset_single_select_options=function(){var e,t,a,n,i;for(n=this.results_data,i=[],t=0,a=n.length;t<a;t++)e=n[t],e.selected?i.push(e.selected=!1):i.push(void 0);return i},e.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},e.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},e.prototype.winnow_results=function(){var e,t,a,n,i,r,o,s,l,d,c,m;for(this.no_results_clear(),n=0,r=this.get_search_text(),e=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),l=new RegExp(e,"i"),a=this.get_search_regex(e),m=this.results_data,d=0,c=m.length;d<c;d++)t=m[d],t.search_match=!1,i=null,this.include_option_in_results(t)&&(t.group&&(t.group_match=!1,t.active_options=0),null!=t.group_array_index&&this.results_data[t.group_array_index]&&(i=this.results_data[t.group_array_index],0===i.active_options&&i.search_match&&(n+=1),i.active_options+=1),t.search_text=t.group?t.label:t.html,t.group&&!this.group_search||(t.search_match=this.search_string_match(t.search_text,a),t.search_match&&!t.group&&(n+=1),t.search_match?(r.length&&(o=t.search_text.search(l),s=t.search_text.substr(0,o+r.length)+"</em>"+t.search_text.substr(o+r.length),t.search_text=s.substr(0,o)+"<em>"+s.substr(o)),null!=i&&(i.group_match=!0)):null!=t.group_array_index&&this.results_data[t.group_array_index].search_match&&(t.search_match=!0)));return this.result_clear_highlight(),n<1&&r.length?(this.update_results_content(""),this.no_results(r)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},e.prototype.get_search_regex=function(e){var t;return t=this.search_contains?"":"^",new RegExp(t+e,"i")},e.prototype.search_string_match=function(e,t){var a,n,i,r;if(t.test(e))return!0;if(this.enable_split_word_search&&(e.indexOf(" ")>=0||0===e.indexOf("["))&&(n=e.replace(/\[|\]/g,"").split(" "),n.length))for(i=0,r=n.length;i<r;i++)if(a=n[i],t.test(a))return!0},e.prototype.choices_count=function(){var e,t,a,n;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,n=this.form_field.options,t=0,a=n.length;t<a;t++)e=n[t],e.selected&&(this.selected_option_count+=1);return this.selected_option_count},e.prototype.choices_click=function(e){if(e.preventDefault(),!this.results_showing&&!this.is_disabled)return this.results_show()},e.prototype.keyup_checker=function(e){var t,a;switch(t=null!=(a=e.which)?a:e.keyCode,this.search_field_scale(),t){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(e.preventDefault(),this.results_showing)return this.result_select(e);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:case 18:break;default:return this.results_search()}},e.prototype.clipboard_event_checker=function(){var e=this;return setTimeout(function(){return e.results_search()},50)},e.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},e.prototype.include_option_in_results=function(e){return!(this.is_multiple&&!this.display_selected_options&&e.selected)&&(!(!this.display_disabled_options&&e.disabled)&&!e.empty)},e.prototype.search_results_touchstart=function(e){return this.touch_started=!0,this.search_results_mouseover(e)},e.prototype.search_results_touchmove=function(e){return this.touch_started=!1,this.search_results_mouseout(e)},e.prototype.search_results_touchend=function(e){if(this.touch_started)return this.search_results_mouseup(e)},e.prototype.outerHTML=function(e){var t;return e.outerHTML?e.outerHTML:(t=this.document.createElement("div"),t.appendChild(e),t.innerHTML)},e.browser_is_supported=function(){return!/iP(od|hone)/i.test(window.navigator.userAgent)&&((!/Android/i.test(window.navigator.userAgent)||!/Mobile/i.test(window.navigator.userAgent))&&(!/IEMobile/i.test(window.navigator.userAgent)&&(!/Windows Phone/i.test(window.navigator.userAgent)&&(!/BlackBerry/i.test(window.navigator.userAgent)&&(!/BB10/i.test(window.navigator.userAgent)&&("Microsoft Internet Explorer"!==window.navigator.appName||document.documentMode>=8))))))},e.default_multiple_text="Select Some Options",e.default_single_text="Select an Option",e.default_no_result_text="No results match",e}(),e=jQuery,e.fn.extend({chosen:function(n){return t.browser_is_supported()?this.each(function(){var t,i;return t=e(this),i=t.data("chosen"),"destroy"===n?void(i instanceof a&&i.destroy()):void(i instanceof a||t.data("chosen",new a(this,n)))}):this}}),a=function(t){function a(){return i=a.__super__.constructor.apply(this,arguments)}return o(a,t),a.prototype.setup=function(){return this.form_field_jq=e(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},a.prototype.set_up_html=function(){var t,a;t=["chosen-container"],t.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chosen-rtl"),a={"class":t.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(a.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen");var n=e("<div>").append(e("<div/>",a)).html();return this.container=e(n,this.document),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},a.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},a.prototype.register_observers=function(){var e=this;return this.container.bind("touchstart.chosen",function(t){return e.container_mousedown(t),t.preventDefault()}),this.container.bind("touchend.chosen",function(t){return e.container_mouseup(t),t.preventDefault()}),this.container.bind("mousedown.chosen",function(t){e.container_mousedown(t)}),this.container.bind("mouseup.chosen",function(t){e.container_mouseup(t)}),this.container.bind("mouseenter.chosen",function(t){e.mouse_enter(t)}),this.container.bind("mouseleave.chosen",function(t){e.mouse_leave(t)}),this.search_results.bind("mouseup.chosen",function(t){e.search_results_mouseup(t)}),this.search_results.bind("mouseover.chosen",function(t){e.search_results_mouseover(t)}),this.search_results.bind("mouseout.chosen",function(t){e.search_results_mouseout(t)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(t){e.search_results_mousewheel(t)}),this.search_results.bind("touchstart.chosen",function(t){e.search_results_touchstart(t)}),this.search_results.bind("touchmove.chosen",function(t){e.search_results_touchmove(t)}),this.search_results.bind("touchend.chosen",function(t){e.search_results_touchend(t)}),this.form_field_jq.bind("chosen:updated.chosen",function(t){e.results_update_field(t)}),this.form_field_jq.bind("chosen:activate.chosen",function(t){e.activate_field(t)}),this.form_field_jq.bind("chosen:open.chosen",function(t){e.container_mousedown(t)}),this.form_field_jq.bind("chosen:close.chosen",function(t){e.input_blur(t)}),this.search_field.bind("blur.chosen",function(t){e.input_blur(t)}),this.search_field.bind("keyup.chosen",function(t){e.keyup_checker(t)}),this.search_field.bind("keydown.chosen",function(t){e.keydown_checker(t)}),this.search_field.bind("focus.chosen",function(t){e.input_focus(t)}),this.search_field.bind("cut.chosen",function(t){e.clipboard_event_checker(t)}),this.search_field.bind("paste.chosen",function(t){e.clipboard_event_checker(t)}),this.is_multiple?this.search_choices.bind("click.chosen",function(t){e.choices_click(t)}):this.container.bind("click.chosen",function(e){e.preventDefault()})},a.prototype.destroy=function(){return e(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},a.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},a.prototype.container_mousedown=function(t){if(!this.is_disabled&&(t&&"mousedown"===t.type&&!this.results_showing&&t.preventDefault(),null==t||!e(t.target).hasClass("search-choice-close")))return this.active_field?this.is_multiple||!t||e(t.target)[0]!==this.selected_item[0]&&!e(t.target).parents("a.chosen-single").length||(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),e(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field()},a.prototype.container_mouseup=function(e){if("ABBR"===e.target.nodeName&&!this.is_disabled)return this.results_reset(e)},a.prototype.search_results_mousewheel=function(e){var t;if(e.originalEvent&&(t=e.originalEvent.deltaY||-e.originalEvent.wheelDelta||e.originalEvent.detail),null!=t)return e.preventDefault(),"DOMMouseScroll"===e.type&&(t*=40),this.search_results.scrollTop(t+this.search_results.scrollTop())},a.prototype.blur_test=function(){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},a.prototype.close_field=function(){return e(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},a.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},a.prototype.test_active_click=function(t){var a;return a=e(t.target).closest(".chosen-container"),a.length&&this.container[0]===a[0]?this.active_field=!0:this.close_field()},a.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=n.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},a.prototype.result_do_highlight=function(e){var t,a,n,i,r;if(e.length){if(this.result_clear_highlight(),this.result_highlight=e,this.result_highlight.addClass("highlighted"),n=parseInt(this.search_results.css("maxHeight"),10),r=this.search_results.scrollTop(),i=n+r,a=this.result_highlight.position().top+this.search_results.scrollTop(),t=a+this.result_highlight.outerHeight(),t>=i)return this.search_results.scrollTop(t-n>0?t-n:0);if(a<r)return this.search_results.scrollTop(a)}},a.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},a.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},a.prototype.update_results_content=function(e){return this.search_results.html(e)},a.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},a.prototype.set_tab_index=function(){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},a.prototype.set_label_behavior=function(){var t=this;if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=e("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0)return this.form_field_label.bind("click.chosen",function(e){return t.is_multiple?t.container_mousedown(e):t.activate_field()})},a.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},a.prototype.search_results_mouseup=function(t){var a;if(a=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first(),a.length)return this.result_highlight=a,this.result_select(t),this.search_field.focus()},a.prototype.search_results_mouseover=function(t){var a;if(a=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first())return this.result_do_highlight(a)},a.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result"))return this.result_clear_highlight()},a.prototype.choice_build=function(t){var a,n,i=this;return a=e("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(t)+"</span>"),t.disabled?a.addClass("search-choice-disabled"):(n=e("<a />",{"class":"search-choice-close","data-option-array-index":t.array_index}),n.bind("click.chosen",function(e){return i.choice_destroy_link_click(e)}),a.append(n)),this.search_container.before(a)},a.prototype.choice_destroy_link_click=function(t){if(t.preventDefault(),t.stopPropagation(),!this.is_disabled)return this.choice_destroy(e(t.target))},a.prototype.choice_destroy=function(e){if(this.result_deselect(e[0].getAttribute("data-option-array-index")))return this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),e.parents("li").first().remove(),this.search_field_scale()},a.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field)return this.results_hide()},a.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},a.prototype.result_select=function(e){var t,a;if(this.result_highlight)return t=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?t.removeClass("active-result"):this.reset_single_select_options(),t.addClass("result-selected"),a=this.results_data[t[0].getAttribute("data-option-array-index")],a.selected=!0,this.form_field.options[a.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(a):this.single_set_selected_text(this.choice_label(a)),(e.metaKey||e.ctrlKey)&&this.is_multiple||this.results_hide(),this.show_search_field_default(),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[a.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,e.preventDefault(),this.search_field_scale())},a.prototype.single_set_selected_text=function(e){return null==e&&(e=this.default_text),e===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(e)},a.prototype.result_deselect=function(e){var t;return t=this.results_data[e],!this.form_field.options[t.options_index].disabled&&(t.selected=!1,this.form_field.options[t.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[t.options_index].value}),this.search_field_scale(),!0)},a.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},a.prototype.get_search_text=function(){return e("<div/>").text(e.trim(this.search_field.val())).html()},a.prototype.winnow_results_set_highlight=function(){var e,t;if(t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),e=t.length?t.first():this.search_results.find(".active-result").first(),null!=e)return this.result_do_highlight(e)},a.prototype.no_results=function(t){var a;return a=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),a.find("span").first().html(t),this.search_results.append(a),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},a.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},a.prototype.keydown_arrow=function(){var e;return this.results_showing&&this.result_highlight?(e=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(e):void 0:this.results_show()},a.prototype.keyup_arrow=function(){var e;return this.results_showing||this.is_multiple?this.result_highlight?(e=this.result_highlight.prevAll("li.active-result"),e.length?this.result_do_highlight(e.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},a.prototype.keydown_backstroke=function(){var e;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(e=this.search_container.siblings("li.search-choice").last(),e.length&&!e.hasClass("search-choice-disabled")?(this.pending_backstroke=e,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},a.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},a.prototype.keydown_checker=function(e){var t,a;switch(t=null!=(a=e.which)?a:e.keyCode,this.search_field_scale(),8!==t&&this.pending_backstroke&&this.clear_backstroke(),t){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(e),this.mouse_on_container=!1;break;case 13:this.results_showing&&e.preventDefault();break;case 32:this.disable_search&&e.preventDefault();break;case 38:e.preventDefault(),this.keyup_arrow();break;case 40:e.preventDefault(),this.keydown_arrow()}},a.prototype.search_field_scale=function(){var t,a,n,i,r,o,s,l,d;if(this.is_multiple){for(n=0,s=0,r="position:absolute; left: -1000px; top: -1000px; display:none;",o=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],l=0,d=o.length;l<d;l++)i=o[l],r+=i+":"+this.search_field.css(i)+";";return t=e("<div />",{style:r}),t.text(this.search_field.val()),e("body").append(t),s=t.width()+25,t.remove(),a=this.container.outerWidth(),s>a-10&&(s=a-10),this.search_field.css({width:s+"px"})}},a}(t)}).call(this);