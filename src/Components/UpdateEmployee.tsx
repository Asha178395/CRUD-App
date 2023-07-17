import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useUpdateEmployeeMutation } from '../services/employeesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

type Employee={
    id:number,
    name:string,
    department:string,
    salary:number,
     age:number
}
interface UpdateEmployeeProps {
    employee: Employee;
    
  }
  

export const UpdateEmployee:React.FC<UpdateEmployeeProps> = ({ employee}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState<Employee>({
    id: employee.id,
    name: employee.name,
    department: employee.department,
    salary: employee.salary,
    age: employee.age
  });

  const [updateEmployee] = useUpdateEmployeeMutation();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateEmployee(updatedEmployee)
      .unwrap()
      .then(() => {

        handleCloseModal();
      })
      .catch((error:any) => {
        console.error(error);
      });
  };

  return (
    <div>
      <FontAwesomeIcon data-testid="update-icon" icon={faEdit} onClick={handleOpenModal} className='updateicon'/>

      <Modal isOpen={isOpen} toggle={handleCloseModal}>
        <ModalHeader className="modal-header" toggle={handleCloseModal}>
          Update Employee Details
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor='employeeName'>Employee Name</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  name="name"
                  id='employeeName'
                  value={updatedEmployee.name}
                  onChange={handleInputChange}
                  className='ml-1'
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor='department'>Department</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  name="department"
                  id='department'
                  value={updatedEmployee.department}
                  onChange={handleInputChange}
                  className='ml-1'
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor='salary'>Salary</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  name="salary"
                  id='salary'
                  value={updatedEmployee.salary}
                  onChange={handleInputChange}
                  className='ml-1'
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor='age'>Age</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  name="age"
                  id='age'
                  value={updatedEmployee.age}
                  onChange={handleInputChange}
                  className='ml-1'
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="button-background-color" onClick={handleSubmit}>
            Submit
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
