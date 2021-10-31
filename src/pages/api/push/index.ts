import type { NextApiRequest, NextApiResponse } from 'next';
import { sendError } from 'next/dist/server/api-utils';
import webPush from 'web-push';

const pushPublic = process.env.NEXT_PUBLIC_PUSH_API_PUBLIC_KEY;
const pushPrivate = process.env.PUSH_API_PRIVATE_KEY;

if (pushPrivate && pushPublic) {
  webPush.setVapidDetails(
    `https://github.com/atapas/webapis-playground`,
    pushPublic,
    pushPrivate
  );
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end();
  }

  if (!pushPrivate || !pushPublic) {
    sendError(
      res,
      501,
      'Error: No public or private PUSH API keys set, please refer to README to set API keys.'
    );
    return;
  }

  try {
    const { subscription } = req.body;
    const response = await webPush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Web Push Title',
        body: 'Web Push Body',
        icon: '/assets/png/faviconLight.png',
      })
    );

    res.writeHead(response.statusCode, response.headers).end(response.body);
  } catch (err: any) {
    if ('statusCode' in err) {
      res.writeHead(err.statusCode, err.headers).end(err.body);
    } else {
      console.error(err);
      res.statusCode = 500;
      res.end();
    }
  }
};

export default handler;
