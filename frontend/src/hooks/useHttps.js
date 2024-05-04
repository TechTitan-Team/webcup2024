import axios from "axios";
export const apiUrl = "https://royal-tilapia.com/api";
export const aiUrl = "http://127.0.0.1:5000"
export const voiceAiUrl = "http://127.0.0.1:5001"
export const imgUrl = "https://royal-tilapia.com/images/"

const useHttps = () => {

  const http = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const fileHttp = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const aiFileHttp = axios.create({
    baseURL: aiUrl,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const aiHttp = axios.create({
    baseURL: aiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    http,
    fileHttp,
    aiHttp,
    aiFileHttp
  };
};

export default useHttps;