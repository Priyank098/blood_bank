const express = require('express')
require("./db_connection/conn")
const router = require("./routes/user_route")

const app = express()
const {error_middleware} = require("./middleware/error_middleware")
app.use(express.json());
app.use('/',router );


const PORT = 4000;
app.use(error_middleware);
app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})
