import axios from "axios";
export const apiUrl = "http://localhost:9001/api";
export const aiUrl = "https://royal-tilapia.com/face"
export const voiceAiUrl = "http://127.0.0.1:5001"
export const imgUrl = "http://localhost:9001/images/"

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