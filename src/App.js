import React from "react";
import EmployeeList from "./EmployeeList";
const employees = [{"id":1,"name":"Andrea","contractTypeName":"HourlySalaryEmployee","roleId":1,"roleName":"Administrator","roleDescription":null,"salary":1.44E7,"hourlySalary":null,"monthlySalary":50000.0},{"id":2,"name":"Alex","contractTypeName":"MonthlySalaryEmployee","roleId":2,"roleName":"Contractor","roleDescription":null,"salary":1.44E7,"hourlySalary":null,"monthlySalary":50000.0}];
function App() {
  return (
    <div className="App">
     <EmployeeList employees={employees}  />
    </div>
  );
}

export default App;
