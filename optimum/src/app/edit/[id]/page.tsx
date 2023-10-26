'use client';
import React, { useEffect, useState } from 'react';
import useEmployeeStore from '../../../store/employee';
import { useParams, useRouter } from 'next/navigation';

function EditEmployee() {
  const params:any = useParams();
  const router:any = useRouter();

  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const editEmployee = useEmployeeStore((state:any) => state.editEmployee);
  const employees = useEmployeeStore((state:any) => state.employees);

  useEffect(() => {
    const employee = employees.find((emp:any) => emp.id === parseInt(params.id));
    if (employee) {
      setName(employee.employee_name);
      setSalary(employee.employee_salary);
      setAge(employee.employee_age);
      setProfileImage(employee.profile_image);
    }
  }, [params.id, employees]);

  const saveEmployeeChanges = () => {
    const updatedEmployee = {
      id: params.id,
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      profile_image: profileImage,
    };

    editEmployee(params.id, updatedEmployee);
    router.push('/view');
  };

  return (
    <div className='bg-sky-100 h-screen py-8'>
      <h1 className='text-lg font-semibold text-center mb-3'>Edit Employee</h1>
      <div className='w-2/6 mx-auto bg-white p-4 shadow-md text-sm'>
        <form onSubmit={()=> {
          event?.preventDefault();
          saveEmployeeChanges();
        }}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name} className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
              onChange={(e) => setName(e.target.value)}
            />
            <label>Salary</label>
            <input
              type="text"
              placeholder="Salary"
              value={salary} className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
              onChange={(e) => setSalary(e.target.value.replace(/[^0-9]/g, ''))}
            />
            <label>Age</label>
            <input
              type="text"
              placeholder="Age"
              value={age} className='w-full border-gray-400 border p-3 shadow-md mb-3 mt-1'
              onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
            />
            <input
              type="text"
              placeholder="Profile Image"
              value={profileImage} className='w-full border-gray-400 border p-3 shadow-md mb-3 mt-1'
              onChange={(e) => setProfileImage(e.target.value)}
            />
            <div className='text-center'>
              <button type="submit" className='shadow-md w-4/6 my-auto bg-lime-600 inline-block text-center text-white py-2'>Save Employee</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default EditEmployee;
