export const isSupported = () => {
  /**
   * Check if the `API` is supported
   */

  return 'Notification' in window;
};

export const run = () => {
  // Request for the permission
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      var input = document.getElementById('text-input');

      // Push notification
      new Notification('🎉 Web APIs Playground', {
        icon: 'http://localhost:3000/icons/icon-192x192.png',
        body: input.value || 'The best website ever!',
        silent: true,
      });
    }
  });
};
