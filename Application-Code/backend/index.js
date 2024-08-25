const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

connection(); // Ensure async/await and error handling in this function

app.use(express.json());
app.use(cors()); // Consider configuring CORS based on your requirements

app.get('/ok', (req, res) => {
    res.status(200).send('ok');
});

app.use("/api/tasks", tasks); // Ensure proper error handling in routes

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
