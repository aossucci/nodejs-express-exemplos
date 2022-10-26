import * as express from 'express'
const app = express()

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