import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

const api = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
});

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await api.get(url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});
