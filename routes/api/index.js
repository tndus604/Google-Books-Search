const router = require('express').Router();
const bookRoutes = require("./books");

router.use("/books", bookRoutes);

moddule.exports = router;