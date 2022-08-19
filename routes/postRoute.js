const {
  GetPostById,
  GetAllFollowPost,
  GetAllUnblockPost,
} = require("../controllers/postController");
const router = require("express").Router();
const controller = require("../controllers/postController");
const { checkToken } = require("../middleware/auth");

router.get("/getAllPosts", controller.getAllPosts);
router.get("/getPaginationPost", controller.getPaginationPost);
router.get("/viewDetails", controller.viewDetails);
router.post("/changeStatusPost", controller.changeStatusPost);
router.get("/get-post-by-id/:postId", GetPostById);
const { editPostID } = require("../controllers/editController");
const { createPostController } = require("../controllers/createController");
const { getPostController } = require("../controllers/getPostController");
const { getEditController } = require("../controllers/getEditController");

router.get("/createPost", getPostController);
router.post("/createPost", createPostController);
router.get("/editPost/:idEditPost", getEditController);
router.post("/editPost/:idPost", editPostID);
router.get("/get-post-by-id/:postId", GetPostById);
router.get("/get-all-follow-post", GetAllFollowPost);
router.get("/get-all-unblock-post", GetAllUnblockPost);
module.exports = router;
