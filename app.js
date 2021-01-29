
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();


const userRouter = require("./api/users/user.router");
const employeeRouter = require("./api/employees/employee.router");
const departmentRouter = require("./api/departments/department.router");
const roleRouter = require("./api/roles/role.router");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/roles", roleRouter);
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);