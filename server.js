/*Build a command-line application that at a minimum allows the user to:
-Add departments, roles, employees
-View departments, roles, employees
-Update employee roles*/
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "management_SystemsDB"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    aboutEmployee();
  });

/*constructor function to ask for 
  -first name
  -last name
  -department 
  -role title
  -salary
  -manager id (?)
  */

  // function to handle posting new items up for auction
  function aboutEmployee() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
          //store as first_name
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name?"
        },
          //store as last_name
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name?"
        },
        {
            name: "departmentName",
            type: "input",
            message: "What department does this employee belong to?"
        },   
        {
            name: "roleTitle",
            type: "input",
            message: "What is this employee's role?"
        }, 
        {
            name: "salary",
            type: "input",
            message: "What is this employee's salary?"
        },     
        {
            name: "manager_ID",
            type: "input",
            message: "Who is this employee's manager?"
        }            
      ]) 
  }
  