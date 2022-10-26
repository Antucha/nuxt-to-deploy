const express = require('express')
const asyncify = require('express-asyncify')
const {Nuxt} = require('nuxt')
const path = require('path')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const nuxtConfig = require('./nuxt.config.js')

const IS_PROD = process.env.NODE_ENV === 'production'
console.log('es produccion')
console.log(IS_PROD)
// Create App

// Add Nuxt
const nuxt = new Nuxt({
  ...nuxtConfig,
  dev: !IS_PROD,
})

let isNuxtReady = false

const app = asyncify(express())
// const app = express()
if (IS_PROD) {
  // Set API Gateway Middleware
  app.use(awsServerlessExpressMiddleware.eventContext())
}
// Provide Assets
app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))

app.use(async (req, res) => (isNuxtReady || await nuxt.ready() && (isNuxtReady = true)) && nuxt.render(req, res))

module.exports = {
  app,
  nuxt,
}
