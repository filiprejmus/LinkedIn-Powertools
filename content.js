chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "extract_text") {
    const element = document.querySelector(
      "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    );
    const text = element.innerText;
    const firstWord = text.split(" ")[0];
    const msg = `Hey ${firstWord},
I'm currently doing research about supply chain processes in ERPs for my startup. Would love to connect!`;

    // Populate the textarea with the extracted text.
    const textareaElem = document.querySelector(
      "textarea[name='message'][id='custom-message']"
    );
    if (textareaElem) {
      textareaElem.value = msg;
      simulateUserInput(textareaElem); // Simulate a user input event
    }

    // Send back the text to the popup to display it.
    chrome.runtime.sendMessage({ action: "display_text", text: msg });
  }
});

function simulateUserInput(element) {
  // Create a new input event
  const event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  // Dispatch the event on the target element
  element.dispatchEvent(event);
}
