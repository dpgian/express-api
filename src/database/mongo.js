const { MongoMemoryServer } = require('mongodb-memory-server')
const { MongoClient } = require('mongodb')

let database = null

async function startDatabase() {
    const mongo = new MongoMemoryServer()
    const mondoDBURL = await mongo.getConnectionString()
    const connection = await MongoClient.connect(mondoDBURL, { useNewUrlParser: true })
    database = connection.db()
}

async function getDatabase() {
    if (!database) await startDatabase()
    return database
}

module.exports = {
    getDatabase,
    startDatabase
}