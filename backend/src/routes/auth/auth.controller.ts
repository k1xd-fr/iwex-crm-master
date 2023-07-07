import e, { Request, Response } from 'express'
import { pool } from '../../connection'
import { middlewareFunc } from './reg.middleware '

export function signin(req: Request, res: Response) {}

export function signup(req: Request, res: Response) {
  const { first_name, last_name, email, contact_number, date_of_birth, is_active, salt, hash, updated_at, created_at } =
    req.body

  pool.query(
    `INSERT INTO users (first_name, last_name, email, contact_number, date_of_birth, is_active, salt, hash, updated_at, created_at)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `,
    [first_name, last_name, email, contact_number, date_of_birth, is_active, salt, hash, updated_at, created_at],
    (error: Error, result: Response) => {
      if (error) {
        console.log('asdsdas')
      } else {
        res.json(result)
      }
    }
  )
}
