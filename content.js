// Script to capture the captions from Google Meet
setInterval(() => {
  const captionsElement = document.querySelector('[jsname="CQYqAc"]'); // Selector for captions container
  if (captionsElement) {
    const captionsText = captionsElement.innerText;
    if (captionsText.trim() !== "") {
      chrome.runtime.sendMessage({ transcript: captionsText });
    }
  }
}, 2000); // Poll every 2 seconds for updates
