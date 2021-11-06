export const hasSupport = (): boolean => Boolean('BroadcastChannel' in window);

const CHANNEL_NAME = 'web_api_channel';

function run() {
  const receiver = document.getElementById(
    'js-broadcast--receiver'
  ) as HTMLElement;

  const bc = new BroadcastChannel(CHANNEL_NAME);
  bc.postMessage('I am wonderful!');
  bc.onmessage = event => {
    console.log(
      `Received message, "${event.data}", on channel, "${CHANNEL_NAME}"`
    );

    receiver.innerText = event.data;
  };
}

export default run;
