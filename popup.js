chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "extract_text" });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "display_text") {
    const text = message.text;
    summarizeText(text);
  }
});

async function summarizeText(text) {
  const endpoint = "https://api.openai.com/v1/completions";
  const prompt = `summarize in 2 sentences: ${text}`;
  const data = {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 200,
    temperature: 0,
    n: 1,
    stop: "/n",
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    displaySummary(`${result.choices[0].text}`);
  } catch (error) {
    displaySummary(`An error occurred during summarization ${error}`);
  }
}

function displaySummary(summary) {
  const textContainer = document.getElementById("text-container");
  textContainer.textContent = summary;
}
