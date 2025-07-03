
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copy-as-markdown",
    title: "Copy as Markdown",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-as-markdown") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["src/vendor/turndown.js", "src/content.js"]
    });
  }
});


