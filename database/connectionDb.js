const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

// creates a mongo database in memory
 async function mongoDb() {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUri);

    console.log(`dataBase is connected to ${mongoUri} `)
}

module.exports = mongoDb;