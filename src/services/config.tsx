import axios from 'axios';
import { toaster } from 'evergreen-ui';

export interface ICommonResponseType {
  success: boolean,
  data: any,
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
  if (!error.response.data.errors) {
    toaster.danger('Ocorreu um erro ao realizar a requisição, por favor tente novamente mais tarde.', { duration: 3 })
  } else {
    error.response.data.errors.forEach((error: { message: string } ) => {
      toaster.danger(error.message, { duration: 3 })
    })
  }
}

axiosInstance.interceptors.response.use(
  (response) => {return response},
  (error) => errorHandler(error)
);

export default axiosInstance