// state management
import React, { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import {
  isSupported,
  getRegistration,
  getSubscription,
  askPermission,
  subscribe,
} from 'web-apis/push';

// demo info by id
import { getDemoById } from 'services/demo';

import { Demo } from '../../../types/demo';

import PushButton from './PushButton';
// Component that Renders the Demo UI
const ToRender = () => {
  const [hasPermission, sethasPermission] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const init = async () => {
      const permission = await askPermission();
      sethasPermission(permission);
      if (!permission) return;
      const reg = await getRegistration();
      setRegistration(reg);
      const sub = await getSubscription(reg);
      setSubscription(sub);
    };
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      init();
    }
  }, []);

  const handleSubscribe = async () => {
    if (!registration) return;
    const sub = await subscribe(registration);
    if (!sub) {
      setError(
        'Error: No public PUSH API key set, please refer to README to set API keys.'
      );
    } else {
      setSubscription(sub);
    }
  };

  const handleUnsubscribe = async () => {
    if (!subscription) return;
    await subscription.unsubscribe();
    setSubscription(null);
  };

  const handleSendNotification = async () => {
    if (!subscription) return;
    const res = await fetch('/api/push?type=image', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        subscription,
      }),
    });
    if (!res.ok) {
      setError(res.statusText);
    } else {
      setError(null);
    }
  };

  return (
    <div className="tw-max-w-500px tw-mx-auto">
      {error && (
        <div className="tw-p-2 tw-rounded-0.5em tw-bg-red-500 tw-font-bold tw-mb-4">
          {error}
        </div>
      )}
      <div className="tw-grid tw-gap-3 tw-justify-items-center">
        <PushButton
          disabled={true}
          on={hasPermission}
          disabledColor={'tw-bg-yellow-600 hover:tw-bg-yellow-600'}
          name={hasPermission ? 'Permission Granted' : 'Permission Pending'}
        />
        <PushButton
          disabled={!hasPermission || subscription !== null}
          on={subscription !== null}
          onClick={handleSubscribe}
          name={subscription !== null ? 'Subscribed' : 'Subscribe'}
        />
        <PushButton
          disabled={subscription === null}
          onClick={handleUnsubscribe}
          name={subscription === null ? 'Unsubscribed' : 'Unsubscribe'}
        />
        <PushButton
          disabled={subscription === null}
          onClick={handleSendNotification}
          name={'Send Notification'}
        />
      </div>
    </div>
  );
};

const Push = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [demoInfo, setDemoInfo] = useState<Demo>();

  // Get the demo id
  const id = 'push';

  useEffect(() => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  }, [id]);

  return (
    <>
      {loaded && demoInfo && (
        <div className="flex-colums">
          <DemoSEO title={demoInfo.title} description={demoInfo.description} />
          <DemoInfo
            info={{
              title: demoInfo.title,
              desc: demoInfo.description,
              creator: {
                twitter: demoInfo.meta.author.social.twitter,
                email: demoInfo.meta.author.social.email,
              },
            }}
          />
          {isSupported() ? (
            <ToRender />
          ) : (
            <NotSupported canIUseURL={demoInfo.meta.canIUseURL} />
          )}
        </div>
      )}
    </>
  );
};

export default Push;
