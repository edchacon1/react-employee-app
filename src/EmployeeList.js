import React, {useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";

const isValidNumber = (value) => {
   return isFinite(value) && Number(value)
}
const EmployeeList = () => {
   const [employeesList, setEmployeesList] = useState([]);
   const [employeeId, setEmployeeId] = useState('');

   const getEmployeeById = () => {
      axios.get('http://localhost:8080/employee/' + employeeId)
         .then(result => {
            setEmployeesList([result.data]);
         })
   };
   const getEmployees = () => {
      axios.get('http://localhost:8080/employee')
         .then(result => {
            setEmployeesList(result.data);
         })
   };
   const handleEmployeesSearch = () => {
      console.log("employeeId: " + employeeId);
      if (isValidNumber(employeeId)) {
         getEmployeeById()
      } else if (employeeId === '') {
         getEmployees()
      } else {
         cleanEmployeeInfo();
      }
   }
   const cleanEmployeeInfo = () => {
      setEmployeesList([]);
      setEmployeeId('');
   }
   return (
      <div>
         <div className="form-group mt-3 ml-3">
            <div><label>Employee Id <input name="employeeId" class="form-control mt-3" type="text" value={employeeId}
                                           onChange={(event) => {
                                              setEmployeeId(event.target.value)
                                           }}/></label></div>
            <div><input class="btn btn-success mt-2 mb-3" type="button" value="Get Employees"
                        onClick={handleEmployeesSearch}></input></div>
         </div>
         <div class="ml-3">
            <table className="table">
               <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Contract Type Name</th>
                  <th>Role Id</th>
                  <th>Role Name</th>
                  <th>Role Description</th>
                  <th>Hourly Salary</th>
                  <th>Monthly Salary</th>
                  <th>Annual Salary</th>
               </tr>
               </thead>
               <tbody>
               {employeesList.map((employee) => (
                  <Employee employee={employee}/>
               ))}
               </tbody>
            </table>
         </div>
      </div>
   )
};

export default EmployeeList;