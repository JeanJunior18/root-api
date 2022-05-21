import { Hero } from "../entities/hero.entity.js"

export class HeroService {
  constructor(heroRepository) {
    this.heroRepository = heroRepository
  }

  async create(data) {
    console.log('Creating hero...')
    const hero = new Hero(data)
    return this.heroRepository.create(hero)
  }

  async findAll() {
    console.log('Finding all heroes...')

    return this.heroRepository.findAll()
  }
}