import axios from "axios";

const url = "https://648aaff517f1536d65e9766d.mockapi.io/api/v1";

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
