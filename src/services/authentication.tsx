import AxiosInstance from '@services/config'

const defaultPath = 'traveler/Authentication/v1'

export interface IRegisterParams {
  email: string,
  name: string,
  password: string,
  confirmPassword: string
}
export interface IRegisterResponse {
  success: boolean,
  data: {
    token: string
  },
  errors: [
    {
      timestamp: string,
      code: string,
      message: string,
      paramName: string
    }
  ]
}
export const Register = (userData: IRegisterParams): any => {
  return AxiosInstance.post(`${defaultPath}/register`, userData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export interface ILoginParams {
  email: string,
  name: string,
  password: string
}
export interface ILoginResponse {
  success: boolean,
  data: {
    token: string
  },
  errors: [
    {
      timestamp: string,
      code: string,
      message: string,
      paramName: string
    }
  ]
}
export const Login = (userData: ILoginParams): any => {
  return AxiosInstance.post(`${defaultPath}/login`, userData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}