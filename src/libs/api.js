import axios from "axios";

export async function getUserDetails(userName) {
  const requestUrl = "https://api.github.com/users/" + userName;
  try {
    const res = await axios.get(requestUrl);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSearchUsers(searchString, filter, page, perPage) {
  const requestUrl = "https://api.github.com/search/users?q=" + searchString + filter + "&page=" + page + "&per_page=" + perPage;
  try {
    const res = await axios.get(requestUrl);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
