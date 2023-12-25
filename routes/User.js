// Import the required modules
const express = require("express")
const router = express.Router();

const { createUser, getAllUser, getUser, deleteUser, updateUser } = require("../controllers/UserDetails");
  
  
  router.post("/createUser", createUser);
  router.get("/getAllUser",getAllUser);
  router.get("/getUser/:id",getUser);
  router.delete("/deleteUser/:id",deleteUser);
  router.patch("/updateUser/:id",updateUser);

  module.exports = router;