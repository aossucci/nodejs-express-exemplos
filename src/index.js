import * as express from 'express'
import * as cookieParser from 'cookie-parser'


const app = express()
app.use(express.json())
app.use(cookieParser())

import userController from './modules/user/userController'
import postController from './modules/post/postController'

app.use('/user', userController)
app.use('/post', postController)



app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))



/* 
app.get('/', function (req, res) {
  res.send('GET2 /')
})

app.post('/', function (req, res) {
  res.send('POST /')
})

app.put('/', function (req, res) {
  res.send('PUT /')
})

app.delete('/', function (req, res) {
  res.send('DELETE /')
})

app.patch('/', function (req, res) {
  res.send('PATCH /')
})

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))

Rotas a serem criadas:
Cadastro
Login
Criar posts
Listar posts
*/

