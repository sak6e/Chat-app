const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:52a0e31f-35bc-4c0c-b451-4379b15cb0e4',
  key: '44f5b450-a46d-4839-967a-9aad1661a89a:fFjQR9pClZ4CouyNmnJMmhHCtalfRIk12B4lYaJ3xVY=',
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const {username} = req.body
  chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(() => res,sendStatus(201))
      .catch(error => {
        if(error.error === 'services/chatkit/user_already_exists'){
          res.sendStatus(200)
        } else{
          res.status(error.status).json(error)
        }
      })
})
app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({userId: req.query.user_id})
  res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
