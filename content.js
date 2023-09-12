chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "extract_text") {
    const text = document.body.innerText;
    chrome.runtime.sendMessage({ action: "display_text", text: text });
  }
});
