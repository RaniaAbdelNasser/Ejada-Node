const pool=require("../../config/datebase");
module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into employee(employee_name,phone,RoleID,DepartmentID,DirectManager,email, age) 
                  values(?,?,?,?,?,?,?)`,
        [
          data.employeeName,
          data.phone,
          data.roleId,
          data.departmentId,
          data.directManger,
          data.email,
          data.age,
       
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  
    getEmployeeByDepartmentID: (DepartmentID, callBack) => {
      console.log('DepartmentID', DepartmentID);
      pool.query(
        `select * FROM employee WHERE DepartmentID = ?`,
        [DepartmentID],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getEmployees: callBack => {
      pool.query(
        `select EmployeeID,employee_name,phone,RoleID,DepartmentID,DirectManager,email,age from employee`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateEmployee: (data, callBack) => {
      pool.query(
        `update employee set employee_name=?, email=?,phone=?,RoleID=?,DepartmentID=?,DirectManager=?, age=?  WHERE EmployeeID = ?`,
        [
          data.employeeName,
          data.phone,
          data.roleId,
          data.departmentId,
          data.directManger,
          data.email,
          data.age,
          data.employeeID
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteEmployee: (data, callBack) => {
      pool.query(
        `delete from employee WHERE EmployeeID = ?`,
        [data.EmployeeID],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
  };