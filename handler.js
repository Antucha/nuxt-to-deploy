'use strict';
console.log('init')
const awsServerlessExpress = require('aws-serverless-express')
console.log('before serverApp')
const { app } = require('./serverApp')
console.log('after serverApp')
const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

module.exports.nuxt = (event, context) => awsServerlessExpress.proxy(server, event, context)
