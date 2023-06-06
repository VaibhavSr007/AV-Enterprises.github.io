import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjgyZmE0MGQyOTU3ZDgyMTQ3MmU5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTI5NjU0OCwiZXhwIjoxNjgxNTU1NzQ4fQ.xOyfwKx8mJ9GIHTi1uuZmCyv0TWW1v6AqvsnoUazydY";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});