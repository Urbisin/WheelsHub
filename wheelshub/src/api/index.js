import axios from 'axios';

//Cambiar estooooooo
const API_URL_CAR = 'http://127.0.0.1:8000';
const API_URL_USER = 'http://127.0.0.1:8001';
const API_URL_PURCHASE = 'http://127.0.0.1:8002';

export const getCars = async () => {
  try {
    const response = await axios.get(`${API_URL_CAR}/car`);
    return response.data[0];
  } catch (error) {
    console.error(`Error al obtener los coches: ${error}`);
  }
};

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API_URL_USER}/users`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener los usuarios: ${error}`);
    }
  };

  export const getUser = async (id) => {
    try {
      const response = await axios.get(`${API_URL_USER}/user/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el usuario: ${error}`);
    }
  };

  export const login = async (name, password) => {
    try {
      const response = await axios.post(`${API_URL_USER}/login?name=${name}&password=${password}`);
      return [response.data, response.status];
    } catch (error) {
      console.error(`Error al iniciar sesión: ${error}`);
      return [null, error.response.status];
    }
  };

  export const register = async (name, password) => {
    try {
      const response = await axios.post(`${API_URL_USER}/register`, {
        name: name,
        password: password
      });
      return response.status;
    } catch (error) {
      console.error(`Error al registrarse: ${error}`);
      return error.response.status;
    }
  };

  export const buyCar = async (userId, carId, userName, carName, price, discount) => {
    try {
      const response = await axios.post(`${API_URL_PURCHASE}/purchase`, {
        user_id: String(userId),
        car_id: String(carId),
        user_name: userName,
        car_name: carName,
        price: price,
        discount: discount
      });
      return response.status;
    } catch (error) {
      console.error(`Error al comprar el coche: ${error}`);
      return error.response ? error.response.status : 500;
    }
  }

  export const getPurchases = async (userId) => {
    try {
      const response = await axios.get(`${API_URL_PURCHASE}/purchases/${userId}`);
      return response.data[0];
    } catch (error) {
      console.error(`Error al obtener las compras: ${error}`);
      return [];
    }
  }