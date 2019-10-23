const emptyPhotos = n =>
  Array.from({ length: n }, () => ({ src: {}, photographer: "" }));
const makeRequest = url =>
  fetch(url, {
    headers: {
      Authorization: `563492ad6f91700001000001c73261beb943431d9126241df217f1ef`
    }
  }).then(res => res.json());

export { emptyPhotos, makeRequest };
