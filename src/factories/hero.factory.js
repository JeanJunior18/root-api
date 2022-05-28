import { HeroRepository } from "../repositories/hero.repository.js"
import { HeroService } from "../services/hero.service.js"
import path from 'node:path'

export const generateInstanceHero = () => {
  const heroRepository = new HeroRepository(
    path.resolve('database', 'data.json')
  )
  const heroService = new HeroService(heroRepository)

  return heroService
}