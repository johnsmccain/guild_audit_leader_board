import axios from "axios";

export const getAll = (endpoint) =>  axios.get(`http://localhost:5000/${endpoint}`);
export const getById = (endpoint, id) =>  axios.get(`http://localhost:5000/${endpoint}/${id}`);