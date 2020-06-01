const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'http://localhost:8082'
}

app.use(cors(corsOptions));

//parse request content-type to application/json
app.use(bodyParser.json());

//parse request of content-type - application/x-www/form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require('./models');
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and re-sync db.')
})

//simple rout
app.get('/', (req, res) => {
    res.json({message: 'welcome to my app'})
});

// const apiUserRout = require('./routes/user.routes')
// const apiAdvertRout = require('./routes/advert.routes')
// app.use('/advert', apiUserRout)
// app.use('/user', apiAdvertRout)

require('./routes/user.routes')(app)
require('./routes/advert.routes')(app)

//set port, listen for requests
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

