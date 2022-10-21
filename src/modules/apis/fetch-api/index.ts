export const hasSupport = (): boolean =>
  Boolean('connection' in window.navigator);

async function get(url: string) {
  const requestOptions = {
    method: 'GET',
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function post(url: string, body: any) {
  // eslint-disable-next-line no-useless-catch
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body,
    };

    const response = await fetch(url, requestOptions);
    return response.json();
  } catch (error) {
    throw error;
  }
}

async function put(url: string, body: any) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: body,
  };

  const response = await fetch(url, requestOptions);
  return response.json();
}

// prefixed with underscore because delete is a reserved word in javascript
async function _delete(url: string) {
  const requestOptions = {
    method: 'DELETE',
  };
  const response = await fetch(url, requestOptions);
  return response.json();
}
const run = {
  get,
  post,
  put,
  _delete,
};

function handleResponse(response: any) {
  try {
    return response.json();
  } catch (error: any) {
    error.message;
  }
}

export default run;
