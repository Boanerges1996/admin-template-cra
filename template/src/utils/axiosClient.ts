import axios, { AxiosInstance } from 'axios'
import redux from 'redux'
import { clientUrl } from './constants'

let store: redux.Store

export const injectStore = (storeInstance: redux.Store) => {
  store = storeInstance
}

export const axiosClient: AxiosInstance = axios.create({
  baseURL: clientUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
  timeout: 10000,
})

axiosClient.interceptors.request.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    let res = error?.response
    if (res?.status === 401) {
      //   store.dispatch(logoutAction())
      window.location.href = `${clientUrl}`
    }

    return Promise.reject(error)
  }
)

axiosClient.interceptors.request.use((config: any) => {
  let token = store.getState().admin.authToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
