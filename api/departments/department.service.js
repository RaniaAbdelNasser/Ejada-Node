const pool=require("../../config/datebase");
module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into department(department_name,EmployeeID) 
                  values(?,?)`,
        [
          data.departmentName,
    
          data.employeeId
       
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  
 
    getDepartments: callBack => {
      pool.query(
        `select department_name,EmployeeID,DepartmentID from department`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateDepartment: (data, callBack) => {
      pool.query(
        `update department set department_name=?  ,EmployeeID=?  where DepartmentID = ?`,
        [
          data.departmentName,
          data.departmentId,
          data.employeeId
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteDepartment: (data, callBack) => {
      pool.query(
        `delete from department where DepartmentID = ?`,
        [data.DepartmentID],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
  };