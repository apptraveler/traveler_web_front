import AxiosInstance, { ICommonResponseType } from '@services/config'

const defaultPath = 'traveler/Authentication/v1'

export interface IRegisterParams {
  email: string,
  name: string,
  password: string,
  confirmPassword: string
}
export interface IRegisterResponse extends ICommonResponseType {
  token: string
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
export interface ILoginResponse extends ICommonResponseType {
  token: string
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