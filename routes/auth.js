const { Router } = require("express");

const validateRequest = require("../middlewares/messageErrors");
const { login, googleSignIn } = require("../controllers/auth");
const { validateLogin, validateLoginGoogle } = require("../validations/validateLogin");
const router = Router();

router.post("/login", [validateLogin(), validateRequest], login);
router.post("/google", [validateLoginGoogle(), validateRequest], googleSignIn);

module.exports = router;