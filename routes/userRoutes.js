const express = require("express");
const router = express.Router();
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../Controller/userController");
const { signup ,login } = require("../Controller/authController");

router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);
router.route("/signUp").post(signup);
router.route("/login").post(login);
module.exports = router;