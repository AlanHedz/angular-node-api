'use strict'

const User = require('../models/user')
const service = require('../services/service')
const encrypt = require('../lib/encriptar')

function signUp (req, res) {
  const email = req.body.email
  const displayName = req.body.displayName
  const password = req.body.password

  const passwordEncrypt = encrypt.encrypt(email, password)

  const user = new User({
    email: email,
    displayName: displayName,
    password: passwordEncrypt
  })

  user.save((err) => {
    if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
    return res.status(200).send({token: service.createToken(user)})
  })
}

function signIn (req, res) {
  const email = req.body.email
  const password = req.body.password
  const passwordEncrypt = encrypt.encrypt(email, password)

  User.findOne({email: email}, (err, user) => {
    if (err) res.status(500).send({message: `Error al iniciar sesion del usuario: ${err}`})
    if (user.password === passwordEncrypt) return res.status(200).send({token: service.createToken(user)})
  })
}

module.exports = {
  signUp,
  signIn
}
