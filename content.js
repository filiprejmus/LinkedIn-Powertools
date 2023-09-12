// Function to inject the floating button
function injectFloatingButton() {
  const container = document.createElement("div");
  container.id = "cloudsquid-container";

  const button = document.createElement("button");
  button.id = "cloudsquid-button";
  button.innerText = "⋮"; // Using a vertical ellipsis as an indicator

  const optionsList = document.createElement("ul");
  optionsList.className = "cloudsquid-options-list";

  const fillOption = document.createElement("li");
  fillOption.innerText = "Outreach Message";

  const followUp = document.createElement("li");
  followUp.innerText = "Follow up - Step 1";

  fillOption.onclick = outreachHandler;
  followUp.onclick = followUpHandler;
  optionsList.appendChild(fillOption);
  optionsList.appendChild(followUp);

  // Other options can be added similarly to fillOption

  button.onclick = function () {
    if (optionsList.style.display === "none") {
      optionsList.style.display = "block";
      button.style.borderRadius = "5%"; // Make it square
      button.style.width = "50px"; // Adjust width as required
      button.style.height = "auto";
      button.style.marginBottom = "10px"; // Add a margin to separate the button from the list
    } else {
      optionsList.style.display = "none";
      button.style.borderRadius = "50%"; // Back to circle
      button.style.width = "50px";
      button.style.height = "50px";
      button.style.marginBottom = "0"; // Reset the margin
    }
  };

  container.appendChild(button);
  container.appendChild(optionsList);
  document.body.appendChild(container);
}

// This function simulates user input to make sure the textarea acknowledges the changes.
function simulateUserInput(element) {
  const event = new Event("input", { bubbles: true, cancelable: true });
  element.dispatchEvent(event);
}

const outreachHandler = () => {
  const element = document.querySelector(
    "h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words"
  );
  const text = element.innerText;
  const firstWord = text.split(" ")[0];
  const msg = `Hey ${firstWord},
I'm currently doing research about supply chain processes for my startup. Would love to connect!`;
  const textareaElem = document.querySelector(
    "textarea[name='message'][id='custom-message']"
  );
  if (textareaElem) {
    textareaElem.value = msg;
    simulateUserInput(textareaElem); // Simulate a user input event
  }
};

const followUpHandler = () => {
  const messageBox = document.querySelector(".msg-form__contenteditable");
  if (messageBox) {
    messageBox.innerHTML = "<p>Thanks for accepting :)</p>";
    simulateUserInput(messageBox); // Simulate a user input event
  }
};

// On page load, inject the button.
window.onload = injectFloatingButton;
