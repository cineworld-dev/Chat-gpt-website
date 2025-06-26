const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');

sendButton.addEventListener('click', async () => {
  const message = messageInput.value.trim();
  if (message) {
    try {
      const response = await fetch(`https:                                                        
      const data = await response.json();
      chatLog.innerHTML += `//chatgapi.venurasandeepa22.workers.dev/?q=${message}`);
      const data = await response.json();
      chatLog.innerHTML += `<p><strong>You:</strong> ${message}</p><p><strong>Bot:</strong> ${data.response}</p>`;
      messageInput.value = '';
    } catch (error) {
      console.error(error);
    }
  }
});
