import AxiosInstance, { ICommonResponseType } from '@services/config'

const defaultPath = 'traveler/Traveler/v1'

export interface IPutProfileInfoParams {
  profileId: string,
  averageSpendId: string,
  locationTagsIds: [string]
}
export interface IPutProfileInfoResponse extends ICommonResponseType {
  data: {
    token: string
  },
}
export const PutProfileInfo = (userData: IPutProfileInfoParams): any => {
  return AxiosInstance.put(`${defaultPath}/profile`, userData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export interface IGetProfileInfoResponse extends ICommonResponseType {
  data: {
    email: string
    fullName: string
    profile: {
      name: string
      id: number
    }
    averageSpend: {
      name: string
      id: number
    }
    locationTags: [
      {
        name: string
        id: number
      }
    ]
  }
}
export const getProfileInfo = (): any => {
  return AxiosInstance.put(`${defaultPath}/information`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}