const router = require("express").Router();
const { register, login } = require("./auth.js");
const passport = require("passport");

router.post("/login", login);
router.post("/register", register);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// get the oauth screen
router.get("/login/failed", (req, res) => {
  return res.status(404).json({
    error: true,
    message: "log in failure",
  });
});

// this is to fetch the access token using the code.
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
    successRedirect: "http://localhost:5173/user/success",
  })
);

module.exports = router;