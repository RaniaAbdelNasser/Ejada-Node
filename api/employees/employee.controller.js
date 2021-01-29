const {
    create,
    getEmployeeByDepartmentID,
    getEmployees,
    updateEmployee,
    deleteEmployee
  } = require("./employee.service");

  
  module.exports = {
    createEmployee: (req, res) => {
      const body = req.body;
      
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    
    getEmployeeByDepartmentID: (req, res) => {
      const DepartmentID = req.params.DepartmentID;
      console.log(DepartmentID);
      getEmployeeByDepartmentID(DepartmentID, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        console.log(results);
        return res.json({
          success: 1,
          data: results,
          
        });
      });
    },
    getEmployees: (req, res) => {
      getEmployees((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateEmployees: (req, res) => {
      const body = req.body;
     
      updateEmployee(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    deleteEmployee: (req, res) => {
      const data = req.body;
      deleteEmployee(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "Employee deleted successfully"
        });
      });
    }
  };