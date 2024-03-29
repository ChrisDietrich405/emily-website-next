const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("Add Mongo URI to .env.local");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

module.exports = clientPromise;
