import API from "./config";

export const dayServices = {
  getAll: () =>
    new Promise((resolve, rejected) => {
      API.get("/days")
        .then((res) => res.data)
        .then((res) => resolve(res))
        .catch((err) => rejected(err));
    }),
  getById: (id) =>
    new Promise((resolve, rejected) => {
      API.get(`/days/${id}`)
        .then((res) => res.data)
        .then((res) => resolve(res))
        .catch((err) => rejected(err));
    }),
  create: (text, mood) =>
    new Promise((resolve, rejected) => {
      API.post("/days", {
        text: text,
        mood: mood,
      })
        .then((res) => res.data)
        .then((res) => resolve(res))
        .catch((err) => rejected(err));
    }),
  update: (id, text) =>
    new Promise((resolve, rejected) => {
      API.put(`/days/${id}`, { text: text })
        .then((res) => res.data)
        .then((res) => resolve(res))
        .catch((err) => rejected(err));
    }),
  deleteById: (id) =>
    new Promise((resolve, rejected) => {
      API.delete(`/days/${id}`)
        .then((res) => res.data)
        .then((res) => resolve(res))
        .catch((err) => rejected(err));
    }),
};
