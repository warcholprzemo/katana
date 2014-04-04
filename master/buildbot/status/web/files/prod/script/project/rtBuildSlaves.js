define(["jquery","realtimePages","helpers","dataTables","mustache","text!templates/buildslaves.mustache"],function(e,t,n,r,i,s){var o,u=undefined;return o={init:function(){u=o.dataTableInit(e(".buildslaves-table"));var n=t.defaultRealtimeFunctions();n.slaves=o.processBuildSlaves,t.initRealtime(n)},processBuildSlaves:function(t){u.fnClearTable();try{e.each(t,function(e,t){var n=[t];u.fnAddData(n)})}catch(n){}},dataTableInit:function(t){var o={};return o.aoColumns=[{mData:null,bSortable:!0},{mData:null,bSortable:!1},{mData:null,bSortable:!0},{mData:null},{mData:null}],o.aoColumnDefs=[{aTargets:[0],sClass:"txt-align-left",mRender:function(e,t,n){return i.render(s,{showFriendlyName:!0,friendly_name:n.friendly_name,host_name:n.name})}},{aTargets:[1],sClass:"txt-align-left",mRender:function(){return i.render(s,{buildersPopup:!0})},fnCreatedCell:function(t,n,r){e(t).find("a.popup-btn-json-js").data({showBuilders:r})}},{aTargets:[2],sClass:"txt-align-left",mRender:function(e,t,n){return n.name!=undefined?n.name:"Not Available"}},{aTargets:[3],mRender:function(e,t,n){var r,o=0;if(n.connected===undefined||n.connected===!1)r="Offline";else if(n.connected===!0&&n.runningBuilds===undefined)r="Idle";else if(n.connected===!0&&n.runningBuilds.length>0){r=n.runningBuilds.length+" build(s) ";var u=!0}return i.render(s,{showStatusTxt:r,showSpinIcon:u})},fnCreatedCell:function(t,r,i){if(i.connected===undefined)e(t).addClass("offline");else if(i.connected===!0&&i.runningBuilds===undefined)e(t).addClass("idle");else if(i.connected===!0&&i.runningBuilds.length>0){var s=0;i.runningBuilds!=undefined&&(e.each(i.runningBuilds,function(e,t){t.eta!=undefined&&t.eta<0&&s++}),s=s>0?s:!1),e(t).addClass("building").find("a.popup-btn-json-js").data({showRunningBuilds:i}),s&&(e(t).removeClass("building").addClass("overtime tooltip").attr("title","One or more builds on overtime"),n.tooltip(e(t)))}}},{aTargets:[4],mRender:function(e,t,n){var r=n.lastMessage!=undefined?!0:null,o=r?" ("+moment.unix(n.lastMessage).format("MMM Do YYYY, H:mm:ss")+")":"";return i.render(s,{showTimeago:r,showLastMessageDate:o})},fnCreatedCell:function(t,r,i){n.startCounterTimeago(e(t).find(".last-message-timemago"),i.lastMessage)}}],r.initTable(t,o)}},o});