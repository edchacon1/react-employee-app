import React from "react"

 const Employee = ({employee = {}}) => {

   return (
      <tr>
         <td>{employee.id}</td>
         <td>{employee.name}</td>
         <td>{employee.contractTypeName}</td>
         <td>{employee.roleId}</td>
         <td>{employee.roleName}</td>
         <td>{employee.roleDescription}</td>
         <td>{employee.hourlySalary}</td>
         <td>{employee.monthlySalary}</td>
         <td>{employee.annualSalary}</td>
      </tr>
   )
 };

export default Employee;