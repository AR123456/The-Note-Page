const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8000;
const app = express();

// middleware to send  body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes- from files
app.use("/api/goals", require("./routes/goalRoutes"));
// custom middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
