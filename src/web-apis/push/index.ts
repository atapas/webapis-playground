const base64ToUint8Array = (base64: String) => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const isSupported = () => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

const getRegistration = async () => {
  return await navigator.serviceWorker.ready;
};

const askPermission = async () => {
  let permissionDepreciatedCallbackResult;
  const permissionResult = await Notification.requestPermission(result => {
    permissionDepreciatedCallbackResult = result;
  });

  return (
    permissionResult === 'granted' ||
    permissionDepreciatedCallbackResult === 'granted'
  );
};

const getSubscription = async (reg: ServiceWorkerRegistration) => {
  const sub = await reg.pushManager.getSubscription();
  if (!sub) return null;
  const expirationTime = sub.toJSON().expirationTime;
  if (expirationTime && Date.now() > expirationTime - 5 * 60 * 1000) {
    return null;
  }
  return sub;
};

const subscribe = async (registration: ServiceWorkerRegistration) => {
  const publicKey = process.env.NEXT_PUBLIC_PUSH_API_PUBLIC_KEY;
  if (!publicKey) return null;
  const options = {
    userVisibleOnly: true,
    applicationServerKey: base64ToUint8Array(publicKey),
  };
  return await registration.pushManager.subscribe(options);
};

export {
  isSupported,
  askPermission,
  getRegistration,
  getSubscription,
  subscribe,
};
