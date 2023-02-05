var targetSites=[{name:"trello",reg:"trello.com",container:".js-desc,.js-comment",observeContainer:[".window-overlay"]},{name:"github",reg:"github.com",container:".js-comment-body",observeContainer:["#discussion_bucket"]},{name:"asana",reg:"app.asana.com",container:".TruncatedRichText-richText,#TaskDescription-textEditor",observeContainer:[".SpreadsheetPageStructure-detailsOverlay"]},{name:"jira",reg:"atlassian.net",container:".ak-renderer-document",observeContainer:[".atlaskit-portal-container","div[data-testid='Content']"]},{name:"slack",reg:"app.slack.com",container:".p-rich_text_section,.c-message_attachment__title",observeContainer:[".p-workspace__primary_view"]},{name:"gmail",reg:"mail.google.com",container:"div[role=listitem]",observeContainer:["#\\:1"]}],options=["expand-link","expand-link-slack","expand-link-trello","expand-link-asana","expand-link-github","expand-link-jira","expand-link-gmail"];function getLocalStorage(e){return new Promise((function(t,a){chrome.runtime.sendMessage({action:"getLocalStorage",what:e},(function(e){t(e)}))}))}function detectUrl(e){for(var t=0;t<targetSites.length;t++){if(new RegExp(targetSites[t].reg).test(e))return targetSites[t]}return!1}function getObserveContainerElement(e){return e?document.querySelector(e):null}function isMatchUrl(e){var t=decodeURIComponent(e);return/https:\/\/www.awesomescreenshot.com\/video\/(.*)/.test(t)}function getUrlInfo(e){e=decodeURIComponent(e),/slack-redir.net/.test(e)&&(e=e.match(/\?url=(.*)$/)[1]);var t=new URL(e),a=t.searchParams.get("key"),n=t.pathname.substr(7);return!(!n||!a)&&{id:n,shareKey:a}}function getIframeStr(e,t){var a="80%";return"slack"===t&&(a="40%","25%"),"gmail"===t&&(a="50%","30%"),'<div style="width:'+a+';position:relative;max-width:500px; min-width: 400px;"><iframe style="display:inline;position: absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://www.awesomescreenshot.com/embed?id='+e.id+"&shareKey="+e.shareKey+'"></iframe></div>'}getLocalStorage(options).then((function(e){if(e["expand-link"]){var t=detectUrl(window.location.href);if(t&&e["expand-link-"+t.name]){var a=new MutationObserver((function(e){e.forEach((function(e){"childList"!==e.type&&"subtree"!==e.type||$(t.container).find("a").each((function(e,a){if(isMatchUrl(a.href)){var n=getUrlInfo(a.href);if(n&&!$(a).hasClass("aws-expanded")){var r=$(getIframeStr(n,t.name));r.insertBefore($(a)),r.css({height:.7*r.width()}),$(a).addClass("aws-expanded"),$(a).hasClass("c-message_attachment__title_link")&&($(a).parents(".c-message_attachment__body").find(".c-message_attachment__row--has_trigger").remove(),$(a).parents(".c-message_attachment__body").find("a[data-qa=attachment_image]").parents(".c-message_attachment__row").remove(),$(a).remove())}}}))}))}));t.observeContainer.forEach((function(e){var t=getObserveContainerElement(e)||document;a.observe(t,{childList:!0,subtree:!0})}))}}}));