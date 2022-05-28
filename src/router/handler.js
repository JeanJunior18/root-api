import { parse } from 'node:url'
import { routes } from './routes.js'
import { errorHandler, notFound } from './exceptions.js'
import { generateInstanceHero } from '../factories/hero.factory.js'

export const handler = async (req, res) => {
  const { url, method } = req
  const { pathname } = parse(url, true)

  const heroService = generateInstanceHero()

  const routePath = routes({ heroService })
  const chosen = routePath[method] && routePath[method][pathname] || notFound

  Promise.resolve(chosen(req, res)).catch(errorHandler(res))
}