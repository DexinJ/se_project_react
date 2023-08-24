import { baseUrl } from "./constants";
import { processServerResopnse } from "./utils";
const getItems = () => {
  return fetch(`${baseUrl}/items`).then(processServerResopnse);
};

const addItem = ({ name, url, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: url,
      weather: weather,
    }),
  }).then(processServerResopnse);
};

const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResopnse);
};

export { getItems, addItem, deleteItem };
