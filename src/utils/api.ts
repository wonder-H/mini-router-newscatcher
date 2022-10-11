import axios from "axios";

const insApi = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
});

export { insApi };