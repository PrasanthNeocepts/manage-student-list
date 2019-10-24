import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/branches/";

export function getBranches() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
