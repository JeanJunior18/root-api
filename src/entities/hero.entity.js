import { randomUUID } from 'node:crypto'
export class Hero {
  constructor({ name, power, side }) {
    this.id = randomUUID()
    Object.assign(this, { name, power, side })
  }
}