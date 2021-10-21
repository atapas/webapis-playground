const isSupported = () => {
  // Write supported or not condition here. Eg,
  return window.BroadcastChannel ? true : false;
};

const CHANNEL_NAME = 'web_api_channel';
const MESSAGE = 'I am wonderful!';

function sendMessage() {
  const bc = new BroadcastChannel(CHANNEL_NAME);
  bc.postMessage(MESSAGE);
  bc.addEventListener('message', function (event) {
    console.log(
      `Received message, "${event.data}", on channel, "${CHANNEL_NAME}"`
    );
    const output = document.getElementById('msg');
    output.innerText = event.data;
  });
}

export { isSupported, sendMessage };
