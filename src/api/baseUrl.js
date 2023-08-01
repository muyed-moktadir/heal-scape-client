import axios from "axios";

const fatcher = axios.create({
    baseURL: 'http://localhost:5000',
  });
  
  export default fatcher