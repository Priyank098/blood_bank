const conn="mongodb://0.0.0.0:27017/blood_bank";
const mongoose = require('mongoose');

const connectionParams={
    useNewUrlParser: true,  
    useUnifiedTopology: true,
}
mongoose.connect(conn,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })