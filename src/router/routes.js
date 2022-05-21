import { once } from "node:events";
import { Hero } from "../entities/hero.entity.js";

export const routes = ({ heroService }) => ({
  GET: {
    '/': (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Hello World!')
    },
    '/heroes': async (req, res) => {
      const heroes = await heroService.findAll()
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(heroes))
    },
    '/error': async (req, res) => {
      throw new Error('This is an error')
    }
  },
  POST: {
    '/heroes': async (req, res) => {
      const data = await once(req, 'data')
      const result = await heroService.create(JSON.parse(data))

      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({
        data: result,
        success: 'User created successfully'
      }))
      res.end()
    }
  },
  PUT: {},
  DELETE: {}
})