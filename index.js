const express = require('express')
const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('MY_ENV_VAR' +  process.env.MY_ENV_VAR)
});


app.listen(process.env.PORT || 3000);