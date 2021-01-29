const {
    create,
    getDepartmentByDepartmentId,
    getDepartments,
    updateDepartment,
    deleteDepartment
  } = require("./department.service");

  
  module.exports = {
    createDepartment: (req, res) => {
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
    
    getDepartmentByDepartmentId: (req, res) => {
      const id = req.params.id;
      getDepartmentByDepartmentId(id, (err, results) => {
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
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getDepartments: (req, res) => {
      getDepartments((err, results) => {
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
    updateDepartments: (req, res) => {
      const body = req.body;
    
      updateDepartment(body, (err, results) => {
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
    deleteDepartment: (req, res) => {
      const data = req.body;
      deleteDepartment(data, (err, results) => {
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
          message: "Department deleted successfully"
        });
      });
    }
  };