const processServerResopnse = (res) => {
  if (res.ok) {
    return res.json().then((res) => {
      console.log(res);
      return res;
    });
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
export { processServerResopnse };
