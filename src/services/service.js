import axios from 'axios';

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const users = async () => await instance.get("/users");
