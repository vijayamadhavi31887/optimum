'use client';
import useEmployeeStore from '@/store/employee';
import Link from 'next/link';

function ViewEmployee() {
    const employees = useEmployeeStore((state:any) => state.employees);
    const delEmployee = useEmployeeStore((state:any) => state.delEmployee);
    const deleteEmployee = (emp:any) => {
            delEmployee(emp);
    };
  return (
    <div className='bg-sky-100  py-8'>
      <div>
        <h1 className="text-center mb-3">View All Employees</h1>
      <table className="table-auto border-collapse border border-slate-400 text-left w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2 text-sm">Name</th>
            <th className="border border-slate-300 p-2 text-sm">Salary</th>
            <th className="border border-slate-300 p-2 text-sm">Age</th>
            <th className="border border-slate-300 p-2 text-sm">Profile Image</th>
            <th className="border border-slate-300 p-2 text-sm">Options</th>
          </tr>
        </thead>
        <tbody>
        {employees?.map((employee:any) => (
          <tr key={employee.id}>
            <td className="border border-slate-300 p-2 text-sm">{employee.employee_name.length > 25 ? employee.employee_name.substring(0, 24) + "..." : employee.employee_name }</td>
            <td className="border border-slate-300 p-2 text-sm">{employee.employee_salary}</td>
            <td className="border border-slate-300 p-2 text-sm">{employee.employee_age}</td>
            <td className="border border-slate-300 p-2 text-sm">{employee.profile_image && <img src={employee.profile_image} alt="" width="50" height="50" className='rounded'/>} </td>
            <td className="border border-slate-300 p-2 text-sm">
              <Link href={`/edit/${employee.id}?e=${employee.id}`} className={`p-2`}>
                <span className="bg-cyan-600 px-2 py-1 text-white">Edit</span>
              </Link>
              <button type="button" onClick={()=> deleteEmployee(employee.id)}>
                <span className="bg-neutral-700 px-2 py-1 text-white">Delete</span>
                </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ViewEmployee;
