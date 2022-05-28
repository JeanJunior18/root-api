import { writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

export class HeroRepository {
  constructor(file) {
    this.file = file
  }

  async create(hero) {
    const heroes = await this.findAll()
    heroes.push(hero)
    await writeFile(this.file, JSON.stringify(heroes))
    return hero
  }

  async findAll() {
    if (!existsSync(this.file))
      await writeFile(this.file, JSON.stringify([]))

    const heroes = await readFile(this.file)

    return JSON.parse(heroes)
  }

  async findById(id) {
    const heroes = await this.findAll()
    return heroes.find(hero => hero.id === id)
  }

  async update(id, hero) {
    const heroes = await this.findAll()
    const index = heroes.findIndex(hero => hero.id === id)
    heroes[index] = hero
    return writeFile(this.file, JSON.stringify(heroes))
  }

  async delete(id) {
    const heroes = await this.findAll()
    const index = heroes.findIndex(hero => hero.id === id)
    heroes.splice(index, 1)
    return writeFile(this.file, JSON.stringify(heroes))
  }

  async findByName(name) {
    const heroes = await this.findAll()
    return heroes.find(hero => hero.name === name)
  }

  async findByPower(power) {
    const heroes = await this.findAll()
    return heroes.filter(hero => hero.power === power)
  }

  async findBySide(side) {
    const heroes = await this.findAll()
    return heroes.filter(hero => hero.side === side)
  }
}
