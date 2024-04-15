export const URL_API = "http://localhost:3000";
const URL_POSTFIX = "/api/goods";

const getGoods = (query = "") =>
  fetch(`${URL_API}${URL_POSTFIX}${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => console.error(err));

export const serviceGoods = async (fn, query, cb) => {
  fn(await getGoods(query));
  if (cb) cb();
};
