module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'database',
  SECRET_TOKEN: 'miclavedetokens'
}
