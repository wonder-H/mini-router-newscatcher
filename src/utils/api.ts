import axios from "axios";
import { useState } from 'react'

const insApi = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
});

const getIdLists = {
  get: async (story: string) => {
    const res = await insApi.get(`/${story}stories.json`)
    // 100개만 받아오도록 설정
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(res.data[i]);
    }
    return arr
  }
}

const getStoryLists = {
  get: async (id: number | string) => {
    const { data } = await insApi.get(`/item/${id}.json`)
    return data
  }
}

export { insApi, getIdLists, getStoryLists };