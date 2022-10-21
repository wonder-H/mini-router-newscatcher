import axios from "axios";

const insApi = axios.create({
  baseURL: "https://api.hnpwa.com/v0"
});

const getLists = {
  get: async (content: string) => {
    const res = await insApi.get(`/${content}/1.json`)
    return res.data
  }
}

const getMoreLists = {
  get: async (page: number | string) => {
    const { data } = await insApi.get(`/${page}.json`)
    return data
  }
}

const getItemDetail = {
  get: async (id: number) => {
    const { data } = await insApi.get(`/item/${id}.json`)
    return data
  }
}

export { insApi, getLists, getMoreLists, getItemDetail };