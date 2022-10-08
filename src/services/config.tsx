import axios from 'axios';
import { toaster } from 'evergreen-ui';

const axiosInstance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

function errorHandler(error: any) {
  toaster.danger('Ocorreu um erro ao realizar a requisição, por favor tente novamente mais tarde.')
}

axiosInstance.interceptors.response.use(
  (response) => {return response},
  (error) => errorHandler(error)
);

export default axiosInstance