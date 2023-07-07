import { Router } from 'express'
import { user } from './user.controller'

const router = Router()

router.get('/user', user)

export default router
