import test from "node:test";
import assert from "node:assert";

import { HeroService } from '../../src/services/hero.service.js'
import { databaseStub } from '../mock/database.mock.js'

test('Hero service unit test suite', async t => {
  const heroService = new HeroService(databaseStub)

  await t.test('should create a hero', async () => {
    const result = await heroService.create({
      name: 'Batman',
      power: 'Rich',
      side: 'good',
    })

    assert.strictEqual(result.name, 'Batman', 'should return created hero')
    assert.ok(result.id, 'should return hero id')
  })

})