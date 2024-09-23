const express = require('express')
const router = express.Router();

const { login, student_register, college_register} = require("../Controller/Auth");
const { auth, isAdmin, isStudent } = require("../middleware/auth")

router.route("/student-register").post(student_register);
router.route("/login").get(login);

router.route("/college-register").post(college_register);

module.exports = router;