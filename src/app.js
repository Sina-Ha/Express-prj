const express = require('express');
const pcPartRoute = require('./routes/pcPart');
const customersRoute = require('./routes/customers');
const storesRoute = require('./routes/stores');
const mobilesRoute = require('./routes/mobile');
const laptopRoute = require('./routes/laptop');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/pc', pcPartRoute);
app.use('/api/customers', customersRoute);
app.use('/api/stores', storesRoute);
app.use('/api/mobiles', mobilesRoute);
app.use('/api/laptops', laptopRoute);

app.listen(3000, () => console.log('server running at http://localhost:3000'));