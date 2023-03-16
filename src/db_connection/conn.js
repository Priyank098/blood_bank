const conn="mongodb+srv://kartikyaar4:kartik1234@cluster0.mfxfcb4.mongodb.net/?retryWrites=true&w=majority";
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