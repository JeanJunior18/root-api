import http from 'http'
import { handler } from './router/handler.js'

const PORT = process.env.PORT || 3000

export const server = http.createServer(handler).listen(PORT).once('listening', () => {
  console.log(`Server running on port ${PORT}`)
})


// Catch all errors
process.on('uncaughtException', (err, origin) => {
  console.log(err, origin)
})
process.on('unhandledRejection', async (reason, promise) => {
  console.log(reason)
})