const pool=require("../../config/datebase");
module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into auth(email, password) 
                  values(?,?)`,
        [
 
          data.email,
          data.password,
       
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserEmail: (email, callBack) => {
      pool.query(
        `select * from auth where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUserByUserId: (id, callBack) => {
      pool.query(
        `select AuthID,email from auth where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUsers: callBack => {
      pool.query(
        `select AuthID,email from auth`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    updateUser: (data, callBack) => {
      pool.query(
        `update auth set  email=?, password=?,  where AuthID = ?`,
        [
         
          data.email,
          data.password,
          data.id
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    deleteUser: (data, callBack) => {
      pool.query(
        `delete from auth where AuthID = ?`,
        [data.AuthID],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
  };