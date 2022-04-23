import axios from 'axios'

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  // 请求超时时间
  timeout: 1000 * 60 * 5,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 强制使get的Content-Type生效
    if (config.method === 'get') {
      config.data = true
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
