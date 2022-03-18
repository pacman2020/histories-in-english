const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes'));

app.get('/', (req, res)=>{
    return res.status(200).json('hello world');
})

app.listen(3000, function() {
    console.log('http://localhost:3000/');
});