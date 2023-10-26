'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useEmployeeStore from '@/store/employee';

function AddEmployee() {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const router:any = useRouter();
  const employees = useEmployeeStore((state:any) => state.employees);

  const addEmployee = () => {
    const newEmployee :any= {
      id: employees.length + 1,
      employee_name: name,
      employee_salary: parseInt(salary),
      employee_age: parseInt(age),
      profile_image: profileImage,
    };

    employees.push(newEmployee);
    router.push('/view');

    setName('');
    setSalary('');
    setAge('');
  };

  return (
    <div >
      <h1 className='text-lg font-semibold text-center mb-3'>Add Employee</h1>
      <div className='w-2/6 mx-auto bg-white p-4 shadow-md text-sm'>
        <form onSubmit={()=> {
          event?.preventDefault();
          addEmployee();
        }}>
          <input
            type="text"
            placeholder="Name" className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
            value={name} required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Salary" className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
            value={salary} required
            onChange={(e) => setSalary(e.target.value.replace(/[^0-9]/g, ''))}
          />
          <input
            type="number"
            placeholder="Age" className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
            value={age} required
            onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ''))}
          />
          <input
            type="text"
            placeholder="Image" className='w-full border-gray-400 border p-3 shadow-md mb-2 mt-1'
            value={profileImage} required
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <div className='text-center'>
            <button type="submit" className='shadow-md w-4/6 my-auto bg-lime-600 inline-block text-center text-white py-2'>Add Employee</button>
          </div>
          </form>
      </div>
    </div>
  );
}

export default AddEmployee;
