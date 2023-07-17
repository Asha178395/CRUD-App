import React, { useState } from 'react';
import './App.css';
import { AddEmployee } from './Components/AddEmployee';
import { DisplayEmployee } from './Components/DisplayEmployee';
import { useAddEmployeeMutation } from './services/employeesApi';

function App() {
  const [addEmployee] = useAddEmployeeMutation();
  return (
    <div className='text-center'>
      <h1>Employee Details</h1>

      <AddEmployee addEmployee={addEmployee} />

      <DisplayEmployee />
    </div>

  )
}

export default App;
