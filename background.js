openapp = function(word){var query = word.selectionText;
    chrome.tabs.create({url: "translate:" + query});};
chrome.contextMenus.onClicked.addListener(openapp)

chrome.runtime.onInstalled.addListener(function() {
 chrome.contextMenus.create({
 title: "Translate with Translate",
 contexts:["selection"],  // ContextType
 id: "child"
});
})