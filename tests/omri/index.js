const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.static("public"));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/twitter-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("Connected to MongoDB..."))

/** Mongoose Schemas */

const userSchema = new mongoose.Schema({
    name: String,
    img: String
})

const User = mongoose.model("user", userSchema);

const postSchema = new mongoose.Schema({
    username: String,
    content: String
})

const Post = mongoose.model("post", postSchema);

app.post("/api/auth", async (req, res) => {
    const user = new User({
        name: req.body.username,
        img: req.body.imgSrc
    })

    await user.save();
    return res.status(200).send("something");
})

//create post
app.post("/api/post", async (req, res) => {
    const {
        username,
        content
    } = req.body;
    const post = new Post({
        username,
        content
    })

    await post.save();
    res.status(200).send("post created")
})

app.post("/api/getUser", async (req, res) => {
    const user = await User.find({
        name: req.body.username
    });

    res.send(user)
})
app.get("/api/post", async (req, res) => {
    const posts = await Post.find();

    res.send(posts)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))