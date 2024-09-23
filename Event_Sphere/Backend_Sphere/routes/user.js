const express = require('express')
const router = express.Router();

const {student_register, college_register} = require("../Controller/RegAuth");
const { loginAsCollege, loginAsUser } = require("../Controller/LogAuth");
// const { auth, isAdmin, isStudent } = require("../middleware/auth")

router.route("/student-register").post(student_register);
router.route("/college-register").post(college_register);

router.post('/college/login', loginAsCollege);
router.post('/user/login', loginAsUser);

module.exports = router;