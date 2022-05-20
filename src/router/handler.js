import { parse } from 'node:url'
import { routes } from './routes.js'
import { notFound } from './exceptions.js'

export const handler = (req, res) => {
  const { method, url } = req

  const { pathname } = parse(url, true)

  console.log({ method, url, pathname })

  switch (method) {
    case 'GET':
      const chosen = routes.GET[pathname]
      return chosen ? chosen(req, res) : notFound(req, res)
    default:
      return notFound(req, res)
  }
}