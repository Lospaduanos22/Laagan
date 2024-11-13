// db.js
const { MongoClient } = require('mongodb');

// Load environment variables (assuming you are using dotenv for env variables)
require('dotenv').config();

const uri = process.env.MONGODB_URI || "mongodb+srv://laagantravel:<db_password>@lospaduanos.qpnae8g.mongodb.net/?retryWrites=true&w=majority&appName=Lospaduanos";

async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to MongoDB!");

    // Return the client to use it in other parts of your app
    return client;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

module.exports = connectToDatabase;
