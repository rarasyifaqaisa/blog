const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/compose", (req, res) => {
    res.render("composeBlog");
});

router.post("/compose", (req, res) => {
    const { title, content } = req.body;

    // Check for missing fields
    if (!title || !content) {
        return res.send("Please enter all the required credentials");
    }

    const newBlog = new Blog({ title, content });

    // Save the blog to the database
    newBlog.save()
        .then(() => {
            console.log("Blog Saved Successfully!");
            res.redirect("/"); // Redirect to the home page or any desired location
        })
        .catch((error) => {
            console.log("Error saving blog:", error);
            res.status(500).send("Error saving blog");
        });
});

module.exports = router;
