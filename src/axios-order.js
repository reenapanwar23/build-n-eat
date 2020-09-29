import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerbuilder-55.firebaseio.com/",
});
export default instance;
