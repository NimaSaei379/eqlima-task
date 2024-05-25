import axios from "axios";

export const API_BASE_URL = "https://api.minimarket.explorations.eqlimagold.ir";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export async function authorizeUser() {
  const data = { phoneNumber: "0912000000", password: "12345678" };
  try {
    const respone = await api.post("/signin", null, { params: data });
    return respone.data;
  } catch (error) {
    console.error(error);
  }
}

export async function sellOrder(data: { price: number; weight: number }) {
  try {
    const token = localStorage.getItem("token");
    const respone = await api.post("/order/sell", null, {
      headers: { Authorization: `Bearer ${token}` },
      params: data,
    });
    return respone.data;
  } catch (error) {
    console.error(error);
  }
}

export async function buyOrder(data: { price: number; weight: number }) {
  try {
    const token = localStorage.getItem("token");
    const respone = await api.post("/order/buy", null, {
      headers: { Authorization: `Bearer ${token}` },
      params: data,
    });
    return respone.data;
  } catch (error) {
    console.error(error);
  }
}
