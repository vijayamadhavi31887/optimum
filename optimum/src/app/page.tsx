"use client";

// import useEmployeeStore from "@/store/employee";
import AddEmployee from "./add/page";

export default function Home() {
  // const employees = useEmployeeStore((state:any) => state.employees);

  return (
    <main className='bg-sky-100 h-screen py-8'>
      <AddEmployee></AddEmployee>
    </main>
  );
}
