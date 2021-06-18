const CHANNEL_NAME = "web_api_channel";

const bc = new BroadcastChannel(CHANNEL_NAME);
const message = "I am wonderful!";

function sendMessage() {
  bc.postMessage(message);
};

bc.addEventListener('message', function(event) {
    console.log(`Received message, "${event.data}", on channel, "${CHANNEL_NAME}"`);
    const output = document.getElementById('msg');
    output.innerText = event.data;
});
