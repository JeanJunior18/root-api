import { randomUUID } from 'node:crypto'

export const databaseStub = {
  create: (hero) => hero,
  findAll: () => [{
    id: "b5c73018-0b96-424a-94c3-2295fbfe0164",
    name: "Batman",
    power: "Rich",
    side: "good"
  }],
}
