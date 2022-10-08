import axios from 'axios';
import { toaster } from 'evergreen-ui';

const axiosInstance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});

function errorHandler(error: any) {
  console.log(error)
  toaster.danger('Ocorreu um erro ao realizar a requisição, por favor tente novamente mais tarde.', { duration: 3 })
}

axiosInstance.interceptors.response.use(
  (response) => {return response},
  (error) => errorHandler(error)
);

export default axiosInstance