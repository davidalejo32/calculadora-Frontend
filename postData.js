async function postData(url, arg) {
  const request = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  const data = await request.json();

  return data;
}

export { postData };
