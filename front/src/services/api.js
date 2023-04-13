/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const baseUrl = "http://localhost:5000/";

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;
  switch (method) {
    default:
      break;
    case "get":
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case "post":
    case "put":
    case "delet":
      body = JSON.stringify(params);
      break;
  }
  let headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = token;
  }
  let req = await fetch(fullUrl, { method, headers, body });
  let json = await req.json();
  return json;
};

export default () => {
  return {
    getToken: () => {
      return localStorage.getItem("token");
    },
    validateToken: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "auth/validate", {}, token);
      return json;
    },
    login: async (email, password) => {
      let json = await request("post", "auth/autenticate", {
        email,
        password,
      });
      return json;
    },
    logout: async () => {
      localStorage.removeItem("token");
    },
    cadSeller: async (
      name,
      email,
      last_name,
      telephone,
      CPF,
      address,
      password
    ) => {
      let token = localStorage.getItem("token");
      let json = await request(
        "post",
        "auth/register",
        {
          name,
          email,
          last_name,
          telephone,
          CPF,
          address,
          password,
        },
        token
      );
      return json;
    },
    getUser: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "auth/user", {}, token);
      return json;
    },
    gamesWeek: async (gamesWeek, dateLimit) => {
      let token = localStorage.getItem("token");
      let json = await request(
        "post",
        "games-week/new-games-week",
        { gamesWeek, dateLimit },
        token
      );
      return json;
    },
  };
};