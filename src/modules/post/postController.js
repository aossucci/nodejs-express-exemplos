import { Router } from "express"

const router = Router ()

router.post('/', function (req, res) {
  res.send('CREAT POST /')
})

router.post('/:id?', function (req, res) {
  res.send('GET POST /')
})

export default router
