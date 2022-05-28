import http from 'http'
import { handler } from './router/handler.js'

const PORT = process.env.PORT || 3000

export const server = http
  .createServer(handler)
  .listen(PORT)
  .once('listening', () => {
    console.log(`Server running on port ${PORT}\nProcess ID: ${process.pid}`)
  })


// Catch all errors
process.on('uncaughtException', (err, origin) => {
  console.log(err, origin)
})
process.on('unhandledRejection', async (reason, promise) => {
  console.log(reason)
})

// Graceful shutdown
function gracefulShutdown(event) {
  console.log(`Received ${event} event`)
  console.log('Shutting down...')
  server.close(() => {
    console.log('Shutdown complete')
    process.exit(0)
  })
}
process.on('SIGTERM', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)
process.on('exit', (code) => {
  console.log(`Exit signal received code ${code}`)
})

