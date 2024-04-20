import { io } from "socket.io-client";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8081";

class BackendService {
  async self() {
    const faileRes = { status: 500, message: 'could not get user :/' };
    try {
      const res = await fetch(BASE_URL + "/self", {
        credentials: "false",
      });
      if (res.status === 200) return res;
      return faileRes;
    } catch (e) {
      return faileRes;
    }
  }

  signUp(payload) {
    console.log(`signing up user ${payload} `, BASE_URL + "/signup")
    return fetch(BASE_URL + "/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  logIn(payload) {
    return fetch(BASE_URL + "/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  logOut() {
    return fetch(BASE_URL + "/logout", {
      credentials: "include",
      method: "POST",
    });
  }
}

export default new BackendService();

const BASE_URL2 =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:8081";

export const socket = io(BASE_URL2, {
  autoConnect: false,
  withCredentials: true,
  path:
    process.env.NODE_ENV === "production" ? "/api/socket.io/" : "/socket.io/",
});
