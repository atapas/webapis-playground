export const hasSupport = (): boolean =>
  Boolean('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

function run() {
  if (!hasSupport()) {
    return null;
  }

  const recognition = new (<any>window).webkitSpeechRecognition();

  recognition.continous = true;
  recognition.interimResults = true;
  recognition.lang = navigator.language || 'en-US';

  const onStartListen = () => {
    recognition.start();
    recognition.onend = () => recognition.start();

    let finalTranscript = '';

    recognition.onresult = (event: any) => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else interimTranscript += transcript;
      }

      (document.getElementById('js-speech--interim') as HTMLElement).innerText =
        interimTranscript;
      (document.getElementById('js-speech--final') as HTMLElement).innerText =
        finalTranscript;
    };
  };

  const onStopListen = () => recognition.stop();

  return {
    onStartListen,
    onStopListen,
  };
}

export default run;
