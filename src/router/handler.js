import { parse } from 'node:url'
import { routes } from './routes.js'
import { errorHandler, notFound } from './exceptions.js'
import { generateInstanceHero } from '../factories/hero.factory.js'
import path from 'node:path'

export const handler = async (req, res) => {
  const { url, method } = req
  const { pathname } = parse(url, true)

  const heroService = generateInstanceHero({ filePath: path.resolve('database', 'data.json') })

  const routePath = routes({ heroService })
  const chosen = routePath[method] && routePath[method][pathname] || notFound

  Promise.resolve(chosen(req, res)).catch(errorHandler(res))
}