import React from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAddEmployeeMutation} from '../services/employeesApi';
export const AddEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [Name, setName] = useState<string>('');
    const [Age, setAge] = useState<number|string>('');
    const [Department,setDepartment]=useState<string>('');
    const [Salary,setSalary]=useState<number|string>('');
    const [addEmployee]=useAddEmployeeMutation();
  
    const handleOpenModal = () => {
      setName('');
      setAge('');
      setSalary('');
      setDepartment('');
      setIsOpen(true);
    };
    
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
  
    
    const handleAgeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(event.target.value));
      };
      const handleDepartmentChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setDepartment(event.target.value);
      };
      const handleSalaryChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSalary(Number(event.target.value));
      };
    const handleSubmit = () => {
      const data = {
          name: Name,
          age:Number(Age),
          department:Department,
          salary:Number(Salary)
      };
      (addEmployee(data));
        // console.log(projectName);
        handleCloseModal();
    }; 
  
    return (
      <div>
        <div style={{textAlign:"left"}}>
        <FontAwesomeIcon data-testid="add-icon" icon={faPlus} onClick={handleOpenModal} className='addicon' />
        <p>Add Employee</p>
        </div>
        <Modal isOpen={isOpen} toggle={handleCloseModal}>
          <ModalHeader  className="modal-header" toggle={handleCloseModal}>Enter Employee Details</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
               
              <div className='add-employee-col'>
              <div className="employee-form-label">
                <label >Name</label>
              </div>
              <div className="employee-form-control">
                <input type="text" value={Name} onChange={handleInputChange}  className='ml-1' />
                  
              </div>
              </div>
              <div className='add-employee-col'>
              <div className="employee-form-label">
                <label >Age</label>
              </div>
              <div className="employee-form-control">
                <input type="text" value={Age} onChange={handleAgeChange}  className='ml-1' />
                  
              </div>
              </div>
              <div className='add-employee-col'>
              <div className="employee-form-label">
                <label >Department</label>
              </div>
              <div className="employee-form-control">
                <input type="text" value={Department} onChange={handleDepartmentChange}  className='ml-1' />
                  
              </div>
              </div>
              <div className='add-employee-col'>
              <div className="employee-form-label">
                <label >Salary</label>
              </div>
              <div className="employee-form-control">
                <input type="text" value={Salary} onChange={handleSalaryChange}  className='ml-1' />
                  
              </div>
              </div>  
            </form>
          </ModalBody>
          <ModalFooter>
            <button className='button-background-color' onClick={handleSubmit}>Submit</button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  };

  

