import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";

test('Hero integration test suite', async t => {
  const testPort = 9009

  process.env.PORT = testPort

  const { server } = await import('../../src/index.js');

  const testServerAddress = `http://localhost:${testPort}/heroes`

  await t.test('should create a hero', async () => {
    const data = {
      name: 'Batman',
      power: 'Rich',
      side: 'good',
    }

    const request = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data),
    })

    assert.strictEqual(request.status, 201, 'should return 201 status')

    const result = await request.json()

    assert.deepStrictEqual(result.success, 'User created successfully', 'should return success message')

    assert.strictEqual(result.data.name, 'Batman', 'should return created hero')
    assert.ok(result.data.id, 'should return hero id')
  })


  await promisify(server.close.bind(server))()
})
