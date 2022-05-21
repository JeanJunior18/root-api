import { writeFile, readFile } from 'node:fs/promises'
import path from 'path'
import { Hero } from '../entities/hero.entity.js'

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
    return JSON.parse(await readFile(this.file))
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
