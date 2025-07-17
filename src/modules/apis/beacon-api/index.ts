export const hasSupport = (): boolean => Boolean('sendBeacon' in navigator);

function run() {
  if (!hasSupport()) {
    console.log('The Beacon API is Not Supported');
    return;
  }

  const analyticsData = {
    event: 'demo_clicked',
    timestamp: new Date().toISOString(),
    url: window.location.href,
    demo: 'beacon-api',
  };

  const data = new Blob([JSON.stringify(analyticsData)], {
    type: 'application/json',
  });

  const success = navigator.sendBeacon('/api/analytics', data);

  if (success) {
    console.log('Analytics data sent successfully via Beacon API');
    console.log('Data sent:', analyticsData);

    const statusElement = document.getElementById(
      'js-beacon--status'
    ) as HTMLElement;
    if (statusElement) {
      statusElement.innerText = 'Data sent successfully';
      statusElement.className = 'tw-text-sm tw-text-green-600';
    }
  } else {
    console.log('Failed to send analytics data via Beacon API');

    const statusElement = document.getElementById(
      'js-beacon--status'
    ) as HTMLElement;
    if (statusElement) {
      statusElement.innerText = 'Failed to send data';
      statusElement.className = 'tw-text-sm tw-text-red-600';
    }
  }
}

export default run;
