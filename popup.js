document.getElementById("fillButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "extract_text" });
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "display_text") {
    const text = message.text;
    const textContainer = document.getElementById("text-container");
    if (textContainer) {
      textContainer.textContent = text;
    }
  }
});
