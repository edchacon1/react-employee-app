import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";

const isValidNumber = (value) => {
   return isFinite(value) && Number(value)
}

const getEmployeeById = (employeeId) => {
   return fetch('http://localhost:8080/employee/' + employeeId)
      .then(result => result.json()).catch(function() {
         return undefined;
      });
};

const getEmployees = () => {
   return fetch('http://localhost:8080/employee/')
      .then(result => result.json());
};

const EmployeeList = () => {
   const [employeesList, setEmployeesList] = useState([]);
   const [employeeId, setEmployeeId] = useState('');

   const handleEmployeesSearch = () => {
      if (isValidNumber(employeeId)) {
         getEmployeeById(employeeId).then( empl => setEmployeesList([empl]));

      } else if (employeeId === '') {
         getEmployees().then(emplList =>setEmployeesList(emplList));
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
            <div><label>Employee Id <input name="employeeId" className="form-control mt-3" type="text" value={employeeId}
                                           onChange={(event) => {
                                              setEmployeeId(event.target.value)
                                           }}/></label></div>
            <div><input className="btn btn-success mt-2 mb-3" type="button" value="Get Employees"
                        onClick={handleEmployeesSearch}></input></div>
         </div>
         <div className="ml-3">
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
                  <Employee key={employee!= undefined && employee.id} employee={employee}/>
               ))}
               </tbody>
            </table>
         </div>
      </div>
   )
};

export default EmployeeList;