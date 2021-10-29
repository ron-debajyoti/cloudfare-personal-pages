const url = "https://cloudfare-my-pages.rondebajyoti.workers.dev/posts";

const getPosts = async () =>
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));

export { getPosts };
