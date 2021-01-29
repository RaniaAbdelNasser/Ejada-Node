const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createRole,
  getRoles,
  updateRoles,
  deleteRole
} = require("./role.controller");
router.get("/", checkToken, getRoles);
router.post("/",checkToken, createRole);


router.patch("/", checkToken, updateRoles);
router.delete("/delete", checkToken, deleteRole);

module.exports = router;