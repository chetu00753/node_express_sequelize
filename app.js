const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const allowedOrigin='localhost:3000';

app.use(cors(allowedOrigin));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const dummy = require('./routes/dummy_data')
 app.use('/api', dummy)

const getUsers=require('./routes/getUsers')
 app.use('/api',getUsers);

app.use('/', (req, res) => {
  res.status(200).json({
      message: "Test server working"
  });
})

//  const db = require('./models/index')
//  db.sequelize.sync({force:true});

const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log(`Listening on: http://localhost:${port}`);
});
