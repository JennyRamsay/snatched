const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://0.0.0.0:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('jaiAesthetics');
    const usersCollection = db.collection('users');
    const treatmentsCollection = db.collection('treatments');
    const usersRouter = createRouter(usersCollection);
    const treatmentsRouter = createRouter(treatmentsCollection);
    app.use('/api/users', usersRouter);
    app.use('/api/treatments', treatmentsRouter)
  })
  .catch(console.error) 

app.listen(5000, function() {
    console.log(`App server running on port ${this.address().port}`);
});