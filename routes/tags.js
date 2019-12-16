const express = require("express");
const fakeTags = require("../data/tags");
const posts = require("./posts");
const router = express.Router({ mergeParams: true });

// Get a list of posts
router.get("/", (req, res) => {
  res.json(fakeTags);
});

// Get a single post
router.get("/:tagsId", (req, res) => {
  // Find the post in the array that has the id given by req.params.id
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const tagsId = Number(req.params.tagsId);
  const foundTag = fakeTags.find(tag => tag.id === tagsId);
  if (!foundTag) {
    return res.status(404).json({
      error: "Tags not found"
    });
  }
  return res.json(foundTags);
});

router.use("/:postId/posts", posts);

module.exports = router;
