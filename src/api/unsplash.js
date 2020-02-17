import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KE9QUrPyp-5Hc5GXE7Pf2E6vr_KDaf83qTLxoCovGGA"
  }
});
