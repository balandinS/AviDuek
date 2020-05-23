import axios from "axios";

const firebase = axios.create({
  baseURL: "https://doek-shokoloda.firebaseio.com/",
});

export default firebase;
