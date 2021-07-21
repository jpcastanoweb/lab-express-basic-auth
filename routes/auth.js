const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const User = require("./../models/User.model")

/* GET signup */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup")
})

/* POST signup */
router.post("/signup", (req, res) => {
  const { username, password } = req.body

  bcryptjs
    .genSalt(10)
    .then((salt) => {
      return bcryptjs.hash(password, salt)
    })
    .then((hashPassword) => {
      return User.create({
        username,
        passwordHash: hashPassword,
      })
    })
    .then((user) => console.log(user))
    .catch((e) => console.log(e))
})

module.exports = router
