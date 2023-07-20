import axios from 'axios';

const clientApi = axios.create({
  baseURL: "NEXT_USER_AUTH"
});

export const postAuth = (data) => {
  return clientApi.post('accounts/login/', data)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};