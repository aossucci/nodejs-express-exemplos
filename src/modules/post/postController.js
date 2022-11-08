import { Router } from "express"
import { verifyAccessToken } from "../utils/auth"

const router = Router ()

router.post('/', verifyAccessToken, (req, res) => {
  res.send('CREAT POST /')
})

router.post('/:id?', verifyAccessToken, (req, res) => {
  res.send('GET POST /')
})

export default router
