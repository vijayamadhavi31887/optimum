'use client';
import React, { useEffect, useState } from 'react';
import useEmployeeStore from '@/store/employee';

function EditEmployee({ employeeId }:any) {

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');

  const editEmployee = useEmployeeStore((state:any) => state.editEmployee);
  const employees = useEmployeeStore((state:any) => state.employees);

  useEffect(() => {
    const employee = employees.find((emp:any) => emp.id === parseInt(employeeId));
    if (employee) {
      setName(employee.employee_name);
      setSalary(employee.employee_salary);
      setAge(employee.employee_age);
    }
  }, [employeeId, employees]);

  const saveEmployeeChanges = () => {
    const updatedEmployee = {
      id: employeeId,
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
    };
    editEmployee(employeeId, updatedEmployee);
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)} className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
        />
        <button onClick={saveEmployeeChanges} type="button">Save Changes</button>
      </div>
    </div>
  );
}

export default EditEmployee;
