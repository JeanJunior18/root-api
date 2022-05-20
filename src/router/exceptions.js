export function notFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
}

export function errorHandler(res) {
  return error => {
    console.error(`Error: ${error.message}`)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
}