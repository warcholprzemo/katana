define(["select2"],function(){var e;return e={init:function(){$("select.select-tools-js").select2({width:e.getMaxChildWidth(".select-tools-js")}),$(".show-common").click(function(){var e=$(this).next(".select2-container");$(e).show(0,function(){$(this).select2("open")})}),$("#commonBranch_select").on("select2-close",function(){$(".common-branch-select").hide()}),$("#commonBranch_select").select2({placeholder:"Common branches"}),e.clickSort($("#select2-drop .select2-results"))},getMaxChildWidth:function(e){var t=80;return $(e).each(function(){var e=$(this).width();e>t&&(t=e+30)}),t},comboBox:function(e){var t=$("select.select-tools-js").length;$("option",e).each(function(){$('option[value="'+$(this).val()+'"]',e).length==t&&$(this).clone().prop("selected",!1).appendTo("#commonBranch_select")});var n={};$("#commonBranch_select option").each(function(){var e=$(this).text();n[e]==null?n[e]=!0:$(this).remove()}),$("#commonBranch_select").change(function(){var t=$(this);$("option",e).each(function(){$(this).val()===$(t).val()&&($(this).parent().children("option").prop("selected",!1),$(this).prop("selected",!0))}),$(e).trigger("change")})},clickSort:function(e){$(".sort-name").click(function(t){var n=$(this);n.toggleClass("direction-up"),t.preventDefault(),e.children("li").sort(function(e,t){var r=$(e).text().toUpperCase(),i=$(t).text().toUpperCase();return $(n).hasClass("direction-up")?r<i?-1:r>i?1:0:r>i?-1:r<i?1:0}).appendTo(e)})}},e});