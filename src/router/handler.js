import { parse } from 'node:url'
import { routes } from './routes.js'
import { errorHandler, notFound } from './exceptions.js'

export const handler = async (req, res) => {
  const { url, method } = req
  const { pathname } = parse(url, true)

  console.log({ method, url, pathname })


  const chosen = routes[method][pathname] || notFound(req, res)

  Promise.resolve(chosen(req, res)).catch(errorHandler(res))
}