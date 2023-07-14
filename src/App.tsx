import React, { useState } from 'react';
import './App.css';
import {AddEmployee} from './Components/AddEmployee';
import {DisplayEmployee} from './Components/DisplayEmployee';
import { useEmployeesQuery, useEmployeeQuery,useAddEmployeeMutation,useDeleteEmployeeMutation,useUpdateEmployeeMutation } from './services/employeesApi';

function App() {
 
  return (
    <div className='text-center'>
      <h1>Employee Details</h1>
      
      <AddEmployee/>
      
      <DisplayEmployee/> 
    </div>
            
  )}

export default App;
