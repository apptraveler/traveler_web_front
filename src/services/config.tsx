import axios from 'axios';
import { toaster } from 'evergreen-ui';

export interface ICommonResponseType {
  success: boolean,
  errors: [
    {
      timestamp: string
      code: string
      message: string
      paramName: string
    }
  ]
}

const axiosInstance = axios.create({
  baseURL: `https://traveler-identity-develop.herokuapp.com/`
});

function errorHandler(error: any) {
  console.log('esse é o erro', error)
  toaster.danger('Ocorreu um erro ao realizar a requisição, por favor tente novamente mais tarde.', { duration: 3 })
}

axiosInstance.interceptors.response.use(
  (response) => {return response.data},
  (error) => errorHandler(error)
);

export default axiosInstance