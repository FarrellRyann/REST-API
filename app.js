const express = require('express');
const bodyParser = require('body-parser');
const {sequelize, connectdb} = require('./config/db');
const siswaRoutes = require('./routes/siswaroutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", siswaRoutes);

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});