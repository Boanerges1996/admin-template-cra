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
