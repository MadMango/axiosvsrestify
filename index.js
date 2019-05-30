const axios = require('./axios')
const restify = require('./restify')

const failApiUrl = 'potato' // this should never work
const failPath = 'potato' // same as above

const dummyApiUrl = 'https://jsonplaceholder.typicode.com'
const dummyPath = 'todos/1'

const impossibleTimeout = 10
const reasonableTimeout = 1000

const restifyWillWork = async () => {
  try {
    const client = restify(dummyApiUrl, reasonableTimeout)
    const result = await client('/' + failPath)
    console.log('GOT A RESTIFY RESULT: ', result)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN RESTIFY: ', error)
  }
}

const restifyWillHangOnInvalidRoute = async () => {
  try {
    const client = restify(failApiUrl, reasonableTimeout)
    const result = await client('/' + failPath)
    console.log('GOT A RESTIFY RESULT: ', result)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN RESTIFY: ', error)
  }
}

const restifyWillHangEvenWithTimeout = async () => {
  try {
    const client = restify(failApiUrl, impossibleTimeout)
    const result = await client('/' + failPath)
    console.log('GOT A RESTIFY RESULT: ', result)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN RESTIFY: ', error)
  }
}

const axiosWillWork = async () => {
  try {
    const client = axios(dummyApiUrl, reasonableTimeout)
    const result = await client(dummyPath)
    console.log('GOT A AXIOS RESULT: ', result.data)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN AXIOS: ', error)
  }
}

const axiosWillFailQuitePromptlyDueToInvalidRoute = async () => {
  try {
    const client = axios(failApiUrl, reasonableTimeout)
    const result = await client(failPath)
    console.log('GOT A AXIOS RESULT: ', result.data)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN AXIOS: ', error)
  }
}

const axiosWillFailQuitePromptlyDueToTimeout = async () => {
  try {
    const client = axios(dummyApiUrl, impossibleTimeout)
    const result = await client(dummyPath)
    console.log('GOT A AXIOS RESULT: ', result.data)
  } catch (error) {
    console.log('CAUGHT AN ERROR IN AXIOS: ', error)
  }
}

// restifyWillWork()
// restifyWillHangOnInvalidRoute()
restifyWillHangEvenWithTimeout()

// axiosWillWork()
// axiosWillFailQuitePromptlyDueToInvalidRoute()
// axiosWillFailQuitePromptlyDueToTimeout()