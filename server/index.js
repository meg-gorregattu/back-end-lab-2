const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller');

app.get('/api/movies', getHouses);
app.delete('/api/movies/:id', deleteHouse);
app.post('/api/movies', createHouse);
app.put('/api/movies/:id', updateHouse);

app.listen(4004, () => {console.log('Listening on port 4004')})