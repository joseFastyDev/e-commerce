import { API_URL } from "../utils/constants";

export async function addFavoriteApi(auth, idProduct) {
  try {
    const url = `${API_URL}/favorites`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        product: idProduct,
        user: auth.idUser,
      }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getFavoriteApi(auth) {
  try {
    const url = `${API_URL}/favorites?user=${auth.idUser}`;
    const params = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
