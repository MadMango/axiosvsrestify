const restify = require('restify')

module.exports = (apiUrl, timeout) => {
  const options = {
    url: apiUrl,
    timeout
  }

  const client = restify.createJsonClient(options)

  return path => {
    return new Promise((resolve, reject) => {
      client.get(path, (err, _req, _res, obj) => {
        if (err) {
          console.log('RESTIFY CLIENT CAUGHT AN ERROR', err)
          reject(err)
          return
        }
        console.log('RESTIFY CLIENT OK')
        resolve(obj)
      })
    })
  }
}
