import axios from "axios";
import rateLimit from 'axios-rate-limit';

console.log("END", import.meta.env.VITE_BASEURL);


export const api = rateLimit( axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
}), { maxRequests : 20 , perMilliseconds: 120000});

