import axios from "axios";
import rateLimit from 'axios-rate-limit';

export const api = rateLimit( axios.create({
  baseURL: "https://d29l1nxcqevrmo.cloudfront.net/dashboard",
}), { maxRequests : 20 , perMilliseconds: 120000});

