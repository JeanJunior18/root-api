export const routes = {
  GET: {
    '/': (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Hello World!')
    },
    '/error': async (req, res) => {
      throw new Error('This is an error')
    }
  }
}