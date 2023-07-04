const express = require("express");
const mongoose = require("mongoose");
const { ServerSelectionError } = require("mongodb");

const app = express();

// connect to the mongodb database...
mongoose.connect(
    "mongodb://localhost/blog_tut",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).catch((err) => {
    if (err instanceof ServerSelectionError) {
        console.error("Server selection error occurred:", err);
    } else {
        console.error("Error occurred:", err);
    }
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));
app.use(require("./routes/blog"));

// server configurations are here...
app.listen(3000, () => console.log("Server started listening on port: 3000"));
