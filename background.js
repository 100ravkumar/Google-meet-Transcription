chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.transcript) {
    console.log("Transcription received: ", message.transcript);
    // You can store the transcription in storage or send it to a server
    chrome.storage.local.set({ transcript: message.transcript });
  }
});
