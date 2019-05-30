const axios = require('axios')

module.exports = (apiUrl, timeout) => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout
  })

  return path => instance.get(path)
}
