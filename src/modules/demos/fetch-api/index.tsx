import { Button, Input } from 'components';
import { useState } from 'react';
import run, { hasSupport } from '../../apis/fetch-api';

function FetchApi() {
  const defaultBody = {
    userId: 1,
    id: 1,
    title: 'Fetch Api',
    body: 'The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.',
  };
  const [body, setBody] = useState(JSON.stringify(defaultBody, undefined, 4));
  const [error, setError] = useState('');
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [response, setResponse] = useState('');
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  const handleUrl = (event: any) => {
    setUrl(event.target.value);
  };
  const handleBody = (event: any) => {
    setBody(event.target.value);
  };

  async function handleMethod(method: string) {
    let response = '';
    switch (method) {
      case 'GET':
        response = await run.get(url);
        handleResponse(response);
        break;
      case 'POST':
        try {
          response = await run.post(url, body);
          handleResponse(response);
          setError('');
        } catch (error) {
          setError(`${error}`);
        }
        break;
      case 'PUT':
        try {
          response = await run.put(url, body);
          handleResponse(response);
          setError('');
        } catch (error) {
          setError(`${error}`);
        }
        break;
      case 'DELETE':
        response = await run._delete(url);
        handleResponse(response);
        break;
      default:
        response = '';
        handleResponse(response);
    }
  }

  const handleResponse = (response: any) =>
    setResponse(JSON.stringify(response, undefined, 4));

  return (
    <div>
      <label htmlFor="url" className="block text-sm font-medium">
        URL:
      </label>
      <Input
        type="text"
        id="url"
        placeholder="Enter a URL"
        onChange={handleUrl}
        defaultValue={url}
        className="block w-fit rounded-md border-gray-300"
      />
      <div className="tw-space-x-4">
        <Button
          className="tw-mt-3 tw-bg-blue-500"
          onClick={() => handleMethod('GET')}
        >
          Get
        </Button>
        <Button
          className="tw-mt-3 tw-bg-green-500"
          onClick={() => handleMethod('POST')}
        >
          Post
        </Button>
        <Button
          className="tw-mt-3 tw-bg-yellow-500"
          onClick={() => handleMethod('PUT')}
        >
          Update
        </Button>
        <Button
          className="tw-mt-3 tw-bg-red-500"
          onClick={() => handleMethod('DELETE')}
        >
          Delete
        </Button>
      </div>

      <div className="tw-grid tw-gap-4 tw-grid-cols-2">
        <div>
          <p className="tw-block tw-mb-2 tw-mt-4 text-sm tw-font-medium tw-text-gray-500 dark:tw-text-gray-500">
            Body
          </p>
          <textarea
            id="body"
            rows={12}
            className="tw-block tw-w-full tw-max-h-64 tw-p-2.5 tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            value={body}
            onChange={handleBody}
          />
          {error ? (
            <div
              className="tw-alert tw-bg-red-600 tw-rounded-lg tw-py-2 tw-px-2 tw-mb-3 tw-mt-2 tw-text-base tw-text-white tw-inline-flex tw-items-center tw-w-full tw-alert-dismissible tw-fade tw-show"
              role="alert"
            >
              {error}
              <button
                type="button"
                className="tw-btn-close tw-box-content tw-w-4 tw-h-4 tw-p-1 tw-ml-auto tw-text-white-900 tw-border-none tw-rounded-none tw-opacity-50 focus:tw-shadow-none focus:tw-outline-none focus:tw-opacity-100 hover:tw-text-white hover:tw-opacity-75 hover:tw-no-underline"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div>
          <p className="tw-block tw-mb-2 tw-mt-4 text-sm tw-font-medium tw-text-gray-500 dark:tw-text-gray-500">
            Response
          </p>
          <textarea
            id="response"
            disabled
            rows={12}
            className="tw-block tw-w-full tw-max-h-64 tw-p-2.5 tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
            value={response}
          />
        </div>
      </div>
    </div>
  );
}

export default FetchApi;
