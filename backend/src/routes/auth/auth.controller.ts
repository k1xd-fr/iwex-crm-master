import { Request, Response } from 'express'
import { pool } from '../../connection'

export function signin(req: Request, res: Response) {}

export function signup(req: Request, res: Response) {
  const { first_name, last_name, is_active, salt, hash, updated_at, created_at } = req.body

  pool.query(
    `INSERT INTO users (first_name, last_name, is_active, salt, hash, updated_at, created_at)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    `,
    [first_name, last_name, is_active, salt, hash, updated_at, created_at],
    (error, result) => {
      console.log(result.rows)

      if (error) {
        console.log('error')
      } else {
        res.json(result)
      }
    }
  )
}
