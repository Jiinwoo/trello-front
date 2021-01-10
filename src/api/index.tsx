import Axios from 'axios'

const axios =
    process.env.NODE_ENV === 'development'
        ? Axios
        : Axios.create({
              baseURL: 'http://localhost:8080',
          })

export default axios
