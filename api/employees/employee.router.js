const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createEmployee,
  getEmployeeByDepartmentID,
  getEmployees,
  updateEmployees,
  deleteEmployee
} = require("./employee.controller");
router.get("/", checkToken, getEmployees);
router.post("/",checkToken, createEmployee);
router.get("/:DepartmentID", checkToken, getEmployeeByDepartmentID);

router.patch("/", checkToken, updateEmployees);
router.delete("/delete", checkToken, deleteEmployee);

module.exports = router;