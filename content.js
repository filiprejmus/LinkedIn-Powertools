// Function to inject the floating button
function injectFloatingButton() {
  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);
  const button = document.createElement("button");
  button.id = "cloudsquid-button";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.borderRadius = "50%";
  button.style.backgroundColor = "#333";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.zIndex = "999999";
  button.innerText = "Fill";
  button.style.fontFamily = "Montserrat, sans-serif";

  button.onclick = function () {
    const element = document.querySelector(
      "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    );
    const text = element.innerText;
    const firstWord = text.split(" ")[0];
    const msg = `Hey ${firstWord},
I'm currently doing research about supply chain processes in ERPs for my startup. Would love to connect!`;
    const textareaElem = document.querySelector(
      "textarea[name='message'][id='custom-message']"
    );
    if (textareaElem) {
      textareaElem.value = msg;
      simulateUserInput(textareaElem); // Simulate a user input event
    }
  };

  document.body.appendChild(button);
}

// This function simulates user input to make sure the textarea acknowledges the changes.
function simulateUserInput(element) {
  const event = new Event("input", { bubbles: true, cancelable: true });
  element.dispatchEvent(event);
}

// On page load, inject the button.
window.onload = injectFloatingButton;
