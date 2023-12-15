const processServerResopnse = (res) => {
  if (res.ok) {
    return res.json().then((res) => {
      return res;
    });
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
export { processServerResopnse };
