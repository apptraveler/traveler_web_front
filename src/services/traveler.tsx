import AxiosInstance, { ICommonResponseType } from '@services/config'

const defaultPath = 'traveler/v1'

export interface IPutProfileInfoParams {
  profileId: string,
  averageSpendId: string,
  locationTagsIds: [string]
}

export const PutProfileInfo = (userData: IPutProfileInfoParams, token: string): any => {
  return AxiosInstance.put(`${defaultPath}/profile`, userData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
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
export const getProfileInfo = (token: string): any => {
  return AxiosInstance.get(`${defaultPath}/information`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}