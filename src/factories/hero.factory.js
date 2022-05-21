import { HeroRepository } from "../repositories/hero.repository.js"
import { HeroService } from "../services/hero.service.js"

export const generateInstanceHero = ({ filePath }) => {
  const heroRepository = new HeroRepository(
    filePath
  )
  const heroService = new HeroService(heroRepository)

  return heroService
}