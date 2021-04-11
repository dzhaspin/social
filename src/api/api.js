import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7100d87d-116d-4c62-b8bc-0428e6505093'
  }
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
}
