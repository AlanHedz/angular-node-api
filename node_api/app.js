'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserCtrl = require('./controllers/auth')
const app = express()
const api = require('./routes/api')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/auth/login', UserCtrl.signIn)
app.use('/auth/register', UserCtrl.signUp)
app.use('/api', api)

module.exports = app
