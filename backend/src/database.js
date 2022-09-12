/*const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://wforero:S4n74f3c4mp30n@02masw.sy2yr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('TFM');
    const movies = database.collection('cursos')
    
    const query = { name: 'Javascript' };
   const movie = await movies.findOne(query);

  
    console.log(movie);

    console.log("Conectado a la base de datos")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://wforero:S4n74f3c4mp30n@02masw.sy2yr.mongodb.net/TFM?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useunifiedTopology:true
    
})

    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));

    /*const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://wforero:S4n74f3c4mp30n@02masw.sy2yr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('TFM');
    const users = database.collection('cursos')
    
    const query = { Curso: 'Javascript' };
    const movie = await users.findOne(query);
 
   
     console.log(movie);

    console.log("Conectado a la base de datos")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
