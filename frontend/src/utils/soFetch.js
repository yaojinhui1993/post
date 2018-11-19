async function soFetch(input, settings = {}) {
  const response = await fetch(input, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    ...settings,
  });

  return response.json();
}

export default soFetch;