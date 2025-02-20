require('dotenv').config();
const express = require('express');
const { initializeDB } = require('./models');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

initializeDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
