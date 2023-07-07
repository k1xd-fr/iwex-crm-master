import { Request, Response } from 'express'

import { pool } from '../../connection'

export function user(req: Request, res: Response) {
  pool.query('SELECT * FROM users', (error, result) => {
    if (error) {
      console.error('Error executing the query:', error)
      res.status(500).json({ error: 'Internal server error' })
    } else {
      res.json(result.rows)
      console.log(result.rows)
    }
  })
}
