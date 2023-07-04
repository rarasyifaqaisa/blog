const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/", async(req, res) => {
    const allBlogs = await Blog.find();
    res.render("index", {blog: allBlogs});
});

module.exports = router;
