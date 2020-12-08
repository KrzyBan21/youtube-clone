import axios from "axios";

const KEY = "AIzaSyAkp_eH73CpmcLPD-yuih23FcnHpmo3wpY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
  },
});
