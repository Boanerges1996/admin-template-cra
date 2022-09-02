import { TypeOptions } from "react-toastify"

export interface IAdminModel {
  name: string
  firstname: string
  lastname: string
  othernames: string
  email: string
  phone?: string
  blocked?: boolean
}

export interface IAdminStoreState {
  admins: IAdminModel[]
  logged: boolean
  authToken: string
  loading: boolean
}

export interface IDocsCallout {
  content: string
  href: string
  name: string
}

export interface INotificationState {
  message?: string
  type: "info" | "success" | "error" | "warning" | TypeOptions
  theme?: 'light' | 'dark'
  position?: 'top-right'
  autoClose?: number
  hideProgressBar?: boolean
  component?: 'antd' | 'react-toastify' | 'mui'
  description?: string
}
