const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createDepartment,
  getDepartments,
  updateDepartments,
  deleteDepartment
} = require("./department.controller");
router.get("/", checkToken, getDepartments);
router.post("/",checkToken, createDepartment);


router.patch("/", checkToken, updateDepartments);
router.delete("/delete", checkToken, deleteDepartment);

module.exports = router;