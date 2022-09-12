const express=require('express');
const { use } = require('./routes/index');
const app=express();

const cors=require('cors');

require('./database');
app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/index'))

/*app.listen(3000)
console.log('Server on port', 3000);*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);

