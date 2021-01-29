const pool=require("../../config/datebase");
module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into role(RoleName) 
                  values(?)`,
        [
          data.roleName,
    
      
       
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  
 
    getRoles: callBack => {
      pool.query(
        `select RoleName,RoleID from role`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateRole: (data, callBack) => {
      pool.query(
        `update role set RoleName=?  ,RoleID=?  where RoleID = ?`,
        [
          data.roleName,
          data.roleId,
        
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteRole: (data, callBack) => {
      pool.query(
        `delete from role where RoleID = ?`,
        [data.RoleID],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
  };